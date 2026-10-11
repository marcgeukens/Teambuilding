// Dagelijkse missie: alleen de inhoud verandert. Accounts, scores en opslag blijven onaangeroerd.
export const ACTIVE_DATE = '2026-10-11';

const LISTENING_TEXT = 'Dag Liam, hier spreekt juf Barbara. Ik heb groot nieuws voor de Fonkelende Feniksen! Op woensdag veertien oktober organiseren we een speurtocht in het Stadspark. We verzamelen om drie uur aan de grote fontein. De speurtocht begint om halfvier in de namiddag. We zoeken zes kaartjes met een gouden feniks erop. Breng stevige schoenen en een drinkfles mee. Liam mag samen met Noor de eerste aanwijzing zoeken. De ouders kunnen de kinderen om vijf uur ophalen bij de ingang van het park. Tot dan!';

export const DAILY_CONTENT = {
  '2026-10-11': {
    title: 'Het geheim van de gouden feniks',
    questions: [
      {
        area: 'language',
        storyTitle: 'Luistertest: de geheime speurtocht',
        listenGroup: 'gouden-feniks',
        listenText: LISTENING_TEXT,
        prompt: 'Waar gaan de Fonkelende Feniksen op speurtocht?',
        options: ['In het Stadspark.', 'In de bibliotheek.', 'Op het voetbalveld.'],
        correct: 'In het Stadspark.',
        explanation: 'Juf Barbara vertelt dat de speurtocht in het Stadspark plaatsvindt.'
      },
      {
        area: 'language',
        type: 'text',
        storyTitle: 'Luistertest: de geheime speurtocht',
        listenGroup: 'gouden-feniks',
        listenText: LISTENING_TEXT,
        prompt: 'Op welke dag en datum is de speurtocht? Schrijf ze allebei zelf.',
        placeholder: 'bijvoorbeeld: maandag 4 mei',
        accepted: ['woensdag 14 oktober', 'woensdag veertien oktober', 'woensdag 14/10', 'woensdag 14-10', 'woensdag 14 oktober 2026', '14 oktober woensdag'],
        correct: 'woensdag 14 oktober',
        explanation: 'In het bericht zegt de juf: woensdag veertien oktober.'
      },
      {
        area: 'math',
        storyTitle: 'Luistertest: de geheime speurtocht',
        listenGroup: 'gouden-feniks',
        listenText: LISTENING_TEXT,
        prompt: 'Hoe laat begint de speurtocht? Duid de juiste klok aan.',
        options: ['15:00', '15:30', '16:30'],
        correct: '15:30',
        clockOptions: {
          '15:00': {hour: 3, minute: 0, label: 'drie uur'},
          '15:30': {hour: 3, minute: 30, label: 'halfvier'},
          '16:30': {hour: 4, minute: 30, label: 'halfvijf'}
        },
        explanation: 'Ze verzamelen om drie uur, maar beginnen pas om halfvier. De grote wijzer staat op de 6 en de kleine tussen de 3 en de 4.'
      },
      {
        area: 'explore',
        storyTitle: 'Luistertest: de geheime speurtocht',
        listenGroup: 'gouden-feniks',
        listenText: LISTENING_TEXT,
        prompt: 'Wat moeten de kinderen meebrengen?',
        options: ['Stevige schoenen en een drinkfles.', 'Een zwembroek en een handdoek.', 'Een voetbal en een helm.'],
        correct: 'Stevige schoenen en een drinkfles.',
        explanation: 'De juf vraagt om stevige schoenen en een drinkfles mee te brengen.'
      },
      {
        area: 'math',
        prompt: 'Pikachu vindt 9 gouden sterren en krijgt er 6 bij. Gebruik de sok. Hoeveel sterren heeft hij samen?',
        options: ['14', '15', '16'],
        correct: '15',
        sock: {operator: '+', start: 9, splitTotal: 6, first: 1, second: 5, result: 15, step: '9 + 1 = 10, daarna 10 + 5 = 15.'},
        explanation: 'Splits de 6 in 1 en 5. Eerst maak je 10 en daarna tel je er 5 bij: 15.'
      },
      {
        area: 'language',
        prompt: 'Welk woord is juist geschreven?',
        options: ['herfst', 'herfs', 'herfstt'],
        correct: 'herfst',
        explanation: 'Herfst schrijf je met r, f, s en t achteraan: h-e-r-f-s-t.'
      },
      {
        area: 'explore',
        prompt: 'De Feniksen verzamelen om drie uur en vertrekken om halfvier. Hoelang wachten ze?',
        options: ['Een halfuur.', 'Een kwartier.', 'Een heel uur.'],
        correct: 'Een halfuur.',
        explanation: 'Van drie uur tot halfvier is dertig minuten, dus een halfuur.'
      },
      {
        area: 'math',
        prompt: 'Liam heeft 14 aanwijzingen. Hij geeft er 6 aan Noor. Gebruik de sok. Hoeveel houdt hij over?',
        options: ['7', '8', '9'],
        correct: '8',
        sock: {operator: '−', start: 14, splitTotal: 6, first: 4, second: 2, result: 8, step: '14 − 4 = 10, daarna 10 − 2 = 8.'},
        explanation: 'Splits 6 in 4 en 2. Eerst 14 − 4 = 10. Daarna 10 − 2 = 8.'
      },
      {
        area: 'language',
        prompt: 'Welke zin is helemaal juist geschreven?',
        options: ['De feniks vliegt hoog.', 'de feniks vliegt hoog.', 'De feniks vliegt hoog'],
        correct: 'De feniks vliegt hoog.',
        explanation: 'De zin begint met een hoofdletter en eindigt met een punt.'
      },
      {
        area: 'explore',
        prompt: 'Op de schatkaart staat het patroon: vlam, ster, ster, vlam, ster, ster, … Wat komt daarna?',
        options: ['Vlam.', 'Ster.', 'Maan.'],
        correct: 'Vlam.',
        explanation: 'Het patroon herhaalt telkens één vlam en twee sterren.'
      },
      {
        area: 'math',
        prompt: 'Er zijn 6 gouden kaartjes. Liam vindt er 2 en Noor vindt er 3. Hoeveel kaartjes moeten ze nog vinden?',
        options: ['1', '2', '3'],
        correct: '1',
        explanation: 'Liam en Noor vinden samen 2 + 3 = 5 kaartjes. Van de 6 blijft er dus 1 over.'
      },
      {
        area: 'explore',
        prompt: 'Vandaag is het zondag. Welke dag is het over drie dagen?',
        options: ['Woensdag.', 'Dinsdag.', 'Donderdag.'],
        correct: 'Woensdag.',
        explanation: 'Maandag is over één dag, dinsdag over twee en woensdag over drie dagen.'
      }
    ]
  }
};
