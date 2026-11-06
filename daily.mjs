export const ACTIVE_DATE = '2026-11-06';
export const DAILY_CONTENT = {
  '2026-11-06': {
    title: 'De regendruppelcode',
    questions: [
      {
        area: 'math',
        prompt: 'Op het raam kleven 14 regendruppelstickers. Liam haalt er 6 weg. Hoeveel stickers blijven kleven?',
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
        storyTitle: 'Het briefje aan de deur',
        passage: 'Klap je paraplu buiten dicht. Veeg daarna je laarzen op de mat. Hang je natte jas aan de kapstok.',
        prompt: 'Wat doe je meteen nadat je de paraplu hebt dichtgeklapt?',
        options: ['Je laarzen op de mat vegen.', 'Je jas in de boekentas stoppen.', 'De deur weer openen.'],
        correct: 'Je laarzen op de mat vegen.',
        explanation: 'Na het dichtklappen van de paraplu komt de tweede stap: de laarzen op de mat vegen.'
      },
      {
        area: 'explore',
        prompt: 'Een speelplaats helt een beetje af. Naar welke kant stroomt het regenwater?',
        options: ['Naar de laagste kant.', 'Naar de hoogste kant.', 'Altijd naar het midden.'],
        correct: 'Naar de laagste kant.',
        explanation: 'Water stroomt door de zwaartekracht van een hogere plek naar een lagere plek.'
      },
      {
        area: 'math',
        prompt: 'Pikachu verdeelt 16 blauwe druppelkaartjes eerlijk over 2 bakjes. Hoeveel kaartjes komen in elk bakje?',
        options: ['8', '6', '9'],
        correct: '8',
        explanation: 'Maak 2 gelijke groepjes. In elk bakje komen 8 kaartjes, want 8 + 8 = 16. De deelsom is 16 : 2 = 8.',
        tableOfTwo: true
      },
      {
        area: 'language',
        storyTitle: 'Binnen na de regen',
        passage: 'Milan komt als eerste binnen. Liam komt na Milan. Sara komt pas na Liam. Alleen de tweede leerling mag het weerkaartje omdraaien.',
        prompt: 'Wie mag het weerkaartje omdraaien?',
        options: ['Liam', 'Milan', 'Sara'],
        correct: 'Liam',
        explanation: 'Milan is eerste. Liam komt na Milan en vóór Sara, dus Liam is tweede. Daarom mag Liam het kaartje omdraaien.',
        challenge: true
      },
      {
        area: 'explore',
        prompt: 'Welke vorm heeft geen rechte zijden?',
        options: ['Een cirkel.', 'Een vierkant.', 'Een driehoek.'],
        correct: 'Een cirkel.',
        explanation: 'De rand van een cirkel is helemaal krom. Een vierkant en een driehoek hebben rechte zijden.'
      },
      {
        area: 'math',
        prompt: 'Welk getal bestaat uit 2 tientallen en 6 eenheden?',
        options: ['26', '62', '16'],
        correct: '26',
        explanation: 'Twee tientallen zijn 20 en zes eenheden zijn 6. Samen is dat 26.'
      },
      {
        area: 'language',
        prompt: 'Welk MKMM-woord is juist geschreven?',
        options: ['kant', 'knta', 'kan'],
        correct: 'kant',
        explanation: 'Kant heeft één medeklinker k, één klinker a en daarna twee medeklinkers n en t: MKMM.'
      },
      {
        area: 'explore',
        prompt: 'De thermometer toont ’s middags 10 graden en ’s avonds 6 graden. Wanneer is het kouder?',
        options: ['’s Avonds.', '’s Middags.', 'Het is even koud.'],
        correct: '’s Avonds.',
        explanation: '6 graden is minder dan 10 graden. Daarom is het ’s avonds kouder.'
      },
      {
        area: 'math',
        prompt: 'Erling Haaland legt 15 oefenkegels klaar en zet er nog 4 bij. Hoeveel kegels staan er nu?',
        options: ['19', '18', '20'],
        correct: '19',
        explanation: '15 + 4 = 19. Er staan nu 19 oefenkegels.'
      },
      {
        area: 'language',
        prompt: 'De wc-rol rolt door de regen naar een ... Welk woord rijmt op “rol”?',
        options: ['bol', 'jas', 'plas'],
        correct: 'bol',
        explanation: 'Rol en bol eindigen met dezelfde klank “ol” en rijmen dus.'
      },
      {
        area: 'explore',
        prompt: 'De regenwandeling start om halfvier. Na 20 minuten is ze klaar. Hoe laat is het dan?',
        options: ['15:50', '15:40', '16:00'],
        correct: '15:50',
        explanation: 'Halfvier is 15:30. Tien minuten later is het 15:40 en nog tien minuten later 15:50.',
        challenge: true,
        clockOptions: {
          '15:50': {hour: 15, minute: 50, label: 'tien voor vier'},
          '15:40': {hour: 15, minute: 40, label: 'tien over halfvier'},
          '16:00': {hour: 16, minute: 0, label: 'vier uur'}
        }
      }
    ]
  }
};
