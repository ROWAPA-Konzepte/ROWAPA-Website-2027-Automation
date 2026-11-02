# Runde 60 · Methoden schneller, vier Ideen für besondere Effekte (31.10.2026)

Ansicht: https://claude.ai/artifact/6HsZc1zhigNCnBFpgeMxCk (Reiter «Effekte» und neu «Ideen»). Nichts in Webflow gebaut.

## A. Performance-Analyse: Fünf Methoden schneller (Entscheid 369)

Rückmeldung: Der Aufbau der fünf Methoden (Skill-Check usw.) wirkte etwas langsam.

| Was | Runde 59 | Runde 60 |
|---|---|---|
| Scroll-Strecke je Methode | 340 px (gesamt rund 2 000 px) | 190 px (gesamt rund 1 150 px) |
| Übergang Aufleuchten | 0,45 s | 0,28 s |
| Liste im Ergebnis | 0,5 s | 0,3 s |
| Lupe im Ergebnis | 1,2 s | 0,7 s |
| Im Video | rund 9 s | rund 4 s |

Videos: `effekte_desktop.mp4`, `effekte_handy.mp4` (Handy unverändert, dort bleibt nichts stehen). Werkzeug `tools/entwuerfe/runde60_performance-analyse.js` mit `tools/entwuerfe/fx60.js` (`MODE=video`). Mauszeiger bleibt wie auf der Startseite (Punkt mit Ring), auf allen Seiten.

## B. Vier Ideen «besonderer Effekt je Seitenfamilie» (Entscheid 370: 1–3 übernommen, 4 vorerst nicht)

Zuordnung: Idee 1 → Vorlage Themenlinie, Idee 2 → Vorlage Hebel-Seite, Idee 3 → Bereich «Meine persönliche Entwicklung». Nichts davon kommt auf die Seite Performance-Analyse. Gebaut wird je Idee, wenn die Seite an der Reihe ist.

Aufnahme in der echten Startseiten-Hülle (Navigation, Mauszeiger, Footer mit ROWAPA-Grafik-Skript); die Effekte selbst sind für die Vorschau nachgebaut. Werkzeug `tools/entwuerfe/runde60_ideen.js` (`node runde60_ideen.js <Ordner>`, einzeln mit `ONLY=idee4`).

| # | Seitenfamilie | Effekt | Video | Bau in Webflow | Handy |
|---|---|---|---|---|---|
| 1 | Themenlinie | Hebel-Karten stapeln sich beim Scrollen, die untere tritt leicht zurück | `idee1.mp4` (13 s) | nativ: Sticky-Position, Interaction «beim Scrollen» für Grösse und Helligkeit | untereinander, kleiner Versatz |
| 2 | Hebel-Seite | Angebot links bleibt stehen, Belege (Zahlen, Kundenstimmen) ziehen rechts vorbei, aktiver Beleg hervorgehoben, Striche «Beleg x von 4» | `idee2.mp4` (12 s) | nativ: Sticky-Spalte, Einblenden je Karte; Zähler bräuchte ein kleines Skript oder entfällt | Text oben, Belege als Liste |
| 3 | Meine Entwicklung | Plum-Linie zeichnet beim Scrollen den Lernweg, Schritte leuchten auf, wenn die Linie sie erreicht | `idee3.mp4` (11 s) | neues Modul im ROWAPA-Grafik-Skript; Schritte normale Elemente oder CMS | Linie links, Schritte rechts |
| 4 | Team, Über uns | Porträt zerfällt beim Darüberfahren in Punkte und setzt sich in knapp 1 s wieder zusammen (Echo des Punktemeers) | `idee4.mp4` (15 s) | neues Modul im ROWAPA-Grafik-Skript; Fotos bleiben Webflow-Bilder bzw. CMS «Personen» | einmal beim Hineinscrollen oder ohne |

Hinweis für den Bau von Idee 4: Bilder mit `srcset` melden eine «Anzeige-Grösse», nicht die echte Pixelgrösse. Das Modul lädt darum das tatsächlich verwendete Bild (`currentSrc`) separat und rechnet mit dessen Massen; es liest keine Pixel aus (keine Probleme mit dem Bild-Server).

Alle Effekte: Inhalt ist ohne Bewegung vollständig lesbar, «reduzierte Bewegung» schaltet ab.

## Texttabelle Vorschauseite (nur Vorschau, nicht für die Website)

| Stelle | Original | Vorschlag | Begründung | Offene Fragen |
|---|---|---|---|---|
| Idee 1, Titel | Startseite/v11: Hebel der Themenlinie Vertriebsperformance | «Vier Hebel für messbare Vertriebsleistung» · «Einzeln wirksam, gemeinsam ein System.» | stützt den Effekt (System statt Liste) | Titel für die Themenlinien-Vorlage übernehmen? [ROWAPA bestätigen] |
| Idee 1, Karten | Texte der vier Hebel aus Runde 50 (Vertriebsperformance) | unverändert | echte Inhalte | – |
| Idee 2, Belege | Startseite: «98 % zufriedene Kunden aus der Befragung 2025», «100 % unserer Kunden beauftragen uns erneut», Stimmen Basler und Mobiliar (Startseite «Unsere Erfolge») | unverändert | echte, schon veröffentlichte Belege | Welche Belege je Hebel? Aus CMS «Stimmen» filtern |
| Idee 2, Button | – | «Erstgespräch vereinbaren» | Button je Seite (Entscheid 367) | – |
| Idee 3, Schritte | – | Standort bestimmen · Weiterbilden · Begleitet umsetzen · Nächster Schritt (Du-Ansprache) | Platzhalter, Bereich «Meine persönliche Entwicklung» | Schritte und Texte [ROWAPA bestätigen] |
| Idee 4, Hinweis | Startseite «Die Menschen hinter ROWAPA» | Zusatz «Beim Darüberfahren setzt sich das Porträt aus Punkten zusammen.» | nur Erklärung für die Vorschau, entfällt auf der Website | – |
