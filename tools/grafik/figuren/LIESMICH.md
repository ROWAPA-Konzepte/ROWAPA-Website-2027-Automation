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
