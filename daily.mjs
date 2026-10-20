export const ACTIVE_DATE = '2026-10-20';
export const DAILY_CONTENT = {
  '2026-10-20': {
    title: 'De paddenstoelenkaart',
    questions: [
      {
        area: 'math',
        challenge: true,
        prompt: 'Miraidon vindt 8 blauwe lichtjes en daarna 7 gele lichtjes. Gebruik de sok. Hoeveel lichtjes zijn dat samen?',
        options: ['14', '15', '16'],
        correct: '15',
        sock: {operator: '+', start: 8, splitTotal: 7, first: 2, second: 5, result: 15, step: '8 + 2 = 10, daarna 10 + 5 = 15.'},
        explanation: 'Splits 7 in 2 en 5. Eerst maak je 10 met 8 + 2. Daarna doe je 10 + 5 = 15.'
      },
      {
        area: 'language',
        storyTitle: 'Het kaartje bij de bakken',
        passage: 'Stop droge bladeren in de groene bak. Natte bladeren horen in de blauwe bak. Sluit daarna beide deksels.',
        prompt: 'Je hebt een nat blad. Wat moet je ermee doen?',
        options: ['In de blauwe bak leggen.', 'In de groene bak leggen.', 'In je jaszak stoppen.'],
        correct: 'In de blauwe bak leggen.',
        explanation: 'Op het kaartje staat dat natte bladeren in de blauwe bak horen.'
      },
      {
        area: 'explore',
        prompt: 'Welke beschrijving past bij een kromme lijn?',
        options: ['Een lijn die buigt.', 'Een lijn die overal recht blijft.', 'Eén klein punt.'],
        correct: 'Een lijn die buigt.',
        explanation: 'Een kromme lijn verandert van richting en buigt. Ze is niet overal recht.'
      },
      {
        area: 'math',
        tableOf2: true,
        prompt: 'Een boself verdeelt 18 lichtsteentjes eerlijk over 2 manden. Hoeveel lichtsteentjes komen in elke mand?',
        options: ['8', '9', '10'],
        correct: '9',
        explanation: 'Verdeel om de beurt: elke mand krijgt 9 lichtsteentjes. De deelsom is 18 : 2 = 9. De controlesom is 2 × 9 = 18.'
      },
      {
        area: 'language',
        prompt: 'Welk woord heeft het patroon MKMM?',
        options: ['lamp', 'maan', 'uil'],
        correct: 'lamp',
        explanation: 'Lamp heeft medeklinker, klinker, medeklinker, medeklinker: l-a-m-p.'
      },
      {
        area: 'explore',
        challenge: true,
        prompt: 'Het knutselen begint om twee uur en duurt één uur. Daarna ruimen de kinderen nog een halfuur op. Wanneer zijn ze helemaal klaar?',
        options: ['14:30', '15:00', '15:30'],
        correct: '15:30',
        clockOptions: {
          '14:30': {hour: 2, minute: 30, label: 'half drie'},
          '15:00': {hour: 3, minute: 0, label: 'drie uur'},
          '15:30': {hour: 3, minute: 30, label: 'half vier'}
        },
        explanation: 'Na één uur is het 15.00 uur. Tel daar nog een halfuur opruimen bij: ze zijn klaar om 15.30 uur, half vier.'
      },
      {
        area: 'math',
        prompt: 'Een doos bevat 4 tientallen. Hoeveel eenheden moet je erbij leggen om 47 te maken?',
        options: ['4', '7', '40'],
        correct: '7',
        explanation: 'Vier tientallen zijn 40. Je hebt nog 7 eenheden nodig: 40 + 7 = 47.'
      },
      {
        area: 'language',
        storyTitle: 'Waarom brandt het lampje?',
        passage: 'Het pad is donker. Daarom zet Noor het lampje aan.',
        prompt: 'Met welk vraagwoord vraag je naar de reden waarom Noor het lampje aanzet?',
        options: ['Waarom', 'Wie', 'Waar'],
        correct: 'Waarom',
        explanation: 'Met waarom vraag je naar een reden. De reden is dat het pad donker is.'
      },
      {
        area: 'explore',
        challenge: true,
        prompt: 'Cristiano Ronaldo, Pikachu en Squirtle kiezen elk een ander teken: maan, ster of blad. Pikachu kiest de ster. Squirtle kiest de maan. Welk teken blijft over voor Cristiano Ronaldo?',
        options: ['Het blad.', 'De maan.', 'De ster.'],
        correct: 'Het blad.',
        explanation: 'De ster is al van Pikachu en de maan is al van Squirtle. Alleen het blad blijft over voor Cristiano Ronaldo.'
      },
      {
        area: 'math',
        prompt: 'Pipi-Piet heeft 17 propere toiletrolletjes voor een knutselwerk. Hij gebruikt er 5. Hoeveel blijven er over?',
        options: ['11', '12', '13'],
        correct: '12',
        explanation: '17 - 5 = 12. Er blijven 12 propere rolletjes over.'
      },
      {
        area: 'language',
        storyTitle: 'De workshopkaart',
        passage: 'Om 14.00 uur knutselen de kinderen in de klas. Om 14.30 uur zoeken ze vormen op de speelplaats. Om 15.00 uur drinken ze water in de refter.',
        prompt: 'Liam komt om 14.40 uur aan. Waar moet hij volgens de kaart naartoe?',
        options: ['Naar de speelplaats.', 'Naar de klas.', 'Naar de refter.'],
        correct: 'Naar de speelplaats.',
        explanation: 'Om 14.40 uur is de activiteit van 14.30 uur bezig. Liam moet dus naar de speelplaats.'
      },
      {
        area: 'explore',
        prompt: 'Een kabouter legt kaarten in dit patroon: paddenstoel, blad, blad, paddenstoel, blad, blad, ... Welke kaart komt daarna?',
        options: ['Paddenstoel.', 'Blad.', 'Maan.'],
        correct: 'Paddenstoel.',
        explanation: 'Het patroon herhaalt steeds paddenstoel, blad, blad. Na twee bladeren begint het opnieuw met een paddenstoel.'
      }
    ]
  }
};
