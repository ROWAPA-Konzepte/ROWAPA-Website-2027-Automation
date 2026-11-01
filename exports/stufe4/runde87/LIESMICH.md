# Runde 87 · Seitenwechsel als kurze Überblendung, klickbare Skizze mit wechselndem Seitenrhythmus (Stufe 4, 01.11.2026)

## Auftrag ROWAPA (Entscheid 401)

Rückmeldung zu den Widersprüchen aus Runde 86:

| Punkt | Entscheid |
|---|---|
| Mauszeiger (Punkt mit Ring) | bleibt |
| Titel wortweise | bleibt |
| Seitenwechsel | «hat bis jetzt noch nicht so richtig funktioniert»: nochmals prüfen und als **kurze Überblendung** übernehmen, wie im Feedback vorgeschlagen |
| Megamenü | ohne Abdunkeln, wie abgemacht |
| Themen | kompakte Auswahl oder festgehaltene Scroll-Szene, Claude darf zwischen beiden wechseln |
| Kopfleiste | «sicher nicht sichtbar, blendet beim Runterscrollen aus, das müssen wir so festhalten» |
| Skizze | Vorschlag mit einer Skizze ist in Ordnung |
| Neu: Abschnitte | «Jetzt ist alles sehr klassisch gebaut. Wir haben links immer den Text mit dem Titel, wir haben klare Sektoren, alle ungefähr gleich hoch. Vielleicht gibt es hier noch etwas Spannenderes.» |

## 1. Seitenwechsel 1.3.0: kurze Überblendung (Testadresse, für alle Besucher)

### Was nicht richtig funktionierte

1. **Fehlende Seiten:** Navigation und Megamenü verlinken 32 Seiten, auf der Testadresse gibt es davon zwei (Runde 85). Jeder andere Klick landet auf der Fehlerseite der Plattform, ohne Wechsel. Das bleibt so, bis die eigene 404-Seite gebaut ist (offener Punkt 126).
2. **Bilder kamen zu spät:** Webflow lädt Bilder standardmässig erst bei Bedarf («lazy»). Bei einem schnellen Wechsel erschienen Header-Bild und Lupe der Performance-Analyse erst nach der Bewegung und «poppten» auf.
3. **Bewegung:** Bis jetzt fuhr die neue Seite 0,5 s von unten ein (1.2.0). Das Feedback empfiehlt eine kurze Überblendung (250–450 ms).

### Jetzt

- **Überblendung 0,35 s** (Handy 0,3 s), gleiche sanfte Kurve, in jede Richtung.
- **Navigation bleibt stehen**, nur der Inhalt blendet über.
- Offene Menüs schliessen beim Klick. Fährt die Maus über einen Link, lädt Chrome die Zielseite vor (ab 992 px Fensterbreite, darunter beim Antippen).
- **Bilder im ersten Bildschirm laden sofort** (Attribut `loading` = `eager` je Bild): Startseite (Header, Logo-Band), Performance-Analyse und Entwurfsseite (Lupe, Header-Bild). 25 Bilder «eager», 69 weiter unten bleiben «lazy».
- Grafiken starten erst nach der Überblendung; die Lupe steht beim Wechsel als Bild da und baut sich nicht noch einmal auf.
- «Bewegung reduzieren»: kein Seitenwechsel.

Kopf-Skript «ROWAPASeitenwechsel» 1.3.0, Quelle `code/seitenwechsel-1.3.0.js`.

### Gemessen (Testadresse, 1440 × 900)

| Richtung | vorgeladen: Klick bis Anzeige | ohne Vorladen: Klick bis Beginn | Überblendung (eingestellt / gemessen) | Bilder geladen | Grafik startet |
|---|---|---|---|---|---|
| Startseite → Performance-Analyse (Megamenü) | 2 ms | 0,50 s | 0,35 s / 0,42 s | 10, längstes 83 ms | 0,42 s nach Beginn (vorgeladen 0,58 s nach Anzeige) |
| Performance-Analyse → Startseite (Logo) | 2 ms | 0,34 s | 0,35 s / 0,50 s | 12, längstes 83 ms | 0,51 s nach Beginn (vorgeladen 0,59 s nach Anzeige) |

Menüs 60 ms nach dem Klick: geschlossen. Im Browser laufen Seite und Navigation je 350 ms. Gemessen wird vom Beginn bis zum Ende inklusive erstem Bildaufbau. Ohne Vorladen erscheint die Lupe während der Überblendung (Bild nach höchstens 83 ms geladen).

