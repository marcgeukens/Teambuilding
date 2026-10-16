export const ACTIVE_DATE = '2026-10-16';
export const DAILY_CONTENT = {
  '2026-10-16': {
    title: 'De vrijdagse lichtjesroute',
    questions: [
      {
        area: 'language',
        storyTitle: 'Luistertest: de lichtjesroute',
        listenGroup: 'lichtjesroute',
        listenText: 'Dag Liam, dit is een oefenbericht voor de lichtjesroute. Op vrijdag drieëntwintig oktober start de tocht aan de schoolpoort. Iedereen brengt een lampion en een geel lint mee. De groep vertrekt om half vier. De kinderen wandelen samen naar het kleine park. Ze dragen het gele lint zodat iedereen goed bij de groep blijft. Na de wandeling krijgen ze warme appelsap.',
        prompt: 'Wat brengt ieder kind mee voor de lichtjesroute?',
        options: ['Een lampion en een geel lint.', 'Een boekentas en een bal.', 'Een zwembroek en een handdoek.'],
        correct: 'Een lampion en een geel lint.',
        explanation: 'In het oefenbericht hoor je dat ieder kind een lampion en een geel lint meebrengt.'
      },
      {
        area: 'explore',
        type: 'text',
        storyTitle: 'Luistertest: de lichtjesroute',
        listenGroup: 'lichtjesroute',
        listenText: 'Dag Liam, dit is een oefenbericht voor de lichtjesroute. Op vrijdag drieëntwintig oktober start de tocht aan de schoolpoort. Iedereen brengt een lampion en een geel lint mee. De groep vertrekt om half vier. De kinderen wandelen samen naar het kleine park. Ze dragen het gele lint zodat iedereen goed bij de groep blijft. Na de wandeling krijgen ze warme appelsap.',
        prompt: 'Op welke dag en datum is de lichtjesroute? Schrijf ze allebei zelf.',
        placeholder: 'bijvoorbeeld: maandag 4 mei',
        accepted: ['vrijdag 23 oktober', 'vrijdag drieëntwintig oktober', 'vrijdag 23/10', 'vrijdag 23-10', 'vrijdag 23 oktober 2026', '23 oktober vrijdag'],
        correct: 'vrijdag 23 oktober',
        explanation: 'In het oefenbericht hoor je: vrijdag drieëntwintig oktober.'
      },
      {
        area: 'math',
        storyTitle: 'Luistertest: de lichtjesroute',
        listenGroup: 'lichtjesroute',
        listenText: 'Dag Liam, dit is een oefenbericht voor de lichtjesroute. Op vrijdag drieëntwintig oktober start de tocht aan de schoolpoort. Iedereen brengt een lampion en een geel lint mee. De groep vertrekt om half vier. De kinderen wandelen samen naar het kleine park. Ze dragen het gele lint zodat iedereen goed bij de groep blijft. Na de wandeling krijgen ze warme appelsap.',
        prompt: 'Welke klok toont het vertrekuur van de lichtjesroute?',
        options: ['15:30', '15:00', '16:30'],
        correct: '15:30',
        clockOptions: {
          '15:30': {hour: 3, minute: 30, label: 'half vier'},
          '15:00': {hour: 3, minute: 0, label: 'drie uur'},
          '16:30': {hour: 4, minute: 30, label: 'half vijf'}
        },
        explanation: 'Half vier is 15.30 uur. De grote wijzer staat op 6 en de kleine wijzer tussen 3 en 4.'
      },
      {
        area: 'language',
        storyTitle: 'Luistertest: de lichtjesroute',
        listenGroup: 'lichtjesroute',
        listenText: 'Dag Liam, dit is een oefenbericht voor de lichtjesroute. Op vrijdag drieëntwintig oktober start de tocht aan de schoolpoort. Iedereen brengt een lampion en een geel lint mee. De groep vertrekt om half vier. De kinderen wandelen samen naar het kleine park. Ze dragen het gele lint zodat iedereen goed bij de groep blijft. Na de wandeling krijgen ze warme appelsap.',
        prompt: 'Waarom dragen de kinderen een geel lint?',
        options: ['Zodat iedereen goed bij de groep blijft.', 'Omdat het lint licht geeft.', 'Om er een bal mee te vangen.'],
        correct: 'Zodat iedereen goed bij de groep blijft.',
        explanation: 'Het gele lint helpt om de kinderen van de groep goed te herkennen. Dat moet je uit het bericht afleiden.'
      },
      {
        area: 'explore',
        prompt: 'Tussen punt A en punt B staat één recht stukje getekend. Hoe heet dat?',
        options: ['Een lijnstuk.', 'Een kromme lijn.', 'Een losse punt.'],
        correct: 'Een lijnstuk.',
        explanation: 'Een recht stukje met een beginpunt en een eindpunt heet een lijnstuk.'
      },
      {
        area: 'math',
        prompt: 'Squirtle vult 5 zakjes met telkens 2 lichtjes. Hoeveel lichtjes zijn dat samen?',
        options: ['7', '10', '12'],
        correct: '10',
        explanation: 'Vijf groepjes van 2 zijn 2 + 2 + 2 + 2 + 2 = 10. De keersom is 5 × 2 = 10.'
      },
      {
        area: 'language',
        prompt: 'Welk woord heeft het patroon MKMM?',
        options: ['lamp', 'maan', 'koe'],
        correct: 'lamp',
        explanation: 'Lamp heeft medeklinker, klinker, medeklinker, medeklinker: l-a-m-p.'
      },
      {
        area: 'explore',
        prompt: 'Kevin De Bruyne volgt de pijlen: rechts, rechts, omlaag, rechts, rechts, omlaag, ... Welke pijl komt nu?',
        options: ['Rechts.', 'Omlaag.', 'Links.'],
        correct: 'Rechts.',
        explanation: 'Het groepje rechts, rechts, omlaag herhaalt zich. Na omlaag begint het opnieuw met rechts.'
      },
      {
        area: 'math',
        prompt: 'Een lampion heeft 8 gouden en 6 rode sterren. Gebruik de sok. Hoeveel sterren zijn dat samen?',
        options: ['13', '14', '15'],
        correct: '14',
        sock: {operator: '+', start: 8, splitTotal: 6, first: 2, second: 4, result: 14, step: '8 + 2 = 10, daarna 10 + 4 = 14.'},
        explanation: 'Splits 6 in 2 en 4. Eerst maak je 10 met 8 + 2. Daarna doe je 10 + 4 = 14.'
      },
      {
        area: 'language',
        storyTitle: 'Het briefje aan de deur',
        passage: 'Lampions uit vóór je binnenkomt. Zet je lampion daarna op de tafel.',
        prompt: 'Wat moet je eerst doen als je naar binnen gaat?',
        options: ['De lampion uitdoen.', 'De lampion meenemen naar huis.', 'De lampion onder de tafel zetten.'],
        correct: 'De lampion uitdoen.',
        explanation: 'Het briefje zegt eerst dat je de lampion moet uitdoen. Daarna zet je hem op de tafel.'
      },
      {
        area: 'explore',
        prompt: 'Pipi-Piet versiert het toilet: wc-rol, ster, ster, wc-rol, ster, ster, ... Wat komt nu?',
        options: ['Een wc-rol.', 'Een ster.', 'Een maan.'],
        correct: 'Een wc-rol.',
        explanation: 'Het groepje wc-rol, ster, ster herhaalt zich. Daarna komt opnieuw een wc-rol.'
      },
      {
        area: 'math',
        prompt: 'Een doos bevat 4 tientallen en 3 eenheden. Welk getal is dat?',
        options: ['34', '43', '47'],
        correct: '43',
        explanation: 'Vier tientallen zijn 40. Met 3 eenheden erbij krijg je 43.'
      }
    ]
  }
};
