export const ACTIVE_DATE = '2026-11-14';
export const DAILY_CONTENT = {
  '2026-11-14': {
    title: 'De stamboomspeurtocht',
    questions: [
      {
        area: 'math',
        prompt: 'In een familiealbum staan 8 foto’s op de eerste bladzijde en 7 op de tweede. Hoeveel foto’s zijn dat samen?',
        options: ['15', '14', '16'],
        correct: '15',
        explanation: 'Maak eerst 10: 8 + 7 wordt 8 + 2 + 5. Dus 10 + 5 = 15 foto’s.',
        challenge: true,
        sock: {operator: '+', start: 8, splitTotal: 7, first: 2, second: 5, result: 15, step: '8 + 2 = 10, daarna 10 + 5 = 15.'}
      },
      {
        area: 'language',
        prompt: 'In welke zin is het woord met ei of ij juist geschreven?',
        options: ['Het is tijd voor een foto.', 'Het is teid voor een foto.', 'Het is tijt voor een foto.'],
        correct: 'Het is tijd voor een foto.',
        explanation: 'Je schrijft tijd met ij: t-ij-d.'
      },
      {
        area: 'explore',
        prompt: 'Een hoek heeft een hoekpunt en twee …',
        options: ['benen', 'rondjes', 'letters'],
        correct: 'benen',
        explanation: 'De twee lijnen die vanuit het hoekpunt vertrekken, noemen we de benen van de hoek.'
      },
      {
        area: 'math',
        prompt: 'Pikachu legt 9 groepjes van 2 energiekaartjes klaar. Hoeveel kaartjes zijn dat samen?',
        options: ['18', '11', '20'],
        correct: '18',
        explanation: 'Je ziet 9 groepjes van 2. Dat is 2 + 2 + 2 + 2 + 2 + 2 + 2 + 2 + 2 = 18, dus 9 × 2 = 18. Het product is 18.',
        tableOfTwo: true
      },
      {
        area: 'language',
        storyTitle: 'De fotodoos',
        passage: 'Mila stopt een foto van haar grootouders in de blauwe map. Een foto van de hond gaat in de groene map. In de rode map zit een foto van het gezin samen met de hond.',
        prompt: 'De juf vraagt een map met mensen erop, maar zonder dier. Welke map geeft Mila?',
        options: ['de blauwe map', 'de groene map', 'de rode map'],
        correct: 'de blauwe map',
        explanation: 'Op de blauwe foto staan de grootouders en geen dier. De groene foto toont de hond en op de rode foto staat ook een hond.',
        challenge: true
      },
      {
        area: 'explore',
        prompt: 'Door welk materiaal schijnt het licht van een zaklamp het best?',
        options: ['door doorzichtig plastic', 'door dik karton', 'door een houten plank'],
        correct: 'door doorzichtig plastic',
        explanation: 'Doorzichtig plastic laat veel licht door. Dik karton en hout houden het licht tegen.'
      },
      {
        area: 'math',
        prompt: 'Welk getal ontbreekt? 17 − ? = 9',
        options: ['8', '7', '9'],
        correct: '8',
        explanation: 'Denk omgekeerd: 9 + 8 = 17. Daarom is 17 − 8 = 9.'
      },
      {
        area: 'language',
        prompt: 'Welk woord is een zelfstandig naamwoord dat een persoon noemt?',
        options: ['tante', 'glimlacht', 'vriendelijk'],
        correct: 'tante',
        explanation: 'Een tante is een persoon, dus tante is een zelfstandig naamwoord. Glimlacht is een werkwoord en vriendelijk zegt hoe iemand is.'
      },
      {
        area: 'explore',
        prompt: 'Welke beschrijving past bij een lijnstuk?',
        options: ['een rechte verbinding tussen twee punten', 'een rechte lijn zonder eindpunten', 'één los punt'],
        correct: 'een rechte verbinding tussen twee punten',
        explanation: 'Een lijnstuk is recht en heeft twee eindpunten.'
      },
      {
        area: 'math',
        prompt: 'Er liggen 4 tientallen fiches. Liam neemt 1 tiental weg. Hoeveel blijven er over?',
        options: ['30', '3', '50'],
        correct: '30',
        explanation: '4 tientallen zijn 40. Eén tiental wegnemen geeft 40 − 10 = 30.'
      },
      {
        area: 'language',
        prompt: 'Welke zin gebruikt het meervoud en het lidwoord juist?',
        options: ['De kinderen bekijken foto’s.', 'Het kinderen bekijken foto’s.', 'De kind bekijken foto’s.'],
        correct: 'De kinderen bekijken foto’s.',
        explanation: 'Kinderen is het meervoud van kind. Bij dit meervoud hoort het lidwoord de.'
      },
      {
        area: 'explore',
        prompt: 'Kevin De Bruyne, Lionel Messi en Erling Haaland kiezen elk een andere kleur fotokader: rood, blauw of groen. Messi kiest rood. Kevin kiest niet blauw. Haaland kiest niet groen. Welke kleur kiest Kevin?',
        options: ['groen', 'blauw', 'rood'],
        correct: 'groen',
        explanation: 'Rood is al van Messi. Kevin kiest niet blauw, dus Kevin moet groen kiezen. Dan blijft blauw over voor Haaland.',
        challenge: true
      }
    ]
  }
};
