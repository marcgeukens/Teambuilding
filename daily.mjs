export const ACTIVE_DATE = '2026-11-25';
export const DAILY_CONTENT = {
  '2026-11-25': {
    title: 'De geefkast-luistercode',
    questions: [
      {
        area: 'math',
        prompt: 'Miraidon heeft 6 energiekaartjes en krijgt er 8 bij. Hoeveel kaartjes heeft hij nu?',
        options: ['14', '13', '15'],
        correct: '14',
        explanation: 'Ga via 10: splits 8 in 4 en 4. Eerst 6 + 4 = 10, daarna 10 + 4 = 14.',
        sock: {operator: '+', start: 6, splitTotal: 8, first: 4, second: 4, result: 14, step: '6 + 4 = 10, daarna 10 + 4 = 14.'},
        challenge: true
      },
      {
        area: 'language',
        storyTitle: 'Het bericht over de geefkast',
        listenGroup: 'geefkast-25-november',
        listenText: 'Juf Barbara heeft een bericht voor de Fonkelende Feniksen. Op vrijdag 27 november gaat de geefkast open op de speelplaats. Op donderdag om halfvier bekijkt Liam thuis samen met mama welk speelgoed hij kan delen. Hij kiest een proper spel met alle stukken. Een puzzel met een ontbrekend stukje blijft thuis, want een ander kind moet er meteen mee kunnen spelen. Liam brengt het volledige spel vrijdagmorgen mee naar school.',
        prompt: 'Waarom blijft de puzzel met het ontbrekende stukje thuis?',
        options: ['Omdat een ander kind er niet meteen volledig mee kan spelen.', 'Omdat Liam alleen nieuw speelgoed mag delen.', 'Omdat puzzels nooit in een geefkast mogen.'],
        correct: 'Omdat een ander kind er niet meteen volledig mee kan spelen.',
        explanation: 'In het bericht staat dat een ander kind meteen met het speelgoed moet kunnen spelen. Met een ontbrekend puzzelstukje lukt dat niet.',
        challenge: true
      },
      {
        area: 'explore',
        storyTitle: 'Het bericht over de geefkast',
        listenGroup: 'geefkast-25-november',
        prompt: 'Welke klok toont wanneer Liam donderdag het speelgoed bekijkt?',
        options: ['15:30', '15:00', '16:30'],
        correct: '15:30',
        explanation: 'Halfvier is een halfuur vóór vier uur. Dat is 15.30 uur.',
        clockOptions: {
          '15:30': {hour: 15, minute: 30, label: 'halfvier'},
          '15:00': {hour: 15, minute: 0, label: 'drie uur'},
          '16:30': {hour: 16, minute: 30, label: 'halfvijf'}
        }
      },
      {
        area: 'math',
        prompt: 'Liam legt 16 kaartjes in groepjes van 2. Hoeveel groepjes zijn dat? Vul de passende som aan: ? × 2 = 16.',
        options: ['8', '7', '9'],
        correct: '8',
        explanation: 'Je maakt 8 groepjes van 2 kaartjes. Met herhaald optellen krijg je 2 + 2 + 2 + 2 + 2 + 2 + 2 + 2 = 16. De passende maalsom is 8 × 2 = 16; het product is 16.',
        tableOfTwo: true
      },
      {
        area: 'language',
        storyTitle: 'Het bericht over de geefkast',
        listenGroup: 'geefkast-25-november',
        type: 'text',
        prompt: 'Op welke dag en datum gaat de geefkast open? Typ de dag en de datum.',
        accepted: ['vrijdag 27 november', 'vrijdag 27 november 2026', 'vrijdag 27/11', 'vrijdag 27-11'],
        correct: 'vrijdag 27 november',
        explanation: 'Het bericht zegt dat de geefkast op vrijdag 27 november opengaat.'
      },
      {
        area: 'explore',
        prompt: 'Het is donker wanneer Liam naar huis wandelt. Welk voorwerp helpt een autobestuurder hem beter te zien?',
        options: ['een reflecterend bandje', 'een donker papiertje', 'een houten blokje'],
        correct: 'een reflecterend bandje',
        explanation: 'Een reflecterend bandje kaatst licht terug. Daardoor valt Liam beter op in het donker.'
      },
      {
        area: 'math',
        prompt: 'Lionel Messi legt 11 kegels klaar en zet er nog 6 bij. Hoeveel kegels staan er samen?',
        options: ['17', '16', '18'],
        correct: '17',
        explanation: 'Je telt 6 bij 11: 11 + 6 = 17. Je hoeft niets over voetbal te weten om dit uit te rekenen.'
      },
      {
        area: 'language',
        prompt: 'Welk woord maakt de zin juist? “Aan het ___ van het spel zitten alle kaartjes weer in de doos.”',
        options: ['eind', 'ijnd', 'eindt'],
        correct: 'eind',
        explanation: 'Je schrijft eind met ei en zonder t.'
      },
      {
        area: 'explore',
        prompt: 'Liam, Noor en Sam kiezen elk één ding: een boek, een puzzel en een bal. Liam kiest het boek. Noor kiest niet de bal. Wat kiest Sam?',
        options: ['de bal', 'de puzzel', 'het boek'],
        correct: 'de bal',
        explanation: 'Liam heeft het boek al. Noor kiest niet de bal, dus Noor kiest de puzzel. Dan blijft de bal over voor Sam.',
        challenge: true
      },
      {
        area: 'math',
        prompt: 'Welk getal bestaat uit 4 tientallen en 0 eenheden?',
        options: ['40', '4', '14'],
        correct: '40',
        explanation: 'Vier tientallen zijn 10 + 10 + 10 + 10 = 40. Er komen geen losse eenheden bij.'
      },
      {
        area: 'language',
        prompt: 'Welke rij bevat in deze volgorde een zelfstandig naamwoord, een werkwoord en een eigenschap?',
        options: ['speelgoed – delen – proper', 'delen – proper – speelgoed', 'proper – speelgoed – delen'],
        correct: 'speelgoed – delen – proper',
        explanation: 'Speelgoed is een ding en dus een zelfstandig naamwoord. Delen is iets wat je doet en dus een werkwoord. Proper zegt hoe iets is en is een eigenschap.'
      },
      {
        area: 'explore',
        prompt: 'Twee lange rechte lijnen lopen overal even ver van elkaar en raken elkaar nooit. Hoe heten die lijnen?',
        options: ['evenwijdige lijnen', 'snijdende lijnen', 'loodrecht snijdende lijnen'],
        correct: 'evenwijdige lijnen',
        explanation: 'Evenwijdige lijnen blijven overal even ver van elkaar. Ze kruisen of raken elkaar niet.'
      }
    ]
  }
};
