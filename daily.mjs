export const ACTIVE_DATE = '2026-10-22';
export const DAILY_CONTENT = {
  '2026-10-22': {
    title: 'De herfstdrinkkaart',
    questions: [
      {
        area: 'math',
        challenge: true,
        prompt: 'Bij de herfstdrink staan 9 bekers appelsap klaar. Er komen 8 bekers bij. Gebruik de plussok. Hoeveel bekers zijn er samen?',
        options: ['16', '17', '18'],
        correct: '17',
        sock: {operator: '+', start: 9, splitTotal: 8, first: 1, second: 7, result: 17, step: '9 + 1 = 10, daarna 10 + 7 = 17.'},
        explanation: 'Splits 8 in 1 en 7. Eerst maak je 10 met 9 + 1. Daarna doe je 10 + 7 = 17.'
      },
      {
        area: 'language',
        prompt: 'Welk woord is juist geschreven?',
        options: ['tent', 'tend', 'tnet'],
        correct: 'tent',
        explanation: 'Tent schrijf je t-e-n-t. Het is een MKMM-woord: medeklinker, klinker, medeklinker, medeklinker.'
      },
      {
        area: 'explore',
        prompt: 'Welke vorm heeft vier even lange zijden?',
        options: ['Een vierkant.', 'Een cirkel.', 'Een driehoek.'],
        correct: 'Een vierkant.',
        explanation: 'Een vierkant heeft vier zijden die allemaal even lang zijn.'
      },
      {
        area: 'math',
        tableOf2: true,
        prompt: 'Pikachu maakt 6 fruitspiesjes. Op elk spiesje zitten 2 druiven. Hoeveel druiven gebruikt hij?',
        options: ['10', '12', '14'],
        correct: '12',
        explanation: 'Er zijn 6 groepjes van 2 druiven: 2 + 2 + 2 + 2 + 2 + 2 = 12. De keersom is 6 × 2 = 12.'
      },
      {
        area: 'language',
        challenge: true,
        storyTitle: 'De herfstdrink',
        passage: 'De herfstdrink is op vrijdag van 15.30 tot 17.00 uur. Koop eerst een consumptiekaart aan de tafel. Soep haal je bij de rode kraam en cake bij de groene kraam.',
        prompt: 'Noor komt om 16.20 uur en wil cake, maar heeft nog geen kaart. Welke twee stappen zet ze in de juiste volgorde?',
        options: ['Eerst een kaart kopen, daarna naar de groene kraam.', 'Eerst naar de rode kraam, daarna een kaart kopen.', 'Eerst naar de groene kraam, daarna naar huis.'],
        correct: 'Eerst een kaart kopen, daarna naar de groene kraam.',
        explanation: 'Om 16.20 uur is de herfstdrink bezig. Noor moet eerst een kaart kopen en gaat daarna voor cake naar de groene kraam.'
      },
      {
        area: 'explore',
        challenge: true,
        prompt: 'De herfstdrink begint om half vier en eindigt om vijf uur. Hoe lang duurt de herfstdrink?',
        options: ['1 uur', '1 uur en 30 minuten', '2 uur'],
        correct: '1 uur en 30 minuten',
        explanation: 'Van 15.30 tot 16.30 is één uur. Van 16.30 tot 17.00 is nog een halfuur. Samen is dat 1 uur en 30 minuten.'
      },
      {
        area: 'math',
        prompt: 'Welk getal is 10 meer dan 34?',
        options: ['35', '44', '54'],
        correct: '44',
        explanation: 'Tien meer betekent één tiental erbij. 34 + 10 = 44.'
      },
      {
        area: 'language',
        storyTitle: 'De warme soep',
        passage: 'De soep is nog heet. Mila wacht even voor ze proeft.',
        prompt: 'Welke zin vertelt waarom Mila wacht?',
        options: ['Omdat de soep nog heet is.', 'Omdat haar jas groen is.', 'Omdat de tafel rond is.'],
        correct: 'Omdat de soep nog heet is.',
        explanation: 'Mila wacht door de hete soep. Dat is de reden.'
      },
      {
        area: 'explore',
        prompt: 'Welke keuze past het best bij een natte herfstdag?',
        options: ['Een regenjas en laarzen.', 'Een zwembroek en duikbril.', 'Een dikke sjaal en slee.'],
        correct: 'Een regenjas en laarzen.',
        explanation: 'Een regenjas en laarzen houden je droog wanneer het regent.'
      },
      {
        area: 'math',
        prompt: 'Lionel Messi zet 18 oefenbekers klaar. Hij haalt er 6 weg. Hoeveel bekers blijven staan?',
        options: ['11', '12', '13'],
        correct: '12',
        explanation: '18 - 6 = 12. Er blijven 12 bekers staan; je hoeft niets over voetbal te weten om dit uit te rekenen.'
      },
      {
        area: 'language',
        prompt: 'Pipi-Piet morst sap op zijn broek. Welk woord rijmt op broek?',
        options: ['koek', 'soep', 'kaart'],
        correct: 'koek',
        explanation: 'Broek en koek eindigen allebei met de klank “oek”.'
      },
      {
        area: 'explore',
        prompt: 'Squirtle, Miraidon en de feniks kiezen elk een andere beker: rood, blauw of geel. Squirtle kiest blauw. Miraidon kiest niet rood. Welke kleur blijft over voor de feniks?',
        options: ['Rood.', 'Blauw.', 'Geel.'],
        correct: 'Rood.',
        explanation: 'Blauw is al van Squirtle. Miraidon kiest niet rood en moet dus geel kiezen. Voor de feniks blijft rood over.'
      }
    ]
  }
};
