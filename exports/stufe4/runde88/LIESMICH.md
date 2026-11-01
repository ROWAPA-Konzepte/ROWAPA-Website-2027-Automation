# Runde 88 · Muster Performance-Analyse und Insights als umschaltbare Entwürfe, Überblendung in beide Richtungen (Stufe 4, 01.11.2026)

## Auftrag ROWAPA (Entscheid 402)

Auswahl aus der Skizze (Runde 87):

| Punkt | Entscheid |
|---|---|
| Lösungen für Unternehmen | bleibt wie heute |
| Performance-Analyse | einmal als Muster wie in der Skizze bauen, auf der Seite Performance-Analyse; an der echten Seite nichts ändern, umschaltbar wie bisher |
| Insights | ebenso als Muster |
| Alles andere | bleibt im Moment so |
| Überblendung | so bauen, dass sie in beide Richtungen getestet werden kann (bisher nur Startseite → Unterseite getestet) |
| Zentrierte Titel | nein |
| Einstieg nach Rolle | weglassen |
| Texte «Was Sie danach in der Hand haben» und «Mögliche nächste Massnahme» | übernehmen |
| 404-Seite | macht ROWAPA noch |
| Klasse `is-nach-bild` | löschen, wenn in Ordnung |
| Neu | Ordner mit Videos aller Mitarbeitenden für «Über uns» |

Grundsatz: auf der heutigen Fassung aufbauen, nur das Genannte ändern.

## Links zum Ansehen (Testadresse)

- Performance-Analyse (Entwurf): https://rowapa-website-2027-automation.webflow.io/performance-analyse-entwurf?v=auswertung:muster,insights:magazin
- Startseite (Entwurf): https://rowapa-website-2027-automation.webflow.io/startseite-entwurf?v=auswertung:muster,insights:magazin

Unten links öffnet «Entwurf · 2 von 2 im Muster» die Umschaltleiste: je Punkt «heute» oder Muster, dazu Links zwischen den beiden Entwurfsseiten. Die Wahl gilt für beide Seiten und bleibt im Browser gespeichert. Die echten Seiten (`/` und `/performance-analyse`) sind unverändert.

## 1. Muster Beispielauswertungen (Entwurfsseite Performance-Analyse)

Wie in der Skizze, auf dem heutigen Inhalt aufgebaut:

- **Fenster:** Die fünf Fragen stehen links untereinander, die Auswertung rechts. Oben eine Leiste mit «ROWAPA Performance-Analyse · Beispielauswertung» und den vier Schritten.
- **Schritt für Schritt** bei jedem Öffnen einer Frage:
  1. Diagramm baut sich auf (wie heute).
  2. Nach 1,4 s: die auffälligste Stelle bleibt hervorgehoben, die übrigen Zeilen treten zurück, der Hinweis erscheint (z. B. «Grösster Unterschied zwischen Eigen- und Fremdsicht»).
  3. Nach 2,0 s: Einordnung (Aussage und Text).
  4. Nach 2,6 s: **Mögliche nächste Massnahme**.
  
  Die Schritte in der Leiste leuchten mit. Bei «Bewegung reduzieren» steht alles sofort da.
- **Massnahmen:** fünf neue Webflow-Elemente mit den freigegebenen Texten, im Designer im Navigator als «Massnahme (Muster) · Reiter 1» bis «· Reiter 5». Sie sind nur im Muster sichtbar; «heute» bleibt wie die echte Seite.
- **Einordnung im Muster:** Bei Reiter 1, 3 und 4 fällt der letzte Satz weg, weil ihn jetzt die Massnahme übernimmt (siehe Texttabelle). Reiter 2 und 5 bleiben gleich. Bei «heute» stehen die bisherigen Texte.
- Handy und Tablet: Fragen als Wischreihe über der Auswertung, darunter Einordnung und Massnahme untereinander.

Musterdaten und Diagramme sind unverändert (Werte geprüft: Reiter 2 −1,8 und −1,9, Reiter 4 +2,3).

