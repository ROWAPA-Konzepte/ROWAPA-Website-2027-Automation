# Runde 96 · Vertriebsperformance als Vorlage «Themenlinie» gebaut (Stufe 4, 02.11.2026)

**Ansehen (Testadresse):** https://rowapa-website-2027-automation.webflow.io/themen/vertriebsperformance

## Auftrag ROWAPA (Entscheid 409)

| Punkt | Entscheid | Umgesetzt |
|---|---|---|
| Grundlage | Entwurf Runde 62 mit den Anpassungen (Logo-Leiste nach den Kundenstimmen statt Logo-Band, Kundenstimmen-Block wie Performance-Analyse) | ✓ |
| «So arbeiten wir» | als Kurzfassung mit Link | ✓ vier Schritte, Link «Mehr zu unserem Vorgehen →» auf `/so-arbeiten-wir` (Seite folgt) |
| Hebel-Karten | stapeln sich beim Scrollen, vorerst überall Figur Vertrieb | ✓ nativ mit «sticky», abwechselnd hell und dunkel |
| «20 Jahre Finanzvertrieb» | stimmt für das Unternehmen | ✓ im Abschnitt «Ihr Vorteil»; die Personen («bald 30 Jahre und mehr») sind für «Über uns» vorgemerkt |

## Aufbau der Seite

Die Vorlage gilt für alle fünf Themenlinien. Jede Themenlinie zeigt ihre eigenen Inhalte aus dem CMS.

| # | Abschnitt | Fläche | Inhalt | Woher |
|---|---|---|---|---|
| 1 | Header | Manganese, Punktemeer mit Netz | Kopfzeile «Für Unternehmen › Name», Titel, Strich, Satz, zwei Buttons, Themenfigur setzt sich aus Punkten zusammen | CMS Themenlinie: Name, Hero-Titel, Hero-Lead, CTA-Button 1 Text, **Hero-Button 2 Text** (neu), **Themenfigur** |
| 2 | Die Hebel | Snowbank | Titel, Satz, grosse Karten stapeln sich (hell, dunkel, hell, dunkel) | CMS Themenlinie: Hebel Abschnittstitel, Hebel Intro; Karten aus dem Feld **Hebel** (neu): Karten-Nummer, Karten-Kennung, Kartentitel, Teaser-Text, Figur |
| 3 | Ihr Vorteil | Weiss | Titel, Text; Karte «Wo anfangen? Performance-Analyse» mit Link; Karte «Werkzeug» | CMS: Vorteil Titel, Vorteil Text, Werkzeuge (erstes Werkzeug); Karte Performance-Analyse ist fest (gleich für alle Themenlinien) |
| 4 | Aus der Praxis | Snowbank | Kundenstimme gross wie auf der Performance-Analyse | CMS Themenlinie: **Kundenstimmen** (neu), die erste gewählte Stimme |
| 5 | Logo-Leiste | Snowbank | Komponente «Logo-Leiste» | Komponente (wie Performance-Analyse) |
| 6 | So arbeiten wir | Weiss | Kurzfassung in vier Schritten, Link | fest (gleich für alle Themenlinien) |
| 7 | Gut zu wissen | Snowbank | Fragen zum Aufklappen | CMS Themenlinie: FAQ |
| 8 | Kontakt | Sea Cliff | Komponente «Section Kontakt» | Satz = CTA-Text, Button = CTA-Button 1 Text (CMS) |

Flächenfolge Manganese › grau › weiss › grau › weiss › grau › hellblau: abwechselnd wie verlangt.

## Bauweise