## 2. Klickbare Skizze

**Link (privat):** https://claude.ai/artifact/NWHZ8bZ1U1dDvnarZhhZHa. Andere Personen sehen die Seite erst, wenn sie über «Teilen» auf der Seite freigegeben wird.

Die Skizze zeigt Startseite und Performance-Analyse mit den Texten der Testadresse, den CI-Farben, TASA und unseren Punktfiguren. Sie ist nicht pixelgenau und kein Webflow-Bau.

### Bedienung

- **Steuerleiste unten rechts («Skizze»):**
  - Seite: Startseite oder Performance-Analyse.
  - Themen: kompakte Auswahl oder Scroll-Szene.
  - Titel in der Mitte: Text linksbündig oder zentriert (Vergleich zu Entscheid 393).
  - Bewegung: an oder pausiert.
  - Seitenrhythmus: Abschnitte beschriften. Die Karte zeigt je Abschnitt Höhe, Fläche und Titelposition; ein Klick springt hin.
  - Links «So ist es heute» auf die Testadresse.
- Wechsel zwischen den Seiten über Menü, Buttons und Leiste, mit derselben Überblendung (0,35 s). Die Zurück-Taste funktioniert.
- Kopfleiste blendet beim Runterscrollen aus und beim Hochscrollen ein. Megamenü ohne Abdunkeln, mit Punktmotiv je Thema. Mauszeiger Punkt mit Ring. Titel wortweise auf der Performance-Analyse.
- Die drei Markenmomente aus dem Feedback:
  - Einstieg: Punkte formen einmal die Treppe.
  - Themen: Ein Klick verwandelt die Punktform.
  - Auswertung: Frage wählen → Diagramm → grösste Abweichung → Einordnung → mögliche nächste Massnahme.
- Einstieg nach Rolle (Idee 1 aus Runde 86): Drei Schalter wählen Thema und Beispielauswertung vor.

### Seitenrhythmus (Kernpunkt der Rückmeldung)

Statt «Titel links, Inhalt rechts, alle gleich hoch» wechselt der Aufbau von Abschnitt zu Abschnitt: Titelposition, Höhe, Fläche und Form. Der Text bleibt linksbündig (Entscheid 393). Der Titelblock steht links, eingerückt in der Mitte, rechts, als Kachel oder als erste Karte.

| Nr. | Abschnitt | Fläche | Titel | Aufbau | Höhe 1440 × 900 | Handy |
|---|---|---|---|---|---|---|
| 1 | Einstieg | dunkel (Tiefsee, Header) | links, sehr gross | füllt den Bildschirm, 8 : 4, Treppe aus Punkten, Logo-Laufband | 836 px | 968 px |
| 2 | Lösungen für Unternehmen | grau | in der Auswahl, kein Titelstreifen | fünf Themen links, Bühne rechts läuft mit; umschaltbar auf Scroll-Szene | 1207 px (Scroll-Szene 3496) | 1089 px |
| 3 | Unsere Erfolge | weiss | als Kachel | Bento: Titel-Kachel, grosse Kundenstimme, Zahlen, Logos | 1109 px | 1897 px |
| 4 | Vom Ergebnis zur Entscheidung | Manganese → weiss | Mitte (eingerückt) | das Fenster ragt in den weissen Bereich und verbindet zwei Abschnitte | 1113 px | 1237 px |
| 5 | «Vom Bauchgefühl zur Gewissheit.» | weiss | ohne Titelstreifen, sehr gross | kurzes Band, Diagonal-Ribbon (nicht auf dem Handy) | 453 px | 292 px |
| 6 | Unser Vorgehen | grau | rechts | Zeitleiste quer, je Phase «Was Sie danach in der Hand haben» | 673 px | 908 px |
| 7 | ROWAPA Digital | Manganese | rechts, gespiegelt | grosse Vorschau links, Auswahl rechts | 918 px | 994 px |
| 8 | Die Menschen hinter ROWAPA | weiss | Mitte (eingerückt) | fünf Karten versetzt in einer Reihe, Detailansicht von der Seite | 888 px | 1213 px |
| 9 | Persönlich weiterkommen | grau | erste Karte | Schiene bis zum Bildschirmrand, Pfeile | 430 px | 372 px |
| 10 | Neueste Insights | weiss | links, klein | Magazin: ein grosser Beitrag, weitere klein, Filter | 922 px | 1489 px |
| 11 | Der nächste Schritt … | Sea Cliff Tint | Mitte (eingerückt) | eine Person, ein Schritt | 837 px | 634 px |

