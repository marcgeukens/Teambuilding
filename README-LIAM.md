# Liams oefensite met online resultaten

De bestaande GitHub Pages-site gebruikt Supabase voor oefenrondes, onveranderbare eerste antwoorden en hervatbare voortgang. Antwoorden worden online bewaard voordat verdergaan mogelijk wordt. Een netwerkfout toont een knop om opnieuw te bewaren. Een nieuwe ronde bewaart de vorige ronde.

## Zonder aanmelden

De site opent direct de oefening zonder aanmelding. De knop Aanmelden staat rechtsboven. Deze voortgang wordt uitsluitend in de browser op dat toestel bewaard, los van de online rondes. Eerste antwoorden blijven vergrendeld. Een gast kan opnieuw beginnen; daarbij wordt de lokale gastvoortgang vervangen. Gastresultaten worden niet automatisch naar een ouderaccount overgezet.

## Aanmelden

Vraag op de site een aanmeldlink aan en open de e-mail op het toestel waarop je wilt oefenen. Gebruik op verschillende toestellen hetzelfde ouderaccount om dezelfde voortgang en resultaten te zien. Een ander e-mailadres krijgt een eigen geschiedenis; er is nog geen koppeling tussen twee afzonderlijke ouderaccounts.

Supabase gebruikt momenteel de standaard e-maildienst. Deze is beperkt tot organisatieleden en een lage verzendlimiet. Gebruik voor de eerste aanmelding het e-mailadres van de Supabase-eigenaar. Voor andere ouderadressen is een eigen SMTP-dienst nodig. De standaard Site URL is https://www.teambuildingprom23klasa.be/.

Oude browserantwoorden kunnen na aanmelden met de knop 'Oude antwoorden van dit toestel bewaren' worden geïmporteerd wanneer de online ronde nog leeg is. De oude browseropslag wordt behouden.

## Nieuwe dagtest

Werk `questions.js` bij: `quizMeta.key` moet uniek zijn voor de vragenversie, `date` is de oefendatum en `title` de titel. Pas ook de kop, datum, introductie en themakleuren in `index.html` aan. Vervang de site niet opnieuw door een losse oude HTML-test: behoud de aanmeldvelden en drie scriptverwijzingen. De opslaglogica in `app.js` blijft gelijk. Verander bestaande vragen niet zonder nieuwe sleutel; zo blijven oude resultaten vergelijkbaar.

## Database en beveiliging

`database-setup.sql` documenteert de inrichting voor een leeg nieuw project. Voer dit niet opnieuw uit op het al ingerichte project. `verify-rls.sql` controleert eigenaarschap, toegang zonder aanmelding, onveranderbare eerste antwoorden, versieconflicten en het behoud van geschiedenis. Alle testgegevens staan in een transactie die wordt teruggedraaid.

RLS beperkt elke ronde tot de eigenaar en de antwoorden tot diens ronde. Er zijn geen anonieme grants en geen update/delete-grants op antwoorden. `save_exercise_progress` draait als SECURITY INVOKER en bewaart voortgang en antwoorden atomair; een verouderde revisie wordt geweigerd. De openbare publishable key in de browser is bedoeld voor publiek gebruik; er staan geen geheime database- of servicekeys in de website.

De browser bewaart de aanmeldsessie; oefenresultaten staan online. Bij volledig verlies van internet kan Liam niet verder totdat het antwoord is opgeslagen. De server bewaart geschiedenis, maar dit is geen aparte back-updienst. Het gratis Supabase-project kan bij lange inactiviteit pauzeren; heractiveer het dan via het dashboard.

## Validatie

- SQL-tests op het Supabase-project: geslaagd voor eigen lezen/schrijven, afzonderlijke accounts, anonieme toegang geweigerd, antwoord niet wijzigbaar, versieconflict en behoud van geschiedenis.
- Frontend-scenariotests: geslaagd voor netwerkfout/herproberen, eerste klik vergrendeld, hervatten op een ander toestel, volledige test met eindscore, resultatenoverzicht, nieuwe ronde met behoud en conflicten tussen toestellen.
- Live e-mailaanmelding vereist dat de ouder zelf de ontvangen link opent.

## Afhankelijkheid

`supabase-2.57.4.js` is de vastgelegde UMD-versie van @supabase/supabase-js 2.57.4, afkomstig van https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.57.4/dist/umd/supabase.js. De site laadt deze kopie rechtstreeks van dezelfde GitHub Pages-host.

## Resultaten wissen

In Mijn resultaten kun je één ronde of alle rondes wissen, na een bevestiging. Deze rondes worden verborgen via deleted_at en komen in een prullenbak. Via Herstellen krijg je een ronde terug in het overzicht, inclusief de oorspronkelijke antwoorden. Er worden geen rijen fysiek verwijderd. Alleen de eigenaar kan de markering wijzigen. Een gewiste actieve ronde wordt vervangen door een nieuwe lege ronde. Andere toestellen kunnen niet verder schrijven in een gewiste ronde. Gastvoortgang kan via Nieuwe ronde opnieuw worden gestart; hiervoor is geen online prullenbak.
