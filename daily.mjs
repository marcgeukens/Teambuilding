export const ACTIVE_DATE = '2026-11-03';
export const DAILY_CONTENT = {
  '2026-11-03': {
    title: 'De drogende herfstkaart',
    questions: [
      {
        area: 'math',
        prompt: 'Liam heeft 7 rode bladeren en vindt er 6 gele bij. Hoeveel bladeren heeft hij samen?',
        options: ['13', '12', '14'],
        correct: '13',
        explanation: 'Splits 6 in 3 en 3. Eerst 7 + 3 = 10, daarna 10 + 3 = 13.',
        challenge: true,
        sock: {
          operator: '+',
          start: 7,
          splitTotal: 6,
          first: 3,
          second: 3,
          result: 13,
          step: '7 + 3 = 10, daarna 10 + 3 = 13.'
        }
      },
      {
        area: 'language',
        storyTitle: 'Het plan voor de herfstkaart',
        listenGroup: 'herfstkaart-2026-11-03',
        listenText: 'Goedemorgen Liam. Vandaag is het dinsdag 3 november. Om kwart voor negen legt juf Noor een mand met herfstbladeren op de tekentafel. De blauwe schaar ligt naast de lijm. Eerst kiest elk kind twee bladeren. Daarna maakt de klas een herfstkaart. Om halftien worden de kaarten op de vensterbank gezet om te drogen.',
        prompt: 'Wat ligt naast de lijm?',
        options: ['De blauwe schaar.', 'De mand met bladeren.', 'Een rood kleurpotlood.'],
        correct: 'De blauwe schaar.',
        explanation: 'In het bericht hoor je dat de blauwe schaar naast de lijm ligt.'
      },
      {
        area: 'explore',
        storyTitle: 'Het plan voor de herfstkaart',
        listenGroup: 'herfstkaart-2026-11-03',
        listenText: 'Goedemorgen Liam. Vandaag is het dinsdag 3 november. Om kwart voor negen legt juf Noor een mand met herfstbladeren op de tekentafel. De blauwe schaar ligt naast de lijm. Eerst kiest elk kind twee bladeren. Daarna maakt de klas een herfstkaart. Om halftien worden de kaarten op de vensterbank gezet om te drogen.',
        prompt: 'Welke klok toont het tijdstip waarop de kaarten op de vensterbank worden gezet?',
        options: ['09:30', '08:45', '10:30'],
        correct: '09:30',
        explanation: 'Halftien is een halfuur vóór tien uur. Dat is 09:30.',
        clockOptions: {
          '09:30': {hour: 9, minute: 30, label: 'halftien'},
          '08:45': {hour: 8, minute: 45, label: 'kwart voor negen'},
          '10:30': {hour: 10, minute: 30, label: 'halfelf'}
        }
      },
      {
        area: 'math',
        prompt: 'Er liggen 16 kastanjes in groepjes van 2. Hoeveel groepjes zijn er en welke keersom past?',
        options: ['8 groepjes; 8 × 2 = 16', '7 groepjes; 7 × 2 = 14', '9 groepjes; 9 × 2 = 18'],
        correct: '8 groepjes; 8 × 2 = 16',
        explanation: 'Je maakt de groepjes 2, 4, 6, 8, 10, 12, 14 en 16. Dat zijn 8 groepjes van 2. De keersom is 8 × 2 = 16.',
        tableOfTwo: true
      },
      {
        area: 'language',
        storyTitle: 'Het plan voor de herfstkaart',
        listenGroup: 'herfstkaart-2026-11-03',
        listenText: 'Goedemorgen Liam. Vandaag is het dinsdag 3 november. Om kwart voor negen legt juf Noor een mand met herfstbladeren op de tekentafel. De blauwe schaar ligt naast de lijm. Eerst kiest elk kind twee bladeren. Daarna maakt de klas een herfstkaart. Om halftien worden de kaarten op de vensterbank gezet om te drogen.',
        prompt: 'Waarom stopt Liam zijn pas gemaakte herfstkaart beter nog niet meteen in zijn schooltas?',
        options: ['De lijm moet eerst drogen.', 'De schooltas is te zwaar.', 'De kaart hoort in de vuilnisbak.'],
        correct: 'De lijm moet eerst drogen.',
        explanation: 'De kaarten worden op de vensterbank gezet om te drogen. In de schooltas kan de natte lijm nog vlekken maken.',
        challenge: true
      },
      {
        area: 'explore',
        prompt: 'Liam kijkt naar het noorden en draait een kwartslag naar rechts. Naar welke richting kijkt hij nu?',
        options: ['Naar het oosten.', 'Naar het westen.', 'Naar het zuiden.'],
        correct: 'Naar het oosten.',
        explanation: 'Op een windroos ligt het oosten rechts van het noorden.'
      },
      {
        area: 'math',
        prompt: 'Welk getal bestaat uit 4 tientallen en 2 eenheden?',
        options: ['42', '24', '40'],
        correct: '42',
        explanation: 'Vier tientallen zijn 40. Met 2 eenheden erbij krijg je 42.'
      },
      {
        area: 'language',
        prompt: 'Welk MKMM-woord is juist geschreven?',
        options: ['hand', 'hant', 'had'],
        correct: 'hand',
        explanation: 'Hand heeft één medeklinker h, één klinker a en daarna twee medeklinkers n en d: MKMM.'
      },
      {
        area: 'explore',
        prompt: 'Welk hulpmiddel gebruik je om de lengte van twee bladeren precies te vergelijken?',
        options: ['Een meetlat.', 'Een lijmstift.', 'Een drinkbeker.'],
        correct: 'Een meetlat.',
        explanation: 'Met een meetlat kun je de lengte van elk blad in centimeter meten en vergelijken.'
      },
      {
        area: 'math',
        prompt: 'Lionel Messi legt 15 oefenhesjes klaar en krijgt er nog 4 bij. Hoeveel hesjes zijn er nu?',
        options: ['19', '18', '20'],
        correct: '19',
        explanation: '15 + 4 = 19. Er zijn nu 19 oefenhesjes.'
      },
      {
        area: 'language',
        prompt: 'Welke zin is helemaal juist geschreven?',
        options: ['De wc-pot maakt een grappige plons.', 'de wc-pot maakt een grappige plons.', 'De wc-pot maakt een grappige plons'],
        correct: 'De wc-pot maakt een grappige plons.',
        explanation: 'Een zin begint met een hoofdletter en eindigt met een punt.'
      },
      {
        area: 'explore',
        prompt: 'Squirtle, Pikachu en Miraidon kiezen elk een ander kleurpotlood: rood, blauw of geel. Squirtle kiest blauw. Miraidon kiest niet rood. Welke kleur kiest Pikachu?',
        options: ['Rood', 'Geel', 'Blauw'],
        correct: 'Rood',
        explanation: 'Blauw is al voor Squirtle. Miraidon kiest niet rood en moet dus geel kiezen. Daardoor blijft rood over voor Pikachu.',
        challenge: true
      }
    ]
  }
};
