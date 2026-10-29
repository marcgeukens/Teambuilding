export const ACTIVE_DATE = '2026-10-29';
export const DAILY_CONTENT = {
  '2026-10-29': {
    title: 'De herfstpostroute',
    questions: [
      {
        area: 'math',
        prompt: 'Een eekhoorn heeft 15 kastanjes en verstopt er 7. Hoeveel kastanjes blijven zichtbaar?',
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
        storyTitle: 'Het blaadjesbriefje',
        passage: 'Leg één droog herfstblad in de blauwe doos. Een nat blad laat je eerst drogen. Schrijf je naam op een klein kaartje en leg het bij je blad.',
        prompt: 'Wat doe je met een droog herfstblad?',
        options: ['Je legt het in de blauwe doos.', 'Je laat het buiten in de regen.', 'Je gooit het meteen weg.'],
        correct: 'Je legt het in de blauwe doos.',
        explanation: 'Op het briefje staat dat een droog herfstblad in de blauwe doos hoort.'
      },
      {
        area: 'explore',
        prompt: 'Welk deel van een boom neemt water op uit de grond?',
        options: ['De wortels', 'De bladeren', 'De takken'],
        correct: 'De wortels',
        explanation: 'De wortels zitten in de grond en nemen daar water op.'
      },
      {
        area: 'math',
        prompt: 'Pikachu verdeelt 14 energiefiches eerlijk over 2 doosjes. Hoeveel fiches komen in elk doosje?',
        options: ['7', '6', '8'],
        correct: '7',
        explanation: 'Maak 2 gelijke groepjes met 14 fiches. In elk groepje liggen 7 fiches. De deelsom is 14 : 2 = 7.',
        tableOfTwo: true
      },
      {
        area: 'language',
        storyTitle: 'De herfstpost',
        passage: 'De posttafel sluit om halfvier. Eerst kleurt Liam zijn kaart. Daarna schrijft hij zijn naam. Om twintig over drie is zijn kaart gekleurd, maar zijn naam staat er nog niet op.',
        prompt: 'Wat moet Liam nu doen om zijn kaart op tijd af te maken?',
        options: ['Zijn naam schrijven en de kaart vóór halfvier brengen.', 'Opnieuw beginnen met kleuren.', 'Wachten tot na halfvier.'],
        correct: 'Zijn naam schrijven en de kaart vóór halfvier brengen.',
        explanation: 'Het kleuren is al klaar. Liam moet nog zijn naam schrijven en heeft daarvoor nog tien minuten tot halfvier.',
        challenge: true
      },
      {
        area: 'explore',
        prompt: 'Een bospad buigt naar links en daarna naar rechts. Welke soort lijn past daarbij?',
        options: ['Een kromme lijn', 'Een rechte lijn', 'Een punt'],
        correct: 'Een kromme lijn',
        explanation: 'Een lijn die buigt, noemen we een kromme lijn.'
      },
      {
        area: 'math',
        prompt: 'Welk getal ontbreekt? 20, 30, __, 50',
        options: ['40', '35', '60'],
        correct: '40',
        explanation: 'De rij gaat telkens 10 verder: 20, 30, 40, 50.'
      },
      {
        area: 'language',
        prompt: 'Welk MKMM-woord is juist geschreven?',
        options: ['lamp', 'lamm', 'lapm'],
        correct: 'lamp',
        explanation: 'Lamp heeft een medeklinker l, een klinker a en daarna twee medeklinkers m en p: MKMM.'
      },
      {
        area: 'explore',
        prompt: 'Vandaag is het donderdag. Welke dag is het morgen?',
        options: ['Vrijdag', 'Woensdag', 'Zaterdag'],
        correct: 'Vrijdag',
        explanation: 'Na donderdag komt vrijdag.'
      },
      {
        area: 'math',
        prompt: 'Erling Haaland zet 12 oefenkegels neer en voegt er 6 toe. Hoeveel kegels staan er nu?',
        options: ['18', '17', '19'],
        correct: '18',
        explanation: '12 + 6 = 18. Er staan nu 18 oefenkegels.'
      },
      {
        area: 'language',
        prompt: 'Kaka-Koen wil het aantal wc-rollen weten. Welk vraagwoord past? “___ wc-rollen liggen er?”',
        options: ['Hoeveel', 'Wie', 'Waarom'],
        correct: 'Hoeveel',
        explanation: 'Met hoeveel vraag je naar een aantal.'
      },
      {
        area: 'explore',
        prompt: 'Noor, Amir en Liam hebben elk één ander blad: rood, geel of bruin. Amir heeft het bruine blad. Noor heeft niet het gele blad. Welke kleur heeft Liam?',
        options: ['Geel', 'Rood', 'Bruin'],
        correct: 'Geel',
        explanation: 'Amir heeft bruin. Rood en geel blijven over. Noor heeft niet geel, dus Noor heeft rood en Liam heeft geel.',
        challenge: true
      }
    ]
  }
};