## 2. Muster Neueste Insights (Startseite-Entwurf)

Wie in der Skizze:

- **Magazin:** ein grosser Beitrag (Manganese, mit Kurztext), weitere Beiträge kleiner daneben und darunter. Titel oben links, Filter «Alle · Sales · Leadership» und «Alle Inhalte» rechts. Der erste sichtbare Beitrag ist jeweils der grosse.
- **Ohne Fotos** in den Karten, wie im Vorschlag. Bei «heute» erscheinen die Fotos wie bisher.
- Die Links «Live-Webinare» und «ROWAPA TV» bleiben darunter.
- **Handy:** der grosse Beitrag und zwei weitere (heute ist es eine Wischreihe; früherer Entscheid: Insights auf dem Handy kürzen).

Hinweis für den nativen Bau: Webflow kann Karten nicht von sich aus filtern. Möglich sind ein kleines Skript (wie im Muster) oder Webflow-Reiter «Alle · Sales · Leadership» mit je einer Liste (ohne Skript, im CMS pflegbar).

## 3. Überblendung in beide Richtungen

Die beiden Entwurfsseiten sind über eine eigene Entwurfs-Navigation verbunden:

- Megamenü «Was wir tun» › «Performance-Analyse» → Performance-Analyse (Entwurf).
- Logo → Startseite (Entwurf).
- Zusätzlich zwei Links in der Umschaltleiste.

Die echte Navigation ist unverändert.

**Testweg:** Startseite (Entwurf) → Megamenü «Performance-Analyse» → Logo zurück → Zurück-Taste → Zurück-Taste → Vorwärts-Taste. Das Gleiche geht mit den echten Seiten.

**Gemessen** (Testadresse, ohne Vorladen, weil das Messwerkzeug das Vorladen abschaltet):

| Weg | Entwürfe Desktop | Echte Seiten Desktop | Entwürfe Handy |
|---|---|---|---|
| Startseite → Performance-Analyse (Link) | Überblendung ✓, 1,6 s bis Anzeige | ✓, 1,2 s | ✓, 0,5 s |
| Performance-Analyse → Startseite (Logo) | ✓, 0,8 s | ✓, 0,6 s | ✓, 0,3 s |
| Zurück-Taste | ✓, 1,6 s | ✓, 0,7 s | ✓, 0,1 s |
| Zurück-Taste | ✓, 0,2 s | ✓, 0,4 s | ✓, 0,1 s |
| Vorwärts-Taste | ✓, 1,2 s | ✓, 0,7 s | ✓, 0,1 s |

In jedem Fall lief die Überblendung (Desktop 0,35 s, Handy 0,3 s), die Navigation blieb stehen. Die Zeit «bis Anzeige» ist die Ladezeit der neuen Seite, solange die alte stehen bleibt. In der Testumgebung ist der Schriften-Server gesperrt; das verlängert die Zeiten. Mit Vorladen (Maus über dem Link, ab 992 px) beginnt der Wechsel nach 2 ms (gemessen in Runde 87).

Bild für Bild aufgezeichnet (Entwürfe, 1280 × 800): Die alte Seite steht, bis die neue bereit ist. Dann blenden beide in rund 0,35 s über; Navigation und Leiste bleiben ruhig.

Nicht nachstellbar: Lädt Chrome die Seite beim Zurückgehen aus dem eigenen Speicher, ist das in der Testumgebung abgeschaltet. Fehlt in diesem Fall die Überblendung, bitte melden.

Weiterhin gilt: Links auf Seiten, die es noch nicht gibt, zeigen die Fehlerseite ohne Wechsel. Das ändert sich erst mit der eigenen 404-Seite (macht ROWAPA, offener Punkt 126).

## 4. Weitere Punkte

