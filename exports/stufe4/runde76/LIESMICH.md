# Runde 76 · Seitenwechsel fliessend, Navigation beim Scrollen live, Methoden aufklappbar, Fotos (Stufe 4, 01.11.2026)

## Rückmeldung ROWAPA (Entscheid 390)

| Punkt | Rückmeldung |
|---|---|
| Seitenwechsel | 1,0 s ist in Ordnung, wirkt aber ruckig: fängt langsam an und wird dann schnell. Soll gleichmässig und fliessend sein |
| Megamenü-Entwurf | weglassen, hat bei uns keinen Effekt; wieder normal wie bisher |
| Navigation beim Scrollen | übernehmen: beim Runterscrollen weg, beim Hochscrollen wieder da |
| Kapitel-Leiste | nicht übernehmen |
| Methoden | aufklappbar als Entwurf bauen |
| Grafik-Skript | in ein eigenes kleines Repository, falls sinnvoll; Frage: wird es später wieder gelöscht? |
| Fotos | drei Fotos zur Auswahl, oder etwas anderes «eher im Projekt»? |

## Umgesetzt

### Seitenwechsel: warum er ruckig wirkte, und drei fliessende Fassungen

Die bisherige Kurve war die von Tresmares («expo.inOut»). Die Seite steht zuerst fast still, rast dann in der Mitte und bremst am Ende hart. Genau das wirkt ruckig. Bild: `kurven.png`.

Neu gibt es drei Kurven mit je 1,0 s. Sie lassen sich auf der Entwurfsseite unten links umschalten: https://rowapa-website-2027-automation.webflow.io/performance-analyse-entwurf

| Fassung | Kurve | Wirkung |
|---|---|---|
| **1,0 s sanft** (Empfehlung) | Sinus («ease-in-out sine», `cubic-bezier(.37,0,.63,1)`) | fast gleichmässig, beginnt und endet weich |
| 1,0 s gleichmässig | linear | immer gleich schnell; wirkt technischer, am Ende etwas abrupt |
| 1,0 s weich auslaufend | `cubic-bezier(.22,.61,.36,1)` | startet sofort und läuft weich aus; fühlt sich am schnellsten an |

- Video: `uebergang_kurven_vergleich.mp4` (alle drei untereinander, Bild für Bild auf der Entwurfsseite aufgenommen).
- Bildfolgen im Abstand von 0,07 s: `ablauf_sanft.jpg`, `ablauf_linear.jpg`, `ablauf_aus.jpg`.
- Plum-Kante und 1,4 s sind entfernt.
- Nach der Wahl baue ich den Seitenwechsel site-weit ein.

### Navigation beim Scrollen: live auf allen Seiten der Testadresse

- In der echten Komponente «Navbar · Bühne» trägt `navbar_container` jetzt `data-grafik="kopfleiste"`.
- Grafik 1.23.0 bewegt die Navigation über die Eigenschaft `translate`. So stört sie die Themen-Bühne der Startseite nicht, die die Navigation während der Bühne selbst ausblendet. Geprüft auf der Startseite, in und nach der Bühne.
- Geprüft auf `/performance-analyse`:
  - Desktop: nach unten weg, nach 200 px Hochscrollen wieder da.
  - Handy: gleich.
  - Bei offenem Handy-Menü bleibt die Navigation stehen.
- Abschalten: Attribut am `navbar_container` in der Komponente löschen, siehe Handbuch.

### Megamenü-Entwurf und Kapitel-Leiste entfernt

Wie gewünscht ist beides wieder herausgenommen:
- die 10 Megamenü-Interaktionen, die Abdunkel-Fläche und ihre Klasse;
- auf der Entwurfsseite die Kapitel-Leiste mit ihren Klassen.

Das echte Megamenü war nie verändert.

### Methoden aufklappbar (Entwurf)

Auf der Entwurfsseite sind die «Fünf Perspektiven» jetzt aufklappbar, nach dem Muster der Lösungen bei Tresmares. Bilder: `methoden_aufklappbar_start.jpg`, `methoden_aufklappbar_begleitung.jpg`.
- Eine Methode ist offen, zu Beginn der Skill-Check. Ein Klick auf eine andere wechselt, ein Klick auf die offene schliesst sie. Das Plus wird dabei zum Minus.
- Rechts im Ergebnis leuchten die Punkte der offenen Methode, ihre Linie ist Plum.
- Das Stehenbleiben beim Scrollen fällt weg: Der Abschnitt ist kürzer und ruhiger.
- Auf dem Handy aufklappbar statt alles offen, damit deutlich kürzer.
- Bedienung mit Tastatur (Titel als Schaltfläche, Zustand offen/zu für Screenreader). Bei «Bewegung reduzieren» bleibt alles offen.
- Im Designer bleibt alles offen und direkt bearbeitbar. Das Aufklappen macht das Grafik-Modul `methoden` (neu `data-grafik="methoden-klapp"`), weil es mit dem Ergebnis rechts (Punkte, Linien) zusammenspielt. Dieses gehört schon heute zum Modul.
- Zuordnung ergänzt: «Eigensicht» hatte keine Punkte. Sie zeigt jetzt «Eigen- und Fremdsicht im Vergleich» (`data-punkte="2"`). Auf der echten Seite fehlt das noch. Soll ich es dort auch ergänzen?

