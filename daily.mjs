export const ACTIVE_DATE = '2026-11-04';
export const DAILY_CONTENT = {
  '2026-11-04': {
    title: 'De mistige lichtjesroute',
    questions: [
      {
        area: 'math',
        prompt: 'Aan een tak hangen 13 lichtjes. Vijf lichtjes gaan uit. Hoeveel lichtjes blijven branden?',
        options: ['8', '7', '9'],
        correct: '8',
        explanation: 'Splits 5 in 3 en 2. Eerst 13 - 3 = 10, daarna 10 - 2 = 8.',
        challenge: true,
        sock: {
          operator: '-',
          start: 13,
          splitTotal: 5,
          first: 3,
          second: 2,
          result: 8,
          step: '13 - 3 = 10, daarna 10 - 2 = 8.'
        }
      },
      {
        area: 'language',
        storyTitle: 'Het briefje bij de buitendeur',
        passage: 'Doe eerst je fluohesje aan. Controleer daarna of je boekentas goed dicht is. Stap pas dan naar buiten.',
        prompt: 'Wat controleer je nadat je het fluohesje hebt aangedaan?',
        options: ['Of de boekentas goed dicht is.', 'Of de klasdeur op slot is.', 'Of je brooddoos leeg is.'],
        correct: 'Of de boekentas goed dicht is.',
        explanation: 'Op het briefje staat: eerst het fluohesje aandoen en daarna controleren of de boekentas dicht is.'
      },
      {
        area: 'explore',
        prompt: 'Waarom helpt een reflector op een donkere ochtend?',
        options: ['Hij kaatst licht terug en maakt je beter zichtbaar.', 'Hij maakt de mist warmer.', 'Hij laat je sneller wandelen.'],
        correct: 'Hij kaatst licht terug en maakt je beter zichtbaar.',
        explanation: 'Een reflector kaatst licht van bijvoorbeeld een fietslamp of autolamp terug.'
      },
      {
        area: 'math',
        prompt: 'Pikachu verdeelt 14 kleine lampjes eerlijk over 2 slingers. Hoeveel lampjes komen aan elke slinger?',
        options: ['7', '6', '8'],
        correct: '7',
        explanation: 'Maak 2 gelijke groepjes. Aan elke slinger komen 7 lampjes, want 7 + 7 = 14. De deelsom is 14 : 2 = 7.',
        tableOfTwo: true
      },
      {
        area: 'language',
        storyTitle: 'Klaar voor de route',
        passage: 'Voor Liam vertrekt, stopt hij zijn leesmap in de tas. Daarna hangt hij een geel lint aan de rits. Pas dan zet hij zijn muts op.',
        prompt: 'Het gele lint hangt al aan de rits, maar de leesmap ligt nog op tafel. Wat moet Liam eerst herstellen?',
        options: ['De leesmap in de tas stoppen.', 'Zijn muts opzetten.', 'Het gele lint weggooien.'],
        correct: 'De leesmap in de tas stoppen.',
        explanation: 'De leesmap moet vóór het gele lint in de tas. Liam moet dus eerst de ontbrekende eerste stap uitvoeren.',
        challenge: true
      },
      {
        area: 'explore',
        prompt: 'Welk symbool komt daarna: geel, geel, blauw, geel, geel, blauw, ...?',
        options: ['Geel', 'Blauw', 'Rood'],
        correct: 'Geel',
        explanation: 'Het patroon herhaalt telkens geel, geel, blauw. Na blauw begint het opnieuw met geel.'
      },
      {
        area: 'math',
        prompt: 'Welk getal ontbreekt: 9 + __ = 17?',
        options: ['8', '7', '9'],
        correct: '8',
        explanation: 'Van 9 naar 17 tel je 8 verder. Dus 9 + 8 = 17.'
      },
      {
        area: 'language',
        prompt: 'Welk MKMM-woord is juist geschreven?',
        options: ['lamp', 'lmap', 'lam'],
        correct: 'lamp',
        explanation: 'Lamp heeft één medeklinker l, één klinker a en daarna twee medeklinkers m en p: MKMM.'
      },
      {
        area: 'explore',
        prompt: 'Waardoor ontstaat een schaduw?',
        options: ['Een voorwerp houdt licht tegen.', 'Een voorwerp maakt extra licht.', 'De lucht duwt het licht weg.'],
        correct: 'Een voorwerp houdt licht tegen.',
        explanation: 'Achter een voorwerp dat licht tegenhoudt, komt minder licht. Daar zie je een schaduw.'
      },
      {
        area: 'math',
        prompt: 'Kevin De Bruyne heeft 20 oefenkegels. Hij bergt er 6 op. Hoeveel kegels blijven staan?',
        options: ['14', '13', '15'],
        correct: '14',
        explanation: '20 - 6 = 14. Er blijven 14 oefenkegels staan.'
      },
      {
        area: 'language',
        prompt: 'Welk woord begint met dezelfde klank als “plas”?',
        options: ['plant', 'jas', 'sok'],
        correct: 'plant',
        explanation: 'Plas en plant beginnen allebei met de klank “pl”.'
      },
      {
        area: 'explore',
        prompt: 'Drie lichtjes staan links, in het midden en rechts. Het blauwe lichtje staat rechts. Het rode lichtje staat niet in het midden. Waar staat het groene lichtje?',
        options: ['In het midden.', 'Links.', 'Rechts.'],
        correct: 'In het midden.',
        explanation: 'Rechts is al blauw. Rood staat niet in het midden en moet dus links staan. Daardoor blijft het midden over voor groen.',
        challenge: true
      }
    ]
  }
};
