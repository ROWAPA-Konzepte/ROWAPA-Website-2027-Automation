# Runde 94 · Abnahme Startseite und Performance-Analyse, Abschnitts-Linie kräftiger, Aufräumen sicher, Start Vertriebsperformance (Stufe 4, 02.11.2026)

## Auftrag ROWAPA (Entscheid 408)

| Punkt | Entscheid / Auftrag | Umgesetzt |
|---|---|---|
| Graue Linie | neben dem Foto auf der Performance-Analyse etwas kräftiger; auf der Startseite («Im Blickpunkt») gleich dick und gleich kräftig | ✓ beide Linien 1 px mit der neuen Farbe «Manganese Linie Abschnitt» (Manganese 28 % statt 14 %), gemessen identisch |
| Vier Seiten | von ROWAPA im Designer gelöscht | ✓ |
| Style Manager «Clean up» | Anleitung erbeten | ✓ Anleitung unten; vorher Schutz für Skript-Klassen eingerichtet |
| Abnahme | **Performance-Analyse und Startseite abgenommen** | ✓ festgehalten |
| Nächster Schritt | Vertriebsperformance | Plan und Fragen unten |
| Frage | Haben die Seiten Wiederholungen, sodass die restlichen Seiten nach Muster in einem Schritt entstehen? | Antwort unten |

## 1. Linie kräftiger

- **Vorher:** Beide Linien, unter dem Foto der Performance-Analyse und unter «Im Blickpunkt» auf der Startseite, waren schon gleich, 1 px mit «Manganese Linie» (14 %). Auf Snowbank wirkte das sehr zart. Dieselbe Farbe haben auch viele feine Linien (Karten, Felder, Methoden).
- **Neu:** eigene Farbvariable «Manganese Linie Abschnitt» = Manganese mit 28 % Deckkraft (doppelt so kräftig, Linie bleibt 1 px). Gesetzt nur an den zwei Abschnitts-Linien:
  - `section_bildtext` (Performance-Analyse, unten)
  - `section_cas theme-soft` (Startseite, «Im Blickpunkt», unten)
- **Gemessen auf der Testadresse:** beide 1 px, `rgba(29, 49, 73, 0.28)`.
- **Ändern:** nur über die Variable (Variables › Farben › «Manganese Linie Abschnitt»). Dann ändern sich beide Linien gleich.

## 2. Aufräumen im Style-Panel («Clean up») sicher machen

**Befund:**

- «Clean up» löscht alle unbenutzten Klassen auf einmal.
- 13 Kombi-Klassen setzt aber nur das Grafik-Skript, und erst auf der veröffentlichten Seite. Beispiele: `nach-oben is-sichtbar` (Knopf «Nach oben»), `step_item is-aktiv` (aktive Phase im Vorgehen), `card is-angetippt`. Im Designer hängen sie an keinem Element, Webflow hielte sie für unbenutzt.
- Ohne Schutz wären der Knopf «Nach oben» und mehrere Hervorhebungen nach dem Aufräumen weg gewesen.

**Schutz:**

- **Ablage:** unsichtbare Ablage «Ablage Skript-Zustände (nicht löschen)» auf der internen Seite «Styleguide (intern)». Sie enthält je ein Element mit Grund- und Kombi-Klasse für alle 13 Klassen und einen Hinweistext.
- **Sicherung:** Die Werte der 13 Klassen stehen zusätzlich in `skript-klassen-sicherung.json`. Damit stelle ich sie wieder her, falls Webflow sie doch entfernt.

**Anleitung für ROWAPA (rund 1 Minute):**

1. Webflow Designer öffnen (beliebige Seite).
2. Links in der Werkzeugleiste das Symbol «Style selectors» öffnen (drei Tropfen; Tastenkürzel **G**). In älteren Fassungen heisst es «Style Manager».
3. Oben rechts im Panel auf das **Besen-Symbol** («Clean up») klicken. Webflow zeigt, wie viele unbenutzte Klassen entfernt werden; bestätigen.
4. Falls danach noch Klassen als unbenutzt erscheinen: Besen ein zweites Mal klicken (Webflow erkennt manchmal erst im zweiten Durchgang alles).
5. Nicht veröffentlichen. Claude kurz Bescheid geben: Claude prüft, ob die 13 Skript-Klassen noch da sind, ob Startseite und Performance-Analyse unverändert aussehen, und veröffentlicht dann die Testadresse.

**Wichtig:** Die Seite «Styleguide (intern)» und die Ablage darauf nicht löschen.

## 3. Wiederholungen: Entstehen die restlichen Seiten nach Muster?

**Ja, zum grössten Teil.** Die 68 Seiten bestehen aus zwei Arten (Sitemap v4, `01_cms_architektur.md`).

**37 Detailseiten in 7 Seitentypen aus dem CMS.** Je Typ gibt es eine Vorlage. Ist sie gebaut, entstehen alle Seiten dieses Typs auf einmal; jede zeigt ihre eigenen Inhalte aus dem CMS.

| Seitentyp | Seiten | Vorlage |
|---|---|---|
| Themenlinien | 5 | Vertriebsperformance, Leadership & Team, Mensch & Potenzial, Recruiting & Retention, Digitale Lösungen |
| Hebel (Lösungen) | 9 | – |
| Lösungswelten (Digital) | 5 | – |
| Kategorie-Hubs | 3 | – |
| Angebote (Programme, Mentorings) | 9 | – |
| Selbstchecks | 3 | – |
| Partnerrollen | 3 | – |

