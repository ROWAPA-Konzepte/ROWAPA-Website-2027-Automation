# Runde 75 · Entwurf: Seitenwechsel, Megamenü, Navigation beim Scrollen, Darstellung Performance-Analyse (Stufe 4, 01.11.2026)

Auftrag ROWAPA (01.11.2026):
- «Ja, bitte alle drei Möglichkeiten oder drei Punkte, die du hier erwähnst, mal umsetzen.» Gemeint sind:
  1. Seitenwechsel D in drei Fassungen;
  2. Megamenü abdunkeln, gestaffelt, Bild setzt sich;
  3. Navigation beim Scrollen.
- Frage: Soll an der Performance-Analyse selbst noch etwas angepasst werden (Darstellung, Aufbau, Titel, Bild)?
- «Bitte immer erst als Entwurf etwas bauen.»

## Wo der Entwurf liegt

**Entwurfsseite:** https://rowapa-website-2027-automation.webflow.io/performance-analyse-entwurf
- Kopie der Performance-Analyse, nicht verlinkt, nur auf der Testadresse.
- Unten links die Entwurfs-Leiste zum Umschalten des Seitenwechsels.

**Die echten Seiten sind unverändert.** Geprüft auf `/performance-analyse`: Navigation ohne Ausblenden, keine Kapitel-Leiste, kein Seitenwechsel, kein Abdunkeln. Das Grafik-Skript ist site-weit auf 1.22.0 aktualisiert. Das neue Modul wirkt aber nur dort, wo das Attribut gesetzt ist, also nur in der Entwurfs-Navigation.

| Teil | Wie gebaut | Nur Entwurf, weil … |
|---|---|---|
| Entwurfs-Navigation | Kopie der Komponente «Navbar · Bühne» als «Navbar · Bühne (Entwurf Bewegung)», Ordner «99 Entwurf». Der Link «Performance-Analyse» im Megamenü führt auf die Entwurfsseite | nur auf der Entwurfsseite eingesetzt |
| Megamenü | 10 native Webflow-Interaktionen (je Menü «öffnen» und «schliessen»), gültig nur für die Entwurfs-Navigation | Bereich der Interaktionen = Entwurfs-Komponente |
| Navigation beim Scrollen | Grafik-Modul `kopfleiste` (1.22.0), Attribut nur in der Entwurfs-Navigation | Attribut nur dort |
| Seitenwechsel D | kleines Kopf-Skript nur auf der Entwurfsseite | Seiten-Skript, nicht site-weit |
| Kapitel-Leiste, Titel wortweise | native Elemente und Interaktion, nur auf der Entwurfsseite | nur dort gebaut |

## 1. Seitenwechsel D «Aufziehen» (nach dem Prinzip von Tresmares)

Die neue Seite kommt samt Navigation von unten und wächst von 80 auf 100 %. Die alte Seite fährt nach oben und wird dunkler. Kurve wie Tresmares («expo.inOut», nachgebildet mit `cubic-bezier(.87,0,.13,1)`). Das offene Megamenü schliesst, bevor die alte Seite wegfährt.

**Selbst ausprobieren:** auf der Entwurfsseite unten links eine Fassung wählen. Danach im Megamenü «Was wir tun › Performance-Analyse» anklicken: Der Wechsel läuft auf dieselbe Seite. Die Wahl bleibt gespeichert, bis das Browserfenster zu ist.

| Fassung | Dauer | Wirkung |
|---|---|---|
| **1,0 s** (Empfehlung) | 1,0 s | klar spürbar, bremst kaum |
| 1,0 s mit Plum-Kante | 1,0 s | feine Plum-Linie (4 px) an der Oberkante der neuen Seite; verbindet den Wechsel mit dem Marken-Element, ist aber nur in der Bewegung sichtbar |
| 1,4 s wie Tresmares | 1,4 s | edler, aber spürbar länger; bei mehreren Wechseln hintereinander zäh |

Videos: `uebergang_d_vergleich.mp4` (alle drei untereinander, Bild für Bild aufgenommen auf der Entwurfsseite der Testadresse). Bildfolgen im Abstand von 0,1 s: `ablauf_d10.jpg`, `ablauf_d10p.jpg`, `ablauf_d14.jpg`.

Weitere Eigenschaften:
- Handy: Überblenden in 0,3 s.
- «Bewegung reduzieren»: kein Übergang.
- Browser ohne diese Technik (z. B. Firefox nach heutigem Stand): normaler Seitenwechsel.
- Hinter den Seiten liegt während des Wechsels eine schwarze Fläche wie bei Tresmares. Sie ist ein Schatten, keine Gestaltungsfläche, und nur rund 1 s sichtbar.

## 2. Megamenü

