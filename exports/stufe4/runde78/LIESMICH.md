# Runde 78 · Fotos als Entwurf mit Ausschnitt je Format, Einschätzung ChatGPT-Feedback (Stufe 4, 01.11.2026)

## Auftrag ROWAPA (Entscheid 392)

1. «die fotos würde ich auch mal als entwurf überall setzen wo du vorschlägst, dann achte aber auf die ausschnitte in den verschiedenen formaten». Auf dem Bildschirmfoto von ROWAPA waren im Bildband die Köpfe abgeschnitten.
2. Rückmeldung von ChatGPT zur Entwurfsseite Performance-Analyse einschätzen, «bevor wir weiter bauen».

## 1. Bildband (Foto 5): Köpfe wieder ganz im Bild

**Ursache:** Die Höhe des Bandes hing an der Fensterhöhe (`clamp(20rem, 56vh, 40rem)`), die Breite an der Fensterbreite. Auf breiten Bildschirmen wurde das Band dadurch sehr flach, bei 2560 px etwa 4:1. Ein Foto im Format 3:2 verliert dann über die Hälfte seiner Höhe, und das traf die Köpfe. Dazu vergrösserte die Scroll-Bewegung (108 → 100 %) das Bild von der Mitte aus und schnitt oben noch mehr weg.

**Lösung (nativ, im Style-Panel):**

| Format | Seitenverhältnis des Bandes | Sichtbarer Teil des Fotos (Höhe) |
|---|---|---|
| Desktop ab 992 px | 2,2 : 1 (höchstens 88 % der Fensterhöhe) | rund 68 % |
| Tablet 768–991 px | 16 : 10 | rund 94 % |
| Handy bis 767 px | 4 : 3 | ganzes Foto, seitlich rund 89 % |

- Bildausschnitt oben verankert (`object-position: 50% 6%`), damit immer oben angeschnitten wird und nie die Köpfe.
- Die Scroll-Bewegung vergrössert jetzt von der Oberkante aus (`transform-origin: 50% 0%`); die Köpfe bleiben stehen, der Rand unten wächst.
- Geprüft bei 2560, 1920, 1440, 1024, 768 und 390 px: In allen Formaten sind beide Köpfe ganz zu sehen, mit Luft nach oben. Das entspricht Entscheid 122 («Köpfe nicht abschneiden, mindestens die Augen immer sichtbar»).

## 2. Entwurfsseite «Fotos · Entwurf»

https://rowapa-website-2027-automation.webflow.io/fotos-entwurf (nicht verlinkt)

Die Seiten Kontakt, So arbeiten wir und Über uns gibt es noch nicht. Darum zeigt eine eigene Entwurfsseite je Vorschlag nur Bild, Format und Ausschnitt, mit dem Namen der künftigen Seite als Titel. Es gibt keine neuen Werbetexte, nur Erklärungen zum Entwurf.

| Foto | Für Seite | Format Desktop / Tablet / Handy | Ausschnitt | Befund |
|---|---|---|---|---|
| 4 · lachender Mitarbeiter im Gespräch | Kontakt, Kopfbereich | 4:5 / 4:5 / 1:1 | Gesicht, Gegenüber im Anschnitt | ✓ Gesicht in allen Formaten frei. Nicht in der Section Kontakt mit Ansprechperson: Dort könnte man ihn für die Ansprechperson halten |
| 6 · drei Personen am Tisch | So arbeiten wir | 5:4 / 5:4 / 4:3 | von rechts, Plakat fällt links weg | ✓ alle drei Personen im Bild; vom Plakat bleibt nur eine Ecke, Schrift nicht lesbar. Der Hinterkopf links ist leicht angeschnitten |
| 7 · Mitarbeiter vor Plakat | Über uns, Team | kleine Teamkarte 4:5, rund 190 px breit | Person mittig | ✗ Auch klein bleiben die grossen Plakat-Titel («Organisation», «People», «Space») auf scharfen Bildschirmen erkennbar; der übrige Text nicht. Grösser nur mit Freigabe des Plakat-Inhabers oder retuschiertem Hintergrund |
| 8 · Gespräch mit Frau (von hinten) | Meine persönliche Entwicklung (Coaching, Beratung) | 4:5 / 4:5 / 1:1 | auf das Gespräch, rechts | ✓ Plakat nur am Rand, Schrift nicht lesbar |

