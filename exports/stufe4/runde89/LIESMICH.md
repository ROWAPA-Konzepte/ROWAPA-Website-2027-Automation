# Runde 89 · Methoden zu Beginn zu, Muster 2 «Mischung» für die Beispielauswertungen, Insights mit Fotos (Stufe 4, 01.11.2026)

## Auftrag ROWAPA (Entscheid 403)

| Punkt | Auftrag |
|---|---|
| Fünf Methoden | Zu Beginn alle zugeklappt (bisher war die erste offen), sonst alles so lassen. Öffnen soll mit einem Klick irgendwo in das Feld gehen, nicht erst «ziemlich in der Mitte». |
| «Welche Antworten liefert die Analyse?» | Neuer Entwurf: linke Spalte mit den Fragen farbig hinterlegt; rechts beim Ergebnis nicht so stark abblenden, die übrigen Werte sollen lesbar bleiben; der eigentliche Befund mit einem Farbakzent; etwas feiner, angelehnt an die erste Variante, eine «schöne Mischung zwischen der ersten und zweiten Variante». |
| Insights | Die bisherigen Bilder hinterlegen («Das Ganze braucht sicherlich Bilder»). Filter braucht es nicht, der Link auf weitere Inhalte bleibt. Zwei Varianten: Foto nur im grossen Beitrag und Fotos in allen Beiträgen. |
| Videos | kommen später als Vimeo-Links |

Lesart: «erste Variante» = heutige Reiter (echte Seite, in der Leiste «Reiter wie heute»), «zweite Variante» = Muster 1 «Fenster» aus Runde 88.

## Links zum Ansehen (Testadresse)

- Performance-Analyse (Entwurf), Muster 2 mit Spalte Sea Cliff: https://rowapa-website-2027-automation.webflow.io/performance-analyse-entwurf?v=auswertung:mischung-hell,insights:foto-gross
- dasselbe mit Spalte Manganese: https://rowapa-website-2027-automation.webflow.io/performance-analyse-entwurf?v=auswertung:mischung-dunkel,insights:foto-gross
- Startseite (Entwurf), Insights mit Foto nur im grossen Beitrag: https://rowapa-website-2027-automation.webflow.io/startseite-entwurf?v=auswertung:mischung-hell,insights:foto-gross
- dasselbe mit Fotos in allen Beiträgen: https://rowapa-website-2027-automation.webflow.io/startseite-entwurf?v=auswertung:mischung-hell,insights:foto-alle
- Methoden auf der echten Seite: https://rowapa-website-2027-automation.webflow.io/performance-analyse (Abschnitt «Fünf Perspektiven»)

Unten links öffnet «Entwurf · 2 von 2 im Muster» die Umschaltleiste. Je Punkt stehen alle Möglichkeiten nebeneinander:

- Beispielauswertungen: «Reiter wie heute» · «Muster 2, Spalte Sea Cliff» · «Muster 2, Spalte Manganese» · «Muster 1: Fenster».
- Insights: «Reihe wie heute» · «Magazin, Foto nur im grossen Beitrag» · «Magazin, Fotos in allen Beiträgen».

Wer zwischen den Mustern wechselt, sieht den Aufbau Schritt für Schritt neu. Die Wahl gilt für beide Entwurfsseiten und bleibt im Browser gespeichert. Die echten Seiten (`/` und `/performance-analyse`) sind bis auf die Methoden unverändert.

## 1. Fünf Methoden (echte Seite und Entwurf)