- Beim Öffnen dunkelt die Seite unter dem Menü ab (Manganese Black, 45 %, 0,3 s). Beim Schliessen hellt sie in 0,4 s wieder auf.
- Die Spalten (Einleitung, Linkspalten, Vorschau) erscheinen nacheinander (je 0,08 s versetzt, 0,6 s).
- Das Bild in der Vorschaukarte setzt sich langsam von 108 auf 100 % (4 s, «expo.out»), wie die Menükarten bei Tresmares.
- Gebaut nativ in Webflow (Interactions), keine Zeile eigener Code.
- Beobachtung: Über dem dunklen Header ist das Abdunkeln kaum zu sehen (dunkel auf dunkel). Deutlich wirkt es erst, wenn man weiter unten auf hellen Flächen das Menü öffnet.
- Bild: `megamenue_entwurf.jpg`.

## 3. Navigation beim Scrollen

- Beim Runterscrollen blendet die Navigation nach 200 px aus (0,6 s). Beim Hochscrollen kommt sie nach 200 px oder am Seitenanfang zurück, wie bei Tresmares.
- Solange ein Menü offen ist, bleibt sie stehen.
- Die Kapitel-Leiste rückt beim Ausblenden nach oben.
- Bild: `kapitel-leiste_navigation-weg.jpg`.
- **Warum ein Modul im Grafik-Skript?** Die Webflow-Interaktionen kennen über die Schnittstelle keinen Auslöser «Scrollrichtung». Das Modul ist klein (rund 70 Zeilen). Ein- und Ausschalten geht über das Attribut `data-grafik="kopfleiste"` am Element `navbar_container`; einstellbar sind `data-kopfleiste-ab` und `data-kopfleiste-zurueck`.

## 4. Darstellung der Performance-Analyse: meine Einschätzung

Ist-Zustand: `pa_ist-zustand_uebersicht.jpg`.

Mir ist aufgefallen, dass Titel und Satz im Header geändert wurden: «Potenziale erkennen. Entwicklung gezielt steuern.» und «Fundierte Empfehlungen für die Entwicklung Ihrer Teams und Führungskräfte. Für mehr Vertriebs- und Mitarbeiterperformance.» Ich übernehme das so und ändere nichts daran.

**Aufbau:** Der Aufbau ist gut und bewährt:
- Problem (Ausgangslage) → Nutzen und Ergebnis → Methode → Beweis (Aus der Praxis) → Ablauf → Fragen → Kontakt.
- Ich würde ihn nicht umbauen.

**Was ich verbessern würde (nach Wirkung geordnet):**

| # | Punkt | Warum | Stand |
|---|---|---|---|
| 1 | **Kapitel-Leiste** unter dem Header (Ausgangslage · Ergebnis · Methode · Praxis · Ablauf · Fragen), klebt beim Scrollen und zeigt das aktuelle Kapitel mit einer Plum-Linie | Die Seite ist rund zehn Bildschirme lang. Wer gezielt Ablauf oder Aufwand sucht, springt direkt hin. Die Leiste ist vollständig nativ: Webflow markiert den aktuellen Abschnitt selbst | **im Entwurf gebaut** (ab Tablet ausgeblendet) |
| 2 | **Section-Titel erscheinen wortweise** beim Scrollen (H2), der Titel im Header nicht | wirkt redaktioneller und hochwertiger, wie bei Tresmares; native Webflow-Interaktion mit Text-Aufteilung | **im Entwurf gebaut**; erste Fassung mit Maske schnitt Unterlängen ab (z. B. «g»), jetzt ohne Maske |
| 3 | **Weniger Kästen:** Ausgangslage, Ergebnis-Spalten, Methoden-Liste und Ablauf sind alle umrandete Kästen. Vorschlag: «Fünf Perspektiven» als Akkordeon, eine Methode offen, mit ihrem Symbol, wie die Lösungen bei Tresmares | ruhigeres Bild, rund ein halber Bildschirm kürzer, ein klarer Bedienmoment | Vorschlag, auf Wunsch als Entwurf |
| 4 | **Ein echtes Foto:** Ausser der Ansprechperson im Kontakt gibt es keine Menschen auf der Seite. Ein grosses Foto bei «Aus der Praxis» (z. B. eine Begleitung im Alltag) macht die Kundenstimme greifbarer | Vertrauen; Tresmares setzt Bilder sparsam, aber gross ein | Vorschlag, braucht ein freigegebenes Foto [ROWAPA bestätigen] |
| 5 | Header | Titel, Lupe und Wellenmeer funktionieren; nicht ändern | – |

## Prüfung auf der Testadresse (Playwright, 1440 × 900)

| Punkt | Ergebnis |
|---|---|
| Entwurfsseite | 200, Grafik 1.22.0, Kopf-Skript aktiv, Kapitel-Leiste und Entwurfs-Leiste da, alle sechs Sprungziele vorhanden |
| Megamenü | Abdunkeln 0,45 beim Öffnen, 0 beim Schliessen, auch beim zweiten und dritten Öffnen; Spalten erscheinen; Bild setzt sich |
| Scrollen | Navigation nach unten weg, Kapitel-Leiste rückt an den oberen Rand; beim Hochscrollen kommt die Navigation zurück |
| Kapitel | aktueller Abschnitt markiert (z. B. «Ergebnis», nach Sprung «Ablauf»); Sprung landet am Abschnitt |
| Titel | wortweise aufgeteilt, nach der Bewegung vollständig, ohne abgeschnittene Unterlängen |
| Seitenwechsel | Übergang aktiv (`rgNeu`, `rgAlt`), Fassung über die Entwurfs-Leiste umschaltbar |
| Echte Seite `/performance-analyse` | unverändert: keine Kapitel-Leiste, kein Ausblenden, kein Seitenwechsel, kein Abdunkeln |

