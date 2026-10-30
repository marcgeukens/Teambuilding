export const ACTIVE_DATE = '2026-10-30';
export const DAILY_CONTENT = {
  '2026-10-30': {
    title: 'De plazaroute',
    questions: [
      {
        area: 'math',
        prompt: 'De Feniksen hangen 9 oranje veren en 6 gele veren op. Hoeveel veren zijn dat samen?',
        options: ['15', '14', '16'],
        correct: '15',
        explanation: 'Splits 6 in 1 en 5. Eerst 9 + 1 = 10, daarna 10 + 5 = 15.',
        challenge: true,
        sock: {
          operator: '+',
          start: 9,
          splitTotal: 6,
          first: 1,
          second: 5,
          result: 15,
          step: '9 + 1 = 10, daarna 10 + 5 = 15.'
        }
      },
      {
        area: 'language',
        storyTitle: 'Het bericht over de nabewaking',
        passage: 'Tijdens de herfstdrink is de nabewaking op de plazaspeelplaats op de eerste verdieping. Na de drink gaan de kinderen met de begeleiders terug naar de vaste plek naast de eetzaal. Ouders volgen de pijlen naar de juiste plek.',
        prompt: 'De herfstdrink is nog bezig. Waar wordt Liam opgehaald?',
        options: ['Op de plazaspeelplaats op de eerste verdieping.', 'Op de vaste plek naast de eetzaal.', 'Aan de schoolpoort.'],
        correct: 'Op de plazaspeelplaats op de eerste verdieping.',
        explanation: 'Tijdens de herfstdrink is de nabewaking op de plazaspeelplaats op de eerste verdieping.'
      },
      {
        area: 'explore',
        prompt: 'Op een plattegrond staat een rechte verbinding van punt A naar punt B. Hoe heet het stukje tussen die twee punten?',
        options: ['Een lijnstuk', 'Een kromme lijn', 'Een losse punt'],
        correct: 'Een lijnstuk',
        explanation: 'Een lijnstuk is een recht stukje lijn met een beginpunt en een eindpunt.'
      },
      {
        area: 'math',
        prompt: 'Op 8 tafeltjes staan telkens 2 bekers. Hoeveel bekers staan er samen?',
        options: ['16', '14', '18'],
        correct: '16',
        explanation: 'Er zijn 8 groepjes van 2 bekers: 2 + 2 + 2 + 2 + 2 + 2 + 2 + 2 = 16. De keersom is 8 × 2 = 16.',
        tableOfTwo: true
      },
      {
        area: 'language',
        storyTitle: 'Het bericht over de nabewaking',
        passage: 'Tijdens de herfstdrink is de nabewaking op de plazaspeelplaats op de eerste verdieping. Na de drink gaan de kinderen met de begeleiders terug naar de vaste plek naast de eetzaal. Ouders volgen de pijlen naar de juiste plek.',
        prompt: 'De herfstdrink is voorbij en mama komt wat later. Waar kan ze Liam dan vinden?',
        options: ['Op de vaste plek naast de eetzaal.', 'Nog op de plazaspeelplaats.', 'In de turnzaal.'],
        correct: 'Op de vaste plek naast de eetzaal.',
        explanation: 'Na de drink vertrekken de kinderen met de begeleiders van de plaza naar de vaste nabewakingsplek naast de eetzaal.',
        challenge: true
      },
      {
        area: 'explore',
        prompt: 'Welk voorwerp helpt je het best om in het donker zichtbaar te zijn?',
        options: ['Een reflecterend bandje', 'Een zwart papiertje', 'Een houten blokje'],
        correct: 'Een reflecterend bandje',
        explanation: 'Een reflecterend bandje kaatst licht terug en maakt je beter zichtbaar.'
      },
      {
        area: 'math',
        prompt: 'Kevin De Bruyne zet 17 oefenkegels klaar. Hij haalt er 5 weg. Hoeveel kegels blijven staan?',
        options: ['12', '11', '13'],
        correct: '12',
        explanation: '17 - 5 = 12. Er blijven 12 kegels staan.'
      },
      {
        area: 'language',
        prompt: 'Welk MKMM-woord is juist geschreven?',
        options: ['wolk', 'wokl', 'woll'],
        correct: 'wolk',
        explanation: 'Wolk heeft één medeklinker w, één klinker o en daarna twee medeklinkers l en k: MKMM.'
      },
      {
        area: 'explore',
        prompt: 'Vandaag is het vrijdag 30 oktober. Welke dag en datum is het morgen?',
        options: ['Zaterdag 31 oktober', 'Donderdag 29 oktober', 'Zondag 1 november'],
        correct: 'Zaterdag 31 oktober',
        explanation: 'Na vrijdag komt zaterdag en na 30 oktober komt 31 oktober.'
      },
      {
        area: 'math',
        prompt: 'Pikachu heeft 20 energiefiches en gebruikt er 6. Hoeveel fiches blijven over?',
        options: ['14', '13', '15'],
        correct: '14',
        explanation: '20 - 6 = 14. Pikachu houdt 14 energiefiches over.'
      },
      {
        area: 'language',
        prompt: 'Een giechelende wc-rol ligt op de plank. Welk vraagwoord past? “___ ligt de wc-rol?”',
        options: ['Waar', 'Wie', 'Waarom'],
        correct: 'Waar',
        explanation: 'Met waar vraag je naar een plaats.'
      },
      {
        area: 'explore',
        prompt: 'Drie tekens staan in een rij: een veer, een bal en een lampion. De lampion staat niet eerst. De bal staat na de veer. Welke volgorde kan kloppen?',
        options: ['Veer – bal – lampion', 'Bal – veer – lampion', 'Lampion – veer – bal'],
        correct: 'Veer – bal – lampion',
        explanation: 'De bal moet na de veer staan en de lampion mag niet eerst staan. Alleen veer – bal – lampion voldoet aan beide aanwijzingen.',
        challenge: true
      }
    ]
  }
};
