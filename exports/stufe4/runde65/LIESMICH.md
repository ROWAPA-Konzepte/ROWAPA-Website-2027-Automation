# Runde 65 · Performance-Analyse: Vorschau der neuen Präsentation (Stufe 4, 31.10.2026)

Freigabe ROWAPA (Entscheid 377): Bezeichnungen wie auf der Startseite bleiben, nur Nummern und bedeutungslose Bezeichnungen fallen weg. Leistungsfelder mit farbiger Kante und Stichworten statt Fragen. Ablauf und «So arbeiten wir» in einer Section. Dunkle Inhaltsflächen Manganese Black (Feedback zur Herkunft gewünscht). Seite als Vorschau bauen, dann über Design und Inhalte reden. Am editorialen Stil der Startseite ausrichten.

**Vorschau (Testadresse, nicht verlinkt):** https://rowapa-website-2027-automation.webflow.io/performance-analyse-vorschau
**Zum Vergleich unverändert:** https://rowapa-website-2027-automation.webflow.io/performance-analyse

Bilder: `vorschau_desktop.jpg` (ganze Seite 1440 px, Einblendungen eingeschaltet), `vorschau_handy.jpg` (390 px), `farbvergleich_dunkle_flaechen.png`. Konzept: `KONZEPT.md`.

## Was in der Vorschau anders ist

| Section | Vorher | Vorschau | Begründung |
|---|---|---|---|
| Header | Lupe 240 px fest | Lupe wächst mit dem Bildschirm (24 % der Breite, 1440 px: 346 px, 1920 px: 448 px) | Rückmeldung ROWAPA; Lupe ist das Bild der Seite |
| Ausgangslage | zwei Karten mit «Leistungsfeld 01/02», Fragen; dunkles Führungsband | zwei Karten mit farbiger Kante (Vertrieb Great Serpent, Mitarbeiter Sea Cliff), Titel gross, Nutzen in einem Satz, drei Stichworte mit Farbmarke, Themenfigur der Startseite (baut sich aus Punkten auf); Führungsband hell (Plum Tint) mit Plum-Kante, drei Stichworte als Marken, Führungsfigur | Farbe trennt Kategorien auf einen Blick (vorbewusste Wahrnehmung), Stichworte sind schneller erfasst als Fragen, Figuren verbinden mit der Startseite |
| Was Sie erreichen | Titel wiederholte die drei Kacheln; Nummern 01–03 | Titel «Das bekommen Sie von uns», Satz «Nach vier bis sechs Wochen wissen Sie, wo Sie stehen und wo Sie gezielt ansetzen.»; Kacheln ohne Nummern, Titel gross, Plum-Linie oben | Nutzen sofort klar, keine Doppelung, editorial wie «Was uns antreibt» |
| Ergebnis (Reiter) | Grafik und Text wechselten die Höhe | feste Bühne: Grafik immer 32 rem hoch (Bild eingepasst), Obertitel rechts auf Höhe des Grafiktitels, Untertitel rechts auf Höhe der Bildlegende; Text dazwischen kleiner; «optional» entfernt, Untertitel «Vergleich mit Ihren erfolgreichsten Mitarbeitenden» | Rückmeldung ROWAPA; nichts springt beim Reiterwechsel |
| Die Methode | Nummern 01–05, Hinweis, Kundenstimme klein, Aufwand-Leiste | ohne Nummern und Hinweis; Ergebnis-Panel Manganese Black | Rückmeldung ROWAPA; CI |
| Kundenstimme | kleine Karte in der Methode | eigene Section über die ganze Breite (Snowbank), Zitat gross im Fotorahmen-Stil der Startseite (Plum-Linie versetzt) | Beweis direkt nach der Erklärung, prominent |
| So arbeiten wir (neu) | – | wie Startseite (Treppe aus Punkten, vier Phasen); darüber Klammer «Performance-Analyse · 4 bis 6 Wochen» über Analysieren und Verstehen, «Umsetzung mit ROWAPA» über Handeln und Messen; darunter «Ihr Aufwand für die Performance-Analyse» als grosse Zahlen wie «Was uns antreibt»: 4–6 Wochen · 2 Halbtage · 25 Min. · 15–30 Min. | zeigt, dass die Analyse der Anfang eines Wegs ist (Kompetenz), Zahlen fallen auf (Augenbewegung bleibt an Ziffern hängen), Aufwand auf einen Blick |
| Gut zu wissen, Kontakt | – | unverändert | – |

