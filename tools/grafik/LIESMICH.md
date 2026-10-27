# ROWAPA Grafik

Ein einziges Skript für alle Punkte-Grafiken und kleinen Bewegungen der ROWAPA-Website. Es bündelt eine einzige Bibliothek, Lenis 1.3.26 (MIT-Lizenz, weiches Scrollen, nur auf Seiten mit den Themenlinien aktiv), insgesamt rund 57 KB, komprimiert rund 21 KB.
Ohne das Skript, bei «Bewegung reduzieren» oder wenn der Browser kein WebGL kann, bleiben überall die Standbilder stehen. Die Pfeile der Insights-Reihe und der Knopf «Nach oben» funktionieren auch bei «Bewegung reduzieren».

## Was es heute kann

| Attribut `data-grafik` | Wo | Was passiert |
|---|---|---|
| `punktemeer` | Header (`hero_grafik`) | welliges Punktfeld (WebGL), Kräuseln unter der Maus, ruhig |
| `punktemeer-footer` | Footer (`footer_grafik`) | dasselbe Feld, flacher, hinter der Wortmarke |
| `punktfigur…` (z. B. `punktfigur`, `punktfigur-vertrieb`) | Themenkarten, Karte Vertriebsperformance | die Figur baut sich einmal aus dem Standbild auf und ruht dann; beim Darüberfahren zieht sie sich leicht zusammen |
| `zaehler` | Kennzahlen (`stat_number`) | zählt einmal von 0 bis zum Wert, sobald die Zahl ins Bild kommt; Vorsatz und Zusatz («%», «CHF») bleiben |
| `treppe` | Unser Vorgehen (`vorgehen_media`) | die vier Stufen bauen sich nacheinander auf, die Phase in der Liste (`.step_item`) leuchtet mit; danach Phase 01. Darüberfahren/Klick auf eine Phase oder Klick auf eine Stufe hebt sie hervor (Klasse `is-aktiv` auf `step_item` und `step_number`) |
| `orbit` | ROWAPA Digital (`digital_visual`) | Kugel (`.orbit_kugel`) dreht sich (24 s), Kacheln (`.orbit_tile`) ziehen auf der Bahn (`.orbit_bahn`, 45 s) und halten nur, solange die Maus über den Karten ist; Karte im `.tools_grid` ↔ Kachel gleicher Position: Kachel `is-aktiv`, feine Linie zur Kugel. Klick auf eine Kachel: die passende Karte hebt sich kurz an (Klasse `is-angetippt`, 1,4 s) und wird ins Bild geholt, falls nötig; den Link zur Unterseite trägt die Karte. Handy: Kacheln stehen |
| `reihe` | Insights (`insights_reihe`) | Pfeile `[data-reihe="zurueck"]` / `[data-reihe="weiter"]` blättern um eine Karte, `[data-reihe="balken"]` zeigt den Stand (falls vorhanden); der Scrollbalken des Browsers ist ausgeblendet, wischen und Trackpad gehen weiter |
| `nachoben` | Footer (Komponente, Link mit Klasse `nach-oben`) | Knopf erscheint, sobald man gut eine Bildschirmhöhe gescrollt hat (Klasse `is-sichtbar`), Klick führt an den Seitenanfang. Da er im Footer liegt, ist er auf jeder Seite |
| `zeiger` | ein beliebiges (verstecktes) Element der Seite | Mauszeiger als Punkt (Plum) mit feinem Ring, der Ring steht immer im Kontrast zum Grund (dunkel auf hell, hell auf dunkel und auf Fotos); `data-zeiger="a"` (Standard) schlicht, `"b"` Ring wächst zusätzlich auf Links und Karten (Text aus `data-zeiger-text`, sonst «Öffnen»). Heute an der Navigation gesetzt. Nur mit Maus; in Formularfeldern normaler Cursor |
| `vorschau` | Megamenü | Links `[data-vorschau="x"]` zeigen beim Darüberfahren die Karte `[data-vorschau-karte="x"]` (Klasse `is-aktiv`) |
| `themen` | Themenlinien «Lösungen für Unternehmen» (`section_themen`, ab 1.7.0 Szene nach dem Vorbild Tresmares) | ab 992 px: Vollbild-Bühne steht beim Scrollen, je Thema eine Fensterhöhe Scrollweg. Alles hängt am Scroll-Fortschritt: Vorhang von unten (oder diagonal 45°), das alte Thema dunkelt ab (Manganese), Figur −20 % und Text −30 % der Fensterhöhe nach oben, das neue kommt von unten nach; der alte Titel blendet im ersten Viertel aus, der neue im letzten Viertel ein; die Plum-Form (45°-Bänder, `data-form`) schrumpft zu vier kleinen Quadraten und wächst zur nächsten Form. Weiches Scrollen mit Lenis, Einrasten bei der Hälfte (1,3 s), Klick in der Liste 1 s. Navigation und «Nach oben» sind ausgeblendet, solange die Bühne steht. Tablet und Handy: Blöcke untereinander mit stehender Leiste, Titel ausserhalb des Blicks blass (35 %), der ausscheidende Block dunkelt leicht ab, Form ruht hinter der Figur. «Bewegung reduzieren»: Blöcke untereinander, nur die Markierung |
| `varianten` | Variantenleiste (intern) | Knöpfe `[data-wahl="gruppe:wert"]` zeigen `[data-variante="gruppe:wert"]` und blenden die übrigen der Gruppe aus; aktiver Knopf Klasse `var_wahl-an` |

