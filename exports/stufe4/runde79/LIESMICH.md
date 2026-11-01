# Runde 79 · Performance-Analyse: Entwurf zum Umschalten (Stufe 4, 01.11.2026)

## Auftrag ROWAPA (Entscheid 393)

- Foto auf der Performance-Analyse ja, aber sauber an die Seite angepasst. Im Bildschirmfoto von ROWAPA lief das Bildband nicht über die ganze Breite. Sonst darf daneben ein Text stehen; Claude entscheidet.
- Pakete 1 und 3 aus der Rückmeldung von ChatGPT als Entwurf bauen. Kontakt (Paket 2) und die übrigen Fotos später, Seite für Seite.
- Priorität: zuerst die Performance-Analyse fertig, danach die Vertriebsperformance. Was von der Performance-Analyse dorthin übertragen wird, wird danach entschieden.
- Titel nicht mehr nur links: wieder einmal rechts, für Abwechslung. **Entscheid 124 (Titel nicht versetzen) ist aufgehoben**; entschieden wird je nach Situation.
- Die heutige Fassung behalten und den Entwurf so bauen, dass man umschalten kann. **Gilt ab jetzt immer** (festgehalten in der Prüfliste).

## So wird umgeschaltet

https://rowapa-website-2027-automation.webflow.io/performance-analyse-entwurf

- Unten links steht «Varianten · 0 von 10 im Entwurf». Klick öffnet die Leiste mit allen Punkten.
- Je Punkt gibt es «heute» (so wie auf der echten Seite `/performance-analyse`) und den Entwurf. Beim Foto gibt es drei Möglichkeiten.
- Die Wahl bleibt im Browser gespeichert. «Link zu dieser Auswahl» kopiert einen Link, der genau diese Kombination öffnet, zum Beispiel zum Weitergeben.
- «Alles wie heute» und «Alles im Entwurf» schalten alles auf einmal um.
- Mit * markierte Punkte laden die Seite beim Wechsel neu, weil sie beim Aufbau der Seite wirken (Einblendungen, Lupe).
- Die echte Seite ist unverändert (geprüft).

## Die zehn Punkte

| Gruppe | Punkt | Heute | Entwurf | Gebaut als |
|---|---|---|---|---|
| Neu | Foto nach «Fünf Perspektiven» | ohne Foto | **Bildband** über die ganze Breite oder **Foto mit Text**: Foto links bis an den Rand, rechts Titel und Satz auf dunklem Grund | beides nativ in Webflow (`section_bildband`, `section_bildtext`) |
| Neu | Titel | alle links | «Klarheit, wo sich Entwicklung lohnt.» und «Von der Analyse zur Wirkung» stehen rechts, die Treppe wechselt nach links. Mit dem Foto mit Text ergibt sich links, rechts, links, rechts, links. Nur am Desktop; auf Tablet und Handy bleibt alles untereinander | Umschaltleiste (später nativ: Spalten tauschen) |
| Paket 1 | Einblendungen * | Titel wortweise in 0,8 s; Titelblock, Zitat und Zahlen blenden zusätzlich ein | Titel wortweise in 0,5 s, früher ausgelöst; Titelblock mit Einleitung, Zitat und Aufwandzahlen sofort sichtbar | zwei native Interaktionen nur für die Entwurfsseite |
| Paket 1 | Sprachen EN · FR · IT | sichtbar | ausgeblendet, bis es die Sprachversionen gibt | Umschaltleiste (später nativ: ausblenden in der Navigation) |
| Paket 1 | Megamenü: aktuelle Seite | Webflow markiert sie, aber unsichtbar | Plum-Kante links, halbfett | Umschaltleiste (später nativ: Zustand «Current») |
| Paket 3 | Zweiter Button im Header | «So funktioniert unsere Methode» | «Beispielauswertung ansehen», springt zu den Beispielauswertungen | Umschaltleiste |
| Paket 3 | Eckdaten im Header | keine | «Ergebnisse in 4–6 Wochen · Fünf Perspektiven · 25 Minuten Skill-Check je Person» | Umschaltleiste |
| Paket 3 | Hinweise in den Diagrammen | keine | je Auswertung ein Hinweis auf die auffälligste Stelle, aus den Musterdaten berechnet; beim Darüberfahren treten die anderen Zeilen zurück | Umschaltleiste (später im Grafik-Modul `diagramm`) |
| Paket 3 | Rahmen um Auswertung und Zitat | versetzter Rahmen mit Plum-Linie | ruhige weisse Fläche mit feiner Linie oben | Umschaltleiste |
| Paket 3 | Lupe im Header * | heutige Punkte | gleiche Form aus feineren Punkten, passend zum Wellenmeer | neues Bild (`grafik-lupe-performance-analyse-fein.png`) |

**Warum Foto mit Text meine Empfehlung ist:**
- Ein Bildband ohne Text ist Dekoration.
- Mit Titel und Satz belegt das Foto, was die Seite verspricht: Hinter der digitalen Erhebung stehen Fachpersonen, die die Ergebnisse einordnen.
- Gleichzeitig bringt es den ersten Titel auf die rechte Seite und damit Abwechslung.
- Die dunkle Fläche trennt die hellen Abschnitte davor und danach.

**Bildband korrigiert:** Die Begrenzung auf 88 % der Fensterhöhe ist weg. Das Band ist immer so breit wie das Fenster, auch in breiten, niedrigen Fenstern. Ursache war: Mit festem Seitenverhältnis hat die Höhenbegrenzung auch die Breite verkleinert.

## Geprüft

