# Runde 73 · Bewegungskonzept: Seitenwechsel, Header-Einflug, Themen- und CMS-Seiten (Stufe 4, 01.11.2026)

**Nur Vorschlag.** In Webflow ist nichts geändert, nichts veröffentlicht und nichts gelöscht. Die Videos sind mit unseren eigenen Seiten der Testadresse aufgenommen (Startseite → Megamenü → Performance-Analyse). Das CSS dafür wurde nur im Testbrowser eingespielt.

Auftrag ROWAPA (01.11.2026):
- Kartentitel der Kundenstimme so lassen.
- Reihenfolge: erst Vertriebsperformance fertig machen, dann «So arbeiten wir».
- Davor die Animationen von Tresmares (Financial Solutions) anschauen: Beim Wechsel im Menü fliegt der Header ein. Wäre das bei uns ein Vorteil?
- Grundsätzlich: Sollen Animationen und Darstellung auf unseren Seiten, den Themen- und den CMS-Seiten spezieller werden?
- Vorschlag zur Gestaltung.

## Ehrlicher Hinweis vorweg

Tresmares ist aus der Cloud-Umgebung weiterhin nicht erreichbar, die Verbindung wird abgebrochen (wie Entscheid 171 und 259). Grundlage sind deshalb:
- die frühere Analyse ([private Seite](https://claude.ai/artifact/LwdWCvJZ13WPBPLMSFPcDe)): stehende Bühne, Vorhang von unten, alte Fläche dunkelt ab und gleitet zurück, Titel kommt spät;
- die Beschreibung von ROWAPA: Beim Menüwechsel fliegt der Header ein.

Wie Tresmares das technisch löst, kann ich von hier aus nicht prüfen. Für ein genaues Nachjustieren hilft eine kurze Bildschirmaufnahme (10 Sekunden, Menüwechsel auf Tresmares).

## Kurzantwort

**Ja, aber gezielt.** Ein kurzer, markentypischer Seitenwechsel lohnt sich. Er verbindet die Seiten, wirkt hochwertig und gibt Orientierung: Man sieht, dass man an einen anderen Ort der Website wechselt. Er darf aber nicht bremsen. Darum empfehle ich eine **Bewegungssprache in drei Ebenen**:

| Ebene | Wo | Was | Stand |
|---|---|---|---|
| 1 Seitenwechsel | alle Seiten | **Plum-Band 45°** (Variante C): Ein schmales Plum-Band zieht einmal diagonal über den Bildschirm, dahinter erscheint die neue Seite | Vorschlag, Video |
| 2 Header-Einflug | alle Unterseiten und CMS-Vorlagen | Pfad, Titel, zweite Zeile, Lead und Buttons fliegen gestaffelt ein, das Punktemeer hebt sich, **nur beim Wechsel innerhalb der Website** | Vorschlag, Video |
| 3 Signatur je Seitenfamilie | je Seitentyp ein besonderer Moment | Performance-Analyse: Diagramme und Lupe (gebaut). Themenlinien: Hebel-Bühne. «So arbeiten wir»: Phasen-Geschichte | siehe unten |
| Grundrauschen | überall | Einblendungen beim Scrollen wie heute, sonst Ruhe | gebaut |

Grundsatz: **Ein Moment pro Seite, der überrascht. Alles andere ist ruhig.** Das entspricht «Swiss precision meets editorial design» und Entscheid 362 (Bewegung zurückhaltend).

## Ebene 1 · Seitenwechsel: drei Varianten im Vergleich

Videos (Bild für Bild aufgenommen, so wie ein schneller Rechner sie zeigt):
- `uebergang_vergleich.mp4` (alle drei untereinander)
- `uebergang_a.mp4`, `uebergang_b.mp4`, `uebergang_c.mp4` (einzeln, 1440 × 900)
- Bildfolgen im Abstand von 0,1 s: `ablauf_a.jpg`, `ablauf_b.jpg`, `ablauf_c.jpg`

| | A «Gleiten» | B «Vorhang» (nach Tresmares) | **C «Plum-Band 45°» (Empfehlung)** |
|---|---|---|---|
| Was passiert | Alte Seite blendet aus und gleitet leicht nach oben, neue Seite gleitet von unten nach | Alte Seite gleitet zurück und dunkelt ab, neue Seite wird von unten aufgezogen | Ein Plum-Band (rund 68 px breit) zieht im 45°-Winkel von oben links nach unten rechts. Vor dem Band die alte, dahinter die neue Seite |
| Dauer Wechsel | 0,6 s | 0,8 s | 0,7 s (im Bau auf rund 0,6 s kürzen) |
| Titel lesbar nach | ca. 0,7 s | ca. 1,1 s | ca. 0,7 s |
| Header vollständig | ca. 1,5 s | ca. 2,0 s | ca. 1,3 s |
| Wirkung | ruhig, unauffällig, «Standard» | edel, aber auf unseren dunklen Headern kaum sichtbar: Dunkel wird auf Dunkel aufgezogen (Bildfolge B, 0,4–0,8 s) | eigenständig und klar ROWAPA: Das Band ist das CI-Element «Diagonal Ribbon 45°, Plum Perfect» |
| Risiko | wirkt beliebig | wirkt langsam, Tresmares-Kopie | Bei jedem Wechsel eine Plum-Fläche: muss kurz und schmal bleiben, sonst wirkt es laut |

**Empfehlung C.** Ein Übergang aus dem eigenen Markenzeichen wird wiedererkannt, ohne eine fremde Website nachzuahmen. Auf den dunklen Headern ist er gut sichtbar, und die neue Seite ist schneller lesbar als bei B. Wer es ruhiger möchte, nimmt A. B empfehle ich nicht: Der Vorhang lebt bei Tresmares von hellen Fotos, auf unseren dunklen Headern geht er unter.

### So funktioniert es (einfach erklärt)

Moderne Browser können einen Seitenwechsel selbst animieren: die «View Transitions». Der Browser macht beim Klick ein Bild der alten Seite, lädt die neue Seite und blendet von einem Bild zum anderen über. Wie er überblendet, legen wir in rund 20 Zeilen CSS fest.

- **Webflow kann das nicht selbst.** Es gibt keinen nativen Seitenübergang zwischen zwei Seiten. Der bekannte Behelf (Klick abfangen, Animation abspielen, dann mit Verzögerung weiterleiten) bremst jeden Klick. Er stört auch «In neuem Tab öffnen» und die Zurück-Taste. Darum empfehle ich ihn nicht.
- **Darum ist eigener Code hier erlaubt** (CLAUDE.md, Abschnitt 2: Animationen, die Webflow nicht bietet). Der Code liegt einmal site-weit im Kopfbereich der Website-Einstellungen, verändert keine Elemente und braucht keine Pflege. Abschalten heisst: den Codeblock löschen. Das kommt ins Handbuch.
- **Wo es nicht geht** (z. B. ältere Browser), wechselt die Seite ganz normal, ohne Fehler.
- **Browser:**
  - Chrome und Edge ab Version 126, Safari ab 18.2.
  - Firefox: Angaben uneinheitlich, laut Chrome-Doku noch nicht unterstützt, in einer Übersicht 2026 «in Entwicklung». Dort wechselt die Seite normal.
  - Seitenübergänge sind ein Schwerpunkt von «Interop 2026», der gemeinsamen Initiative aller grossen Browserhersteller.
- **Nur innerhalb der Website**, d. h. auf derselben Domain. Links nach aussen wechseln normal.
- **Zurück-Taste:** Der Übergang läuft auch beim Zurückgehen.
- **«Bewegung reduzieren»:** kein Übergang und kein Einflug, die Seite steht sofort da.

### Beim Test gefunden und gelöst

Die Navigation bleibt während des Wechsels stehen, damit der Bildschirm ruhig wirkt. Im ersten Entwurf blieb dabei das offene Megamenü der alten Seite bis zum Ende des Übergangs sichtbar. Jetzt blendet es in 0,2 s aus. Das ist in den Videos und im Demo-CSS (`demo-css/`) bereits korrigiert und wird beim Bau übernommen.

## Ebene 2 · Header-Einflug: nur beim Wechsel innerhalb der Website

Der Einflug, der ROWAPA bei Tresmares gefällt, folgt direkt auf das Band. Zuerst kommt der Pfad, dann der Titel, die zweite Zeile, der Lead und die Buttons, je 0,1 s versetzt. Das Punktemeer hebt sich leicht.

**Wichtig:** Der Einflug läuft **nur beim Wechsel von einer unserer Seiten**. Wer von Google, aus einer Anzeige oder über einen Link direkt kommt, sieht den Header sofort.
- So bleibt der Grund hinter dem offenen Punkt 105 gültig: Header-Texte laufen bei Erstbesuch nicht ein, wegen Lesbarkeit und Ladezeit. Google misst die Ladezeit am grössten sichtbaren Element, oft dem Titel. Ein Einflug beim Erstbesuch würde diesen Wert verschlechtern.
- Technisch: Eine Zeile Skript im Kopfbereich merkt, ob die Seite über einen Übergang geöffnet wurde (Ereignis `pagereveal`), und setzt dann eine Klasse. Nur mit dieser Klasse fliegt der Header ein.
- Mit einer nativen Webflow-Interaktion «Seite lädt» liefe der Einflug bei jedem Besuch, auch beim Erstbesuch. Darum hier ausnahmsweise CSS statt Interaktion. Die Klassen der Header-Komponente bleiben unverändert, die Pflege im Designer auch.

## Ebene 3 · Signatur je Seitenfamilie (Darstellung der Themen- und CMS-Seiten)

Gemeinsame Basis bleibt die freigegebene Performance-Analyse:
- Header-Komponente
- Flächen abwechselnd hell und grau
- Kontakt-Komponente
- Einblendungen

Dazu bekommt jede Seitenfamilie **einen** eigenen Moment:

| Seitenfamilie | Signatur-Moment | Bauweise | Wann |
|---|---|---|---|
| Angebotsseiten (Performance-Analyse) | Lupe aus Punkten, animierte Diagramme | gebaut (Grafik 1.21.0) | erledigt |
| **Themenlinien** (CMS, z. B. Vertriebsperformance) | **Themenfigur im Header** statt Lupe: Die Figur des Themas setzt sich aus Punkten zusammen, wie die Lupe. Danach die **Hebel-Bühne**: Die Hebel stehen als Vollbild-Flächen, wechseln mit Vorhang und kleiner Liste links, wie die Themen-Szene der Startseite (Muster Tresmares, Entscheid 173). Auf dem Handy untereinander | Figur aus einem Bildfeld des CMS-Eintrags; Bühne mit dem bestehenden Modul `themen`, Inhalte aus der Collection «Hebel». Ob das Figuren-Modul jedes CMS-Bild übernehmen kann, prüfe ich beim Bau | mit der Themenlinie Vertriebsperformance (nächster Schritt) |
| Hebel-Seiten (CMS) | eine Kennzahl oder ein kleines Diagramm, **nur mit belegter Zahl**; sonst keine Signatur | Modul `diagramm`, Werte als Attribute | wenn Belege vorliegen [ROWAPA bestätigen] |
| «So arbeiten wir» | Phasen-Geschichte: Beim Scrollen leuchtet die aktuelle Phase auf, eine Plum-Linie verbindet die Phasen | native Interaktion «beim Scrollen» oder Modul `treppe` | nach Vertriebsperformance |
| Artikel, Insights | Ruhe zum Lesen; optional eine feine Plum-Linie oben als Lesefortschritt | native Interaktion «während die Seite scrollt» (kein eigener Code) | optional |

So wirkt jede Seitenfamilie eigen, und trotzdem ist alles aus einem Guss: dieselben Farben, dasselbe Band, dieselbe Punktesprache.

## Aufwand

- Seitenwechsel und Header-Einflug:
  - eine Runde: Code im Kopfbereich der Website, Test auf der Testadresse auf Desktop, Tablet und Handy, Handbuch;
  - wirkt sofort auf allen Seiten, auch auf den CMS-Vorlagen.
- Themenfigur und Hebel-Bühne: Teil des Baus der Themenlinie Vertriebsperformance.

## Entscheide, um die ich ROWAPA bitte

1. **Seitenwechsel:** C «Plum-Band 45°» (Empfehlung), A «Gleiten» oder keiner?
2. **Header-Einflug** nur beim Wechsel innerhalb der Website (Empfehlung) oder bei jedem Besuch?
3. **Themenlinien:** Themenfigur im Header und Hebel-Bühne wie oben, gleich beim Bau der Vertriebsperformance?
4. Kurze Bildschirmaufnahme von Tresmares, falls wir den Einflug noch genauer abstimmen sollen (freiwillig).

Danach geht es wie gewünscht mit der **Themenlinie Vertriebsperformance** weiter (offener Punkt 103), dann mit «So arbeiten wir» (Punkt 112).

## Prüfsession 9 (Entscheid 378), vor dem Vorschlag zur Freigabe

| Bereich | Punkt | Ergebnis |
|---|---|---|
| A CI | Farben, Marken-Element | ✓ nur CI-Farben; das Band ist das CI-Element «Diagonal Ribbon 45°, Plum Perfect»; Typografie unverändert |
| A CI | Ruhe, Struktur vor Dekoration | ✓ ein Moment pro Seite, Band schmal und kurz; ? Wirkung bei häufigem Wechsel an ROWAPA (Frage 1) |
| B Texte | keine erfundenen Fakten | ✓ Browserstand aus Quellen, Firefox als uneinheitlich markiert; Tresmares nicht live geprüft, offen gesagt; Kennzahlen auf Hebel-Seiten nur mit Beleg |
| C Bauweise | eigener Code nur, wo Webflow es nicht kann | ✓ Seitenübergänge kann Webflow nicht; ? Header-Einflug als CSS statt nativer Interaktion, begründet mit dem Erstbesuch (Frage 2) |
| C Bauweise | «Bewegung reduzieren», Inhalt ohne Bewegung lesbar | ✓ dann kein Übergang und kein Einflug; ohne Unterstützung normaler Wechsel |
| D Abmachungen | Punkt 105 (Header-Texte laufen nicht ein) | ✓ gilt weiter für den Erstbesuch; ? Einflug beim internen Wechsel an ROWAPA (Frage 2) |
| D Abmachungen | Entscheid 362 (Bewegung zurückhaltend) | ✓ ein Signatur-Moment je Seitenfamilie, sonst Ruhe |
| D Abmachungen | Kartentitel Kundenstimme | ✓ bleibt (Entscheid 387) |
| E Ablauf | Webflow, Veröffentlichen, Löschen | ✓ nichts geändert, nichts veröffentlicht, nichts gelöscht; nur Vorschlag mit Videos |
| E Ablauf | Doku | ✓ Entscheide, Start hier, Handbuch, IDs nachgeführt |

## Quellen

- Chrome for Developers: [Cross-document view transitions for multi-page applications](https://developer.chrome.com/docs/web-platform/view-transitions/cross-document) (Opt-in mit `@view-transition { navigation: auto; }`, nur gleiche Herkunft, Ereignisse `pageswap`/`pagereveal`, Browser-Tabelle)
- [CSS View Transitions: The Complete Guide for 2026](https://devtoolbox.dedyn.io/blog/css-view-transitions-complete-guide) (Chrome/Edge 126+, Safari 18.2+, Firefox in Entwicklung)
- [Interop 2026, Entwickler-Übersicht](https://ecorpit.com/interop-2026-web-platform-developer-guide/) und [Simon Willison](https://simonwillison.net/b/9293) (Seitenübergänge als Schwerpunkt von Interop 2026)
- Dauer von Animationen: Nielsen Norman Group, zitiert in der [W3C-CSS-Liste](https://lists.w3.org/Archives/Public/public-css-archive/2025Apr/0702.html) (einfache Rückmeldungen rund 100 ms, grössere Bildschirmwechsel 200–300 ms; 1 s als Grenze des Gedankenflusses); [Val Head](https://valhead.com/?p=2978), [UXcel](https://app.uxcel.com/courses/design-foundations/motion-995/duration-9224) (Faustregel 100–500 ms, Seitenwechsel eher am oberen Ende). Folgerung: Wechsel unter 0,7 s, Titel vor 1 s lesbar
- Frühere Tresmares-Analyse: [private Seite](https://claude.ai/artifact/LwdWCvJZ13WPBPLMSFPcDe), Entscheide 173, 184, 259
