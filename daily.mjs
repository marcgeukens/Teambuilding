export const ACTIVE_DATE = '2026-10-28';
export const DAILY_CONTENT = {
  '2026-10-28': {
    title: 'De boselfenroute',
    questions: [
      {
        area: 'math',
        prompt: 'Een boself vindt 9 lichtsteentjes en daarna nog 6. Hoeveel lichtsteentjes heeft de boself samen?',
        options: ['15', '14', '16'],
        correct: '15',
        explanation: 'Splits 6 in 1 en 5. Eerst 9 + 1 = 10, daarna 10 + 5 = 15.',
        challenge: true,
        sock: {
          operator: '+',
          start: 9,
          splitTotal: 6,
          first: 1,
          second: 5,
          result: 15,
          step: '9 + 1 = 10, daarna 10 + 5 = 15.'
        }
      },
      {
        area: 'language',
        storyTitle: 'Vandaag in het donkerduisterbos',
        passage: 'Vandaag is het Donkerduisterdag op school. De kinderen volgen speelse workshops over natuur, licht en donker. Wie wil, mag verkleed komen als boswezen, maar dat hoeft niet.',
        prompt: 'Welk bericht past het best bij de tekst?',
        options: ['Je mag je verkleden, maar het is niet verplicht.', 'Iedereen moet als heks verkleed komen.', 'De workshops zijn alleen buiten.'],
        correct: 'Je mag je verkleden, maar het is niet verplicht.',
        explanation: 'In de tekst staat dat verkleden mag, maar niet hoeft.'
      },
      {
        area: 'explore',
        prompt: 'Wat hoort echt bij de natuur in een bos?',
        options: ['Een paddenstoel', 'Een verkeerslicht', 'Een lift'],
        correct: 'Een paddenstoel',
        explanation: 'Paddenstoelen groeien in de natuur en kunnen in een bos voorkomen.'
      },
      {
        area: 'math',
        prompt: 'Squirtle legt 6 groepjes van 2 waterdruppels. Hoeveel druppels zijn dat samen?',
        options: ['12', '8', '14'],
        correct: '12',
        explanation: 'Zes groepjes van 2 zijn 2 + 2 + 2 + 2 + 2 + 2 = 12. De keersom is 6 × 2 = 12.',
        tableOfTwo: true
      },
      {
        area: 'language',
        storyTitle: 'De workshopkaart',
        passage: 'Begin bij de bladerenworkshop. Ga daarna naar de lichtworkshop. De dierenworkshop komt als laatste. Liam heeft de bladerenworkshop al gedaan.',
        prompt: 'Naar welke workshop gaat Liam nu?',
        options: ['De lichtworkshop', 'De dierenworkshop', 'De bladerenworkshop'],
        correct: 'De lichtworkshop',
        explanation: 'De bladerenworkshop is klaar. Op de kaart staat dat daarna de lichtworkshop komt. De dierenworkshop is pas als laatste.',
        challenge: true
      },
      {
        area: 'explore',
        prompt: 'Een rechte lijn tussen twee punten heeft een begin en een einde. Hoe heet die?',
        options: ['Een lijnstuk', 'Een kromme lijn', 'Een cirkel'],
        correct: 'Een lijnstuk',
        explanation: 'Een lijnstuk is het rechte stukje tussen twee punten.'
      },
      {
        area: 'math',
        prompt: 'Welk getal bestaat uit 3 tientallen en 4 eenheden?',
        options: ['34', '43', '30'],
        correct: '34',
        explanation: '3 tientallen zijn 30 en 4 eenheden zijn 4. Samen is dat 34.'
      },
      {
        area: 'language',
        prompt: 'Welk MKMM-woord is juist geschreven?',
        options: ['vonk', 'vonkk', 'vokn'],
        correct: 'vonk',
        explanation: 'Vonk heeft een medeklinker v, een klinker o en daarna twee medeklinkers n en k: MKMM.'
      },
      {
        area: 'explore',
        prompt: 'Welke rij gaat op dezelfde manier verder? blad, paddenstoel, blad, paddenstoel, ...',
        options: ['blad', 'steen', 'tak'],
        correct: 'blad',
        explanation: 'De rij wisselt steeds af: blad, paddenstoel. Na een paddenstoel komt dus weer een blad.'
      },
      {
        area: 'math',
        prompt: 'Kylian Mbappé zet 16 oefenkegels klaar. Hij ruimt er 6 op. Hoeveel kegels blijven staan?',
        options: ['10', '9', '11'],
        correct: '10',
        explanation: '16 - 6 = 10. Er blijven 10 oefenkegels staan.'
      },
      {
        area: 'language',
        prompt: 'Kaka-Kabouter wil weten om welke reden de trol lacht. Welk vraagwoord gebruikt hij?',
        options: ['Waarom', 'Waar', 'Wie'],
        correct: 'Waarom',
        explanation: 'Met waarom vraag je naar een reden.'
      },
      {
        area: 'explore',
        prompt: 'Drie boswezens staan in een rij: een elf, een trol en een kabouter. De trol staat achter de elf. De kabouter staat achter de trol. Wie staat in het midden?',
        options: ['De trol', 'De elf', 'De kabouter'],
        correct: 'De trol',
        explanation: 'De elf staat voor de trol. De kabouter staat achter de trol. De volgorde is dus elf, trol, kabouter. De trol staat in het midden.',
        challenge: true
      }
    ]
  }
};