| Prüfung | Ergebnis |
|---|---|
| Umschalten ohne Neuladen (Foto, Titel, Button …) | ✓ |
| Umschalten mit Neuladen (Einblendungen, Lupe) | ✓ |
| Wahl gespeichert, Link zur Auswahl, «Alles wie heute» | ✓ |
| Echte Seite `/performance-analyse` | ✓ unverändert: keine Leiste, kein Foto, Titel erscheinen wortweise wie bisher |
| Foto mit Text und Bildband in 1440 × 900, 2000 × 750 (breit und niedrig), 768, 390 | ✓ Köpfe ganz sichtbar, volle Breite |
| Titel im Wechsel, 1440 | ✓ Ergebnis und Ablauf rechts, Treppe links |
| Eckdaten auf dem Handy | korrigiert: zuerst mit Trennpunkten am Zeilenanfang, jetzt untereinander und linksbündig |
| Hinweise in den Diagrammen | ✓ Führung: «Coaching im Alltag»; Rollenprofil: grösster Abstand zum Soll; Teams: Team D · Verbindlichkeit (5.2); Interne Referenz: grösster Abstand |

Bildschirmfotos mit dem Teamfoto liegen nicht im Repo (Personenfoto); sie sind im Chat verschickt.

## Texttabelle (neue Texte im Entwurf)

| Stelle | Original | Vorschlag | Begründung | Offene Fragen |
|---|---|---|---|---|
| Header, zweiter Button | «So funktioniert unsere Methode» | «Beispielauswertung ansehen» | Die Beispielauswertungen sind der stärkste Beleg; Entscheider sollen sie direkt erreichen | – |
| Header, Eckdaten | – | «Ergebnisse in 4–6 Wochen · Fünf Perspektiven · 25 Minuten Skill-Check je Person» | Alle drei Angaben stehen schon auf der Seite (Aufwand, Methode). «Persönliche Begleitung» aus dem Vorschlag von ChatGPT ist weggelassen, weil so nicht belegt | Sind das die drei richtigen Eckdaten? [ROWAPA bestätigen] |
| Foto mit Text, Titel | – | «Eingeordnet von Menschen aus der Praxis.» | fasst den bestehenden Satz zusammen; kurz, im Ton der anderen Titel | Titel passend? |
| Foto mit Text, Satz | Satz aus «Fünf Perspektiven» | unverändert: «Unsere Fachpersonen bringen eigene Praxis aus Vertrieb und Führung in der Finanzbranche mit. Sie ordnen die Ergebnisse ein und leiten Empfehlungen ab.» | keine neue Aussage | – |
| Diagramm-Hinweise | – | «Grösster Unterschied zwischen Eigen- und Fremdsicht» · «Grösster Abstand zum Soll» · «Tiefster Wert: Team D · Verbindlichkeit (5.2)» · «Grösster Abstand zur internen Referenz» | werden aus den Musterdaten berechnet und passen sich an, wenn sich die Werte ändern | – |

Redaktionsleitfaden: klar, wofür (Entscheider), Nutzen (schneller zum Beleg), nächster Schritt (Beispielauswertung) ✓. Sie-Form, «Unternehmen» ✓.

## Startseite

Die Abwechslung bei den Titeln gilt wohl auch für die Startseite. Wie besprochen kommt zuerst die Performance-Analyse. Sobald dort entschieden ist, welche Anordnung gefällt, zeige ich für die Startseite einen Vorschlag zum Umschalten.

## Prüfsession 15 (Entscheid 378)

| Bereich | Punkt | Ergebnis |
|---|---|---|
| A CI | Farben, Schrift | ✓ Foto mit Text über die Klasse `theme-kontrast` (Variablen), Plum nur für Hinweise und Markierung, keine neuen Farben |
| B Texte | keine erfundenen Fakten | ✓ Eckdaten nur aus Angaben der Seite; «persönliche Begleitung» weggelassen; Formulierung zum Skill-Check präzisiert («25 Minuten Skill-Check je Person» statt «Rund 25 Minuten je Person») |
| B Texte | Texttabelle | ✓ siehe oben |
| B Fotos | volle Breite, Köpfe (Entscheid 122, 392) | ✓ auch in breiten, niedrigen Fenstern (2000 × 750) |
| C Bauweise | nativ zuerst | ✓ Foto, Bildband, Interaktionen und Lupe nativ. Umschaltleiste als Entwurfs-Skript nur auf der Entwurfsseite (wie Entscheid 96); nach dem Entscheid wird die Wahl nativ gebaut und das Skript gelöscht |
| C Bauweise | «Bewegung reduzieren» | ✓ Interaktionen springen ans Ende; Leiste ohne Bewegung |
| D Abmachungen | Entscheide 389, 393 | ✓ alles als Entwurf, umschaltbar, «heute» = echte Seite |
| D Abmachungen | Entscheide 368–385 | ✓ Mauszeiger, Logo-Leiste, keine Abschnittsnavigation, Seitenwechsel 1,0 s unverändert |
| E Ablauf | Veröffentlichen | ✓ nur Testadresse |
| E Ablauf | Löschen | ✓ nichts gelöscht. Die Titel-Interaktion der echten Seite gilt jetzt nur noch für die echte Seite; die Entwurfsseite hat zwei eigene |

## Fragen an ROWAPA

1. Welche der zehn Punkte übernehmen? Am einfachsten: auf der Entwurfsseite die gewünschte Kombination einstellen und mir den Link aus «Link zu dieser Auswahl» schicken.
2. Foto: Bildband oder Foto mit Text (meine Empfehlung)? Passt der Titel «Eingeordnet von Menschen aus der Praxis.»?
3. Eckdaten im Header: Stimmen die drei Angaben so?
