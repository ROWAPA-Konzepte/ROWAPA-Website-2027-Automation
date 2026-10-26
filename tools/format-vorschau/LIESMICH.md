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
