export const ACTIVE_DATE = '2026-10-19';
export const DAILY_CONTENT = {
  '2026-10-19': {
    title: 'Het geheim van de maanlamp',
    questions: [
      {
        area: 'math',
        storyTitle: 'Luistertest: de lichtproef',
        listenGroup: 'lichtproef',
        listenText: 'Dag Liam, luister goed naar het bericht over de lichtproef. Op maandag zesentwintig oktober begint de oefenworkshop om kwart over negen. De kinderen verzamelen aan de blauwe deur van de turnzaal. Ze brengen een zaklamp en een fluohesje mee. Juf Noor hangt een wit laken aan de muur. Eerst maken de kinderen met hun handen een schaduwfiguur. Ze dragen het fluohesje zodat ze goed zichtbaar blijven wanneer het licht zachter wordt.',
        prompt: 'Welke klok toont het beginuur van de oefenworkshop?',
        options: ['09:15', '09:30', '10:15'],
        correct: '09:15',
        clockOptions: {
          '09:15': {hour: 9, minute: 15, label: 'kwart over negen'},
          '09:30': {hour: 9, minute: 30, label: 'half tien'},
          '10:15': {hour: 10, minute: 15, label: 'kwart over tien'}
        },
        explanation: 'Kwart over negen is 09.15 uur. De grote wijzer staat op 3 en de kleine wijzer net voorbij 9.'
      },
      {
        area: 'language',
        storyTitle: 'Luistertest: de lichtproef',
        listenGroup: 'lichtproef',
        listenText: 'Dag Liam, luister goed naar het bericht over de lichtproef. Op maandag zesentwintig oktober begint de oefenworkshop om kwart over negen. De kinderen verzamelen aan de blauwe deur van de turnzaal. Ze brengen een zaklamp en een fluohesje mee. Juf Noor hangt een wit laken aan de muur. Eerst maken de kinderen met hun handen een schaduwfiguur. Ze dragen het fluohesje zodat ze goed zichtbaar blijven wanneer het licht zachter wordt.',
        prompt: 'Wat brengen de kinderen mee naar de lichtproef?',
        options: ['Een zaklamp en een fluohesje.', 'Een bal en een springtouw.', 'Een boek en een kleurpotlood.'],
        correct: 'Een zaklamp en een fluohesje.',
        explanation: 'In het bericht hoor je dat de kinderen een zaklamp en een fluohesje meebrengen.'
      },
      {
        area: 'explore',
        type: 'text',
        storyTitle: 'Luistertest: de lichtproef',
        listenGroup: 'lichtproef',
        listenText: 'Dag Liam, luister goed naar het bericht over de lichtproef. Op maandag zesentwintig oktober begint de oefenworkshop om kwart over negen. De kinderen verzamelen aan de blauwe deur van de turnzaal. Ze brengen een zaklamp en een fluohesje mee. Juf Noor hangt een wit laken aan de muur. Eerst maken de kinderen met hun handen een schaduwfiguur. Ze dragen het fluohesje zodat ze goed zichtbaar blijven wanneer het licht zachter wordt.',
        prompt: 'Op welke dag en datum is de oefenworkshop? Schrijf ze allebei zelf.',
        placeholder: 'bijvoorbeeld: maandag 4 mei',
        accepted: ['maandag 26 oktober', 'maandag zesentwintig oktober', 'maandag 26/10', 'maandag 26-10', 'maandag 26 oktober 2026', '26 oktober maandag'],
        correct: 'maandag 26 oktober',
        explanation: 'In het bericht hoor je: maandag zesentwintig oktober.'
      },
      {
        area: 'math',
        tableOf2: true,
        prompt: 'Kevin De Bruyne legt 6 groepjes van telkens 2 lichtkaartjes langs een oefenveld. Hoeveel lichtkaartjes zijn dat samen?',
        options: ['8', '10', '12'],
        correct: '12',
        explanation: 'Zes groepjes van 2 zijn 2 + 2 + 2 + 2 + 2 + 2 = 12. De keersom is 6 × 2 = 12.'
      },
      {
        area: 'language',
        prompt: 'Welke zin begint met een vraagwoord?',
        options: ['Waar hangt de maanlamp?', 'De maanlamp hangt hoog.', 'Hang de maanlamp hier.'],
        correct: 'Waar hangt de maanlamp?',
        explanation: 'Waar is een vraagwoord. De zin vraagt naar een plaats en eindigt met een vraagteken.'
      },
      {
        area: 'explore',
        prompt: 'Je tekent een rechte lijn van punt A tot punt B en stopt bij beide punten. Hoe heet dat stuk?',
        options: ['Een lijnstuk.', 'Een kromme lijn.', 'Alleen een punt.'],
        correct: 'Een lijnstuk.',
        explanation: 'Een rechte lijn die bij twee punten begint en eindigt, noem je een lijnstuk.'
      },
      {
        area: 'math',
        prompt: 'Een trol heeft 14 lichtsteentjes en geeft er 6 weg. Gebruik de sok. Hoeveel houdt hij over?',
        options: ['7', '8', '9'],
        correct: '8',
        sock: {operator: '-', start: 14, splitTotal: 6, first: 4, second: 2, result: 8, step: '14 - 4 = 10, daarna 10 - 2 = 8.'},
        explanation: 'Splits 6 in 4 en 2. Eerst ga je met 14 - 4 naar 10. Daarna doe je 10 - 2 = 8.'
      },
      {
        area: 'language',
        storyTitle: 'Het proefkaartje',
        passage: 'Zet na de proef eerst je zaklamp uit. Leg daarna het witte doek in de mand.',
        prompt: 'Wat moet je volgens het kaartje eerst doen?',
        options: ['De zaklamp uitzetten.', 'Het doek in de mand leggen.', 'De deur openen.'],
        correct: 'De zaklamp uitzetten.',
        explanation: 'Op het kaartje staat eerst dat je de zaklamp moet uitzetten. Het doek opruimen komt daarna.'
      },
      {
        area: 'explore',
        prompt: 'Squirtle staat bij de start. Hij gaat 2 stappen vooruit en daarna 1 stap naar rechts. Waar staat hij nu?',
        options: ['Vooruit en rechts van de start.', 'Vooruit en links van de start.', 'Precies op de start.'],
        correct: 'Vooruit en rechts van de start.',
        explanation: 'Eerst gaat Squirtle vooruit. Daarna schuift hij naar rechts. Hij eindigt dus vooruit en rechts van de start.'
      },
      {
        area: 'math',
        prompt: 'Een doos bevat 5 tientallen en 3 eenheden. Welk getal is dat?',
        options: ['35', '50', '53'],
        correct: '53',
        explanation: 'Vijf tientallen zijn 50. Met 3 eenheden erbij krijg je 53.'
      },
      {
        area: 'language',
        storyTitle: 'Luistertest: de lichtproef',
        listenGroup: 'lichtproef',
        listenText: 'Dag Liam, luister goed naar het bericht over de lichtproef. Op maandag zesentwintig oktober begint de oefenworkshop om kwart over negen. De kinderen verzamelen aan de blauwe deur van de turnzaal. Ze brengen een zaklamp en een fluohesje mee. Juf Noor hangt een wit laken aan de muur. Eerst maken de kinderen met hun handen een schaduwfiguur. Ze dragen het fluohesje zodat ze goed zichtbaar blijven wanneer het licht zachter wordt.',
        prompt: 'Waarom dragen de kinderen een fluohesje?',
        options: ['Om goed zichtbaar te blijven.', 'Om sneller te kunnen lopen.', 'Om de zaklamp op te bergen.'],
        correct: 'Om goed zichtbaar te blijven.',
        explanation: 'Aan het einde hoor je dat het fluohesje helpt om zichtbaar te blijven wanneer het licht zachter wordt.'
      },
      {
        area: 'explore',
        prompt: 'Kabouter Kaka knippert met zijn lamp in dit patroon: maan, ster, ster, maan, ster, ster, ... Wat komt daarna?',
        options: ['Maan.', 'Ster.', 'Zon.'],
        correct: 'Maan.',
        explanation: 'Het patroon herhaalt steeds maan, ster, ster. Na twee sterren begint het opnieuw met de maan.'
      }
    ]
  }
};
