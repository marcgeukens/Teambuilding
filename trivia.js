"use strict";
const $=id=>document.getElementById(id);
const norm=s=>s.normalize("NFD").replace(/\p{M}/gu,"").toLowerCase().replace(/[^\p{L}\p{N}]/gu,"");
const now=new Date(), tz="Europe/Brussels";
const parts=Object.fromEntries(new Intl.DateTimeFormat("en",{timeZone:tz,year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(now).map(p=>[p.type,p.value]));
const today=parts.year+"-"+parts.month+"-"+parts.day;
async function boot(){
const res=await fetch("trivia-vragen.json",{cache:"no-store"});
if(!res.ok)throw Error("vragen");
const packs=await res.json();
const day=Object.keys(packs).filter(d=>d<=today).sort().pop();
const pack=packs[day];
if(!Array.isArray(pack)||pack.length!==20)throw Error("ronde");
$("date").textContent=new Intl.DateTimeFormat("nl-BE",{dateStyle:"full",timeZone:"UTC"}).format(new Date(day+"T12:00:00Z"))+(day!==today?" · Laatst beschikbare ronde":"");
const key="marc-trivia-v1-"+day;let entries=[];
try{const saved=JSON.parse(localStorage.getItem(key));if(Array.isArray(saved))entries=saved.slice(0,20).filter(e=>typeof e?.answer==="string"&&typeof e?.ok==="boolean");}catch{}
function show(){
const i=entries.length;
$("progress").value=i;$("next").hidden=true;$("feedback").textContent="";
if(i===20){$("info").textContent="Ronde afgerond";$("form").hidden=true;$("question").textContent=entries.filter(e=>e.ok).length+" / 20";$("review").hidden=false;$("review").replaceChildren(...pack.map((q,j)=>{const item=document.createElement("li");item.textContent=(entries[j].ok?"✓ ":"✗ ")+q[1]+" — "+q[2]+(entries[j].ok?"":" (jij: "+(entries[j].answer||"gepast")+")");return item;}));$("question").focus();return;}
$("info").textContent="Vraag "+(i+1)+" van 20 · "+pack[i][0];
$("question").textContent=pack[i][1];$("answer").value="";$("form").hidden=false;$("question").focus();
}
function submit(answer){
if($("form").hidden||entries.length>=20)return;
const q=pack[entries.length], n=norm(answer);
const ok=!!n&&q.slice(2).some(a=>norm(a)===n);
entries.push({answer,ok});try{localStorage.setItem(key,JSON.stringify(entries));}catch{}
$("progress").value=entries.length;$("form").hidden=true;
$("feedback").textContent=(ok?"Juist! ":"Het juiste antwoord: ")+q[2];
$("next").textContent=entries.length===20?"Bekijk je score":"Volgende vraag";$("next").hidden=false;$("next").focus();
}
$("form").addEventListener("submit",e=>{e.preventDefault();submit($("answer").value.trim());});
$("skip").addEventListener("click",()=>submit(""));
$("next").addEventListener("click",show);show();
}
boot().catch(()=>{$("question").textContent="Quiz niet beschikbaar. Probeer de pagina straks opnieuw te laden.";});