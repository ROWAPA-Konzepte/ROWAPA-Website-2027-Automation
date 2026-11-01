# Runde 71 · Kundenstimmen-Titel, Lupe im Header (Stufe 4, 01.11.2026)

Rückmeldung ROWAPA (Entscheid 385):
- **Freigegeben:** Diagramme und alles Übrige; der Mauszeiger bleibt mit Punkt in der Mitte.
- **Beweis-Block:** «Aus der Praxis» wird Haupttitel, darüber die Bezeichnung «Kundenstimmen».
- **Lupe im Header:** mehr ins Bild setzen, damit der Raum besser genutzt wird.

Testadresse: https://rowapa-website-2027-automation.webflow.io/performance-analyse-vorschau (veröffentlicht und geprüft).
Bilder:
- `lupe_vier-bildschirme.jpg`: 1280 × 800, 1440 × 900, 1920 × 1080, 1024 × 768
- `lupe_handy.jpg`
- `kundenstimmen_1440.jpg`

## Umgesetzt

| Thema | vorher | jetzt |
|---|---|---|
| Beweis-Block, Bezeichnung | «Aus der Praxis» | **«Kundenstimmen»** |
| Beweis-Block, Titel | «Nachhaltig durch Begleitung im Alltag.» | **«Aus der Praxis»** |
| Zitatkarte | ohne eigenen Titel | Der Satz «Nachhaltig durch Begleitung im Alltag.» steht wieder als Plum-Titel in der Karte, wie vor Runde 70, damit die Kernaussage der Stimme nicht verloren geht [ROWAPA: so lassen oder weglassen?] |
| Lupe (Desktop) | 24 % der Fensterbreite, oben neben dem Titel | **28 % (16–32 rem)** und um 12 % der Fensterhöhe tiefer (2–9 rem). Die Linse steht neben Untertitel und Buttons, der Griff reicht an das Wellenmeer. Die Lupe «untersucht» die Daten, und der leere Raum unter den Buttons ist genutzt |
| Lupe (Tablet, Handy) | unter dem Text | unverändert |

Gemessen (Lupe links–rechts, oben–unten; Header-Unterkante):

| Bildschirm | Lupe | Header-Unterkante |
|---|---|---|
| 1280 × 800 | 879–1238, 233–591 | 800 |
| 1440 × 900 | 990–1393, 253–656 | 900 |
| 1920 × 1080 | 1312–1824, 289–801 | 1080 |
| 1024 × 768 | 703–989, 286–573 | 768 |

Nirgends horizontale Verschiebung, nirgends Überlappung mit Text oder Buttons.

## Prüfsession 7 (Entscheid 378)

| Bereich | Punkt | Ergebnis |
|---|---|---|
| A CI | Bezeichnung und Titel | ✓ Bezeichnung (Kicker) wiederholt den Titel nicht; Titel H2 |
| A CI | Raster | ✓ neue Werte über clamp() in rem (fliessend erlaubt) |
| B Texte | keine Inhalte verloren | ✓ Kernaussage der Stimme als Kartentitel zurück (zur Bestätigung) |
| C Bauweise | nativ | ✓ nur Klassenwerte (`header-unterseite_bild` Breite, `header-unterseite_figur` Abstand oben, Tablet 0) |
| D Abmachungen | Header füllt das Bild | ✓ unverändert, Lupe innerhalb |
| E Ablauf | Veröffentlichen | ✓ nur Testadresse |
