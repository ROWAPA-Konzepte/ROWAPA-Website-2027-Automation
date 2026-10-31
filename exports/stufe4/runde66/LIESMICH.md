# Runde 66 · Reiter «Current», Seite «So arbeiten wir», performance.rowapa.ch (Stufe 4, 31.10.2026)

Rückmeldung ROWAPA (Entscheid 380): Domain performance.rowapa.ch freigegeben; Reiter auf «Current» gesetzt, scheint aber nicht zu wirken; die Seite «So arbeiten wir» wird auf jeden Fall gebaut.

## 1. Reiter: Zustand «Current» (Diagnose)

Nach dem Veröffentlichen um 21:44 enthält der Stil der Testadresse neu diese Regel:

```css
.auswertung_reiter.w--current:lang(de-ch) { mix-blend-mode: normal; }
```

- **Der Zustand ist angelegt, am richtigen Element und auf der richtigen Klasse.** Das ist gut.
- **Er enthält aber nur «Mischmodus: normal»** (Effects › Blending). Das ändert nichts Sichtbares. Farbe, Hintergrund und Plum-Linie fehlen. Darum gilt weiter Webflows Grundeinstellung `.w-tab-link.w--current { background-color: #c8c8c8 }` (grau).
- `:lang(de-ch)` ist unbedenklich: Die Website hat nur die Sprache Deutsch (Schweiz), die Seiten tragen `lang="de-CH"`, die Regel greift also.
- Ich kann den Zustand nicht selbst setzen. Webflows Schnittstelle für Agenten kennt «Current» nicht, nur Zustände wie Darüberfahren oder Fokus; geprüft: die Abfrage zeigt den Zustand nicht und kann ihn nicht schreiben. Eine Zeile eigenes CSS ginge zwar, widerspricht aber CLAUDE.md 2 (kein eigener Code für Standard-Layouts). Darum empfehle ich den Handgriff im Designer, rund 1 Minute.

**Klickweg (Designer, Seite «Performance-Analyse»):**

1. Im Canvas den Reiter **«Führung»** anklicken (den Reiter selbst, nicht den Text darin). Im Style-Panel rechts steht oben die Klasse `auswertung_reiter`.
2. Rechts neben dem Klassenfeld auf **«States»** (bzw. «None ▾») klicken › **«Current»**. Das Klassenfeld zeigt jetzt `auswertung_reiter` mit dem Zusatz «Current».
3. In diesem Zustand drei Werte setzen:
   - **Typography › Color:** Variable **«Manganese Black»** (Farben).
   - **Backgrounds › Color:** Farbfeld öffnen, **Deckkraft (A) auf 0 %** oder `transparent` eintippen. Das entfernt das Webflow-Grau.
   - **Borders:** im Kästchen die **untere Kante** wählen, dann **Color:** Variable **«Plum Perfect»**. Stil (durchgezogen) und Breite (3 px) sind schon in der Grundklasse gesetzt.
4. Kontrolle: Die Werte erscheinen im Panel farbig markiert (im Zustand gesetzt). Der Reiter «Führung» zeigt im Canvas sofort die Plum-Linie.
5. Zurück auf «None». Dann **Publish** an die Testadresse, oder mir Bescheid geben, ich veröffentliche und prüfe.

Gilt für alle Reiter auf beiden Seiten (Original und Vorschau), weil alle die Klasse `auswertung_reiter` tragen. Den Mischmodus «normal» kann man stehen lassen.

## 2. performance.rowapa.ch und /demo

Weiterhin gesperrt: Der Proxy dieser Arbeitsumgebung weist `performance.rowapa.ch:443` ab (zuletzt um 21:44 und bei einem erneuten Test, Antwort 403). Netzwerk-Freigaben wirken in einer laufenden Sitzung offenbar nicht. Sie gelten erst für eine neu gestartete Sitzung bzw. Arbeitsumgebung, sofern die Domain dort in der Liste der erlaubten Adressen steht. Zwei Wege:

- **A (empfohlen, rasch):** Texte der zwei Seiten hier einfügen oder Bildschirmfotos (ganze Seite) schicken. Dann vergleiche ich Section für Section.
- **B:** Neue Sitzung in derselben Arbeitsumgebung starten. Ich arbeite dort mit den Dokumenten im Repo weiter (`00_start_hier.md`).

Ich gebe kein Urteil über die Seiten ab, bevor ich sie gelesen habe (offener Punkt 113).

## 3. Seite «So arbeiten wir» (Entscheid 380): Vorschlag vor dem Bau

### Warum die Seite trägt

