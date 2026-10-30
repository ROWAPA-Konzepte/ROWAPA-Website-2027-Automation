# Landingpage Performance-Analyse · Runde 53 (30.10.2026)

Überarbeitung nach dem finalen Änderungsbriefing von ROWAPA. Vollständige, responsive HTML-Version: `index.html` (Bilder in `img/`, Schriften eingebettet; im Browser direkt öffnen). Private Vorschau: https://claude.ai/artifact/5ZLXZWorvsLP53Q2DFY6Ju. Quelle: `tools/entwuerfe/runde53/`. Die ROWAPA-Hauptseite (rowapa.ch) und das Webflow-Projekt sind unverändert.

## Aufbau

Header · Logo-Band · Ausgangslage · Was sichtbar wird (Bezugspunkte, individuell, Team, Top-Performer) · Methode · Vertrauen und Datenschutz · Von Erkenntnissen zu Entscheidungen · Ablauf und Aufwand · Strategiegespräch · Häufige Fragen · Hinweise · Footer

## Änderungen

| # | Briefing | Umsetzung |
|---|---|---|
| 1 | Positionierung | Hauptbotschaft bleibt. Einstieg nennt digitale Kompetenzerhebung + persönliche Gespräche + Beobachtung im Alltag. «Für mehr Vertriebs- und Mitarbeiterperformance» gleichwertig. Neuer Hinweis «Kein Persönlichkeitstest und kein Standard-Fragebogen». Durchgehend Sie. |
| 2 | Ergebnisse | Drei Ebenen: individuelle Standortbestimmung, Team-Standortbestimmung, optionaler Top-Performer-Vergleich. Jede Grafik mit «Die Grafik zeigt …» und «Mögliche Entwicklungsentscheidung». Alle Grafiken «Musterdaten». Neue Leiste mit drei Bezugspunkten: Rollenanforderung, Gruppenvergleich, Top-Performer-Referenz. |
| 2 | Entfernt | «nie mit Kolleginnen und Kollegen», «Ehrliche Antworten/Prüffragen», Budget-Zahl «6 von 18», Musterbericht-Zahl, «Ist gegen Soll»-Karte als eigener Block. |
| 3 | Top-Performer | «Lernen Sie von Ihren eigenen Besten.» als optionale Vertiefung, Erfolgskriterien, internes Referenzprofil, ausdrücklich kein allgemeingültiges Soll-Profil, keine Kausalität. |
| 4 | Methoden | Skill-Check, Eigensicht, Fremdsicht, Interviews, On-the-Job-Begleitung. Rollenprofil → Kompetenzprofil → Online-Skill-Check nur beim Skill-Check. On-the-Job als dunkles, hervorgehobenes Band, «fester Bestandteil», mit Kundengesprächen, Führungsgesprächen, Teamsitzungen, weiteren Meetings. Keine Gewichtungsaussagen mehr («wiegt stärker», «misst am stärksten» entfernt). |
| 5 | Umfang und Ablauf | Konfigurator entfernt. Ablauf, Erhebung und Aufwand in einem Bereich: gemeinsam festgelegt (Themen, Personen, Umfang) · sechs Phasen · Aufwand getrennt für Projektverantwortliche und Teilnehmende. Nur bestätigte Zeitangaben (4–6 Wochen, 3–4 Wochen Erhebung, 1–2 Tage je Rolle, halber Tag Start/Ergebnis, ca. 25 Min.). Doppelte Aufwand-Kacheln, Folgemessungs-Box und «So arbeiten wir»-Zuordnung entfernt. |
| 6 | Conversion | Primär überall «Strategiegespräch anfragen», sekundär «So funktioniert unsere Methode». Alle Strategiegespräch-Buttons führen zum Bereich «Ihr nächster Schritt»; dort öffnet der Button eine vorbereitete E-Mail an Jennifer Boek (Betreff, Fragestellung, Termine). Dazu E-Mail mit «Adresse kopieren», Telefon Mobil und Büro. Nutzen des Gesprächs in vier Punkten. Buchungslink: im Skript `TERMIN_LINK` eintragen, dann führt der Button direkt zur Buchung. |
| 6 | Entfernt | Musterbericht-Formular (kein Versand angeschlossen, wäre ein Platzhalter). Die Musterauswertung wird im Strategiegespräch gezeigt. |
| 7 | Vertrauen | Neu «Klare Regeln, bevor die Erhebung beginnt»: Auswertungsebenen, Gruppenauswertungen ab vereinbarter Mindestgrösse (Standard fünf Personen), persönliche Ergebnisse, drei Erhebungsformen. Keine Aussagen zu Datensicherheit. Logos als «Ausgewählte Unternehmen, mit denen ROWAPA zusammenarbeitet» und Hinweis am Seitenende. Ansprechpartnerin Jennifer Boek bleibt. |
| 8 | Design und Handy | Corporate Design wie Master-Seite (TASA, Farben, 8-px-Raster). Header auf dem Handy ohne Figur, Brotkrumen und Erkenntnis-Box, Buttons volle Breite. Varianten-Schalter, Lesefortschritt, schwebender Button und Klick-Effekte ohne Nutzen entfernt. Geblieben: Punkte-Lupe im Header (Desktop), Logo-Laufband, Detailansicht beim Teamvergleich, Abstände und Balken bauen sich beim Hineinscrollen auf. Tabelle und Diagramme auf 390 px geprüft. |
| 8 | Navigation | Sprungmarken (Ausgangslage, Ergebnisse, Methode, Ablauf und Aufwand, Fragen) + Button. Logo führt auf rowapa.ch, Footer «Kontakt» auf rowapa.ch/kontakt. Handy-Menü öffnet und schliesst. In Webflow kommt die globale Website-Navigation (Entscheid 361). |

## Prüfung (Desktop 1440 px, Handy 390 px)

- Alle Links zeigen auf ein vorhandenes Ziel, kein Link «#». Buttons: nur «Strategiegespräch anfragen» und «So funktioniert unsere Methode».
- Handy-Menü öffnet und schliesst beim Antippen eines Eintrags. Zeile im Teamvergleich anwählbar, Detailansicht wechselt.
- Kein seitliches Scrollen, keine Skriptfehler. Header Handy 685 px hoch (vorher 876 px).
- Bewegung wird bei «reduzierte Bewegung» abgeschaltet.

## Offen

- Buchungslink (vermutlich Calendly) eintragen, sobald vorhanden.
- Links Impressum und Datenschutz: Adressen bestätigen (in der Alt-URL-Liste nur `/kontakt/`).
- Mindestgrösse Gruppenauswertung «Standard fünf Personen» und Formulierung der drei Erhebungsformen bestätigen.
- Musterbericht-Download später über Mailchimp (Punkt 84).
