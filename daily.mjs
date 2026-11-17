export const ACTIVE_DATE = '2026-11-17';
export const DAILY_CONTENT = {
  '2026-11-17': {
    title: 'De roze-mapcode',
    questions: [
      {
        area: 'math',
        prompt: 'In de roze map zitten 7 kaartjes. Liam stopt er nog 6 kaartjes bij. Hoeveel kaartjes zitten nu in de map?',
        options: ['13', '12', '14'],
        correct: '13',
        explanation: 'Maak eerst 10: splits 6 in 3 en 3. Dan wordt 7 + 6 hetzelfde als 7 + 3 + 3. Dus 10 + 3 = 13.',
        sock: {operator: '+', start: 7, splitTotal: 6, first: 3, second: 3, result: 13, step: '7 + 3 = 10, daarna 10 + 3 = 13.'}
      },
      {
        area: 'language',
        storyTitle: 'Het briefje van juf Barbara',
        passage: 'De stamboomkaartjes gaan op donderdag 19 november terug naar school. Het ingevulde interview mag op maandag 23 november mee.',
        prompt: 'Wat moet volgens het briefje het eerst terug naar school?',
        options: ['de stamboomkaartjes', 'het ingevulde interview', 'beide op dezelfde dag'],
        correct: 'de stamboomkaartjes',
        explanation: 'Donderdag 19 november komt vóór maandag 23 november. Daarom moeten de stamboomkaartjes eerst terug naar school.',
        challenge: true
      },
      {
        area: 'explore',
        prompt: 'Welk voorwerp heeft duidelijk een rechte hoek?',
        options: ['de hoek van een boek', 'een ronde bal', 'een gebogen touw'],
        correct: 'de hoek van een boek',
        explanation: 'Bij de hoek van een boek komen twee rechte zijden samen in een rechte hoek.'
      },
      {
        area: 'math',
        prompt: 'Miraidon legt 12 energiekaartjes in groepjes van 2. Welk getal ontbreekt in ? × 2 = 12?',
        options: ['6', '5', '7'],
        correct: '6',
        explanation: 'Met 12 kaartjes maak je 6 groepjes van 2. De passende som is 6 × 2 = 12. De ontbrekende factor is 6 en het product is 12.',
        tableOfTwo: true,
        challenge: true
      },
      {
        area: 'language',
        prompt: 'Welke zin is juist geschreven?',
        options: ['Wij eten rijst.', 'Wij eten reist.', 'Wij eten reisd.'],
        correct: 'Wij eten rijst.',
        explanation: 'Je schrijft rijst met ij: r-ij-s-t.'
      },
      {
        area: 'explore',
        prompt: 'Vandaag is het dinsdag 17 november. De kaartjes moeten donderdag 19 november mee. Hoeveel nachten zijn er nog?',
        options: ['2 nachten', '1 nacht', '3 nachten'],
        correct: '2 nachten',
        explanation: 'Van dinsdag naar woensdag is één nacht en van woensdag naar donderdag nog één. Samen zijn dat 2 nachten.'
      },
      {
        area: 'math',
        prompt: 'Welk getal komt onmiddellijk vóór 30?',
        options: ['29', '31', '20'],
        correct: '29',
        explanation: 'Op de getallenlijn staat 29 één stap vóór 30.'
      },
      {
        area: 'language',
        prompt: 'Welk vraagwoord past? “___ heeft de wc-rol per ongeluk in de roze map gestopt?”',
        options: ['Wie', 'Waar', 'Wanneer'],
        correct: 'Wie',
        explanation: 'Je vraagt naar een persoon. Daarom past het vraagwoord wie.'
      },
      {
        area: 'explore',
        prompt: 'Welke beschrijving past bij een gebroken lijn?',
        options: ['rechte lijnstukken die met hoeken aan elkaar vastzitten', 'één lijn zonder bocht of hoek', 'één ronde lijn zonder hoek'],
        correct: 'rechte lijnstukken die met hoeken aan elkaar vastzitten',
        explanation: 'Een gebroken lijn bestaat uit rechte lijnstukken die van richting veranderen bij een hoek.'
      },
      {
        area: 'math',
        prompt: 'Welk getal ontbreekt? 19 − ? = 12',
        options: ['7', '6', '8'],
        correct: '7',
        explanation: 'Denk omgekeerd: 12 + 7 = 19. Daarom is 19 − 7 = 12.'
      },
      {
        area: 'language',
        prompt: 'Welk woord is een zelfstandig naamwoord voor een plant?',
        options: ['boom', 'groeit', 'hoog'],
        correct: 'boom',
        explanation: 'Een boom is een plant en dus een zelfstandig naamwoord. Groeit is een werkwoord en hoog zegt hoe iets is.'
      },
      {
        area: 'explore',
        prompt: 'Cristiano Ronaldo, Lionel Messi en Erling Haaland houden elk een ander kaartje vast: 12, 15 of 18. Ronaldo heeft 18. Haaland heeft het enige oneven getal. Wie heeft het kaartje met 12?',
        options: ['Lionel Messi', 'Cristiano Ronaldo', 'Erling Haaland'],
        correct: 'Lionel Messi',
        explanation: 'Ronaldo heeft 18. Van 12, 15 en 18 is alleen 15 oneven, dus Haaland heeft 15. Dan blijft 12 over voor Messi.',
        challenge: true
      }
    ]
  }
};
