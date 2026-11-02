# Runde 69 · Titel einfarbig, Mauszeiger 1:1, Logo-Leiste, Sprache, Kontakt (Stufe 4, 01.11.2026)

Rückmeldung ROWAPA (Entscheid 383):
- **Titel:** einfarbig (A).
- **Mauszeiger:** Kreis, der 1:1 mitläuft, ohne Nachziehen.
- **Logos:** wie vorgeschlagen, also Laufband nur auf der Startseite, auf Unterseiten eine ruhige Leiste nach den Kundenstimmen. Kein zusätzlicher Zielgruppen-Hinweis im Header nötig: Wer direkt auf die Seite kommt, ist schon informiert.
- **Sprache:** «Beraterinnen und Berater».
- **Führungsband:** Die Marken bleiben.
- **Kontakt:** Der Satz ist je Seite anpassbar.

Testadresse: https://rowapa-website-2027-automation.webflow.io/performance-analyse-vorschau (veröffentlicht und geprüft). Bilder: `logo-leiste_desktop.jpg`, `logo-leiste_handy.jpg`, `vorschau_header_ohne-band_1440.jpg`.

## Umgesetzt

| Thema | Umsetzung |
|---|---|
| Titel einfarbig | keine Änderung nötig: Die zweite Zeile (`heading-wendung`) bleibt in der Titelfarbe. Gilt als Regel für alle zweiteiligen Titel |
| Mauszeiger | **Grafik-Skript 1.20.0** (site-weit, Footer): Ring und Punkt laufen 1:1 mit der Maus, kein Nachziehen mehr. Gemessen auf Startseite und Vorschau: 40 ms nach einer Bewegung stehen Punkt und Ring genau an der Mausposition. Wer wieder einen Nachlauf möchte: Attribut `data-zeiger-nachlauf="0.8"` am Element mit `data-grafik="zeiger"` (an der Navigation). Der Punkt in der Mitte bleibt (Entscheid 369 «Punkt mit Ring»); soll nur der Kreis sichtbar sein, ist das eine kleine Erweiterung [ROWAPA: Punkt behalten?] |
| Logo-Leiste | Neue Komponente **«Logo-Leiste»** (Gruppe Sections) direkt nach der Kundenstimme: weisser Grund, feine Linien oben und unten, Bezeichnung «Unter anderem vertrauen uns diese Finanzunternehmen», 12 Logos grau (gleiche Bilder und Darstellung wie das Laufband: Graustufen, 70 % Deckkraft), ohne Bewegung. Raster 6 × 2 am Desktop, 4 Spalten Tablet, 3 Spalten Handy (4 Reihen) |
| Logo-Band im Header | in der Vorschau entfernt. Die Komponente «Logo-Band» bleibt für die Startseite und steht vorerst noch auf der Originalseite `/performance-analyse`, bis die Vorschau übernommen wird. Die Header-Höhe bleibt, darum ragt der Anfang der nächsten Section ins erste Bild und lädt zum Weiterscrollen ein |
| Sprache | «Was machen unsere besten Beraterinnen und Berater anders?» |
| Marken im Führungsband | bleiben |
| Kontakt | Satz und Button-Beschriftung je Seite über die Eigenschaften der Komponente; Titel und Darstellung überall gleich. Keine Änderung nötig |

**Abweichung von meinem Vorschlag:** Ich hatte die Logos aus der CMS-Collection «Unternehmen & Partner» vorgeschlagen. Die Einträge sind aber noch Entwürfe (unvollständig, Regel CLAUDE.md 5). Eine Collection-Liste bliebe auf der veröffentlichten Seite darum leer. Darum stehen die Logos vorerst fest in der Komponente, an einer Stelle gepflegt. Sobald die Einträge vollständig und veröffentlicht sind, kann die Leiste auf die Collection umgestellt werden.

## Prüfung

- Testadresse 1440 × 900 und 390 × 844 mit TASA-Schriften. Ergebnisse:
  - 12 von 12 Logos geladen
  - kein Logo-Band mehr im Header der Vorschau
  - keine horizontale Verschiebung
  - Leiste 261 px (Desktop) bzw. 324 px (Handy) hoch
- Grafik 1.20.0 auf Startseite und Vorschau geladen (Commit `bcedb3d`), SRI geprüft.

## Prüfsession 5 (Entscheid 378), vor dem Vorschlag zur Freigabe

| Bereich | Punkt | Ergebnis |
|---|---|---|
| A CI | Titel | ✓ einfarbig; Regel in der Prüfliste ergänzt |
| A CI | Farben, Raster | ✓ Leiste nur mit Variablen (Weiss, Linie); Abstände 48/32/24 px |
| A CI | Ruhe, «Structure over decoration» | ✓ keine Bewegung, graue Logos, Raster |
| B Texte | inklusive Sprache | ✓ «Beraterinnen und Berater» |
| B Texte | Barrierefreiheit | ✓ Alt-Texte für alle 12 Logos; Bezeichnung sichtbar |
| C Bauweise | nativ, pflegbar | ✓ Komponente, Logos einmal pflegen; Zeiger bleibt Teil des Grafik-Skripts (Bedienung, kein Standard-Layout) |
| C Bauweise | CMS | ? Logos vorerst fest statt aus dem CMS (Begründung oben); Umstellung, sobald die Einträge veröffentlicht sind |
| D Abmachungen | Mauszeiger auf allen Seiten | ✓ gleich auf allen Seiten, jetzt 1:1 (Entscheid 369 ergänzt durch 383) |
| D Abmachungen | Logos | ✓ Startseite Laufband, Unterseiten Leiste nach der Kundenstimme (ersetzt Entscheid 367/375 für die Unterseiten) |
| E Ablauf | Löschen | ✓ nur die Logo-Band-Instanz in der Vorschau entfernt, auf Entscheid ROWAPA; Komponente bleibt |
| E Ablauf | Veröffentlichen | ✓ nur Testadresse |