- **Start:** Alle fünf Methoden sind zugeklappt. Der Ergebnis-Kasten zeigt dabei alle Punkte, die Linien laufen wie bisher.
- **Klick irgendwo in das Feld** öffnet die Methode, nicht nur der Titel. Bei einer offenen Methode schliesst ein Klick auf den Kopf. Ein Klick in ihren Text, etwa zum Markieren oder auf einen Link, schliesst sie nicht.
- **Technik:** Das Attribut `data-start="zu"` am Element `methode_layout` steuert den Start (gesetzt auf der echten Seite und auf der Entwurfsseite). Ohne das Attribut ist wie bisher die erste Methode offen. Das Grafik-Skript 1.29.0 macht das ganze Feld klickbar.
- **Mauszeiger (Grafik 1.29.1):** Das Skript markiert das ganze Feld einer zugeklappten Methode als klickbar. Sichtbar ist das nur, wenn der Ring auf Links wächst (Form «b»). Heute läuft die ruhige Form «a» (Punkt mit Ring, Entscheid 383), also ändert sich am Zeiger nichts.
- **Live geprüft** (Desktop 1440 px und Handy 390 px, echte Seite und Entwurf):
  - Beim Start sind alle zu.
  - Ein Klick unten rechts in die dritte Zeile öffnet sie.
  - Ein Klick links oben in die erste Zeile öffnet diese und schliesst die dritte.
  - Ein Klick in den Text der offenen Methode lässt sie offen.

## 2. Muster 2 «Mischung» (Beispielauswertungen, Entwurfsseite Performance-Analyse)

**Aus «heute» übernommen:**

- weisse Fläche mit dem Plum-Versatzrahmen, wie bei der Diagrammkarte heute
- ruhige Schrift
- Aussage der Einordnung in Plum

**Aus Muster 1 übernommen:**

- die fünf Fragen links untereinander
- Aufbau Schritt für Schritt: Diagramm → Abweichung (nach 1,4 s) → Einordnung (2,0 s) → Massnahme (2,6 s)
- «Mögliche nächste Massnahme»

**Neu und feiner:**

