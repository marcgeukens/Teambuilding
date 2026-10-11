// Alleen dit bestand wordt door de dagelijkse update vervangen.
// De vaste oefensite, opslag, aanmelding en resultatenhistoriek blijven onaangeroerd.
export const ACTIVE_DATE = '2026-10-11';

const LISTENING_TEXT = 'Hallo, met Noor. Ik bel Milan om hem uit te nodigen voor de voetbalshow van de Fonkelende Feniksen. Die vindt plaats op zaterdag zeventien oktober in het cultuurcentrum. De deuren gaan open om halfdrie. De voorstelling begint om drie uur in de namiddag. Tijdens de show doet Cristiano Ronaldo een grappige baltruc en danst Pikachu mee als mascotte. Milan moet thuis nog toestemming vragen. Na de voorstelling wacht zijn papa aan de grote poort.';

export const DAILY_CONTENT = {
  '2026-10-11': {
    title: 'De grote luister- en rekenmissie',
    questions: [
      {
        area: 'language',
        storyTitle: 'Luistertest: de voetbalshow',
        listenGroup: 'voetbalshow',
        listenText: LISTENING_TEXT,
        prompt: 'Waarom belt Noor naar Milan?',
        options: ['Ze wil hem uitnodigen voor de voetbalshow.', 'Ze wil zijn huiswerk vragen.', 'Ze wil met hem gaan winkelen.'],
        correct: 'Ze wil hem uitnodigen voor de voetbalshow.',
        explanation: 'Noor belt om Milan uit te nodigen voor de voetbalshow.'
      },
      {
        area: 'language',
        type: 'text',
        storyTitle: 'Luistertest: de voetbalshow',
        listenGroup: 'voetbalshow',
        listenText: LISTENING_TEXT,
        prompt: 'Wanneer is de voetbalshow? Vul de dag én de datum zelf in.',
        placeholder: 'bijvoorbeeld: maandag 4 mei',
        accepted: ['zaterdag 17 oktober', 'zaterdag zeventien oktober', 'zaterdag 17/10', 'zaterdag 17-10', '17 oktober zaterdag', 'zaterdag 17 oktober 2026'],
        correct: 'zaterdag 17 oktober',
        explanation: 'Je hoorde: zaterdag zeventien oktober.'
      },
      {
        area: 'math',
        storyTitle: 'Luistertest: de voetbalshow',
        listenGroup: 'voetbalshow',
        listenText: LISTENING_TEXT,
        prompt: 'Om hoe laat begint de voorstelling? Kies de juiste klok.',
        options: ['14:30', '15:00', '15:30'],
        correct: '15:00',
        clockOptions: {
          '14:30': {hour: 2, minute: 30, label: 'halfdrie'},
          '15:00': {hour: 3, minute: 0, label: 'drie uur'},
          '15:30': {hour: 3, minute: 30, label: 'halfvier'}
        },
        explanation: 'De deuren openen om halfdrie, maar de voorstelling begint om drie uur. De grote wijzer staat op 12 en de kleine op 3.'
      },
      {
        area: 'explore',
        storyTitle: 'Luistertest: de voetbalshow',
        listenGroup: 'voetbalshow',
        listenText: LISTENING_TEXT,
        prompt: 'Wie moet thuis nog toestemming vragen?',
        options: ['Milan.', 'Noor.', 'Ronaldo.'],
        correct: 'Milan.',
        explanation: 'In het bericht hoor je dat Milan thuis nog toestemming moet vragen.'
      },
      {
        area: 'math',
        prompt: 'Ronaldo heeft 8 ballen en krijgt er 7 bij. Hoeveel zijn dat samen?',
        options: ['14', '15', '16'],
        correct: '15',
        explanation: 'Splits 7 in 2 en 5: 8 + 2 = 10 en 10 + 5 = 15.'
      },
      {
        area: 'language',
        prompt: 'Welk MKMM-woord maak je met “poe” + “ts”?',
        options: ['poets', 'poes', 'poest'],
        correct: 'poets',
        explanation: 'Poe + ts vormt het MKMM-woord poets: p-oe-t-s.'
      },
      {
        area: 'explore',
        prompt: '“___ belt Milan? Antwoord: Noor.” Welk vraagwoord past op de streep?',
        options: ['Wie', 'Waar', 'Wanneer'],
        correct: 'Wie',
        explanation: 'Het antwoord is een persoon: Noor. Daarom vraag je: Wie belt Milan?'
      },
      {
        area: 'math',
        prompt: 'Haal 7 af van 16. Hoeveel blijft er over?',
        options: ['8', '9', '10'],
        correct: '9',
        explanation: 'Splits 7 in 6 en 1: 16 − 6 = 10 en 10 − 1 = 9.'
      },
      {
        area: 'language',
        prompt: 'Welk woord is juist geschreven?',
        options: ['kaars', 'kaar', 'kaarss'],
        correct: 'kaars',
        explanation: 'Het woord kaars eindigt op rs: k-aa-r-s.'
      },
      {
        area: 'explore',
        prompt: 'Kaka-Karel tekent de kortste weg naar de wc: ●────●. Hoe noem je deze figuur?',
        options: ['Een lijnstuk.', 'Een rechte zonder einde.', 'Een kromme lijn.'],
        correct: 'Een lijnstuk.',
        explanation: 'Een lijnstuk is recht en heeft twee duidelijke eindpunten.'
      },
      {
        area: 'math',
        prompt: 'Pikachu telt 16 kaarten. Hoeveel tientallen en hoeveel eenheden zijn dat?',
        options: ['1 tiental en 6 eenheden.', '6 tientallen en 1 eenheid.', '1 tiental en 5 eenheden.'],
        correct: '1 tiental en 6 eenheden.',
        explanation: '16 bestaat uit 10 en 6: één tiental en zes eenheden.'
      },
      {
        area: 'explore',
        prompt: 'Zes spelers staan op een rij: Ronaldo, Noor, Liam, Haaland, Milan en Pikachu. Wie staat voorlaatste?',
        options: ['Milan.', 'Haaland.', 'Pikachu.'],
        correct: 'Milan.',
        explanation: 'Pikachu staat laatste. De speler net ervoor is Milan, dus Milan staat voorlaatste.'
      }
    ]
  }
};
