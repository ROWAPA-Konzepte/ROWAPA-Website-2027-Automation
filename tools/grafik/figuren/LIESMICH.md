# Punktfiguren erzeugen

Die Standbilder der Punktfiguren (Themenkarten, Vertriebsperformance) sind aus den Formdaten der ersten Fassung gerendert
(Repository `ROWAPA-Konzepte/rowapa-website`, `src/themen.js`, Funktion `makeShapes`), mit three.js r128 in Chromium.

```
# makeShapes aus rowapa-website/src/themen.js nach makeShapes.js kopieren (Funktion vollständig)
node render.js            # vier Themenfiguren: roh-potenzial/-fuehrung/-recruiting/-digital.png
node render.js vertrieb   # Treppe für Vertriebsperformance (helle Farben für dunklen Grund)
```

Danach zuschneiden, auf 320 px (Themen) bzw. 760 px Höhe (Vertrieb) verkleinern und auf 128 bzw. 64 Farben reduzieren (PNG mit Transparenz).
Farben: Manganese, Great Serpent, Mischton Serpent/Sea Cliff, Plum (Themen); Weiss, Sea-Cliff-Töne, Plum hell (Vertrieb).

## Treppe «Unser Vorgehen»

Geometrie aus der ersten Fassung (`rowapa-website/src/vorgehen.js`), alle vier Stufen im Ruhezustand (Säulen gedämpft, Symbole in Serpent und Mischton). Die Plum-Hervorhebung erzeugt das Skript.

```
node figuren/treppe.js 3.4   # roh-treppe.png (Pixeldichte 3,4) und Spaltengrenzen als JSON
```

Danach auf den Inhalt zuschneiden (2,5 % Rand), auf 1200 px Breite verkleinern, auf 64 Farben reduzieren → `grafik-vorgehen-treppe.png`.
Die ausgegebenen Spaltengrenzen auf das zugeschnittene Bild umrechnen; sie stehen als Standard in `src/treppe.js` (`GRENZEN`, `LINIE`, `GRUND`).

## Kugel «Wissensplattform»

Das Standbild entsteht mit genau der Zeichnung des Skriptteils `orbit` (`src/kugel.js`), gleicher Zufallswert, Drehwinkel 0. So übernimmt die drehende Kugel ohne Sprung.

```
node figuren/kugel.mjs       # grafik-wissensplattform-kugel.png, 640 × 640 px
```

Danach auf 96 Farben reduzieren (PNG mit Transparenz, rund 55 KB).

## Symbole der Werkzeuge

`icons/icon-anker.svg`, `-kompass`, `-lotse`, `-segel`, `-logbuch`: Lucide-Symbole (ISC-Lizenz) wie in der ersten Fassung, Strich 1,5 px in Sea Cliff. In Webflow unter Assets › «02 Grafiken».

Playwright und esbuild: `kugel.mjs` lädt Playwright über `require` (globale Installation, ggf. `NODE_PATH` setzen).
