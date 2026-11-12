export const ACTIVE_DATE = '2026-11-12';
export const DAILY_CONTENT = {
  '2026-11-12': {
    title: 'De donderdagse ontdektocht',
    questions: [
      {
        area: 'math',
        prompt: 'De Fonkelende Feniksen vinden 8 gouden blaadjes en daarna nog 6. Hoeveel blaadjes hebben ze samen?',
        options: ['14', '13', '15'],
        correct: '14',
        explanation: 'Splits 6 in 2 en 4. Eerst 8 + 2 = 10, daarna 10 + 4 = 14.',
        challenge: true,
        sock: {
          operator: '+',
          start: 8,
          splitTotal: 6,
          first: 2,
          second: 4,
          result: 14,
          step: '8 + 2 = 10, daarna 10 + 4 = 14.'
        }
      },
      {
        area: 'language',
        prompt: 'Welk MKMM-woord is juist geschreven?',
        options: ['wolk', 'wokl', 'wol'],
        correct: 'wolk',
        explanation: 'Wolk heeft één medeklinker w, één klinker o en daarna twee medeklinkers l en k: MKMM.'
      },
      {
        area: 'explore',
        prompt: 'Liam wil tussen punt A en punt B een rechte lijn tekenen. Welk hulpmiddel kiest hij het best?',
        options: ['Een lat', 'Een gom', 'Een drinkfles'],
        correct: 'Een lat',
        explanation: 'Langs de rechte rand van een lat kun je netjes een rechte lijn tekenen.'
      },
      {
        area: 'math',
        prompt: 'Pikachu legt 8 paren energiekaartjes neer. Elk paar heeft 2 kaartjes. Welk getal ontbreekt in ? × 2 = 16?',
        options: ['8', '7', '9'],
        correct: '8',
        explanation: 'Je ziet 8 groepjes van 2 kaartjes: 2 + 2 + 2 + 2 + 2 + 2 + 2 + 2 = 16. De passende som is 8 × 2 = 16.',
        tableOfTwo: true
      },
      {
        area: 'language',
        storyTitle: 'Het verplaatste schatbriefje',
        passage: 'Voor de speeltijd stopt Liam een schatbriefje in de blauwe doos op de tafel. Na de speeltijd zet Noor de blauwe doos in de boekenkast. Het briefje blijft in de doos. In de namiddag wil Liam het briefje terug.',
        prompt: 'Waar moet Liam in de namiddag zoeken om zijn schatbriefje terug te vinden?',
        options: ['In de blauwe doos in de boekenkast', 'Los op de tafel', 'Onder de boekenkast'],
        correct: 'In de blauwe doos in de boekenkast',
        explanation: 'Het briefje blijft in de blauwe doos. Noor verplaatst die doos van de tafel naar de boekenkast, dus daar moet Liam zoeken.',
        challenge: true
      },
      {
        area: 'explore',
        prompt: 'Welk teken komt hierna in het patroon: blad, eikel, eikel, blad, eikel, eikel, ...?',
        options: ['blad', 'eikel', 'kastanje'],
        correct: 'blad',
        explanation: 'Het groepje blad – eikel – eikel herhaalt zich. Na twee eikels begint het groepje opnieuw met een blad.'
      },
      {
        area: 'math',
        prompt: 'In een doos zitten 17 schatstenen. Na het uitdelen blijven er 9 over. Welk getal ontbreekt in 17 - ? = 9?',
        options: ['8', '7', '9'],
        correct: '8',
        explanation: 'Van 17 naar 9 is 8 minder. Je kunt controleren met 9 + 8 = 17, dus 17 - 8 = 9.'
      },
      {
        area: 'language',
        prompt: 'Welke vraag past bij het antwoord: “Omdat het regent, draagt Noor laarzen.”?',
        options: ['Waarom draagt Noor laarzen?', 'Waar staan Noors laarzen?', 'Wanneer koopt Noor laarzen?'],
        correct: 'Waarom draagt Noor laarzen?',
        explanation: 'Het antwoord geeft een reden met “omdat”. Daarom begint de passende vraag met “waarom”.'
      },
      {
        area: 'explore',
        prompt: 'De ontdektocht begint om 16:00. Liam komt een halfuur vroeger aan. Welke klok toont zijn aankomsttijd?',
        options: ['15:30', '16:30', '15:00'],
        correct: '15:30',
        explanation: 'Een halfuur vóór 16:00 is 15:30, of halfvier.',
        clockOptions: {
          '15:30': {hour: 3, minute: 30, label: 'halfvier'},
          '16:30': {hour: 4, minute: 30, label: 'halfvijf'},
          '15:00': {hour: 3, minute: 0, label: 'drie uur'}
        }
      },
      {
        area: 'math',
        prompt: 'Een schatkist bevat 2 tientallen munten en 4 losse munten. Welk getal hoort daarbij?',
        options: ['24', '42', '20'],
        correct: '24',
        explanation: 'Twee tientallen zijn 20. Met 4 eenheden erbij krijg je 24.'
      },
      {
        area: 'language',
        prompt: 'Welke zin is juist geschreven als vraag over een grappig kaka-pipi-moment?',
        options: ['Wie liet die piepende scheet?', 'Wie liet die piepende scheet.', 'wie liet die piepende scheet?'],
        correct: 'Wie liet die piepende scheet?',
        explanation: 'Een vraag begint met een hoofdletter en eindigt met een vraagteken.'
      },
      {
        area: 'explore',
        prompt: 'Kevin De Bruyne, Lionel Messi en Kylian Mbappé kiezen elk een andere bal: rood, blauw of geel. Messi kiest blauw. Mbappé kiest niet geel. Welke kleur kiest Kevin?',
        options: ['Geel', 'Rood', 'Blauw'],
        correct: 'Geel',
        explanation: 'Blauw is al voor Messi. Mbappé kan dan niet geel kiezen en neemt rood. Voor Kevin blijft geel over.',
        challenge: true
      }
    ]
  }
};