Die Kacheln im Orbit stehen in gleichen Abständen entlang der Bahn (gleiche Weglänge); die letzte Kachel startet oben. Die Treppe baut sich auf, sobald sie in der Bildmitte steht. Sie kennt `data-modus`: `folge` (Standard: Stufen bauen nacheinander auf, Phasen leuchten mit), `ruhig` (baut einmal auf, wechselt nur bei Darüberfahren oder Klick) und `tabs` (Reiter `[data-phase-tab]` schalten Tafeln `[data-phase]`).

`zeiger`, `vorschau`, `varianten`, `reihe` und `nachoben` sind Bedienung und laufen auch bei «Bewegung reduzieren». `themen` zeigt bei «Bewegung reduzieren» die Karten untereinander und markiert nur das Thema im Bild.

**Themenlinien einstellen** (Attribute auf der Section `section_themen`): `data-uebergang` = `unten` (Standard) oder `diagonal`; zum Vergleichen ohne Änderung in Webflow die Adresse mit `?uebergang=diagonal` bzw. `?uebergang=unten` öffnen. `data-schritt` = Scrollweg je Thema als Anteil der Bildschirmhöhe (Standard `1`). Je Panel `data-form` = `band`, `doppel`, `winkel`, `trichter` oder `raster` (Plum-Form aus 45°-Bändern bzw. Quadraten). Ein Thema mehr oder weniger: Panel `themen_panel` (mit eigener ID, z. B. `thema-neu`) duplizieren bzw. löschen und in der Liste einen `themen_link` mit Link «Section» auf dieses Panel; das Skript zählt selbst.

Zusätzlich: Hover-Videos der Karten (`<video data-hover-video>`), früher eigenes Skript «ROWAPAHoverVideo».

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
| `data-spalten` | Treppe: drei Spaltengrenzen als Anteile der Bildbreite, z. B. `0.26,0.5,0.75` (nur bei einem anderen Bild nötig) | passend zum mitgelieferten Bild |

**Figuren tauschen:** Das Standbild ist die Vorlage. Neues PNG mit transparentem Hintergrund hochladen und im Bildfeld der Karte («Grafik») auswählen; die Animation entsteht daraus von selbst: Die Figur setzt sich aus kleinen Ausschnitten genau dieses Bildes zusammen. Das Bild wird dafür weder ein zweites Mal geladen noch ausgelesen. JPG-Bilder bleiben als Standbild stehen (keine Animation).

**Treppe und Kugel tauschen:** Die Vorlagen entstehen mit `figuren/treppe.js` und `figuren/kugel.mjs` (siehe `figuren/LIESMICH.md`). Die Treppe ist ein PNG mit den Stufen im Ruhezustand; die Plum-Hervorhebung färbt das Skript selbst ein. Das Kugel-Standbild ist mit genau der Zeichnung des Skripts erzeugt, damit der Übergang nahtlos ist.

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

Prüfwerkzeuge: `pruefung/messen.js` (Ladezeit, Datenmenge), `pruefung/rechenlast.js` (Bilder pro Sekunde der Kugel).

## Leitlinien

- Jede Grafik baut sich einmal auf und ruht dann. Dauerhaft bewegt sind nur das Punktemeer (Header, Footer) und die Kugel mit den Kacheln, alle langsam und nie gleichzeitig im Bild.
- Kein Scroll-Halt und kein Farbfluss. Ausnahme Themenlinien (Entscheid ROWAPA, Runde 20): Auf Seiten mit dieser Section scrollt die Seite ab 992 px weich (Lenis) und rastet in der Section auf die Themen ein, wie die Referenz. Bei «Bewegung reduzieren» und auf Tablet und Handy bleibt das Scrollen normal.
- Die einzige Einblendung der Startseite ist die Farbfläche im Blickpunkt (CAS); sie ist eine native Webflow-Interaction, nicht Teil dieses Skripts. Ebenso nativ: Titel-Strich und Team-Kacheln nacheinander.
- Start erst nach dem Laden der Seite; jede Grafik rechnet nur, solange sie sichtbar ist.
