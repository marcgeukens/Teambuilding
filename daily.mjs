export const ACTIVE_DATE = '2026-10-21';
export const DAILY_CONTENT = {
  '2026-10-21': {
    title: 'Het lichtsporenpad',
    questions: [
      {
        area: 'math',
        challenge: true,
        tableOf2: true,
        prompt: 'Op het lichtsporenpad liggen 14 steentjes in groepjes van 2. Hoeveel groepjes zijn er? Welke factor ontbreekt in ? × 2 = 14?',
        options: ['6', '7', '8'],
        correct: '7',
        explanation: 'Maak groepjes van 2: 2 + 2 + 2 + 2 + 2 + 2 + 2 = 14. Dat zijn 7 groepjes. De keersom is 7 × 2 = 14.'
      },
      {
        area: 'language',
        prompt: 'Welk woord is juist geschreven?',
        options: ['wolf', 'wolv', 'wlof'],
        correct: 'wolf',
        explanation: 'Wolf schrijf je w-o-l-f. Het is een MKMM-woord: medeklinker, klinker, medeklinker, medeklinker.'
      },
      {
        area: 'explore',
        prompt: 'Welke beschrijving past bij een lijnstuk?',
        options: ['Een rechte lijn tussen twee punten.', 'Een kromme lijn zonder eindpunten.', 'Eén los punt.'],
        correct: 'Een rechte lijn tussen twee punten.',
        explanation: 'Een lijnstuk is recht en heeft twee eindpunten.'
      },
      {
        area: 'math',
        prompt: 'Een trol heeft 16 kastanjes. Hij geeft er 7 weg. Gebruik de minsok. Hoeveel kastanjes houdt hij over?',
        options: ['8', '9', '10'],
        correct: '9',
        sock: {operator: '-', start: 16, splitTotal: 7, first: 6, second: 1, result: 9, step: '16 - 6 = 10, daarna 10 - 1 = 9.'},
        explanation: 'Splits 7 in 6 en 1. Eerst ga je van 16 naar 10: 16 - 6 = 10. Daarna doe je 10 - 1 = 9.'
      },
      {
        area: 'language',
        challenge: true,
        storyTitle: 'De lampenworkshop',
        passage: 'De lampenworkshop start om 13.30 uur in de muziekklas. Breng een rood potlood en één droog blad mee. Liam staat om 13.25 uur in de refter. Hij heeft beide spullen al bij zich.',
        prompt: 'Wat moet Liam nog doen om op tijd klaar te zijn voor de workshop?',
        options: ['Naar de muziekklas gaan.', 'Een nat blad zoeken.', 'Naar huis gaan.'],
        correct: 'Naar de muziekklas gaan.',
        explanation: 'Liam heeft het rode potlood en het droge blad al. Hij is vijf minuten te vroeg, maar staat nog in de refter. Hij moet dus naar de muziekklas gaan.'
      },
      {
        area: 'explore',
        prompt: 'De boswandeling begint om 16.00 uur en duurt een halfuur. Hoe laat eindigt ze?',
        options: ['16:15', '16:30', '17:00'],
        correct: '16:30',
        clockOptions: {
          '16:15': {hour: 4, minute: 15, label: 'kwart over vier'},
          '16:30': {hour: 4, minute: 30, label: 'half vijf'},
          '17:00': {hour: 5, minute: 0, label: 'vijf uur'}
        },
        explanation: 'Een halfuur na 16.00 uur is het 16.30 uur, of half vijf.'
      },
      {
        area: 'math',
        prompt: 'Welk getal bestaat uit 5 tientallen en 3 eenheden?',
        options: ['35', '50', '53'],
        correct: '53',
        explanation: 'Vijf tientallen zijn 50. Met 3 eenheden erbij krijg je 53.'
      },
      {
        area: 'language',
        storyTitle: 'Voorzichtig bij het doel',
        passage: 'Kevin De Bruyne schopt de bal zacht. Naast het doel loopt een kleine egel.',
        prompt: 'Welke vraag zoekt naar de reden waarom Kevin zacht schopt?',
        options: ['Waarom schopt Kevin zacht?', 'Wie schopt de bal?', 'Waar staat het doel?'],
        correct: 'Waarom schopt Kevin zacht?',
        explanation: 'Met waarom vraag je naar een reden. Kevin schopt zacht omdat er een egel naast het doel loopt.'
      },
      {
        area: 'explore',
        challenge: true,
        prompt: 'De lichtjes volgen twee sprongen die telkens terugkomen: +2, dan +3. Welke twee getallen komen na 2, 4, 7, 9, 12?',
        options: ['14 en 17', '15 en 18', '14 en 16'],
        correct: '14 en 17',
        explanation: 'Na 12 komt de sprong van 2: 12 + 2 = 14. Daarna komt de sprong van 3: 14 + 3 = 17.'
      },
      {
        area: 'math',
        prompt: 'Squirtle verzamelt 9 blauwe kaartjes en Pikachu brengt er 6 gele bij. Hoeveel kaartjes zijn er samen?',
        options: ['14', '15', '16'],
        correct: '15',
        explanation: '9 + 6 = 15. Je kunt eerst 1 van de 6 bij 9 doen om 10 te maken, en daarna nog 5: 10 + 5 = 15.'
      },
      {
        area: 'language',
        storyTitle: 'Het bord bij de poort',
        passage: 'Doe bij donker weer je fluohesje aan. Zet je fietslicht aan. Stap af zodra je aan de schoolpoort komt.',
        prompt: 'Je komt met de fiets aan de schoolpoort. Wat zegt het bord dat je daar moet doen?',
        options: ['Afstappen.', 'Sneller fietsen.', 'Je fietslicht uitzetten.'],
        correct: 'Afstappen.',
        explanation: 'De laatste zin zegt dat je aan de schoolpoort moet afstappen.'
      },
      {
        area: 'explore',
        prompt: 'Welke twee dingen vind je allebei in de natuur?',
        options: ['Een eikel en een paddenstoel.', 'Een verkeerslicht en een lepel.', 'Een toiletrol en een wekker.'],
        correct: 'Een eikel en een paddenstoel.',
        explanation: 'Eikels groeien aan eiken en paddenstoelen groeien in de natuur. Een toiletrol in het bos? Dat zou pas kaka-grappig én rommelig zijn!'
      }
    ]
  }
};
