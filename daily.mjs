export const ACTIVE_DATE = '2026-11-01';
export const DAILY_CONTENT = {
  '2026-11-01': {
    title: 'De zondagsbibliotheek',
    questions: [
      {
        area: 'math',
        prompt: 'Liam legt 8 boeken op de tafel en oma legt er 5 bij. Hoeveel boeken liggen er samen?',
        options: ['13', '12', '14'],
        correct: '13',
        explanation: 'Splits 5 in 2 en 3. Eerst 8 + 2 = 10, daarna 10 + 3 = 13.',
        challenge: true,
        sock: {
          operator: '+',
          start: 8,
          splitTotal: 5,
          first: 2,
          second: 3,
          result: 13,
          step: '8 + 2 = 10, daarna 10 + 3 = 13.'
        }
      },
      {
        area: 'language',
        storyTitle: 'Het bibliotheekplan',
        listenGroup: 'bibliotheekplan-2026-11-01',
        listenText: 'Hallo Liam, luister goed naar het plan voor zondag. Vandaag is het zondag 1 november. Om halfdrie komt oma aan bij de bibliotheek. Ze wacht op de rode bank naast de ingang. Neem je blauwe leesmap mee. Eerst kiezen jullie samen een boek. Daarna drinken jullie thuis warme chocomelk.',
        prompt: 'Waar wacht oma op Liam?',
        options: ['Op de rode bank naast de ingang.', 'Bij de groene tafel in de bibliotheek.', 'Aan de bushalte.'],
        correct: 'Op de rode bank naast de ingang.',
        explanation: 'In het bericht hoor je dat oma op de rode bank naast de ingang wacht.'
      },
      {
        area: 'explore',
        storyTitle: 'Het bibliotheekplan',
        listenGroup: 'bibliotheekplan-2026-11-01',
        listenText: 'Hallo Liam, luister goed naar het plan voor zondag. Vandaag is het zondag 1 november. Om halfdrie komt oma aan bij de bibliotheek. Ze wacht op de rode bank naast de ingang. Neem je blauwe leesmap mee. Eerst kiezen jullie samen een boek. Daarna drinken jullie thuis warme chocomelk.',
        prompt: 'Welke klok toont het tijdstip waarop oma aankomt?',
        options: ['14:30', '14:00', '15:30'],
        correct: '14:30',
        explanation: 'Halfdrie is een halfuur vóór drie uur. In de namiddag is dat 14:30.',
        clockOptions: {
          '14:30': {hour: 14, minute: 30, label: 'halfdrie in de namiddag'},
          '14:00': {hour: 14, minute: 0, label: 'twee uur in de namiddag'},
          '15:30': {hour: 15, minute: 30, label: 'halfvier in de namiddag'}
        }
      },
      {
        area: 'math',
        prompt: 'Squirtle springt van 0 naar 12 met sprongen van 2. Hoeveel sprongen maakt hij?',
        options: ['6', '5', '7'],
        correct: '6',
        explanation: 'De sprongen zijn 0, 2, 4, 6, 8, 10 en 12. Dat zijn 6 groepjes van 2. De keersom is 6 × 2 = 12.',
        tableOfTwo: true
      },
      {
        area: 'language',
        storyTitle: 'Het bibliotheekplan',
        listenGroup: 'bibliotheekplan-2026-11-01',
        listenText: 'Hallo Liam, luister goed naar het plan voor zondag. Vandaag is het zondag 1 november. Om halfdrie komt oma aan bij de bibliotheek. Ze wacht op de rode bank naast de ingang. Neem je blauwe leesmap mee. Eerst kiezen jullie samen een boek. Daarna drinken jullie thuis warme chocomelk.',
        prompt: 'Typ de dag en datum van het bibliotheekbezoek.',
        type: 'text',
        accepted: ['zondag 1 november', 'zondag 01 november', 'zondag 1/11', 'zondag 01/11', 'zondag 1-11', 'zondag 01-11'],
        correct: 'zondag 1 november',
        explanation: 'In het bericht hoor je: vandaag is het zondag 1 november.',
        challenge: true
      },
      {
        area: 'explore',
        prompt: 'Welk teken op een plattegrond stelt het best één punt voor?',
        options: ['Een klein stipje', 'Een lange kromme lijn', 'Een brede rechthoek'],
        correct: 'Een klein stipje',
        explanation: 'Een punt tekenen we als een klein stipje op een blad of plattegrond.'
      },
      {
        area: 'math',
        prompt: 'Er staan 18 prentenboeken in een rek. Vier boeken worden uitgeleend. Hoeveel blijven er staan?',
        options: ['14', '13', '15'],
        correct: '14',
        explanation: '18 - 4 = 14. Er blijven 14 prentenboeken in het rek staan.'
      },
      {
        area: 'language',
        prompt: 'Welk MKMM-woord is juist geschreven?',
        options: ['park', 'prak', 'parr'],
        correct: 'park',
        explanation: 'Park heeft één medeklinker p, één klinker a en daarna twee medeklinkers r en k: MKMM.'
      },
      {
        area: 'explore',
        prompt: 'Welk afval hoort bij het groente-, fruit- en tuinafval?',
        options: ['Een appelklokhuis', 'Een plastic zakje', 'Een lege batterij'],
        correct: 'Een appelklokhuis',
        explanation: 'Een appelklokhuis is organisch afval en hoort bij het groente-, fruit- en tuinafval.'
      },
      {
        area: 'math',
        prompt: 'Cristiano Ronaldo heeft 14 oefenkegels en wil er 20. Hoeveel kegels heeft hij nog nodig?',
        options: ['6', '5', '7'],
        correct: '6',
        explanation: '14 + 6 = 20. Hij heeft nog 6 oefenkegels nodig.'
      },
      {
        area: 'language',
        storyTitle: 'Het koninklijke toiletbriefje',
        passage: 'De wc-rol draagt vandaag een kartonnen kroon. Trek eerst door. Was daarna je handen met zeep en gooi het gebruikte doekje in de vuilnisbak.',
        prompt: 'Wat doe je meteen nadat je hebt doorgespoeld?',
        options: ['Je wast je handen met zeep.', 'Je zet de wc-rol op de grond.', 'Je neemt de kartonnen kroon mee.'],
        correct: 'Je wast je handen met zeep.',
        explanation: 'Op het briefje staat: trek eerst door en was daarna je handen met zeep.'
      },
      {
        area: 'explore',
        prompt: 'Liam vertrekt om 14:10. Hij wandelt 10 minuten naar de bibliotheek en leest daar 20 minuten. Hoe laat is hij klaar met lezen?',
        options: ['14:40', '14:30', '15:00'],
        correct: '14:40',
        explanation: 'Na 10 minuten wandelen is het 14:20. Tel daarna 20 minuten leestijd: Liam is om 14:40 klaar.',
        challenge: true
      }
    ]
  }
};