## Grafik-Skript in ein eigenes Repository?

**Löschen würden wir es später nicht.** Die Website lädt das Grafik-Skript bei jedem Aufruf aus dem Repository, über jsDelivr mit fester Fassung. Solange die Website die Punkte-Grafiken, die Lupe, die Diagramme oder die Navigation beim Scrollen nutzt, muss das Repository bestehen bleiben und öffentlich sein.

**Meine Empfehlung: ja, ein eigenes kleines Repository**, z. B. `ROWAPA-Konzepte/rowapa-website-grafik`. Es enthält nur das Skript (rund 100 KB statt rund 170 MB).

Vorteile:
- jsDelivr liefert zuverlässig aus, ohne die 50-MB-Grenze.
- Das Projekt-Repository mit Entscheiden und Unterlagen könnte später privat werden. Heute muss es öffentlich sein, weil die Website daraus lädt.
- Kosten: keine (öffentliches Repository).

Was es braucht:
- Dein Okay, dass ich es anlege, oder du legst es an und gibst mir Zugriff.
- Danach registriere ich die nächste Fassung von dort und dokumentiere den Weg im Handbuch.

## Fotos: meine Einschätzung

| Foto | Stärken | Schwächen | Wo es passt |
|---|---|---|---|
| 1 · Gruppe im hellen Büro, Daumen hoch | beste Qualität (Querformat), hell, viel Energie | gestellt (Daumen hoch) wirkt eher wie ein Erinnerungsbild als redaktionell; Poloshirts mit Firmenlogo | bei «Aus der Praxis» nur, wenn es das Team des zitierten Kunden ist; sonst entsteht der falsche Eindruck, diese Personen hätten das Zitat gegeben. Sonst eher «Unsere Kunden» oder ein Erfolgsbericht |
| 2 · Gruppe vor gelber Wand | authentisch | geringe Auflösung (640 × 480), flaches Licht | nicht gross einsetzbar; höchstens klein (z. B. Meldung, Insights) |
| 3 · Tisch mit Seeblick, Weingläser | schöne Schweizer Stimmung, warm, persönlich | Freizeit und Wein passen nicht zu einem Analyse-Angebot | «Über uns», Team, Partnerschaften oder Anlässe |

**Was mir für die Performance-Analyse vorschwebt:** ein echtes Foto aus der Arbeit, «eher im Projekt», wie du schreibst.
- Motive: eine Begleitung im Kundengespräch, ein Feedbackgespräch zu zweit, ein Workshop am Tisch oder vor dem Flipchart.
- Bild: ungestellt, Querformat, mindestens 2400 px breit.
- Personen: mit schriftlichem Einverständnis aller Abgebildeten zur Veröffentlichung im Web; ideal vom Kunden der Kundenstimme.

Ich habe die Fotos noch nicht eingebaut, auch nicht auf der Testadresse. Sie ist öffentlich erreichbar, und ohne Einverständnis der Abgebildeten möchte ich keine Personenfotos veröffentlichen. Die Fotos liegen auch nicht im Repo.

## Prüfsession 12 (Entscheid 378)

| Bereich | Punkt | Ergebnis |
|---|---|---|
| A CI | Farben, Schrift | ✓ unverändert; Plus-Zeichen und Plum-Kante der offenen Methode aus CI-Farben |
| B Texte | neue Texte | ✓ keine neuen Texte; nur Zuordnung Eigensicht → Punkt 2 (an ROWAPA zur Bestätigung) |
| B Texte | Personenfotos | ✓ nicht veröffentlicht ohne Einverständnis; nicht im Repo |
| C Bauweise | nativ zuerst | ✓ Megamenü wieder nativ wie bisher; ? Aufklappen im Grafik-Modul statt nativer Interaktion, begründet mit dem Zusammenspiel mit der Ergebnis-Grafik (an ROWAPA) |
| C Bauweise | «Bewegung reduzieren» | ✓ Navigation ohne Gleiten, Methoden alle offen, kein Seitenwechsel |
| D Abmachungen | Entscheid 390 | ✓ Megamenü normal, keine Kapitel-Leiste, Navigation beim Scrollen site-weit |
| E Ablauf | erst als Entwurf (Entscheid 389) | ✓ Methoden und Seitenwechsel nur auf der Entwurfsseite; Navigation beim Scrollen erst nach Freigabe übernommen |
| E Ablauf | Löschen | ✓ nur, was ROWAPA ausdrücklich verworfen hat (Megamenü-Entwurf, Kapitel-Leiste); Entwurfsseite und Entwurfs-Navigation bleiben |
| E Ablauf | Veröffentlichen | ✓ nur Testadresse |

## Fragen an ROWAPA

1. Seitenwechsel: «sanft» (Empfehlung), «gleichmässig» oder «weich auslaufend»? Danach baue ich ihn site-weit ein.
2. Methoden aufklappbar auf die echte Seite übernehmen? Eigensicht → Punkt 2 auch dort?
3. Wortweise Titel (noch im Entwurf): übernehmen oder weglassen?
4. Eigenes Repository für das Grafik-Skript: soll ich es anlegen?
5. Fotos: Ist Foto 1 das Team des zitierten Kunden, und liegt ein Einverständnis vor? Oder gibt es ein Arbeitsfoto aus einem Projekt?
