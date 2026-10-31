# Vorschau-Werkzeuge (lokaler Render)

Hilfsskripte, mit denen Claude die Webflow-Seite lokal in Chromium nachbildet, wenn die Designer-Vorschau nicht erreichbar ist. Sie enthalten keine Zugangsdaten.

| Datei | Zweck |
|---|---|
| `gen_css2.py` | erzeugt `site.css` aus einem Style-Export der Webflow-Schnittstelle (`styles_v2.txt`, inkl. Variablen und Theme-Modi, alle Breakpoints) |
| `gen_html2.py` | erzeugt `home.html` (Startseite `/home-v2`, Stand Rev. 2) |
| `shot3.js` | Screenshots bei mehreren Breiten, prüft seitliches Scrollen |
| `crop.js`, `crop2.js` | Ausschnitte einzelner Sections |
| `s3upload.py` | lädt eine Datei mit den von Webflow gelieferten Upload-Feldern hoch |

Voraussetzungen: Python 3, Node mit Playwright, TASA-Schriften (woff2) im selben Ordner, `rowapa-logo-hell.svg` bzw. Logos aus `exports/ci-logos/`.
Die Vorschau ist eine Annäherung. Massgebend ist immer Webflow (Designer-Vorschau bzw. Staging).
