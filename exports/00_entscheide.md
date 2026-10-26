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
12. Megamenü-Bezeichnungen «Mensch & Potenzial», «Leadership & Team», «Recruiting & Retention» weichen von den Titeln auf der Startseite ab («Mitarbeiterperformance & Potenzial», «Führung & Teams», «Recruiting & Mitarbeiterbindung»). Angleichen? [ROWAPA bestätigen]
13. Fünf Entwürfe in den Menükarten bestätigen (Texttabelle Rev. 7), dazu eigene Bilder für Managing Partner, Education Partner und Trainer Academy, falls vorhanden.
14. Format-Vorschau: je Section entscheiden (Heute / Vorschlag / Gestrafft, Header A ja/nein); danach Umsetzung in Webflow.
15. Lead-Text im Header: «Unternehmungen» oder «Unternehmen» (Begriffsregel).