- **Lösungen für Unternehmen:** bleibt wie heute.
- **Zentrierte Titel:** nein. Entscheid 393 gilt weiter: Text linksbündig.
- **Einstieg nach Rolle:** weggelassen.
- **Texte freigegeben:**
  - «Mögliche nächste Massnahme» steht im Muster.
  - «Was Sie danach in der Hand haben» (vier Ergebnisse je Phase aus der Skizze) ist für den Bau von «Unser Vorgehen» bzw. «So arbeiten wir» vorgemerkt. Das Vorgehen auf der Startseite bleibt vorerst unverändert.
- **Klasse `is-nach-bild` gelöscht:** vorher auf allen Seiten gesucht, die sie verwendet haben könnten (Startseite, Performance-Analyse, Entwurf, Vorschau, alte Fassung, Fotos-Entwurf); keine Verwendung. Die Elternklasse `is-stimme` bleibt.

## 5. Videos der Mitarbeitenden («Über uns»)

Der Ordner `C:\Users\…\Fotos Mitarbeiter\Vidma 2026\Testimonials\Webseite` liegt auf Ihrem Windows-Rechner bzw. in SharePoint. Von dieser Cloud-Sitzung aus ist er nicht erreichbar.

Vorschlag:

1. **Videos bei Vimeo hochladen** (nicht gelistet). Für Videos mit Ton ist das der saubere Weg; Webflow selbst nimmt nur stumme Hintergrundvideos bis 30 MB.
   - Mir die Links schicken, oder den Ordner über Google Drive freigeben; dafür steht mir eine Verbindung zur Verfügung.
2. **Einbau als Muster** in «Die Menschen hinter ROWAPA» auf dem Startseite-Entwurf:
   - Teamkarte mit Abspielzeichen.
   - Das Video öffnet sich in einer Webflow-Lightbox (nativ, mit dem Vimeo-Link pflegbar).
   - Die Seite «Über uns» bekommt das Gleiche, sobald sie gebaut wird.
3. Personenvideos kommen nicht ins Repository. Bitte bestätigen, dass alle Abgebildeten der Verwendung auf der Website zugestimmt haben.

## Texttabelle

| Ort | Original (echte Seite) | Muster | Begründung | Offene Fragen |
|---|---|---|---|---|
| Auswertung, Leiste | – | «ROWAPA Performance-Analyse · Beispielauswertung», «1 Diagramm · 2 Abweichung · 3 Einordnung · 4 Massnahme» | Fenster und Schritte wie in der Skizze | – |
| Auswertung, Bezeichnungen | – | «Einordnung», «Mögliche nächste Massnahme», «Abgeleitet aus dem Musterbericht» | ordnet die zwei Blöcke unter dem Diagramm | – |
| Reiter 1, Massnahme | – | «Monatlicher Coaching-Dialog für die Teamleitung und begleitete Mitarbeitergespräche mit verbindlichen Vereinbarungen.» | freigegeben (Entscheid 402) | – |
| Reiter 2, Massnahme | – | «Training zu Kundenpotenzialen und Verbindlichkeit statt einer zusätzlichen Fachschulung.» | freigegeben | – |
| Reiter 3, Massnahme | – | «Gemeinsamer Schwerpunkt Kundenpotenziale und Verbindlichkeit für alle Teams, Team D zusätzlich begleiten.» | freigegeben | – |
| Reiter 4, Massnahme | – | «Training zur Bedarfsergründung mit Praxisbeispielen der Referenzgruppe.» | freigegeben | – |
| Reiter 5, Massnahme | – | «On-the-Job-Coaching Bedarfsanalyse, monatlicher Coaching-Dialog, Folgemessung nach 6 Monaten.» | freigegeben | – |
| Reiter 1, Einordnung | «… fehlen verbindliche Vereinbarungen. Daraus ergibt sich ein konkreter Ansatz für die Führungsentwicklung.» | ohne den letzten Satz | den konkreten Ansatz nennt jetzt die Massnahme | – |
| Reiter 3, Einordnung | «… sind in allen Teams die tiefsten Werte. Team D wird zusätzlich begleitet.» | ohne den letzten Satz | steht in der Massnahme | – |
| Reiter 4, Einordnung | «… am grössten. Hier setzt ein Training mit Praxisbeispielen der Referenzgruppe an.» | ohne den letzten Satz | steht in der Massnahme | – |
| Insights, Filter | – | «Alle · Sales · Leadership» | Themen der Beiträge | Weitere Themen, sobald die Blogbeiträge aus dem CMS kommen |

