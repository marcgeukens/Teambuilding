export const ACTIVE_DATE = '2026-11-09';
export const DAILY_CONTENT = {
  '2026-11-09': {
    title: 'De boekenkringcode',
    questions: [
      {
        area: 'math',
        prompt: 'Liam legt 9 boeken op een tafel en zet er nog 6 bij. Hoeveel boeken liggen er samen?',
        options: ['15', '14', '16'],
        correct: '15',
        explanation: 'Splits 6 in 1 en 5. Eerst 9 + 1 = 10, daarna 10 + 5 = 15.',
        challenge: true,
        sock: {
          operator: '+',
          start: 9,
          splitTotal: 6,
          first: 1,
          second: 5,
          result: 15,
          step: '9 + 1 = 10, daarna 10 + 5 = 15.'
        }
      },
      {
        area: 'language',
        storyTitle: 'Klaar voor de boekenkring',
        passage: 'Kies eerst een boek. Leg daarna een bladwijzer bij je lievelingsbladzijde. Stop het boek tot slot voorzichtig in je tas.',
        prompt: 'Wat doe je nadat je een boek hebt gekozen en vóór het boek in de tas gaat?',
        options: ['Een bladwijzer bij je lievelingsbladzijde leggen.', 'Het boek terug in de kast zetten.', 'De boekentas leegmaken.'],
        correct: 'Een bladwijzer bij je lievelingsbladzijde leggen.',
        explanation: 'Tussen het kiezen en het opbergen staat de stap met de bladwijzer.'
      },
      {
        area: 'explore',
        prompt: 'Waarom heeft een boek meestal een stevige kaft?',
        options: ['De kaft helpt de bladzijden beschermen.', 'De kaft maakt het boek vanzelf leesbaar.', 'De kaft laat het boek zweven.'],
        correct: 'De kaft helpt de bladzijden beschermen.',
        explanation: 'Een stevige kaft vangt stoten en vuil op en helpt zo de bladzijden netjes te houden.'
      },
      {
        area: 'math',
        prompt: 'Er liggen 7 paren boekenkaartjes. Elk paar heeft 2 kaartjes. Welke ontbrekende factor past: ? × 2 = 14?',
        options: ['7', '6', '8'],
        correct: '7',
        explanation: 'Je telt 7 groepjes van 2: 2 + 2 + 2 + 2 + 2 + 2 + 2 = 14. De keersom is 7 × 2 = 14.',
        tableOfTwo: true
      },
      {
        area: 'language',
        storyTitle: 'Drie boeken voor de kring',
        passage: 'Op tafel liggen een rood, een blauw en een groen boek. Noor kiest rood. Amir kiest niet groen. Liam krijgt het boek dat overblijft.',
        prompt: 'Welke kleur boek krijgt Liam?',
        options: ['Groen', 'Blauw', 'Rood'],
        correct: 'Groen',
        explanation: 'Rood is al voor Noor. Amir kiest niet groen en moet dus blauw kiezen. Daardoor blijft groen over voor Liam.',
        challenge: true
      },
      {
        area: 'explore',
        prompt: 'De rechte rand van een bladzijde loopt van punt A tot punt B. Hoe heet dit rechte stukje tussen twee eindpunten?',
        options: ['Een lijnstuk.', 'Een kromme lijn.', 'Een losse punt.'],
        correct: 'Een lijnstuk.',
        explanation: 'Een lijnstuk is recht en heeft twee eindpunten. Hier zijn dat A en B.'
      },
      {
        area: 'math',
        prompt: 'Welk getal ontbreekt op de boekenlijn: 35, 37, __, 41?',
        options: ['39', '38', '40'],
        correct: '39',
        explanation: 'De getallen gaan telkens 2 verder: 35, 37, 39, 41.'
      },
      {
        area: 'language',
        prompt: 'Welk MKMM-woord is juist geschreven?',
        options: ['film', 'flim', 'fil'],
        correct: 'film',
        explanation: 'Film heeft één medeklinker f, één klinker i en daarna twee medeklinkers l en m: MKMM.'
      },
      {
        area: 'explore',
        prompt: 'Vandaag is het maandag. De boekenkring is over twee dagen. Op welke dag is dat?',
        options: ['Woensdag', 'Dinsdag', 'Donderdag'],
        correct: 'Woensdag',
        explanation: 'Eén dag na maandag is dinsdag en twee dagen na maandag is woensdag.'
      },
      {
        area: 'math',
        prompt: 'Cristiano Ronaldo heeft 18 bladwijzers en deelt er 5 uit. Hoeveel bladwijzers houdt hij over?',
        options: ['13', '12', '14'],
        correct: '13',
        explanation: '18 - 5 = 13. Hij houdt 13 bladwijzers over.'
      },
      {
        area: 'language',
        prompt: 'Welk woord rijmt op “boek”?',
        options: ['koek', 'blad', 'kast'],
        correct: 'koek',
        explanation: 'Boek en koek eindigen met dezelfde klank “oek” en rijmen dus.'
      },
      {
        area: 'explore',
        prompt: 'Drie boeken staan elk op een andere plank: laag, midden of hoog. Het dierenboek staat in het midden. Het moppenboek staat niet laag. Het Pokémonboek staat niet hoog. Waar staat het Pokémonboek?',
        options: ['Op de lage plank.', 'Op de middelste plank.', 'Op de hoge plank.'],
        correct: 'Op de lage plank.',
        explanation: 'Midden is al voor het dierenboek. Het moppenboek staat niet laag en moet dus hoog staan. Daardoor blijft de lage plank over voor het Pokémonboek.',
        challenge: true
      }
    ]
  }
};