- Entscheider in Unternehmen klären vieles, bevor sie mit einem Anbieter sprechen. Gartner fand in einer Befragung von 750 B2B-Einkäufern, dass sie nur rund 17 % der Kaufzeit mit Anbietern verbringen und rund zwei Drittel mit eigener Recherche und dem internen Gremium (Sekundärquellen, siehe unten).
- Wer den Ablauf in klaren Stufen zeigt, senkt das empfundene Risiko: Man weiss, was auf einen zukommt, was man erhält und was man beitragen muss. Das stärkt die Kompetenzvermutung mehr als eine Aufzählung von Methoden.
- Folge für die Seite: nicht die Startseite wiederholen, sondern die Fragen beantworten, die vor dem Erstgespräch offen sind: **Wie läuft es ab? Was bekommen wir? Was müssen wir beitragen? Woran messen wir den Erfolg?**

### Dramaturgie

Versprechen → Ablauf → Massstab → Werkzeuge → Beweis → Einwände → Gespräch. Kernfassung mit sechs Teilen, drei Teile optional (weniger ist mehr).

| # | Section | Inhalt | Quelle | Status |
|---|---|---|---|---|
| 1 | **Header** (Komponente «Header Unterseite», Kopfzeile C, Logo-Band) | Bezeichnung «So arbeiten wir» · Titel «Von der Analyse zur Wirkung.» · Satz «Jedes Projekt beginnt mit einem Erstgespräch und folgt vier Phasen. Strukturiert, datenbasiert und nah an Ihren Menschen.» · Buttons «Erstgespräch vereinbaren», «Zum Ablauf» · Figur: Treppe aus Punkten (baut sich auf wie die Lupe) | Titel v11; Satz aus Megamenü und v11 | Kern |
| 2 | **Der Ablauf** | Titel «Vier Phasen, ein Kreislauf.» Je Phase gross: Nummer (Reihenfolge zählt), Titel, die **ausführlichen** Sätze der Startseite (vor der Kürzung), dazu zwei kurze Zeilen **«Das erhalten Sie»** und **«Ihr Beitrag»**. Darunter «Die Messung ist zugleich der Start der nächsten Analyse.» Links Titel stehend, rechts die Phasen, die beim Scrollen nacheinander aufleuchten | Startseite Rev. 8 (Langfassung); Zeilen «erhalten/Beitrag» [ROWAPA] | Kern |
| 3 | **Der Massstab** | Titel «Ziele, die sich messen lassen.» Satz: «Wo es sinnvoll ist, legen wir ein Soll-Profil fest: messbare Ziele, abgeleitet aus Vergleichsgruppen, auch für Soft Skills.» Drei Schritte zum Soll-Profil als Zeile; Verweis auf die Performance-Analyse als Einstieg | Startseite (gestrichener Satz, offene Frage Rev. 8 Nr. 7); PA-Konzept «Der Massstab» | Kern |
| 4 | **Werkzeuge und Methoden** | Titel «Diagnostik, die Entwicklung messbar macht.» Liste aus der CMS-Collection «Werkzeuge» (heute SalesStep, Reiss-Profil, Bluquist, alle Entwurf); hervorgehobene Karte «Der Einstieg: die Performance-Analyse →»; Textlink «Digitale Lösungen →» | v11; CMS Stufe 3a | Kern |
| 5 | **Aus der Praxis** | eine Kundenstimme zur Zusammenarbeit, gross, im Stil der Vorschau (Plum-Linie versetzt) | CMS «Stimmen» [ROWAPA wählen] | Kern |
| 6 | **Kontakt** (Komponente) | «Sprechen wir über Ihr Vorhaben. Ein Erstgespräch klärt, welches Vorgehen zu Ihrer Ausgangslage passt.» Button «Erstgespräch vereinbaren» | v11 | Kern |
| A | Gut zu wissen (FAQ) | 4–5 Fragen vor dem Erstgespräch, z. B. Dauer, Zeitaufwand der Mitarbeitenden, Einstieg mit einer einzelnen Phase, bestehende Instrumente, Vertraulichkeit | CMS «FAQ», Antworten [ROWAPA] | optional, empfohlen |
| B | Zwei Abläufe | Beratungs-Mandat (Analysieren · Erkennen und Verstehen · Handeln) und Ausbildungsprogramm (Entwicklung · Training und Praxis · Umsetzung) | v11 | optional, siehe Einschätzung |
| C | Wirkung messen | drei Karten: Interaktions-Analytik, Conversion- und Lern-Tracking, Wirkungs-Reporting | v11 | optional, siehe Einschätzung |

### Einschätzung zu B und C (ehrlich)