- **Gestapelte Karten nativ:** Jede Karte (`hebel_item`) ist `position: sticky; top: 6.5rem` (Handy 5rem). Die nächste Karte schiebt sich beim Scrollen darüber. Hell und dunkel wechseln über den Theme-Modus: Jede zweite Karte (`nth-child(even)`) hat den Modus «Kontrast». Kein eigener Code.
- **CMS-Listen folgen dem Eintrag:** Hebel, Werkzeug, Kundenstimme und Fragen kommen aus den Referenzfeldern der Themenlinie. Jede Themenlinie zeigt also nur ihre eigenen Karten. Geprüft: Mit einem Hebel weniger im Feld zeigte die Seite drei statt vier Karten, mit einer Frage weniger fünf statt sechs.
- **Reihenfolge der Karten:** Feld «Reihenfolge» im Hebel (aufsteigend).
- **Leere Listen:** Der Webflow-Hinweis «No items found.» ist in allen vier Listen über die Klasse `hide` ausgeblendet. Hat eine Themenlinie z. B. keine Kundenstimme, bleibt der Abschnitt ohne Rahmen.
- **Neue Klassen:** `hebel_item`, `hebel_karte`, `hebel_nummer`, `hebel_text`, `hebel_figur`, `hebel_figur-bild`, `thema_vorteil-layout`, `thema_vorteil-text`, `thema_start`, `card is-linie is-plum`, `stimme_liste`, `vorgehen_kurz`, `vorgehen_kurz-schritt`, `section_thema-hebel theme-soft`. Wiederverwendet: Header, Kicker, Karten, Stimme, FAQ und Kontakt der Performance-Analyse.
- **Entfernt:** die vier Platzhalter-Abschnitte der Vorlage aus Stufe 3 (Hero, Diagnostik & Tools, Vorteil, Abschluss), ersetzt durch die neuen Abschnitte (Entscheid 406: Nichtbenötigtes löschen).

### CMS-Änderungen

| Collection | Änderung |
|---|---|
| Themenlinien | neu: «Hero-Button 2 Text», «Kundenstimmen» (Mehrfach-Referenz Stimmen), «Hebel» (Mehrfach-Referenz Hebel); «Hero-Bild» heisst jetzt «Themenfigur» (Hilfetext: PNG, helle Fassung für den dunklen Header) |
| Hebel | neu: «Kartentitel», «Karten-Nummer»; «Hero-Bild» heisst jetzt «Figur» |
| Eintrag Vertriebsperformance | Themenfigur (Figur Vertrieb), Hero-Button 2 Text «Die vier Hebel», Vorteil Titel und Text gekürzt (Texttabelle), CTA-Text neu, sechs Fragen, Kundenstimme Bernard Dietrich, vier Hebel |
| 4 Hebel der Vertriebsperformance | Kartentitel, Nummer, Teaser-Text (Texte v11 / Runde 62), Figur Vertrieb |
| 5 Fragen | Antwort in zwei Sätze getrennt (Runde 62) |

**Veröffentlicht (nur Testadresse):** Themenlinie Vertriebsperformance, ihre vier Hebel, sechs Fragen, die Stimme Bernard Dietrich und das Werkzeug SalesStep. Alle übrigen Einträge bleiben Entwurf.

**Nicht mehr verwendet (bleiben vorerst im CMS):** Kicker, Farbwelt, Diagnostik und Tools Titel/Text, Arbeitsweise anzeigen, CTA-Titel, CTA-Button 1 Link, CTA-Button 2 Text/Link. Löschen erst mit Freigabe (Frage 4 unten).

## Texttabelle