Höhen von 430 bis 1207 px; drei von elf Abschnitten sind höher als 1100 px. In der ersten Fassung der Skizze waren es 514 bis 1568 px und sechs von elf Abschnitten über 1100 px. Auf der Performance-Analyse ist nur der Aufbau aus Runde 86 skizziert (Einstieg mit Lupe, interaktive Auswertung, kurzes Band).

**Nicht in der Skizze:** «Messbare Entwicklung statt Versprechen» (die Kennzahlen stehen in der Bento-Kachel) und «Gut zu wissen» (Fragen). Ob sie bleiben, entscheiden wir beim nativen Bau.

### Platzhalter und Vorschläge

- Digital: Die Vorschauen sind Beispieldarstellungen («Bildschirmfoto folgt»).
- Team: Initialen statt Porträts; Fachgebiet, Branchenbezug und Sprachen «[ROWAPA bestätigen]».
- «Was Sie danach in der Hand haben» je Phase: Vorschlag [ROWAPA bestätigen].
- «Mögliche nächste Massnahme» je Auswertung: abgeleitet aus dem Musterbericht, Vorschlag [ROWAPA bestätigen].
- Links ohne Ziel zeigen den Hinweis «Diese Seite ist in der Skizze nicht ausgearbeitet.»

### Texttabelle (nur Texte, die von der Testadresse abweichen)

| Ort | Original (Testadresse) | Vorschlag (Skizze) | Begründung | Offene Fragen |
|---|---|---|---|---|
| Einstieg, Buttons | «Lösungen entdecken» | «Beispielauswertung ansehen» und «Gespräch vereinbaren» | Feedback: Nutzen sofort zeigen, zwei klare Handlungen | Ziel von «Gespräch vereinbaren» (Kontaktseite fehlt, Punkt 126) |
| Einstieg, Rolle | – | «Ihr Einstieg: Für Generalagenturen · Für Vertriebsleitungen · Für Banken» mit je einer Frage und «Passendes Thema und Beispielauswertung sind unten vorausgewählt.» | Idee 1 aus Runde 86 (Feedback Abschnitt 7) | Sind das die richtigen drei Zielgruppen? [ROWAPA bestätigen] |
| Einstieg, Kicker | – | «Beratung · Training · Digitale Lösungen» | ordnet den Titel ein; aus dem Satz «Beratung, Training und digitale Lösungen greifen ineinander.» | passt das als Kicker? |
| Unsere Erfolge | – | «Was Kunden über die Zusammenarbeit sagen und was wir messen.» | Titel-Kachel braucht einen kurzen Satz; keine neue Behauptung | – |
| Auswertung (Startseite) | – | Kicker «Performance-Analyse», Titel «Vom Ergebnis zur Entscheidung», Einleitung «Wählen Sie eine Frage. Die Musterauswertung zeigt, was auffällt, was es bedeutet und was als Nächstes sinnvoll ist.», Fuss «Musterdaten. Ihre eigene Auswertung entsteht aus Skill-Check, Eigen- und Fremdsicht, Interviews und Begleitungen.» | Titel aus dem Feedback; Methoden wie auf der Performance-Analyse | Titel so? |
| Auswertung, Schritte | – | «1 Diagramm · 2 Abweichung · 3 Einordnung · 4 Massnahme», Block «Mögliche nächste Massnahme» mit fünf Texten | Feedback Effekt C; Texte aus dem Musterbericht abgeleitet | Massnahmen-Texte [ROWAPA bestätigen] |
| Statement-Band | «Vom Bauchgefühl zur Gewissheit: Jedes Projekt beginnt …» (Einleitung «Unser Vorgehen») | Titel «Vom Bauchgefühl zur Gewissheit.», darunter der Satz | gleicher Text, als kurzes Band vor dem Vorgehen | – |
| Vorgehen | – | «Was Sie danach in der Hand haben» je Phase: «Ein klares Ist-Bild und messbare Ziele.» · «Die Ursachen und die Stellen, an denen Leistung verloren geht.» · «Priorisierte Massnahmen mit Zielgruppe und Zeitpunkt.» · «Ein Wirkungsbericht, der zeigt, was sich verändert hat.» | Feedback: je Phase das konkrete Ergebnis | [ROWAPA bestätigen] |
| Team, Detail | – | Fachgebiet, Branchenbezug, Sprachen | Feedback: Detailansicht statt nur Name | Angaben fehlen [ROWAPA bestätigen] |
| Persönlich weiterkommen | – | «Angebote für Einzelpersonen: Diagnostik, Weiterbildung, Coaching und der CAS mit der HWZ Zürich.» | Titel ist die erste Karte und braucht einen Satz; ohne Anrede | – |
| Menü (Handy) | – | Weitere Seiten unter den Themen: So arbeiten wir, Unsere Kunden, Über uns, Partner werden, Kontakt | Handy-Menü zeigt alle Hauptpunkte | – |