## Prüfsession 24 (Entscheid 378)

| Bereich | Punkt | Ergebnis |
|---|---|---|
| A CI | Farben, Schrift | ✓ nur Variablen und Töne des Designsystems (Manganese, Plum, Plum Tint, Snowbank, Sea Cliff), TASA über die Schrift-Variablen |
| A CI | Flächenfolge, Ribbon | ✓ unverändert |
| B Texte | keine erfundenen Fakten | ✓ Massnahmen von ROWAPA freigegeben; Einordnungen nur gekürzt; Musterdaten unverändert und gekennzeichnet |
| B Texte | Sie-Form, «Unternehmen» | ✓ |
| B Texte | Texttabelle | ✓ oben |
| C Bauweise | nativ zuerst | ✓ Massnahmen als Webflow-Elemente mit eigenen Klassen. Fenster, Schritte und Magazin zeigt im Entwurf die Umschaltleiste; nach dem Entscheid werden sie nativ gebaut, das Skript wird gelöscht (wie Runden 79–84) |
| C Bauweise | «Bewegung reduzieren» | ✓ Schritte stehen sofort da |
| C Bauweise | Handy | ✓ keine Überbreite (390 px), Wischreihe für die Fragen, Insights auf drei Beiträge gekürzt |
| D Abmachungen | Entscheid 393 (umschaltbar, Text linksbündig) | ✓ «heute» und Muster je Punkt, Wahl gespeichert und als Link teilbar; keine zentrierten Titel |
| D Abmachungen | Megamenü ohne Abdunkeln, Kopfleiste blendet aus, Mauszeiger | ✓ unverändert, im Entwurf geprüft (keine Abdunkel-Ebene) |
| D Abmachungen | Seitenwechsel in alle Richtungen | ✓ Link, Logo, Zurück, Zurück, Vorwärts auf Entwürfen und echten Seiten, Desktop und Handy. ? Wechsel aus dem Browserspeicher nicht nachstellbar |
| E Ablauf | Entwurf zuerst (389) | ✓ Startseite kopiert (`/startseite-entwurf`); Änderungen nur auf den beiden Entwurfsseiten und in der Entwurfs-Navbar; echte Seiten geprüft: ohne Leiste, ohne Massnahmen, Insights wie bisher |
| E Ablauf | Löschen | ✓ `is-nach-bild` erst nach Freigabe und Suche auf allen betroffenen Seiten gelöscht; auf der Startseite-Kopie die echte Navbar-Instanz durch die Entwurfs-Navbar ersetzt (Komponente selbst unverändert); fünf eben angelegte Platzhalter-Beschriftungen ersetzt |
| E Ablauf | Veröffentlichen | ✓ nur Testadresse |
| E Ablauf | keine Zugangsdaten, keine Modellbezeichnungen, Personenvideos nicht ins Repository | ✓ |

## Fragen an ROWAPA

1. Muster Beispielauswertungen: übernehmen, ändern oder bei «heute» bleiben? Passen die Zeiten (rund 2,6 s bis zur Massnahme)?
2. Muster Insights: übernehmen? Mit oder ohne Fotos im grossen Beitrag? Filter mit kleinem Skript oder über Webflow-Reiter?
3. Videos: Vimeo-Links oder Google-Drive-Ordner schicken? Einverständnis der Mitarbeitenden vorhanden?
4. 404-Seite: Hilfsseite «404» im Designer öffnen, sobald es passt.