| Ort | Original (CMS / Runde 62) | Vorschlag (umgesetzt) | Begründung | Offene Fragen |
|---|---|---|---|---|
| Kopfzeile | Kicker «Für Unternehmen · Vertriebsperformance» | «Für Unternehmen › Vertriebsperformance» | Kopfzeile wie Performance-Analyse (Entscheid 367) | – |
| Titel, Satz | «Vertriebsstärke ist kein Zufall.» · «ROWAPA entwickelt die Verkaufsleistung …» | unverändert | – | – |
| Buttons | «Erstgespräch vereinbaren» · «Die vier Hebel» | unverändert; Erstgespräch vorerst per E-Mail wie überall (Entscheid 318), «Die vier Hebel» springt zu den Karten | – | – |
| Hebel-Kicker | «Die Hebel» | unverändert | Runde 62 | – |
| Hebel-Karten | v11: Kennung, Titel, Kurztext | unverändert, jetzt im CMS (Kartentitel, Teaser-Text) | – | «Mehr erfahren →» kommt mit den Hebel-Seiten (Frage 2) |
| Ihr Vorteil, Titel | «Ihr Vorteil: gesicherte Entscheidungen und Wirkung, die bleibt» | Kicker «Ihr Vorteil», Titel «Gesicherte Entscheidungen und Wirkung, die bleibt» | sonst doppelt | Die anderen vier Themenlinien haben noch «Ihr Vorteil: …» im Titel; anpassen bei ihrer Textprüfung |
| Ihr Vorteil, Text | fünf Sätze mit SalesStep und «schwarz auf weiss» | drei Sätze wie Runde 62 («… Praxiswissen aus 20 Jahren Finanzvertrieb …») | kürzer; 20 Jahre bestätigt (409) | – |
| Wo anfangen? | – | «Performance-Analyse: Fünf Methoden zeigen, wo in Ihren Teams Potenzial liegt und welcher Hebel am meisten bewegt. Fachlich ausgewertet durch ROWAPA.» · «Zur Performance-Analyse →» | Runde 62, führt zum Einstieg | – |
| Werkzeug | Runde 62: «Diagnostik der Vertriebskompetenz: Sie sehen schwarz auf weiss, wo Ihre Vertriebsstärke liegt.» | CMS Werkzeug: «Sales-Diagnostik mit über 20 Verkaufskompetenzen.» | ein Text je Werkzeug, auf allen Seiten gleich | Welcher Satz? (Frage 3) |
| Aus der Praxis | drei Karten der Startseite | eine Stimme gross wie Performance-Analyse: Bernard Dietrich, Basler Versicherung, «Sehr hohe Umsetzungsquote.» | Entscheid 409 | «Freigegeben» im CMS steht aus (Frage 5) |
| So arbeiten wir | weggelassen | Kicker «So arbeiten wir», Titel «Von der Analyse zur Wirkung», Satz «In vier Schritten von Ihrer Ausgangslage zur messbaren Veränderung.», vier Schritte wie Performance-Analyse, Link «Mehr zu unserem Vorgehen →» | Entscheid 409 und 380 | Satz neu formuliert, bitte prüfen |
| Gut zu wissen | sechs Fragen v11, Sätze mit Komma verbunden | gleiche Fragen, Sätze getrennt | lesbarer (Runde 62) | – |
| Kontakt | «In einem Erstgespräch analysieren wir Ihre Ausgangslage und zeigen, welcher Hebel bei Ihnen am meisten bewegt.» | «Im Erstgespräch klären wir Ihre Ausgangslage und welcher Hebel in Ihrem Unternehmen am meisten bewegt.» | Runde 62 | – |

**Redaktions-Check:** Was: Themenlinie mit vier Hebeln. Für wen: Vertriebsverantwortliche in Banken, Versicherungen und bei Brokern (Sie). Nutzen: messbare Vertriebsleistung auf gesicherter Grundlage. Nächster Schritt: Erstgespräch oder Einstieg über die Performance-Analyse. ✓

## Geprüft auf der Testadresse

- Desktop 1440 px und Handy 390 px: alle Inhalte aus dem CMS, keine Platzhalter, keine seitliche Verschiebung (Seitenbreite 390 px).
- Karten bleiben beim Scrollen oben stehen (gemessen: 80 px vom Fensterrand auf dem Handy) und werden von der nächsten Karte überdeckt.
- Kundenstimme: Rahmen gleich breit wie auf der Performance-Analyse (nach Korrektur `stimme_liste`).
- Button «Die vier Hebel» springt zu den Karten (`#hebel`).