### Geprüft

| Prüfung | Ergebnis |
|---|---|
| 1440 × 900, 1280 × 720, 1920 × 1080 und Handy 390 × 844: keine Fehlermeldung, keine Überbreite | ✓ |
| Titel im Einstieg je Zeile einzeilig: 45 px (1280 × 720), 56 px (1440 × 900), 67 px (1920 × 1080), Handy 34 px | ✓ |
| Rolle wählt Thema und Auswertung vor; Themen; Kundenstimmen von Hand; Phasen; Werkzeuge; Team-Detail (Escape schliesst); Filter; Schiene; Hinweis bei Links ohne Ziel | ✓ |
| Startseite ↔ Performance-Analyse, aus der Analyse zu «So arbeiten wir», Zurück-Taste, Megamenü-Thema aus der Analyse | ✓ |
| Scroll-Szene: Themen 1 bis 5 wechseln beim Scrollen (Desktop und Handy) | ✓ |
| Texte gegen die Testadresse geprüft (Themen, Kundenstimmen, Kennzahlen, Team, Insights, Kontakt, Werkzeuge, Logos) | ✓ |

### Quelle

`skizze/skizze.html` ist die fertige, eigenständige Seite. Neu bauen im Ordner `skizze/`: `python3 quelle/bau.py`. Das Skript setzt Vorlage (`quelle/skizze.tpl.html`), Punktformen (`quelle/formen.json`) und Werkzeug-Symbole (`quelle/icons/`) zusammen.

Die Punktformen sind sieben Formen (fünf Themen, Treppe, Lupe) aus den Figuren im Repository `rowapa-website-grafik`. Je Form 1500 Punkte (x, y, Farbe), Base64, sortiert für einen ruhigen Übergang. Das Ergebnis ist byte-gleich mit der veröffentlichten Fassung (geprüft).

## 3. Vorschlag für den nächsten Schritt

1. ROWAPA sieht die Skizze auf Handy und Desktop an. Je Abschnitt: übernehmen, ändern oder weglassen; dazu die Wahl «Auswahl oder Scroll-Szene» und «Text linksbündig oder zentriert».
2. Danach baue ich das Gewählte nativ in Webflow, als umschaltbaren Entwurf neben der heutigen Startseite (Entscheide 389, 393). Reihenfolge laut Feedback:
   1. Startseite: Rhythmus und Einstieg
   2. Auswertung (vieles ist schon da)
   3. Digital (braucht Bildschirmfotos)
   4. Feinschliff (Team braucht Angaben)
3. 404-Seite: Bitte im Designer links «Pages» öffnen und unten bei «Utility Pages» die Seite «404» anklicken. Dann baue ich sie, und der Seitenwechsel gilt bei jedem Klick.

## Prüfsession 23 (Entscheid 378)

