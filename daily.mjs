export const ACTIVE_DATE = '2026-10-13';
export const DAILY_CONTENT = {
  '2026-10-13': {
    title: 'De kwartierplanner',
    questions: [
      {
        area: 'language',
        storyTitle: 'Luistertest: Mila kiest een afspraak',
        listenGroup: 'kwartierplanner',
        listenText: 'Dag Liam, luister goed naar dit bericht. Mila kiest samen met haar mama een afspraak voor het oudercontact. Ze kiezen donderdag tweeëntwintig oktober. Het gesprek begint om kwart over vijf in de namiddag en duurt een kwartier. Mama schrijft het uur op een gele kaart. Ze komen tien minuten vroeger naar school. Bij de klas wachten ze rustig op de juf.',
        prompt: 'Met wie kiest Mila de afspraak?',
        options: ['Met haar mama.', 'Met de bakker.', 'Met haar buurjongen.'],
        correct: 'Met haar mama.',
        explanation: 'In het bericht hoor je dat Mila samen met haar mama een afspraak kiest.'
      },
      {
        area: 'explore',
        type: 'text',
        storyTitle: 'Luistertest: Mila kiest een afspraak',
        listenGroup: 'kwartierplanner',
        listenText: 'Dag Liam, luister goed naar dit bericht. Mila kiest samen met haar mama een afspraak voor het oudercontact. Ze kiezen donderdag tweeëntwintig oktober. Het gesprek begint om kwart over vijf in de namiddag en duurt een kwartier. Mama schrijft het uur op een gele kaart. Ze komen tien minuten vroeger naar school. Bij de klas wachten ze rustig op de juf.',
        prompt: 'Op welke dag en datum is de afspraak? Schrijf ze allebei zelf.',
        placeholder: 'bijvoorbeeld: maandag 4 mei',
        accepted: ['donderdag 22 oktober', 'donderdag tweeëntwintig oktober', 'donderdag 22/10', 'donderdag 22-10', 'donderdag 22 oktober 2026', '22 oktober donderdag'],
        correct: 'donderdag 22 oktober',
        explanation: 'In het bericht hoor je: donderdag tweeëntwintig oktober.'
      },
      {
        area: 'math',
        storyTitle: 'Luistertest: Mila kiest een afspraak',
        listenGroup: 'kwartierplanner',
        listenText: 'Dag Liam, luister goed naar dit bericht. Mila kiest samen met haar mama een afspraak voor het oudercontact. Ze kiezen donderdag tweeëntwintig oktober. Het gesprek begint om kwart over vijf in de namiddag en duurt een kwartier. Mama schrijft het uur op een gele kaart. Ze komen tien minuten vroeger naar school. Bij de klas wachten ze rustig op de juf.',
        prompt: 'Welke klok toont het beginuur van het gesprek?',
        options: ['17:15', '17:30', '16:15'],
        correct: '17:15',
        clockOptions: {
          '17:15': {hour: 5, minute: 15, label: 'kwart over vijf'},
          '17:30': {hour: 5, minute: 30, label: 'half zes'},
          '16:15': {hour: 4, minute: 15, label: 'kwart over vier'}
        },
        explanation: 'Kwart over vijf is 17.15 uur. De grote wijzer staat op de 3 en de kleine wijzer net voorbij de 5.'
      },
      {
        area: 'language',
        prompt: 'Welk woord volgt het patroon MKMM?',
        options: ['melk', 'maan', 'koe'],
        correct: 'melk',
        explanation: 'Melk heeft het patroon medeklinker, klinker, medeklinker, medeklinker: m-e-l-k.'
      },
      {
        area: 'explore',
        prompt: 'Miraidon zet twee punten en verbindt ze met een rechte streep. Wat tekent Miraidon?',
        options: ['Een lijnstuk.', 'Alleen een punt.', 'Een kromme lijn.'],
        correct: 'Een lijnstuk.',
        explanation: 'Een rechte streep tussen twee eindpunten is een lijnstuk.'
      },
      {
        area: 'math',
        prompt: 'Erling Haaland heeft 15 oefenkegels. Hij ruimt er 7 op. Gebruik de sok. Hoeveel kegels blijven staan?',
        options: ['7', '8', '9'],
        correct: '8',
        sock: {operator: '-', start: 15, splitTotal: 7, first: 5, second: 2, result: 8, step: '15 - 5 = 10, daarna 10 - 2 = 8.'},
        explanation: 'Splits 7 in 5 en 2. Eerst ga je met 15 - 5 naar 10. Daarna doe je 10 - 2 = 8.'
      },
      {
        area: 'language',
        prompt: 'Welk vraagwoord past? “___ schrijft mama op de gele kaart?”',
        options: ['Wat', 'Wie', 'Waar'],
        correct: 'Wat',
        explanation: 'Met wat vraag je naar het ding dat mama opschrijft: het uur.'
      },
      {
        area: 'explore',
        prompt: 'Pikachu volgt de pijlen: eerst één stap naar rechts, dan één stap omhoog en daarna weer één stap naar rechts. Welke richting hoort bij de laatste stap?',
        options: ['Naar rechts.', 'Naar links.', 'Naar beneden.'],
        correct: 'Naar rechts.',
        explanation: 'De stappen zijn rechts, omhoog, rechts. De laatste stap gaat dus naar rechts.'
      },
      {
        area: 'math',
        prompt: 'Welk getal ontbreekt? 10 + ___ = 16',
        options: ['5', '6', '7'],
        correct: '6',
        explanation: 'Van 10 naar 16 tel je 6 erbij. Dus 10 + 6 = 16.'
      },
      {
        area: 'language',
        storyTitle: 'Het afspraakkaartje',
        passage: 'Op het kaartje staat: “Oudercontact: donderdag 22 oktober om 17.15 uur. Wacht bij lokaal 4.” Mila leest het kaartje voordat ze vertrekt.',
        prompt: 'Bij welk lokaal moet Mila wachten?',
        options: ['Bij lokaal 4.', 'Bij lokaal 2.', 'Bij de fietsenstalling.'],
        correct: 'Bij lokaal 4.',
        explanation: 'Op het kaartje staat duidelijk dat Mila bij lokaal 4 moet wachten.'
      },
      {
        area: 'explore',
        prompt: 'Pipi-Piet doet drie dingen: eerst spoelt hij door, daarna wast hij zijn handen en ten slotte droogt hij ze. Wat doet hij als tweede?',
        options: ['Hij wast zijn handen.', 'Hij droogt zijn handen.', 'Hij spoelt door.'],
        correct: 'Hij wast zijn handen.',
        explanation: 'De volgorde is doorspoelen, handen wassen, handen drogen. Handen wassen komt als tweede.'
      },
      {
        area: 'math',
        prompt: 'Lionel Messi legt 10 blauwe kaartjes en 8 rode kaartjes klaar. Hoeveel kaartjes zijn dat samen?',
        options: ['17', '18', '19'],
        correct: '18',
        explanation: '10 + 8 = 18. Je hoeft niets over voetbal te weten om dit uit te rekenen.'
      }
    ]
  }
};
