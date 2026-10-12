export const ACTIVE_DATE = '2026-10-12';
export const DAILY_CONTENT = {
  '2026-10-12': {
    title: 'De oudercontact-klokmissie',
    questions: [
      {
        area: 'language',
        storyTitle: 'Luistertest: papa gaat naar de klas',
        listenGroup: 'oudercontact-klok',
        listenText: 'Dag Liam, luister goed naar dit bericht. Noors papa gaat naar het oudercontact in de klas. Hij kiest dinsdag twintig oktober. Het gesprek begint om half vijf in de namiddag en duurt een kwartier. Hij neemt Noors agenda mee. Vijf minuten vooraf wacht hij bij de deur van de klas. Daarna vertelt de juf hoe Noor leert en speelt.',
        prompt: 'Waar gaat Noors papa naartoe?',
        options: ['Naar het oudercontact in de klas.', 'Naar de bakker.', 'Naar het zwembad.'],
        correct: 'Naar het oudercontact in de klas.',
        explanation: 'In het bericht hoor je dat Noors papa naar het oudercontact in de klas gaat.'
      },
      {
        area: 'explore',
        type: 'text',
        storyTitle: 'Luistertest: papa gaat naar de klas',
        listenGroup: 'oudercontact-klok',
        listenText: 'Dag Liam, luister goed naar dit bericht. Noors papa gaat naar het oudercontact in de klas. Hij kiest dinsdag twintig oktober. Het gesprek begint om half vijf in de namiddag en duurt een kwartier. Hij neemt Noors agenda mee. Vijf minuten vooraf wacht hij bij de deur van de klas. Daarna vertelt de juf hoe Noor leert en speelt.',
        prompt: 'Op welke dag en datum gaat Noors papa? Schrijf ze allebei zelf.',
        placeholder: 'bijvoorbeeld: maandag 4 mei',
        accepted: ['dinsdag 20 oktober', 'dinsdag twintig oktober', 'dinsdag 20/10', 'dinsdag 20-10', 'dinsdag 20 oktober 2026', '20 oktober dinsdag'],
        correct: 'dinsdag 20 oktober',
        explanation: 'In het bericht hoor je: dinsdag twintig oktober.'
      },
      {
        area: 'math',
        storyTitle: 'Luistertest: papa gaat naar de klas',
        listenGroup: 'oudercontact-klok',
        listenText: 'Dag Liam, luister goed naar dit bericht. Noors papa gaat naar het oudercontact in de klas. Hij kiest dinsdag twintig oktober. Het gesprek begint om half vijf in de namiddag en duurt een kwartier. Hij neemt Noors agenda mee. Vijf minuten vooraf wacht hij bij de deur van de klas. Daarna vertelt de juf hoe Noor leert en speelt.',
        prompt: 'Hoe laat begint het gesprek? Duid de juiste klok aan.',
        options: ['16:00', '16:30', '17:30'],
        correct: '16:30',
        clockOptions: {
          '16:00': {hour: 4, minute: 0, label: 'vier uur'},
          '16:30': {hour: 4, minute: 30, label: 'half vijf'},
          '17:30': {hour: 5, minute: 30, label: 'half zes'}
        },
        explanation: 'Half vijf is 16.30 uur. De grote wijzer staat op de 6 en de kleine wijzer tussen de 4 en de 5.'
      },
      {
        area: 'language',
        prompt: 'Welk woord is een MKMM-woord?',
        options: ['help', 'boom', 'vis'],
        correct: 'help',
        explanation: 'Help bestaat uit medeklinker, klinker, medeklinker, medeklinker: h-e-l-p.'
      },
      {
        area: 'explore',
        prompt: 'Squirtle tekent met een lat. Welke soort lijn krijgt hij?',
        options: ['Een rechte lijn.', 'Een kromme lijn.', 'Een cirkel.'],
        correct: 'Een rechte lijn.',
        explanation: 'Langs de rand van een lat teken je een rechte lijn.'
      },
      {
        area: 'math',
        prompt: 'Liam heeft 8 feniksveren en vindt er 5 bij. Gebruik de sok. Hoeveel veren heeft hij samen?',
        options: ['12', '13', '14'],
        correct: '13',
        sock: {operator: '+', start: 8, splitTotal: 5, first: 2, second: 3, result: 13, step: '8 + 2 = 10, daarna 10 + 3 = 13.'},
        explanation: 'Splits 5 in 2 en 3. Eerst maak je 10 met 8 + 2. Daarna tel je nog 3 erbij: 13.'
      },
      {
        area: 'language',
        prompt: 'Welk vraagwoord past? “___ begint het gesprek?”',
        options: ['Wanneer', 'Wie', 'Waar'],
        correct: 'Wanneer',
        explanation: 'Met wanneer vraag je naar een tijdstip.'
      },
      {
        area: 'explore',
        prompt: 'Kevin De Bruyne volgt drie stappen: eerst naar de bal, dan naar de kegel en ten slotte naar de bank. Waar gaat hij als tweede naartoe?',
        options: ['Naar de kegel.', 'Naar de bank.', 'Naar de bal.'],
        correct: 'Naar de kegel.',
        explanation: 'De volgorde is bal, kegel, bank. De kegel staat dus op de tweede plaats.'
      },
      {
        area: 'math',
        prompt: 'Uit hoeveel tientallen en eenheden bestaat het getal 17?',
        options: ['1 tiental en 7 eenheden.', '7 tientallen en 1 eenheid.', '1 tiental en 6 eenheden.'],
        correct: '1 tiental en 7 eenheden.',
        explanation: '17 bestaat uit 10 en 7: één tiental en zeven eenheden.'
      },
      {
        area: 'language',
        storyTitle: 'Een duidelijk wc-briefje',
        passage: 'Op de deur staat: “Deze wc is buiten dienst. Gebruik de wc op de eerste verdieping.” Pipi-Piet leest het briefje goed.',
        prompt: 'Wat moet Pipi-Piet doen?',
        options: ['De wc op de eerste verdieping gebruiken.', 'Bij de kapotte wc blijven wachten.', 'Naar de speelplaats rennen.'],
        correct: 'De wc op de eerste verdieping gebruiken.',
        explanation: 'Het briefje vertelt precies welke andere wc hij moet gebruiken.'
      },
      {
        area: 'explore',
        prompt: 'Welke figuur heeft precies twee eindpunten?',
        options: ['Een lijnstuk.', 'Een punt.', 'Een kromme lijn zonder einde.'],
        correct: 'Een lijnstuk.',
        explanation: 'Een lijnstuk begint in één punt en eindigt in een tweede punt.'
      },
      {
        area: 'math',
        prompt: 'Cristiano Ronaldo heeft 18 oefenballen. Hij legt er 6 in een net. Hoeveel ballen blijven buiten het net?',
        options: ['11', '12', '13'],
        correct: '12',
        explanation: '18 − 6 = 12. Je hoeft niets over voetbal te weten om dit uit te rekenen.'
      }
    ]
  }
};
