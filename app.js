/* Public browser key; access is enforced by database ownership policies. */
const db = window.supabase?.createClient('https://rrsoralrmfvqnvxsoxie.supabase.co','sb_publishable_D34zxr4DscsKHhAmtBcxZw_5FW5YpHS');
const $ = id => document.getElementById(id);
const sleutel = quizMeta.key;
const leeg = () => ({fase:'eerste',positie:0,antwoorden:questions.map(()=>null),herkansing:{}});
let guest=false;
const guestKey='liam-guest:'+sleutel;
let user, run, voortgang=leeg(), busy=false, pending=null, reeks=[], vergrendeld=false;
const status = text => { $('cloud-status').textContent=text; };
const escapeHtml = text => String(text).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function fail(error) { console.error('Opslaan/ophalen mislukt:',error?.code || 'netwerk'); status('Verbinding mislukt. Probeer opnieuw. Je eerste antwoord blijft staan zolang deze pagina open is.'); $('save-retry').hidden=false; }
function validateState(s) {
 if (!s || !['eerste','uitslag','herkansing','klaar'].includes(s.fase)) return leeg();
 return {...leeg(),...s,antwoorden:questions.map((q,i)=>Number.isInteger(s.antwoorden?.[i])&&s.antwoorden[i]>=0&&s.antwoorden[i]<q.o.length?s.antwoorden[i]:null),herkansing:s.herkansing&&typeof s.herkansing==='object'?s.herkansing:{},positie:Number.isInteger(s.positie)&&s.positie>=0?s.positie:0};
}
async function newRun() {
 const {data,error}=await db.from('exercise_runs').insert({owner_id:user.id,quiz_key:sleutel,quiz_title:quizMeta.title,quiz_date:quizMeta.date,total_questions:questions.length,progress:leeg()}).select().single();
 if(error) {
  if(error.code==='23505') return loadRun();
  throw error;
 }
 run=data; voortgang=leeg(); render(); status("☁️ Nieuwe ronde online aangemaakt.");
}
async function loadRun() {
 status('Je voortgang wordt opgehaald…');
 const {data,error}=await db.from('exercise_runs').select('*,exercise_answers(*)').eq('quiz_key',sleutel).eq('active',true).is('deleted_at',null).order('started_at',{ascending:false}).limit(1).maybeSingle();
 if(error) throw error;
 if(!data) return newRun();
 run=data; voortgang=validateState(data.progress);
 // Immutable answer rows are authoritative, including after another device saves.
 voortgang.antwoorden=questions.map(()=>null); voortgang.herkansing={};
 for(const a of data.exercise_answers||[]) {
  if(!questions[a.question_index] || a.selected_index<0 || a.selected_index>=questions[a.question_index].o.length) continue;
  if(a.phase==='first') voortgang.antwoorden[a.question_index]=a.selected_index;
  else voortgang.herkansing[a.question_index]=a.selected_index;
 }
 pending=null; $('save-retry').hidden=true; render(); status('☁️ Je voortgang staat online.');
}
function answerRow(index,choice,phase) {
 const q=questions[index];
 return {question_index:index,selected_index:choice,phase,category:q.cat,question_text:q.q.replace(/<[^>]*>/g,' '),chosen_answer:q.o[choice],correct_answer:q.o[q.a],is_correct:choice===q.a};
}
async function save(next,answers=[]) {
 if(guest) {
  guestTouched=true;
  voortgang=structuredClone(next);
  try{localStorage.setItem(guestKey,JSON.stringify(voortgang));status('Op dit toestel bewaard. Meld je aan voor online opslag.');}
  catch(_){status('Je oefent zonder aanmelden. Je voortgang blijft alleen in deze geopende pagina.');}
  busy=false;pending=null;$('volgende').disabled=false;return true;
 }

 busy=true; pending={next:structuredClone(next),answers}; $('volgende').disabled=true;
 status('☁️ Even bewaren…');
 const {data,error}=await db.rpc('save_exercise_progress',{p_run_id:run.id,p_revision:run.revision,p_progress:next,p_answers:answers});
 busy=false;
 if(error) {
  if(error.code==='40001'||error.code==='23505') { await loadRun(); status('Voortgang bijgewerkt vanaf het andere toestel.'); return false; }
  fail(error); return false;
 }
 run.revision=data; voortgang=next; pending=null; $('save-retry').hidden=true; $('volgende').disabled=false; status('☁️ Online bewaard.'); return true;
}
const gemisteIndices=()=>questions.map((_,i)=>i).filter(i=>voortgang.antwoorden[i]!==questions[i].a);
function render() {
 $('practice').hidden=false; $('resultaat').style.display='none'; $('opnieuw').hidden=true; $('feedback').hidden=true; $('volgende').hidden=true;
 if(voortgang.fase==='uitslag'||voortgang.fase==='klaar') return toonResultaat();
 reeks=voortgang.fase==='eerste'?questions.map((_,i)=>i):gemisteIndices();
 if(!reeks.length) {voortgang.fase='klaar'; return toonResultaat();}
 voortgang.positie=Math.min(voortgang.positie,reeks.length-1); toonVraag();
}
function toonVraag() {
 const index=reeks[voortgang.positie],q=questions[index]; vergrendeld=false;
 $('teller').textContent=`Vraag ${voortgang.positie+1} van ${reeks.length}`; $('balk').style.width=`${voortgang.positie/reeks.length*100}%`;
 $('feedback').hidden=true; $('volgende').hidden=true;
 $('quiz').innerHTML=`<article class="kaart"><div class="vraag"><span class="nummer">${index+1}</span>${q.q}</div>${q.o.map((o,i)=>`<button class="keuze" type="button" data-keuze="${i}">${escapeHtml(o)}</button>`).join('')}</article>`;
 const previous=voortgang.fase==='eerste'?voortgang.antwoorden[index]:voortgang.herkansing[index];
 if(Number.isInteger(previous)) toonAntwoord(previous);
}
function toonAntwoord(choice) {
 vergrendeld=true; const q=questions[reeks[voortgang.positie]],ok=choice===q.a,card=$('quiz').querySelector('.kaart');
 card.querySelectorAll('.keuze').forEach(b=>{b.disabled=true;}); card.classList.add(ok?'goed':'fout');
 card.querySelector(`[data-keuze="${q.a}"]`).classList.add('juist'); if(!ok)card.querySelector(`[data-keuze="${choice}"]`).classList.add('mis');
 $('feedback').className=ok?'goed':'fout'; $('feedback-titel').textContent=ok?'Juist! 🌟':'Goed geprobeerd! 💪';
 $('feedback-tekst').textContent=ok?`Knap gewerkt, Liam! ${q.e}`:`Het juiste antwoord is: ${q.o[q.a]}. ${q.e}`; $('feedback').hidden=false;
 $('balk').style.width=`${(voortgang.positie+1)/reeks.length*100}%`;
 $('volgende').textContent=voortgang.positie===reeks.length-1?'Bekijk mijn uitslag →':'Volgende vraag →'; $('volgende').hidden=false; $('volgende').disabled=busy||!!pending;
}
function toonResultaat() {
 $('quiz').innerHTML=''; $('teller').textContent='Alle sportopdrachten voltooid!'; $('balk').style.width='100%';
 $('feedback').hidden=true; $('volgende').hidden=true;
 const score=questions.filter((q,i)=>voortgang.antwoorden[i]===q.a).length;
 $('score').textContent=`${score} op ${questions.length}`;
 $('boodschap').textContent=score===questions.length?'Fantastisch, Liam! 🏆':score>=9?'Heel sterk gewerkt! 🔥':score>=6?'Knap doorgezet! Oefen je gemiste vragen nog eens. ✨':'Dapper geprobeerd! Elke vraag die je oefent, maakt je sterker. 🪶';
 if(voortgang.fase==='klaar') $('boodschap').textContent+=` Bij de herkansing had je ${gemisteIndices().filter(i=>voortgang.herkansing[i]===questions[i].a).length} van de ${gemisteIndices().length} gemiste vragen juist.`;
 $('resultaat').style.display='block'; $('opnieuw').hidden=voortgang.fase!=='uitslag'||score===questions.length;
}
$('quiz').addEventListener('click',async event=>{
 const b=event.target.closest('.keuze'); if(!b||vergrendeld||busy||pending) return;
 const i=reeks[voortgang.positie],choice=Number(b.dataset.keuze),next=structuredClone(voortgang),phase=voortgang.fase==='eerste'?'first':'retry';
 vergrendeld=true; if(phase==='first')next.antwoorden[i]=choice;else next.herkansing[i]=choice;
 busy=true; toonAntwoord(choice); $('feedback').scrollIntoView({behavior:'smooth',block:'center'});
 try { await save(next,[answerRow(i,choice,phase)]); } catch(error) {busy=false;fail(error);}
});
$('volgende').addEventListener('click',async()=>{
 if(!vergrendeld||busy||pending)return;
 const next=structuredClone(voortgang); next.positie++;
 if(next.positie>=reeks.length)next.fase=next.fase==='eerste'?'uitslag':'klaar';
 try {if(await save(next)){render();window.scrollTo({top:0,behavior:'smooth'});}}catch(error){busy=false;fail(error);}
});
$('opnieuw').addEventListener('click',async()=>{
 if(busy||pending)return;const next=structuredClone(voortgang);next.fase='herkansing';next.positie=0;
 try {if(await save(next))render();}catch(error){busy=false;fail(error);}
});
$('save-retry').addEventListener('click',async()=>{
 if(busy)return;
 try {if(pending){const p=pending;if(await save(p.next,p.answers))render();}else await loadRun();}catch(error){busy=false;fail(error);}
});
$('reset-test').addEventListener('click',async()=>{
 if(busy||pending)return;
 if(guest){if(!confirm('Zonder aanmelden opnieuw beginnen? De antwoorden van deze ronde op dit toestel worden vervangen.'))return;voortgang=leeg();await save(voortgang);render();return;}
 if(!user)return;
 if(!confirm('Een nieuwe ronde starten? Je eerdere antwoorden en score blijven online bewaard.'))return;
 busy=true;
 try {const {error}=await db.from('exercise_runs').update({active:false}).eq('id',run.id);if(error)throw error;await newRun();status('Nieuwe ronde gestart. Je vorige ronde blijft bewaard.');}catch(error){fail(error);}finally{busy=false;}
});
let trashVisible=false;
async function showHistory(){
 if(!user)return;
 $('history-content').textContent='Je resultaten worden opgehaald…';
 $('history-title').textContent=trashVisible?'Prullenbak':'Mijn resultaten';
 $('trash-toggle').textContent=trashVisible?'📚 Terug naar resultaten':'🗑️ Prullenbak';
 $('delete-all').hidden=trashVisible;
 try{
  let query=db.from('exercise_runs').select('id,quiz_title,quiz_date,total_questions,completed_at,started_at,deleted_at,exercise_answers(category,is_correct,phase)').order('started_at',{ascending:false}).limit(100);
  query=trashVisible?query.not('deleted_at','is',null):query.is('deleted_at',null);
  const {data:rows,error}=await query;if(error)throw error;
  const data=trashVisible?rows:rows.filter(r=>r.exercise_answers?.length||r.completed_at);
  $('delete-all').disabled=!data.length;
  $('history-content').innerHTML=data.length?data.map(r=>{
   const a=(r.exercise_answers||[]).filter(a=>a.phase==='first'),score=a.filter(a=>a.is_correct).length;
   const cats=[...new Set(a.map(a=>a.category))].map(c=>`${escapeHtml(c)}: ${a.filter(a=>a.category===c&&a.is_correct).length}/${a.filter(a=>a.category===c).length}`).join(' · ');
   return `<article class="kaart"><strong>${escapeHtml(r.quiz_title)}</strong><p>${escapeHtml(new Date(r.started_at).toLocaleString('nl-BE'))} · ${score}/${r.total_questions} ${a.length<r.total_questions?`(${a.length} beantwoord)`:'✓'}</p><p class="klein">${cats}</p><button class="site-knop" type="button" data-${trashVisible?'restore':'delete'}="${escapeHtml(r.id)}">${trashVisible?'↩ Herstellen':'🗑️ Deze ronde wissen'}</button></article>`;
  }).join(''):trashVisible?'De prullenbak is leeg.':'Nog geen oefenrondes.';
 }catch(error){$('history-content').textContent='Ophalen mislukt. Sluit dit overzicht en probeer opnieuw.';}
}
$('history-toggle').addEventListener('click',async()=>{
 $('history').hidden=!$('history').hidden;if(!$('history').hidden){trashVisible=false;await showHistory();}
});
$('trash-toggle').addEventListener('click',async()=>{if(busy)return;trashVisible=!trashVisible;await showHistory();});
async function changeHistory(id,restore=false){
 if(!user||busy||pending)return;
 if(!restore&&!confirm(id?'Deze oefenronde wissen? Je kunt ze terughalen via de prullenbak.':'Alle opgeslagen oefenrondes wissen? Je kunt ze terughalen via de prullenbak.'))return;
 busy=true;
 try{
  let query=db.from('exercise_runs').update(restore?{deleted_at:null}:{deleted_at:new Date().toISOString(),active:false});
  query=id?query.eq('id',id):query.is('deleted_at',null);
  const {data,error}=await query.select('id');if(error)throw error;
  if(!data?.length)throw new Error('Geen ronde gewijzigd');
  if(!restore&&data.some(r=>r.id===run?.id)){
   await newRun();
  }
  status(restore?'Oefenronde hersteld.':'Resultaten gewist. Je kunt ze herstellen via de prullenbak.');
  await showHistory();
 }catch(error){status('De wijziging is niet gelukt. Probeer opnieuw.');}
 finally{busy=false;}
}
$('history-content').addEventListener('click',event=>{
 const button=event.target.closest('[data-delete],[data-restore]');if(!button)return;
 changeHistory(button.dataset.delete||button.dataset.restore,!!button.dataset.restore);
});
$('delete-all').addEventListener('click',()=>changeHistory(null));
$('import-local').addEventListener('click',async()=>{
 if(busy||pending||voortgang.antwoorden.some(Number.isInteger))return;
 let old;try{old=JSON.parse(localStorage.getItem(sleutel));}catch(_){return;}
 if(!old)return;if(!confirm('De antwoorden die nog op dit toestel staan in deze online ronde bewaren?'))return;
 const next=validateState(old),rows=[];
 next.antwoorden.forEach((c,i)=>{if(Number.isInteger(c))rows.push(answerRow(i,c,'first'));});
 Object.entries(next.herkansing).forEach(([i,c])=>{if(questions[i]&&Number.isInteger(c)&&c>=0&&c<questions[i].o.length)rows.push(answerRow(Number(i),c,'retry'));});
 try{if(await save(next,rows)){$('import-local').hidden=true;render();}}catch(error){busy=false;fail(error);}
});
$('login-form').addEventListener('submit',async event=>{
 event.preventDefault();if(!db)return;const button=$('login-submit');button.disabled=true;$('login-message').textContent='Aanmeldlink aanvragen…';
 try{const {error}=await db.auth.signInWithOtp({email:$('login-email').value.trim(),options:{emailRedirectTo:'https://www.teambuildingprom23klasa.be/'}});if(error)throw error;$('login-message').textContent='Open de aanmeldlink in je e-mail op dit toestel. Daarna kun je oefenen.';}catch(error){$('login-message').textContent=error?.status===429?'Er zijn te veel aanvragen. Wacht even en probeer later opnieuw.':'Aanmeldmail kon niet worden verstuurd. Probeer later opnieuw of laat papa de aanmelding nakijken.';}finally{button.disabled=false;}
});
$('logout').addEventListener('click',async()=>{if(busy||pending)return;await db.auth.signOut({scope:'local'});location.reload();});
let guestTouched=false;
function startGuest(){
 guest=true;user=null;run=null;
 try{voortgang=validateState(JSON.parse(localStorage.getItem(guestKey)));}catch(_){voortgang=leeg();}
 $('login-panel').hidden=true;$('account-bar').hidden=true;
 $('storage-note').textContent='Zonder aanmelden worden je resultaten alleen op dit toestel bewaard.';
 render();status('');
}
$('guest-start').addEventListener('click',()=>{ $('login-panel').hidden=true; });
$('guest-login').addEventListener('click',()=>{
 if(user){$('account-bar').hidden=!$('account-bar').hidden;}
 else{$('login-panel').hidden=!$('login-panel').hidden;}
});
startGuest();
async function boot(){
 if(!db){$('login-message').textContent='Online aanmelden is momenteel niet beschikbaar. Je kunt wel gewoon oefenen.';return;}
 const {data,error}=await db.auth.getUser();
 if(error||!data.user||guestTouched)return;
 guest=false;
 user=data.user;$('login-panel').hidden=true;$('account-bar').hidden=true;$('account-email').textContent=user.email;$('guest-login').textContent='Account';$('storage-note').textContent='Je eerste antwoorden en score blijven online bewaard. Een herkansing verandert je oorspronkelijke score niet.';
 try{await loadRun();let old;try{old=JSON.parse(localStorage.getItem(sleutel));}catch(_){}$('import-local').hidden=!(old?.antwoorden?.some(Number.isInteger))||voortgang.antwoorden.some(Number.isInteger);}catch(error){fail(error);}
}
boot();
window.addEventListener('online',()=>{if(user&&!busy&&!pending)loadRun().catch(fail);});

window.addEventListener('beforeunload',event=>{if(busy||pending){event.preventDefault();event.returnValue='';}});
