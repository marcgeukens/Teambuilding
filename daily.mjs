export const ACTIVE_DATE = '2026-11-23';
export const DAILY_CONTENT = {
  '2026-11-23': {
    title: 'De geefkast-speurtocht',
    questions: [
      {
        area: 'math',
        prompt: 'Pikachu legt 8 speelgoedkaartjes in de geefkast en vindt er nog 7. Hoeveel kaartjes zijn er samen?',
        options: ['15', '14', '16'],
        correct: '15',
        explanation: 'Ga via 10: splits 7 in 2 en 5. Eerst 8 + 2 = 10, daarna 10 + 5 = 15.',
        sock: {operator: '+', start: 8, splitTotal: 7, first: 2, second: 5, result: 15, step: '8 + 2 = 10, daarna 10 + 5 = 15.'},
        challenge: true
      },
      {
        area: 'language',
        storyTitle: 'Een tweede leven voor speelgoed',
        passage: 'Van vrijdag 27 november tot vrijdag 4 december staat er een geefkast op de speelplaats. Gezinnen mogen er proper en volledig speelgoed in leggen. Kinderen mogen ook iets uit de kast meenemen. Zo krijgt goed speelgoed een tweede leven en kan het een ander kind blij maken.',
        prompt: 'Welk speelgoed mag volgens de tekst in de geefkast?',
        options: ['een proper spel met alle stukken', 'een puzzel met drie stukken weg', 'een vuile knuffel met een scheur'],
        correct: 'een proper spel met alle stukken',
        explanation: 'In de tekst staat dat speelgoed proper én volledig moet zijn. Alleen het spel met alle stukken voldoet aan beide voorwaarden.'
      },
      {
        area: 'explore',
        prompt: 'Twee rechte latten van een speelgoedrek kruisen elkaar als een vierkante hoek. Hoe noem je die lijnen?',
        options: ['loodrecht snijdende lijnen', 'evenwijdige lijnen', 'gebogen lijnen'],
        correct: 'loodrecht snijdende lijnen',
        explanation: 'Lijnen die elkaar kruisen en samen een vierkante hoek vormen, staan loodrecht op elkaar.'
      },
      {
        area: 'math',
        prompt: 'Liam maakt 5 zakjes met telkens 2 Pokémonkaartjes. Hoeveel kaartjes gebruikt hij?',
        options: ['10', '7', '12'],
        correct: '10',
        explanation: 'Je ziet 5 groepjes van 2 kaartjes: 2 + 2 + 2 + 2 + 2 = 10. De passende maalsom is 5 × 2 = 10. Het product is 10.',
        tableOfTwo: true
      },
      {
        area: 'language',
        prompt: 'Welk woord past in de zin? “Zet de doos op het school___.”',
        options: ['plein', 'plijn', 'pleyn'],
        correct: 'plein',
        explanation: 'Je schrijft schoolplein met ei: plein.'
      },
      {
        area: 'explore',
        prompt: 'Een hoek heeft een hoekpunt en twee rechte stukken die daar beginnen. Hoe heten die twee stukken?',
        options: ['de benen', 'de bogen', 'de punten'],
        correct: 'de benen',
        explanation: 'De twee rechte stukken van een hoek heten de benen. Ze komen samen in het hoekpunt.'
      },
      {
        area: 'math',
        prompt: 'Kevin De Bruyne legt 14 oefenkegels klaar en zet er nog 4 bij. Hoeveel kegels staan er nu?',
        options: ['18', '17', '10'],
        correct: '18',
        explanation: 'Je telt 4 verder vanaf 14: 15, 16, 17, 18. Dus 14 + 4 = 18.'
      },
      {
        area: 'language',
        storyTitle: 'Een tweede leven voor speelgoed',
        passage: 'Van vrijdag 27 november tot vrijdag 4 december staat er een geefkast op de speelplaats. Gezinnen mogen er proper en volledig speelgoed in leggen. Kinderen mogen ook iets uit de kast meenemen. Zo krijgt goed speelgoed een tweede leven en kan het een ander kind blij maken.',
        prompt: 'Noor heeft op zaterdag 28 november een proper, volledig bordspel. Wat kan ze volgens de tekst doen?',
        options: ['Het spel in de geefkast op de speelplaats leggen.', 'Wachten tot na 4 december en het spel stukmaken.', 'Het spel vuil maken en naast de kast zetten.'],
        correct: 'Het spel in de geefkast op de speelplaats leggen.',
        explanation: '28 november ligt tussen 27 november en 4 december. Het spel is proper en volledig, dus Noor kan het in de geefkast op de speelplaats leggen.',
        challenge: true
      },
      {
        area: 'explore',
        prompt: 'Op drie vakken ligt een bal links van een puzzel. Een Miraidonkaart ligt rechts van de puzzel. Wat ligt in het middelste vak?',
        options: ['de puzzel', 'de bal', 'de Miraidonkaart'],
        correct: 'de puzzel',
        explanation: 'De volgorde is bal – puzzel – Miraidonkaart. De puzzel ligt dus in het midden.',
        challenge: true
      },
      {
        area: 'math',
        prompt: 'In een doos liggen 1 tiental blokken en 9 losse blokken. Welk getal hoort daarbij?',
        options: ['19', '10', '91'],
        correct: '19',
        explanation: 'Eén tiental is 10. Met 9 losse eenheden erbij krijg je 10 + 9 = 19.'
      },
      {
        area: 'language',
        prompt: 'Welke combinatie is helemaal juist?',
        options: ['het spel – de spellen', 'de spel – de spels', 'het spelen – de spel'],
        correct: 'het spel – de spellen',
        explanation: 'Spel is een zelfstandig naamwoord. Je zegt het spel in het enkelvoud en de spellen in het meervoud.'
      },
      {
        area: 'explore',
        prompt: 'Waarom is speelgoed doorgeven vaak beter voor het milieu dan goed speelgoed weggooien?',
        options: ['Het speelgoed wordt opnieuw gebruikt en er is minder afval.', 'Het speelgoed verdwijnt vanzelf.', 'Er komt juist meer afval bij.'],
        correct: 'Het speelgoed wordt opnieuw gebruikt en er is minder afval.',
        explanation: 'Door hergebruik hoeft goed speelgoed niet bij het afval. Zo gaat het langer mee en maak je iemand anders blij.'
      }
    ]
  }
};