Nicht gemacht (bewusst offen für das Gespräch): Handlungsfelder im Reiter «Massnahmen» ausformulieren (Vorschlag: je Handlungsfeld Befund → Massnahme → für wen → wann, grösser); Zustand «Current» der Reiter (Handgriff ROWAPA, aktiver Reiter noch grau).

## Dunkle Flächen: Herkunft und Alternativen

- **Herkunft:** Manganese Deep `#111D2C` stammt aus der Baseline rowapa-2027.webflow.io («Tiefsee») und wurde in Stufe 1 als abgeleiteter Ton aufgenommen (Entscheid E8: «für dunkle Kapitel und Footer, nicht als neue Markenfarbe»). Mit dem Farbkonzept von ROWAPA (Entscheide 251/258: «Manganese Black tragend») wurde der Footer auf Manganese Black umgestellt; Manganese Deep blieb nur im Header der Startseite, weil das Punktemeer auf dem dunkleren Grund mehr Tiefe hat.
- **Auf der Performance-Analyse war es kein Entscheid:** Beim Bau in Runde 63 habe ich für Führungsband und Methoden-Panel den Theme-Modus «Tiefsee» statt «Kontrast» gesetzt (Verwechslung der Modus-Kennung; in den IDs stand fälschlich «Kontrast»).
- **Alternativen:** (a) Manganese Black `#1D3149`, CI-Primärfarbe, wie ROWAPA Digital und Footer der Startseite (Empfehlung für dunkle Inhaltsflächen); (b) Manganese Deep, mehr Tiefe, aber nicht CI-Palette, bleibt dem Header vorbehalten; (c) hell mit farbiger Kante (Plum Tint, Snowbank oder Sea Cliff Tint), leichter und editorialer, dunkle Flächen werden dadurch seltener und wirken stärker.
- **In der Vorschau:** Ergebnis-Panel der Methode Manganese Black (eine dunkle Fläche als Höhepunkt), Führungsband hell (c). Header bleibt Manganese Deep wie auf der Startseite.

## Texttabelle

