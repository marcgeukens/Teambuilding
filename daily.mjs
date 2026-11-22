export const ACTIVE_DATE = '2026-11-22';
export const DAILY_CONTENT = {
  '2026-11-22': {
    title: 'De winterkoorcode',
    questions: [
      {
        area: 'math',
        prompt: 'Squirtle heeft 15 muzieksterretjes en geeft er 7 aan het natuurkoor. Hoeveel sterretjes houdt Squirtle over?',
        options: ['8', '7', '9'],
        correct: '8',
        explanation: 'Ga via 10: splits 7 in 5 en 2. Eerst 15 − 5 = 10, daarna 10 − 2 = 8.',
        sock: {operator: '-', start: 15, splitTotal: 7, first: 5, second: 2, result: 8, step: '15 − 5 = 10, daarna 10 − 2 = 8.'}
      },
      {
        area: 'language',
        storyTitle: 'Bericht voor het winterkoor',
        listenGroup: 'winterkoor-2026-11-22',
        listenText: 'Juf Barbara heeft een bericht voor de Fonkelende Feniksen. Op donderdag 17 december is er een winterconcert op school. De kinderen verzamelen om twintig voor vijf op de speelplaats. Om vijf uur begint het concert. Het optreden is buiten en Liam trekt voor hij vertrekt een warme jas aan. Na het zingen drinkt hij met mama warme chocolademelk.',
        prompt: 'Waarom trekt Liam een warme jas aan?',
        options: ['Omdat het optreden buiten is.', 'Omdat hij de jas wil zingen.', 'Omdat de chocolademelk koud is.'],
        correct: 'Omdat het optreden buiten is.',
        explanation: 'Je combineert twee stukjes uit het bericht: het optreden is buiten en daarom trekt Liam een warme jas aan.',
        challenge: true
      },
      {
        area: 'explore',
        storyTitle: 'Bericht voor het winterkoor',
        listenGroup: 'winterkoor-2026-11-22',
        listenText: 'Juf Barbara heeft een bericht voor de Fonkelende Feniksen. Op donderdag 17 december is er een winterconcert op school. De kinderen verzamelen om twintig voor vijf op de speelplaats. Om vijf uur begint het concert. Het optreden is buiten en Liam trekt voor hij vertrekt een warme jas aan. Na het zingen drinkt hij met mama warme chocolademelk.',
        prompt: 'Welke klok toont wanneer de kinderen verzamelen?',
        options: ['16:40', '16:20', '17:00'],
        correct: '16:40',
        explanation: 'Twintig voor vijf is twintig minuten vóór vijf uur. Dat is 16:40.',
        clockOptions: {
          '16:40': {hour: 4, minute: 40, label: 'twintig voor vijf'},
          '16:20': {hour: 4, minute: 20, label: 'twintig over vier'},
          '17:00': {hour: 5, minute: 0, label: 'vijf uur'}
        }
      },
      {
        area: 'math',
        prompt: 'Liam legt 12 belletjes in groepjes van telkens 2. Hoeveel groepjes maakt hij?',
        options: ['6', '5', '7'],
        correct: '6',
        explanation: 'Twaalf belletjes worden eerlijk verdeeld in groepjes van 2. Je maakt 6 groepjes. De passende deelsom is 12 : 2 = 6. Het quotiënt is 6.',
        tableOfTwo: true
      },
      {
        area: 'language',
        storyTitle: 'Bericht voor het winterkoor',
        listenGroup: 'winterkoor-2026-11-22',
        listenText: 'Juf Barbara heeft een bericht voor de Fonkelende Feniksen. Op donderdag 17 december is er een winterconcert op school. De kinderen verzamelen om twintig voor vijf op de speelplaats. Om vijf uur begint het concert. Het optreden is buiten en Liam trekt voor hij vertrekt een warme jas aan. Na het zingen drinkt hij met mama warme chocolademelk.',
        prompt: 'Schrijf de dag en datum van het winterconcert.',
        type: 'text',
        accepted: ['donderdag 17 december', '17 december', 'donderdag 17 december 2026', '17 december 2026'],
        correct: 'donderdag 17 december',
        explanation: 'In het bericht hoor je dat het winterconcert op donderdag 17 december is.'
      },
      {
        area: 'explore',
        prompt: 'Liam legt een kurk en een metalen sleutel in een kom water. Wat gebeurt er meestal?',
        options: ['De kurk drijft en de sleutel zinkt.', 'De kurk zinkt en de sleutel drijft.', 'Ze blijven allebei boven drijven.'],
        correct: 'De kurk drijft en de sleutel zinkt.',
        explanation: 'Kurk is licht en blijft meestal drijven. Een metalen sleutel is zwaarder dan water en zinkt.'
      },
      {
        area: 'math',
        prompt: 'Kylian Mbappé zet 18 oefenkegels neer. Hij haalt er 6 weg en zet daarna 3 kegels terug. Hoeveel kegels staan er nu?',
        options: ['15', '12', '9'],
        correct: '15',
        explanation: 'Reken in twee stappen: 18 − 6 = 12. Daarna 12 + 3 = 15. Er staan nu 15 kegels.',
        challenge: true
      },
      {
        area: 'language',
        prompt: 'Welk woord past in de zin? “De zangers staan netjes in een ___.”',
        options: ['rij', 'rei', 'rijj'],
        correct: 'rij',
        explanation: 'Mensen die achter elkaar staan, vormen een rij. Je schrijft rij met ij.'
      },
      {
        area: 'explore',
        prompt: 'De fluit klinkt vóór de trom. De bel klinkt na de trom. Welke volgorde klopt?',
        options: ['fluit – trom – bel', 'trom – bel – fluit', 'bel – fluit – trom'],
        correct: 'fluit – trom – bel',
        explanation: 'De fluit komt eerst. De trom komt daarna. Omdat de bel na de trom klinkt, komt de bel als laatste.',
        challenge: true
      },
      {
        area: 'math',
        prompt: 'Welk getal is groter dan 14, kleiner dan 18 én even?',
        options: ['16', '15', '17'],
        correct: '16',
        explanation: 'Tussen 14 en 18 liggen 15, 16 en 17. Alleen 16 is even.'
      },
      {
        area: 'language',
        prompt: 'Welke rij bevat alleen zelfstandige naamwoorden?',
        options: ['koor – boom – jas', 'zingt – loopt – drinkt', 'warm – groen – stil'],
        correct: 'koor – boom – jas',
        explanation: 'Een koor, een boom en een jas zijn dingen of groepen die je een naam kunt geven. De tweede rij bevat werkwoorden en de derde rij eigenschappen.'
      },
      {
        area: 'explore',
        prompt: 'Welk afval hoort bij het groente-, fruit- en tuinafval?',
        options: ['gevallen blaadjes', 'een plastic beker', 'een batterij'],
        correct: 'gevallen blaadjes',
        explanation: 'Gevallen blaadjes zijn natuurlijk tuinafval. Plastic en batterijen horen in een andere afvalstroom.'
      }
    ]
  }
};
