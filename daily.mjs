export const ACTIVE_DATE = '2026-10-31';
export const DAILY_CONTENT = {
  '2026-10-31': {
    title: 'De lachende pompoen',
    questions: [
      {
        area: 'math',
        prompt: 'Een lampion heeft 16 sterretjes. Er vallen 7 sterretjes af. Hoeveel blijven er over?',
        options: ['9', '8', '10'],
        correct: '9',
        explanation: 'Splits 7 in 6 en 1. Eerst 16 - 6 = 10, daarna 10 - 1 = 9.',
        challenge: true,
        sock: {
          operator: '-',
          start: 16,
          splitTotal: 7,
          first: 6,
          second: 1,
          result: 9,
          step: '16 - 6 = 10, daarna 10 - 1 = 9.'
        }
      },
      {
        area: 'language',
        storyTitle: 'Het pompoenatelier',
        passage: 'Neem een oranje kaart. Teken eerst een gezicht op de pompoen. Knip daarna langs de stippellijn en zet de schaar terug in de blauwe beker.',
        prompt: 'Wat moet je doen voordat je langs de stippellijn knipt?',
        options: ['Een gezicht op de pompoen tekenen.', 'De schaar in de blauwe beker zetten.', 'De kaart dubbelvouwen.'],
        correct: 'Een gezicht op de pompoen tekenen.',
        explanation: 'Op het briefje staat: teken eerst het gezicht en knip daarna.'
      },
      {
        area: 'explore',
        prompt: 'Door welk voorwerp kan het licht van een zaklamp het best schijnen?',
        options: ['Een helder glazen potje', 'Een kartonnen doos', 'Een houten plank'],
        correct: 'Een helder glazen potje',
        explanation: 'Helder glas laat veel licht door. Karton en hout houden het licht tegen.'
      },
      {
        area: 'math',
        prompt: 'Er liggen 20 snoepogen. Liam verdeelt ze eerlijk over 2 doosjes. Hoeveel snoepogen komen in elk doosje?',
        options: ['10', '8', '12'],
        correct: '10',
        explanation: 'Verdeel 20 snoepogen in 2 gelijke groepjes. Elk doosje krijgt 10 snoepogen. De deelsom is 20 : 2 = 10.',
        tableOfTwo: true
      },
      {
        area: 'language',
        storyTitle: 'De snoepjestocht',
        passage: 'Bij de blauwe deur haalt Liam eerst een sticker. Daarna lost hij bij de oranje deur een raadsel op. Pas na beide opdrachten mag hij naar de groene tafel voor een snoepje.',
        prompt: 'Liam heeft zijn sticker al, maar het raadsel nog niet. Waar moet hij nu naartoe?',
        options: ['Naar de oranje deur.', 'Naar de groene tafel.', 'Terug naar de blauwe deur.'],
        correct: 'Naar de oranje deur.',
        explanation: 'Na de sticker komt het raadsel bij de oranje deur. De groene tafel mag pas na beide opdrachten.',
        challenge: true
      },
      {
        area: 'explore',
        prompt: 'De griezelwandeling begint om halfzeven in de avond. Welke klok toont de juiste tijd?',
        options: ['18:30', '18:00', '19:30'],
        correct: '18:30',
        explanation: 'Halfzeven is een halfuur vóór zeven uur. In de avond is dat 18:30.',
        clockOptions: {
          '18:30': {hour: 18, minute: 30, label: 'halfzeven in de avond'},
          '18:00': {hour: 18, minute: 0, label: 'zes uur in de avond'},
          '19:30': {hour: 19, minute: 30, label: 'halfacht in de avond'}
        }
      },
      {
        area: 'math',
        prompt: 'Welk getal bestaat uit 2 tientallen en 4 eenheden?',
        options: ['24', '42', '14'],
        correct: '24',
        explanation: '2 tientallen zijn 20 en 4 eenheden zijn 4. Samen is dat 24.'
      },
      {
        area: 'language',
        prompt: 'Welk MKMM-woord is juist geschreven?',
        options: ['heks', 'hesk', 'hexx'],
        correct: 'heks',
        explanation: 'Heks heeft één medeklinker h, één klinker e en daarna twee medeklinkers k en s: MKMM.'
      },
      {
        area: 'explore',
        prompt: 'In welk seizoen valt 31 oktober in België?',
        options: ['De herfst', 'De lente', 'De zomer'],
        correct: 'De herfst',
        explanation: 'Oktober valt in België in de herfst.'
      },
      {
        area: 'math',
        prompt: 'Lionel Messi heeft 13 oefenballen en wil er 18. Hoeveel ballen heeft hij nog nodig?',
        options: ['5', '4', '6'],
        correct: '5',
        explanation: '13 + 5 = 18. Hij heeft nog 5 ballen nodig.'
      },
      {
        area: 'language',
        prompt: 'De wc-pot giechelt omdat hij een gekke hoed draagt. Welk vraagwoord gebruik je om naar de reden te vragen?',
        options: ['Waarom', 'Wie', 'Waar'],
        correct: 'Waarom',
        explanation: 'Met waarom vraag je naar een reden: waarom giechelt de wc-pot?'
      },
      {
        area: 'explore',
        prompt: 'Liam, Pikachu en Squirtle dragen elk een andere badge: een ster, een maan of een pompoen. Liam draagt de maan. Pikachu draagt niet de pompoen. Welke badge draagt Squirtle?',
        options: ['De pompoen', 'De ster', 'De maan'],
        correct: 'De pompoen',
        explanation: 'Liam heeft de maan. Ster en pompoen blijven over. Pikachu heeft niet de pompoen, dus Pikachu heeft de ster en Squirtle de pompoen.',
        challenge: true
      }
    ]
  }
};
