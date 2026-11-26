export const ACTIVE_DATE = '2026-11-26';
export const DAILY_CONTENT = {
  '2026-11-26': {
    title: 'De donderdagse deelcheck',
    questions: [
      {
        area: 'math',
        prompt: 'In een doos zitten 14 glanzende sterren. Liam gebruikt er 6. Hoeveel sterren blijven er over?',
        options: ['8', '7', '9'],
        correct: '8',
        explanation: 'Ga via 10: splits 6 in 4 en 2. Eerst 14 − 4 = 10, daarna 10 − 2 = 8.',
        sock: {operator: '-', start: 14, splitTotal: 6, first: 4, second: 2, result: 8, step: '14 − 4 = 10, daarna 10 − 2 = 8.'},
        challenge: true
      },
      {
        area: 'language',
        storyTitle: 'Klaar voor de geefkast',
        passage: 'Op donderdag sorteert Liam thuis speelgoed voor de geefkast. De rode auto is heel, maar nog vuil. Het dominospel is proper en alle stenen zijn er. De puzzel mist twee stukken. Liam maakt de auto schoon. Daarna legt hij de auto en het dominospel klaar om vrijdag mee te nemen.',
        prompt: 'Welke twee stukken speelgoed kan Liam meenemen nadat hij klaar is, en waarom?',
        options: ['De auto en het dominospel, want ze zijn dan proper, heel en volledig.', 'De auto en de puzzel, want vuil speelgoed mag mee.', 'Het dominospel en de puzzel, want ontbrekende stukken zijn niet erg.'],
        correct: 'De auto en het dominospel, want ze zijn dan proper, heel en volledig.',
        explanation: 'Je combineert verschillende zinnen: de auto is heel en wordt schoongemaakt; het dominospel is proper en volledig. De puzzel mist stukken.',
        challenge: true
      },
      {
        area: 'explore',
        prompt: 'Twee benen van een hoek komen samen in één punt. Hoe heet dat punt?',
        options: ['het hoekpunt', 'het lijnstuk', 'de rechte'],
        correct: 'het hoekpunt',
        explanation: 'Een hoek heeft twee benen. De plaats waar die benen samenkomen, heet het hoekpunt.'
      },
      {
        area: 'math',
        prompt: 'Liam verdeelt 14 kaartjes in eerlijke groepjes van 2. Hoeveel groepjes krijgt hij?',
        options: ['7', '6', '8'],
        correct: '7',
        explanation: 'Je maakt 7 groepjes van telkens 2 kaartjes. De passende deelsom is 14 : 2 = 7. Het quotiënt is 7.',
        tableOfTwo: true
      },
      {
        area: 'language',
        prompt: 'Welk woord past in de zin? “Pikachu wacht op het school___.”',
        options: ['plein', 'plijn', 'pleyn'],
        correct: 'plein',
        explanation: 'Je schrijft plein met ei.'
      },
      {
        area: 'explore',
        prompt: 'De energiekaartjes liggen in dit patroon: geel, blauw, blauw, geel, blauw, blauw, ... Welke kleur komt nu?',
        options: ['geel', 'blauw', 'rood'],
        correct: 'geel',
        explanation: 'Het stukje geel, blauw, blauw herhaalt zich. Na de tweede blauwe kaart begint het patroon opnieuw met geel.'
      },
      {
        area: 'math',
        prompt: 'Kevin De Bruyne legt 12 oefenkegels neer en zet er nog 5 bij. Hoeveel kegels staan er samen?',
        options: ['17', '16', '18'],
        correct: '17',
        explanation: 'Je telt 5 bij 12: 12 + 5 = 17. Je hoeft geen voetbalfeitjes te kennen om dit uit te rekenen.'
      },
      {
        area: 'language',
        storyTitle: 'Klaar voor de geefkast',
        passage: 'Op donderdag sorteert Liam thuis speelgoed voor de geefkast. De rode auto is heel, maar nog vuil. Het dominospel is proper en alle stenen zijn er. De puzzel mist twee stukken. Liam maakt de auto schoon. Daarna legt hij de auto en het dominospel klaar om vrijdag mee te nemen.',
        prompt: 'Wat doet Liam vlak voordat hij de auto en het dominospel klaarlegt?',
        options: ['Hij maakt de auto schoon.', 'Hij haalt twee stukken uit de puzzel.', 'Hij maakt het dominospel vuil.'],
        correct: 'Hij maakt de auto schoon.',
        explanation: 'In de tekst staat eerst dat Liam de auto schoonmaakt. Pas daarna legt hij de auto en het dominospel klaar.'
      },
      {
        area: 'explore',
        prompt: 'Op de bovenste, middelste en onderste plank ligt telkens één ding: een bal, een boek en een puzzel. Het boek ligt in het midden. De puzzel ligt niet bovenaan. Waar ligt de bal?',
        options: ['op de bovenste plank', 'op de middelste plank', 'op de onderste plank'],
        correct: 'op de bovenste plank',
        explanation: 'Het boek ligt al in het midden. De puzzel ligt niet bovenaan, dus die ligt onderaan. Dan blijft de bovenste plank over voor de bal.',
        challenge: true
      },
      {
        area: 'math',
        prompt: 'Welk getal ontbreekt? ? − 4 = 10',
        options: ['14', '13', '15'],
        correct: '14',
        explanation: 'Denk omgekeerd: 10 + 4 = 14. Controleer: 14 − 4 = 10.'
      },
      {
        area: 'language',
        prompt: 'Welke combinatie bevat het juiste lidwoord en meervoud?',
        options: ['het spel – de spellen', 'de spel – de spels', 'het spelen – de spel'],
        correct: 'het spel – de spellen',
        explanation: 'Spel is een zelfstandig naamwoord. Je zegt het spel en in het meervoud de spellen.'
      },
      {
        area: 'explore',
        prompt: 'Een bekertje water staat buiten en bevriest tijdens een koude nacht. Wat gebeurt er met het water?',
        options: ['Het wordt vast ijs.', 'Het wordt warm gas.', 'Het verandert in zand.'],
        correct: 'Het wordt vast ijs.',
        explanation: 'Als water bevriest, verandert het van vloeibaar water in vast ijs.'
      }
    ]
  }
};
