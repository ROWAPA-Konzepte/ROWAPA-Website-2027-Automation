# Runde 59 · Performance-Analyse: Effekte als Video (31.10.2026)

Ansicht: https://claude.ai/artifact/6HsZc1zhigNCnBFpgeMxCk (Reiter «Effekte»). Videos hier: `effekte_desktop.mp4` (1440 × 900, rund 67 s), `effekte_handy.mp4` (390 px, rund 28 s). Nichts in Webflow gebaut.

Aufnahme: Die Startseite der Testadresse wird geladen, der Inhalt beim Laden durch den Entwurf ersetzt. Deshalb laufen Punktemeer mit Netz und Mauszeiger mit dem echten ROWAPA-Grafik-Skript. Die übrigen Effekte sind für die Vorschau nachgebaut (`tools/entwuerfe/fx59.js`); Werkzeug `tools/entwuerfe/runde59_performance-analyse.js` (`MODE=video`).

| # | Effekt (Entscheid 368) | Im Video | Bau in Webflow |
|---|---|---|---|
| 1 | Header: Punktemeer mit Netz über die ganze Header-Fläche, Lupe setzt sich aus Punkten zusammen, Text und Plum-Strich laufen ein | 0:00 | Punktemeer: vorhandenes Modul; Lupe: Figuren-Aufbau erweitern (heute nur ausserhalb des ersten Bildschirms); Text: native Interaction |
| 2 | Section-Köpfe: Kicker-Linie wächst, Titel gleitet herein | durchgehend | native Interaction, einmal für alle Seiten |
| 3 | Leistungsfelder gestaffelt, Plum-Linie des Führungsbands wächst | 0:11 | native Interaction |
| 4 | «Was Sie erreichen»: Kacheln nacheinander | 0:20 | native Interaction |
| 5 | Reiter: Grafiken bauen sich auf (Balken, Führungspunkte aus der Mitte, Teamtabelle als Welle, Massnahmen Zeile für Zeile) | 0:27 | native Interaction beim Reiterwechsel |
| 6 | Besonderer Effekt: Scroll-Geschichte «Fünf Methoden». Die Grafik bleibt stehen, Methode für Methode leuchtet auf, ihre Linie zeichnet sich mit einem Punkt zum Ergebnis, die Punkte im Ergebnis füllen sich; am Ende «Fünf Quellen, ein Bild». Darüberfahren färbt eine Linie Plum. Handy: nacheinander einblenden, ohne Stehenbleiben | 0:45 | neues Modul im ROWAPA-Grafik-Skript (wie «themen» auf der Startseite) |
| 7 | Kundenstimme: Plum-Linie zeichnet sich | 0:59 | native Interaction |
| 9 | Mauszeiger Punkt mit Ring wie Startseite | durchgehend | vorhandenes Modul, auf allen Seiten |

Nicht umgesetzt (Empfehlung «eher nicht»): Zähler in der Aufwand-Leiste. Header B hat unten mehr Luft, damit das Punktemeer unter den Buttons liegt.
