export const ACTIVE_DATE = '2026-10-25';
export const DAILY_CONTENT = {
  '2026-10-25': {
    title: 'Het warme boekenhoekje',
    questions: [
      {
        area: 'math',
        prompt: 'In de leeshoek liggen 13 boeken. Liam zet er 5 terug in de kast. Gebruik de sok. Hoeveel boeken blijven liggen?',
        options: ['8', '7', '9'],
        correct: '8',
        explanation: 'Splits 5 in 3 en 2. Eerst 13 − 3 = 10, daarna 10 − 2 = 8. Er blijven 8 boeken liggen.',
        challenge: true,
        sock: { operator: '-', start: 13, splitTotal: 5, first: 3, second: 2, result: 8, step: '13 − 3 = 10, daarna 10 − 2 = 8.' }
      },
      {
        area: 'language',
        storyTitle: 'Luistertest: het boekenhoekje',
        listenGroup: 'boekenhoekje',
        listenText: 'Dag Liam, luister naar het bericht over de zondagse leeshoek. Vandaag is het zondag vijfentwintig oktober. Om half elf legt Liam een blauw dekentje op de bank. Hij kiest een boek over een kleine draak. Mama zet een warm drankje op de tafel. Liam leest eerst twee bladzijden en tekent daarna zijn lievelingsfiguur. Hij zet de beker ver van het boek zodat de bladzijden droog blijven.',
        prompt: 'Wat doet Liam nadat hij twee bladzijden heeft gelezen?',
        options: ['Hij tekent zijn lievelingsfiguur.', 'Hij legt het boek buiten.', 'Hij verstopt het dekentje.'],
        correct: 'Hij tekent zijn lievelingsfiguur.',
        explanation: 'Je hoort dat Liam eerst twee bladzijden leest en daarna zijn lievelingsfiguur tekent.'
      },
      {
        area: 'explore',
        type: 'text',
        storyTitle: 'Luistertest: het boekenhoekje',
        listenGroup: 'boekenhoekje',
        listenText: 'Dag Liam, luister naar het bericht over de zondagse leeshoek. Vandaag is het zondag vijfentwintig oktober. Om half elf legt Liam een blauw dekentje op de bank. Hij kiest een boek over een kleine draak. Mama zet een warm drankje op de tafel. Liam leest eerst twee bladzijden en tekent daarna zijn lievelingsfiguur. Hij zet de beker ver van het boek zodat de bladzijden droog blijven.',
        prompt: 'Welke dag en datum hoor je? Schrijf ze allebei.',
        placeholder: 'bijvoorbeeld: zondag 4 mei',
        accepted: ['zondag 25 oktober', 'zondag vijfentwintig oktober', 'zondag 25/10', 'zondag 25-10', 'zondag 25 oktober 2026', '25 oktober zondag'],
        correct: 'zondag 25 oktober',
        explanation: 'In het bericht hoor je: zondag vijfentwintig oktober.'
      },
      {
        area: 'math',
        prompt: 'Er liggen 20 boekenkaartjes. Je verdeelt ze eerlijk over 2 stapels. Hoeveel kaartjes liggen op elke stapel?',
        options: ['10', '8', '12'],
        correct: '10',
        explanation: 'Je verdeelt 20 kaartjes in 2 gelijke groepen. Elke groep krijgt 10 kaartjes: 20 : 2 = 10.',
        tableOf2: true
      },
      {
        area: 'language',
        storyTitle: 'Een bericht van juf',
        passage: 'Juf Barbara kreeg verjaardagswensen en fijne cadeautjes. Ze schrijft de ouders een bericht met “Dankjewel!” en wenst iedereen een fijn weekend.',
        prompt: 'Waarom schrijft juf Barbara dit bericht?',
        options: ['Om de ouders te bedanken', 'Om nieuwe cadeautjes te vragen', 'Om een toets aan te kondigen'],
        correct: 'Om de ouders te bedanken',
        explanation: 'Juf kreeg wensen en cadeautjes en schrijft daarom “Dankjewel!”. Het doel van het bericht is bedanken.',
        challenge: true
      },
      {
        area: 'explore',
        storyTitle: 'Luistertest: het boekenhoekje',
        listenGroup: 'boekenhoekje',
        listenText: 'Dag Liam, luister naar het bericht over de zondagse leeshoek. Vandaag is het zondag vijfentwintig oktober. Om half elf legt Liam een blauw dekentje op de bank. Hij kiest een boek over een kleine draak. Mama zet een warm drankje op de tafel. Liam leest eerst twee bladzijden en tekent daarna zijn lievelingsfiguur. Hij zet de beker ver van het boek zodat de bladzijden droog blijven.',
        prompt: 'Welke klok toont wanneer Liam zijn dekentje op de bank legt?',
        options: ['10:30', '11:30', '10:00'],
        correct: '10:30',
        explanation: 'Half elf is een halfuur na tien uur. Dat is 10:30.',
        clockOptions: {
          '10:30': { hour: 10, minute: 30, label: 'half elf' },
          '11:30': { hour: 11, minute: 30, label: 'half twaalf' },
          '10:00': { hour: 10, minute: 0, label: 'tien uur' }
        }
      },
      {
        area: 'math',
        prompt: 'Welk getal ontbreekt? 12 + ? = 18',
        options: ['6', '5', '7'],
        correct: '6',
        explanation: 'Van 12 tot 18 tel je 6 verder. Dus 12 + 6 = 18.'
      },
      {
        area: 'language',
        prompt: 'Welk woord is juist geschreven?',
        options: ['warm', 'warrem', 'warmm'],
        correct: 'warm',
        explanation: 'Je schrijft warm met w-a-r-m. Het is een MKMM-woord.'
      },
      {
        area: 'explore',
        prompt: 'De beker staat links van het boek. De lamp staat rechts van het boek. Wat staat in het midden?',
        options: ['Het boek', 'De beker', 'De lamp'],
        correct: 'Het boek',
        explanation: 'De beker staat links en de lamp rechts van het boek. Daardoor staat het boek in het midden.'
      },
      {
        area: 'math',
        prompt: 'Erling Haaland heeft 6 blauwe en 7 gele bladwijzers. Hoeveel bladwijzers zijn dat samen?',
        options: ['13', '12', '14'],
        correct: '13',
        explanation: 'Maak eerst 10: 6 + 4 = 10. Van de 7 blijven dan nog 3 over. Dus 10 + 3 = 13.'
      },
      {
        area: 'language',
        prompt: 'Pipi-Piet leest een boek op de wc. Welk woord rijmt op boek?',
        options: ['zoek', 'zak', 'dak'],
        correct: 'zoek',
        explanation: 'Boek en zoek eindigen allebei op de klank -oek. Daarom rijmen ze.'
      },
      {
        area: 'explore',
        prompt: 'Pikachu leest ’s morgens 4 bladzijden en ’s middags nog 3. Squirtle leest 8 bladzijden. Wie leest het meest en hoeveel meer?',
        options: ['Squirtle, 1 bladzijde meer', 'Pikachu, 1 bladzijde meer', 'Ze lezen evenveel'],
        correct: 'Squirtle, 1 bladzijde meer',
        explanation: 'Pikachu leest 4 + 3 = 7 bladzijden. Squirtle leest 8. Acht is één meer dan zeven, dus Squirtle leest 1 bladzijde meer.',
        challenge: true
      }
    ]
  }
};