## Fragen an ROWAPA

1. **Abnahme Vertriebsperformance:** Passt die Seite so? Danach stehen die anderen vier Themenlinien im gleichen Aufbau; zu tun bleibt dort die Prüfung ihrer Texte, Hebel, Fragen und Stimmen im CMS.
2. **Hebel-Seiten:** Auf den Karten fehlt noch «Mehr erfahren →». Er kommt mit der Vorlage «Hebel» (nächster Schritt, 9 Seiten). Die vier Hebel sind für die Prüfung veröffentlicht; ihre Detailseiten (z. B. `/loesungen/verkaufstrainings`) zeigen bis dahin eine leere Vorlage und sind nirgends verlinkt. Einverstanden, als Nächstes die Vorlage «Hebel» zu bauen?
3. **Werkzeug-Satz:** «Sales-Diagnostik mit über 20 Verkaufskompetenzen.» (CMS, heute) oder «Diagnostik der Vertriebskompetenz: Sie sehen schwarz auf weiss, wo Ihre Vertriebsstärke liegt.» (Runde 62)?
4. **Nicht mehr verwendete CMS-Felder** (Kicker, Farbwelt, Diagnostik und Tools, Arbeitsweise anzeigen, CTA-Titel, CTA-Button 1 Link, CTA-Button 2): löschen, damit die Redaktion nur sieht, was die Seite zeigt?
5. **Kundenstimmen «Freigegeben»:** Im CMS steht dieser Schalter bei allen acht Stimmen auf «aus», obwohl drei auf der Startseite und eine auf der Performance-Analyse erscheinen. Ist die Zustimmung für alle acht da? Dann setze ich den Schalter. [ROWAPA bestätigen]
6. **Effekt «Karten treten zurück»** (Video Runde 62: die überdeckte Karte wird leicht kleiner und dunkler): Heute stapeln sich die Karten ohne diesen Zusatz. Mit einer Webflow-Interaktion nachrüsten?

## Prüfsession 31 (Entscheid 378)

| Bereich | Punkt | Ergebnis |
|---|---|---|
| A CI | Farben, Schriften, 8-px-Raster | ✓ nur Variablen und bestehende Klassen; Abstände 1, 1.5, 2, 3 rem |
| A CI | Flächenfolge | ✓ abwechselnd hell/grau, Kontakt hellblau |
| A CI | Linien | ✓ Schritte «So arbeiten wir» mit «Manganese Linie Abschnitt» 1 px; Plum-Linie 3 px oben an den Hebel-Karten wie Entwurf |
| B Texte | Sie-Form, «Unternehmen», keine erfundenen Fakten | ✓ «20 Jahre» bestätigt (409); ein neuer Satz bei «So arbeiten wir» zur Prüfung |
| B Texte | Texttabelle | ✓ oben |
| C Bauweise | nativ, pflegbar | ✓ sticky und Theme-Modus statt Code; alle Inhalte im CMS; Listen folgen den Referenzfeldern |
| C Bauweise | Klassen | ✓ Client-First; neue Klassen hängen an Elementen (Clean up löscht sie nicht) |
| C Bauweise | Unvollständige CMS-Einträge als Entwurf | ✓ veröffentlicht sind nur Vertriebsperformance und ihre Bezüge, zur Prüfung auf der Testadresse (Plan Runde 94) |
| D Abmachungen | Entscheid 409 | ✓ alle vier Punkte |
| D Abmachungen | Logo-Band nur auf der Startseite (383) | ✓ Logo-Leiste nach der Kundenstimme |
| E Ablauf | Löschen | ✓ nur die vier ersetzten Platzhalter-Abschnitte der Vorlage (Entscheid 406); keine CMS-Inhalte gelöscht |
| E Ablauf | Veröffentlichen | ✓ nur Testadresse |
| E Ablauf | keine Zugangsdaten, keine Modellbezeichnungen | ✓ |