- **B Zwei Abläufe:** Die Vorlage v11 hatte drei Phasen für Beratung und drei für Ausbildung. Die Startseite zeigt heute vier Phasen (mit «Messen»). Beides auf einer Seite verwirrt eher: drei oder vier Phasen, «Verstehen» oder «Erkennen und Verstehen». Empfehlung: Auf dieser Seite gilt **ein** Modell, die vier Phasen. Der Ablauf der Ausbildungsprogramme gehört auf die Programmseiten (CAS, Broker Excellence), hier höchstens ein Satz mit Link. [ROWAPA entscheiden]
- **C Wirkung messen:** Die drei Karten klingen nach digitalen Leistungen, die ich nirgends belegt finde. Empfehlung: nicht als eigene Section, sondern als Inhalt der Phase «Messen», und nur, was ROWAPA bestätigt. [ROWAPA bestätigen]

### Baustein «So arbeiten wir» als Komponente (Vorschlag)

- **Inhalt:** Bezeichnung, Titel, vier Phasen (Titel und Kurzsatz), Treppe aus Punkten, Link «Mehr zu unserem Vorgehen →» auf `/so-arbeiten-wir`.
- **Einstellungen (Props):** Bezeichnung, Titel, Linktext, Ziel, Fläche (Weiss/Snowbank), Klammer ein/aus. Mit der Klammer zeigt die Performance-Analyse «Performance-Analyse · 4 bis 6 Wochen» über den ersten zwei Phasen.
- **Einsatz:** Startseite, Performance-Analyse, Vorlage Themenlinie (offener Punkt 108).
- **Nutzen:** Die Phasen werden an einer Stelle gepflegt, überall gleich.
- **Vorsicht:** Die Startseite hat eigene Effekte (Treppe synchron zur Phase, Grau beim Darüberfahren, Entscheid 105). Ich baue die Komponente zuerst auf der neuen Seite, prüfe die Effekte und ersetze die Section der Startseite erst nach Ihrer Freigabe. Die Seite «So arbeiten wir» selbst zeigt die Langfassung (Section 2), nicht die Komponente.

### Links, die danach auf die Seite zeigen

Megamenü «So arbeiten wir › Unser Prozess» (Spaltentitel und Karte), Handy-Menü, Startseite «Mehr zu unserem Vorgehen», Footer. «Tools & Methoden» zeigt bis zu einer eigenen Seite auf `/so-arbeiten-wir#werkzeuge`.

### Was ich von ROWAPA brauche

1. Je Phase (Analysieren, Verstehen, Handeln, Messen): **Was erhält das Unternehmen?** (z. B. Bericht, Workshop, Plan) und **Was ist sein Beitrag?** (Personen, Zeit). Fehlt es, lasse ich die zwei Zeilen weg.
2. Die drei Schritte zum Soll-Profil, wie sie im Sales-Deck stehen, für die öffentliche Seite freigeben.
3. Werkzeuge: Sind SalesStep, Reiss-Profil und Bluquist aktuell? Trihow (v11) auch? Je ein Satz pro Werkzeug.
4. B und C: zeigen oder nicht (Empfehlung oben).
5. Welche Kundenstimme passt zur Zusammenarbeit?
6. FAQ: ja oder nein; wenn ja, Antworten oder Stichworte.

Bis die Antworten da sind, kann ich die Seite mit den belegten Texten als Vorschau bauen; fehlende Stellen stehen als «[ROWAPA bestätigen]». [ROWAPA entscheiden: jetzt bauen oder erst nach den Antworten]

## Texttabelle (Entwurf, Seite noch nicht gebaut)

