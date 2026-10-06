import {SUPABASE_URL, SUPABASE_KEY} from './config.mjs';
import {mergeRun} from './engine.mjs';
const SESSION_KEY='liam-dagmissie-session-v2';
export class Cloud {
  constructor(sessionKey=SESSION_KEY){this.sessionKey=sessionKey;try{this.session=JSON.parse(localStorage.getItem(this.sessionKey));}catch{this.session=null;}this.refreshing=null;}
  store(session){this.session=session?.access_token?{...session,expires_at:session.expires_at||Math.floor(Date.now()/1000)+(session.expires_in||3600)}:null;try{if(this.session)localStorage.setItem(this.sessionKey,JSON.stringify(this.session));else localStorage.removeItem(this.sessionKey);}catch{}}
  async request(path,{method='GET',body,auth=false,headers={}}={}){
    if(auth){if(!this.session)throw new Error('Meld je opnieuw aan.');if(this.session.expires_at<Date.now()/1000+60)await this.refresh();}
    const response=await fetch(SUPABASE_URL+path,{method,headers:{apikey:SUPABASE_KEY,'Content-Type':'application/json',...(auth?{Authorization:'Bearer '+this.session.access_token}:{}),...headers},body:body===undefined?undefined:JSON.stringify(body),signal:AbortSignal.timeout(15000)});
    const data=await response.json().catch(()=>null);
    if(!response.ok){const error=new Error(data?.msg||data?.message||data?.error_description||'Verbinding mislukt.');error.status=response.status;error.code=data?.code||data?.error_code;throw error;}return data;
  }
  async refresh(){if(this.refreshing)return this.refreshing;this.refreshing=(async()=>{try{const session=await this.request('/auth/v1/token?grant_type=refresh_token',{method:'POST',body:{refresh_token:this.session.refresh_token}});this.store(session);}catch(error){if(error.status===400||error.status===401)this.store(null);throw error;}finally{this.refreshing=null;}})();return this.refreshing;}
  async login(email,password){const s=await this.request('/auth/v1/token?grant_type=password',{method:'POST',body:{email,password}});this.store(s);return s;}
  async signup(email,password){const s=await this.request('/auth/v1/signup',{method:'POST',body:{email,password}});if(s.access_token)this.store(s);return s;}
  async logout(){try{if(this.session)await this.request('/auth/v1/logout',{method:'POST',auth:true});}finally{this.store(null);}}
  async validate(){if(!this.session)return;try{const user=await this.request('/auth/v1/user',{auth:true});this.session.user=user;this.store(this.session);}catch(error){if(error.status===401)this.store(null);throw error;}}
  async listRuns(){return this.request('/rest/v1/exercise_runs?select=id,progress,revision&quiz_key=like.dagmissie-v*&deleted_at=is.null&order=started_at.desc',{auth:true});}
  async deleteRun(id){return this.request('/rest/v1/exercise_runs?id=eq.'+encodeURIComponent(id),{method:'PATCH',auth:true,headers:{Prefer:'return=minimal'},body:{active:false,deleted_at:new Date().toISOString()}});}
  async syncRun(input){
    const uid=this.session.user.id;
    if(input.ownerId&&input.ownerId!==uid)return input;
    let run={...input,ownerId:uid};
    const path='/rest/v1/exercise_runs?id=eq.'+encodeURIComponent(run.id)+'&select=id,progress,revision';
    let records=await this.request(path,{auth:true});
    if(!records.length){
      try{await this.request('/rest/v1/exercise_runs',{method:'POST',auth:true,headers:{Prefer:'return=minimal'},body:{id:run.id,owner_id:uid,quiz_key:'dagmissie-v3:'+run.date,quiz_title:run.title,quiz_date:run.date,mode:run.attempt>1?'retry':'first',started_at:run.startedAt,total_questions:run.questions.length,progress:{app:'dagmissie-v3',run:{...run,answers:Array(run.questions.length).fill(null),index:0,finished:false,completedAt:null}},revision:0}});}catch(e){if(e.status!==409)throw e;}
      records=await this.request(path,{auth:true});
    }
    if(!records.length)throw new Error('Deze ronde kon niet worden gekoppeld.');
    for(let attempt=0;attempt<2;attempt++){
      const remote=records[0];
      if(remote.progress?.run)run=mergeRun(run,remote.progress.run);
      const answers=run.answers.flatMap((a,i)=>a?[{question_index:i,phase:'first',selected_index:a.selectedIndex,category:run.questions[i].area,question_text:run.questions[i].prompt,chosen_answer:a.value,correct_answer:run.questions[i].correct,is_correct:a.correct}]:[]);
      try{await this.request('/rest/v1/rpc/save_exercise_progress',{method:'POST',auth:true,body:{p_run_id:run.id,p_revision:remote.revision,p_progress:{app:'dagmissie-v3',fase:run.finished?'uitslag':'vragen',run},p_answers:answers}});return {...run,synced:true};}
      catch(e){if(e.code!=='40001'||attempt===1)throw e;records=await this.request(path,{auth:true});}
    }
  }
}
export function friendlyError(error){
  if(error.code==='invalid_credentials')return 'E-mailadres of wachtwoord klopt niet.';
  if(error.code==='email_not_confirmed')return 'Bevestig eerst je e-mailadres via de mail van je oefenaccount.';
  if(error.code==='over_email_send_rate_limit')return 'Er zijn net te veel mails gevraagd. Probeer het later opnieuw.';
  if(error.message?.includes('Email address')||error.message?.includes('email address')||error.code==='email_address_not_authorized')return 'Dit e-mailadres kan momenteel geen bevestigingsmail ontvangen. Aanmelden met een bestaand account kan wel. Je kunt ook verder oefenen zonder account.';
  if(error.code==='user_already_exists')return 'Dit account bestaat al. Kies Aanmelden.';
  if(error.code==='weak_password')return 'Kies een sterker wachtwoord met minstens 8 tekens.';
  if(error.name==='TypeError'||error.name==='TimeoutError'||error.name==='AbortError')return 'Geen verbinding. Je kunt verder oefenen; opgeslagen resultaten worden later gekoppeld.';
  return 'Dat lukte niet. Probeer opnieuw of oefen verder zonder account.';
}
