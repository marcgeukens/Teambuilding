export const ACTIVE_DATE = '2026-11-15';
export const DAILY_CONTENT = {
  '2026-11-15': {
    title: 'De zondagse fotopuzzel',
    questions: [
      {
        area: 'math',
        prompt: 'In een map zitten 13 foto’s. Liam haalt er 5 dubbele foto’s uit. Hoeveel foto’s blijven over?',
        options: ['8', '7', '9'],
        correct: '8',
        explanation: 'Splits 5 in 3 en 2. Eerst 13 − 3 = 10, daarna 10 − 2 = 8. Er blijven 8 foto’s over.',
        sock: {operator: '-', start: 13, splitTotal: 5, first: 3, second: 2, result: 8, step: '13 − 3 = 10, daarna 10 − 2 = 8.'}
      },
      {
        area: 'language',
        storyTitle: 'De foto van vroeger',
        listenGroup: 'familiefoto-2026-11-15',
        listenText: 'Vandaag is het zondag 15 november. Om halfdrie sorteert Liam thuis enkele familiefoto’s. In de blauwe omslag zit een foto van oma toen zij acht jaar was. In de groene omslag zit een foto van papa als volwassene. In de rode omslag zit een foto van de kat. Liam zoekt een foto waarop een familielid nog een kind is. Daarom kiest hij de blauwe omslag en om drie uur stopt hij de foto in zijn album.',
        prompt: 'Welke volledige datum hoor je aan het begin van het bericht?',
        type: 'text',
        accepted: ['zondag 15 november', '15 november', 'zondag 15 november 2026', '15 november 2026'],
        correct: 'zondag 15 november',
        explanation: 'Het bericht begint met: “Vandaag is het zondag 15 november.”'
      },
      {
        area: 'explore',
        storyTitle: 'De foto van vroeger',
        listenGroup: 'familiefoto-2026-11-15',
        listenText: 'Vandaag is het zondag 15 november. Om halfdrie sorteert Liam thuis enkele familiefoto’s. In de blauwe omslag zit een foto van oma toen zij acht jaar was. In de groene omslag zit een foto van papa als volwassene. In de rode omslag zit een foto van de kat. Liam zoekt een foto waarop een familielid nog een kind is. Daarom kiest hij de blauwe omslag en om drie uur stopt hij de foto in zijn album.',
        prompt: 'Welke klok toont wanneer Liam begint met sorteren?',
        options: ['14:30', '14:00', '15:00'],
        correct: '14:30',
        explanation: 'Halfdrie is een halfuur vóór drie uur. Dat is 14:30.',
        clockOptions: {
          '14:30': {hour: 2, minute: 30, label: 'halfdrie'},
          '14:00': {hour: 2, minute: 0, label: 'twee uur'},
          '15:00': {hour: 3, minute: 0, label: 'drie uur'}
        }
      },
      {
        area: 'math',
        prompt: 'Squirtle verdeelt 14 Pokémonkaartjes eerlijk over 2 dozen. Hoeveel kaartjes komen in elke doos?',
        options: ['7', '6', '8'],
        correct: '7',
        explanation: 'Je verdeelt 14 kaartjes in 2 even grote groepjes. In elke doos komen 7 kaartjes: 14 : 2 = 7. Het quotiënt is 7.',
        tableOfTwo: true
      },
      {
        area: 'language',
        storyTitle: 'De foto van vroeger',
        listenGroup: 'familiefoto-2026-11-15',
        listenText: 'Vandaag is het zondag 15 november. Om halfdrie sorteert Liam thuis enkele familiefoto’s. In de blauwe omslag zit een foto van oma toen zij acht jaar was. In de groene omslag zit een foto van papa als volwassene. In de rode omslag zit een foto van de kat. Liam zoekt een foto waarop een familielid nog een kind is. Daarom kiest hij de blauwe omslag en om drie uur stopt hij de foto in zijn album.',
        prompt: 'Waarom kiest Liam de blauwe omslag?',
        options: ['Daarin zit een foto van oma als kind.', 'Daarin zit een foto van de kat.', 'Daarin zit een foto van papa als volwassene.'],
        correct: 'Daarin zit een foto van oma als kind.',
        explanation: 'Liam zoekt een familielid dat nog een kind is. Oma is acht jaar op de foto in de blauwe omslag, dus die foto past.',
        challenge: true
      },
      {
        area: 'explore',
        prompt: 'Welke twee lijnen zijn evenwijdig?',
        options: ['Twee rechte lijnen die overal even ver van elkaar blijven.', 'Twee lijnen die elkaar kruisen.', 'Een rechte en een kromme lijn die elkaar raken.'],
        correct: 'Twee rechte lijnen die overal even ver van elkaar blijven.',
        explanation: 'Evenwijdige lijnen blijven overal even ver van elkaar en snijden elkaar niet.'
      },
      {
        area: 'math',
        prompt: 'Welk getal is oneven?',
        options: ['15', '12', '18'],
        correct: '15',
        explanation: 'Je kunt 15 niet in twee gelijke groepjes verdelen zonder dat er één overblijft. Daarom is 15 oneven.'
      },
      {
        area: 'language',
        prompt: 'Welke zin is juist geschreven?',
        options: ['We spelen op het plein.', 'We spelen op het plijn.', 'We spelen op het plien.'],
        correct: 'We spelen op het plein.',
        explanation: 'Je schrijft plein met ei: p-l-ei-n.'
      },
      {
        area: 'explore',
        prompt: 'Welke hoes beschermt een foto het best tegen een paar regendruppels?',
        options: ['een waterdichte plastic hoes', 'een papieren zak', 'een open kartonnen doos'],
        correct: 'een waterdichte plastic hoes',
        explanation: 'Een waterdichte plastic hoes houdt de druppels tegen. Papier en open karton kunnen nat worden.'
      },
      {
        area: 'math',
        prompt: 'Er liggen 9 foto’s in een album. Liam plakt er 6 bij en haalt daarna 4 mislukte foto’s weg. Hoeveel foto’s blijven in het album?',
        options: ['11', '15', '7'],
        correct: '11',
        explanation: 'Reken in twee stappen: 9 + 6 = 15. Daarna 15 − 4 = 11. Er blijven 11 foto’s over.',
        challenge: true
      },
      {
        area: 'language',
        prompt: 'Welk woord is een zelfstandig naamwoord voor een ding?',
        options: ['wc-rol', 'rolt', 'zacht'],
        correct: 'wc-rol',
        explanation: 'Een wc-rol is een ding, dus wc-rol is een zelfstandig naamwoord. Rolt is een werkwoord en zacht zegt hoe iets is.'
      },
      {
        area: 'explore',
        prompt: 'Kylian Mbappé, Kevin De Bruyne en Cristiano Ronaldo bekijken om de beurt een foto. Mbappé is na Kevin aan de beurt, maar vóór Ronaldo. Wie is als tweede aan de beurt?',
        options: ['Kylian Mbappé', 'Kevin De Bruyne', 'Cristiano Ronaldo'],
        correct: 'Kylian Mbappé',
        explanation: 'Kevin komt eerst. Mbappé komt na Kevin maar vóór Ronaldo. De volgorde is dus Kevin, Mbappé, Ronaldo. Mbappé is tweede.',
        challenge: true
      }
    ]
  }
};
