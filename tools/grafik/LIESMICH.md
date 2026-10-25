# ROWAPA Grafik

Ein einziges Skript für alle Punkte-Grafiken der ROWAPA-Website. Es kommt ohne Bibliotheken aus (rund 12 KB, komprimiert rund 5 KB).
Ohne das Skript, bei «Bewegung reduzieren» oder wenn der Browser kein WebGL kann, bleiben überall die Standbilder stehen.

## Was es heute kann

| Attribut `data-grafik` | Wo | Was passiert |
|---|---|---|
| `punktemeer` | Header (`hero_grafik`) | welliges Punktfeld (WebGL), Kräuseln unter der Maus, ruhig |
| `punktemeer-footer` | Footer (`footer_grafik`) | dasselbe Feld, flacher, hinter der Wortmarke |
| `punktfigur…` (z. B. `punktfigur`, `punktfigur-vertrieb`) | Themenkarten, Karte Vertriebsperformance | die Figur baut sich einmal aus dem Standbild auf und ruht dann; beim Darüberfahren zieht sie sich leicht zusammen |

Zusätzlich: Hover-Videos der Karten (`<video data-hover-video>`), früher eigenes Skript «ROWAPAHoverVideo».

Geplant (nächster Schritt): `treppe` (Unser Vorgehen), `orbit` (ROWAPA Digital), Zähler bei «Was uns antreibt», Insights-Reihe.

## Einstellungen ohne Code

In Webflow: Element auswählen › Zahnrad (Settings) › **Custom attributes**.

| Attribut | Wirkung | Standard |
|---|---|---|
| `data-tempo` | Geschwindigkeit (0.5 = halb so schnell, 2 = doppelt) | `1` |
| `data-dichte` | Anzahl Punkte (0.5 = halb so viele) | `1` |
| `data-hoehe` | Wellenhöhe beim Punktemeer | `1` |
| `data-kraeuseln` | `aus` schaltet das Kräuseln unter der Maus ab | an |
| `data-verzoegerung` | Sekunden bis zum Aufbau einer Figur | automatisch gestaffelt |
| `data-farbe-1`, `data-farbe-2`, `data-farbe-3` | Farben des Punktemeers als Hex (z. B. `#486EA3`) | CI-Variablen |
| `data-hintergrund` | `aus` lässt beim Header-Punktemeer den Verlauf weg | an |

**Figuren tauschen:** Das Standbild ist die Vorlage. Neues PNG mit transparentem Hintergrund hochladen und im Bildfeld der Karte («Grafik») auswählen; die Animation entsteht daraus von selbst: Die Figur setzt sich aus kleinen Ausschnitten genau dieses Bildes zusammen. Das Bild wird dafür weder ein zweites Mal geladen noch ausgelesen. JPG-Bilder bleiben als Standbild stehen (keine Animation).

**Farben:** Das Punktemeer nimmt die Webflow-Variablen der Sammlung «Farben» (Great Serpent, White, Plum Perfect). Die Figuren nehmen die Farben aus ihrem Standbild. Der Verlauf hinter der Treppe bei Vertriebsperformance ist eine Gestaltung der Klasse `card_featured_grafik` (Style-Panel), nicht Teil des Bildes.

## Einbindung

Site settings › Custom code ist leer. Das Skript ist über die Webflow-Schnittstelle als «ROWAPAGrafik» registriert und site-weit im Footer eingebunden, geladen von jsDelivr aus diesem Repository mit fester Commit-Kennung und SRI-Prüfsumme (`dist/sri.txt`). Jede Fassung bleibt dadurch unverändert und lässt sich zurückholen.

## Neue Fassung

```
cd tools/grafik
npm install
npm run build          # schreibt dist/rowapa-grafik.min.js und dist/sri.txt
```

Danach committen und pushen, in Webflow die neue Commit-Kennung und Prüfsumme als neue Skript-Version registrieren und anwenden.

## Leitlinien

- Jede Grafik baut sich einmal auf und ruht dann. Dauerhaft bewegt sind nur das Punktemeer (Header, Footer) und später der Orbit, alle langsam und nie gleichzeitig im Bild.
- Kein Scroll-Halt, kein Farbfluss, kein Smooth Scrolling.
- Start erst nach dem Laden der Seite; jede Grafik rechnet nur, solange sie sichtbar ist.
