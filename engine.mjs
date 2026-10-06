import {ACTIVE_DATE,DAILY_CONTENT} from './daily.mjs';

export const VERSION = 3;
export const AREAS = {
  math: { name:'Rekenen', icon:'＋', color:'mint' },
  language: { name:'Taal & lezen', icon:'Aa', color:'peach' },
  explore: { name:'Slim ontdekken', icon:'✦', color:'lilac' },
  // Oudere resultaten blijven zo leesbaar.
  spell: { name:'Woorden & spelling', icon:'Aa', color:'peach' },
  read: { name:'Begrijpend lezen', icon:'▤', color:'lilac' }
};

export function dayKey(date = new Date()) {
  const parts = new Intl.DateTimeFormat('en-CA', {timeZone:'Europe/Brussels',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(date);
  const get = type => parts.find(p => p.type === type).value;
  return `${get('year')}-${get('month')}-${get('day')}`;
}
export function missionKey(date = new Date()) {
  return ACTIVE_DATE && DAILY_CONTENT[ACTIVE_DATE] ? ACTIVE_DATE : dayKey(date);
}
export function random(seedText) {
  let seed = 2166136261;
  for (const c of seedText) { seed ^= c.charCodeAt(0); seed = Math.imul(seed,16777619); }
  return () => { seed += 0x6D2B79F5; let t = seed; t = Math.imul(t^(t>>>15),t|1); t ^= t+Math.imul(t^(t>>>7),t|61); return ((t^(t>>>14))>>>0)/4294967296; };
}
export function shuffle(items, rng) {
  const a = [...items];
  for(let i=a.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[a[i],a[j]]=[a[j],a[i]];}
  return a;
}
const STORIES = [
  {title:'Het geheim van het sterrenbos', text:'Liam en Noor wandelen in het bos. Onder een boom vinden ze een doosje. Er zitten drie glanzende stenen in. Noor legt het doosje terug. “Misschien komt de eigenaar het zoeken”, zegt ze.', questions:[['Waar vinden Liam en Noor het doosje?',['Onder een boom.','In de klas.','Op het strand.'],0,'In de tekst staat: onder een boom.'],['Hoeveel stenen zitten er in?',['Drie.','Twee.','Vier.'],0,'Er zitten drie glanzende stenen in het doosje.'],['Waarom legt Noor het doosje terug?',['De eigenaar kan het komen zoeken.','Het doosje is leeg.','Ze wil de stenen tellen.'],0,'Noor denkt aan de persoon van wie het doosje is.']]},
  {title:'De kleine drakenbakker',text:'Draakje Pip bakt koekjes met opa. Eerst mengen ze het deeg. Daarna maken ze sterren. Opa zet de koekjes in de oven. Pip wacht even. De koekjes zijn nog te warm om op te eten.',questions:[['Wat doen Pip en opa eerst?',['Het deeg mengen.','De koekjes eten.','De oven uitzetten.'],0,'Eerst mengen ze het deeg.'],['Welke vorm hebben de koekjes?',['Sterren.','Rondjes.','Vierkanten.'],0,'Ze maken sterren van het deeg.'],['Waarom moet Pip wachten?',['De koekjes zijn nog te warm.','Opa is niet thuis.','Er is geen deeg.'],0,'Warme koekjes moeten eerst afkoelen.']]},
  {title:'Een hut voor de feniksen',text:'De Fonkelende Feniksen bouwen een hut in de klas. Mila brengt een groot laken mee. Liam zet vier stoelen klaar. Ze leggen het laken over de stoelen. In de hut lezen ze samen een boek.',questions:[['Wie brengt het laken mee?',['Mila.','Liam.','De juf.'],0,'Mila brengt een groot laken mee.'],['Waar leggen ze het laken?',['Over de stoelen.','Onder de tafel.','In een kast.'],0,'Het laken ligt over de stoelen.'],['Wat doen ze in de hut?',['Samen een boek lezen.','Een taart bakken.','Voetballen.'],0,'In de laatste zin lezen ze samen een boek.']]},
  {title:'Op zoek naar de kat',text:'Noor zoekt haar kat Muis. Ze kijkt onder het bed en achter de bank. Dan hoort ze zacht gemiauw. Muis zit in een lege doos bij het raam. Noor aait de kat. Muis begint te spinnen.',questions:[['Hoe heet de kat?',['Muis.','Noor.','Pip.'],0,'Noors kat heet Muis.'],['Waar vindt Noor de kat?',['In een doos bij het raam.','Onder het bed.','Achter de bank.'],0,'Daar vindt ze Muis nadat ze gemiauw hoort.'],['Hoe weet Noor dat de kat dichtbij is?',['Ze hoort gemiauw.','Ze hoort een bel.','Ze ziet pootjes in de tuin.'],0,'Het gemiauw helpt haar om de kat te vinden.']]},
  {title:'De regenmissie',text:'Het regent buiten. Liam trekt zijn laarzen aan. Hij neemt een paraplu mee naar school. Bij de poort staat Sam zonder jas. Liam houdt de paraplu boven hen allebei. Zo blijven hun hoofden droog.',questions:[['Wat trekt Liam aan?',['Laarzen.','Sandalen.','Schaatsen.'],0,'Liam trekt zijn laarzen aan.'],['Waar ontmoet hij Sam?',['Bij de schoolpoort.','In de winkel.','Op het strand.'],0,'Sam staat bij de poort.'],['Waarom delen ze de paraplu?',['Om droog te blijven.','Om sneller te lopen.','Om de zon te zien.'],0,'De paraplu houdt de regen tegen.']]},
  {title:'Zaadjes in de klas',text:'De juf geeft elk kind een potje en een zaadje. Liam stopt het zaadje in de aarde. Hij geeft een beetje water. Het potje staat bij het raam. Na een week ziet hij een groen blaadje.',questions:[['Wat stopt Liam in de aarde?',['Een zaadje.','Een koekje.','Een steen.'],0,'Hij stopt het zaadje in de aarde.'],['Waar staat het potje?',['Bij het raam.','In een donkere kast.','Op de speelplaats.'],0,'Het potje staat bij het raam.'],['Wat ziet Liam na een week?',['Een groen blaadje.','Een rode appel.','Een grote boom.'],0,'Na een week verschijnt een groen blaadje.']]},
  {title:'Een dag op dino-eiland',text:'Dino Daan wil naar het meer. Hij volgt de blauwe pijlen. Onderweg plukt hij een appel. Bij het meer ontmoet hij zijn zus. Samen zitten ze op een steen en kijken naar de vissen.',questions:[['Waar wil Daan naartoe?',['Naar het meer.','Naar school.','Naar de maan.'],0,'Daan wil naar het meer.'],['Welke pijlen volgt hij?',['De blauwe.','De rode.','De groene.'],0,'Hij volgt de blauwe pijlen.'],['Wie ontmoet Daan?',['Zijn zus.','Zijn opa.','Zijn juf.'],0,'Bij het meer ontmoet hij zijn zus.']]},
  {title:'Een boek voor de trein',text:'Liam gaat met papa op reis. Voor ze vertrekken kiest hij een boek over de ruimte. Op de trein leest hij over de maan. Papa zegt dat ze bijna moeten uitstappen. Liam legt een kaartje tussen de bladzijden.',questions:[['Waar leest Liam?',['Op de trein.','Op een boot.','In de klas.'],0,'Liam leest op de trein.'],['Waarover gaat het boek?',['De ruimte.','Voetbal.','De zee.'],0,'Het boek gaat over de ruimte en de maan.'],['Waarom legt hij een kaartje in het boek?',['Om te onthouden waar hij was.','Om een bladzijde weg te gooien.','Om het boek te betalen.'],0,'Het kaartje dient als bladwijzer.']]},
  {title:'Het verloren brooddoosje',text:'Mila vindt een brooddoos op de speelplaats. Er staat “Sam” op. Ze geeft de doos aan de juf. De juf roept Sam. Hij is blij, want nu kan hij zijn boterhammen eten.',questions:[['Waar vindt Mila de brooddoos?',['Op de speelplaats.','In het bos.','Op de bus.'],0,'Mila vindt de doos op de speelplaats.'],['Van wie is de brooddoos?',['Van Sam.','Van Mila.','Van de juf.'],0,'De naam Sam staat erop.'],['Waarom is Sam blij?',['Hij heeft zijn eten terug.','Hij mag naar huis.','Hij krijgt een nieuwe fiets.'],0,'Met zijn brooddoos terug kan hij zijn boterhammen eten.']]},
  {title:'De sterrenlamp',text:'Opa geeft Liam een lamp met kleine sterren. Overdag zie je de sterren haast niet. Als het donker wordt, zet Liam de lamp aan. Er verschijnen lichtjes op het plafond. Liam telt er zeven.',questions:[['Van wie krijgt Liam de lamp?',['Van opa.','Van Sam.','Van de juf.'],0,'Opa geeft Liam de sterrenlamp.'],['Wanneer zet hij de lamp aan?',['Als het donker wordt.','Tijdens de middag.','Op de speelplaats.'],0,'Liam zet de lamp aan als het donker wordt.'],['Hoeveel lichtjes telt Liam?',['Zeven.','Zes.','Acht.'],0,'Hij telt zeven lichtjes op het plafond.']]},
  {title:'De picknick',text:'Noor en Liam gaan picknicken in het park. Ze nemen water en broodjes mee. Onder een grote boom spreiden ze een deken uit. Dan begint het te druppelen. Ze pakken alles in en lopen naar huis.',questions:[['Waar gaan ze picknicken?',['In het park.','In de bib.','Op school.'],0,'Ze picknicken in het park.'],['Waar leggen ze de deken?',['Onder een boom.','In de vijver.','Op een bank.'],0,'Ze spreiden de deken uit onder een grote boom.'],['Waarom gaan ze naar huis?',['Het begint te regenen.','Ze zijn hun schoenen kwijt.','De boom valt om.'],0,'Het begint te druppelen: er komt regen.']]},
  {title:'De slimme brug',text:'Draakje Pip wil over een beek. Het water is te diep. Hij zoekt een brede plank. Met hulp van Noor legt hij die over het water. Ze stappen voorzichtig over hun kleine brug.',questions:[['Wat ligt er op hun pad?',['Een beek.','Een berg.','Een weg.'],0,'Pip wil over een beek.'],['Wat gebruiken ze als brug?',['Een plank.','Een jas.','Een boek.'],0,'Ze leggen een brede plank over het water.'],['Hoe stappen ze over de brug?',['Voorzichtig.','Met hun ogen dicht.','Al springend.'],0,'De laatste zin zegt dat ze voorzichtig stappen.']]},
  {title:'Een helpende hand',text:'Sam laat een doos kleurpotloden vallen. De potloden rollen over de vloer. Liam helpt om ze op te rapen. Ze leggen alle kleuren terug in de doos. Sam zegt: “Dank je, nu kunnen we weer tekenen!”',questions:[['Wat laat Sam vallen?',['Een doos kleurpotloden.','Een stapel boeken.','Een brooddoos.'],0,'Sam laat zijn kleurpotloden vallen.'],['Wie helpt Sam?',['Liam.','Opa.','Noor.'],0,'Liam helpt om de potloden op te rapen.'],['Wat willen ze daarna doen?',['Tekenen.','Slapen.','Zwemmen.'],0,'Sam zegt dat ze weer kunnen tekenen.']]},
  {title:'De wandeling met opa',text:'Liam wandelt met opa langs de rivier. Ze zien een boot met een rode vlag. Opa neemt een foto. Daarna kopen ze elk een ijsje. Liam kiest aardbei, opa kiest vanille.',questions:[['Waar wandelen ze?',['Langs de rivier.','Door de klas.','Op het strand.'],0,'Ze wandelen langs de rivier.'],['Welke kleur heeft de vlag?',['Rood.','Blauw.','Geel.'],0,'De boot heeft een rode vlag.'],['Welk ijsje kiest Liam?',['Aardbei.','Vanille.','Chocolade.'],0,'Liam kiest aardbei en opa kiest vanille.']]}
];
const SPELLING = [
 ['Welke schrijfwijze is juist?',['school','schol','sgool'],0,'School schrijf je met sch en oo.'],
 ['Welk woord past? De ___ is rond.',['maan','man','men'],0,'Maan heeft een lange aa-klank.'],
 ['Welke zin is netjes geschreven?',['Liam speelt buiten.','liam speelt buiten','Liam speelt buiten'],0,'Een zin begint met een hoofdletter en eindigt met een punt.'],
 ['Welk woord rijmt op boot?',['groot','boek','boom'],0,'Boot en groot eindigen op dezelfde klank.'],
 ['Welke schrijfwijze is juist?',['vriend','vriemd','vriint'],0,'Vriend schrijf je met ie en eind-d.'],
 ['Maak het woord af: b__m.',['oo','aa','ee'],0,'B + oo + m maakt boom.'],
 ['Welk woord heeft een lange ee-klank?',['steen','stem','ster'],0,'Steen heeft een lange ee-klank.'],
 ['Welke schrijfwijze is juist?',['fiets','fietsj','fiits'],0,'Fiets schrijf je met ie, t en s.'],
 ['Welk woord rijmt op huis?',['muis','haas','hond'],0,'Huis en muis hebben dezelfde eindklank.'],
 ['Maak het woord af: sch__l.',['oo','aa','uu'],0,'Sch + oo + l maakt school.'],
 ['Welke schrijfwijze is juist?',['boek','boeck','buk'],0,'Boek schrijf je met oe en k.'],
 ['Welke zin is netjes geschreven?',['Noor leest een boek.','noor leest een boek.','Noor leest een boek'],0,'Noor krijgt een hoofdletter. Achter de zin staat een punt.'],
 ['Welk woord rijmt op kat?',['mat','koe','kip'],0,'Kat en mat rijmen.'],
 ['Welke schrijfwijze is juist?',['straat','strat','straad'],0,'Straat heeft een lange aa en eindigt op t.'],
 ['Maak het woord af: b__k.',['oe','aa','uu'],0,'B + oe + k maakt boek.'],
 ['Welke schrijfwijze is juist?',['trein','trijn','treen'],0,'Trein schrijf je met ei.']
];
const CHUNKS = [
 ['win · ter','winter',['winder','witter']],['speel · goed','speelgoed',['speelboot','spiegel']],['man · den','manden',['maanden','monden']],['va · kan · tie','vakantie',['varkentje','vaas']],['stran · den','stranden',['standen','sterren']],['boe · ken','boeken',['bomen','boekenrek']],['ster · ren','sterren',['stenen','sturen']],['tuin · huis','tuinhuis',['tuinman','thuiskomst']],['voet · bal','voetbal',['voeten','voetpad']],['regen · jas','regenjas',['regenboog','regenbak']],['speel · plaats','speelplaats',['speeltuin','speelgoed']],['boter · ham','boterham',['boterpot','boterbloem']]
];
const EXPLORE = [
  ['Pikachu legt een patroon: geel, blauw, geel, blauw, … Wat komt nu?',['Geel','Blauw','Rood'],0,'Geel en blauw wisselen elkaar af, dus nu komt geel.'],
  ['Het is 8 uur in de ochtend. Wat doet Liam waarschijnlijk?',['Hij gaat naar school.','Hij gaat slapen voor de nacht.','Hij eet zijn avondmaal.'],0,'Acht uur is in de ochtend en dan begint de schooldag bijna.'],
  ['Welke vorm heeft vier even lange zijden?',['Een vierkant.','Een driehoek.','Een cirkel.'],0,'Een vierkant heeft vier even lange zijden.'],
  ['Welke hoort niet in het rijtje: appel, peer, wortel?',['Wortel.','Appel.','Peer.'],0,'Een wortel is een groente; appel en peer zijn fruit.'],
  ['Squirtle staat links van Pikachu. Wie staat rechts?',['Pikachu.','Squirtle.','Niemand.'],0,'Als Squirtle links staat, staat Pikachu rechts.'],
  ['Wat heb je nodig als het buiten hard regent?',['Een paraplu.','Een zonnebril.','Een zwembroek.'],0,'Een paraplu houdt de regen tegen.'],
  ['Kaka-Karel wast zijn handen na het toilet. Waarom?',['Om ze schoon te maken.','Om ze groter te maken.','Om sneller te lopen.'],0,'Handen wassen verwijdert vuil en helpt je gezond te blijven.'],
  ['Wat komt eerst wanneer je je tanden poetst?',['Tandpasta op de borstel doen.','Je tandenborstel opbergen.','Je mond afdrogen.'],0,'Je maakt de borstel eerst klaar voordat je poetst.']
];
function optionsQ(area,prompt,options,correctIndex,explanation,rng,extra={}) {
  const correct=options[correctIndex]; return {area,prompt,options:shuffle(options,rng),correct,explanation,...extra};
}
function mathQ(prompt, answer, explanation, rng) {
  const wrong=shuffle([answer-1,answer+1,answer-10,answer+10,answer-2,answer+2],rng).filter(v=>v>=0&&v<=100&&v!==answer);
  return optionsQ('math',prompt,[String(answer),...wrong.slice(0,3).map(String)],0,explanation,rng);
}
export function makeQuestions(date) {
  const special=DAILY_CONTENT[date];
  if(special&&Array.isArray(special.questions)&&special.questions.length===12&&special.questions.every(q=>AREAS[q.area]&&Array.isArray(q.options)&&q.options.length>=3&&q.options.includes(q.correct)))return structuredClone(special);
  const rng=random('liam-v2-'+date), integer=(min,max)=>min+Math.floor(rng()*(max-min+1));
  const day=Math.floor(Date.parse(date+'T12:00:00Z')/86400000);
  const story=STORIES[day%STORIES.length];
  const reads=story.questions.slice(0,2).map(([prompt,opts,index,why])=>optionsQ('language',prompt,opts,index,why,rng,{passage:story.text,storyTitle:story.title}));
  const spells=[0,5].map(offset=>{const [p,o,i,w]=SPELLING[(day+offset)%SPELLING.length];return optionsQ('language',p,o,i,w,rng);});
  const [chunks,word,wrong]=CHUNKS[day%CHUNKS.length];
  const a=integer(8,16),b=integer(2,Math.min(9,20-a)),c=integer(22,49),d=c%10?integer(1,c%10):10,e=integer(10,29),f=10,x=integer(6,18),gap=integer(2,Math.min(9,30-x));
  const maths=[mathQ(`${a} + ${b} = ?`,a+b,`${a} + ${b} = ${a+b}. Tel de tientallen en eenheden erbij.`,rng),mathQ(`${c} − ${d} = ?`,c-d,`${c} − ${d} = ${c-d}. Haal eerst de tientallen en dan de eenheden eraf.`,rng),mathQ(`Liam heeft ${e} sterren. Hij krijgt er ${f} bij. Hoeveel heeft hij nu?`,e+f,`Er komen sterren bij: ${e} + ${f} = ${e+f}.`,rng),mathQ(`${x} + … = ${x+gap}`,gap,`Het verschil tussen ${x} en ${x+gap} is ${gap}.`,rng)];
  const language=[spells[0],reads[0],spells[1],reads[1]];
  const explore=[0,2,4,6].map(offset=>{const [p,o,i,w]=EXPLORE[(day+offset)%EXPLORE.length];return optionsQ('explore',p,o,i,w,rng);});
  return {title:story.title,questions:[maths[0],language[0],explore[0],maths[1],language[1],explore[1],maths[2],language[2],explore[2],maths[3],language[3],explore[3]]};
}
export function newRun(date, attempt=1) {
  const quiz=makeQuestions(date);
  return {id:crypto.randomUUID(),version:VERSION,date,title:quiz.title,questions:quiz.questions,attempt,startedAt:new Date().toISOString(),answers:Array(quiz.questions.length).fill(null),index:0,finished:false,completedAt:null,ownerId:null,synced:false};
}
export function answer(run, value) {
  if(run.finished||run.answers[run.index]||!run.questions[run.index].options.includes(value))return false;
  const q=run.questions[run.index];
  run.answers[run.index]={value,correct:value===q.correct,selectedIndex:q.options.indexOf(value),at:new Date().toISOString()};
  run.synced=false; return true;
}
export function advance(run) {
  if(run.finished||!run.answers[run.index])return false;
  if(run.index===run.questions.length-1){run.finished=true;run.completedAt=new Date().toISOString();}else run.index++;
  run.synced=false;return true;
}
export function summary(run) {
  const by=Object.fromEntries(Object.keys(AREAS).map(area=>[area,{correct:0,total:0}]));
  let score=0;
  run.questions.forEach((q,i)=>{by[q.area].total++;if(run.answers[i]?.correct){score++;by[q.area].correct++;}});
  return {score,total:run.questions.length,by};
}
export function mergeRun(local, remote) {
  if(!local)return remote;
  if(local.id!==remote.id)throw new Error('Verschillende rondes');
  const merged={...local,questions:remote.questions,answers:remote.answers.map((a,i)=>a||local.answers[i])};
  merged.index=Math.max(local.index,remote.index); merged.finished=local.finished||remote.finished;
  merged.completedAt=remote.completedAt||local.completedAt;
  return merged;
}
