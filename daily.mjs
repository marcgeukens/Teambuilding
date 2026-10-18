export const ACTIVE_DATE = '2026-10-18';
export const DAILY_CONTENT = {
  '2026-10-18': {
    title: 'De magische boswerkplaats',
    questions: [
      {
        area: 'math',
        storyTitle: 'Luistertest: de oefenworkshop',
        listenGroup: 'boswerkplaats',
        listenText: 'Dag Liam, dit is een oefenbericht voor een magische bosworkshop. Op dinsdag zevenentwintig oktober begint de oefenworkshop om half drie. Noor en Liam maken samen een kroon van bladeren. Ieder kind brengt drie droge bladeren en een kleine doek mee. Eerst sorteren ze de bladeren per kleur. Daarna leggen ze de bladeren netjes op de doek. Ze kiezen droge bladeren, want natte bladeren blijven niet goed kleven.',
        prompt: 'Welke klok toont het beginuur van de oefenworkshop?',
        options: ['14:30', '14:00', '15:30'],
        correct: '14:30',
        clockOptions: {
          '14:30': {hour: 2, minute: 30, label: 'half drie'},
          '14:00': {hour: 2, minute: 0, label: 'twee uur'},
          '15:30': {hour: 3, minute: 30, label: 'half vier'}
        },
        explanation: 'Half drie is 14.30 uur. De grote wijzer staat op 6 en de kleine wijzer tussen 2 en 3.'
      },
      {
        area: 'language',
        storyTitle: 'Luistertest: de oefenworkshop',
        listenGroup: 'boswerkplaats',
        listenText: 'Dag Liam, dit is een oefenbericht voor een magische bosworkshop. Op dinsdag zevenentwintig oktober begint de oefenworkshop om half drie. Noor en Liam maken samen een kroon van bladeren. Ieder kind brengt drie droge bladeren en een kleine doek mee. Eerst sorteren ze de bladeren per kleur. Daarna leggen ze de bladeren netjes op de doek. Ze kiezen droge bladeren, want natte bladeren blijven niet goed kleven.',
        prompt: 'Wat maken Noor en Liam samen?',
        options: ['Een kroon van bladeren.', 'Een boot van papier.', 'Een toren van stenen.'],
        correct: 'Een kroon van bladeren.',
        explanation: 'In het oefenbericht hoor je dat Noor en Liam samen een kroon van bladeren maken.'
      },
      {
        area: 'explore',
        type: 'text',
        storyTitle: 'Luistertest: de oefenworkshop',
        listenGroup: 'boswerkplaats',
        listenText: 'Dag Liam, dit is een oefenbericht voor een magische bosworkshop. Op dinsdag zevenentwintig oktober begint de oefenworkshop om half drie. Noor en Liam maken samen een kroon van bladeren. Ieder kind brengt drie droge bladeren en een kleine doek mee. Eerst sorteren ze de bladeren per kleur. Daarna leggen ze de bladeren netjes op de doek. Ze kiezen droge bladeren, want natte bladeren blijven niet goed kleven.',
        prompt: 'Op welke dag en datum is de oefenworkshop? Schrijf ze allebei zelf.',
        placeholder: 'bijvoorbeeld: maandag 4 mei',
        accepted: ['dinsdag 27 oktober', 'dinsdag zevenentwintig oktober', 'dinsdag 27/10', 'dinsdag 27-10', 'dinsdag 27 oktober 2026', '27 oktober dinsdag'],
        correct: 'dinsdag 27 oktober',
        explanation: 'In het oefenbericht hoor je: dinsdag zevenentwintig oktober.'
      },
      {
        area: 'math',
        prompt: 'Kylian Mbappé legt 7 paren van telkens 2 vlaggetjes langs een oefenpad. Hoeveel vlaggetjes zijn dat samen?',
        options: ['9', '12', '14'],
        correct: '14',
        explanation: 'Zeven groepjes van 2 zijn 2 + 2 + 2 + 2 + 2 + 2 + 2 = 14. De keersom is 7 × 2 = 14.'
      },
      {
        area: 'language',
        prompt: 'Welk woord heeft het patroon MKMM?',
        options: ['nest', 'maan', 'uil'],
        correct: 'nest',
        explanation: 'Nest heeft medeklinker, klinker, medeklinker, medeklinker: n-e-s-t.'
      },
      {
        area: 'explore',
        prompt: 'Twee rechte lijnen kruisen elkaar. Hoe heet het kleine teken dat je precies op de kruising zet?',
        options: ['Een punt.', 'Een lijnstuk.', 'Een kromme lijn.'],
        correct: 'Een punt.',
        explanation: 'Een klein teken dat één plaats aanduidt, noem je een punt.'
      },
      {
        area: 'math',
        prompt: 'Een boself heeft 9 rode en 6 gele blaadjes. Gebruik de sok. Hoeveel blaadjes zijn dat samen?',
        options: ['14', '15', '16'],
        correct: '15',
        sock: {operator: '+', start: 9, splitTotal: 6, first: 1, second: 5, result: 15, step: '9 + 1 = 10, daarna 10 + 5 = 15.'},
        explanation: 'Splits 6 in 1 en 5. Eerst maak je 10 met 9 + 1. Daarna doe je 10 + 5 = 15.'
      },
      {
        area: 'language',
        storyTitle: 'Het opruimbord',
        passage: 'Leg alle losse bladeren in de blauwe bak. Was daarna je handen.',
        prompt: 'Waar moeten de losse bladeren volgens het bord?',
        options: ['In de blauwe bak.', 'Onder de tafel.', 'In de boekentas.'],
        correct: 'In de blauwe bak.',
        explanation: 'Het bord zegt duidelijk dat de losse bladeren in de blauwe bak moeten.'
      },
      {
        area: 'explore',
        prompt: 'Pikachu staat vóór Cristiano Ronaldo. Erling Haaland staat achter Cristiano Ronaldo. Wie staat in het midden?',
        options: ['Cristiano Ronaldo.', 'Pikachu.', 'Erling Haaland.'],
        correct: 'Cristiano Ronaldo.',
        explanation: 'De volgorde is Pikachu, Cristiano Ronaldo, Erling Haaland. Cristiano Ronaldo staat dus in het midden.'
      },
      {
        area: 'math',
        prompt: 'Een doos heeft 40 groene steentjes en 6 gouden steentjes. Hoeveel steentjes zijn dat samen?',
        options: ['44', '46', '64'],
        correct: '46',
        explanation: '40 en 6 eenheden vormen samen het getal 46.'
      },
      {
        area: 'language',
        storyTitle: 'Luistertest: de oefenworkshop',
        listenGroup: 'boswerkplaats',
        listenText: 'Dag Liam, dit is een oefenbericht voor een magische bosworkshop. Op dinsdag zevenentwintig oktober begint de oefenworkshop om half drie. Noor en Liam maken samen een kroon van bladeren. Ieder kind brengt drie droge bladeren en een kleine doek mee. Eerst sorteren ze de bladeren per kleur. Daarna leggen ze de bladeren netjes op de doek. Ze kiezen droge bladeren, want natte bladeren blijven niet goed kleven.',
        prompt: 'Waarom kiezen Noor en Liam droge bladeren?',
        options: ['Omdat natte bladeren niet goed blijven kleven.', 'Omdat droge bladeren licht geven.', 'Omdat droge bladeren kunnen zingen.'],
        correct: 'Omdat natte bladeren niet goed blijven kleven.',
        explanation: 'Aan het einde van het oefenbericht hoor je waarom droge bladeren beter passen bij deze opdracht.'
      },
      {
        area: 'explore',
        prompt: 'Pipi-Piet ziet twee pijlen: de pijl naar het toilet wijst links en de pijl naar de workshop wijst rechts. Hij moet dringend naar het toilet. Welke kant gaat hij op?',
        options: ['Naar links.', 'Naar rechts.', 'Rechtdoor.'],
        correct: 'Naar links.',
        explanation: 'De pijl naar het toilet wijst links, dus Pipi-Piet gaat naar links.'
      }
    ]
  }
};