- Alle vier Fotos sind ohne Metadaten hochgeladen. Die Alt-Texte beschreiben nur, was zu sehen ist.
- Bauweise: Klassen `fotoentwurf_*`. Der Rahmen `fotoentwurf_rahmen` legt das Seitenverhältnis je Format fest (Kombi `is-quer`, `is-klein`). Das Bild `fotoentwurf_bild` füllt den Rahmen; die Kombis `is-foto4` … `is-foto8` setzen den Ausschnitt je Format. Alles ist im Style-Panel änderbar.
- **Bilder dieser Runde liegen nicht im Repo**, weil Personenfotos nicht ins Repo gehören (Prüfliste). Die Kontaktbögen sind im Chat verschickt; der Stand ist live auf der Testadresse zu sehen.

## 3. Aufgeräumt

- Eine Interaktion des verworfenen Megamenü-Entwurfs war übrig geblieben («Entwurf Megamenü 3 · Unsere Kunden · öffnen»). Sie wirkte auf eine Abdunkel-Fläche, die es nicht mehr gibt. Entfernt, gedeckt durch Entscheid 390.
- Das Bildschirmfoto `stufe4/runde77/entwurf_bildband.jpg` zeigte das Teamfoto und lag damit gegen die eigene Regel im Repo. Es ist aus dem Repo entfernt. In der Git-Historie bleibt es sichtbar; ganz entfernen ginge nur mit einem Umschreiben der Historie (Force-Push). [ROWAPA entscheiden]
- Handbuch: Der veraltete Abschnitt «Seitenwechsel (Vorschlag, noch nicht gebaut)» ist gelöscht. Der Seitenwechsel ist seit Runde 77 gebaut und beschrieben.

## 4. Einschätzung der Rückmeldung von ChatGPT

**Gesamturteil:** Die Durchsicht ist sorgfältig und in vielem richtig. Vor allem diese Punkte decken sich mit unseren Regeln: Bewegung nur an wenigen Stellen, Inhalt sofort lesbar, Kontaktweg vor dem Start fertig. Vier Empfehlungen widersprechen aber bewussten Entscheiden von ROWAPA, die ChatGPT nicht kennen konnte. Zwei Aussagen sind überholt: Die Entwurfsleiste ist seit Runde 77 entfernt. Der Titel heisst bereits «Potenziale erkennen. Entwicklung gezielt steuern.», ChatGPT schlug «wirksam steuern» vor.

Alle Aussagen über die Seite habe ich auf der Testadresse nachgeprüft.

### A. Vor der Veröffentlichung nötig: übernehmen

| Punkt | Geprüft | Vorschlag |
|---|---|---|
| `/kontakt` ergibt 404 | ✓ 404. Betroffen sind fünf Links: Navigation «Kontakt» (Desktop und Handy), «Kontakt aufnehmen», «Schreiben Sie uns», Footer | Kontaktseite bauen, als Entwurf; Foto 4 passt in den Kopf. Bis dahin nichts veröffentlichen, was auf `/kontakt` zeigt |
| Kontaktweg uneinheitlich | ✓ Vier Buttons öffnen eine E-Mail an Jennifer Boek, die Kontakt-Links führen auf `/kontakt` | Kontaktseite mit nativem Webflow-Formular (Name, Unternehmen, E-Mail, Telefon, Anliegen), E-Mail und Telefon als Alternative. Später Buchung über Calendly (offene Punkte 68 und 90). Die Buttons «Strategiegespräch anfragen» können beim Mail bleiben, wenn ROWAPA das so will |
| Sprachlinks EN/FR/IT zeigen auf `#` | ✓ | bis zu den Sprachversionen in der Navigation ausblenden (nativ, umkehrbar; offener Punkt 59) |
| Entwurfsleiste entfernen | erledigt in Runde 77 | – |
| Einblendungen kürzen, Handy separat prüfen | ✓ Die Titel erscheinen wortweise in 0,8 s mit 0,04 s Versatz, ab 85 % der Fensterhöhe; dazu kommen die Einblendungen 0–3 | wortweise Titel behalten (Entscheid 391), aber schneller: 0,5 s, Versatz 0,02 s, Start früher (90 %). Fliesstext, Kundenstimme und Aufwand ohne Einblendung oder sofort sichtbar. Danach Handy-Durchgang |

