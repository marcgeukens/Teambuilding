export const ACTIVE_DATE = '2026-11-20';
export const DAILY_CONTENT = {
  '2026-11-20': {
    title: 'Het familievragenpad',
    questions: [
      {
        area: 'math',
        prompt: 'Pikachu heeft 16 fotostickers en gebruikt er 7 voor een familiekaart. Hoeveel stickers blijven over?',
        options: ['9', '8', '10'],
        correct: '9',
        explanation: 'Ga via 10: splits 7 in 6 en 1. Eerst 16 − 6 = 10, daarna 10 − 1 = 9.',
        sock: {operator: '-', start: 16, splitTotal: 7, first: 6, second: 1, result: 9, step: '16 − 6 = 10, daarna 10 − 1 = 9.'}
      },
      {
        area: 'language',
        storyTitle: 'Liams vragenpad',
        passage: 'Vrijdag schrijft Liam drie vragen op een kaart. Zaterdag oefent hij het gesprek met papa. Zondag om drie uur praat hij met oma. Maandag stopt hij het ingevulde blad in de roze map en neemt hij het mee naar school.',
        prompt: 'Wat doet Liam vlak vóór het gesprek met oma, en wat doet hij de dag erna?',
        options: ['Hij oefent met papa en stopt daarna het blad in de roze map.', 'Hij schrijft vragen en praat daarna met papa.', 'Hij stopt het blad in de map en schrijft daarna vragen.'],
        correct: 'Hij oefent met papa en stopt daarna het blad in de roze map.',
        explanation: 'Vlak vóór zondag komt zaterdag: dan oefent Liam met papa. De dag na zondag is maandag: dan stopt hij het ingevulde blad in de roze map.',
        challenge: true
      },
      {
        area: 'explore',
        prompt: 'Twee treinsporen lopen recht naast elkaar en komen nooit samen. Hoe noem je zulke lijnen?',
        options: ['evenwijdige lijnen', 'loodrecht snijdende lijnen', 'gebogen lijnen'],
        correct: 'evenwijdige lijnen',
        explanation: 'Evenwijdige lijnen blijven overal even ver van elkaar en snijden elkaar niet.'
      },
      {
        area: 'math',
        prompt: 'Tante maakt 8 paren van telkens 2 fotokaartjes. Welk getal hoort op de lege plaats: ? : 2 = 8?',
        options: ['16', '14', '18'],
        correct: '16',
        explanation: 'Acht paren zijn 8 groepjes van 2: samen 16 kaartjes. De passende deelsom is 16 : 2 = 8. Het quotiënt is 8.',
        tableOfTwo: true
      },
      {
        area: 'language',
        prompt: 'Welk woord past in de zin? “Na het gesprek eten Liam en oma een bolletje ___.”',
        options: ['ijs', 'eis', 'ijss'],
        correct: 'ijs',
        explanation: 'Het koude hapje schrijf je als ijs, met ij.'
      },
      {
        area: 'explore',
        prompt: 'Het gesprek begint om 14:30. Liam praat 20 minuten en ruimt daarna 10 minuten op. Wanneer is alles klaar?',
        options: ['15:00', '14:50', '15:10'],
        correct: '15:00',
        explanation: 'Eerst 20 minuten erbij: 14:30 wordt 14:50. Daarna nog 10 minuten: 14:50 wordt 15:00.',
        challenge: true
      },
      {
        area: 'math',
        prompt: 'Som A is 6 + 8. Som B is 17 − 5. Welke uitspraak klopt?',
        options: ['Som A is 2 groter dan som B.', 'Som B is 2 groter dan som A.', 'De twee sommen zijn even groot.'],
        correct: 'Som A is 2 groter dan som B.',
        explanation: 'Som A: 6 + 8 = 14. Je kunt via 10 gaan: 6 + 4 + 4 = 14. Som B: 17 − 5 = 12. Dus 14 is 2 groter dan 12.',
        challenge: true
      },
      {
        area: 'language',
        prompt: 'Welke rij is helemaal juist?',
        options: ['het interview – de interviews', 'de interview – de interviews', 'het oma – de oma’s'],
        correct: 'het interview – de interviews',
        explanation: 'Je zegt het interview. Het meervoud is de interviews.'
      },
      {
        area: 'explore',
        prompt: 'Een foto is 8 centimeter breed. Welke meetlat gebruik je om dat het best te controleren?',
        options: ['een meetlat met centimeters', 'een klok met wijzers', 'een weegschaal met kilogrammen'],
        correct: 'een meetlat met centimeters',
        explanation: 'Breedte is een lengte. Lengte in centimeters meet je met een meetlat.'
      },
      {
        area: 'math',
        prompt: 'Lionel Messi kiest het getal met 3 tientallen en 4 eenheden. Welk getal is dat?',
        options: ['34', '43', '30'],
        correct: '34',
        explanation: 'Drie tientallen zijn 30. Met 4 eenheden erbij krijg je 30 + 4 = 34.'
      },
      {
        area: 'language',
        storyTitle: 'Liams vragenpad',
        passage: 'Vrijdag schrijft Liam drie vragen op een kaart. Zaterdag oefent hij het gesprek met papa. Zondag om drie uur praat hij met oma. Maandag stopt hij het ingevulde blad in de roze map en neemt hij het mee naar school.',
        prompt: 'Welke vraagzin krijgt als antwoord “Zondag om drie uur”?',
        options: ['Wanneer praat Liam met oma?', 'Wie praat met oma?', 'Waar ligt de roze map?'],
        correct: 'Wanneer praat Liam met oma?',
        explanation: 'Zondag om drie uur zegt wanneer iets gebeurt. Daarom begint de juiste vraag met wanneer.'
      },
      {
        area: 'explore',
        prompt: 'De wc-robot rijdt volgens dit patroon: links, rechts, links, rechts. Welke kant volgt daarna?',
        options: ['links', 'rechts', 'rechtdoor'],
        correct: 'links',
        explanation: 'De richtingen wisselen telkens: links, rechts, links, rechts. Daarna komt weer links. Gelukkig rijdt hij niet in de pot!'
      }
    ]
  }
};
