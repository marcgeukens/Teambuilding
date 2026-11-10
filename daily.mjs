export const ACTIVE_DATE = '2026-11-10';
export const DAILY_CONTENT = {
  '2026-11-10': {
    title: 'De voorleeskar',
    questions: [
      {
        area: 'math',
        prompt: 'In de voorleeskar liggen 14 boeken. De juf neemt er 6 uit. Hoeveel boeken blijven in de kar?',
        options: ['8', '7', '9'],
        correct: '8',
        explanation: 'Splits 6 in 4 en 2. Eerst 14 - 4 = 10, daarna 10 - 2 = 8.',
        challenge: true,
        sock: {
          operator: '-',
          start: 14,
          splitTotal: 6,
          first: 4,
          second: 2,
          result: 8,
          step: '14 - 4 = 10, daarna 10 - 2 = 8.'
        }
      },
      {
        area: 'language',
        storyTitle: 'Oefenen voor het voorlezen',
        listenGroup: 'voorleeskar-2026-11-10',
        listenText: 'Vandaag is het dinsdag 10 november. Juf Barbara vertelt dat de school later deze maand een Voorleesweek houdt. Volgende week staat er in de schoolbib een kar met mooie boeken. Liam mag een boek kiezen om thuis te oefenen. Om halfvijf leest hij twee bladzijden voor aan mama. Hij spreekt rustig en stopt even bij een punt, zodat het verhaal duidelijk klinkt.',
        prompt: 'Welke volledige datum hoor je aan het begin van het bericht?',
        type: 'text',
        accepted: ['dinsdag 10 november', '10 november', 'dinsdag 10 november 2026', '10 november 2026'],
        correct: 'dinsdag 10 november',
        explanation: 'Het bericht begint met: “Vandaag is het dinsdag 10 november.”'
      },
      {
        area: 'explore',
        storyTitle: 'Oefenen voor het voorlezen',
        listenGroup: 'voorleeskar-2026-11-10',
        listenText: 'Vandaag is het dinsdag 10 november. Juf Barbara vertelt dat de school later deze maand een Voorleesweek houdt. Volgende week staat er in de schoolbib een kar met mooie boeken. Liam mag een boek kiezen om thuis te oefenen. Om halfvijf leest hij twee bladzijden voor aan mama. Hij spreekt rustig en stopt even bij een punt, zodat het verhaal duidelijk klinkt.',
        prompt: 'Welke klok toont wanneer Liam voorleest aan mama?',
        options: ['16:30', '16:00', '17:30'],
        correct: '16:30',
        explanation: 'Halfvijf is een halfuur vóór vijf uur. Dat is 16:30.',
        clockOptions: {
          '16:30': {hour: 4, minute: 30, label: 'halfvijf'},
          '16:00': {hour: 4, minute: 0, label: 'vier uur'},
          '17:30': {hour: 5, minute: 30, label: 'halfzes'}
        }
      },
      {
        area: 'math',
        prompt: 'Pikachu verdeelt 16 energiekaartjes eerlijk over 2 mappen. Hoeveel kaartjes komen in elke map?',
        options: ['8', '7', '9'],
        correct: '8',
        explanation: 'Je verdeelt 16 kaartjes in 2 even grote groepjes. In elk groepje liggen 8 kaartjes: 16 : 2 = 8.',
        tableOfTwo: true
      },
      {
        area: 'language',
        storyTitle: 'Oefenen voor het voorlezen',
        listenGroup: 'voorleeskar-2026-11-10',
        listenText: 'Vandaag is het dinsdag 10 november. Juf Barbara vertelt dat de school later deze maand een Voorleesweek houdt. Volgende week staat er in de schoolbib een kar met mooie boeken. Liam mag een boek kiezen om thuis te oefenen. Om halfvijf leest hij twee bladzijden voor aan mama. Hij spreekt rustig en stopt even bij een punt, zodat het verhaal duidelijk klinkt.',
        prompt: 'Waarom stopt Liam even bij een punt wanneer hij voorleest?',
        options: ['Zo klinkt het verhaal duidelijk.', 'Zo worden de bladzijden dikker.', 'Zo springt het boek vanzelf dicht.'],
        correct: 'Zo klinkt het verhaal duidelijk.',
        explanation: 'In het bericht hoor je dat Liam rustig spreekt en bij een punt stopt, zodat het verhaal duidelijk klinkt.'
      },
      {
        area: 'explore',
        prompt: 'Een lint ligt in een ronde bocht rond een stapel boeken. Welke soort lijn zie je?',
        options: ['Een kromme lijn.', 'Een rechte lijn.', 'Een losse punt.'],
        correct: 'Een kromme lijn.',
        explanation: 'Een lijn die buigt en niet recht loopt, noemen we een kromme lijn.'
      },
      {
        area: 'math',
        prompt: 'Een doos bevat 3 tientallen en 6 losse letterkaartjes. Welk getal is dat?',
        options: ['36', '63', '30'],
        correct: '36',
        explanation: 'Drie tientallen zijn 30. Met 6 eenheden erbij krijg je 36.'
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
        prompt: 'Liam kijkt naar het noorden. Hij draait eerst een kwartslag naar rechts en daarna een halve draai. Naar welke richting kijkt hij nu?',
        options: ['Naar het westen.', 'Naar het oosten.', 'Naar het zuiden.'],
        correct: 'Naar het westen.',
        explanation: 'Een kwartslag naar rechts brengt Liam van noord naar oost. Een halve draai vanaf oost brengt hem naar west.',
        challenge: true
      },
      {
        area: 'math',
        prompt: 'Lionel Messi legt 12 prentenboeken klaar en zet er nog 7 bij. Hoeveel prentenboeken zijn er nu?',
        options: ['19', '18', '20'],
        correct: '19',
        explanation: '12 + 7 = 19. Er zijn nu 19 prentenboeken.'
      },
      {
        area: 'language',
        storyTitle: 'De leesbeurten',
        passage: 'Amir, Liam en Noor lezen elk één keer voor. Liam leest niet als eerste. Noor leest na Liam. Amir leest niet als laatste.',
        prompt: 'Wie leest als tweede?',
        options: ['Liam', 'Amir', 'Noor'],
        correct: 'Liam',
        explanation: 'Noor moet na Liam lezen. Liam kan dus niet als laatste en volgens de tekst ook niet als eerste. Liam leest daarom als tweede.',
        challenge: true
      },
      {
        area: 'explore',
        prompt: 'Waarom helpt rustig voorlezen een luisteraar?',
        options: ['De luisteraar kan de woorden beter volgen.', 'Het boek krijgt vanzelf meer bladzijden.', 'De kaft verandert dan van kleur.'],
        correct: 'De luisteraar kan de woorden beter volgen.',
        explanation: 'Als je rustig leest, krijgt de luisteraar genoeg tijd om de woorden en het verhaal te begrijpen.'
      }
    ]
  }
};
