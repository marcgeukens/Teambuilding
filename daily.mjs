export const ACTIVE_DATE = '2026-11-18';
export const DAILY_CONTENT = {
  '2026-11-18': {
    title: 'De stamboomexpeditie',
    questions: [
      {
        area: 'math',
        prompt: 'Pikachu heeft 14 energiekaartjes en geeft er 6 weg. Hoeveel kaartjes houdt Pikachu over?',
        options: ['8', '7', '9'],
        correct: '8',
        explanation: 'Ga via 10: splits 6 in 4 en 2. Eerst 14 − 4 = 10, daarna 10 − 2 = 8.',
        sock: {operator: '-', start: 14, splitTotal: 6, first: 4, second: 2, result: 8, step: '14 − 4 = 10, daarna 10 − 2 = 8.'}
      },
      {
        area: 'language',
        storyTitle: 'De kaartjes voor morgen',
        listenGroup: 'stamboom-2026-11-18',
        listenText: 'Vandaag is het woensdag 18 november. Liam legt de stamboomkaartjes op de keukentafel. De kaartjes moeten morgen mee naar school. Om halfzes stopt Liam ze in de roze map. Daarna belt hij oma voor een kort interview. Het ingevulde interview hoeft pas maandag 23 november mee.',
        prompt: 'Wie belt Liam na het inpakken van de kaartjes?',
        options: ['oma', 'de juf', 'Kevin De Bruyne'],
        correct: 'oma',
        explanation: 'Na het inpakken belt Liam oma voor een kort interview.'
      },
      {
        area: 'explore',
        storyTitle: 'De kaartjes voor morgen',
        listenGroup: 'stamboom-2026-11-18',
        listenText: 'Vandaag is het woensdag 18 november. Liam legt de stamboomkaartjes op de keukentafel. De kaartjes moeten morgen mee naar school. Om halfzes stopt Liam ze in de roze map. Daarna belt hij oma voor een kort interview. Het ingevulde interview hoeft pas maandag 23 november mee.',
        prompt: 'Welke klok toont wanneer Liam de kaartjes in de roze map stopt?',
        options: ['17:30', '17:00', '18:30'],
        correct: '17:30',
        explanation: 'Halfzes is een halfuur vóór zes uur. Dat is 17:30.',
        clockOptions: {
          '17:30': {hour: 5, minute: 30, label: 'halfzes'},
          '17:00': {hour: 5, minute: 0, label: 'vijf uur'},
          '18:30': {hour: 6, minute: 30, label: 'halfzeven'}
        }
      },
      {
        area: 'math',
        prompt: 'Oma legt 20 knopen in groepjes van 2 voor een stamboomknutselwerk. Hoeveel groepjes maakt ze?',
        options: ['10', '9', '8'],
        correct: '10',
        explanation: 'Met 20 knopen maak je 10 groepjes van 2. De passende deelsom is 20 : 2 = 10. Het quotiënt is 10.',
        tableOfTwo: true
      },
      {
        area: 'language',
        storyTitle: 'De kaartjes voor morgen',
        listenGroup: 'stamboom-2026-11-18',
        listenText: 'Vandaag is het woensdag 18 november. Liam legt de stamboomkaartjes op de keukentafel. De kaartjes moeten morgen mee naar school. Om halfzes stopt Liam ze in de roze map. Daarna belt hij oma voor een kort interview. Het ingevulde interview hoeft pas maandag 23 november mee.',
        prompt: 'Schrijf de dag en datum waarop de stamboomkaartjes mee naar school moeten.',
        type: 'text',
        accepted: ['donderdag 19 november', '19 november', 'donderdag 19 november 2026', '19 november 2026'],
        correct: 'donderdag 19 november',
        explanation: 'Vandaag is woensdag 18 november en de kaartjes moeten morgen mee. Morgen is donderdag 19 november.',
        challenge: true
      },
      {
        area: 'explore',
        prompt: 'Noor tekent vanuit één punt twee lijnstukken die uit elkaar lopen. Wat heeft zij getekend?',
        options: ['een hoek', 'een gebogen lijn', 'twee evenwijdige lijnen'],
        correct: 'een hoek',
        explanation: 'De twee lijnstukken zijn de benen van de hoek. Het punt waar ze samenkomen is het hoekpunt.'
      },
      {
        area: 'math',
        prompt: 'Liam ziet 18 vakjes gevuld in een twintigveld. Hoe kun je 18 splitsen in tientallen en eenheden?',
        options: ['1 tiental en 8 eenheden', '8 tientallen en 1 eenheid', '2 tientallen en 8 eenheden'],
        correct: '1 tiental en 8 eenheden',
        explanation: 'Achttien bestaat uit één volle groep van 10 en nog 8 losse eenheden: 10 + 8 = 18.'
      },
      {
        area: 'language',
        prompt: 'Welk woord past in de zin? “De koe staat in de ___.”',
        options: ['wei', 'wij', 'weij'],
        correct: 'wei',
        explanation: 'Een grasveld voor dieren heet een wei. Je schrijft wei met ei.'
      },
      {
        area: 'explore',
        prompt: 'Welk getal komt daarna? 2, 5, 9, 14, ...',
        options: ['20', '19', '18'],
        correct: '20',
        explanation: 'De sprongen worden telkens één groter: +3, +4, +5 en daarna +6. Dus 14 + 6 = 20.',
        challenge: true
      },
      {
        area: 'math',
        prompt: 'Kevin De Bruyne heeft 9 oefenballen. Hoeveel ballen krijgt hij erbij om er 17 te hebben?',
        options: ['8', '7', '9'],
        correct: '8',
        explanation: 'Zoek het ontbrekende getal in 9 + ? = 17. Ga via 10: eerst +1 en daarna nog +7. Samen is dat +8, want 9 + 8 = 17.',
        challenge: true
      },
      {
        area: 'language',
        prompt: 'Welk woord is een zelfstandig naamwoord in de zin “De fiets rijdt snel”?',
        options: ['fiets', 'rijdt', 'snel'],
        correct: 'fiets',
        explanation: 'Een fiets is een ding en dus een zelfstandig naamwoord. Rijdt is een werkwoord en snel zegt hoe iets gebeurt.'
      },
      {
        area: 'explore',
        prompt: 'Oma is de moeder van papa. Liam is het kind van papa. Wie staat in de stamboom tussen oma en Liam?',
        options: ['papa', 'oma', 'Liam'],
        correct: 'papa',
        explanation: 'Oma is de moeder van papa en papa is de vader van Liam. Daarom staat papa tussen oma en Liam.'
      }
    ]
  }
};
