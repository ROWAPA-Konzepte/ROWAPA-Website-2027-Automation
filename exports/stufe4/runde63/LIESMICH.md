# Runde 63 · Performance-Analyse in Webflow gebaut (Stufe 4, 31.10.2026)

Freigabe ROWAPA: «die Performance-Analyse könnte man mal in Webflow bauen … im Mega-Menü auch erwähnt» (Entscheid 372). Grundlage: abgenommene Fassung Runde 61 (Entscheid 371).

**Stand:** Seite `/performance-analyse` im Webflow-Projekt angelegt und aufgebaut, **nicht veröffentlicht**. Webflow-IDs in `00_webflow-ids.md` (STUFE4 …), Pflege im Benutzerhandbuch 2.47.

## Was gebaut ist

| # | Section | Umsetzung |
|---|---|---|
| – | Navigation | Komponente «Navbar · Bühne»; neu im Megamenü «Was wir tun › Für Unternehmen › Performance-Analyse» mit Vorschaukarte, im Handy-Menü unter «Für Unternehmen» |
| 1 | Header | neue Klassen `section_header-unterseite …`: Kopfzeile C (Plum-Linie, «Für Unternehmen › Performance-Analyse»), Titel, Strich, Satz, Buttons «Strategiegespräch anfragen» (E-Mail) und «So funktioniert unsere Methode», Lupe (hochaufgelöst, `grafik-lupe-performance-analyse.png`), Punktemeer (`data-grafik="punktemeer"`, wie Startseite) |
| 2 | Logo-Band | Startseiten-Band als neue Komponente «Logo-Band» (Startseite nutzt dieselbe Instanz) |
| 3 | Die Ausgangslage | zwei Leistungsfeld-Karten (`card is-linie`) mit Pfeil-Listen, Band «Wie Führung funktioniert und wirkt» |
| 4 | Was Sie erreichen | drei Kacheln, Kopf «So sieht ein Ergebnis aus», native Webflow-Reiter mit Grafik, Bildunterschrift und Text, Abschlusszeile mit Button |
| 5 | Die Methode | fünf Methoden (On-the-Job in Plum), Panel «Ein differenzierter Ist-Zustand» mit Lupe, Kundenstimme Raiffeisenbank Berg-Erlen, Hinweis, Aufwand-Leiste (Fremdsicht 15 bis 30 Minuten je beurteilte Person) |
| 6 | Gut zu wissen | sechs Fragen, aufklappbar wie auf der Startseite |
| 7 | Kontakt | Startseiten-Kontakt als neue Komponente «Section Kontakt» mit Eigenschaften «Satz», «Button Text», «Button Link»; hier Strategiegespräch |
| – | Footer | Komponente «Footer» |

## Abweichungen und offene Handgriffe

- **Grafiken der Auswertungen als Bilder** (Desktop- und Handy-Fassung, hier im Ordner). Titel, «Musterdaten», Bildunterschrift und Texte sind normale Webflow-Texte. Grund: Balkenlängen und Punktpositionen lassen sich ohne eigenen Code nicht sauber pflegen. Das Aufbauen der Grafiken beim Reiterwechsel kommt in der Effekt-Runde (Vorschlag: Grafik-Skript lädt die Grafik und baut sie auf, Bild bleibt als Rückfall).
- **Reiter 4 und 5** (Interne Referenz, Massnahmen): Die Schnittstelle legt Reiter nur mit drei Einträgen an; verschobene Reiter hätten doppelte interne Namen. Inhalt liegt fertig im ausgeblendeten Element «ZWISCHENABLAGE Reiter 4+5». Im Designer zweimal «Add Tab», Inhalt hineinziehen (Handbuch 2.47).
- **Zustand «Current» der Reiter** (Plum-Linie unter dem aktiven Reiter) lässt sich nur im Designer setzen (Handbuch 2.47).
- **Anker `methode`** für den zweiten Header-Button: Webflow hat das Setzen der ID mehrfach mit einem Serverkonflikt abgelehnt; im Designer von Hand oder im nächsten Durchgang.
- **Effekte** (Lupe aus Punkten, Einblendungen, Scroll-Geschichte «Fünf Methoden», Grafiken bauen sich auf, Kundenstimme-Linie) folgen in Runde 64; Mauszeiger und Punktemeer laufen bereits über das ROWAPA-Grafik-Skript der Website.
- **Sichtprüfung:** Der Designer war nicht geöffnet, darum keine Schnappschüsse. Prüfung nach Veröffentlichung auf der Testadresse (braucht Freigabe) oder bei geöffnetem Designer.
- **Adresse:** `/performance-analyse` (kurz, gut für Kampagnen). Konzept nannte `/fuer-unternehmen/performance-analyse`; ein Ordner lässt sich später ergänzen (Weiterleitung nicht nötig, solange nicht veröffentlicht).

## Texttabelle

Alle Seitentexte unverändert aus der abgenommenen Fassung Runde 61. Neu:

| Stelle | Original | Neu | Begründung | Offene Fragen |
|---|---|---|---|---|
| Megamenü, Link | – | «Performance-Analyse» | eigenes Angebot für Unternehmen | – |
| Megamenü, Vorschaukarte | – | «Fünf Methoden zeigen, wo in Vertrieb und Teams Potenzial liegt, fachlich ausgewertet durch ROWAPA.» | gleiche Länge wie die übrigen Karten | – |
| Reiter-Beschriftungen | Entwurf | Führung · Rollenprofil · Teams · Interne Referenz (optional) · Massnahmen | wie Entwurf | – |
| SEO-Titel / -Beschreibung | – | «Performance-Analyse · ROWAPA» / «Sie kennen Ihre Ergebnisse. Wir zeigen, wo Sie gezielt ansetzen können: Performance-Analyse für Vertriebs- und Mitarbeiterperformance in Banken, Versicherungen und bei Brokern.» | aus Titel und Satz des Headers | – |
| Alt-Texte Grafiken | – | je Grafik ein Satz mit Inhalt (z. B. «Musterauswertung Rollenprofil: Teamwerte in sechs Kompetenzen gegenüber dem Soll der Rolle …») | Barrierefreiheit | – |
