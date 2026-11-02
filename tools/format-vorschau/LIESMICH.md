# Format-Vorschau (Runde 17)

Werkzeug für die Entscheidung «Darstellung je Format». Es fotografiert die Staging-Seite `/home-v2` in acht Formaten, jede Section als genau einen Bildschirm (Section beginnt unter der Navigation), und baut daraus eine Vorschauseite mit Umschaltern.

**Die Website wird dabei nicht verändert.** Die Zustände «Vorschlag» und «Gestrafft» werden nur im Testbrowser nachgestellt:

- `vorschlag.css`: Darstellung je Format. Nur Mittel, die Webflow nativ kann: Breakpoints nach Breite (≥1920, ≥1440, ≥1280, 992–1279, ≤991, ≤767, ≤479) und Grössen, die an die Fensterhöhe gekoppelt sind (`svh`, `clamp`). Jede Regel ist später eine Klasse oder Breakpoint-Einstellung im Designer.
- `gen.js` › `GESTRAFFT`: Textkürzungen und entfernte Blöcke (Original → Vorschlag steht auch in der Vorschauseite).
- `gen.js` › `KOPF_A`: Header Variante A (ohne Obertitel, Leiste «ROWAPA Digital» mit fünf Symbolen).

## Ablauf

1. TASA-Schriften (OFL) lokal ablegen, Ordner per `FONTS=/pfad` angeben (der Schrift-Server ist in der Cloud-Umgebung gesperrt).
2. `Z=heute-heute,heute-gestrafft,kopfA OUT=./heute node gen.js` und `Z=vorschlag-heute,vorschlag-gestrafft,kopfAv OUT=./vorschlag node gen.js` (Formate mit `F=1440,390` einschränkbar).
3. `python3 bauen.py ./heute ./vorschlag` → Ordner `site/` (index.html + Bilder als WebP), als private Vorschauseite veröffentlichen.

Messung je Section: Section-Oberkante bis Ende des Inhalts (ohne unteren Abstand) gegen sichtbare Höhe (Fenster minus Navigation). Startbildschirm: ganze Höhe gegen Fensterhöhe.

## Stand Runde 18

Der Vorschlag und die Straffung sind seit Runde 18 nativ in Webflow umgesetzt. Die Zustände «vorschlag-…» und «…-gestrafft» würden jetzt doppelt wirken; zum Prüfen der Seite, wie sie ist, nur `Z=heute-heute` verwenden:

`FONTS=/pfad Z=heute-heute OUT=./live node gen.js`

Ergebnis 26.10.2026 (live): 1920 bis 768 px 12 von 12 Sections in einem Bildschirm, Seite 10,3–11,7 Bildschirme; 390×844 10 von 12 (12,8 Bildschirme), länger bleiben «Im Blickpunkt» (+128 px) und «Neueste Insights» (+221 px). Die Vorschau hatte «Im Blickpunkt» auf dem Handy zu kurz gemessen, weil ihre Abstandsregel den Bildplatz über dem Text überschrieb.

## Stand Runde 19

`SEITE=home-v3` misst eine andere Seite (Standard `home-v2`). Bei der Themenlinien-Bühne zählt die stehende Fläche (ein Bildschirm), nicht der Scrollweg der fünf Themen; ausgeblendete Sections werden übersprungen.