- **Fragenspalte farbig**, zwei Farben zum Vergleichen:
  - **Sea Cliff hell** (#D9E7F2 = Sea Cliff zu 40 % auf Weiss, Schrift Manganese gedämpft, Kontrast 5,6 : 1);
  - **Manganese** (#1D3149, Schrift Weiss zu 76 %, Kontrast 8,4 : 1).
  
  Die gewählte Frage hat eine Plum-Linie links und eine weisse bzw. leicht aufgehellte Fläche. Volles Sea Cliff (#A0C4DF) wäre kräftiger, die gedämpfte Schrift hätte darauf aber nur 3,8 : 1, darum der hellere Ton.
- **Schritte** als feine Punkte mit Text statt Kästchen, ohne Fensterpunkte und Fenstertitel.
- **Befund mit Farbakzent:** Die auffällige Zeile ist mit einem Plum-Ton hinterlegt (Plum zu rund 7 %) und hat eine Plum-Linie links. Der Hinweis steht wie bisher darunter, zum Beispiel «Grösster Unterschied zwischen Eigen- und Fremdsicht».
- **Übrige Werte bleiben lesbar:** Die Zeilen treten nur leicht zurück, auf 84 % statt 35 % Deckkraft. Die Zahlen haben so 4,75 : 1, die Bezeichnungen 8 : 1. Die Zellen im Vergleich der Teams stehen auf 88 % statt 55 %.
- **Musterbericht** (Reiter «Was hat jetzt Priorität?»): Der Schritt «Massnahmen, priorisiert» ist gleich hervorgehoben, die übrigen Schritte bleiben lesbar.
- **Unter dem Diagramm** stehen Einordnung und Massnahme nebeneinander; auf Tablet und Handy untereinander.
- **Tablet und Handy:** Die Fragen werden zur Wischreihe auf der farbigen Fläche, die vier Schritte stehen auf dem Handy in zwei Zeilen.
- **Abstände** im 8-px-Raster (16, 24, 32, 48 px); korrigiert nach der Prüfsession, Fassung 2.1.1.

Muster 1 «Fenster» bleibt zum Vergleich in der Leiste. «Reiter wie heute» ist unverändert.

**Geprüft:**

- 1440, 900 und 390 px breit, alle fünf Reiter, beide Spaltenfarben
- keine Überbreite
- der Aufbau erreicht immer Schritt 4
- beim Wechsel des Musters beginnt der Aufbau neu
- bei «Bewegung reduzieren» steht alles sofort da

## 3. Insights mit Fotos (Startseite-Entwurf)

- **Filter entfernt.** «Alle Inhalte» bleibt oben rechts, «Live-Webinare» und «ROWAPA TV» bleiben darunter.
- **Fotos:** die bisherigen Beitragsbilder aus dem CMS, keine neuen Bilder.
- **Variante «Foto nur im grossen Beitrag»:**
  - Der grosse Beitrag hat das Foto oben, den Text auf Manganese.
  - Die übrigen fünf haben kein Foto und zeigen dafür ihren Kurztext aus dem CMS (am Desktop heute ausgeblendet), damit sie nicht leer wirken.
  - Auf dem Handy bleiben die Kurztexte wie heute weg.
- **Variante «Fotos in allen Beiträgen»:**
  - Alle Beiträge zeigen ihr Foto.
  - Im grossen Beitrag füllt das Foto die ganze Höhe, damit keine leere dunkle Fläche entsteht.
- **Tablet:** der grosse Beitrag und vier weitere, damit unten keine einzelne Karte stehen bleibt.
- **Handy:** der grosse Beitrag und zwei weitere, wie bisher gekürzt.
- **Geprüft:**
  - 1440, 1280 × 720, 900 und 390 px
  - alle sichtbaren Fotos geladen
  - keine Überbreite
  - Wechsel über die Leiste funktioniert

## 4. Videos der Mitarbeitenden

Vormerkung (offener Punkt 130): Sobald die Vimeo-Links da sind, baue ich sie als Lightbox an den Teamkarten ein, zuerst als Entwurf. Die Lightbox ist nativ in Webflow und mit dem Link pflegbar.

## Technik und Versionen

- Grafik-Skript **1.29.1** (`rowapa-website-grafik@36769bd`, site-weit): Methoden mit `data-start="zu"`, ganzes Feld klickbar, Zeiger kennt `data-zeiger-klick`. Zwischenstand 1.29.0 (`@12b9861`) war kurz live.
- Umschaltleiste **2.1.2** (`ROWAPA-Website-2027-Automation@6b52966`, Quelle `entwurf-code/entwurf-muster.js`), nur auf den beiden Entwurfsseiten:
  - 2.1.0: Muster 2 und Fotos
  - 2.1.1: Abstände im 8-px-Raster
  - 2.1.2: Kontrast der übrigen Werte, Kurztexte
- Nach dem Entscheid wird die gewählte Fassung nativ in Webflow gebaut und das Entwurfs-Skript gelöscht (Freigabe nötig).

## Texttabelle

| Ort | Original (echte Seite) | Entwurf | Begründung | Offene Fragen |
|---|---|---|---|---|
| Beispielauswertungen, Muster 2 | – | keine neuen Texte; dieselben Einordnungen (Reiter 1, 3, 4 ohne den letzten Satz) und Massnahmen wie Muster 1 | Texte in Runde 88 freigegeben (Texttabelle Runde 88) | – |
| Beispielauswertungen, Bezeichnungen | – | «1 Diagramm · 2 Abweichung · 3 Einordnung · 4 Massnahme», «Einordnung», «Mögliche nächste Massnahme» | wie Muster 1; der Fenstertitel «ROWAPA Performance-Analyse · Beispielauswertung» entfällt in Muster 2 | – |
| Insights, Filter | (nur im Muster Runde 88) «Alle · Sales · Leadership» | entfällt | Auftrag ROWAPA | – |
| Insights, Karten ohne Foto | Kurztext am Desktop ausgeblendet | Kurztext sichtbar (Variante «Foto nur im grossen Beitrag», ab Tablet) | vorhandener Text aus dem CMS, füllt die Karte ohne Foto | – |
| Methoden | – | keine Textänderung | – | – |

## Prüfsession 25 (Entscheid 378)

| Bereich | Punkt | Ergebnis |
|---|---|---|
| A CI | Farben | ✓ Manganese, Plum, Sea Cliff (als 40-%-Ton, Begründung oben), Plum-Ton, Snowbank; keine fremden Farben |
| A CI | Spacing 8-px-Raster | ✗ → korrigiert: Muster 2 hatte Abstände von 12, 14 und 20 px; jetzt 16, 24, 32 und 48 px (Fassung 2.1.1) |
| A CI | Kontrast | ✗ → korrigiert: zurückgenommene Zahlen hatten bei 72 % Deckkraft nur 3,6 : 1; jetzt 84 % (4,75 : 1, Fassung 2.1.2). Spalte Sea Cliff hell 5,6 : 1, Manganese 8,4 : 1 |
| A CI | Ribbon, Flächen | ✓ Plum-Versatzrahmen wie heute, keine neue Grafik |
| B Texte | keine erfundenen Fakten | ✓ keine neuen Texte; Kurztexte der Insights stammen aus dem CMS; Musterdaten unverändert und gekennzeichnet |
| B Texte | Sie-Form, «Unternehmen» | ✓ unverändert |
| B Texte | Texttabelle | ✓ oben |
| C Bauweise | nativ zuerst | ✓ Methoden: Attribut in Webflow pflegbar, Verhalten im bestehenden Grafik-Modul; Entwürfe nur über das Entwurfs-Skript, nach dem Entscheid nativ |
| C Bauweise | «Bewegung reduzieren» | ✓ Schritte und Klappen ohne Bewegung |
| C Bauweise | Handy und Tablet | ✓ 390 und 900 px, keine Überbreite, Tablet ohne einzelne Karte, Schritte in zwei Zeilen |
| D Abmachungen | Entscheid 393 (umschaltbar, nebeneinander) | ✓ beide Spaltenfarben und beide Foto-Varianten nebeneinander, dazu «heute» und Muster 1 |
| D Abmachungen | Entscheid 389 (Entwurf zuerst) | ✓ Muster nur auf den Entwurfsseiten. Die Methoden hat ROWAPA ausdrücklich so bestellt; echte Seite und Entwurf sind gleich gesetzt |
| D Abmachungen | Mauszeiger, Kopfleiste, Megamenü, Seitenwechsel | ✓ unverändert (Seitenwechsel-Skript nicht angefasst) |
| E Ablauf | Veröffentlichen | ✓ nur Testadresse |
| E Ablauf | Löschen | ✓ nichts gelöscht (der Filter war ein Teil des Entwurfs-Skripts, kein Inhalt) |
| E Ablauf | Grafik-Skript nur im Repository, jsDelivr mit SRI | ✓ 1.29.1 und 2.1.2 mit Commit-Kennung und SRI, Datei von jsDelivr mit der lokalen verglichen |
| E Ablauf | keine Zugangsdaten, keine Modellbezeichnungen, keine Personenfotos im Repository | ✓ |

## Fragen an ROWAPA

1. Beispielauswertungen: Muster 2 mit Spalte Sea Cliff oder Manganese? Oder doch Muster 1 bzw. «heute»?
2. Insights: Foto nur im grossen Beitrag (mit Kurztexten) oder Fotos in allen Beiträgen?
3. Nach der Wahl: nativ auf die echten Seiten bauen und Entwurfs-Skript sowie Entwurfsseiten löschen (Freigabe nötig).
4. Videos: Vimeo-Links schicken, sobald bereit; Einverständnis der Mitarbeitenden vorhanden?
5. 404-Seite: Hilfsseite «404» im Designer öffnen, sobald es passt (offener Punkt 126).
