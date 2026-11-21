export const ACTIVE_DATE = '2026-11-21';
export const DAILY_CONTENT = {
  '2026-11-21': {
    title: 'De natuurkoorkoffer',
    questions: [
      {
        area: 'math',
        prompt: 'Squirtle heeft 9 blaadjes voor een natuurkroon en vindt er nog 6. Hoeveel blaadjes heeft hij samen?',
        options: ['15', '14', '16'],
        correct: '15',
        explanation: 'Ga via 10: splits 6 in 1 en 5. Eerst 9 + 1 = 10, daarna 10 + 5 = 15.',
        sock: {operator: '+', start: 9, splitTotal: 6, first: 1, second: 5, result: 15, step: '9 + 1 = 10, daarna 10 + 5 = 15.'},
        challenge: true
      },
      {
        area: 'language',
        prompt: 'Welk woord past in de zin? “Het koor zingt op het grote ___.”',
        options: ['plein', 'plijn', 'plejn'],
        correct: 'plein',
        explanation: 'De open plaats bij een gebouw heet een plein. Je schrijft plein met ei.'
      },
      {
        area: 'explore',
        prompt: 'Welk deel van een boom neemt water op uit de grond?',
        options: ['de wortels', 'de takken', 'de bloemen'],
        correct: 'de wortels',
        explanation: 'De wortels zitten in de grond en nemen daar water op voor de boom.'
      },
      {
        area: 'math',
        prompt: 'Erling Haaland legt 4 groepjes van telkens 2 dennenappels bij oefenkegels. Hoeveel dennenappels zijn dat?',
        options: ['8', '6', '10'],
        correct: '8',
        explanation: 'Vier groepjes van 2 zijn samen 8 dennenappels: 2 + 2 + 2 + 2 = 8. De passende maalsom is 4 × 2 = 8. Het product is 8.',
        tableOfTwo: true
      },
      {
        area: 'language',
        storyTitle: 'Noors natuurconcert',
        passage: 'Zaterdag maakt Noor een uitnodiging voor oma. Zij schrijft dat iedereen om kwart voor vier aan de schoolpoort wacht. Om vier uur begint het natuurkoor. Eerst zingen de kinderen over de wind. Daarna klinkt een lied over bomen. Na afloop drinken Noor en oma warme chocolademelk.',
        prompt: 'Wie stuurt de uitnodiging, en voor wie is ze bedoeld?',
        options: ['Noor stuurt ze naar oma.', 'Oma stuurt ze naar Noor.', 'Het koor stuurt ze naar de schoolpoort.'],
        correct: 'Noor stuurt ze naar oma.',
        explanation: 'Noor maakt en schrijft de uitnodiging. Oma is de persoon voor wie de uitnodiging bedoeld is.'
      },
      {
        area: 'explore',
        prompt: 'Een hoek bestaat uit een hoekpunt en nog twee delen. Hoe heten die twee delen?',
        options: ['de benen', 'de wortels', 'de cirkels'],
        correct: 'de benen',
        explanation: 'De twee lijnen die bij het hoekpunt samenkomen, noem je de benen van de hoek.'
      },
      {
        area: 'math',
        prompt: 'Cristiano Ronaldo heeft 20 vlaggetjes. Zeven zijn blauw en de rest is groen. Hoeveel vlaggetjes zijn groen?',
        options: ['13', '12', '14'],
        correct: '13',
        explanation: 'Trek de 7 blauwe vlaggetjes van 20 af: 20 − 7 = 13. Er zijn dus 13 groene vlaggetjes.'
      },
      {
        area: 'language',
        storyTitle: 'Noors natuurconcert',
        passage: 'Zaterdag maakt Noor een uitnodiging voor oma. Zij schrijft dat iedereen om kwart voor vier aan de schoolpoort wacht. Om vier uur begint het natuurkoor. Eerst zingen de kinderen over de wind. Daarna klinkt een lied over bomen. Na afloop drinken Noor en oma warme chocolademelk.',
        prompt: 'Welke twee dingen gebeuren na het wachten aan de schoolpoort, maar vóór de warme chocolademelk?',
        options: ['Eerst het windlied en daarna het bomenlied.', 'Eerst de chocolademelk en daarna de uitnodiging.', 'Eerst het bomenlied en daarna het wachten.'],
        correct: 'Eerst het windlied en daarna het bomenlied.',
        explanation: 'Lees de volgorde terug: wachten, het lied over de wind, het lied over bomen en pas daarna warme chocolademelk.',
        challenge: true
      },
      {
        area: 'explore',
        prompt: 'Miraidon, Pikachu en Squirtle hebben elk iets anders: een blad, een dennenappel of een veer. Squirtle heeft de veer. Miraidon heeft geen dennenappel. Wat heeft Pikachu?',
        options: ['de dennenappel', 'het blad', 'de veer'],
        correct: 'de dennenappel',
        explanation: 'Squirtle heeft de veer. Dan blijven het blad en de dennenappel over. Miraidon heeft geen dennenappel, dus Miraidon heeft het blad en Pikachu de dennenappel.',
        challenge: true
      },
      {
        area: 'math',
        prompt: 'Welk getal bestaat uit 1 tiental en 7 eenheden?',
        options: ['17', '71', '10'],
        correct: '17',
        explanation: 'Eén tiental is 10. Met 7 eenheden erbij krijg je 10 + 7 = 17.'
      },
      {
        area: 'language',
        prompt: 'Welke rij bevat het juiste lidwoord én het juiste meervoud?',
        options: ['de boom – de bomen', 'het boom – de boomen', 'de zingen – de zingens'],
        correct: 'de boom – de bomen',
        explanation: 'Boom is een zelfstandig naamwoord. Je zegt de boom en in het meervoud de bomen.'
      },
      {
        area: 'explore',
        prompt: 'Met welk instrument meet je hoe warm of koud de lucht is?',
        options: ['een thermometer', 'een meetlat', 'een klok'],
        correct: 'een thermometer',
        explanation: 'Een thermometer meet de temperatuur en toont hoe warm of koud het is.'
      }
    ]
  }
};
