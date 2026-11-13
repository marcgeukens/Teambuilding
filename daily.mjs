export const ACTIVE_DATE = '2026-11-13';
export const DAILY_CONTENT = {
  '2026-11-13': {
    title: 'De herfstkraam',
    questions: [
      {
        area: 'math',
        prompt: 'In de herfstkraam liggen 15 gekleurde blaadjes. Liam haalt er 7 uit. Hoeveel blaadjes blijven liggen?',
        options: ['8', '7', '9'],
        correct: '8',
        explanation: 'Splits 7 in 5 en 2. Eerst 15 - 5 = 10, daarna 10 - 2 = 8.',
        challenge: true,
        sock: {
          operator: '-',
          start: 15,
          splitTotal: 7,
          first: 5,
          second: 2,
          result: 8,
          step: '15 - 5 = 10, daarna 10 - 2 = 8.'
        }
      },
      {
        area: 'language',
        prompt: 'Welk woord heeft de MKMM-bouw en is juist gespeld?',
        options: ['nest', 'nset', 'nes'],
        correct: 'nest',
        explanation: 'Nest heeft één medeklinker n, één klinker e en daarna twee medeklinkers s en t: MKMM.'
      },
      {
        area: 'explore',
        prompt: 'Welk voorwerp wordt door een magneet aangetrokken?',
        options: ['Een ijzeren paperclip', 'Een papieren zakdoek', 'Een houten blokje'],
        correct: 'Een ijzeren paperclip',
        explanation: 'IJzer wordt door een magneet aangetrokken. Papier en hout niet.'
      },
      {
        area: 'math',
        prompt: 'Squirtle verdeelt 18 energiekaartjes eerlijk over 2 mapjes. Hoeveel kaartjes komen in elk mapje?',
        options: ['9', '8', '10'],
        correct: '9',
        explanation: 'Je verdeelt 18 kaartjes in 2 even grote groepjes. Elk groepje krijgt 9 kaartjes: 18 : 2 = 9.',
        tableOfTwo: true
      },
      {
        area: 'language',
        storyTitle: 'Het briefje bij de herfstkraam',
        passage: 'Leg eerst de kastanjes in de groene mand. Vraag daarna aan juf Barbara de sleutel. Open pas dan het kleine kastje. In het kastje ligt het prijskaartje voor de herfstkraam.',
        prompt: 'Liam heeft de kastanjes al in de groene mand gelegd, maar het kastje is nog dicht. Wat doet hij nu?',
        options: ['Hij vraagt juf Barbara om de sleutel.', 'Hij haalt de kastanjes weer uit de mand.', 'Hij zoekt het prijskaartje onder de tafel.'],
        correct: 'Hij vraagt juf Barbara om de sleutel.',
        explanation: 'Na de kastanjes in de mand komt de stap met de sleutel. Pas daarna mag Liam het kastje openen.',
        challenge: true
      },
      {
        area: 'explore',
        prompt: 'Liam kijkt naar het oosten. Hij draait een halve draai en daarna een kwartslag naar rechts. Naar welke richting kijkt hij nu?',
        options: ['Naar het noorden.', 'Naar het zuiden.', 'Naar het westen.'],
        correct: 'Naar het noorden.',
        explanation: 'Na een halve draai kijkt Liam van oost naar west. Een kwartslag naar rechts vanaf west brengt hem naar noord.',
        challenge: true
      },
      {
        area: 'math',
        prompt: 'Welk getal ontbreekt in de som ? + 6 = 15?',
        options: ['9', '8', '10'],
        correct: '9',
        explanation: 'Van 6 naar 15 tel je 9 erbij. Je kunt controleren: 9 + 6 = 15.'
      },
      {
        area: 'language',
        prompt: 'Welke zin staat in de juiste woordvolgorde?',
        options: ['Haaland schopt de bal naar het doel.', 'Schopt Haaland naar de het doel bal.', 'De bal Haaland het doel naar schopt.'],
        correct: 'Haaland schopt de bal naar het doel.',
        explanation: 'In de juiste zin staan de woorden in een duidelijke volgorde: wie, wat doet hij en waarmee of waarheen.'
      },
      {
        area: 'explore',
        prompt: 'Er ligt wat water op de tafel. Welk voorwerp neemt het water het best op?',
        options: ['Een droge spons', 'Een metalen lepel', 'Een plastic blokje'],
        correct: 'Een droge spons',
        explanation: 'Een spons heeft veel kleine openingen die water opnemen. Metaal en plastic nemen het water niet op.'
      },
      {
        area: 'math',
        prompt: 'Welke splitsing hoort bij het getal 18?',
        options: ['10 + 8', '10 + 7', '9 + 8'],
        correct: '10 + 8',
        explanation: 'Tien en acht zijn samen achttien: 10 + 8 = 18.'
      },
      {
        area: 'language',
        prompt: 'Welke keuze rijmt op “plas”?',
        options: ['jas', 'pot', 'wc'],
        correct: 'jas',
        explanation: 'Plas en jas eindigen met dezelfde klank “as” en rijmen dus.'
      },
      {
        area: 'explore',
        prompt: 'De appel, peer en pompoen liggen elk in een andere mand: klein, middelgroot of groot. De peer ligt in de grote mand. De pompoen ligt niet in de middelgrote mand. In welke mand ligt de appel?',
        options: ['In de middelgrote mand.', 'In de kleine mand.', 'In de grote mand.'],
        correct: 'In de middelgrote mand.',
        explanation: 'De grote mand is al voor de peer. De pompoen kan niet in de middelgrote mand en ligt dus klein. Voor de appel blijft de middelgrote mand over.'
      }
    ]
  }
};
