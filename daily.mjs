export const ACTIVE_DATE = '2026-10-27';
export const DAILY_CONTENT = {
  '2026-10-27': {
    title: 'De veilige brooddoos',
    questions: [
      {
        area: 'math',
        prompt: 'Squirtle heeft 14 druiven. Hij eet er 6 op. Gebruik de sok. Hoeveel druiven blijven over?',
        options: ['8', '7', '9'],
        correct: '8',
        explanation: 'Splits 6 in 4 en 2. Eerst 14 − 4 = 10, daarna 10 − 2 = 8. Er blijven 8 druiven over.',
        challenge: true,
        sock: {operator: '-', start: 14, splitTotal: 6, first: 4, second: 2, result: 8, step: '14 − 4 = 10, daarna 10 − 2 = 8.'}
      },
      {
        area: 'language',
        storyTitle: 'Luisterbericht: de veilige brooddoos',
        listenGroup: 'veilige-brooddoos',
        listenText: 'Dag Liam, luister goed naar dit bericht over de lunch. Vandaag is het dinsdag zevenentwintig oktober. De kinderen van het eerste en tweede leerjaar eten samen in Studio Cosmo. Neem geen noten mee naar school, ook niet als tussendoortje. Noor kiest een boterham met kaas en een appel. Om twaalf uur zet ze haar brooddoos op tafel. Zo helpt iedereen mee om de lunch veilig te houden.',
        prompt: 'Waar eten de kinderen van het eerste en tweede leerjaar samen?',
        options: ['In Studio Cosmo', 'In de schooltuin', 'In de turnzaal'],
        correct: 'In Studio Cosmo',
        explanation: 'In het luisterbericht hoor je dat de kinderen samen in Studio Cosmo eten.'
      },
      {
        area: 'explore',
        type: 'text',
        storyTitle: 'Luisterbericht: de veilige brooddoos',
        listenGroup: 'veilige-brooddoos',
        listenText: 'Dag Liam, luister goed naar dit bericht over de lunch. Vandaag is het dinsdag zevenentwintig oktober. De kinderen van het eerste en tweede leerjaar eten samen in Studio Cosmo. Neem geen noten mee naar school, ook niet als tussendoortje. Noor kiest een boterham met kaas en een appel. Om twaalf uur zet ze haar brooddoos op tafel. Zo helpt iedereen mee om de lunch veilig te houden.',
        prompt: 'Welke dag en datum hoor je? Schrijf ze allebei.',
        placeholder: 'bijvoorbeeld: dinsdag 4 mei',
        accepted: ['dinsdag 27 oktober', 'dinsdag zevenentwintig oktober', 'dinsdag 27/10', 'dinsdag 27-10', 'dinsdag 27 oktober 2026', '27 oktober dinsdag'],
        correct: 'dinsdag 27 oktober',
        explanation: 'In het bericht hoor je: dinsdag zevenentwintig oktober.'
      },
      {
        area: 'math',
        prompt: 'Er liggen 18 stukjes fruit. Je verdeelt ze eerlijk over 2 kommen. Hoeveel stukjes liggen in elke kom?',
        options: ['9', '8', '10'],
        correct: '9',
        explanation: 'Verdeel 18 stukjes in 2 gelijke groepen. Elke kom krijgt 9 stukjes: 18 : 2 = 9.',
        tableOf2: true
      },
      {
        area: 'language',
        storyTitle: 'Kies voor de brooddoos',
        passage: 'Op het briefje staat: “Neem geen noten mee. Fruit en brood mogen wel.” Liam heeft een appel, een boterham en een zakje noten klaarstaan. Hij kiest twee dingen.',
        prompt: 'Welke twee dingen kan Liam samen meenemen?',
        options: ['De appel en de boterham', 'De boterham en het zakje noten', 'De appel en het zakje noten'],
        correct: 'De appel en de boterham',
        explanation: 'Noten mogen niet mee. De appel is fruit en de boterham is brood, dus die twee passen bij het briefje.',
        challenge: true
      },
      {
        area: 'explore',
        storyTitle: 'Luisterbericht: de veilige brooddoos',
        listenGroup: 'veilige-brooddoos',
        listenText: 'Dag Liam, luister goed naar dit bericht over de lunch. Vandaag is het dinsdag zevenentwintig oktober. De kinderen van het eerste en tweede leerjaar eten samen in Studio Cosmo. Neem geen noten mee naar school, ook niet als tussendoortje. Noor kiest een boterham met kaas en een appel. Om twaalf uur zet ze haar brooddoos op tafel. Zo helpt iedereen mee om de lunch veilig te houden.',
        prompt: 'Welke klok toont wanneer Noor haar brooddoos op tafel zet?',
        options: ['12:00', '11:30', '12:30'],
        correct: '12:00',
        explanation: 'In het bericht hoor je om twaalf uur. Dan staan beide wijzers op twaalf: 12.00 uur.',
        clockOptions: {
          '12:00': {hour: 12, minute: 0, label: 'twaalf uur'},
          '11:30': {hour: 11, minute: 30, label: 'halftwaalf'},
          '12:30': {hour: 12, minute: 30, label: 'halféén'}
        }
      },
      {
        area: 'math',
        prompt: 'Welk getal ontbreekt op de getallenlijn? 27, 28, __, 30',
        options: ['29', '26', '31'],
        correct: '29',
        explanation: 'De getallen stijgen telkens met 1: na 28 komt 29 en daarna 30.'
      },
      {
        area: 'language',
        prompt: 'Welk MKMM-woord is juist geschreven?',
        options: ['melk', 'mellk', 'mekl'],
        correct: 'melk',
        explanation: 'Melk bestaat uit medeklinker m, klinker e en de twee medeklinkers l en k: MKMM.'
      },
      {
        area: 'explore',
        prompt: 'Bij welk voorwerp zie je vooral een kromme lijn?',
        options: ['Aan de rand van een ronde appel', 'Langs de rand van een rechte meetlat', 'Langs de zijkant van een vierkant bord'],
        correct: 'Aan de rand van een ronde appel',
        explanation: 'De rand van een ronde appel buigt. Dat is een kromme lijn.'
      },
      {
        area: 'math',
        prompt: 'Kevin De Bruyne heeft 7 rode en 6 blauwe bekers. Hoeveel bekers zijn dat samen?',
        options: ['13', '12', '14'],
        correct: '13',
        explanation: 'Maak eerst 10: 7 + 3 = 10. Van de 6 blijven dan nog 3 over. Dus 10 + 3 = 13.'
      },
      {
        area: 'language',
        prompt: 'Pipi-Piet zoekt het toilet. Welk vraagwoord past? “___ is het toilet?”',
        options: ['Waar', 'Wie', 'Waarom'],
        correct: 'Waar',
        explanation: 'Je vraagt naar een plaats. Daarvoor gebruik je het vraagwoord waar.'
      },
      {
        area: 'explore',
        prompt: 'Er zijn een rode, blauwe en groene brooddoos. In elke doos zit één ander ding: brood, een appel of yoghurt. Het brood zit in de blauwe doos. De appel zit niet in de rode doos. Wat zit in de groene doos?',
        options: ['De appel', 'Het brood', 'De yoghurt'],
        correct: 'De appel',
        explanation: 'Het brood zit al in de blauwe doos. Voor rood en groen blijven appel en yoghurt over. De appel zit niet rood, dus de appel moet in de groene doos zitten.',
        challenge: true
      }
    ]
  }
};
