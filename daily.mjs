export const ACTIVE_DATE = '2026-11-08';
export const DAILY_CONTENT = {
  '2026-11-08': {
    title: 'De stille egelwandeling',
    questions: [
      {
        area: 'math',
        prompt: 'In een mand liggen 16 noten. Liam geeft er 7 aan de egelhoek. Hoeveel noten blijven in de mand?',
        options: ['9', '8', '10'],
        correct: '9',
        explanation: 'Splits 7 in 6 en 1. Eerst 16 - 6 = 10, daarna 10 - 1 = 9.',
        challenge: true,
        sock: {
          operator: '-',
          start: 16,
          splitTotal: 7,
          first: 6,
          second: 1,
          result: 9,
          step: '16 - 6 = 10, daarna 10 - 1 = 9.'
        }
      },
      {
        area: 'language',
        storyTitle: 'De stille zondagstocht',
        listenGroup: 'egelwandeling-2026-11-08',
        listenText: 'Goedemorgen Liam. Vandaag is het zondag 8 november. Om negen uur zet mama een kleine mand bij de achterdeur. Liam legt daarin een appel, een rode sjaal en een briefje voor oma. Om halftien vertrekken ze te voet. Onderweg zien ze een egel onder een hoop bladeren. Ze wandelen stil verder zodat het dier niet schrikt.',
        prompt: 'Wat legt Liam naast de appel en de rode sjaal in de mand?',
        options: ['Een briefje voor oma.', 'Een blauwe muts.', 'Een zak kastanjes.'],
        correct: 'Een briefje voor oma.',
        explanation: 'In het bericht hoor je dat Liam een appel, een rode sjaal en een briefje voor oma in de mand legt.'
      },
      {
        area: 'explore',
        storyTitle: 'De stille zondagstocht',
        listenGroup: 'egelwandeling-2026-11-08',
        listenText: 'Goedemorgen Liam. Vandaag is het zondag 8 november. Om negen uur zet mama een kleine mand bij de achterdeur. Liam legt daarin een appel, een rode sjaal en een briefje voor oma. Om halftien vertrekken ze te voet. Onderweg zien ze een egel onder een hoop bladeren. Ze wandelen stil verder zodat het dier niet schrikt.',
        prompt: 'Welke klok toont het tijdstip waarop Liam en mama vertrekken?',
        options: ['09:30', '09:00', '10:30'],
        correct: '09:30',
        explanation: 'Halftien is een halfuur vóór tien uur. Dat is 09:30.',
        clockOptions: {
          '09:30': {hour: 9, minute: 30, label: 'halftien'},
          '09:00': {hour: 9, minute: 0, label: 'negen uur'},
          '10:30': {hour: 10, minute: 30, label: 'halfelf'}
        }
      },
      {
        area: 'math',
        prompt: 'Pikachu maakt 6 kleine pakjes met telkens 2 nootkaartjes. Hoeveel nootkaartjes zijn dat samen?',
        options: ['12', '10', '14'],
        correct: '12',
        explanation: 'Je maakt 6 groepjes van 2: 2 + 2 + 2 + 2 + 2 + 2 = 12. De keersom is 6 × 2 = 12.',
        tableOfTwo: true
      },
      {
        area: 'language',
        storyTitle: 'De stille zondagstocht',
        listenGroup: 'egelwandeling-2026-11-08',
        listenText: 'Goedemorgen Liam. Vandaag is het zondag 8 november. Om negen uur zet mama een kleine mand bij de achterdeur. Liam legt daarin een appel, een rode sjaal en een briefje voor oma. Om halftien vertrekken ze te voet. Onderweg zien ze een egel onder een hoop bladeren. Ze wandelen stil verder zodat het dier niet schrikt.',
        prompt: 'Liam wil vlak bij de bladeren luid roepen. Waarom kiest hij beter een zachte stem?',
        options: ['Anders kan de egel schrikken.', 'Anders wordt de rode sjaal blauw.', 'Anders verdwijnt de mand.'],
        correct: 'Anders kan de egel schrikken.',
        explanation: 'Het bericht zegt dat ze stil verder wandelen zodat de egel niet schrikt. Een zachte stem past dus bij hun bedoeling.',
        challenge: true
      },
      {
        area: 'explore',
        prompt: 'Liam kijkt naar het oosten en draait een halve draai. Naar welke richting kijkt hij daarna?',
        options: ['Naar het westen.', 'Naar het noorden.', 'Naar het zuiden.'],
        correct: 'Naar het westen.',
        explanation: 'Na een halve draai kijk je precies de andere kant op. Tegenover het oosten ligt het westen.'
      },
      {
        area: 'math',
        prompt: 'Squirtle telt 3 tientallen en 4 losse steentjes. Welk getal telt hij?',
        options: ['34', '43', '30'],
        correct: '34',
        explanation: 'Drie tientallen zijn 30. Met 4 eenheden erbij krijg je 34.'
      },
      {
        area: 'language',
        prompt: 'Welk MKMM-woord is juist geschreven?',
        options: ['worm', 'wrom', 'wor'],
        correct: 'worm',
        explanation: 'Worm heeft één medeklinker w, één klinker o en daarna twee medeklinkers r en m: MKMM.'
      },
      {
        area: 'explore',
        prompt: 'Een recht paadje begint bij punt P en eindigt bij punt Q. Hoeveel eindpunten heeft dit lijnstuk?',
        options: ['2 eindpunten.', '1 eindpunt.', 'Geen eindpunten.'],
        correct: '2 eindpunten.',
        explanation: 'Een lijnstuk heeft altijd twee eindpunten. Hier zijn dat punt P en punt Q.'
      },
      {
        area: 'math',
        prompt: 'Kevin De Bruyne legt 14 oefenhoedjes klaar en zet er nog 5 bij. Hoeveel oefenhoedjes liggen er nu?',
        options: ['19', '18', '20'],
        correct: '19',
        explanation: '14 + 5 = 19. Er liggen nu 19 oefenhoedjes.'
      },
      {
        area: 'language',
        prompt: 'Welke zin vertelt dat er meer dan één wc-rol is?',
        options: ['Er liggen drie wc-rollen.', 'Er ligt één wc-rol.', 'De wc-rol is wit.'],
        correct: 'Er liggen drie wc-rollen.',
        explanation: 'Het woord “drie” en de meervoudsvorm “wc-rollen” tonen dat het over meer dan één wc-rol gaat.'
      },
      {
        area: 'explore',
        prompt: 'Een eekhoorn, een egel en een vogel zitten elk op een andere plek: laag, midden of hoog. De eekhoorn zit hoog. De egel zit niet laag. De vogel zit niet in het midden. Waar zit de egel?',
        options: ['In het midden.', 'Laag.', 'Hoog.'],
        correct: 'In het midden.',
        explanation: 'Hoog is al voor de eekhoorn. De vogel zit niet in het midden en moet dus laag zitten. Daardoor blijft het midden over voor de egel.',
        challenge: true
      }
    ]
  }
};