Gefunden und behoben:
- Hover-Animation spielte beim zweiten Öffnen nicht mehr. Sie ist jetzt pro Menü in «öffnen» und «schliessen» getrennt, jeweils neu startend.
- Titel-Maske schnitt Unterlängen ab. Jetzt ohne Maske.

## Hinweis Skript-Auslieferung

jsDelivr meldete beim ersten Abruf der neuen Fassung «Paketgrösse über 50 MB», weil das Repository mit Videos und Bildern inzwischen rund 170 MB umfasst. Beim zweiten Abruf wurde die Datei korrekt ausgeliefert, die Prüfsumme stimmt.

Damit das künftig nicht zum Problem wird, gibt es zwei Wege:
- Videos ab jetzt sparsam ins Repo legen. Diese Runde enthält nur das Vergleichsvideo, die Einzelvideos habe ich im Chat geschickt.
- Das Grafik-Skript in ein eigenes kleines Repository verschieben. [ROWAPA entscheiden]

## Fragen an ROWAPA

1. Seitenwechsel: 1,0 s (Empfehlung), 1,0 s mit Plum-Kante oder 1,4 s?
2. Megamenü-Entwurf übernehmen (abdunkeln, gestaffelt, Bild setzt sich)?
3. Navigation beim Scrollen ausblenden: übernehmen? Wenn ja, 200 px Hochscrollen wie Tresmares oder früher (z. B. 80 px)?
4. Kapitel-Leiste und wortweise Titel übernehmen?
5. Methoden als Akkordeon und ein grosses Foto bei «Aus der Praxis» als nächsten Entwurf bauen? Gibt es ein freigegebenes Foto?
6. Grafik-Skript in ein eigenes kleines Repository (wegen der Grösse)?

Nach der Freigabe:
- Übernahme in die echte Navigation und auf `/performance-analyse`, Seitenwechsel site-weit.
- Danach Entwurfsseite, Entwurfs-Navigation, Entwurfs-Leiste und Entwurfs-Interaktionen löschen, aber nur mit Freigabe.

## Prüfsession 11 (Entscheid 378), vor dem Vorschlag zur Freigabe

| Bereich | Punkt | Ergebnis |
|---|---|---|
| A CI | Farben, Schrift, Raster | ✓ nur CI-Variablen (Manganese, Plum, White, Linie); Kapitel-Links in TASA Explorer, Grossbuchstaben, gesperrt; Abstände 16/32/56 px |
| A CI | schwarze Fläche hinter dem Seitenwechsel | ? Schatten wie bei Tresmares, keine CI-Farbe; Alternative Manganese Black wirkt auf unseren dunklen Headern kaum (an ROWAPA) |
| B Texte | neue Texte | ✓ nur kurze Bezeichnungen («Auf dieser Seite», Kapitelnamen), neutral ohne Anrede; Header-Text von ROWAPA übernommen |
| C Bauweise | nativ zuerst | ✓ Megamenü, Kapitel-Leiste (inkl. aktueller Abschnitt) und Titel-Einblendung nativ; ✓ Seitenwechsel als Kopf-Skript, weil Webflow keine Seitenübergänge kann; ? Scrollrichtung als Grafik-Modul, weil über die Schnittstelle nicht nativ verfügbar (an ROWAPA) |
| C Bauweise | «Bewegung reduzieren» | ✓ in allen Interaktionen («springt ans Ende»), im Modul und im Seitenwechsel |
| D Abmachungen | Punkt 105 (Header beim Erstbesuch ohne Einflug) | ✓ Seitenwechsel nur innerhalb der Website; Header-Titel nicht animiert |
| D Abmachungen | Entscheid 362 (Bewegung zurückhaltend) | ✓ kurze Bewegungen, Seitenwechsel 1,0 s empfohlen statt 1,4 s |
| E Ablauf | erst als Entwurf (Auftrag dieser Runde) | ✓ alles auf Entwurfsseite und Entwurfs-Komponente; echte Seiten unverändert geprüft |
| E Ablauf | Veröffentlichen, Löschen | ✓ nur Testadresse; nichts gelöscht (auf der neuen Entwurfskopie wurde nur die dort mitkopierte Navigation durch die Entwurfs-Navigation ersetzt) |
| E Ablauf | Doku | ✓ Entscheide, Start hier, Handbuch, IDs, Prüfliste (neue Regel «erst als Entwurf») nachgeführt |
