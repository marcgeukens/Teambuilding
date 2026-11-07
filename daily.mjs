export const ACTIVE_DATE = '2026-11-07';
export const DAILY_CONTENT = {
  '2026-11-07': {
    title: 'De kastanjekist',
    questions: [
      {
        area: 'math',
        prompt: 'Liam vindt 7 kastanjes bij de boom en daarna nog 8. Hoeveel kastanjes heeft hij samen?',
        options: ['15', '14', '16'],
        correct: '15',
        explanation: 'Splits 8 in 3 en 5. Eerst 7 + 3 = 10, daarna 10 + 5 = 15.',
        challenge: true,
        sock: {
          operator: '+',
          start: 7,
          splitTotal: 8,
          first: 3,
          second: 5,
          result: 15,
          step: '7 + 3 = 10, daarna 10 + 5 = 15.'
        }
      },
      {
        area: 'language',
        storyTitle: 'Het kaartje bij de kastanjekist',
        passage: 'Veeg eerst het zand van de kastanjes. Tel ze daarna. Leg ze tot slot voorzichtig in de houten kist.',
        prompt: 'Wat doe je nadat het zand is weggeveegd en vóór de kastanjes in de kist gaan?',
        options: ['De kastanjes tellen.', 'De kist schilderen.', 'De kastanjes terug buiten leggen.'],
        correct: 'De kastanjes tellen.',
        explanation: 'Tussen het schoonvegen en het opbergen staat de stap: de kastanjes tellen.'
      },
      {
        area: 'explore',
        prompt: 'Waarom zit een kastanje eerst in een stekelige bolster?',
        options: ['De bolster beschermt de kastanje.', 'De bolster maakt muziek.', 'De bolster laat de kastanje vliegen.'],
        correct: 'De bolster beschermt de kastanje.',
        explanation: 'De harde stekelige bolster helpt de kastanje te beschermen terwijl ze groeit.'
      },
      {
        area: 'math',
        prompt: 'Miraidon legt 9 groepjes van 2 energiekaartjes klaar. Hoeveel kaartjes zijn dat?',
        options: ['18', '16', '20'],
        correct: '18',
        explanation: 'Je maakt 9 groepjes van 2: 2 + 2 + 2 + 2 + 2 + 2 + 2 + 2 + 2 = 18. De keersom is 9 × 2 = 18.',
        tableOfTwo: true
      },
      {
        area: 'language',
        storyTitle: 'Twee doosjes',
        passage: 'Juf geeft Liam een blauw doosje en Noor een geel doosje. Liam legt twee kastanjes in zijn doosje. Daarna geeft Noor hem nog één kastanje. Zij bewaart zelf vier kastanjes.',
        prompt: 'Welk doosje bevat nu drie kastanjes?',
        options: ['Het blauwe doosje.', 'Het gele doosje.', 'Beide doosjes.'],
        correct: 'Het blauwe doosje.',
        explanation: 'Liam heeft het blauwe doosje. Hij had 2 kastanjes en krijgt er 1 bij: 2 + 1 = 3. Het blauwe doosje bevat dus drie kastanjes.',
        challenge: true
      },
      {
        area: 'explore',
        prompt: 'Welk hulpmiddel gebruik je om de nerven van een herfstblad groter te bekijken?',
        options: ['Een vergrootglas.', 'Een meetlat.', 'Een kompas.'],
        correct: 'Een vergrootglas.',
        explanation: 'Een vergrootglas laat kleine details, zoals bladnerven, groter lijken.'
      },
      {
        area: 'math',
        prompt: 'Welk getal ontbreekt: __ + 6 = 20?',
        options: ['14', '13', '15'],
        correct: '14',
        explanation: 'Denk omgekeerd: 20 - 6 = 14. Dus 14 + 6 = 20.'
      },
      {
        area: 'language',
        prompt: 'Welk MKMM-woord is juist geschreven?',
        options: ['kast', 'kats', 'kas'],
        correct: 'kast',
        explanation: 'Kast heeft één medeklinker k, één klinker a en daarna twee medeklinkers s en t: MKMM.'
      },
      {
        area: 'explore',
        prompt: 'Een krijtstreep begint bij punt A en stopt bij punt B. Hoe heet die begrensde rechte verbinding?',
        options: ['Een lijnstuk.', 'Een kromme lijn.', 'Eén punt.'],
        correct: 'Een lijnstuk.',
        explanation: 'Een lijnstuk is recht en heeft twee eindpunten. Hier zijn dat punt A en punt B.'
      },
      {
        area: 'math',
        prompt: 'Lionel Messi zet 13 oefenkegels neer en voegt er nog 4 toe. Hoeveel kegels staan er nu?',
        options: ['17', '16', '18'],
        correct: '17',
        explanation: '13 + 4 = 17. Er staan nu 17 oefenkegels.'
      },
      {
        area: 'language',
        prompt: 'Welk vraagwoord past? “___ ligt de speelgoed-drol?” Het antwoord is: “In de kastanjekist.”',
        options: ['Waar', 'Wie', 'Wanneer'],
        correct: 'Waar',
        explanation: 'Het antwoord noemt een plaats. Daarom hoort het vraagwoord “waar” in de zin.'
      },
      {
        area: 'explore',
        prompt: 'De Fonkelende Feniksen picknicken de dag na zaterdag. Eén dag na de picknick verzamelen ze bladeren. Op welke dag verzamelen ze bladeren?',
        options: ['Maandag', 'Zondag', 'Dinsdag'],
        correct: 'Maandag',
        explanation: 'De dag na zaterdag is zondag, dus de picknick is op zondag. Eén dag later is het maandag.',
        challenge: true
      }
    ]
  }
};
