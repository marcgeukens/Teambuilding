export const ACTIVE_DATE = '2026-10-15';
export const DAILY_CONTENT = {
  '2026-10-15': {
    title: 'De theaterwandeling',
    questions: [
      {
        area: 'language',
        storyTitle: 'Luistertest: op weg naar het theater',
        listenGroup: 'theaterwandeling',
        listenText: 'Dag Liam, luister goed naar dit bericht. Op maandag zesentwintig oktober wandelt Studio Cosmo naar een theatervoorstelling. De voorstelling heet Excuses voor het ongemak. De kinderen vertrekken om negen uur aan de school. Rond de middag zijn ze terug. De juffen zoeken zes volwassenen die mee willen wandelen. Wie kan helpen, stuurt een berichtje via Smartschool.',
        prompt: 'Hoe heet de theatervoorstelling?',
        options: ['Excuses voor het ongemak.', 'De verdwenen rugzak.', 'Feest in het zwembad.'],
        correct: 'Excuses voor het ongemak.',
        explanation: 'In het bericht hoor je dat de voorstelling Excuses voor het ongemak heet.'
      },
      {
        area: 'explore',
        type: 'text',
        storyTitle: 'Luistertest: op weg naar het theater',
        listenGroup: 'theaterwandeling',
        listenText: 'Dag Liam, luister goed naar dit bericht. Op maandag zesentwintig oktober wandelt Studio Cosmo naar een theatervoorstelling. De voorstelling heet Excuses voor het ongemak. De kinderen vertrekken om negen uur aan de school. Rond de middag zijn ze terug. De juffen zoeken zes volwassenen die mee willen wandelen. Wie kan helpen, stuurt een berichtje via Smartschool.',
        prompt: 'Op welke dag en datum is de theaterwandeling? Schrijf ze allebei zelf.',
        placeholder: 'bijvoorbeeld: maandag 4 mei',
        accepted: ['maandag 26 oktober', 'maandag zesentwintig oktober', 'maandag 26/10', 'maandag 26-10', 'maandag 26 oktober 2026', '26 oktober maandag'],
        correct: 'maandag 26 oktober',
        explanation: 'In het bericht hoor je: maandag zesentwintig oktober.'
      },
      {
        area: 'math',
        storyTitle: 'Luistertest: op weg naar het theater',
        listenGroup: 'theaterwandeling',
        listenText: 'Dag Liam, luister goed naar dit bericht. Op maandag zesentwintig oktober wandelt Studio Cosmo naar een theatervoorstelling. De voorstelling heet Excuses voor het ongemak. De kinderen vertrekken om negen uur aan de school. Rond de middag zijn ze terug. De juffen zoeken zes volwassenen die mee willen wandelen. Wie kan helpen, stuurt een berichtje via Smartschool.',
        prompt: 'Welke klok toont het vertrekuur van de theaterwandeling?',
        options: ['09:00', '09:30', '10:00'],
        correct: '09:00',
        clockOptions: {
          '09:00': {hour: 9, minute: 0, label: 'negen uur'},
          '09:30': {hour: 9, minute: 30, label: 'half tien'},
          '10:00': {hour: 10, minute: 0, label: 'tien uur'}
        },
        explanation: 'De kinderen vertrekken om negen uur. De grote wijzer staat op 12 en de kleine wijzer op 9.'
      },
      {
        area: 'language',
        storyTitle: 'Luistertest: op weg naar het theater',
        listenGroup: 'theaterwandeling',
        listenText: 'Dag Liam, luister goed naar dit bericht. Op maandag zesentwintig oktober wandelt Studio Cosmo naar een theatervoorstelling. De voorstelling heet Excuses voor het ongemak. De kinderen vertrekken om negen uur aan de school. Rond de middag zijn ze terug. De juffen zoeken zes volwassenen die mee willen wandelen. Wie kan helpen, stuurt een berichtje via Smartschool.',
        prompt: 'Waarom zoeken de juffen zes volwassenen?',
        options: ['Om mee te wandelen en te helpen.', 'Om een voetbalwedstrijd te spelen.', 'Om de school te schilderen.'],
        correct: 'Om mee te wandelen en te helpen.',
        explanation: 'De volwassenen helpen de groep tijdens de wandeling naar het theater.'
      },
      {
        area: 'explore',
        prompt: 'Een lamp tekent één gebogen spoor op de muur. Welke wiskundetaal past daarbij?',
        options: ['Een kromme lijn.', 'Een rechte lijn.', 'Een punt.'],
        correct: 'Een kromme lijn.',
        explanation: 'Een spoor dat buigt, noem je een kromme lijn.'
      },
      {
        area: 'math',
        prompt: 'Miraidon legt 4 groepjes van 2 theaterkaartjes klaar. Hoeveel kaartjes zijn dat samen?',
        options: ['6', '8', '10'],
        correct: '8',
        explanation: 'Vier groepjes van 2 zijn 2 + 2 + 2 + 2 = 8. De keersom is 4 × 2 = 8.'
      },
      {
        area: 'language',
        prompt: 'Welk woord heeft het patroon MKMM?',
        options: ['help', 'maan', 'koe'],
        correct: 'help',
        explanation: 'Help heeft medeklinker, klinker, medeklinker, medeklinker: h-e-l-p.'
      },
      {
        area: 'explore',
        prompt: 'Kylian Mbappé volgt dit pijlenpatroon: links, links, omhoog, links, links, omhoog, ... Welke pijl komt nu?',
        options: ['Links.', 'Omhoog.', 'Rechts.'],
        correct: 'Links.',
        explanation: 'Het groepje links, links, omhoog herhaalt zich. Na omhoog begint het opnieuw met links.'
      },
      {
        area: 'math',
        prompt: 'Erling Haaland heeft 13 oefenhoedjes. Hij ruimt er 5 op. Gebruik de sok. Hoeveel blijven er liggen?',
        options: ['7', '8', '9'],
        correct: '8',
        sock: {operator: '-', start: 13, splitTotal: 5, first: 3, second: 2, result: 8, step: '13 - 3 = 10, daarna 10 - 2 = 8.'},
        explanation: 'Splits 5 in 3 en 2. Eerst ga je met 13 - 3 naar 10. Daarna doe je 10 - 2 = 8.'
      },
      {
        area: 'language',
        storyTitle: 'Het vertrekbriefje',
        passage: 'De groep vertrekt om 9 uur aan de school. Kom vijf minuten vroeger naar de poort.',
        prompt: 'Hoe laat moet je volgens het briefje aan de poort zijn?',
        options: ['Om 08.55 uur.', 'Om 09.05 uur.', 'Om 08.50 uur.'],
        correct: 'Om 08.55 uur.',
        explanation: 'Vijf minuten vóór 9 uur is 08.55 uur.'
      },
      {
        area: 'explore',
        prompt: 'Pipi-Piet versiert een deur: ster, maan, maan, ster, maan, maan, ... Wat komt nu?',
        options: ['Een ster.', 'Een maan.', 'Een zon.'],
        correct: 'Een ster.',
        explanation: 'Het groepje ster, maan, maan herhaalt zich. Daarna komt opnieuw een ster.'
      },
      {
        area: 'math',
        prompt: 'Op de getallenlijn staan 20, 30, ___, 50. Welk getal ontbreekt?',
        options: ['35', '40', '45'],
        correct: '40',
        explanation: 'De getallenlijn springt telkens 10 verder: 20, 30, 40, 50.'
      }
    ]
  }
};