| Stelle | Original | Vorschlag | Begründung | Offene Fragen |
|---|---|---|---|---|
| Header, Titel | v11: «Von der Analyse zur Wirkung.» | unverändert | Kernaussage in fünf Wörtern; gleich wie die Section in der Vorschau Performance-Analyse | – |
| Header, Satz | v11: «Ob Beratungs-Mandat oder Ausbildungsprogramm, wir arbeiten strukturiert, datenbasiert und nah an Ihren Menschen. Zwei Vorgehensmodelle, klar getrennt.» | «Jedes Projekt beginnt mit einem Erstgespräch und folgt vier Phasen. Strukturiert, datenbasiert und nah an Ihren Menschen.» | ein Modell, gleich wie die Startseite; nennt den ersten Schritt | Erstgespräch kostenlos? [ROWAPA bestätigen] |
| Ablauf, Titel | v11: «Zwei Wege, klar getrennt» | «Vier Phasen, ein Kreislauf.» | Kernaussage statt Abgrenzung; «Kreislauf» greift «Die Messung ist zugleich der Start der nächsten Analyse» auf | – |
| Ablauf, Phasen | Startseite (Langfassung Rev. 8), z. B. «Mit Diagnostik, Daten und Gesprächen erfassen wir, wo Ihr Unternehmen heute steht.» | Langfassung unverändert + «Das erhalten Sie» + «Ihr Beitrag» | Hier ist Platz für die Details, die auf der Startseite gekürzt wurden | Inhalte der zwei Zeilen [ROWAPA] |
| Massstab | Startseite (gestrichen): «Wo es sinnvoll ist, legen wir ein Soll-Profil fest: messbare Ziele, abgeleitet aus Vergleichsgruppen, auch für Soft Skills.» | Satz unverändert unter dem Titel «Ziele, die sich messen lassen.» | beantwortet offene Frage Rev. 8 Nr. 7; Fachbegriff im Halbsatz erklärt (Redaktionsleitfaden) | drei Schritte freigeben [ROWAPA] |
| Werkzeuge, Titel | v11: «Tools & Methoden» / «Diagnostik und digitale Werkzeuge, die unsere Arbeit datenbasiert machen.» | «Diagnostik, die Entwicklung messbar macht.» | Titel als Nutzen; «digitale Lösungen» statt «Werkzeuge» (Entscheid 69) | Werkzeugliste [ROWAPA] |
| Kontakt | v11: «Sprechen wir über Ihr Vorhaben.» / «Ein Erstgespräch klärt, welches Vorgehen zu Ihrer Ausgangslage passt.» | unverändert | klar, nennt den nächsten Schritt | – |

## Prüfsession 2 (Entscheid 378), vor dem Vorschlag zur Freigabe

| Bereich | Punkt | Ergebnis |
|---|---|---|
| A CI | Farben, Typografie, Nummern | ✓ nur Palette und Variablen (Klickweg: Manganese Black, Plum Perfect); Nummern nur bei den Phasen, wo die Reihenfolge zählt |
| A CI | dunkle Flächen | ✓ keine neue dunkle Fläche vorgesehen; falls doch, Kontrast-Modus Manganese Black (Entscheid 377) |
| A CI | Editorial, weniger ist mehr | ✓ Kernfassung mit sechs Teilen, drei optional mit Begründung |
| B Texte | Prüffragen je Section | ✓ was (Ablauf), für wen (Unternehmen), Nutzen (erhalten/Beitrag, Massstab), nächster Schritt (Erstgespräch) |
| B Texte | Anrede, Begriffe | ✓ Sie-Form, «Unternehmen», «digitale Lösungen» |
| B Texte | keine erfundenen Fakten | ✓ nur Texte aus Startseite, v11, Konzept; alles andere «[ROWAPA]» |
| B Texte | Texttabelle | ✓ als Entwurf oben |
| B Texte | nächster Schritt je Section | ✓ offener Punkt aus Prüfsession 1 gelöst, sobald die Seite steht: «Mehr zu unserem Vorgehen» verlinkt |
| C Bauweise | nativ, Komponenten, CMS | ✓ Header- und Kontakt-Komponente, CMS «Werkzeuge», «Stimmen», «FAQ»; neue Komponente «So arbeiten wir» |
| C Bauweise | Reiter «Current» | ✓ kein eigener CSS-Ersatz (wäre Verstoss gegen CLAUDE.md 2), stattdessen Klickweg |
| D Abmachungen | Header C, Logo-Band, Kontakt gleich | ✓ vorgesehen |
| D Abmachungen | Effekt je Seitenfamilie (Entscheid 370) | ? Vorschlag Treppe aus Punkten im Header und Phasen, die beim Scrollen aufleuchten [ROWAPA bestätigen] |
| E Ablauf | Startseite ändern | ✓ erst nach Freigabe (Komponente) |
| E Ablauf | Quellen als Information | ✓ Suchergebnisse sind Sekundärquellen, als solche gekennzeichnet |

## Quellen

- [Gartner: B2B Sales Reps, maximize customer interactions](https://gcom.pdo.aws.gartner.com/smarterwithgartner/b2b-sales-reps-maximize-customer-interactions) (Befragung von 750 B2B-Einkäufern)
- [Fronetics: B2B buyer's journey (Zusammenfassung der Gartner-Zahlen)](https://fronetics.com/infographic-b2b-buyers-journey/)
- [SmartCompany: Make it easy for customers to evaluate your product (Ablauf in Stufen senkt empfundenes Risiko)](https://www.smartcompany.com.au/marketing/make-it-easy-for-customers-to-evaluate-your-product/)
- [Inkbot Design: Specialist consulting branding, sell the risk you reduce](https://inkbotdesign.com/?p=340619)
- Hinweis: Die Quellen sind Fachartikel und Zusammenfassungen, keine kontrollierten Studien zu Ablaufseiten.
