export const ACTIVE_DATE = '2026-10-24';
export const DAILY_CONTENT = {
  '2026-10-24': {
    title: 'De herfstschat na de wind',
    questions: [
      {
        area: 'math',
        prompt: 'De feniks vindt 8 rode veren en 7 gouden veren. Gebruik de sok. Hoeveel veren zijn dat samen?',
        options: ['15', '14', '16'],
        correct: '15',
        explanation: 'Splits 7 in 2 en 5. Eerst 8 + 2 = 10, daarna 10 + 5 = 15. Samen zijn er 15 veren.',
        challenge: true,
        sock: { operator: '+', start: 8, splitTotal: 7, first: 2, second: 5, result: 15, step: '8 + 2 = 10, daarna 10 + 5 = 15.' }
      },
      {
        area: 'language',
        storyTitle: 'Het briefje aan de poort',
        passage: 'Na de harde wind blijft de kleine poort dicht. Bezoekers gaan door de brede poort naast de fietsenstalling. Gevallen takken blijven in de aangeduide hoek liggen.',
        prompt: 'Door welke poort moet Liam naar binnen?',
        options: ['Door de brede poort', 'Door de kleine poort', 'Door het hek bij de takken'],
        correct: 'Door de brede poort',
        explanation: 'Op het briefje staat dat bezoekers door de brede poort naast de fietsenstalling gaan.'
      },
      {
        area: 'explore',
        prompt: 'Welk voorwerp blaast het gemakkelijkst weg bij een stevige wind?',
        options: ['Een droge veer', 'Een zware steen', 'Een volle drinkfles'],
        correct: 'Een droge veer',
        explanation: 'Een droge veer is veel lichter dan een steen of een volle drinkfles en blaast daarom het gemakkelijkst weg.'
      },
      {
        area: 'math',
        prompt: 'Squirtle springt 8 keer telkens 2 tegels vooruit. Op hoeveel tegels komt hij uit?',
        options: ['16', '14', '18'],
        correct: '16',
        explanation: 'Acht sprongen van 2 zijn 2 + 2 + 2 + 2 + 2 + 2 + 2 + 2 = 16. De keersom is 8 × 2 = 16.',
        tableOf2: true
      },
      {
        area: 'language',
        storyTitle: 'De bladerenwerkplaats',
        passage: 'De werkplaats begint om twee uur. Elk kind brengt vier droge bladeren mee. Natte bladeren leg je in de schaal bij de deur. Liam heeft drie droge bladeren en één nat blad.',
        prompt: 'Wat heeft Liam nog nodig om mee te doen?',
        options: ['Eén droog blad', 'Eén nat blad', 'Vier natte bladeren'],
        correct: 'Eén droog blad',
        explanation: 'Liam heeft vier droge bladeren nodig en heeft er al drie. Het natte blad telt niet mee, dus hij mist nog één droog blad.',
        challenge: true
      },
      {
        area: 'explore',
        prompt: 'De herfstwandeling start om half twee en duurt een halfuur. Hoe laat eindigt ze?',
        options: ['14:00', '13:00', '14:30'],
        correct: '14:00',
        explanation: 'Half twee is 13:30. Een halfuur later is het 14:00.',
        clockOptions: {
          '14:00': { hour: 14, minute: 0, label: 'twee uur' },
          '13:00': { hour: 13, minute: 0, label: 'één uur' },
          '14:30': { hour: 14, minute: 30, label: 'half drie' }
        }
      },
      {
        area: 'math',
        prompt: 'Welk getal bestaat uit 4 tientallen en 6 eenheden?',
        options: ['46', '64', '40'],
        correct: '46',
        explanation: 'Vier tientallen zijn 40 en zes eenheden zijn 6. Samen is dat 46.'
      },
      {
        area: 'language',
        prompt: 'De mand staat in de houten ... Welk woord vult de zin juist aan?',
        options: ['kast', 'kats', 'kasst'],
        correct: 'kast',
        explanation: 'Kast is juist geschreven met de letters k-a-s-t. Het is een MKMM-woord.'
      },
      {
        area: 'explore',
        prompt: 'Welke vorm heeft geen hoeken en geen rechte zijden?',
        options: ['Een cirkel', 'Een driehoek', 'Een vierkant'],
        correct: 'Een cirkel',
        explanation: 'Een cirkel is helemaal rond. Hij heeft geen hoeken en geen rechte zijden.'
      },
      {
        area: 'math',
        prompt: 'Kevin De Bruyne heeft 19 oefenkegels. Hij legt er 10 terug in de kast. Hoeveel kegels blijven er staan?',
        options: ['9', '10', '8'],
        correct: '9',
        explanation: 'Negentien min één tiental is 9: 19 − 10 = 9.'
      },
      {
        area: 'language',
        prompt: 'Een wc-rol rolt door de gang. Met welk vraagwoord vraag je naar de plek waar hij stopt?',
        options: ['Waar', 'Wie', 'Wanneer'],
        correct: 'Waar',
        explanation: 'Met waar vraag je naar een plek: Waar stopt de wc-rol?'
      },
      {
        area: 'explore',
        prompt: 'Pikachu, Squirtle en Miraidon laten elk een vlieger op. Pikachu zijn vlieger hangt hoger dan die van Squirtle. Miraidon zijn vlieger hangt lager dan die van Squirtle. Welke vlieger hangt het hoogst?',
        options: ['Die van Pikachu', 'Die van Squirtle', 'Die van Miraidon'],
        correct: 'Die van Pikachu',
        explanation: 'Pikachu hangt hoger dan Squirtle. Miraidon hangt zelfs lager dan Squirtle. Daarom hangt Pikachu zijn vlieger het hoogst.',
        challenge: true
      }
    ]
  }
};
