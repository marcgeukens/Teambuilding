export const ACTIVE_DATE = '2026-10-26';
export const DAILY_CONTENT = {
  '2026-10-26': {
    title: 'De maandagse leesraket',
    questions: [
      {
        area: 'math',
        prompt: 'Pikachu heeft 8 gele en 7 blauwe boekenkaartjes. Hoeveel kaartjes zijn dat samen?',
        options: ['15', '14', '16'],
        correct: '15',
        explanation: 'Maak eerst 10: splits 7 in 2 en 5. Dan is 8 + 2 = 10 en 10 + 5 = 15.',
        challenge: true,
        sock: {operator: '+', start: 8, splitTotal: 7, first: 2, second: 5, result: 15, step: '8 + 2 = 10, daarna 10 + 5 = 15.'}
      },
      {
        area: 'language',
        storyTitle: 'Het bord bij de boekenhoek',
        passage: 'Maandag na de speeltijd kiest Noor een boek. Op het bord staat: “Boeken terug in de blauwe bak. Kies daarna één nieuw boek.” Noor heeft haar oude boek nog in haar tas.',
        prompt: 'Wat moet Noor eerst doen?',
        options: ['Haar oude boek in de blauwe bak leggen', 'Meteen een nieuw boek kiezen', 'Haar tas in de blauwe bak leggen'],
        correct: 'Haar oude boek in de blauwe bak leggen',
        explanation: 'Op het bord staat dat je eerst je oude boek teruglegt. Daarna kies je pas een nieuw boek.'
      },
      {
        area: 'explore',
        prompt: 'De leeskring begint om halfelf. Welke klok toont halfelf?',
        options: ['10:30', '11:30', '10:00'],
        correct: '10:30',
        explanation: 'Halfelf is een halfuur vóór elf uur. Dat is 10.30 uur.',
        clockOptions: {
          '10:30': {hour: 10, minute: 30, label: 'halfelf'},
          '11:30': {hour: 11, minute: 30, label: 'halftwaalf'},
          '10:00': {hour: 10, minute: 0, label: 'tien uur'}
        }
      },
      {
        area: 'math',
        prompt: 'Erling Haaland legt 16 bladwijzers in groepjes van 2. Hoeveel groepjes maakt hij? Welk getal hoort op de plek van het vraagteken: ? × 2 = 16?',
        options: ['8', '6', '10'],
        correct: '8',
        explanation: 'Maak groepjes van 2: 2 + 2 + 2 + 2 + 2 + 2 + 2 + 2 = 16. Dat zijn 8 groepjes. Dus 8 × 2 = 16.',
        tableOf2: true
      },
      {
        area: 'language',
        storyTitle: 'Nog twee bladzijden',
        passage: 'Sam leest maandag tot bladzijde 9. In zijn boek zijn er 11 bladzijden. Op het briefje staat: “Breng dinsdag je uitgelezen boek mee.”',
        prompt: 'Wat doet Sam best vóór dinsdag?',
        options: ['Nog 2 bladzijden lezen', 'Stoppen op bladzijde 9', 'Nog 9 bladzijden lezen'],
        correct: 'Nog 2 bladzijden lezen',
        explanation: 'Het boek heeft 11 bladzijden en Sam is tot bladzijde 9. Er blijven 11 − 9 = 2 bladzijden over. Die leest hij best vóór dinsdag.',
        challenge: true
      },
      {
        area: 'explore',
        prompt: 'Welke omschrijving past bij een lijnstuk?',
        options: ['Een recht stukje tussen twee punten', 'Een lijn die altijd rond blijft gaan', 'Alleen één los punt'],
        correct: 'Een recht stukje tussen twee punten',
        explanation: 'Een lijnstuk is een recht deel van een lijn met een beginpunt en een eindpunt.'
      },
      {
        area: 'math',
        prompt: 'Het getal 34 bestaat uit hoeveel tientallen en eenheden?',
        options: ['3 tientallen en 4 eenheden', '4 tientallen en 3 eenheden', '3 tientallen en 3 eenheden'],
        correct: '3 tientallen en 4 eenheden',
        explanation: 'In 34 staat de 3 op de plaats van de tientallen en de 4 op de plaats van de eenheden.'
      },
      {
        area: 'language',
        prompt: 'Welk MKMM-woord is juist geschreven?',
        options: ['tent', 'tentt', 'tnet'],
        correct: 'tent',
        explanation: 'Tent bestaat uit medeklinker t, klinker e en de twee medeklinkers n en t: MKMM.'
      },
      {
        area: 'explore',
        prompt: 'Een veer ligt links van het boek. Een beker ligt rechts van het boek. Wat ligt tussen de veer en de beker?',
        options: ['Het boek', 'De veer', 'De beker'],
        correct: 'Het boek',
        explanation: 'De volgorde is veer – boek – beker. Het boek ligt dus in het midden.'
      },
      {
        area: 'math',
        prompt: 'Cristiano Ronaldo heeft 17 leesstickers en geeft er 4 weg. Hoeveel houdt hij over?',
        options: ['13', '12', '14'],
        correct: '13',
        explanation: 'Tel 4 terug vanaf 17: 16, 15, 14, 13. Dus 17 − 4 = 13.'
      },
      {
        area: 'language',
        prompt: 'Welke zin is netjes geschreven?',
        options: ['De kaka-kabouter leest een boek.', 'de kaka-kabouter leest een boek.', 'De kaka-kabouter leest een boek'],
        correct: 'De kaka-kabouter leest een boek.',
        explanation: 'Een zin begint met een hoofdletter en eindigt hier met een punt.'
      },
      {
        area: 'explore',
        prompt: 'Miraidon staat bij de rode boekenkast. Hij rijdt 2 vakken naar rechts en daarna 1 vak naar links. Waar staat hij nu?',
        options: ['1 vak rechts van de rode kast', '1 vak links van de rode kast', '2 vakken rechts van de rode kast'],
        correct: '1 vak rechts van de rode kast',
        explanation: 'Na 2 vakken rechts staat Miraidon op +2. Eén vak terug naar links brengt hem op +1. Hij staat dus 1 vak rechts van de rode kast.',
        challenge: true
      }
    ]
  }
};