| Bereich | Punkt | Ergebnis |
|---|---|---|
| A CI | Farben nur aus der Palette und den Tönen des Designsystems | ✗ korrigiert: Hover Plum auf `#8E0F44` (Designsystem), Punkte auf Dunkel nur Snowbank, Great Serpent, Sea Cliff, Plum (vorher zwei freie Töne), gedämpfter Text `#4A5A70`, Vorschaufenster Tiefsee statt eines freien Dunkeltons. Sea Cliff Tint `#D9E7F2` und Plum Tint `#FBEEF3` stammen aus dem Designsystem ✓ |
| A CI | Dunkle Inhaltsflächen Manganese, Tiefsee nur Header (Entscheid 377) | ✗ korrigiert: «ROWAPA Digital» war Tiefsee, jetzt Manganese. Einstieg und Kopf der Performance-Analyse sind Header (Tiefsee) ✓; Footer Tiefsee wie im Designsystem ✓ |
| A CI | Typografie | ✗ korrigiert: H3 jetzt Semibold (vorher Bold). H1 Bold rund 6 % der Fensterhöhe (6,2 vh) ✓, H2 Bold (Entscheid 379) ✓, Labels TASA Explorer Extrabold, Versalien, gesperrt ✓ |
| A CI | 8-px-Raster | ✓ Hauptabstände 8 bis 128 px aus dem Raster. Die Skizze ist nicht pixelgenau, kleine Innenabstände (Schalter, Etiketten) sind frei; im nativen Bau gelten die Variablen |
| A CI | Flächenfolge | ✓ keine drei gleichen Flächen hintereinander |
| A CI | Diagonal-Ribbon | ✓ einmal, im Statement-Band, Deckkraft 0,7 wie die Variable im Designsystem (vorher 0,9, korrigiert); auf dem Handy ausgeblendet, weil es dort den Titel kreuzt |
| B Texte | «Unternehmen», Sie/Du | ✓ Sie auf allen gemeinsamen Teilen; der Bereich für Einzelpersonen ohne Anrede |
| B Texte | keine erfundenen Fakten | ✓ Texte von der Testadresse (geprüft); Neues als Vorschlag mit [ROWAPA bestätigen]; Platzhalter bezeichnet; Musterdaten gekennzeichnet; doppelte Kennzahl «100 % Trainer:innen …» aus dem Team-Abschnitt entfernt (nicht belegt) |
| B Texte | Texttabelle | ✓ oben |
| C Bauweise | nativ zuerst | ✓ Skizze ist kein Produkt; Übernahme danach nativ. Seitenwechsel bleibt ein kleines Kopf-Skript (Webflow kann keine Seitenübergänge); `loading` = `eager` ist ein Attribut, im Designer pflegbar |
| C Bauweise | «Bewegung reduzieren» | ✓ Website: kein Seitenwechsel. Skizze: Punkte stehen sofort, keine Überblendung, Schalter «Bewegung pausiert» |
| C Bauweise | Wischreihen in Rastern | ✗ korrigiert: Seitlich scrollende Listen machten die Skizze auf dem Handy 1132 px breit; Spalten jetzt `minmax(0, 1fr)`. Neu in der Prüfliste |
| D Abmachungen | Mauszeiger, Megamenü ohne Abdunkeln, Kopfleiste blendet aus, Titel wortweise | ✓ (Entscheid 401 bestätigt 369/383, 390, 391) |
| D Abmachungen | Seitenwechsel | ✓ 0,35 s Überblendung (Entscheid 401 ersetzt 0,5 s aus 398), Navigation bleibt stehen, beide Richtungen gemessen. ? Bei Links auf fehlende Seiten erst mit eigener 404-Seite |
| D Abmachungen | Titel-Anordnung (Entscheid 393: links Standard, rechts zur Abwechslung, Text linksbündig) | ✗ korrigiert: Die erste Fassung der Skizze hatte zentrierten Text und einen rechtsbündigen Titel. Jetzt steht der Text überall linksbündig, der Block links, eingerückt, rechts, als Kachel oder als erste Karte. Zentriert nur zum Vergleich in der Leiste. ? Darf es mittige Titel geben? |
| D Abmachungen | Rückmeldungen von aussen nicht stillschweigend übernehmen | ✓ Widersprüche wurden in Runde 86 vorgelegt und in Entscheid 401 entschieden |
| E Ablauf | Veröffentlichen | ✓ nur Testadresse (Seitenwechsel 1.3.0, Bilder sofort laden); Skizze als privater Link |
| E Ablauf | Entwurf zuerst (Entscheid 389) | ✓ Seitenwechsel: Übernahme von ROWAPA beschlossen («ich würde es so übernehmen»). Bilder sofort laden: technische Korrektur ohne sichtbare Änderung der Gestaltung |
| E Ablauf | Löschen | ✓ nichts gelöscht; ungenutzte Klasse `is-nach-bild` wartet auf Freigabe |
| E Ablauf | Bewegung messen statt schätzen | ✓ Zeiten oben |
| E Ablauf | keine Zugangsdaten, keine Modellbezeichnungen | ✓ |

## Fragen an ROWAPA

1. Skizze: Welche Abschnitte übernehmen, ändern oder weglassen? Themen als Auswahl oder als Scroll-Szene?
2. Titel in der Mitte: Soll es zentrierte Titel geben (Abweichung von Entscheid 393), oder bleibt der Text immer linksbündig?
3. Einstieg nach Rolle: Sind Generalagenturen, Vertriebsleitungen und Banken die richtigen drei Gruppen?
4. «Was Sie danach in der Hand haben» und «Mögliche nächste Massnahme»: Texte so bestätigen oder anpassen?
5. 404-Seite: Bitte im Designer die Hilfsseite «404» öffnen (siehe oben).
6. Ungenutzte Klasse `is-nach-bild` löschen?
