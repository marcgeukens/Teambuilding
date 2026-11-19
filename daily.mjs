export const ACTIVE_DATE = '2026-11-19';
export const DAILY_CONTENT = {
  '2026-11-19': {
    title: 'De familie-interviewcode',
    questions: [
      {
        area: 'math',
        prompt: 'Squirtle legt 8 familiefoto’s klaar en vindt er nog 5. Hoeveel foto’s zijn er samen?',
        options: ['13', '12', '14'],
        correct: '13',
        explanation: 'Ga via 10: splits 5 in 2 en 3. Eerst 8 + 2 = 10, daarna 10 + 3 = 13.',
        sock: {operator: '+', start: 8, splitTotal: 5, first: 2, second: 3, result: 13, step: '8 + 2 = 10, daarna 10 + 3 = 13.'}
      },
      {
        area: 'language',
        storyTitle: 'Liams interviewplan',
        passage: 'Donderdag legt Liam de stamboomkaartjes in de roze map. Vrijdag kiest hij samen met papa vier vragen. Zondag praat hij met oma. Maandag 23 november neemt hij het ingevulde interview mee naar school.',
        prompt: 'Wat doet Liam vlak vóór het gesprek met oma, en wanneer neemt hij het ingevulde interview mee?',
        options: ['Hij kiest vragen op vrijdag en neemt het interview maandag mee.', 'Hij legt kaartjes klaar op donderdag en neemt het interview zondag mee.', 'Hij praat met oma op vrijdag en neemt het interview donderdag mee.'],
        correct: 'Hij kiest vragen op vrijdag en neemt het interview maandag mee.',
        explanation: 'Zoek beide stukjes in de tekst. Vlak vóór zondag komt vrijdag: dan kiest Liam de vragen. Het ingevulde interview neemt hij maandag mee.',
        challenge: true
      },
      {
        area: 'explore',
        prompt: 'Twee rechte lijnen kruisen elkaar zoals een groot plusteken. Hoe noem je die lijnen?',
        options: ['loodrecht snijdende lijnen', 'evenwijdige lijnen', 'gebogen lijnen'],
        correct: 'loodrecht snijdende lijnen',
        explanation: 'De lijnen snijden elkaar en maken vier rechte hoeken. Daarom zijn het loodrecht snijdende lijnen.'
      },
      {
        area: 'math',
        prompt: 'Kylian Mbappé zet 7 paren kegels klaar. In elk paar staan 2 kegels. Hoeveel kegels zijn dat?',
        options: ['14', '12', '16'],
        correct: '14',
        explanation: 'Zeven groepjes van 2 zijn 2 + 2 + 2 + 2 + 2 + 2 + 2 = 14. De passende maalsom is 7 × 2 = 14. Het product is 14.',
        tableOfTwo: true
      },
      {
        area: 'language',
        prompt: 'Welk woord past in de zin? “Aan het ___ van het gesprek bedankt Liam oma.”',
        options: ['eind', 'ijnd', 'eijnt'],
        correct: 'eind',
        explanation: 'Je schrijft eind met ei. Aan het eind betekent: wanneer iets bijna klaar is.'
      },
      {
        area: 'explore',
        prompt: 'Er zijn drie fotokaders: rood, blauw en groen. Opa’s foto staat in groen. Liams foto staat in rood. Welke kleur blijft over voor oma’s foto?',
        options: ['blauw', 'rood', 'groen'],
        correct: 'blauw',
        explanation: 'Groen is al voor opa en rood is al voor Liam. Dan blijft alleen blauw over voor oma.',
        challenge: true
      },
      {
        area: 'math',
        prompt: 'Liam heeft 11 interviewkaartjes. Hij maakt er 6 bij en geeft daarna 3 kaartjes aan papa. Hoeveel kaartjes houdt Liam over?',
        options: ['14', '17', '8'],
        correct: '14',
        explanation: 'Reken in twee stappen: 11 + 6 = 17. Daarna 17 − 3 = 14. Liam houdt 14 kaartjes over.',
        challenge: true
      },
      {
        area: 'language',
        prompt: 'Welke twee woorden zijn zelfstandige naamwoorden in de zin “Opa vertelt een grappig verhaal”?',
        options: ['opa en verhaal', 'vertelt en grappig', 'opa en vertelt'],
        correct: 'opa en verhaal',
        explanation: 'Opa is een persoon en een verhaal is een ding. Vertelt is een werkwoord en grappig is een eigenschap.'
      },
      {
        area: 'explore',
        prompt: 'Liam kijkt naar het noorden en draait een kwartslag naar rechts. Naar welke richting kijkt hij nu?',
        options: ['het oosten', 'het westen', 'het zuiden'],
        correct: 'het oosten',
        explanation: 'Als je naar het noorden kijkt, wijst rechts naar het oosten. Een kwartslag naar rechts brengt je dus naar het oosten.'
      },
      {
        area: 'math',
        prompt: 'Welk getal is even én bestaat uit 1 tiental en 6 eenheden?',
        options: ['16', '15', '17'],
        correct: '16',
        explanation: 'Eén tiental en 6 eenheden is 10 + 6 = 16. Zestien is even, want je kunt het in paren verdelen.'
      },
      {
        area: 'language',
        storyTitle: 'Een bericht van oma',
        passage: 'Oma stuurt Liam een bericht: “Ik zit zondag om drie uur klaar voor ons gesprek. Breng je vragen mee.”',
        prompt: 'Wie is de ontvanger van oma’s bericht?',
        options: ['Liam', 'oma', 'de juf'],
        correct: 'Liam',
        explanation: 'Oma is de zender: zij stuurt het bericht. Liam ontvangt het bericht en is dus de ontvanger.'
      },
      {
        area: 'explore',
        prompt: 'Miraidon volgt een bord: personen naar links, dieren naar rechts en dingen rechtdoor. Waar moet een wc-rol heen?',
        options: ['rechtdoor', 'naar links', 'naar rechts'],
        correct: 'rechtdoor',
        explanation: 'Een wc-rol is een ding. Volgens het bord gaan dingen rechtdoor. Piep-piep, daar rolt hij al!'
      }
    ]
  }
};