### B. Gute Ideen: als Entwurf zeigen

| Punkt | Einschätzung |
|---|---|
| Zweiter Header-Button «Beispielauswertung ansehen» (Sprung zu den Auswertungen) statt «So funktioniert unsere Methode» | überzeugt: Für Entscheider sind die Auswertungen der stärkste Beleg |
| Eckdatenzeile im Header «Ergebnisse in 4–6 Wochen · digitale Erhebung und persönliche Begleitung» | «4–6 Wochen» steht schon auf der Seite. Die Formulierung «persönliche Begleitung» ist so nicht belegt [ROWAPA bestätigen]. Kurz halten, der Header galt schon als zu voll (Entscheid 363) |
| Megamenü: aktuellen Eintrag markieren | ✓ geprüft: Webflow markiert «Performance-Analyse» bereits als aktuell, aber ohne sichtbare Gestaltung. Vorschlag: Zustand «Current» mit Plum-Kante links und halbfett, nativ. Einleitung im Megamenü kürzen |
| Hinweise in den Diagrammen (z. B. «Grösster Unterschied zwischen Eigen- und Fremdsicht») beim Darüberfahren oder Antippen | erklärt die Musterdaten; Hinweise nur aus den Musterdaten ableiten |
| Weniger Rahmen, Diagramme auf ruhigem Weiss | Der versetzte Plum-Rahmen ist ein bewusst gewähltes Merkmal (Fotorahmen mit Plum-Linie, Runde 28). Darum als Variante zum Vergleich zeigen, nicht einfach entfernen |
| Rechteckiges Kontaktporträt | möglich; gilt dann überall, weil die Section Kontakt eine Komponente ist (Entscheid 354) |
| Lupe wirkt gröber als die Punktelandschaft | berechtigt. Vorschlag: Lupe behalten (Entscheide 376, 385), aber feiner, mit mehr und kleineren Punkten. Eine Diagramm-Vorschau statt Lupe höchstens als zweite Variante |
| Ausgangslage kürzen (drei Fragen je Feld), Ergebniskarten kompakter | Die Fragen hat ROWAPA festgelegt (Entscheid 382). Kürzen geht, aber ROWAPA wählt die drei Fragen |

### C. Widerspricht Entscheiden von ROWAPA: nicht übernehmen, ausser ROWAPA ändert den Entscheid

| Empfehlung ChatGPT | Entscheid ROWAPA |
|---|---|
| eigenen Mauszeiger entfernen | behalten, als Kreis 1:1 mit Punkt (Entscheide 368, 369, 383, 385) |
| Kundenlogos näher an den Einstieg | Header ohne Logos; auf Unterseiten ruhige Logo-Leiste nach den Kundenstimmen (Entscheide 383, 384) |
| Abschnittsnavigation «Ergebnisse · Methode · Ablauf · Fragen» | Kapitel-Leiste nicht übernehmen (Entscheid 390) |
| Seitenwechsel 350–500 ms | 1,0 s «sanft» nach dem Vergleich von drei Kurven (Entscheid 391); ChatGPT hat die Varianten nicht getestet. Auf dem Handy sind es heute schon 0,3 s |

### D. Inhalt: braucht Angaben von ROWAPA

| Zielgruppe | Vorschlag ChatGPT | Stand und Vorschlag |
|---|---|---|
| Generalagenten | Einsatz im Agenturalltag und Aufwand für Beraterinnen und Berater früher zeigen | Zeit je Person steht schon auf der Seite. Wie die Analyse im Agenturalltag eingesetzt wird: [ROWAPA bestätigen] |
| Vertriebsleiter | Weg von Teamergebnissen zu Massnahmen stärker zeigen | ohne neue Fakten möglich (Reiter «Massnahmen» früher oder grösser); als Entwurf |
| Bankleiter | Vertraulichkeit, Ergebnisse je Person oder Team | nur mit verbindlichen Angaben von ROWAPA. Entscheid 363 wollte weniger Details («wer was sieht»); darum höchstens eine kurze Frage in «Gut zu wissen» |
| Kundenstimme | Projektkontext ergänzen | nur mit Angaben und Freigabe des Kunden [ROWAPA bestätigen] |

