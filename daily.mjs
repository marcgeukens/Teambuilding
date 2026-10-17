export const ACTIVE_DATE = '2026-10-17';
export const DAILY_CONTENT = {
  '2026-10-17': {
    title: 'Het Donkerduisterbos',
    questions: [
      {
        area: 'language',
        storyTitle: 'Luistertest: Donkerduisterdag',
        listenGroup: 'donkerduisterdag',
        listenText: 'Dag Liam, luister goed naar dit bericht. Op woensdag achtentwintig oktober viert de school Donkerduisterdag. De kinderen trekken in hun fantasie het mysterieuze donkerduisterbos in. Ze ontdekken er bomen, planten, dieren en paddenstoelen. Tijdens speelse workshops werken kinderen uit verschillende klassen samen. Je mag je verkleden als kabouter, boself, heks, trol of bosdier. Verkleedkleren zijn leuk, maar niet verplicht.',
        prompt: 'Wat ontdekken de kinderen in het donkerduisterbos?',
        options: ['Bomen, planten, dieren en paddenstoelen.', 'Auto’s, treinen en vliegtuigen.', 'Enkel boeken en potloden.'],
        correct: 'Bomen, planten, dieren en paddenstoelen.',
        explanation: 'In het bericht hoor je dat de kinderen bomen, planten, dieren en paddenstoelen ontdekken.'
      },
      {
        area: 'explore',
        type: 'text',
        storyTitle: 'Luistertest: Donkerduisterdag',
        listenGroup: 'donkerduisterdag',
        listenText: 'Dag Liam, luister goed naar dit bericht. Op woensdag achtentwintig oktober viert de school Donkerduisterdag. De kinderen trekken in hun fantasie het mysterieuze donkerduisterbos in. Ze ontdekken er bomen, planten, dieren en paddenstoelen. Tijdens speelse workshops werken kinderen uit verschillende klassen samen. Je mag je verkleden als kabouter, boself, heks, trol of bosdier. Verkleedkleren zijn leuk, maar niet verplicht.',
        prompt: 'Op welke dag en datum is Donkerduisterdag? Schrijf ze allebei zelf.',
        placeholder: 'bijvoorbeeld: maandag 4 mei',
        accepted: ['woensdag 28 oktober', 'woensdag achtentwintig oktober', 'woensdag 28/10', 'woensdag 28-10', 'woensdag 28 oktober 2026', '28 oktober woensdag'],
        correct: 'woensdag 28 oktober',
        explanation: 'In het bericht hoor je: woensdag achtentwintig oktober.'
      },
      {
        area: 'math',
        prompt: 'De kabouterworkshop begint om half tien. Welke klok past daarbij?',
        options: ['09:30', '09:00', '10:30'],
        correct: '09:30',
        clockOptions: {
          '09:30': {hour: 9, minute: 30, label: 'half tien'},
          '09:00': {hour: 9, minute: 0, label: 'negen uur'},
          '10:30': {hour: 10, minute: 30, label: 'half elf'}
        },
        explanation: 'Half tien is 09.30 uur. De grote wijzer staat op 6 en de kleine wijzer tussen 9 en 10.'
      },
      {
        area: 'language',
        storyTitle: 'Luistertest: Donkerduisterdag',
        listenGroup: 'donkerduisterdag',
        listenText: 'Dag Liam, luister goed naar dit bericht. Op woensdag achtentwintig oktober viert de school Donkerduisterdag. De kinderen trekken in hun fantasie het mysterieuze donkerduisterbos in. Ze ontdekken er bomen, planten, dieren en paddenstoelen. Tijdens speelse workshops werken kinderen uit verschillende klassen samen. Je mag je verkleden als kabouter, boself, heks, trol of bosdier. Verkleedkleren zijn leuk, maar niet verplicht.',
        prompt: 'Moet ieder kind verkleed naar Donkerduisterdag komen?',
        options: ['Nee, verkleden mag maar moet niet.', 'Ja, iedereen moet een heks zijn.', 'Ja, iedereen moet een trol zijn.'],
        correct: 'Nee, verkleden mag maar moet niet.',
        explanation: 'Het bericht zegt dat verkleedkleren leuk zijn, maar niet verplicht.'
      },
      {
        area: 'explore',
        prompt: 'Een heks tekent een pad dat zachtjes buigt. Welke wiskundetaal past daarbij?',
        options: ['Een kromme lijn.', 'Een rechte lijn.', 'Een punt.'],
        correct: 'Een kromme lijn.',
        explanation: 'Een lijn die buigt, noem je een kromme lijn.'
      },
      {
        area: 'math',
        prompt: 'Pikachu zet 6 mandjes klaar met telkens 2 lichtstenen. Hoeveel lichtstenen zijn dat samen?',
        options: ['8', '12', '14'],
        correct: '12',
        explanation: 'Zes groepjes van 2 zijn 2 + 2 + 2 + 2 + 2 + 2 = 12. De keersom is 6 × 2 = 12.'
      },
      {
        area: 'language',
        prompt: 'Welk woord heeft het patroon MKMM?',
        options: ['heks', 'boom', 'fee'],
        correct: 'heks',
        explanation: 'Heks heeft medeklinker, klinker, medeklinker, medeklinker: h-e-k-s.'
      },
      {
        area: 'explore',
        prompt: 'Lionel Messi kijkt naar het noorden. Hij draait één kwartslag naar rechts. Naar welke windrichting kijkt hij nu?',
        options: ['Naar het oosten.', 'Naar het westen.', 'Naar het zuiden.'],
        correct: 'Naar het oosten.',
        explanation: 'Als je naar het noorden kijkt en naar rechts draait, kijk je naar het oosten.'
      },
      {
        area: 'math',
        prompt: 'Een trol heeft 14 kastanjes. Hij geeft er 6 weg. Gebruik de sok. Hoeveel houdt hij over?',
        options: ['7', '8', '9'],
        correct: '8',
        sock: {operator: '-', start: 14, splitTotal: 6, first: 4, second: 2, result: 8, step: '14 - 4 = 10, daarna 10 - 2 = 8.'},
        explanation: 'Splits 6 in 4 en 2. Eerst ga je met 14 - 4 naar 10. Daarna doe je 10 - 2 = 8.'
      },
      {
        area: 'language',
        storyTitle: 'Het bord bij de donkere kamer',
        passage: 'Wacht bij de groene paddenstoel. Ga pas naar binnen wanneer de juf je naam noemt.',
        prompt: 'Wat moet je eerst doen bij de donkere kamer?',
        options: ['Bij de groene paddenstoel wachten.', 'Meteen naar binnen lopen.', 'Een rode paddenstoel zoeken.'],
        correct: 'Bij de groene paddenstoel wachten.',
        explanation: 'Op het bord staat eerst dat je bij de groene paddenstoel moet wachten.'
      },
      {
        area: 'explore',
        prompt: 'Kaka-Kabouter legt bladeren: rood, geel, geel, rood, geel, geel, ... Welke kleur komt nu?',
        options: ['Rood.', 'Geel.', 'Groen.'],
        correct: 'Rood.',
        explanation: 'Het groepje rood, geel, geel herhaalt zich. Daarna komt opnieuw rood.'
      },
      {
        area: 'math',
        prompt: 'Een boself denkt aan een getal: 10 + ___ = 17. Welk getal ontbreekt?',
        options: ['5', '7', '9'],
        correct: '7',
        explanation: 'Van 10 naar 17 zijn 7 stappen. Dus 10 + 7 = 17.'
      }
    ]
  }
};
