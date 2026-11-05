export const ACTIVE_DATE = '2026-11-05';
export const DAILY_CONTENT = {
  '2026-11-05': {
    title: 'De warme sjaalcode',
    questions: [
      {
        area: 'math',
        prompt: 'De Fonkelende Feniksen hebben 6 gestreepte sjaals en 7 effen sjaals. Hoeveel sjaals zijn dat samen?',
        options: ['13', '12', '14'],
        correct: '13',
        explanation: 'Splits 7 in 4 en 3. Eerst 6 + 4 = 10, daarna 10 + 3 = 13.',
        challenge: true,
        sock: {
          operator: '+',
          start: 6,
          splitTotal: 7,
          first: 4,
          second: 3,
          result: 13,
          step: '6 + 4 = 10, daarna 10 + 3 = 13.'
        }
      },
      {
        area: 'language',
        storyTitle: 'Het kaartje bij de kapstok',
        passage: 'Hang eerst je jas aan de haak. Stop daarna je muts in de mouw. Leg tot slot je sjaal op de plank.',
        prompt: 'Waar leg je de sjaal nadat je de muts in de mouw hebt gestopt?',
        options: ['Op de plank.', 'In de boekentas.', 'Onder de kapstok.'],
        correct: 'Op de plank.',
        explanation: 'Na de muts komt de laatste stap: de sjaal op de plank leggen.'
      },
      {
        area: 'explore',
        prompt: 'Welk voorwerp houdt je hals het best warm op een koude ochtend?',
        options: ['Een wollen sjaal.', 'Een metalen ketting.', 'Een papieren strook.'],
        correct: 'Een wollen sjaal.',
        explanation: 'Wol houdt lucht en warmte goed vast. Daarom helpt een wollen sjaal tegen de kou.'
      },
      {
        area: 'math',
        prompt: 'Er liggen 5 paren wanten klaar. Elk paar heeft 2 wanten. Hoeveel wanten zijn dat?',
        options: ['10', '7', '12'],
        correct: '10',
        explanation: 'Je maakt 5 groepjes van 2: 2 + 2 + 2 + 2 + 2 = 10. De keersom is 5 × 2 = 10.',
        tableOfTwo: true
      },
      {
        area: 'language',
        storyTitle: 'Drie sjaals',
        passage: 'Aan de kapstok hangen een rode, een gele en een blauwe sjaal. Amir neemt de rode sjaal. Liam neemt niet de blauwe sjaal. Noor krijgt de sjaal die overblijft.',
        prompt: 'Welke kleur sjaal krijgt Noor?',
        options: ['Blauw', 'Geel', 'Rood'],
        correct: 'Blauw',
        explanation: 'Rood is voor Amir. Liam neemt niet blauw en kiest dus geel. Daardoor blijft blauw over voor Noor.',
        challenge: true
      },
      {
        area: 'explore',
        prompt: 'Een sjaal ligt als een grote boog op de tafel. Welke soort lijn zie je vooral?',
        options: ['Een kromme lijn.', 'Een rechte lijn.', 'Een punt.'],
        correct: 'Een kromme lijn.',
        explanation: 'Een boog buigt en is dus een kromme lijn.'
      },
      {
        area: 'math',
        prompt: 'In de mand liggen 20 mutsen. Er worden 3 mutsen uitgenomen. Hoeveel mutsen blijven in de mand?',
        options: ['17', '16', '18'],
        correct: '17',
        explanation: '20 - 3 = 17. Er blijven 17 mutsen in de mand.'
      },
      {
        area: 'language',
        prompt: 'Welk MKMM-woord is juist geschreven?',
        options: ['muts', 'mstu', 'mut'],
        correct: 'muts',
        explanation: 'Muts heeft één medeklinker m, één klinker u en daarna twee medeklinkers t en s: MKMM.'
      },
      {
        area: 'explore',
        prompt: 'Squirtle legt een natte sjaal open bij de verwarming. Waarom droogt die sneller dan een opgerolde sjaal?',
        options: ['Meer van de sjaal raakt de warme lucht.', 'De sjaal krijgt er meer kleuren door.', 'De sjaal wordt zwaarder.'],
        correct: 'Meer van de sjaal raakt de warme lucht.',
        explanation: 'Bij een open sjaal kan warme lucht langs een groter deel komen. Daardoor kan het water sneller verdampen.'
      },
      {
        area: 'math',
        prompt: 'Cristiano Ronaldo legt 12 blauwe hesjes en 5 gele hesjes klaar voor een oefenspel. Hoeveel hesjes liggen er samen?',
        options: ['17', '16', '18'],
        correct: '17',
        explanation: '12 + 5 = 17. Er liggen samen 17 hesjes klaar.'
      },
      {
        area: 'language',
        prompt: 'Welk woord heeft twee klankstukjes?',
        options: ['pipi', 'muts', 'sjaal'],
        correct: 'pipi',
        explanation: 'Je kunt pi-pi in twee klankstukjes zeggen. Muts en sjaal hebben elk één klankstukje.'
      },
      {
        area: 'explore',
        prompt: 'Liam staat op een vak. Hij stapt 2 vakken naar rechts en daarna 1 vak naar links. Waar staat hij nu vergeleken met zijn startvak?',
        options: ['1 vak naar rechts.', 'Op zijn startvak.', '1 vak naar links.'],
        correct: '1 vak naar rechts.',
        explanation: 'Na 2 vakken naar rechts ga je 1 vak terug naar links. Er blijft nog 1 vak naar rechts over.',
        challenge: true
      }
    ]
  }
};
