# ROWAPA Website 2027 · Entscheide

**Laufend gepflegt** · Beginn 25.10.2026 · Arbeitssitzungen mit Claude (Claude Code, Cloud-Sitzung)
**Teilnehmende:** ROWAPA (Auftraggeber), Claude (Umsetzung in Webflow und Dokumentation)
**Lesart:** chronologisch; je Eintrag Anliegen → Entscheid → Ergebnis. Neue Einträge kommen unten dazu, die Nummern laufen weiter. Commits verweisen auf das Repository `ROWAPA-Konzepte/ROWAPA-Website-2027-Automation`.

---

## 1. Phase 1 und 2: Analyse und Architektur

| # | Anliegen | Entscheid / Ergebnis | Nachweis |
|---|---|---|---|
| 1 | CMS-Architektur, Master-Templates und Komponenten-Konzept für 68 Seiten | Konzept erstellt (Collections, Feld-Schemas, Templates, Bau-Rezepte) | `01_cms_architektur.md`, Commit 140c5be |
| 2 | Baseline rowapa-2027.webflow.io sichten | Live-Sichtung mit Screenshots, Erkenntnisse übernommen (nur lesend) | Commit 6f14a45 |
| 3 | URL-Plan für 166 Alt-URLs | Redirect-Mapping erstellt | `02_redirect_mapping.xlsx`, Commit bb1e46b |

## 2. Stufe 1: Design-System

| # | Anliegen | Entscheid / Ergebnis | Nachweis |
|---|---|---|---|
| 4 | Design-System in Webflow | Variablen, 5 Themes, Klassen, Komponenten, Styleguide-Seite | `03_stufe1_designsystem.md`, Commit 46bc128 |
| 5 | Nr. 155 der Alt-URLs | **155 entfällt** (gemeint war 155, nicht 156) | Commit 81da083 |
| 6 | Ständige Freigaben | Claude führt Tool-Aufrufe ohne Rückfrage aus; Halt nur am Stufenende, vor dem Veröffentlichen und vor dem Löschen | `CLAUDE.md`, `.claude/settings.json` |
| 7 | Feedback Stufe 1 | «Grundsätzlich passt das so» | – |
| 8 | Farbpalette erweiterbar? | Ja, über Variablen; die CI-Palette bleibt die Basis | – |
| 9 | Footer-Wortmarke | **Variante B**, randlos über die ganze Breite, **12 %** Deckkraft (als Variable) | Commit 7144173 |

## 3. Stufe 2: Startseite, erste Fassung

| # | Anliegen | Entscheid / Ergebnis |
|---|---|---|
| 10 | Wo bauen, wie Varianten vergleichen? | Direkt in Webflow; Varianten als umschaltbare Komponenten-Varianten |
| 11 | Verständlichkeit der Inhalte | Jede Section wird geprüft: Was, für wen, Nutzen, nächster Schritt. Werte **klar · souverän · inspirierend** |
| 12 | Texte und Anrede | verbesserte Texte direkt einbauen plus Texttabelle; **Sie** für Unternehmen, **Du** nur bei «Meine Entwicklung»; Redaktionsleitfaden verbindlich |
| 13 | ROWAPA Digital: Fakten | Alle Finanzunternehmen nutzen die Werkzeuge, eingeführt durch Vertrieb oder HR, nutzbar bis zur einzelnen Person (Logbuch auf Stufe Berater); einzeln buchbar; mit KI; alle 5 bis Ende Jahr verfügbar (heute schon als verfügbar nennen); Demo zu allen |
| 14 | Animationen | einige behalten (Punktemeer, Punkte-Grafiken), aber nicht verspielt und nicht ablenkend |
| 15 | Ergebnis | `/home-v2` mit 13 Sections, Hero-Varianten A/B, Texttabelle, Animationskonzept (Commit 5e45c0c) |

## 4. Feedback-Runde 2

| # | Feedback | Entscheid | Umsetzung |
|---|---|---|---|
| 16 | Freigabe-Meldungen der Webflow-Tools | Ursache sind die Tool-Berechtigungen des claude.ai-Connectors | ROWAPA stellt unter claude.ai › Connectors › Webflow auf «Immer erlauben» |
| 17 | Hero ohne Call to Action | einverstanden | Buttons entfernt, Scroll-Hinweis |
| 18 | «Organisationen» | ersetzen durch «Unternehmen» | überall ersetzt, Regel im Leitfaden |
| 19 | Kleiner Titel und Text im Hero | Kompromiss: drei Begriffe + Originaltext | umgesetzt |
| 20 | Logos als Laufband | ja | native Interaction, Pause bei Mausberührung |
| 21 | Übertitel, Titel, Beschreibung | Übertitel bleiben, mit **rotem Strich**; Beschreibung nur wo nötig | umgesetzt |
| 22 | Logo bei ROWAPA Digital schlecht sichtbar | Signet für dunklen Grund | Snowbank-Signet |
| 23 | Partnerlogos im feinen Kasten | ja | Linienraster |
| 24 | Video-Vorschau der Wege-Karten | ja, nur beim Darüberfahren | Hover-Video mit kleinem Skript |
| 25 | Punktemeer wiederholen | im Footer | hinter der Wortmarke |
| 26 | Farbübergänge zwischen Sections | sauberer Schnitt | – |
| 27 | Hero-Variante | **A** klar besser | A gesetzt, B als Reserve |
| 28 | Weglassen-Liste der Animationen | einverstanden | – |
| 29 | Werkzeugkarten | als Variante bauen | Section Digital mit «Karten» und «Liste» |
| 30 | Breakpoints | von ROWAPA hinzugefügt | aktiv; Fehler `padding-global` (Theme ab 1920 px) gefunden und behoben |
| 31 | Erfolge vor ROWAPA Digital | ja (Dramaturgie) | umgestellt |
| 32 | Kennzahl 100 % und «die Mobiliar Ausserrhoden» | beide bestätigt | unverändert |

Commit b2000a2.

## 5. Medien, Logos und Repository