| Stelle | Original | Vorschlag | Begründung | Offene Fragen |
|---|---|---|---|---|
| Leistungsfelder, Bezeichnung | «Leistungsfeld 01», «Leistungsfeld 02» | entfällt | Nummer ohne Bedeutung (Entscheid 377) | – |
| Vertrieb, Punkte | «Warum erreichen einzelne Teams ihre Ziele und andere nicht?» · «Wo gibt es Potenzial bei Bedarfsergründung und Gesprächsführung?» · «Was unterscheidet erfolgreiches Beratungsverhalten?» | «Zielerreichung im Teamvergleich» · «Bedarfsergründung und Gesprächsführung» · «Was erfolgreiche Beratung ausmacht» | Stichworte statt Fragen (Entscheid 377) | [ROWAPA bestätigen] |
| Mitarbeiter, Punkte | «Wo liegen Stärken und ungenutzte Potenziale?» · «Wie wirksam sind Feedback und Coaching im Alltag?» · «Wo braucht es mehr Zusammenarbeit und Verbindlichkeit?» | «Stärken und ungenutzte Potenziale» · «Wirkung von Feedback und Coaching» · «Zusammenarbeit und Verbindlichkeit» | wie oben | [ROWAPA bestätigen] |
| Führung | «Führung prägt beide Felder. Darum messen wir sie mit: mit einem eigenen Kompetenzprofil, dem Urteil der Mitarbeitenden und der Begleitung in Führungsgesprächen.» | «Führung prägt beide Felder. Darum messen wir sie mit:» + Marken «eigenem Kompetenzprofil» · «Urteil der Mitarbeitenden» · «Begleitung in Führungsgesprächen» | auf einen Blick erfassbar | – |
| Was Sie erreichen, Titel | «Klare Handlungsfelder. Konkrete Empfehlungen.» + «Und auf Wunsch die Umsetzung aus einer Hand.» | «Das bekommen Sie von uns» + «Nach vier bis sechs Wochen wissen Sie, wo Sie stehen und wo Sie gezielt ansetzen.» | Wunsch ROWAPA («von uns bekommen Sie»); Dauer aus der Aufwand-Leiste | [ROWAPA bestätigen] |
| Kacheln, Nummern | «01», «02», «03» | entfällt | ohne Bedeutung | – |
| Reiter 4 | «Interne Referenz optional» · Untertitel «Optional, bei ausreichender Gruppengrösse» | «Interne Referenz» · «Vergleich mit Ihren erfolgreichsten Mitarbeitenden» | Rückmeldung ROWAPA (wird immer gemacht); Text aus der Grafiklegende | – |
| Methode | Nummern 01–05 · Hinweis «Die Methoden liefern unterschiedliche Arten von Erkenntnis …» | entfällt | Rückmeldung ROWAPA | – |
| So arbeiten wir, Titel | – | Bezeichnung «So arbeiten wir», Titel «Von der Analyse zur Wirkung», Satz «Die Performance-Analyse ist der Start. Danach setzen wir gemeinsam um und messen, was sich verändert hat.» | verbindet die Seite mit dem Vorgehen der Startseite | [ROWAPA bestätigen] |
| Phasen | Startseite | unverändert (Analysieren · Verstehen · Handeln · Messen) + Klammern «Performance-Analyse · 4 bis 6 Wochen», «Umsetzung mit ROWAPA» | Einordnung der Analyse | – |
| Aufwand | drei Textfelder Dauer / Projektverantwortliche / Teilnehmende | «4–6 Wochen bis zum Ergebnis, davon drei bis vier Wochen Erhebung» · «2 Halbtage für Projektverantwortliche: Start und Ergebnisgespräch, dazu die Abstimmung des Kompetenzprofils» · «25 Min. Skill-Check je teilnehmende Person» · «15–30 Min. Fremdsicht je beurteilte Person, durch die Führungskraft» · Hinweis «Interviews und Begleitungen für ausgewählte Personen nach Absprache. Die Messung ist zugleich der Start der nächsten Analyse.» | gleiche Fakten, als Zahlen | «2 Halbtage» statt «je ein halber Tag» (Zeichen ½ fehlt in der Schrift TASA) |

## Bau (Webflow)

Seite «Performance-Analyse · Vorschau» `6ae6243216db68534b505358` (Kopie der Seite, gleiche Element-IDs). Neue Klassen: `feld_raster`, `feld_karte` (+ `is-mitarbeiter`), `feld_kopf`, `feld_text`, `feld_figur`, `feld_figur-bild`, `feld_nutzen`, `feld_liste`, `feld_punkt`, `feld_marke` (+ `is-mitarbeiter`), `feld_fuehrung`, `feld_fuehrung-text`, `feld_chips`, `feld_chip`, `heading-style-h3.is-gross`, `erreichen_kachel.is-gross`, `quote_featured/quote_content/quote_text/quote_author.is-auswertung`, `methode_panel.is-kontrast` (Modus Kontrast), `section_stimme` (Modus Soft), `stimme_gross`, `stimme_rahmen`, `weg_klammern`, `weg_klammer` (+ `is-analyse`), `weg_aufwand`, `weg_aufwand-titel`, `stat_number.is-klein`. Angepasst für beide Seiten: `header-unterseite_bild` (Breite), `auswertung_visual/_grafik/_bild` (feste Bühne), `ergebnis_kopf` (Handy untereinander). Wiederverwendet von der Startseite: `section_vorgehen`, `vorgehen_layout`, `vorgehen_media` (Treppe, Grafik-Skript), `steps_list`, `step_item`, `stat_item`, `stat_label`.

