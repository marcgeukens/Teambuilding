const challenges = [
  {
    type: "Schaakpuzzel",
    title: "Vind de beste zet",
    provider: "ChessQuarter",
    time: "ongeveer 5–10 minuten",
    icon: "♞",
    description: "Een Nederlandstalige schaakpuzzel uit een echte partij. Zoek eerst schaakjes, slagzetten en dreigingen. Gratis en zonder account.",
    url: "https://chessquarter.eu/schaakpuzzels/"
  },
  {
    type: "Nederlandse taal",
    title: "Zeven letters, zo veel mogelijk woorden",
    provider: "Unscramblr",
    time: "ongeveer 5–12 minuten",
    icon: "Aa",
    description: "Maak met zeven letters zo veel mogelijk Nederlandse woorden. Iedereen krijgt vandaag dezelfde letters. Gratis en zonder account.",
    url: "https://unscramblr.ai/nl/daily/"
  },
  {
    type: "Logica",
    title: "Los de dagpuzzel op",
    provider: "Skillido",
    time: "ongeveer 5–15 minuten",
    icon: "◇",
    description: "Een korte logische puzzel met uitleg achteraf. Geen eindeloos doorklikken: één probleem om rustig uit te pluizen.",
    url: "https://skillido.com/nl/dagpuzzel"
  },
  {
    type: "Schaaktactiek",
    title: "Lichess-puzzel van de dag",
    provider: "Lichess",
    time: "ongeveer 5–10 minuten",
    icon: "♟",
    description: "Vind de beste zetten voor de partijstelling van vandaag. Een sterke korte training in rekenen, patroonherkenning en geduld.",
    url: "https://lichess.org/training/daily"
  },
  {
    type: "Puzzelmix",
    title: "Kies één korte dagpuzzel",
    provider: "Puzzelmomentje",
    time: "maximaal 15 minuten",
    icon: "✦",
    description: "Kies één Nederlandse taal-, cijfer- of logicapuzzel. Niet alles doen: één puzzel is vandaag meer dan genoeg.",
    url: "https://puzzelmomentje.nl/nl"
  }
];

const rotation = [2, 0, 1, 2, 3, 4, 0];
const now = new Date();
const dayIndex = now.getDay();
const challenge = challenges[rotation[dayIndex]];
const iso = [now.getFullYear(), String(now.getMonth()+1).padStart(2,"0"), String(now.getDate()).padStart(2,"0")].join("-");
const $ = id => document.getElementById(id);

$("date-label").textContent = new Intl.DateTimeFormat("nl-BE", {weekday:"long", day:"numeric", month:"long"}).format(now);
$("challenge-type").textContent = challenge.type;
$("challenge-title").textContent = challenge.title;
$("challenge-meta").textContent = challenge.provider + " · " + challenge.time;
$("challenge-icon").textContent = challenge.icon;
$("challenge-description").textContent = challenge.description;
$("challenge-link").href = challenge.url;

const alternatives = challenges.filter(item => item.url !== challenge.url).slice(0, 3);
$("source-list").innerHTML = alternatives.map(item =>
  '<a class="source-link" href="' + item.url + '" target="_blank" rel="noopener noreferrer"><strong>' +
  item.icon + ' ' + item.title + '</strong><span>' + item.provider + ' · ' + item.time + '</span></a>'
).join("");

const doneKey = "marc-breinkwartier-klaar-" + iso;
function renderDone() {
  const done = localStorage.getItem(doneKey) === "1";
  $("done-button").classList.toggle("is-done", done);
  $("done-button").textContent = done ? "Klaar voor vandaag ✓" : "Vandaag afgewerkt";
  $("done-button").setAttribute("aria-pressed", String(done));
}
$("done-button").addEventListener("click", () => {
  if (localStorage.getItem(doneKey) === "1") localStorage.removeItem(doneKey);
  else localStorage.setItem(doneKey, "1");
  renderDone();
});
renderDone();

let remaining = 15 * 60;
let endAt = null;
let ticker = null;
function renderTimer() {
  const minutes = Math.floor(remaining / 60);
  const seconds = remaining % 60;
  $("timer-display").textContent = String(minutes).padStart(2,"0") + ":" + String(seconds).padStart(2,"0");
}
function stopTimer() {
  if (ticker) clearInterval(ticker);
  ticker = null;
  endAt = null;
  $("timer-start").textContent = remaining === 0 ? "Klaar" : "Start";
}
function tick() {
  remaining = Math.max(0, Math.ceil((endAt - Date.now()) / 1000));
  renderTimer();
  if (remaining === 0) stopTimer();
}
function startTimer() {
  if (ticker || remaining === 0) return;
  endAt = Date.now() + remaining * 1000;
  ticker = setInterval(tick, 250);
  $("timer-start").textContent = "Loopt…";
}
$("timer-start").addEventListener("click", startTimer);
$("challenge-link").addEventListener("click", startTimer);
$("timer-reset").addEventListener("click", () => {
  stopTimer();
  remaining = 15 * 60;
  renderTimer();
});
renderTimer();