**29 Einzelseiten:** Kontakt, Über uns, Team, So arbeiten wir, Übersichtsseiten, CAS, Broker Excellence u. a. Sie werden einzeln gebaut, aber aus denselben Bausteinen (Header Unterseite, Kontakt, Logo-Leiste, Kundenstimmen, Fragen, Karten), also deutlich schneller als die ersten Seiten. Dazu kommen Hilfsseiten wie 404, Impressum und Datenschutz.

**Dazu die Inhalts-Sammlungen:** Blog (62 Beiträge importiert), Personen, Downloads, Webinare, Videos, Referenzen. Sie brauchen je eine Vorlage, die Inhalte kommen aus dem CMS.

**Was heisst das für die Vertriebsperformance?**

- Sie ist die erste Themenlinie. Ich baue sie als Vorlage «Themenlinie», nicht als Einzelseite.
- Ist sie abgenommen, stehen die anderen vier Themenlinien im selben Aufbau. Zu tun bleibt dort nur die Prüfung und Freigabe ihrer Texte im CMS.
- Danach folgt sinnvollerweise die Vorlage «Hebel» (9 Seiten), weil die Themenlinien auf ihre Hebel verlinken.

## 4. Plan Vertriebsperformance

**Grundlage:** Entwurf Runde 62 (https://claude.ai/artifact/XLPZpG2EUUiU5s51CxbBKi, `stufe3-screens/runde62/`), angepasst an die Entscheide seither.

| Punkt | Entwurf Runde 62 | Heutiger Standard (vorgeschlagen) |
|---|---|---|
| Header | Header B mit Themenfigur aus Punkten | gleich, mit gemeinsamem Einblenden 1,2 s, Kopfzeile C wie Performance-Analyse |
| Logos | Logo-Band unter dem Header | **Logo-Leiste nach den Kundenstimmen** (Entscheid 383: Laufband nur auf der Startseite) |
| Die vier Hebel | grosse Karten, stapeln sich beim Scrollen | gleich (Idee 1, Entscheid 370), nativ mit «sticky» |
| Ihr Vorteil | drei Sätze, «Wo anfangen?» mit Link zur Performance-Analyse, Werkzeug SalesStep | gleich |
| Aus der Praxis | drei freigegebene Kundenstimmen | Block «Kundenstimmen / Aus der Praxis» wie Performance-Analyse, mit Logo-Leiste |
| So arbeiten wir | weggelassen | Kurzfassung mit Link «Mehr zu unserem Vorgehen» (Prüfliste, Entscheid 380), oder weglassen |
| Gut zu wissen, Kontakt | Fragen der Themenlinie, Kontakt-Komponente | gleich |

**Bauweise:**

- **Vorlage:** «Themenlinien Template» im CMS, Felder gebunden, Bausteine der Performance-Analyse.
- **Prüfen auf der Testadresse:** Dafür veröffentliche ich nur den Eintrag «Vertriebsperformance». Die übrigen Einträge bleiben Entwurf, bis ihre Texte geprüft sind.

## Fragen an ROWAPA (vor dem Bau)

1. **Grundlage:** Entwurf Runde 62 mit den Anpassungen in der Tabelle (Logo-Leiste statt Logo-Band, Kundenstimmen-Block wie Performance-Analyse): einverstanden?
2. **«So arbeiten wir»:** auf der Vertriebsperformance als Kurzfassung mit Link zeigen (meine Empfehlung, damit der Ablauf auf jeder Themenlinie einmal kurz sichtbar ist) oder wie bei der Performance-Analyse weglassen?
3. **Hebel-Karten:** Sollen sie sich weiterhin beim Scrollen stapeln? Bis eigene Grafiken je Hebel vorliegen, zeige ich auf allen vier Karten die Figur Vertrieb.
4. **«20 Jahre Finanzvertrieb»** im Abschnitt «Ihr Vorteil» (Entwurf Runde 62): stimmt die Zahl? Sonst schreibe ich es ohne Zahl. [ROWAPA bestätigen]

## Prüfsession 30 (Entscheid 378)

| Bereich | Punkt | Ergebnis |
|---|---|---|
| A CI | Linien | ✓ 1 px wie entschieden (Runde 15), Farbe aus der CI-Palette (Manganese), beide Abschnitts-Linien gleich |
| C Bauweise | nativ, pflegbar | ✓ Farbvariable statt Einzelwert; Ablage als normale Webflow-Elemente |
| C Bauweise | Skript-Zustände | ✓ geschützt vor «Clean up» (neue Regel in der Prüfliste) |
| D Abmachungen | Abnahme Startseite und Performance-Analyse | ✓ festgehalten |
| E Ablauf | Phasenwechsel | ✓ Vertriebsperformance erst nach den drei Antworten oben |
| E Ablauf | Löschen | ✓ nichts gelöscht; «Clean up» macht ROWAPA nach Anleitung |
| E Ablauf | Veröffentlichen | ✓ nur Testadresse |
| E Ablauf | keine Zugangsdaten, keine Modellbezeichnungen | ✓ |

Quellen zur Funktion «Clean up»:

- Webflow-Forum, «Cleaning Up Unused Styles»: https://discourse.webflow.com/t/cleaning-up-unused-styles/324958
- Webflow University, «Find and clean styles»: https://university.webflow.com/videos/find-and-clean-styles
