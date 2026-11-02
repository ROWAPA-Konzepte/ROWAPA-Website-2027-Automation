# Runde 72 · Vorschau auf /performance-analyse übernommen (Stufe 4, 01.11.2026)

Freigabe ROWAPA (Entscheid 386): «Übernehmen, aber noch nicht löschen.»

## Was gemacht ist

| Seite | Adresse | Zustand |
|---|---|---|
| **Performance-Analyse (neu)** | `/performance-analyse` | Kopie der freigegebenen Vorschau, veröffentlicht auf der Testadresse. Neue Seiten-ID `6ae68d585207f4b3f4404f1f` |
| Performance-Analyse · Vorschau | `/performance-analyse-vorschau` | unverändert, bleibt bestehen (nicht verlinkt) |
| Performance-Analyse (alt, Stand Runde 64) | `/performance-analyse-alt` | alte Fassung, **als Entwurf gesichert**: im Designer vorhanden, nicht veröffentlicht. Nichts gelöscht |

So bin ich vorgegangen:
1. Alte Seite umbenannt (Adresse `-alt`, Titel mit «alt») und auf Entwurf gesetzt.
2. Neue Seite als Kopie der Vorschau angelegt, unter der bisherigen Adresse `/performance-analyse`.
3. SEO der neuen Seite gesetzt:
   - Titel «Performance-Analyse · ROWAPA»
   - Beschreibung «Entwicklung gezielt steuern. Entscheidungen fundiert treffen. Die Performance-Analyse für mehr Vertriebs- und Mitarbeiterperformance in Banken, Versicherungen und bei Brokern.» Die Branchen bleiben in der Suchmaschinen-Beschreibung, wie bisher.
4. Seitenkopf-Skript «ROWAPAGrafikVorbereitung» auf die neue Seite gesetzt (verhindert kurzes Aufblitzen von Lupe und Strich).
5. Links geprüft: Megamenü, Handy-Menü und Vorschaukarte zeigen per Adresse auf `/performance-analyse` und führen damit automatisch auf die neue Seite. Die Sprungmarke «So funktioniert unsere Methode» (`#methode`) funktioniert.
6. Interaktionen geprüft: Alle betroffenen gelten site-weit über Klassen und Attribute und laufen auf der neuen Seite (Einblendungen, Header-Strich, Logo-Laufband nur Startseite).

## Prüfung auf der Testadresse

| Adresse | Ergebnis |
|---|---|
| `/performance-analyse` | 200, Titel «Performance-Analyse · ROWAPA», neuer Header, 5 Diagramme, Logo-Leiste, kein Logo-Band im Header, Einblendungen bereit und nach dem Scrollen sichtbar, Header-Strich gezeichnet, Grafik 1.21.0 |
| `/performance-analyse-vorschau` | 200, unverändert |
| `/performance-analyse-alt` | 404, wie gewollt (Entwurf, nicht veröffentlicht) |
| `/` (Startseite) | 200, unverändert, Logo-Laufband vorhanden |

## Noch offen

- Vorschau und alte Fassung löschen, sobald ROWAPA zustimmt (Entscheid 386: noch nicht).
- Kartentitel der Kundenstimme bestätigen (offener Punkt 120).

## Prüfsession 8 (Entscheid 378), vor dem Veröffentlichen

| Bereich | Punkt | Ergebnis |
|---|---|---|
| E Ablauf | Löschen | ✓ nichts gelöscht; alte Seite als Entwurf, Vorschau bleibt |
| E Ablauf | Veröffentlichen | ✓ nur Testadresse, keine Live-Domain |
| D Abmachungen | Navigation | ✓ Megamenü (zuoberst unter «Für Unternehmen»), Handy-Menü und Vorschaukarte führen auf die neue Seite |
| C Bauweise | Effekte, Skripte | ✓ Interaktionen site-weit, Seitenkopf-Skript gesetzt, Grafik 1.21.0 |
| B Texte | SEO | ✓ Titel und Beschreibung nach den freigegebenen Texten, Branchen wie bisher in der Beschreibung |