### Vorschlag zum Vorgehen (alles zuerst als Entwurf)

1. **Paket 1, klein und nativ:** Sprachlinks ausblenden, «Current» im Megamenü sichtbar, Einblendungen kürzen. In Entwurfs-Navigation und Entwurfsseite.
2. **Paket 2, Kontakt:** Kontaktseite als Entwurf mit Formular und Foto 4. Dazu nötig: Empfänger der Anfragen, Felder, Formular oder Calendly.
3. **Paket 3, Gestaltung als Varianten auf der Entwurfsseite:** zweiter Button und Eckdatenzeile, Diagramm-Hinweise, ruhigere Rahmen, feinere Lupe.

Nicht gebaut werden Mauszeiger-Änderung, Logos oben, Abschnittsnavigation und kürzerer Seitenwechsel, ausser ROWAPA entscheidet neu.

## Prüfsession 14 (Entscheid 378)

| Bereich | Punkt | Ergebnis |
|---|---|---|
| A CI | Farben, Schrift | ✓ Linie und Hintergrund über Variablen, Kicker in TASA Explorer, keine neuen Farben |
| B Texte | keine erfundenen Fakten | ✓ auf der Entwurfsseite nur Seitennamen und Erklärungen zum Entwurf; «persönliche Begleitung» in der Eckdatenzeile als [ROWAPA bestätigen] markiert |
| B Texte | Sie/Du, «Unternehmen» | ✓ Erklärtexte ohne Anrede; Du-Bereich nur als Seitenname |
| B Fotos | Köpfe, Augen (Entscheid 122) | ✗ in Runde 77 im Bildband auf breiten Bildschirmen abgeschnitten → korrigiert und in sechs Breiten geprüft |
| B Fotos | nichts Firmenfremdes lesbar | ✓ Fotos 6 und 8; ✗ Foto 7: Plakat-Titel bleiben erkennbar → Erklärtext korrigiert, ? an ROWAPA (Freigabe, Retusche oder weglassen) |
| B Fotos | Personenfotos nicht ins Repo | ✗ Runde 77: Bildschirmfoto mit Teamfoto im Repo → entfernt; ? an ROWAPA, ob die Git-Historie bereinigt werden soll. Runde 78: keine Bilder mit Personen im Repo |
| C Bauweise | nativ, Client-First | ✓ Seitenverhältnis und Ausschnitt je Format im Style-Panel, kein neuer Code |
| C Bauweise | «Bewegung reduzieren» | ✓ Bildband ohne Bewegung (Interaktion: «skip to end») |
| D Abmachungen | Entscheide 389, 390 | ✓ alles als Entwurf; letzter Rest des Megamenü-Entwurfs entfernt |
| D Abmachungen | Einschätzung ChatGPT | ✓ jede Aussage zur Seite nachgeprüft, Widersprüche zu Entscheiden benannt statt übernommen |
| E Ablauf | Veröffentlichen | ✓ nur Testadresse |
| E Ablauf | Löschen | ✓ nur der Interaktions-Rest (gedeckt durch 390) und das eigene Bildschirmfoto (Regelverstoss) |

## Fragen an ROWAPA

1. **Fotos:** Passen Bildband und die vier Vorschläge? Für Foto 7 (Plakat): Freigabe des Plakat-Inhabers einholen, Hintergrund retuschieren lassen oder weglassen? Einverständnis der Abgebildeten bestätigt?
2. **ChatGPT-Feedback:** Pakete 1 bis 3 so als Entwurf bauen, oder eine Auswahl?
3. **Kontaktweg:** Formular auf einer Kontaktseite (wer erhält die Anfragen?) oder weiterhin E-Mail, später Calendly?
4. **Git-Historie:** Das alte Bildschirmfoto aus der Historie entfernen (Force-Push auf den Arbeits-Branch) oder so lassen?