Wenn die Vorschau abgenommen ist: Inhalt auf `/performance-analyse` übernehmen (oder Seiten tauschen) und die Vorschauseite löschen (Freigabe nötig).

## Prüfsession 1 (Entscheid 378, Prüfliste `00_pruefliste.md`), vor der Freigabe der Vorschau

Gemessen auf der Testadresse (Desktop 1440 px und Handy 390 px), danach korrigiert und erneut gemessen.

| Bereich | Prüfpunkt | Ergebnis |
|---|---|---|
| A CI | 8px-Raster | ✗ → ✓ 30 Abstände ausserhalb des Rasters korrigiert (neue Klassen und Klassen der Performance-Analyse aus Runde 63: Leistungsfelder, Marken, Kacheln, Reiter, Legenden, Methoden-Zeilen und -Etiketten, Panel, Kundenstimme, Klammern, Handy-Ränder). Verbleibend: 4 px innen in den kleinen Etiketten «Musterdaten» und Methoden-Etiketten (?), −1 px Überlappung der Reiterlinie (technisch). |
| A CI | Typografie H2/H3 Semibold | ✗ → ✓ grosse H3 der Vorschau von Bold auf Semibold. **?** H2 sind auf der ganzen Website Bold (700), auch auf der abgenommenen Startseite; CI sagt Semibold. Nicht geändert, Frage an ROWAPA. |
| A CI | nur Palette und Designsystem-Töne | ✗ → ✓ fest eingetragene Farben ersetzt durch Variablen: Reitertext, Legenden, Methoden-Text (Manganese Soft), Methoden-Etiketten (Sea Cliff Tint / Sea Cliff), On-the-Job-Zeile (Plum Tint), Trennlinien (Manganese Linie). Plum mit Transparenz für Rahmen der Marken bleibt (abgeleitet von Plum). |
| A CI | dunkle Flächen | ✓ Inhalt Manganese Black, Header Manganese Deep wie Startseite. |
| A CI | Bezeichnungen und Nummern | ✓ Kicker wie Startseite; Nummern nur bei den Phasen (Reihenfolge). |
| A CI | Handy | ✓ keine horizontale Verschiebung. |
| B Texte | Unternehmen, Sie, ss, keine Superlative, keine erfundenen Zahlen | ✓ («2 Halbtage» aus «je ein halber Tag»). |
| B Texte | Grammatik | ✗ → ✓ Führungs-Marken wieder im abgenommenen Wortlaut: «einem eigenen Kompetenzprofil», «dem Urteil der Mitarbeitenden», «der Begleitung in Führungsgesprächen». |
| B Texte | nächster Schritt je Section | ? «So arbeiten wir», Methode und Kundenstimme ohne eigenen Link; die Seite hat Buttons im Header, beim Ergebnis und im Kontakt. Vorschlag: «Mehr zu unserem Vorgehen» verlinken, sobald `/so-arbeiten-wir` gebaut ist. |
| B Texte | Alt-Texte, Überschriften | ✓ inhaltliche Bilder mit Alt-Text, dekorative leer; Reihenfolge H1 → H2 → H3. |
| B Texte | Texttabelle, neue Texte markiert | ✓ |
| C Bauweise | nativ, Client-First, pflegbar, «Bewegung reduzieren» | ✓ |
| D Abmachungen | Kontakt, Header, Mauszeiger, Megamenü, Effekt je Seitenfamilie | ✓ |
| E Ablauf | nur Testadresse veröffentlicht, Live unberührt, Doku nachgeführt, keine Zugangsdaten | ✓ |
| offen | Zustand «Current» der Reiter | ? Handgriff ROWAPA, aktiver Reiter noch grau. |