| # | Anliegen | Entscheid / Ergebnis |
|---|---|---|
| 33 | Pull Request: Was tun? | Claude erstellt und aktualisiert PRs selbst: [PR #2](https://github.com/ROWAPA-Konzepte/ROWAPA-Website-2027-Automation/pull/2). Merge nur mit Freigabe |
| 34 | CI-Daten, Filme und Bilder aus `rowapa-website` | 34 Medien übernommen, Assets in 10 Ordnern sortiert |
| 35 | Offizielle Logo-Dateien von ROWAPA | eingesetzt (Navigation, Footer), Favicon und Webclip vorbereitet (Commit be651c9) |

## 6. Entscheide vom Abend

| # | Frage | Entscheid | Umsetzung |
|---|---|---|---|
| 36 | ROWAPA Digital | **Karten** | Variante «Karten» aktiv |
| 37 | Staging veröffentlichen | **ja** | veröffentlicht auf `rowapa-website-2027-automation.webflow.io` (nur Webflow-Subdomain) |
| 38 | Mobile kürzen | **ja** | Bento-Karten ohne Text, Insights 2 Karten (rund 900 px kürzer) |
| 39 | Pull Request beobachten | **ja** | Claude reagiert auf Kommentare im PR |
| 40 | Backup | **jetzt** | 4-Datei-Backup vom 25.10.2026 (in der Git-Historie, Commit 64d2f0c) |

## 7. Dokumentation und Feedback-Runde 3

| # | Frage | Entscheid | Umsetzung |
|---|---|---|---|
| 41 | Braucht es Backup-Runden? | **Nein.** Webflow sichert die Website, Git die Doku | laufend gepflegte Dokumente: `00_start_hier.md`, `00_entscheide.md` (dieses Dokument), `07_benutzerhandbuch.md`, `00_webflow-ids.md`. Regel in `CLAUDE.md` |
| 42 | Backup-Ordner 2026-10-25 | **überführen** | Inhalte in die laufenden Dokumente verschoben; PDFs und Konzeptpapier entfernt (bleiben in der Git-Historie) |
| 43 | Kurzfassung für Dritte | **nein** | – |
| 44 | Netzwerk der Cloud-Umgebung | Webflow freigegeben | Staging live geprüft: Laufband mit Pause beim Darüberfahren und Hover-Video funktionieren |
| 45 | Textänderungen direkt in Webflow | von ROWAPA vorgenommen, beim nächsten Veröffentlichen übernehmen | Hero-Kicker «Beratung · Training · Digitale Lösungen»; Kartentitel «Mitarbeiterperformance & Potenzial», «Führung & Teams», «Recruiting & Mitarbeiterbindung» |
| 46 | Feedback-Runde 3 zur Staging-Seite | Einschätzung von Claude vor dem Bau | Entscheide 47–52 |
| 47 | Kennzahl Trainerteam | **150 Jahre** (bestätigt) | unverändert |
| 48 | Logo-Titel, Erfolge-Slider (5 Stimmen im grossen Zitat, Karten bleiben), Video in Lightbox, Linktext Recruiting, Themen-URLs in Stufe 4 anpassen, Staging veröffentlichen | wie von Claude vorgeschlagen | nach Freigabe der Technik |
| 49 | Punktfiguren auch in den vier Themenkarten | **ja**, zusammen mit Vertriebsperformance | Figuren in der Bildsprache der ersten Fassung |
| 50 | ROWAPA Digital: Animation | lieber **eigenständig laufend, ohne Scroll-Abhängigkeit**; ob «Fluss in die Karten» dazukommt, schlägt Claude vor (Massstab: ruhiges, editoriales Gesamtbild) | Vorschlag von Claude ausstehend |
| 51 | Insights und alles Weitere | passend zum editorialen Auftritt, nichts Verspieltes; Claude entscheidet im Zweifel zugunsten von Ruhe | – |
| 52 | Technik | präzise, über Webflow beeinflussbar, gute Qualität, keine längeren Ladezeiten | Technikvorschlag von Claude vor dem Bau |
| 53 | Vorschlag Digital (Kugel und Orbit ohne Fluss, stille Verbindung beim Darüberfahren), Ruhe-Leitlinie, Technik, Muster zuerst | **freigegeben** | Muster gebaut, siehe `06_stufe2_startseite.md` Kap. 11 |
| 54 | Kräuseln unter der Maus im Punktemeer | **bleibt** (Header und Footer) | umgesetzt |
| 55 | Muster | Header-Punktemeer, Titelzeilen, Lösungen mit fünf Punktfiguren, Logo-Titel weg, Erfolge-Slider, Video-Knopf, Footer-Punktemeer | auf Staging veröffentlicht (Webflow-Subdomain) |
| 56 | Figuren als PNG | Claude: alle Punktfiguren als transparente PNG, Animation aus Bildausschnitten (kein zweiter Download); Treppe Vertriebsperformance neu gerendert, Verlauf als Gestaltung | umgesetzt, Skript 1.1.0 |
| 57 | Scroll-Hinweis im Header | Claude: ausgeblendet, über dem bewegten Punktemeer nicht lesbar | bleibt im Designer, jederzeit wieder einblendbar |

## 8. Rest der Feedback-Runde 3

| # | Anliegen | Entscheid | Ergebnis |
|---|---|---|---|
| 58 | Muster auf Staging | **«passt alles so»** | Rest im gleichen Stil gebaut (Entscheide 63–66) |
| 59 | Namen «Simon J.» und «Antonio M.» | **freigegeben** | bleiben so |
| 60 | Ungenutzte Assets | **Löschen freigegeben** | 5 Assets gelöscht: nachgebaute Logos `6ade12d2c8e942edb5039875`, `6ade12d28e540fa263969738`, `6ade12d2c1ea8d82f92a0b3d`; alte Vertriebsperformance-Grafiken `6ade2961405d5ecd5757d4d5`, `6ade63eb6561c3d017194ca8` |
| 61 | Startbildschirm: Unterkante des Logo-Bands = Unterkante des Fensters, auf jedem Format | **ja**, der Header darf dafür höher werden | Hülle `startscreen_wrapper` (Höhe Fenster minus Navigation), Hero füllt den Rest. Geprüft auf 9 Formaten von 375×667 bis 2560×1440: Abstand 0 |
| 62 | Video «Wer wir sind» | Link `https://vimeo.com/738627796` | ROWAPA setzt ihn von Hand in der Lightbox (Benutzerhandbuch 2.15) |
| 63 | Zähler «Was uns antreibt» | Claude: zählt einmal beim ersten Sichtbarwerden in 1,6 s bis zum Wert aus Webflow | Skript 1.2.0 |
| 64 | Treppe «Unser Vorgehen» | Claude: Stufen bauen sich nacheinander auf, die Phase in der Liste leuchtet dazu in Plum; danach steht Phase 01. Darüberfahren oder Klick auf eine Phase (oder eine Stufe) hebt deren Stufe hervor. Phasennummern neu mit Rahmen, nur die aktive Phase in Plum | Skript 1.2.0, Bild als transparentes PNG neu gerendert |
| 65 | ROWAPA Digital | Claude: Kugel dreht sich langsam (eine Umdrehung in 70 s), die fünf Kacheln ziehen ruhig auf der Bahn (150 s) und halten beim Darüberfahren. Karte und Kachel sind verbunden (Kachel in Plum, feine Linie zur Kugel). Auf dem Handy stehen die Kacheln. Kacheln, Bahn und «Wissensplattform» sind native Webflow-Elemente; Symbole und Schrift grösser | Skript 1.2.0 |
| 66 | Insights | Claude: editoriale Reihe mit 6 Beiträgen, 3 sichtbar (Tablet 2, Handy 1 mit Anschnitt), Pfeile und feine Fortschrittslinie; wischen und scrollen gehen auch ohne Skript. 3 Beiträge aus der ersten Fassung ergänzt (Erfahrungsbericht CAS, Selbstführung als Lösung, Generationsmanagement); Auszüge aus dem Titel abgeleitet | Aufbau entspricht der späteren CMS-Liste (Stufe 3). Auszüge [ROWAPA bestätigen] |
| 67 | Ladezeit nach dem Rest | Messung (Chromium, Mittel aus 3 Läufen) | Desktop 916 KB (vorher 955 KB), LCP 620 ms; Handy 441 KB, LCP 604 ms. Kugel rund 30 Bilder pro Sekunde, keine langen Aufgaben |

## 9. Feedback-Runde 4 (25.10.2026, Nacht)

| # | Anliegen | Entscheid | Ergebnis |
|---|---|---|---|
| 68 | Vorgehen bei Varianten | **Variantenseite ja** | interne Seite `/varianten` (Entwurf im Navigator, auf Staging veröffentlicht, nicht verlinkt) mit Umschaltleiste je Thema |
| 69 | «Digitale Werkzeuge» | **heisst «Digitale Lösungen», auch im Fliesstext** | Titel, Einleitung, Hinweis, Vorgehen Phase 03, FAQ angepasst |
| 70 | Team: «es gibt noch weitere» | **«weitere» statt Zahl** | Team als Reihe mit Anschnitt (4,4 Karten sichtbar), Pfeile, Fortschrittslinie, Schlusskarte «Weitere Teammitglieder · Ganzes Team kennenlernen» → /team |
| 71 | CAS-Daten | **25. Februar bis 6. Dezember 2027** | Chip im Blickpunkt und Varianten |
| 72 | Schriftgrössen | **ja, anheben** | Fliesstext 17 px (vorher 16), klein 15, sehr klein 13, Kicker 13–15, Buttons 14, Navigation 15, Labels nicht unter 12 px. Liste im Benutzerhandbuch 2.22 |
| 73 | Section Digital in Webflow pflegen | Claude: alle Texte und Buttons als Properties der Komponente | Kicker, Titel, Einleitung, Hinweis (Titel, Text), Buttons 1 und 2 (Text, Link), Beschriftung Kugel |
| 74 | Kugel schneller | Claude: Umdrehung 40 s (vorher 70), Kacheln 90 s (vorher 150) | Skript 1.3.0 |
| 75 | Symbole auf dunklem Grund | Claude: Kacheln Great Serpent mit Rand Sea Cliff, weisse Symbole (38 px), Schatten | Varianten B und C auf der Testseite |
| 76 | Bahn und Namen berühren die Kugel nie | Claude: Bahn flacher und tiefer, Kugel kleiner; Namen der oberen Kacheln stehen über der Kachel | Klasse `orbit_tile-name is-oben`; das Skript setzt sie während der Bewegung selbst |
| 77 | Kachel ↔ Karte in beide Richtungen | Claude: Darüberfahren über eine Kachel hebt die Karte hervor (Rand Plum) | Klasse `card is-verbunden`, Skript 1.3.0 |
| 78 | Ruhigere Treppe | Claude: zwei Modi als Varianten (A «ruhig»: steht fest, baut einmal auf; B «Tabs»: Phasen als Reiter) | Startseite bleibt bis zum Entscheid beim heutigen Ablauf |
| 79 | Figuren in «Lösungen für Unternehmen» schneller | Claude: Aufbau rund 40 % kürzer, kleinere Staffelung | Skript 1.3.0 |
| 80 | Mauszeiger | Claude: Punkt Plum mit feinem Ring, drei Varianten (A schlicht, B Ring wächst mit «Öffnen», C passt sich dem Grund an) | nur auf der Testseite eingeschaltet; nur bei Maus, nie in Formularfeldern |
| 81 | Megamenü | Claude: drei Varianten (A erste Fassung mit Vorschau, B editorial mit grosser Vorschau, C Wegweiser mit Figuren) | Testseite; das echte Menü wird nach dem Entscheid umgebaut |
| 82 | Im Blickpunkt prominenter | Claude: drei Varianten (A Bildband mit Ribbon, B Eckdaten, C schmales Band weiter oben) | Testseite |
| 83 | Fehler Variantenumschalter | Claude: Die Kombiklasse `is-aktiv` wurde beim Veröffentlichen global ausgegeben und färbte aktive Elemente vollflächig Plum. Umschalter nutzt jetzt die eigene Klasse `var_wahl-an` | Skript 1.3.1; geprüft: keine globale Regel `.is-aktiv` mehr |

## 10. Feedback-Runde 5 (25./26.10.2026, Nacht)

| # | Anliegen | Entscheid | Ergebnis |
|---|---|---|---|
| 84 | Unser Vorgehen | **Variante A (ruhig)**, Grafik baut sich in der Mitte auf und läuft mit dem Scroll mit, Startposition mittig zwischen oberer und unterer Linie | Überschrift über das Raster gehoben, Hinweis darunter; Grafik `align-self: center`, klebt mittig im Fenster (`top: calc(50vh - 12.5rem)`); Aufbau startet, wenn die Grafik in der Bildmitte steht; `data-modus="ruhig"`. Gemessen: Mitte Grafik = Mitte Phasenliste (0 px) |
| 85 | Kacheln Digital | **Variante A**, gleiche Abstände zwischen den Symbolen | Kacheln stehen nach gleicher Weglänge auf der Bahn statt nach gleichem Winkel, auch während der Drehung; Startplätze im Designer angepasst. Abstände vorher 34–47 (±17 %), jetzt 252–290 px (±7 %, Rest durch die Tiefenwirkung) |
| 86 | Megamenü | **Variante A** | in die echte Navigation übernommen: vierte Spalte mit Vorschau (Bild, Titel, Satz), wechselt beim Darüberfahren; neun Vorschaukarten als native Elemente |
| 87 | Mauszeiger | Ring passt sich dem Grund an (dunkel auf hell, hell auf dunkel), Punkt immer Plum | Skript 1.4.0 liest die Hintergrundfarbe unter dem Zeiger; auf Fotos heller Ring mit feiner Kontur. Site-weit eingeschaltet über das Attribut an der Navigation; nur mit Maus |
| 88 | Im Blickpunkt | heutigen Aufbau behalten, Titel auf einer Linie, Foto nur im mittleren Bereich, «gerne noch ein paar Varianten» | Varianten D (Fotoband in der Mitte), E (heutiger Aufbau, Foto füllt die rechte Hälfte), F (breites Mittelband mit Eckdaten) auf `/varianten` |

## 11. Feedback-Runde 6 (26.10.2026, Nacht)

| # | Anliegen | Entscheid | Ergebnis |
|---|---|---|---|
| 89 | Im Blickpunkt | **Variante D** | auf `/home-v2`: Kicker und Titel einzeilig über einem Fotoband, Text, Daten und Buttons auf dem Band (Verlauf von links). Handy: Titel zweizeilig, Verlauf von oben |
| 90 | Megamenü | **über die ganze Seitenspalte** | so breit wie der Inhaltsbereich (gemessen: bündig mit Logo und Kontakt-Button), Vorschau grösser |
| 91 | Unser Vorgehen | **fest, optisch mittig, mit Farbaufbau** (Empfehlung Claude) | Grafik läuft nicht mehr mit; mittig zur Phasenliste, 5 % höher als rechnerisch (Schwerpunkt der Grafik liegt 9 % unter der Mitte). Aufbau in der Bildmitte, Stufen leuchten nacheinander Plum, Phase links leuchtet mit, danach Phase 01 |
| 92 | Digitale Lösungen | Kacheln schneller, Halt nur über den Textboxen | Kugel 24 s, Kacheln 45 s je Runde; Halt nur über den Karten darunter, Kachel-Hover hebt die Karte hervor, dreht aber weiter (Skript 1.4.1) |
| 93 | Look & Feel | Struktur und Dramaturgie bleiben, keine Zusammenlegung, Bewegung im Rahmen; Diagonal-Ribbon probieren | Entwurf `/home-look` (Kopie der Startseite): grössere Display-Titel, Diagonal-Ribbon an drei Section-Ecken, feine Swiss-Rasterlinien in drei hellen Sections. `/home-v2` unverändert |

| 94 | Look-&-Feel-Varianten | «gerne verschiedene Varianten zeigen, auch Benchmark recherchieren» | drei Richtungen auf Kopien der Startseite: A Editorial Swiss `/home-look`, B Kontrast & Statement `/home-look-b`, C Hell & präzise `/home-look-c`. Umgesetzt mit Test-CSS nur auf diesen Seiten (`exports/look-entwuerfe/`); die gewählte Richtung wird danach nativ in Webflow-Klassen gebaut, ohne Custom Code |

## 12. Feedback-Runde 8 (26.10.2026): Layout-Varianten

| # | Anliegen | Entscheid | Ergebnis |
|---|---|---|---|
| 95 | Layout | «alle gleich aufgebaut (links Text und Titel)», 2–3 Varianten mit anderer Anordnung; Simon-Kucher und Unterseiten als Referenz, nicht 1:1 | drei Layout-Entwürfe mit unveränderter Dramaturgie und Texten: D «Bühne & Reiter» `/layout-d`, E «Editorial versetzt» `/layout-e`, F «Mosaik & Flächen» `/layout-f`. Benchmark: Simon-Kucher (Startseite, Financial Services, Banking, Versicherungen, Sales, Insights, Karriere, Kontakt), Bain, BCG, Oliver Wyman, Roland Berger, Korn Ferry, Pictet, Vontobel; nicht erreichbar: McKinsey, Julius Bär, zeb (Schutz gegen automatische Zugriffe bzw. Proxy) |
| 96 | Umsetzung der Entwürfe | Claude: Entwürfe als HTML/CSS im Repository (`exports/layout-entwuerfe/`), per Lader nur auf den drei internen Seiten eingeblendet | die gewählte Variante (oder Mischung) wird danach nativ mit Webflow-Elementen und Client-First-Klassen gebaut; kein Custom Code im Endprodukt ausser den bestehenden Grafik-Modulen |

## 13. Feedback-Runde 9 (26.10.2026): Kombi-Varianten auf der heutigen Startseite

| # | Anliegen | Entscheid | Ergebnis |
|---|---|---|---|
| 97 | Kombination statt Neuaufbau | heutige Startseite behalten, Punktemeer nicht aufgeben, aber mit Fotos wie D; Logos aus E, «Was uns antreibt» aus D, Team aus F, Titel wie D (gross, Plum-Strich); mehr unterschiedliche Bewegung: Farbfluss der Sections von links nach rechts, animierte Diagonal-Elemente, neue Darstellung der Lösungen | zwei Varianten auf Kopien von `/home-v2`: **G** `/kombi-g` und **H** `/kombi-h`. Echte Seite mit allen Grafiken (Punktemeer, Figuren, Treppe, Orbit, Zeiger), darüber ein Aufsatz aus `exports/layout-entwuerfe/kombi.css` und `kombi.js` |
| 98 | Hero | Punktemeer bleibt | G: Fotofenster rechts mit 45°-Kante und Plum-Ribbon, das Foto löst sich unten ins Punktemeer auf. H: Foto über die ganze Breite, Text und Wellen bleiben frei, Ribbon läuft oben rechts ein, Hero in voller Fensterhöhe. In beiden wechselt das Foto mit der hervorgehobenen Zeile (Vertriebsleistung / Führung / Fluktuation) |
| 99 | Bewegung | Leitlinie «kein Farbfluss» (LIESMICH Grafik) wird auf Wunsch ROWAPA geöffnet [bei Wahl bestätigen] | G: Farbflächen wischen gerade von links nach rechts ein, Ribbons zeichnen sich einmal in die Section-Ecken. H: Farbflächen laufen mit schräger Kante ein, Ribbons gleiten mit dem Scrollen durch die Ecken |
| 100 | Lösungen für Unternehmen | neue Anordnung, gleiche Inhalte und Figuren | G: Vertriebsperformance gross links, die vier anderen Themen als Zeilen rechts (Plum-Kante beim Darüberfahren). H: Akkordeon aus fünf Spalten, eine ist offen, wechselt alle 5 s und beim Darüberfahren; Handy: Karten untereinander |

## 14. Feedback-Runde 10 (26.10.2026): Master Kombi G2

| # | Anliegen | Entscheid | Ergebnis |
|---|---|---|---|
| 101 | Master | **Kombi G** ist die Grundlage: Schriftgrössen und Titel (gross, Plum-Strich) gelten für die ganze Seite | Entwurf `/kombi-g2` (Kopie von `/home-v2`, Aufsatz `exports/layout-entwuerfe/kombi2.css` und `kombi2.js`) mit Umschaltleiste «Varianten vergleichen»: erster Knopf je Section = Entscheid, weitere = Gegenvorschläge |
| 102 | Hero / Referenzen | Hero bleibt wie in Kombi G (Fotofenster mit 45°-Kante über dem Punktemeer); Referenzen wieder als **Laufband** | Gegenvorschläge in der Leiste: Hero «G sauber» (ein Foto, keine Punkte darüber) und «Heute»; Referenzen «Raster (E)» |
| 103 | Was wir tun | Anordnung G, **heller Hintergrund**, Grau erst beim Darüberfahren | Section weiss, Themenzeilen werden beim Darüberfahren Pastel Snowbank mit Plum-Kante; Gegenvorschläge: Akkordeon (H), Kacheln wie heute |
| 104 | Was uns antreibt | **Look B** (grosse Kennzahlen), Titel in der Grösse von G, ohne Plum-Balken über der Section | umgesetzt; Gegenvorschlag Layout D |
| 105 | So arbeiten wir | wie G | Phasen werden beim Darüberfahren grau (gleiches Prinzip wie «Was wir tun») |
| 106 | Unsere Erfolge | **Layout E** mit versetztem Fotorahmen, als Slider | bestehender Webflow-Slider (5 Geschichten) im Fotorahmen-Layout, Zitat gross; die drei kurzen Zitate darunter ohne Kartenrahmen; Gegenvorschlag «Heute» |
| 107 | Über uns | Mosaik aus G, mit Hinweis, dass das Team grösser ist | fünfspaltiges Mosaik mit Kachel «150 Jahre Wissen und Erfahrung im Trainerteam» und Kachel «Weitere Trainerinnen, Trainer und Partner · Lernen Sie unser ganzes Team kennen» (führt auf `/team`); Gegenvorschlag Reihe wie heute |
| 108 | Meine Entwicklung | 2–3 Varianten nach D und F, Text muss sicher lesbar sein | A Text im Bild mit kräftigem Verlauf (D), B Text unter dem Bild (D), C wechselnde Zeilen Foto/Text (F); zum Umschalten |
| 109 | Im Blickpunkt (CAS) | Foto links bis zur Mitte, Text rechts; Farbfläche als **einzige Einblendung** der Seite | Foto randabfallend links, Text rechts; Farbfläche wischt von der Bildkante nach rechts ein (Gegenvorschlag: blendet ein), Text erscheint danach |
| 110 | Bewegung | Farbfluss nur noch im CAS-Block; bleiben: Strich unter den Titeln, Team-Kacheln nacheinander, Unterstreichung im Header; Ribbons stehen fest | umgesetzt; Punktemeer, Treppe, Orbit, Zähler unverändert. Ersetzt die Farbfluss-Notiz aus #99 |
| 111 | Gut zu wissen, Kontakt | **Look B**: Gut zu wissen hell, Kontakt dunkel | Kontakt Manganese Deep, Kicker Sea Cliff; Gegenvorschlag «Hell wie heute» |
| 112 | Vorgehen | zuerst Entwurf G2 auf Staging, nach Freigabe native Umsetzung auf `/home-v2` | Entwurf live; native Umsetzung folgt nach Freigabe |

## 15. Feedback-Runde 11 (26.10.2026): Kombi G2 nachgeführt

| # | Anliegen | Entscheid | Ergebnis |
|---|---|---|---|
| 113 | Punktfiguren «Was wir tun» | Aufbau der Figuren wieder sichtbar machen | Ursache: in der Zeilen-Anordnung waren die Figuren nur 112 × 96 px gross, der Aufbau lief, war aber kaum zu sehen. Jetzt 192 × 144 px; Handy wie heute ohne Figur |
| 114 | Hero / Referenzen / Was wir tun / Antrieb / Erfolge / Über uns | Hero **wie heute** (nur Punktemeer), Laufband, Zeilen, Look B, Fotorahmen, Mosaik | als Standard gesetzt; Kombi G bleibt als Alternative in der Leiste |
| 115 | Meine Entwicklung | **C** (Zeilen), Frage nach drei dezenten Farbtönen | C als Standard, Zeilen etwas niedriger (22 rem); Alternative «C mit drei Farbtönen»: Section weiss, Textflächen in den CI-Tönungen Sea Cliff Tint, Pastel Snowbank, Plum Tint |
| 116 | Im Blickpunkt | Farbfläche **blendet ein** | Standard |
| 117 | Insights | Fortschrittsbalken nicht nötig | ausgeblendet, Pfeile bleiben; Alternative «mit Balken» |
| 118 | Kontakt | **hell** | Standard (wie heute), dunkel als Alternative |
| 119 | Digitale Lösungen | wirkt zu schwer, Wissensplattform-Kasten; 2–3 leichtere Darstellungen | «Liste neben der Kugel» (Vorschlag: Lösungen als aufklappbare Zeilen, mit den Orbit-Kacheln verbunden, Wissensplattform als schmale Notiz unter der Kugel), «Kugel in der Mitte» (zentriert, Lösungen als schlanke Reihe ohne Beschreibung), «Kompakt» (Aufbau wie heute, Wissensplattform einzeilig, Karten ohne Beschreibung), «Heute». Texte unverändert, nur ein- oder ausgeblendet |
| 120 | Titel immer links | zu statisch? Simon-Kucher recherchieren | Befund: Simon-Kucher setzt Titel fast immer links, aber nie zentriert; sie springen im Raster (linker Rand, um ein Viertel eingerückt, schmale Seitenspalte). Vorschlag «Im Raster versetzt»: Vorgehen um ¼ eingerückt, Meine Entwicklung ab 5/12, Insights mit Titel in der Seitenspalte; CAS rechts und Gut zu wissen mit Seitenspalte waren schon so. Alternative «Einheitlich links» |

## 16. Feedback-Runde 12 (26.10.2026): finaler Entwurf Kombi G2

| # | Anliegen | Entscheid | Ergebnis |
|---|---|---|---|
| 121 | Digitale Lösungen | Aufbau wie heute; Wissensplattform so knapp wie in «Kompakt»; die fünf Karten besser lesbar und heller, damit der Block nicht so dunkel wirkt; dazu 2–3 neue Varianten | A «Heute, Karten hell» (Wunsch ROWAPA): Wissensplattform einzeilig, Karten Sea Cliff Tint mit dunkler Schrift. Neu: B Karten Great Serpent mit weisser Schrift und Symbolen; C dunkle Bühne oben, weisse Karten mit Symbolen im hellen Teil darunter; D ganze Section hell (Sea Cliff Tint), Kugel auf dunkler Fläche, weisse Karten mit Symbolen. Wahl offen |
| 122 | Meine Entwicklung | **C mit drei Farbtönen**; Köpfe nicht abschneiden, mindestens die Augen immer sichtbar, auch in den Videos | Bildausschnitt für Foto und Video auf 19 % von oben gesetzt (Augen liegen in allen Fotos und Video-Bildern bei 20–40 % der Höhe); geprüft am Desktop und Handy |
| 123 | Was wir tun | Linktext «Mehr zu …» wiederholt den Titel | Linktext entfällt, die ganze Zeile ist der Link, Pfeil (Plum) direkt hinter dem Titel, der beim Darüberfahren nach rechts rückt. Der Button «Zur Vertriebsperformance» in der grossen Karte bleibt |
| 124 | Titel-Anordnung | Titel nicht versetzen, alles wie bisher, **ausser Insights**: Titel in der Seitenspalte, ohne Fortschrittsbalken | umgesetzt |
| 125 | Entwurf | finaler Entwurf | Umschaltleiste zeigt nur noch «Digitale Lösungen»; alle anderen Sections sind fest |

## 17. Feedback-Runde 13 (26.10.2026): nativer Bau Kombi G2 auf /home-v2

Der finale Entwurf ist jetzt mit Webflow-Klassen, Komponenten-Varianten und Interactions auf `/home-v2` gebaut. Die Entwurfs-Skripte (kombi2.js/.css) laufen dort nicht mehr.

| # | Anliegen | Entscheid | Ergebnis |
|---|---|---|---|
| 126 | Digitale Lösungen | **C «Dunkle Bühne, helle Karten»** | Section oben dunkel (Kugel, Text, Buttons), unten 15 rem weiss; fünf weisse Karten mit Symbol (Card Feature, Variante «Weiss · Symbol (Digital)»); Wissensplattform einzeilig (`note-box.is-kompakt`) |
| 127 | Klick auf Orbit-Symbol | passende Karte soll sich bewegen | Karte hebt sich 1,4 s an (Plum-Rand, Schatten; Klasse `card.is-angetippt`), wird ins Bild geholt, falls sie ausserhalb liegt. Den Link zur Unterseite trägt die Karte. Skript 1.5.0 |
| 128 | Insights | Slider bleibt, **ohne Scrollbalken** | Balken ausgeblendet (Style `scrollbar-width: none` an `insights_reihe`, für ältere Browser zusätzlich im Skript). Blättern per Wischen, Trackpad und Pfeilen |
| 129 | Insights-Hinweise (Sales, Leadership) | nicht im Foto; weglassen oder neben das Datum? | **Neben dem Datum** (Empfehlung umgesetzt): Die Themenzuordnung hilft beim Überfliegen und wird mit dem CMS (Stufe 3) zum Filter; im Foto war sie schwer lesbar und verdeckte das Bild. Zeile `card_meta`: Tag in Plum-Versalien, dann Datum · Format |
| 130 | Nach oben | auf jeder Seite, sobald man unten ist | Knopf unten rechts (Plum, 48 px), erscheint nach gut einer Bildschirmhöhe, Klick scrollt sanft an den Anfang. Liegt in der Footer-Komponente, also auf jeder Seite. Skript 1.5.0, 1.5.1 springt direkt, falls sanftes Scrollen bei hoher Last nicht anläuft |
| 131 | Schriftgrösse Header | noch passend zu den grösseren H2? | H1 vergrössert: `clamp(2.5rem, 1.1rem + 4.6vw, 6rem)`, 1440 px Fenster: 84 px statt 72 px (H2 62 px), 1920: 96/68, 1366: 80/60, 1024: 65/50. Auf dem Handy kann die H1 nicht wachsen («Vertriebsleistung.» muss in eine Zeile passen); dort H2 etwas kleiner (32 statt 36 px, H1 40 px). Der Startbildschirm passt weiter: Logos schliessen mit der Fensterunterkante ab |
| 132 | Abstände | Ober- und Unterkante in allen Formaten sauber | alle Sections mit demselben Innenabstand (`padding-section-large`), Desktop 125 px oben und unten; geprüft auf der veröffentlichten Seite bei 1920, 1440, 1366, 1280, 1024, 992, 768, 390 px. Korrigiert: Navigation bei 992–1439 px kompakter (KONTAKT war bei 1024 px abgeschnitten), Kennzahlen bleiben einzeilig («100 %» brach bei 1024 px um), Digital-Karten ab 992 px fünf nebeneinander (vorher 4 + 1), Lösungen-Zeilen bei 992–1439 px mit Kicker über dem Titel (Text war bei 1024 px nur 90 px breit). Wo zwei weisse Flächen aufeinandertreffen (Digital → Über uns → Meine Entwicklung), entstand doppelter Weissraum (rund 250 px): Die zweite Section hat jetzt den halben Abstand oben und eine feine Linie (`is-anschluss`) |
| 133 | Ribbons | statisch, dezent | Lösungen oben rechts, Antrieb unten links, Kontakt oben rechts (unten links kreuzte die Telefonnummer). Team: ausgeblendet (Eigenschaft «Ribbon anzeigen» aus), weil es nach dem Abstandsausgleich den Button «Team kennenlernen» kreuzte; jederzeit wieder einschaltbar. Auf Tablet und Handy entfällt «unten links» (lag über den Kennzahlen), die übrigen sind dort klein (10 rem), weil das Kontakt-Ribbon bei 768 px sonst den Titel kreuzte |
| 134 | Animationen | alle sollen laufen | geprüft auf der veröffentlichten Seite: Punktemeer Header und Footer, Hero-Zeilen mit Unterstreichung, Logo-Laufband, Titel-Strich (11 von 11), Punktfiguren, Zähler (20 · 100 % · 150), Treppe, Kugel und Kacheln, Team-Kacheln nacheinander, Farbfläche CAS (einzige Einblendung), Hover-Videos, Kachel-Klick, Nach oben. Keine Skriptfehler, kein seitliches Überlaufen |

## 18. Feedback-Runde 14 (26.10.2026): Header-Satz ruhig, Erfolge als ein Block

| # | Anliegen | Entscheid | Ergebnis |
|---|---|---|---|
| 135 | Header (zurückgenommen, Nr. 138) | Satz unter dem Titel lag auf dem Wellenkamm des Punktemeers; dunkler, nicht ruhiger | weicher dunkler Verlauf hinter dem Satz (Element `hero_abdunkler` in der Hero-Komponente). Die Punkte werden dort gedämpft, die Bewegung bleibt, rechts ist das Punktemeer voll sichtbar. Wandert mit dem Text auf allen Formaten mit; Variante «B · Editorial» ohne |
| 137 | ROWAPA Digital | Beim Darüberfahren über ein Symbol soll die ganze Karte farbig werden, in einem abgeschwächten Plum; der Rahmen war kaum sichtbar | Karte wird **gedämpftes Plum** (#B93E70, Variable «Plum Gedaempft») mit weisser Schrift, hebt sich leicht an. Gilt für Darüberfahren über das Symbol und über die Karte selbst. Technisch: neuer Theme-Modus «Plum» (Texte, Kicker, Link weiss; Kontrast weisse Schrift 5:1). Verglichen mit einer zarten Variante (helles Plum, dunkle Schrift), die gedämpfte ist deutlich besser sichtbar |
| 136 | Unsere Erfolge | Titel bis Name des Zitatgebers sollen auf jedem Format in einem Bildschirm stehen | Foto an die Fensterhöhe gekoppelt (`max-height: 100svh − 20 rem`, Tablet − 18 rem, Handy 16:10), Text oben, Zitat in der Mitte, Name auf Höhe der Fotounterkante, Punkte und Pfeile rechts daneben (Handy nur Punkte). Tablet neu zweispaltig wie Desktop. Folien gleich hoch (`erfolge_maske`). Handy: «Alle Referenzen» neben dem Titel. Gemessen Titel bis Name: 1920 px 925 von 1007 px, 1440 750/827, 1366 639/695, 1280 668/727, 1024 570/695, 768 528/959, 390 684/779 (Fensterhöhe ohne Navigation) |

## 19. Feedback-Runde 15 (26.10.2026): nur Besprochenes, Linien, Header-Zeilen, Titelgrössen

Hinweis ROWAPA: Es wird nur gebaut, was besprochen ist. Eigene Ideen kommen als Vorschlag.

| # | Anliegen | Entscheid | Ergebnis |
|---|---|---|---|
| 138 | Header-Verlauf (Nr. 135) | nicht gut, wieder entfernen | entfernt, Header wie vorher |
| 139 | Header-Zeilen | jede Zeile wie früher auf einer Zeile | Textblock bis 62 rem breit, Handy-Schrift aus der Fensterbreite gerechnet; geprüft in 15 Breiten von 1920 bis 320 px: alle drei Zeilen einzeilig, Grösse sonst unverändert |
| 140 | Rote Linien | überall gleich dick wie bei «Unser Vorgehen» | alle roten Trennlinien 1 px (Zeilen «Was wir tun», Digital-Karten, Linie beim Darüberfahren, Rahmen beim Klick); vorher 3–4 px |
| 141 | Meine Entwicklung | Haupttitel in den Feldern prominenter | 1440 px 47 statt 41 px, ab 1536 px 48 px; vorher fielen sie ab 1920 px auf 28 px zurück (Fehler behoben) |
| 142 | Schriftgrössen | Muster prüfen | Inventar aller Sections in fünf Breiten erstellt. Abweichung vom vereinbarten Fliesstext 17 px behoben (Digital-Karten 16, Meine Entwicklung 18 → 17). Übrige Stufen einheitlich: H2 62 px (1440), Kicker 14 px, Untertitel 19 px, Kartentitel 24 px |
| 143 | Section-Höhen | jede Section je Bildschirm sauber | vermessen in sieben Formaten; Ergebnis und Vorschlag siehe Bericht Runde 15 (Lösungen, Vorgehen, Digital, Team, Meine Entwicklung sind auf keinem Format eine Bildschirmhöhe) |

## 20. Feedback-Runde 16 (26.10.2026): Megamenü reparieren

Auftrag ROWAPA: «Erstens Mega-Menü reparieren.» Die weiteren Punkte (gleiche Darstellung für die anderen Menüs, Grösse je Format, Inhalte straffen) zuerst nur als Rückmeldung, nicht bauen.

| # | Anliegen | Entscheid | Ergebnis |
|---|---|---|---|
| 144 | Megamenü nicht anklickbar | reparieren | Drei Ursachen behoben: (1) zwischen Menüpunkt und Panel lag eine Lücke von 15 px, die Menüpunkte füllen jetzt die ganze Leistenhöhe; (2) die drei kleinen Menüs standen in der Bildschirmmitte statt unter ihrem Menüpunkt (Zusatzklasse `is-schmal`); (3) Webflow öffnet ein Menü nur über dem Menüpunkt selbst. Wer schräg nach links oder rechts unten zum Link fährt, streift kurz die Leiste neben dem Menüpunkt, dann schliesst das Menü. Lösung: unsichtbare Brücke von 24 px über dem Panel (`navbar_dropdown-list`: Abstand oben −1.5 rem, Innenabstand oben 1.5 rem, Hintergrund transparent), Schliessverzögerung 300 ms |
| 145 | Logo, Sprachwahl, Kontakt-Button | müssen bei offenem Menü voll klickbar bleiben | auf Ebene 902 gelegt, über dem offenen Menü (Webflow setzt 900/901) |
| 146 | Prüfung | — | live geprüft: alle 31 Links der vier Menüs in 1920, 1440, 1280 und 1024 px, jeweils schräg langsam und schnell angefahren (248 von 248 Klicks ok); Wechsel zum Nachbarmenü ok; Logo, Sprachwahl und Button bei offenem Menü klickbar; Handy-Menü in 390 und 768 px unverändert |

## 21. Feedback-Runde 17 (26.10.2026): Designer-Ansicht, Menüs, H2 Handy, Format-Vorschau

| # | Anliegen | Entscheid | Ergebnis |
|---|---|---|---|
| 147 | Designer zeigt Header und «Unsere Erfolge» verzogen | reparieren, ohne dass sich die Website ändert | **Slider:** Die Folienschiene war seit Runde 14 ein Raster (Grid), damit alle Folien gleich hoch sind. Die Website zeigt das richtig, der Designer nicht (alle Folien gequetscht nebeneinander). Auch ein ausgeschriebenes Raster half nicht. Neu: Flexbox auf `erfolge_maske`, Klasse `erfolge_folie` auf jeder Folie (schrumpft nicht, Höhe automatisch). Designer korrekt, Folien weiter gleich hoch (gemessen in 7 Formaten von 1920 bis 390 px). **Header:** Die leeren Unterstrich-Elemente `hero_bar` zeichnete der Designer als dicken Plum-Block über «Weniger Fluktuation.». Höhe begrenzt (`max-height` 0.07em, Überlauf versteckt): im Designer kein Block mehr, auf der Website unverändert (Linie 2 bis 6 px je nach Breite) |
| 148 | Menüs | gleiche Darstellung wie «Was wir tun», mit Vorschau rechts | So arbeiten wir, Über uns, Partner werden: Panel über die ganze Breite, Links links, Vorschau rechts (fest in Spalte 4). 11 neue Karten mit vorhandenen Bildern; 6 Texte aus der Startseite, 5 Entwürfe [ROWAPA bestätigen] (Texttabelle Rev. 7). Kombi `is-schmal` entfernt. Live geprüft in 1920, 1440, 1280 und 1024 px: alle 31 Links klickbar, jede Karte wechselt beim Darüberfahren |
| 149 | H2 auf dem Handy | verkleinern | bis 767 px `clamp(1.75rem, 1rem + 2.6vw, 2.25rem)`, bis 479 px `clamp(1.25rem, 0.5rem + 4.4vw, 1.75rem)`: 390 px H2 25 statt 32 px (H1 35), 320 px H2 22 (H1 28), 600 px H2 32 (H1 45) |
| 150 | Titelstriche und Header-Unterstreichung | bleiben | unverändert |
| 151 | Kartentitel Logbuch | «Ihr digitaler Begleiter im Verkauf» bestätigt | erledigt |
| 152 | Grösse je Format | je Ansicht programmieren; das Design muss nicht in allen Formaten gleich sein, jedes Format bekommt die Darstellung, die dort am besten wirkt; gilt auch für alle weiteren Seiten | Vorschau mit 8 Formaten (1920×1080 bis 390×844) als private Seite https://claude.ai/artifact/WpvkhkkFWftgsXgK9fVoDw, Umschalter «Darstellung: Heute / Vorschlag je Format». Ergebnis: heute passen 3–6 von 12 Sections in einen Bildschirm (Seite 13,7–20,4 Bildschirme), mit Vorschlag und Straffung 11–12 von 12 (10,6–12,5 Bildschirme). Werkzeug: `tools/format-vorschau/`. Vorschlag nur im Testbrowser nachgestellt, mit Mitteln, die Webflow nativ kann (Breakpoints nach Breite, an die Fensterhöhe gekoppelte Grössen). Umsetzung in Webflow nach Entscheid je Section |
| 153 | Inhalte straffen | nach Benchmark, als Variante zum Umschalten | in der Vorschau «Inhalt: Gestrafft» (Texte Original → Vorschlag auf der Vorschauseite) |
| 154 | Digital im Header | Variante A als Vorschau, ohne Obertitel | in der Vorschau «Header: Variante A»: ohne Obertitel, Leiste «ROWAPA Digital» mit fünf Symbolen unter dem Lead-Text |
| 155 | Lead-Text im Header | von ROWAPA im Designer geändert | heute im Designer: «Gemeinsam bewegen wir Menschen und Unternehmungen, datenbasiert, praxiserprobt, nachhaltig.» Hinweis: Die Begriffsregel sagt «Unternehmen» (nicht «Unternehmung»). [ROWAPA bestätigen] |

## 22. Feedback-Runde 18 (26.10.2026): Format-Vorschlag und Straffung nativ auf /home-v2

| # | Anliegen | Entscheid | Ergebnis |
|---|---|---|---|
| 156 | Vorgehen umsetzen | v2 mit den Anpassungen aktualisieren; für die Themenlinien-Szene später eine v3 anlegen; aufräumen erst nach dem Entscheid für die definitive Variante | `/home-v2` nativ umgebaut (Klassen, Breakpoints, Kombi-Klassen, Komponenten-Varianten), kein Custom Code. Sections nicht gelöscht, nur ausgeblendet, wo gestrafft |
| 157 | Abstände | an die Fensterhöhe koppeln | Section-Abstand `clamp(3rem, 9svh, 7rem)` oben und unten (ab 1920 nicht mehr fix 10rem), Anschluss-Sections oben `clamp(2rem, 5svh, 4rem)`, Kopf bis Inhalt `clamp(1.5rem, 4svh, 3rem)`. Header auf kleinen Laptops (992–1439) mit weniger Luft über dem Titel |
| 158 | Unser Vorgehen: Grafik | «Die Grafik soll sich im rechten Teil aufbauen, von der Mitte nach rechts, da nach oben mehr Platz ist; so kann sie grösser werden» | Treppe rechts neben Titel und Einleitung, die vier Phasen darunter in einer Reihe. Höhe höchstens `100svh - 28.5rem`. Tablet: Treppe zentriert über den Phasen (2 × 2), Handy: Phasen als Wischkarten, Treppe ausgeblendet. Fette Unterzeilen ausgeblendet, je Phase ein Satz |
| 159 | Digital: Symbole um die Kugel | «müssen kleiner werden, damit es sauber aussieht» | Kacheln, Symbole, Namen und Kugel-Beschriftung wachsen mit der Fensterhöhe (bei 1440×900 Kachel 50 statt 80 px). Orbit ab 1280 px; darunter Einleitung über die ganze Breite. Einleitung und Kartentexte gestrafft, Kartentexte nur ab 1920 und auf dem Tablet sichtbar, Tablet und Handy als Wischreihe |
| 160 | Female Empowerment | «Gesicht weiter nach oben, lieber oben anschneiden als unten» | Bildausschnitt von 50 % 19 % auf 50 % 45 %: Gesicht höher, oben angeschnitten |
| 161 | Insights | «Hier haben ROWAPA TV und Webinare noch Platz» | Die beiden Hinweise stehen ab 992 px links unter «Alle Inhalte», darunter wie bisher. Bildhöhe an die Fensterhöhe gekoppelt, Auszug 992–1919 ausgeblendet (eigene Kartenvariante «Insights Reihe») |
| 162 | Format | Feedback galt für 1440×900 | sinngemäss auf alle 8 Formate übertragen |
| 163 | Header | so lassen wie bisher (Variante A entfällt) | unverändert, mit Obertitel |
| 164 | Kartentexte Menü | in Ordnung | bestätigt (Texttabelle Rev. 7) |
| 165 | Lead-Text | «Unternehmen» ist gesetzt | «Gemeinsam bewegen wir Menschen und Unternehmen, datenbasiert, praxiserprobt, nachhaltig.» |
| 166 | Unsere Erfolge | gestrafft | Die drei Zitate unter dem Slider sind jetzt Folien 6–8 mit bisher ungenutzten Bildern (erfolg-7, erfolg-5, erfolg-3). Das alte Zitate-Raster ist ausgeblendet, nicht gelöscht |
| 167 | Partnerlogos | gestrafft | auf der Startseite ausgeblendet (Einstellungen › Sichtbarkeit), nicht gelöscht |
| 168 | Meine Entwicklung | drei Wege nebeneinander | ab 992 px drei Spalten (Bild oben), Tablet Bild links neben dem Text, Handy Wischkarten |
| 169 | Lösungen | kompakte Zeilen | grosse Karte und vier Zeilen an die Fensterhöhe gekoppelt, Zeilentexte nur ab 1920; Tablet 2 × 2, Handy Wischreihe. Zeilentexte gestrafft |
| 170 | Prüfung live | in allen 8 Formaten nachgemessen | 1920 bis 768 px: 12 von 12 Sections passen in einen Bildschirm (Seite 10,3–11,7 Bildschirme, vorher 13,7–17,4). Handy 390×844: 10 von 12 (12,8 statt 20,4 Bildschirme). Länger als ein Bildschirm bleiben auf dem Handy «Im Blickpunkt» (+128 px, Bild über dem Text, war in der Vorschau falsch gemessen) und «Neueste Insights» (+221 px, weil Webinare und ROWAPA TV bleiben) |
| 171 | Referenz Tresmares Capital | Seite live ansehen | aus der Cloud-Umgebung nicht erreichbar (Verbindung wird abgewiesen, auch nach Freigabe). Optionen: Sitzung auf dem eigenen Computer (Claude Desktop App) oder Screenshots. Themenlinien-Szene (v3) folgt danach |

## 23. Feedback-Runde 19 (27.10.2026): Themenlinien-Szene auf /home-v3

| # | Anliegen | Entscheid | Ergebnis |
|---|---|---|---|
| 172 | Im Blickpunkt (v2, Handy) | «Bild niedriger machen» | Bildhöhe auf dem Handy 40 % der Bildschirmbreite (`spotlight_media`), Farbfläche und Textabstand darauf abgestimmt (`cas_farbe`, `padding-section-large is-cas`). Gilt für alle Seiten mit dieser Section |
| 173 | Referenz Tresmares Capital | Analyse in der Desktop-App, Ergebnis als private Seite (https://claude.ai/artifact/LwdWCvJZ13WPBPLMSFPcDe) | Muster übernommen: stehende Bühne, kleine Liste links mit aktivem Thema, Wechsel mit Vorhang, Figur verwandelt sich. Nicht übernommen: Einrasten mit geglättetem Scrollen, ganze Fläche als Link |
| 174 | Tempo | «ohne einrasten» | je Thema rund zwei Drittel Bildschirmhöhe Scrollweg; ab der Hälfte wechselt das Thema mit einem kurzen Übergang (0,6 s). Die Seite scrollt normal weiter, die Navigation bleibt sichtbar |
| 175 | Übergang | «beide varianten bauen» | Vorhang diagonal 45° (Richtung des Ribbons, Standard) und Vorhang von unten. Umschalten in Webflow mit dem Attribut `data-uebergang` an der Section, zum Vergleichen ohne Änderung: `/home-v3?uebergang=unten` bzw. `?uebergang=diagonal` |
| 176 | Tablet und Handy | «auch eine stehende leiste mit namen zum später anpassen» | Karten untereinander, darüber eine stehende Leiste mit Kurznamen «Vertrieb · Potenzial · Führung · Recruiting · Digital», das Thema im Bild ist markiert. Kurznamen sind eigene Textelemente (`themen_link-kurz`) und frei änderbar [ROWAPA bestätigen] |
| 177 | Umsetzung | «loslegen wie von dir vorgeschlagen» | `/home-v3` (Kopie von v2) mit der neuen Reihenfolge: Header, Was uns antreibt mit «Warum ROWAPA», Unsere Erfolge, Lösungen für Unternehmen (Themenlinien), Unser Vorgehen, Digitale Lösungen, Über uns, Meine Entwicklung, Im Blickpunkt, Wissen & Impulse, Häufige Fragen, Kontakt, Footer. Die alte Lösungen-Section ist auf v3 ausgeblendet, nicht gelöscht; v2 bleibt unverändert |
| 178 | Warum ROWAPA | in «Was uns antreibt» integriert | vier Punkte (Nur Finanzbranche, Wirkung gemessen, Aus der Praxis, Aus einer Hand) mit Nummer, Titel und einem Satz; Texte neu formuliert [ROWAPA bestätigen]. Auf dem Handy nur Nummer und Titel. Das Ribbon unten links im Antrieb ist auf v3 ausgeschaltet, weil es den ersten Punkt kreuzen würde |
| 179 | Themenlinien: Inhalt | wie vorgeschlagen | links Kicker, Titel, Einleitung, Liste der fünf Themen, Button «Zum Unternehmensbereich»; rechts je Thema Kernbotschaft, höchstens zwei Sätze, Button zur Themenseite, nur die Punktfigur, keine Kennzahlen. Alles native Webflow-Elemente |
| 180 | Themenlinien: Figur | Punkte ziehen sich zusammen und bilden die nächste Figur | Das Skript liest die Punkte aus den Standbildern; neue Figur = neues PNG im Bildfeld. Die Vertriebs-Figur gibt es neu in einer Fassung für hellen Grund (`grafik-vertriebsperformance-hell.png`) |
| 181 | Technik | so wenig Code wie möglich | Grafik-Skript 1.6.1, Modul `themen` (nur Lage, Ausschnitt, Morph und Klasse `is-aktiv`). Ohne Skript, bei «Bewegung reduzieren» und bei sehr niedrigen Fenstern stehen die Karten untereinander. Geprüft ab 992×620 bis 1920×1080 |
| 182 | Prüfung live | Staging, 8 Formate, Skript 1.6.1 | v3: 1920 bis 1024 px 12 von 12 Sections in einem Bildschirm (die Themenlinien als stehende Bühne), Seite 13,1–14,6 Bildschirme (davon 2,6 Scrollweg der Themen). Bühne geprüft von 992×620 bis 1920×1080 (bei knapper Höhe mit schmalem Rand). Tablet 768: 11 von 12, Handy 390: 10 von 12; länger sind die Themenkarten untereinander (Tablet +1317 px, Handy +2159 px, Seite 15,6 Bildschirme) und auf dem Handy «Neueste Insights» (+221 px). v2 Handy: «Im Blickpunkt» passt jetzt (vorher +128 px). Beide Übergänge, Klick in der Liste, Zurückscrollen, «Bewegung reduzieren» und v2 ohne Fehler |

## 24. Feedback-Runde 20 (27.10.2026): Themenlinien wie die Referenz

| # | Anliegen | Entscheid | Ergebnis |
|---|---|---|---|
| 183 | Rückmeldung zu Runde 19 | «Ich sehe keine Unterschiede zwischen Variante 1 und 2» und «nicht annähernd wie die Referenz»; Ziel: den Effekt 1:1 herstellen | Ursachen: Auf Tablet und Handy gab es keine Bühne; auf dem Desktop deckte ein weisses Panel ein weisses auf (Kante unsichtbar), der Wechsel war ein fester Übergang statt am Scrollen gekoppelt. Neubau nach den Messwerten der Analyse (https://claude.ai/artifact/LwdWCvJZ13WPBPLMSFPcDe), eigener Code und eigene Gestaltung |
| 184 | Einrasten | «Wie Tresmares» (ersetzt Entscheid 174) | Weiches Scrollen auf der Seite (Bibliothek Lenis, nur auf Seiten mit den Themenlinien, ab 992 px, nicht bei «Bewegung reduzieren»). In der Section rastet es bei der Hälfte auf das nächste Thema ein (1,3 s); Klick in der Liste 1 s |
| 185 | Navigation | «Ausblenden» | Navigation und Knopf «Nach oben» sind ausgeblendet, solange die Bühne steht, und kommen danach zurück |
| 186 | Bildsprache | «Punktfigur + Plum-Form» | Die fünf Punktfiguren neu in 1400 px Höhe gerendert (scharf auf grossen Bildschirmen). Hinter jeder Figur eine Plum-Form aus 45°-Bändern wie das Ribbon (Band, Doppelband, Winkel, Trichter, Raster), Attribut `data-form` am Panel |
| 187 | Vorhang | «Von unten, diagonal als Schalter» (ersetzt Entscheid 175) | Standard von unten wie die Referenz (`data-uebergang="unten"`), diagonal zum Vergleich mit `/home-v3?uebergang=diagonal` |
| 188 | Aufbau | wie die Referenz | Vollbild-Panels auf Snowbank. Riesiger Titel in der Mitte, zweite Zeile versetzt; Titel aus den Themennamen abgeleitet: «Vertriebs- / performance», «Performance / & Potenzial», «Führung / & Teams», «Recruiting / & Bindung», «Digitale / Lösungen» [ROWAPA bestätigen]. Kleine Liste links oben (aktiv Manganese, andere hellgrau), Text links unten, Link rechts unten (statt Kennzahlen, es gibt keine bestätigten Zahlen je Thema). Einleitung («Was wir tun», Titel, Text, Button) bleibt über der Bühne |
| 189 | Ablauf eines Wechsels | Messwerte der Referenz | je Thema eine Fensterhöhe Scrollweg; alles hängt am Scroll-Fortschritt: Vorhang deckt von unten auf, das alte Thema dunkelt ab (Manganese, bei halbem Weg rund 42 %), Figur −20 % und Text −30 % der Fensterhöhe nach oben, das neue kommt von unten nach; alter Titel im ersten Viertel aus, neuer im letzten Viertel ein; die Form schrumpft zu vier kleinen Quadraten und wächst zur neuen Form; Markierung wechselt bei der Hälfte |
| 190 | Tablet und Handy | wie die Referenz auf dem Handy | Blöcke untereinander mit stehender Leiste; Titel ausserhalb des Blicks bei 35 %, der ausscheidende Block dunkelt leicht ab; die Form ruht hinter der Figur (verwandelt sich nicht) |
| 191 | Prüfung | an denselben Stellen wie die Analyse | Bilder eingerastet und bei halbem Wechsel neben den Referenzbildern verglichen; Video der Szene (Mausrad, Einrasten, Klick); Bühne ohne Überlappung von 992×620 bis 2560×1440; Einrasten zurück (30 %) und vor (60 %), Klick, Navigation, «Bewegung reduzieren» und Handy ohne Fehler. Grafik-Skript 1.7.0 |

## 25. Feedback-Runde 21 (27.10.2026): Form löst sich auf, Texte gross, Team und Insights

| # | Anliegen | Entscheid | Ergebnis |
|---|---|---|---|
| 192 | Rückmeldung zu Runde 20 | «Jetzt kommen wir der Lösung viel näher.» Beide Vorhänge sind gut («diagonal oder auch von unten») | Standard bleibt «von unten», diagonal weiter mit `/home-v3?uebergang=diagonal` (offener Punkt 24) |
| 193 | Plum-Form deckt die Schrift | «auflösen, wenn ich das fertige Wort habe, damit ich nur noch die Schrift sehe» | Die Form zeigt sich nur noch im Wechsel: Sie setzt sich aus kleinen Quadraten zusammen, schrumpft zu vier kleinen Quadraten, wächst zur nächsten Form und zerfällt wieder in kleine Quadrate, während der neue Titel erscheint (Drift nach rechts oben, 45° wie das Ribbon). In Ruhe: nur Titel, Figur und Texte. Tablet und Handy: Die Form liegt auf der Figur, solange der Block hereinkommt, und zerfällt, bis die Figur in der Fenstermitte steht (löst offenen Punkt 22). «Bewegung reduzieren»: keine Form |
| 194 | Erklärtexte zu wenig prominent | «links und rechts davon lesen, um was es geht, aber viel grösser und viel prominenter» | Variante A gebaut: zwei Spalten unter dem Titel. Links Kicker und Kernbotschaft (H3, auf dem Laptop 33–44 px statt 20–30 px, ab 1920 px 60 px), rechts der Satz in Manganese statt Grau (18–21 px statt 14 px, ab 1920 px 24 px), darunter der Link (fett, grösser). Der Satz ist dafür in die rechte Spalte gewandert (neue Klasse `themen_beschreibung`). Die Figur ist etwas kleiner und steht etwas höher (64 % statt 74 % der Fensterhöhe), damit die Texte frei stehen |
| 195 | «in einer anderen Darstellung zeigen» | Vergleich A und B | Variante B nur als Bildentwurf (nicht in Webflow): Kernbotschaft links und Satz rechts auf Höhe des Titels. Dafür muss der Titel rund ein Drittel kleiner werden, die Texte werden kleiner als in A und stehen auf Laptops knapp am Titel. Empfehlung: A. Entscheid offen (offener Punkt 25) |
| 196 | Einrasten zu träge | eigene Prüfung im Video | Nach dem Mausrad blieb die Szene gut eine Sekunde mitten im Wechsel stehen (jeder Schritt des weichen Nachlaufs startete die Wartezeit neu). Jetzt rastet sie 150 ms nach dem letzten Mausrad-Schritt ein: fertig nach rund 1,2 s statt 2,2 s, volle Form im Stillstand rund 0,2 s statt 1 s |
| 197 | Über uns: Fotos auf v3 nicht sichtbar | reparieren | Ursache: Die Einblend-Interaktion «Team-Kacheln nacheinander» reagierte nur auf das Team-Raster der Seite v2. Auslöser jetzt die Klasse `team_grid` (gilt auf v2 und v3). Ebenso «CAS Farbfläche einblenden» (Auslöser Klasse `section_cas`, Ziele auf beiden Seiten) |
| 198 | Insights: Titel läuft in Webinare und ROWAPA TV | «diese zwei Bezeichnungen wieder unter die Kasten legen» | Die zwei Links stehen wieder unter den Karten (rechte Spalte); der stehende Titel hat die linke Spalte für sich. Gilt auf v2 und v3 (gemeinsame Klasse) |
| 199 | Prüfung | Formate, Handy, Bewegung reduzieren, Video | Ruhe ohne Überlappung von 992×620 bis 2560×1440; Ablauf in Einzelbildern; Tablet und Handy; «Bewegung reduzieren» ohne Form; Einrasten (Mausrad, Rückweg, Trackpad, Tastatur, Klick); v2 ohne Fehler. Grafik-Skript 1.8.1 |

## 26. Feedback-Runde 22 (27.10.2026): Animation flüssig, Figur im Hintergrund, Texte eingezogen und länger

| # | Anliegen | Entscheid | Ergebnis |
|---|---|---|---|
| 200 | «Es stoppt dazwischen … wie ein kleiner Sprung, wo es wieder zurückläuft beim Runterscrollen» | Einrasten in Scrollrichtung wie die Referenz | Nachgestellt: Mit Pausen von 250–400 ms zwischen den Mausrad-Rasten zog das Einrasten jedes Mal zurück; nach einer ganzen Bildschirmhöhe stand die Szene wieder am Anfang. Jetzt: Wer vom stehenden Thema aus mehr als 4 % weiterscrollt, kommt zum nächsten Thema, zurück zum vorherigen; nur kleinere Bewegungen laufen zurück. Die Fahrt (1,3 s) beginnt mit dem Tempo des Scrollens und ist gegen weitere Rad-Schritte gesperrt, damit jeder Wechsel ganz abläuft. Von oben und von unten hereingescrollt gilt dasselbe. Gemessen: kein Rücklauf mehr bei Pausen von 120 bis 700 ms, Bildrate bei vierfach gedrosselter CPU 60 Bilder/s im Median |
| 201 | Grafik zu kräftig, Titel und Text verschwinden | «ein bisschen in den Hintergrund, wenn das Fenster ganz aufgescrollt ist» | Die Punktfigur ist im Wechsel kräftig und blendet auf 40 % zurück, sobald das Thema ganz offen ist (einstellbar mit `data-figur-ruhe` an der Section). Beim Hereinscrollen in die Bühne ebenso |
| 202 | Texte in den Ecken | «von den Ecken ein bisschen einziehen, diagonal mehr ins Bild» | Abstand zum Rand links/rechts rund 5 % der Breite (1440 px: 80 statt 48 px), unten 9 % der Höhe (900 px: 81 statt 45 px). Der Titel steht leicht über der Mitte (43 % der Höhe), damit die längeren Texte darunter Platz haben |
| 203 | Text rechts erweitern | «damit man sich ein besseres Bild machen kann, was wir unter den einzelnen Themen verstehen» | Je Thema ein zweiter Satz aus ROWAPAs eigener Struktur: Vertrieb mit den vier Hebeln, Potenzial mit Potenzialanalysen und Assessments, Führung mit Leadership-Trainings, Mentoring, Executive Coaching und Sparring, Recruiting mit Candidate Experience, Onboarding und Mitarbeiterbindung, Digital mit den fünf Lösungen (Texttabelle Rev. 12) [ROWAPA bestätigen] |
| 204 | «Wie machst du das auf Mobile, wo funktioniert das überhaupt?» | Erklärung und Geräteübersicht | Bühne ab 992 px Breite: Laptops, Desktops und Tablets quer (1024 und 1366 px, Wischen führt zum nächsten bzw. vorherigen Thema). Darunter (Tablet hoch, Handy): Blöcke untereinander mit stehender Leiste, die Form zerfällt beim Hereinkommen, die Figur bleibt kräftig (sie steht dort nicht hinter dem Titel) |
| 205 | «mach bitte auch noch den diagonalen Entwurf» | Entwurf C (Bild und Video, nicht in Webflow) | Vorhang diagonal 45°, Kernbotschaft unten links, Erklärung und Link oben rechts, Titel dazwischen. Auf kurzen Laptops (1366×657) wird es zwischen Titel und Erklärung eng; dort bräuchte C einen etwas kleineren Titel. Entscheid offen (offener Punkt 25) |
| 206 | Feinschliff | eigene Prüfung | Am Ende einer Fahrt blieb wegen halber Pixel ein Rest stehen, das nächste Thema schaute unten minimal hervor (dünne Textzeile am Rand); jetzt gerundet. Die Plum-Form sitzt mittig auf dem Titel. Grafik-Skript 1.9.0 |

## 27. Feedback-Runde 23 (27.10.2026): Variante diagonal, Bilder Meine Entwicklung, Fragen Farbfolge und Titel

| # | Anliegen | Entscheid | Ergebnis |
|---|---|---|---|
| 207 | «Kannst du mir als Variante noch diagonal anbieten?» | live umschaltbar | Entwurf C ist jetzt in Webflow gebaut (Zusatzklassen `is-diagonal` an `themen_titel`, `themen_unten`, `themen_text`, `themen_aktion`) und mit `/home-v3?anordnung=diagonal` einschaltbar, zusammen mit dem diagonalen Vorhang `/home-v3?anordnung=diagonal&uebergang=diagonal`. Standard bleibt A. Auf 992–1279 px steht der Titel tiefer und etwas kleiner, damit die Erklärung oben rechts frei bleibt. Ohne Überlappung von 992×620 bis 2560×1440. Grafik-Skript 1.10.0 |
| 208 | Meine Entwicklung: Bilder grösser, auch auf 13 und 14 Zoll | umgesetzt (v2 und v3, gemeinsame Karten-Varianten) | Bildhöhe in den drei Varianten neu `clamp(9rem, 42svh - 7.5rem, 22rem)` statt `clamp(7rem, 30svh - 5rem, 17rem)`: 13 Zoll (1280×800) 216 statt 160 px, 13-Zoll-Air (1470×956) 282 statt 207 px, 14 Zoll (1512×982) 292 statt 215 px, 1920×1080 334 statt 244 px. Die Karten passen samt Link weiterhin in einen Bildschirm |
| 209 | Frage: Passt die Farbfolge von oben nach unten? | Empfehlung, nur Entwurf | Heute wechselt der Grund in den ersten drei Bildschirmen fünfmal (dunkel, weiss, hellblau, grau, weiss, grau). Vorschlag mit drei Änderungen: «Was uns antreibt» auf Weiss (Logos und Antrieb bilden ein ruhiges weisses Kapitel), «Unsere Erfolge» auf Hellblau, Einleitung «Lösungen für Unternehmen» auf Grau wie die Bühne. Logos auf Hellblau wären auch möglich, brauchen aber Logo-Dateien mit transparentem Hintergrund (Raiffeisen, Visa zeigen heute einen weissen Kasten). Entscheid offen (offener Punkt 27) |
| 210 | Frage: Titel «Lösungen für Unternehmen» frei stehend lassen oder mitnehmen? | Empfehlung, nur Entwurf | Empfehlung: Einleitung bleibt als Kapitelanfang (auf Grau, siehe 209) und der Titel steht zusätzlich als Kicker über der Themenliste oben links, so bleibt er während aller fünf Themen sichtbar. Oben rechts ist möglich, steht aber von der Liste getrennt und kollidiert mit Variante C (dort steht oben rechts die Erklärung). Entscheid offen (offener Punkt 28) |

## 28. Feedback-Runde 24 (27.10.2026): Farbfolge, Titel über der Themenliste, Variante A

| # | Anliegen | Entscheid | Ergebnis |
|---|---|---|---|
| 211 | Farbfolge (Vorschlag Runde 23) | «so umsetzen, aber noch nicht auf V2» | Auf `/home-v3`: «Was uns antreibt» weiss (`theme-hell`), «Unsere Erfolge» hellblau (`theme-sea`), Einleitung «Lösungen für Unternehmen» grau wie die Bühne (`theme-soft`). Folge jetzt: dunkel · weiss (Logos, Antrieb) · hellblau · grau (Lösungen) · weiss · dunkel · weiss · dunkel · grau · weiss · hellblau · dunkel. `/home-v2` unverändert |
| 212 | Titel «Lösungen für Unternehmen» | Empfehlung umsetzen | Zusätzlich als Kicker über der Themenliste oben links (Klasse `text-style-kicker is-liste`), bleibt während aller fünf Themen sichtbar; auf Tablet und Handy ausgeblendet (dort steht die Leiste waagrecht). Die Einleitung bleibt. Für Bildschirmleser ausgeblendet, weil der Titel direkt darüber schon als H2 steht. Von 992×620 bis 1920×1080 ohne Berührung mit dem Titel |
| 213 | Textanordnung | «so wie vorher, also nicht diagonal … sozusagen die Variante A» | A bleibt (ersetzt offenen Punkt 25). Der Schalter `?anordnung=diagonal` und die Klassen `is-diagonal` bleiben vorerst stehen und gehen beim Aufräumen weg (offener Punkt 17) |

## 29. Feedback-Runde 25 (27.10.2026): Logo-Band dunkel, ROWAPA Digital entlasten, Insights luftiger

| # | Anliegen | Entscheid | Ergebnis |
|---|---|---|---|
| 214 | Logos auf dunklem Grund, weiss, an den Header angeglichen | umgesetzt (nur v3) | Logo-Band im Ton der Header-Unterkante (neue Farbvariable «Header Unterkante» #344F76, Ende des Header-Verlaufs), Logos weiss über einen Filter am Laufband (`logos_track is-hell`: invert + brightness, Mischmodus «screen»). So erscheinen auch Logos mit weissem Bildhintergrund (Raiffeisen, Visana) ohne Kasten. Randverläufe im selben Ton. Laufband unverändert. Folge jetzt: Header und Logos dunkel · Antrieb weiss · … |
| 215 | ROWAPA Digital: Titel | «nur schreiben: Digitale Lösungen für Ihren Alltag» | Titel auf v3 als Überschreibung der Komponente gesetzt; v2 behält den alten Titel |
| 216 | ROWAPA Digital zu überfüllt, Fundament und zwei Buttons gedrängt | Vorschlag, nur Entwurf | Ein Button «Demo vereinbaren», daneben schlichter Textlink «Alle digitalen Lösungen →»; Kasten «Das Fundament» entfällt, die Aussage steht im Einleitungssatz («… auf einer gemeinsamen Wissensplattform …»), die Kugel ist schon mit «Wissensplattform» beschriftet; Titel in zwei Zeilen; Karten nur mit Pfeil statt «Mehr zu …». Der Satz «Jede Lösung ist einzeln buchbar.» würde auf die Übersichtsseite wandern. Section 3–5 % kürzer. Entscheid offen (offener Punkt 29) |
| 217 | Insights: Live-Webinare und ROWAPA TV dezenter | umgesetzt (nur v3) | Statt weisser Kästen schlichte Zeilen mit feiner Linie oben und Plum-Pfeil (`link-teaser is-dezent`, `icon-box is-dezent`); die Section wirkt leichter |

## 30. Feedback-Runde 26 (27.10.2026): ROWAPA Digital ruhiger umgesetzt

| # | Anliegen | Entscheid | Ergebnis |
|---|---|---|---|
| 218 | ROWAPA Digital ruhiger (Entwurf 216) | «Digitalen Entwurf so umsetzen» | Nativ umgesetzt, nur v3: ein Button «Demo vereinbaren», daneben Textlink «Alle digitalen Lösungen →»; Kasten «Das Fundament» ausgeblendet; Einleitung neu (Wissensplattform im Satz); Titel zweizeilig mit festem Umbruch; Karten nur mit Pfeil, die ganze Karte bleibt verlinkt; etwas mehr Luft über den Karten. Section live 3–11 % kürzer als auf v2 (1920×1080: 990 statt 1016 px; 1440×900: 818 statt 868 px; 1280×800: 699 statt 776 px; Handy 390: 703 statt 749 px), v2 unverändert |
| 219 | Wie gebaut | über Schalter und eine Variante, keine Kopie der Komponente | Neue Schalter in «Section Digital»: «Hinweis anzeigen», «Button 2 anzeigen», «Textlink anzeigen», «Karten-Linktext anzeigen»; in «Card Feature»: «Linktext anzeigen». Neue Variante «Karten · ruhig» (nur Abstand über den Karten). Der Titel nimmt jetzt Zeilenumbrüche an (Enter). Die Voreinstellungen entsprechen dem bisherigen Stand, darum ändern sich v2 und die übrigen Seiten nicht |
| 220 | Satz «Jede Lösung ist einzeln buchbar.» | «Satz auf die Übersichtsseite» | Auf v3 aus der Einleitung entfernt. Die Übersichtsseite `/themen/digitale-loesungen` gibt es in Webflow noch nicht (sie entsteht in Stufe 3 als Themenlinie «Digitale Lösungen»). Der Satz ist dort als Pflichtinhalt vorgemerkt (`01_cms_architektur.md`, 3.1). v2 behält ihn |

## 31. Feedback-Runde 27 (27.10.2026): Entscheide, Header, Fotorahmen, Abstände, Megamenü

| # | Anliegen | Entscheid | Ergebnis |
|---|---|---|---|
| 221 | v2 oder v3 | Entscheid folgt später, Tendenz v3 | offener Punkt 14 bleibt offen (Tendenz v3) |
| 222 | Übergang zwischen den Themen | «von unten ist soweit in Ordnung» | entschieden: Vorhang von unten. Der Schalter diagonal (`?uebergang=diagonal`) und die Zusatzklassen `is-diagonal` kommen beim Aufräumen weg (offener Punkt 17) |
| 223 | Texte der Themen (Kernbotschaften, erweiterte Erklärtexte) | «im Moment so übernehmen, können jederzeit geändert werden» | vorläufig übernommen (Texttabelle Rev. 9 und 12); offene Punkte 20, 23 und 26 geschlossen |
| 224 | Header: Kicker «Beratung · Training · Digitale Lösungen» | entfernen (Wunsch ROWAPA), Bau nach Freigabe der Runde | Entwurf: Titel rückt rund 25 px höher, der Header wirkt ruhiger (`stufe2-screens/runde27/header-heute-ohne-kicker-ruhig.png`) |
| 225 | Header: Bewegung (Punktemeer, wechselnde Unterstreichung, Logo-Band) zu viel? | Vorschlag, nur Entwurf | Drei Bewegungen laufen gleichzeitig und ohne Ende; am stärksten zieht die wechselnde Unterstreichung, die zwei von drei Zeilen grau macht. Vorschlag: Unterstreichung läuft nur einmal durch (unter 5 s), danach alle drei Zeilen weiss mit kurzer Plum-Linie wie bei den Section-Titeln; Logo-Band bleibt, etwas langsamer, hält beim Darüberfahren an; Punktemeer bleibt. So erfüllt der Header auch die Regel WCAG 2.2.2 (bewegte Inhalte über 5 s brauchen eine Möglichkeit zum Anhalten) besser |
| 226 | Unsere Erfolge: Fotorahmen dunkelblau, frischer? | Vorschlag, nur Entwurf | sechs Farben verglichen (`erfolge-fotorahmen-farben.png`): Manganese (heute), Weiss, Great Serpent, Sea Cliff, Plum, Plum als Linie. Empfehlung Weiss (am frischesten auf dem hellblauen Grund), Alternative Plum als feine Linie |
| 227 | Weissraum zwischen den Sections | geprüft und gemessen, Vorschlag | Abstand zwischen den Inhalten zweier Sections bei 1440 × 900 (Median): BCG 110 px, Roland Berger 113, Vontobel 130, Korn Ferry 137, **ROWAPA v3 162**, Simon-Kucher 221, Oliver Wyman 331. Handy 390 px: BCG 66, Bain 72, Simon-Kucher 83, Vontobel 108, Roland Berger 114, Oliver Wyman 176, **ROWAPA 152**. Nicht messbar: Bain Desktop, Pictet (gesperrt), Tresmares (Szenen-Aufbau). Ergebnis: Desktop im Mittelfeld, Handy grosszügig. Enger sind drei Übergänge (Header → Antrieb 113 px, Über uns → Meine Entwicklung 127 px, um «Im Blickpunkt» 82–104 px) und der Abstand Titel → Inhalt (36 px). Vorschlag: Desktop +10 % (`clamp(3rem, 10svh, 8rem)`, 1440 × 900: 180 statt 162 px), Titel → Inhalt `clamp(2rem, 5svh, 4rem)`, die drei Übergänge angleichen, Handy 64 statt 76 px je Seite. Folge: bei 1440 × 900 sind Erfolge, Digital und Meine Entwicklung leicht höher als ein Bildschirm (Erfolge und Meine Entwicklung schon heute); Seite 1,4 % länger |
| 228 | Megamenü: kleine Menüs wirken leer, «Unsere Kunden» bekommt Unterpunkte | drei Vorschläge, nur Entwurf | A «Angepasst» (kleine Menüs als schmales Panel unter dem Punkt, mit Kurzbeschrieb und kleinem Bild; «Was wir tun» bleibt), B «Bühne» (alle Menüs gleich: links dunkle Einleitung mit Satz und «Zur Übersicht», Mitte Links mit Kurzbeschrieb, rechts Bild), C «Editorial» (ohne Bilder, nummerierte Spalten, grosse Schrift, Höhe passt sich an). Texte aus den bestehenden Menükarten; für «Unsere Kunden» Unterpunkte aus der Seitenplanung (Branchen, Case-Stories, Kundenstimmen) und ein neuer Satz [ROWAPA bestätigen]. Empfehlung B. Bilder `megamenue-a-angepasst.png`, `megamenue-b-buehne.png`, `megamenue-c-editorial.png` |

## 32. Feedback-Runde 28 (27.10.2026): Header ruhig, Fotorahmen Plum, Abstände, Megamenü «Bühne»

| # | Anliegen | Entscheid | Ergebnis |
|---|---|---|---|
| 229 | Header: Kicker (Entwurf 224) | «Du darfst den Kicker herausnehmen» | umgesetzt, nur v3: neuer Schalter «Kicker anzeigen» in «Section Hero Home» (Voreinstellung an, darum v2 und die übrigen Seiten unverändert) |
| 230 | Header: Unterstreichung (Entwurf 225) | «die Unterstreichung auf einen umstellen» | umgesetzt, nur v3: neue Variante «A · Signatur ruhig» mit eigener Interaktion «Hero-Titelzeilen einmal». Die drei Zeilen werden nacheinander einmal unterstrichen (fertig nach rund 4,5 s), danach stehen alle drei weiss, darunter eine kurze Plum-Linie wie bei den Section-Titeln. Wer «weniger Bewegung» eingestellt hat, sieht sofort den Endzustand. v2 behält die wechselnde Unterstreichung |
| 231 | Header: Logo-Band | «vielleicht etwas langsamer» | umgesetzt, nur v3: ein Durchlauf 60 statt 45 s (ein Drittel langsamer), hält beim Darüberfahren weiter an, bei «weniger Bewegung» steht es still. Dafür gibt es zwei Interaktionen: «Logo-Laufband ruhig (v3)» und die bisherige für alle übrigen Seiten (beim Aufräumen wieder zusammenführen, offener Punkt 17) |
| 232 | Header: Punktemeer | «auf jeden Fall behalten» | unverändert |
| 233 | Unsere Erfolge: Fotorahmen (Entwurf 226) | «Plum mit Linie» | umgesetzt, nur v3: Zusatzklasse `is-plum-linie` auf allen acht Folien. Der Rahmen ist eine feine Plum-Linie, 24 px nach links oben versetzt (Handy 16 px), innen in der Farbe des Hintergrunds. Linie 1 px statt 2 px wie im Entwurf, gemäss Entscheid 140 (rote Linien 1 px) |
| 234 | Weissraum (Entwurf 227) | «so umsetzen» | umgesetzt: Abstand oben und unten je Section Desktop `clamp(3rem, 10svh, 8rem)` (vorher `clamp(3rem, 9svh, 7rem)`), Handy 64 statt 76 px, Titel → Inhalt `clamp(2rem, 5svh, 4rem)` (vorher `clamp(1.5rem, 4svh, 3rem)`). **Gilt für alle Seiten, auch v2.** Ein eigener Abstandsmodus nur für v3 war geplant, die Webflow-Schnittstelle nimmt in Variablen-Modi aber keine `clamp()`-Werte an. Live gemessen (Median zwischen den Inhalten zweier Sections): 1440 × 900 jetzt 180 px (vorher 162), Handy 390 jetzt 128 px (vorher 152), auf v2 und v3 gleich. Damit liegt ROWAPA auf dem Desktop zwischen Korn Ferry (137) und Simon-Kucher (221), auf dem Handy zwischen Roland Berger (114) und Oliver Wyman (176) |
| 235 | Die drei engeren Übergänge | angleichen (Teil von 234) | Nur «Über uns → Meine Entwicklung» angepasst (neue Zusatzklasse `padding-section-large is-linie`: voller Abstand mit 1-px-Linie statt der verkürzten Anbindung), nur v3. Header → Antrieb und die Übergänge um «Im Blickpunkt» bleiben: dort trennt ein Farbwechsel bzw. ein vollbreites Bild, der gemessene Abstand täuscht. Ein Bildschirm: bei 1440 × 900 passen alle Sections ausser Themen (Scroll-Szene) und Meine Entwicklung (929 px, 29 px zu hoch; bei 1280 × 800 22 px). Erfolge (886 px) und Digital (836 px) passen, anders als im Entwurf befürchtet. **Korrigiert in 239:** gemessen war die ganze Section mit Weissraum, der Inhalt passt |
| 236 | Megamenü (Entwurf 228) | «B und Texte passen» | Variante B «Bühne» umgesetzt, nur v3: neue Komponente «Navbar · Bühne» (Kopie der Navbar), alle fünf Menüs gleich aufgebaut: links dunkle Einleitung (Kicker, Satz, «Zur Übersicht →», wo es eine Übersichtsseite gibt), in der Mitte die Links mit Kurzbeschrieb (wo vorhanden), rechts Bild mit Text (ab 1280 px; von 992 bis 1279 px ausgeblendet, damit die Links Platz haben). Geprüft bei 1024, 1280, 1440 und 1920 px: kein Text läuft über. Das Handy-Menü ist unverändert. v2 und die übrigen Seiten behalten die bisherige Navbar; die alte Navbar wurde nur auf v3 entfernt |
| 237 | «Unsere Kunden» mit Unterpunkten | Texte bestätigt («Texte passen, mit ROWAPA») | umgesetzt, nur v3: «Unsere Kunden» ist ein Menü mit «Branchen», «Case-Stories» und «Kundenstimmen», je mit Kurzbeschrieb und Vorschaubild; Satz «Banken, Versicherungen und Krankenkassen, die mit ROWAPA arbeiten, und was sie erreicht haben.» Die Links führen auf `/referenzen#branchen`, `#cases`, `#stimmen`. Die Seite `/referenzen` mit diesen Abschnitten entsteht später (offener Punkt 31). Offene Frage 16 und Rev. 16 geschlossen (Texttabelle Rev. 17) |
| 238 | Nebenwirkung Aufräumen | – | Im Variablen-Satz «Spacing» ist vom Versuch (234) ein leerer Modus «Luft (v3)» übrig. Die Schnittstelle kann Modi nicht löschen: im Designer unter Variables → Spacing → Modus «Luft (v3)» → Delete entfernen (30 Sekunden, ohne Folgen) |

## 33. Feedback-Runde 29 (27.10.2026): 13-Zoll-Laptop, Mauszeiger, Hover-Videos, Themen-Szene mit Trackpad

| # | Anliegen | Entscheid | Ergebnis |
|---|---|---|---|
| 239 | «Meine Entwicklung» höher als ein Bildschirm? (235) | keine Anpassung («auf meinem 13-Zoll-Laptop alles im Bild») | Messung korrigiert: Die 929 px galten für die ganze Section mit Weissraum oben und unten (je 90 px) in einem Fenster von 1440 × 900 ohne Browserleisten. Der Inhalt vom Titel bis zu den Karten ist rund 750 px hoch und passt; die Grössen wachsen und schrumpfen mit der Fensterhöhe |
| 240 | Mauszeiger «wie ein normaler Cursor, ohne Animation» und Hover-Videos in «Meine Entwicklung» laufen nicht (Chrome, v3, am Strom) | Fehler, behoben | Ursache: Chrome meldet Laptops mit Touchscreen als Touch-Gerät. Das Skript startete Zeiger und Hover-Videos nur, wenn das Hauptzeigegerät eine Maus ist; die Themen-Szene prüft das nicht und lief darum. **ROWAPA Grafik 1.10.1:** Zeiger, Hover-Videos und die Hover-Effekte von Figuren und Treppe starten, sobald irgendein Zeigegerät mit Maus oder Trackpad vorhanden ist; Berührungen mit dem Finger werden je Ereignis übergangen (Zeiger ausgeblendet, kein Video). Gilt auf allen Seiten (v2 und v3). Live geprüft: normaler Laptop und nachgestellter Touchscreen-Laptop je mit Zeiger und drei Videos, Handy ohne Zeiger und ohne Videos, keine Fehlermeldungen |
| 241 | Themen-Szene beim zweiten Durchgang weniger rund? | geprüft, Vorschlag | Mit Mausrad: erster und zweiter Durchgang (hinunter und hinauf) gleich, jedes Thema rastet genau ein, 60 Bilder pro Sekunde, die Seite verschiebt sich nicht. Mit Trackpad-Wisch (Nachlauf rund 1 s): Die Szene gleitet zuerst frei bis etwa zur Hälfte, stockt, bis der Nachlauf endet, und fährt erst dann ins nächste Thema; ein kräftiger Wisch überspringt ein Thema (2 → 4). Je nach Wisch fühlt sich derselbe Durchgang darum anders an. Vorschlag «Wisch-Einrasten»: Die Fahrt beginnt sofort mit dem Wisch, ein Wisch = ein Thema, der Nachlauf wird geschluckt; Mausrad wie heute. Bau nach Freigabe (offener Punkt 34) |

## 34. Feedback-Runde 30 (27.10.2026): Wisch-Einrasten zum Vergleichen, Diagnose, Persönliches in «Was uns antreibt»

| # | Anliegen | Entscheid | Ergebnis |
|---|---|---|---|
| 242 | Wisch-Einrasten (Vorschlag 241) | «bau das Wisch-Einrasten mit Umschalter» | gebaut, **ROWAPA Grafik 1.11.0**: Mit `?einrasten=wisch` in der Adresse fährt ein Wisch auf dem Trackpad oder ein Rad-Stoss sofort genau ein Thema weiter; der Nachlauf und weitere Rad-Schritte derselben Bewegung werden übergangen; von oben hält die Szene am ersten Thema an, am letzten Thema führt der nächste Wisch hinaus. Ohne Umschalter bleibt alles wie bisher. Live gemessen mit Trackpad-Wischen (sanft, kräftig, hinauf) und Rad-Stössen (1, 4, 8): jedes Mal genau ein Thema, kein Stocken, nichts übersprungen. Unterschied zu heute auch mit dem Mausrad: Die Fahrt beginnt sofort, viele Rad-Schritte am Stück bringen ein Thema weiter statt zwei. Entscheid nach dem Vergleich (offener Punkt 34) |
| 243 | «sehe immer noch keine Videos und keine animierte Maus» | weiter untersucht | In allen Tests laufen Zeiger und Videos (Chrome, v2 und v3, normaler und nachgestellter Touchscreen-Laptop); die Seite lädt in rund 2 s. Die Ursache auf dem Gerät von ROWAPA ist offen. Neu: Diagnose-Anzeige mit `?diagnose` in der Adresse (unten links: Skript-Fassung, Start, Maus/Touch laut Browser, «Bewegung reduzieren», Zeiger, Hover-Videos, Themen-Szene). Erscheint sie nicht, lädt das Skript auf diesem Gerät gar nicht (z. B. Netzwerk- oder Werbefilter). Zusätzlich startet das Skript jetzt spätestens 5 s nach dem Aufbau der Seite, auch wenn eine Datei hängt (offener Punkt 35) |
| 244 | Bild von uns oder etwas Persönliches in «Was uns antreibt»? | Einschätzung, nichts gebaut («erst Feedback») | Empfehlung ja: Die Section spricht heute nur mit Aussagen und Zahlen; links unter dem Titel ist freier Platz. Drei Wege: A «Persönliches Wort» (kleines Porträt, ein bis zwei Sätze der Geschäftsleitung, Name und Funktion; Text von ROWAPA), B echtes Foto aus einem Training oder Workshop mit feiner Plum-Linie wie bei «Unsere Erfolge», C Video «Wer wir sind» als Bild mit Play-Knopf. Empfehlung A; B als Alternative; C nicht, weil das Video schon bei «Über uns» steht. Team-Porträts nicht wiederholen (Team-Mosaik folgt bei «Über uns») (offener Punkt 36) |

---

## Offene Punkte

1. **Freigabe Stufe 2** (Startseite `/home-v2`). Danach Löschen der zehn internen Entwurfsseiten (nur mit Freigabe): `/varianten`, `/home-look`, `/home-look-b`, `/home-look-c`, `/layout-d`, `/layout-e`, `/layout-f`, `/kombi-g`, `/kombi-h`, `/kombi-g2`, dazu die nur dort genutzten Klassen (`var_*`, `ribbon_band`, `is-band`, `is-raster`, `is-display`).
2. Video-Link `https://vimeo.com/738627796` in der Lightbox einsetzen (von Hand, 30 Sekunden; Benutzerhandbuch 2.15). Die Schnittstelle kann die Lightbox-Medien nicht setzen.
3. Slider optional auf «Cross Fade» und automatischen Wechsel (8 s) stellen (von Hand; Benutzerhandbuch 2.14).
4. Auszüge der drei neuen Insights-Karten bestätigen (aus dem Titel abgeleitet, die Originalbeiträge waren aus der Cloud-Umgebung nicht erreichbar). In Stufe 3 kommen die Auszüge aus dem CMS. [ROWAPA bestätigen]
5. Favicon und Webclip in Webflow hochladen (von Hand).
6. Stehendes Logo als SVG (falls vorhanden).
7. Weitere Kennzahlen, die gezeigt werden dürfen.
8. Hilfs-Collection «Organisationen» in Stufe 3 nach der Begriffsregel benennen. Vorschlag: «Unternehmen & Partner».
9. Option Mobile: Wische-Reihen auch für Wege und Werkzeuge (Insights ist umgesetzt).
10. Themen-URLs in Stufe 4 an die neuen Titel anpassen (mit Weiterleitung); ebenso `/fuer-organisationen`.
11. Nächste Stufe nach Freigabe: Stufe 3 (CMS).
12. Megamenü-Bezeichnungen «Mensch & Potenzial», «Leadership & Team», «Recruiting & Retention» weichen von den Titeln auf der Startseite ab («Mitarbeiterperformance & Potenzial», «Führung & Teams», «Recruiting & Mitarbeiterbindung»). Bearbeiten wir später (Entscheid Runde 18).
13. Eigene Bilder für Managing Partner, Education Partner und Trainer Academy, falls vorhanden (die Menütexte sind bestätigt).
14. `/home-v3` mit der Themenlinien-Szene wie die Referenz (Runde 20). Wird v3 die definitive Startseite? Tendenz v3, Entscheid folgt (Runde 27).
15. Handy: «Im Blickpunkt» und «Neueste Insights» sind länger als ein Bildschirm (Entscheid 170). Kürzen oder so lassen?
16. Designer-Ansicht: «Unsere Erfolge» mit 8 Folien geprüft und in Ordnung. «Unser Vorgehen» noch prüfen (die Designer-Vorschau brach mehrmals ab).
17. Aufräumen (Entwurfsseiten, ausgeblendete Blöcke, ungenutzte Klassen) erst nach dem Entscheid für die definitive Variante. Dazu seit Runde 24: Zusatzklassen `is-diagonal` und der Schalter `?anordnung=diagonal` im Skript; seit Runde 27 auch der Schalter `?uebergang=diagonal` (Vorhang von unten entschieden); seit Runde 28 die zwei Logo-Band-Interaktionen (zusammenführen) und die Hero-Variante (Grundvariante mit wechselnder Unterstreichung entfällt, wenn v3 gilt).
18. Kurznamen der stehenden Leiste (Tablet, Handy): «Vertrieb · Potenzial · Führung · Recruiting · Digital». [ROWAPA bestätigen]
19. Texte «Warum ROWAPA» (vier Punkte, Texttabelle Rev. 9). [ROWAPA bestätigen]
20. ~~Themenlinien-Texte (Rev. 9)~~: vorläufig übernommen (Entscheid 223).
21. Option: feine Plum-Linie entlang der diagonalen Vorhangkante (wie das Ribbon). Nicht gebaut, nur Idee.
22. Tablet und Handy: Blöcke untereinander wie die Referenz (Runde 20, rund 3,5 Bildschirme auf dem Handy). Die Plum-Form zerfällt dort, während der Block in den Blick rückt (Runde 21); auf Wunsch verwandelt sie sich wie auf dem Desktop.
23. ~~Riesige Titel der Themen~~: vorläufig übernommen (Entscheid 223).
24. ~~Vorhang~~: entschieden, von unten (Entscheid 222).
25. ~~Themenlinien-Texte A, B oder C~~: entschieden, Variante A (Entscheid 213).
26. ~~Erweiterte Erklärtexte~~: vorläufig übernommen (Entscheid 223).
27. Farbfolge: auf v3 umgesetzt (Entscheid 211). Offen: auch auf v2, falls v2 weitergeführt wird.
28. ~~Titel «Lösungen für Unternehmen»~~: entschieden, Kicker über der Themenliste (Entscheid 212).
29. ~~ROWAPA Digital ruhiger~~: entschieden und auf v3 umgesetzt (Entscheide 218–220). Offen bleibt nur: Satz «Jede Lösung ist einzeln buchbar.» beim Bau der Übersichtsseite in Stufe 3 einsetzen.
30. ~~Runde 27 (Entwürfe Header, Fotorahmen, Abstände, Megamenü)~~: entschieden und auf v3 umgesetzt (Entscheide 229–237); die Abstände gelten für alle Seiten.
31. Seite `/referenzen` mit den Abschnitten `#branchen`, `#cases`, `#stimmen` (Ziele der Unterpunkte von «Unsere Kunden», Entscheid 237). Bis dahin führen die Links ins Leere. Stufe 3/4.
32. Wenn v3 die definitive Startseite wird: «Navbar · Bühne» auf allen Seiten einsetzen (oder die alte Navbar ersetzen) und das Handy-Menü um die Unterpunkte von «Unsere Kunden» ergänzen (Option, nicht gebaut).
33. Leeren Variablen-Modus «Luft (v3)» im Designer löschen (Entscheid 238, von Hand).
34. Themen-Szene mit Trackpad: «Wisch-Einrasten» gebaut zum Vergleichen (`?einrasten=wisch`, Entscheid 242). Entscheid offen: übernehmen (dann Standard, Umschalter entfällt) oder beim heutigen Einrasten bleiben.
35. Zeiger und Hover-Videos auf dem Gerät von ROWAPA: Ergebnis der Diagnose-Anzeige (`/home-v3?diagnose`) abwarten (Entscheid 243).
36. Persönliches Element in «Was uns antreibt»: Weg A, B oder C wählen (Entscheid 244); für A Porträt und Text von ROWAPA. [ROWAPA bestätigen]
