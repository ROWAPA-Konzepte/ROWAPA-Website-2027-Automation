# Runde 84 · Linie wie Startseite, Button-Abstand 48 px, Titel C, Seitenwechsel 0,5 s in alle Richtungen gleich (Stufe 4, 01.11.2026)

## Auftrag ROWAPA (Entscheid 398)

- Foto-Hintergrund grau mit Linie, und zwar genau die gleiche Linie wie auf der Startseite (grauer Abschnitt mit Linie).
- Button-Abstand im Header 48 px.
- Titel über den Beispielauswertungen: C.
- Seitenwechsel: Beobachten konnte ROWAPA ihn nur von der Performance-Analyse zurück zur Startseite. So soll er aus allen Richtungen immer gleich funktionieren, mit 0,5 s.

## 1. Übernommen (nativ, echte Seite und Entwurfsseite)

| Punkt | Umsetzung |
|---|---|
| Linie unter der Foto-Section | Klasse `section_bildtext`: Rahmen unten 1 px, durchgezogen, Farbe über **dieselbe Variable** wie die Linie unter «Im Blickpunkt» auf der Startseite (`section_cas` + `theme-soft`). Gemessen: beide `1px solid rgba(29, 49, 73, 0.14)`, über die ganze Breite, das Foto steht auf der Linie |
| Button-Abstand im Header | Klasse `header-unterseite_lead`: Abstand unten 48 px (Handy 40 px). Gilt für den Header aller Unterseiten (Komponente) |
| Titel C | «Welche Antworten liefert die Auswertung?» (Performance-Analyse und Entwurfsseite). «Wo bleibt …» steht damit nur noch einmal auf der Seite (Ausgangslage) |

Die Umschaltleiste ist von der Entwurfsseite entfernt, weil alle Punkte entschieden sind. Das Skript bleibt registriert und kann für neue Entwürfe wieder eingehängt werden.

## 2. Seitenwechsel: was anders war und was jetzt gilt

Jede Richtung wurde Bild für Bild aufgezeichnet: Startseite → Performance-Analyse über das Megamenü, Performance-Analyse → Startseite über das Logo und Zurück.

**Gefundene Unterschiede (vorher):**
1. **Das Megamenü blieb nach dem Klick offen stehen**, bis die neue Seite geladen war (ohne Vorladen 0,4–0,8 s). Erst dann begann die Bewegung. Auf dem Rückweg über das Logo gibt es kein Menü, darum wirkte er ruhiger.
2. **Die Lupe im Header der Performance-Analyse fehlte während des Einfahrens.** Ein kleines Vorbereitungs-Skript blendet sie aus, damit sie sich beim ersten Laden aus Punkten aufbauen kann. Beim Seitenwechsel kam die Seite deshalb unvollständig herein, die Lupe baute sich erst danach auf. Die Startseite kommt dagegen vollständig herein.
3. **Zurück** wirkt am flüssigsten, weil der Browser die Seite noch im Speicher hat.

**Jetzt (Seitenwechsel 1.2.0, Grafik-Skript 1.28.0, für alle Besucher):**
- **0,5 s**, gleiche sanfte Kurve, in jede Richtung (Handy weiterhin 0,3 s überblenden).
- **Menü schliesst sofort beim Klick.**
- **Zielseite vorladen:** Fährt die Maus über einen Link, lädt Chrome die Seite im Hintergrund vor (ab 992 px Fensterbreite; darunter beim Antippen). Der Klick zeigt sie dann sofort, wie beim Zurück.
- **Neue Seite kommt vollständig herein:** Die Lupe ist beim Einfahren schon da und baut sich danach nicht noch einmal auf. Beim direkten Aufruf der Seite (z. B. aus Google) baut sie sich wie bisher auf.
- **Grafiken starten nach dem Einfahren**, damit die Bewegung nicht ruckelt (seit Runde 83).
- **«Bewegung reduzieren»:** kein Seitenwechsel, wie bisher.

**Gemessen auf der Testadresse (1440 × 900):**

| Richtung | Menü 60 ms nach Klick | Klick bis Bewegung, vorgeladen | ohne Vorladen | Einfahren | Lupe |
|---|---|---|---|---|---|
| Startseite → Performance-Analyse (Megamenü) | zu | 3 ms | 0,45–0,8 s | 0,55–0,57 s | beim Einfahren sichtbar, kein zweiter Aufbau |
| Performance-Analyse → Startseite (Logo) | zu | 2 ms | 0,37–0,39 s | 0,64–0,66 s | – |

Die Zeiten «ohne Vorladen» gelten für Browser ohne diese Funktion oder wenn der Klick sehr schnell nach dem Darüberfahren kommt. Chrome lädt nicht vor, wenn der Datensparmodus oder der Energiesparmodus aktiv ist oder wenn in den Einstellungen «Seiten vorab laden» ausgeschaltet ist.

## Geprüft

| Prüfung | Ergebnis |
|---|---|
| Linie Performance-Analyse = Linie Startseite (Breite, Art, Farbe) | ✓ |
| Button-Abstand 48 px (1440), 40 px (390), alte Vorschauseite ebenfalls 48 px | ✓ |
| Titel C, «Wo bleibt …» nur noch einmal | ✓ |
| Seitenwechsel 1.2.0 und Grafik 1.28.0 live, gehostete Dateien identisch mit dem Repository | ✓ |
| Beide Richtungen ohne und mit Vorladen (Vorladen geprüft ohne angehängtes Messwerkzeug) | ✓ |
| Umschaltleiste von der Entwurfsseite entfernt | ✓ |

## Prüfsession 20 (Entscheid 378)

| Bereich | Punkt | Ergebnis |
|---|---|---|
| A CI | Linie | ✓ dieselbe Variable wie auf der Startseite, keine neue Farbe |
| A CI | Abstände | ✓ 48 px / 40 px im 8-px-Raster |
| B Texte | Titel C | ✓ Sie-Form, keine neue Behauptung; Doppelung «Wo bleibt …» gelöst |
| C Bauweise | nativ zuerst | ✓ Linie, Abstand, Titel nativ; Seitenwechsel bleibt ein kleines Kopf-Skript (Webflow kann keine Seitenübergänge) |
| C Bauweise | Komponente | ✓ Abstand in der Klasse des Unterseiten-Headers, wirkt überall gleich |
| C Bauweise | «Bewegung reduzieren» | ✓ kein Seitenwechsel |
| D Abmachungen | Entscheide 391, 397, 398 | ✓ 0,5 s, in alle Richtungen gleich |
| E Ablauf | Veröffentlichen | ✓ nur Testadresse |
| E Ablauf | Löschen | ✓ nichts gelöscht; die Umschaltleiste ist nur ausgehängt |

## Offen

- Megamenü-Markierung «Current»: von Hand im Designer (macht ROWAPA, Anleitung Runde 80).
- Inhalte für Generalagenten, Bankleiter und Kontext der Kundenstimme nur mit Angaben von ROWAPA (offener Punkt 127).
- Alle gewünschten Punkte zur Performance-Analyse sind umgesetzt. Nächster Schritt laut Priorität: Seite Vertriebsperformance (Übernahme aus der Performance-Analyse entscheiden). [ROWAPA bestätigen]
