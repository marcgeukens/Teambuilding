export const ACTIVE_DATE = '2026-11-24';
export const DAILY_CONTENT = {
  '2026-11-24': {
    title: 'De speelgoeddeelcode',
    questions: [
      {
        area: 'math',
        prompt: 'Squirtle heeft 13 speelgoedsterren. Hij geeft er 6 weg. Hoeveel sterren houdt hij over?',
        options: ['7', '6', '8'],
        correct: '7',
        explanation: 'Ga via 10: splits 6 in 3 en 3. Eerst 13 − 3 = 10, daarna 10 − 3 = 7.',
        sock: {operator: '-', start: 13, splitTotal: 6, first: 3, second: 3, result: 7, step: '13 − 3 = 10, daarna 10 − 3 = 7.'},
        challenge: true
      },
      {
        area: 'language',
        storyTitle: 'Het bericht van het feestteam',
        passage: 'Beste ouders, Sinterklaas kan hulp gebruiken. Van vrijdag 27 november tot vrijdag 4 december staat er een geefkast op de speelplaats. Leg er alleen proper, volledig speelgoed in. Wie iets leuks vindt, mag ook speelgoed meenemen. Warme groetjes van het feestteam van K\'DO.',
        prompt: 'Wat is de belangrijkste boodschap van het feestteam?',
        options: ['Deel proper en volledig speelgoed via de geefkast.', 'Neem elke dag nieuw speelgoed mee naar huis.', 'Laat kapot speelgoed op de speelplaats liggen.'],
        correct: 'Deel proper en volledig speelgoed via de geefkast.',
        explanation: 'De tekst vraagt om goed speelgoed te delen via de geefkast. Het speelgoed moet proper en volledig zijn.'
      },
      {
        area: 'explore',
        prompt: 'Een houten blok, een metalen autootje en een stoffen knuffel liggen klaar. Welk voorwerp is van textiel gemaakt?',
        options: ['de stoffen knuffel', 'het houten blok', 'het metalen autootje'],
        correct: 'de stoffen knuffel',
        explanation: 'Textiel is stof. De knuffel is van stof gemaakt; de andere voorwerpen zijn van hout en metaal.'
      },
      {
        area: 'math',
        prompt: 'Er liggen 18 speelgoedautootjes. Liam zet ze per 2 naast elkaar. Hoeveel groepjes maakt hij?',
        options: ['9', '8', '10'],
        correct: '9',
        explanation: 'Je verdeelt 18 autootjes eerlijk in groepjes van 2. Zo krijg je 9 groepjes. De passende deelsom is 18 : 2 = 9. Het quotiënt is 9.',
        tableOfTwo: true
      },
      {
        area: 'language',
        prompt: 'Welk woord past in de zin? “Het is ___ om speelgoed te delen.”',
        options: ['tijd', 'teid', 'tijt'],
        correct: 'tijd',
        explanation: 'Je schrijft tijd met ij.'
      },
      {
        area: 'explore',
        prompt: 'Welke lijn verandert plots van richting en heeft scherpe knikken?',
        options: ['een gebroken lijn', 'een rechte lijn', 'een gebogen lijn'],
        correct: 'een gebroken lijn',
        explanation: 'Een gebroken lijn bestaat uit rechte lijnstukken die bij een knik van richting veranderen.'
      },
      {
        area: 'math',
        prompt: 'Cristiano Ronaldo heeft 12 oefenballen. Hoeveel ballen moet hij erbij leggen om er 19 te hebben?',
        options: ['7', '6', '8'],
        correct: '7',
        explanation: 'Zoek het ontbrekende getal: 12 + ? = 19. Van 12 tot 19 tel je 7 verder, dus 12 + 7 = 19.'
      },
      {
        area: 'language',
        storyTitle: 'Het bericht van het feestteam',
        passage: 'Beste ouders, Sinterklaas kan hulp gebruiken. Van vrijdag 27 november tot vrijdag 4 december staat er een geefkast op de speelplaats. Leg er alleen proper, volledig speelgoed in. Wie iets leuks vindt, mag ook speelgoed meenemen. Warme groetjes van het feestteam van K\'DO.',
        prompt: 'Wie is de zender en wie zijn de ontvangers van dit bericht?',
        options: ['Het feestteam is de zender en de ouders zijn de ontvangers.', 'De ouders zijn de zender en Sinterklaas is de ontvanger.', 'De geefkast is de zender en het feestteam is de ontvanger.'],
        correct: 'Het feestteam is de zender en de ouders zijn de ontvangers.',
        explanation: 'Onderaan staat dat het bericht van het feestteam komt: dat is de zender. Bovenaan staat “Beste ouders”: zij zijn de ontvangers.',
        challenge: true
      },
      {
        area: 'explore',
        prompt: 'In de rode, blauwe en groene doos zit telkens één voorwerp: een puzzel, een bal en een Pikachukaart. De bal zit in de blauwe doos. De Pikachukaart zit niet in de rode doos. Wat zit in de rode doos?',
        options: ['de puzzel', 'de bal', 'de Pikachukaart'],
        correct: 'de puzzel',
        explanation: 'De bal zit al in de blauwe doos. De Pikachukaart kan niet in de rode doos, dus die moet in de groene doos. Dan blijft de puzzel over voor de rode doos.',
        challenge: true
      },
      {
        area: 'math',
        prompt: 'Welk getal komt daarna? 6, 9, 12, ...',
        options: ['15', '14', '16'],
        correct: '15',
        explanation: 'Er komt telkens 3 bij: 6 + 3 = 9, 9 + 3 = 12 en 12 + 3 = 15.'
      },
      {
        area: 'language',
        prompt: 'Welke combinatie bevat een zelfstandig naamwoord met het juiste lidwoord en meervoud?',
        options: ['de knuffel – de knuffels', 'het knuffel – de knuffelen', 'de delen – de deel'],
        correct: 'de knuffel – de knuffels',
        explanation: 'Knuffel is een zelfstandig naamwoord. Je zegt de knuffel en in het meervoud de knuffels.'
      },
      {
        area: 'explore',
        prompt: 'De speelgoed-wc roept: “Pipi-pauze!” Liam wil hem daarna in de geefkast zetten. Wat controleert hij eerst?',
        options: ['Of het speelgoed proper, heel en volledig is.', 'Of het speelgoed zoveel mogelijk lawaai maakt.', 'Of er expres een onderdeel ontbreekt.'],
        correct: 'Of het speelgoed proper, heel en volledig is.',
        explanation: 'Speelgoed voor de geefkast moet proper, heel en volledig zijn. Dan kan een ander kind er veilig mee spelen.'
      }
    ]
  }
};
