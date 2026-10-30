# Runde 54 · Landingpage «Performance-Analyse» aus den Bausteinen der Startseite (30.10.2026)

Ganze Seite als Bild, Desktop 1440 px und Handy 390 px. Gerendert auf der echten Testadresse: Navigation, Logo-Band, «Unser Vorgehen», «Gut zu wissen», Kontakt und Footer sind die Bausteine der Startseite, nur Texte sind ersetzt. Ansicht (privat, Desktop/Handy umschaltbar): https://claude.ai/artifact/6HsZc1zhigNCnBFpgeMxCk. Nichts in Webflow gebaut. Werkzeug: `tools/entwuerfe/runde54_performance-analyse.js`.

Ersetzt Runde 53 (`exports/landingpage-performance-analyse/`): Dort hatten Navigation, Kontakt und Footer ein eigenes Aussehen. Das widersprach Entscheid 354 (ein Kontaktweg, gleiche Bausteine auf allen Seiten).

## Aufbau: Seitenfamilie «Angebot für Unternehmen»

Dieselbe Reihenfolge lässt sich für weitere Angebotsseiten verwenden (zum Beispiel Diagnostik & Potenzialanalyse, SalesStep).

| # | Section | Baustein | Hintergrund | Neu oder vorhanden |
|---|---|---|---|---|
| – | Navigation | Navbar · Bühne | Manganese | vorhanden (global) |
| 1 | Header | Header B wie Runde 50: Brotkrumen, Titel, Strich, ein Satz, zwei Buttons, Figur | Manganese, stehendes Punktemeer | wie Runde 50, ohne Kicker; Titel für Unterseiten etwas kleiner |
| 2 | Logo-Band | Logo-Band der Startseite | Manganese | vorhanden, unverändert |
| 3 | Ausgangslage | Titel + drei Fragen + ein Satz | Weiss | neu, einfacher Baustein «Fragen-Raster» |
| 4 | Was Sie erhalten | zwei Musterauswertungen + Band «Optional» | Snowbank | neu, nur für diese Seite |
| 5 | Die Methode | «Unser Vorgehen» der Startseite (Treppe, vier Schritte) + Band «Wir schauen in den Arbeitsalltag» | Weiss | vorhanden mit anderen Texten; Band neu |
| 6 | Gut zu wissen | FAQ der Startseite | Weiss | vorhanden, eigene FAQ-Gruppe im CMS |
| 7 | Kontakt | Kontakt der Startseite | Sea Cliff | vorhanden, unverändert |
| – | Footer | Footer | Manganese | vorhanden (global) |

Gestrichen gegenüber Runde 53: Erkenntnis-Box im Header, Kicker, zweiter Absatz und Zielgruppen-Zeile im Header, eigene Navigation, eigener Kontakt und Footer, Leiste «Bezugspunkte», Abschnitt «Vertrauen und Datenschutz», «Von Erkenntnissen zu Entscheidungen», sechs Phasen und Aufwand-Kacheln, Hinweisblock am Ende. Die Details stehen jetzt kurz im FAQ.

Die Seite ist am Desktop rund 6000 px lang statt rund 12 000 px.

## Texttabelle

| Section | Original (Runde 53) | Vorschlag | Begründung | Offene Fragen |
|---|---|---|---|---|
| Header | Kicker, Titel, «Für mehr …», zwei Sätze Methode, zwei Buttons, Zielgruppe, Figur mit Erkenntnis-Box | Titel «Sie kennen Ihre Ergebnisse. Wir zeigen, wo Sie gezielt ansetzen können.», ein Satz (Methode + Vertriebs- und Mitarbeiterperformance), zwei Buttons, Figur | Header war zu voll | – |
| Buttons | «Strategiegespräch anfragen» / «So funktioniert unsere Methode» | «Erstgespräch vereinbaren» (wie Startseite und Kontakt) / «So funktioniert unsere Methode» | ein Kontaktweg auf allen Seiten (Entscheid 354) | Soll es doch «Strategiegespräch» heissen, dann auf allen Seiten? |
| Ausgangslage | drei Karten mit Frage und Erklärung, Schlussfrage, Hinweis «Kein Persönlichkeitstest» | drei kurze Fragen, ein Satz «… wo sich gezielte Entwicklung lohnt und wo nicht» | für Entscheider genügt die Frage | – |
| Was Sie erhalten | Bezugspunkte, zwei Grafiken mit «Die Grafik zeigt …», Praxis-Ergänzung und Entwicklungsentscheidung, Top-Performer mit Grafik und Hinweis | zwei Grafiken mit je einem Satz «Daraus abgeleitet», Band «Lernen Sie von Ihren eigenen Besten.» in drei Sätzen | zeigt den Nutzen, ohne Methodenlehre | – |
| Die Methode | vier Methoden-Karten + On-the-Job-Band, Hinweis Aussagekraft | Baustein «Unser Vorgehen»: Ausrichten, Erheben, Auswerten, Entscheiden; Aufwand in einem Satz; On-the-Job-Band | gleicher Baustein wie Startseite, kurz | – |
| Vertrauen, Ablauf, Aufwand | eigene Abschnitte | in das FAQ verschoben («Wer sieht die Ergebnisse?», «Wie viel Aufwand …?») | Details nur für die, die es wissen wollen | – |
| Gut zu wissen | 7 Fragen | 6 Fragen | gleiche Länge wie Startseite | – |
| Kontakt | eigener Bereich «Wo lohnt es sich …», Nutzenliste, Mail-Button | Kontakt der Startseite unverändert | «Kontakt überall gleich» | – |
