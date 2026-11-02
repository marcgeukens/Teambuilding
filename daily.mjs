export const ACTIVE_DATE = '2026-11-02';
export const DAILY_CONTENT = {
  '2026-11-02': {
    title: 'De nieuwe-weektas',
    questions: [
      {
        area: 'math',
        prompt: 'In de knutseldoos liggen 14 wasco’s. Liam gebruikt er 6. Hoeveel wasco’s blijven in de doos?',
        options: ['8', '7', '9'],
        correct: '8',
        explanation: 'Splits 6 in 4 en 2. Eerst 14 - 4 = 10, daarna 10 - 2 = 8.',
        challenge: true,
        sock: {
          operator: '-',
          start: 14,
          splitTotal: 6,
          first: 4,
          second: 2,
          result: 8,
          step: '14 - 4 = 10, daarna 10 - 2 = 8.'
        }
      },
      {
        area: 'language',
        storyTitle: 'De tas met drie vakken',
        passage: 'Liam stopt zijn rekenmap in het blauwe vak. Zijn leesboek legt hij in het rode vak. De brooddoos gaat in het groene vak.',
        prompt: 'In welk vak zit Liams leesboek?',
        options: ['In het rode vak.', 'In het blauwe vak.', 'In het groene vak.'],
        correct: 'In het rode vak.',
        explanation: 'In de tekst staat dat Liam zijn leesboek in het rode vak legt.'
      },
      {
        area: 'explore',
        prompt: 'Welke beschrijving past bij een lijnstuk?',
        options: ['Een rechte lijn met een punt aan elk uiteinde.', 'Een kromme lijn zonder eindpunten.', 'Eén losse stip.'],
        correct: 'Een rechte lijn met een punt aan elk uiteinde.',
        explanation: 'Een lijnstuk is een recht stukje lijn tussen twee eindpunten.'
      },
      {
        area: 'math',
        prompt: 'Pikachu verdeelt 18 energiekaartjes eerlijk over 2 doosjes. Hoeveel kaartjes komen in elk doosje?',
        options: ['9', '8', '10'],
        correct: '9',
        explanation: 'Maak 2 gelijke groepjes. In elk groepje komen 9 kaartjes, want 9 + 9 = 18. De deelsom is 18 : 2 = 9.',
        tableOfTwo: true
      },
      {
        area: 'language',
        storyTitle: 'Het bord bij de deur',
        passage: 'Na het lezen stopt Liam de blauwe map in zijn tas. Daarna zet hij de tas bij de deur. Pas dan trekt hij zijn jas aan.',
        prompt: 'Liam is klaar met lezen en de blauwe map zit al in zijn tas. Wat doet hij nu?',
        options: ['Hij zet de tas bij de deur.', 'Hij trekt meteen zijn jas aan.', 'Hij haalt de blauwe map weer uit zijn tas.'],
        correct: 'Hij zet de tas bij de deur.',
        explanation: 'De map zit al in de tas. De volgende stap in de tekst is de tas bij de deur zetten; daarna komt pas de jas.',
        challenge: true
      },
      {
        area: 'explore',
        prompt: 'Vandaag is het maandag. Over twee dagen is er een klasactiviteit. Op welke dag is die activiteit?',
        options: ['Woensdag', 'Dinsdag', 'Donderdag'],
        correct: 'Woensdag',
        explanation: 'Eén dag na maandag is dinsdag en twee dagen na maandag is woensdag.'
      },
      {
        area: 'math',
        prompt: 'Welk getal ontbreekt op deze getallenlijn: 26, 28, __, 32?',
        options: ['30', '29', '31'],
        correct: '30',
        explanation: 'De getallen gaan telkens 2 verder: 26, 28, 30, 32.'
      },
      {
        area: 'language',
        prompt: 'Welk MKMM-woord is juist geschreven?',
        options: ['vest', 'vets', 'ves'],
        correct: 'vest',
        explanation: 'Vest heeft één medeklinker v, één klinker e en daarna twee medeklinkers s en t: MKMM.'
      },
      {
        area: 'explore',
        prompt: 'Wat beschermt een schrift het best tegen regen in een schooltas?',
        options: ['Een gesloten plastic map.', 'Een open papieren zak.', 'Een natte wollen muts.'],
        correct: 'Een gesloten plastic map.',
        explanation: 'Een gesloten plastic map houdt regendruppels weg van het papier.'
      },
      {
        area: 'math',
        prompt: 'Kylian Mbappé zet 13 oefenkegels klaar en plaatst er nog 5 bij. Hoeveel kegels staan er nu?',
        options: ['18', '17', '19'],
        correct: '18',
        explanation: '13 + 5 = 18. Er staan nu 18 oefenkegels.'
      },
      {
        area: 'language',
        prompt: 'Welk vraagwoord past? “___ ligt de gekke wc-rol met zijn kartonnen hoed?”',
        options: ['Waar', 'Wie', 'Wanneer'],
        correct: 'Waar',
        explanation: 'Je vraagt naar een plaats. Daarom past het vraagwoord “waar”.'
      },
      {
        area: 'explore',
        prompt: 'Er zijn een rood, blauw en groen kastje. De bal ligt in het rode kastje. De brooddoos ligt niet in het groene kastje. Elk kastje bevat precies één voorwerp. Waar liggen de Pokémonkaartjes?',
        options: ['In het groene kastje.', 'In het blauwe kastje.', 'In het rode kastje.'],
        correct: 'In het groene kastje.',
        explanation: 'Het rode kastje is voor de bal. De brooddoos kan niet groen zijn en moet dus blauw zijn. Daarom blijven de Pokémonkaartjes voor het groene kastje over.',
        challenge: true
      }
    ]
  }
};
