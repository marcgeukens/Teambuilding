export const ACTIVE_DATE = '2026-10-14';
export const DAILY_CONTENT = {
  '2026-10-14': {
    title: 'De herfstvondsten',
    questions: [
      {
        area: 'language',
        storyTitle: 'Luistertest: klaar voor de herfstwandeling',
        listenGroup: 'herfstwandeling',
        listenText: 'Dag Liam, luister goed naar dit bericht. Morgen gaat de klas op herfstwandeling naar het Hof van Leysen. Je laat je boekentas, agenda en kaft thuis. Neem een rugzakje mee met water, je middagmaal, fruit en een plastic zakje. Het plastic zakje is voor herfstvondsten. Trek schoenen aan waarmee je goed kunt stappen. Leg vanavond alles klaar. Zo kan je morgen rustig vertrekken.',
        prompt: 'Waar gaat de klas op herfstwandeling?',
        options: ['Naar het Hof van Leysen.', 'Naar het zwembad.', 'Naar de bibliotheek.'],
        correct: 'Naar het Hof van Leysen.',
        explanation: 'In het bericht hoor je dat de klas naar het Hof van Leysen gaat.'
      },
      {
        area: 'explore',
        storyTitle: 'Luistertest: klaar voor de herfstwandeling',
        listenGroup: 'herfstwandeling',
        listenText: 'Dag Liam, luister goed naar dit bericht. Morgen gaat de klas op herfstwandeling naar het Hof van Leysen. Je laat je boekentas, agenda en kaft thuis. Neem een rugzakje mee met water, je middagmaal, fruit en een plastic zakje. Het plastic zakje is voor herfstvondsten. Trek schoenen aan waarmee je goed kunt stappen. Leg vanavond alles klaar. Zo kan je morgen rustig vertrekken.',
        prompt: 'Welke spullen moeten thuisblijven?',
        options: ['Boekentas, agenda en kaft.', 'Water, fruit en middagmaal.', 'Rugzak, schoenen en jas.'],
        correct: 'Boekentas, agenda en kaft.',
        explanation: 'Het bericht zegt dat de boekentas, agenda en kaft thuisblijven.'
      },
      {
        area: 'math',
        prompt: 'Pikachu verzamelt 3 groepjes van 2 gele blaadjes. Hoeveel blaadjes zijn dat samen?',
        options: ['4', '6', '8'],
        correct: '6',
        explanation: 'Drie groepjes van 2 zijn 2 + 2 + 2 = 6. De keersom is 3 × 2 = 6.'
      },
      {
        area: 'language',
        storyTitle: 'Luistertest: klaar voor de herfstwandeling',
        listenGroup: 'herfstwandeling',
        listenText: 'Dag Liam, luister goed naar dit bericht. Morgen gaat de klas op herfstwandeling naar het Hof van Leysen. Je laat je boekentas, agenda en kaft thuis. Neem een rugzakje mee met water, je middagmaal, fruit en een plastic zakje. Het plastic zakje is voor herfstvondsten. Trek schoenen aan waarmee je goed kunt stappen. Leg vanavond alles klaar. Zo kan je morgen rustig vertrekken.',
        prompt: 'Waarom neem je een plastic zakje mee?',
        options: ['Om herfstvondsten in te stoppen.', 'Om je schoenen in te wassen.', 'Om een boek in te lezen.'],
        correct: 'Om herfstvondsten in te stoppen.',
        explanation: 'Het plastic zakje dient om blaadjes of andere herfstvondsten in te bewaren.'
      },
      {
        area: 'explore',
        prompt: 'Tussen punt A en punt B staat één rechte streep met twee eindpunten. Wat zie je?',
        options: ['Een lijnstuk.', 'Een kromme lijn.', 'Alleen een punt.'],
        correct: 'Een lijnstuk.',
        explanation: 'Een rechte streep tussen twee eindpunten heet een lijnstuk.'
      },
      {
        area: 'math',
        prompt: 'Kevin De Bruyne heeft 8 oefenkegels en krijgt er 7 bij. Gebruik de sok. Hoeveel kegels zijn er samen?',
        options: ['14', '15', '16'],
        correct: '15',
        sock: {operator: '+', start: 8, splitTotal: 7, first: 2, second: 5, result: 15, step: '8 + 2 = 10, daarna 10 + 5 = 15.'},
        explanation: 'Splits 7 in 2 en 5. Eerst maak je 10 met 8 + 2. Daarna doe je 10 + 5 = 15.'
      },
      {
        area: 'language',
        prompt: 'Welk woord heeft het patroon MKMM?',
        options: ['tent', 'maan', 'koe'],
        correct: 'tent',
        explanation: 'Tent heeft medeklinker, klinker, medeklinker, medeklinker: t-e-n-t.'
      },
      {
        area: 'explore',
        prompt: 'Cristiano Ronaldo begint een oefening om half vijf in de namiddag. Welke klok toont dat uur?',
        options: ['16:30', '17:30', '16:15'],
        correct: '16:30',
        clockOptions: {
          '16:30': {hour: 4, minute: 30, label: 'half vijf'},
          '17:30': {hour: 5, minute: 30, label: 'half zes'},
          '16:15': {hour: 4, minute: 15, label: 'kwart over vier'}
        },
        explanation: 'Half vijf is 16.30 uur. De grote wijzer staat op de 6 en de kleine wijzer tussen 4 en 5.'
      },
      {
        area: 'math',
        prompt: 'Welk getal ontbreekt? 17 - ___ = 10',
        options: ['6', '7', '8'],
        correct: '7',
        explanation: 'Van 17 terug naar 10 zijn 7 stapjes. Dus 17 - 7 = 10.'
      },
      {
        area: 'language',
        storyTitle: 'Het rugzakbriefje',
        passage: 'Leg vanavond je rugzak klaar. Stop er water, fruit en een plastic zakje in.',
        prompt: 'Wat moet je vanavond doen volgens het briefje?',
        options: ['Je rugzak klaarleggen.', 'Je boekentas vullen.', 'Je fruit thuislaten.'],
        correct: 'Je rugzak klaarleggen.',
        explanation: 'De eerste zin zegt dat je vanavond je rugzak moet klaarleggen.'
      },
      {
        area: 'explore',
        prompt: 'Pipi-Piet legt blaadjes in een patroon: rood, geel, geel, rood, geel, geel, ... Welke kleur komt nu?',
        options: ['Rood.', 'Geel.', 'Blauw.'],
        correct: 'Rood.',
        explanation: 'Het groepje rood, geel, geel herhaalt zich. Na twee gele blaadjes komt weer rood.'
      },
      {
        area: 'math',
        prompt: 'In het gekke toiletkastje liggen 3 tientallen wc-papiervelletjes en 4 losse velletjes. Hoeveel zijn dat er samen?',
        options: ['24', '34', '43'],
        correct: '34',
        explanation: 'Drie tientallen zijn 30. Met 4 eenheden erbij krijg je 30 + 4 = 34.'
      }
    ]
  }
};
