export const ACTIVE_DATE = '2026-10-23';
export const DAILY_CONTENT = {
  '2026-10-23': {
    title: 'De stormveilige windroute',
    questions: [
      {
        area: 'math',
        prompt: 'Er hangen 15 papieren veren. Door de wind worden er 7 veilig binnengelegd. Hoeveel veren blijven hangen?',
        options: ['8', '9', '7'],
        correct: '8',
        explanation: 'Splits 7 in 5 en 2. Eerst 15 − 5 = 10, daarna 10 − 2 = 8. Er blijven 8 veren hangen.',
        challenge: true,
        sock: { operator: '-', start: 15, splitTotal: 7, first: 5, second: 2, result: 8, step: '15 − 5 = 10, daarna 10 − 2 = 8.' }
      },
      {
        area: 'language',
        storyTitle: 'Veilig spelen',
        passage: 'Door de rukwind zijn de speelplaatsen buiten niet veilig. De kinderen van de lagere school spelen tijdens de middagpauze in de Dome. Wie stilte nodig heeft, kan naar een rustige ruimte.',
        prompt: 'Liam zit in de lagere school. Waar kan hij tijdens de middagpauze spelen?',
        options: ['In de Dome', 'In de tuin', 'Op de plaza'],
        correct: 'In de Dome',
        explanation: 'In het bericht staat dat de kinderen van de lagere school tijdens de middagpauze in de Dome spelen.'
      },
      {
        area: 'explore',
        prompt: 'Welke wandelroute past het best bij stormweer als je het bos moet vermijden?',
        options: ['Een straatroute weg van hoge bomen', 'Een smal pad door het bos', 'Een pad onder losse takken'],
        correct: 'Een straatroute weg van hoge bomen',
        explanation: 'Bij stevige wind kies je een route weg van het bos en van losse of hoge takken.'
      },
      {
        area: 'math',
        prompt: 'Er liggen 16 herfstblaadjes. Je verdeelt ze eerlijk over 2 dozen. Hoeveel blaadjes zitten in elke doos?',
        options: ['8', '6', '9'],
        correct: '8',
        explanation: 'Je verdeelt 16 blaadjes in 2 gelijke groepen. In elke groep zitten 8 blaadjes: 16 : 2 = 8.',
        tableOf2: true
      },
      {
        area: 'language',
        storyTitle: 'Naar het zwembad',
        passage: 'De zwemactiviteit gaat door. De klas wandelt naar het zwembad, maar de route loopt niet door of langs een bos. Zo blijft de groep uit de buurt van gevaarlijke takken.',
        prompt: 'Wat verandert er door de storm?',
        options: ['De wandelroute verandert', 'De zwemactiviteit wordt geschrapt', 'De klas zwemt in de Dome'],
        correct: 'De wandelroute verandert',
        explanation: 'De zwemactiviteit gaat door, maar de klas kiest een andere wandelroute die het bos vermijdt.',
        challenge: true
      },
      {
        area: 'explore',
        prompt: 'De weerscontrole is om half elf in de voormiddag. Welke klok toont half elf?',
        options: ['10:30', '11:30', '10:00'],
        correct: '10:30',
        explanation: 'Half elf is 30 minuten na tien uur. Dat is 10:30.',
        clockOptions: {
          '10:30': { hour: 10, minute: 30, label: 'half elf' },
          '11:30': { hour: 11, minute: 30, label: 'half twaalf' },
          '10:00': { hour: 10, minute: 0, label: 'tien uur' }
        }
      },
      {
        area: 'math',
        prompt: 'Welk getal ontbreekt? 20 − ? = 14',
        options: ['6', '5', '7'],
        correct: '6',
        explanation: 'Van 20 terug naar 14 zijn 6 stapjes. Dus 20 − 6 = 14.'
      },
      {
        area: 'language',
        prompt: 'Welk woord is juist geschreven?',
        options: ['wind', 'wint', 'wintt'],
        correct: 'wind',
        explanation: 'Je schrijft wind met w-i-n-d. Je hoort de d bijna als een t, maar je schrijft een d.'
      },
      {
        area: 'explore',
        prompt: 'Een strak touw loopt recht van punt A naar punt B. Hoe noem je dit?',
        options: ['Een lijnstuk', 'Een kromme lijn', 'Een punt'],
        correct: 'Een lijnstuk',
        explanation: 'Een recht stuk tussen twee vaste punten heet een lijnstuk.'
      },
      {
        area: 'math',
        prompt: 'Kylian Mbappé zet 7 oranje en 5 gele pionnen klaar. Hoeveel pionnen zijn dat samen?',
        options: ['12', '11', '13'],
        correct: '12',
        explanation: 'Maak eerst 10: 7 + 3 = 10. Er blijven nog 2 pionnen over, dus 10 + 2 = 12.'
      },
      {
        area: 'language',
        prompt: 'Pikachu laat een piepklein scheetje in de wind. Welk woord rijmt op wind?',
        options: ['kind', 'hond', 'hand'],
        correct: 'kind',
        explanation: 'Wind en kind eindigen allebei op de klank -ind. Daarom rijmen ze.'
      },
      {
        area: 'explore',
        prompt: 'Pikachu, Squirtle en Miraidon kiezen elk een andere plek: de Dome, de patio of de rustige ruimte. Squirtle kiest de patio. Miraidon kiest de Dome. Welke plek blijft over voor Pikachu?',
        options: ['De rustige ruimte', 'De patio', 'De Dome'],
        correct: 'De rustige ruimte',
        explanation: 'De patio is al van Squirtle en de Dome van Miraidon. Daardoor blijft alleen de rustige ruimte over voor Pikachu.',
        challenge: true
      }
    ]
  }
};
