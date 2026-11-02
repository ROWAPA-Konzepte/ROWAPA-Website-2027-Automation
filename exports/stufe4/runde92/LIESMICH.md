# Runde 92 · Finaler Stand direkt auf Startseite und Performance-Analyse, Aufräumen (Stufe 4, 02.11.2026)

## Auftrag ROWAPA (Entscheid 406)

> «ja bau den finalen entwurf und lösche was nicht mehr nötig ist. und ich meine damit direkt in webflow als abgenomme seiten startseite und performance analyse, den header text bei performance analyse habe ich bereits etwas angepasst. du wirst es sehen.»

- **Gebaut direkt auf den echten Seiten** `/` und `/performance-analyse`, nativ in Webflow, ohne Umschaltleiste. Die Wahl aus Entscheid 405 gilt.
- **Header-Titel der Performance-Analyse:** der neue Titel von ROWAPA «Analyse erstellen. Potenziale erkennen. Entwicklung gezielt steuern.» steht und ist unverändert.
- **Gelöscht**, was nicht mehr nötig ist (Liste unten).

## Links (Testadresse)

- https://rowapa-website-2027-automation.webflow.io/
- https://rowapa-website-2027-automation.webflow.io/performance-analyse

Die Entwurfsseiten `/startseite-entwurf` und `/performance-analyse-entwurf` sind offline (404).

## 1. Performance-Analyse: Beispielauswertungen

**Neu auf der echten Seite:**

- **Fragenspalte in Manganese** links, Inhalt rechts auf Weiss, Rahmen mit der Plum-Linie um das ganze Feld.
- **Unten zwei gleich gestaltete Blöcke:**
  - links «Einordnung» mit feiner grauer Linie oben
  - rechts «Empfehlungen» mit der Plum-Linie oben (als Abgrenzung, wie gewünscht)
  - beide mit derselben Bezeichnung, Schrift und Quelle im gleichen Stil
- **Aufbau Schritt für Schritt:** Diagramm, Abweichung, Einordnung, Empfehlungen. Die Schrittleiste steht über dem Inhalt. Der Aufbau läuft beim ersten Erscheinen und bei jedem Reiterwechsel.
- **Die Zeilen unter den Texten entfallen** (z. B. «Führung · Eigensicht · Fremdsicht · Beobachtung»). Im gewählten Muster waren sie schon ausgeblendet.

**Bauweise (pflegbar im Designer):**

- **Raster und Spalte:** Klassen
  - `auswertung_tabs` am Reiter-Element
  - `auswertung_inhalt` an der Reiter-Fläche
  - dazu angepasst: `auswertung_menu`, `auswertung_reiter`, `quote_featured is-auswertung`, `auswertung_visual`, `quote_content is-auswertung`, `quote_text is-auswertung`, `quote_headline is-auswertung`, `auswertung_hinweis`
- **Bezeichnungen «Einordnung» und «Empfehlungen»:** Webflow-Texte mit der Klasse `auswertung_label` (vorher `auswertung_massnahme-label`, umbenannt).
- **Empfehlungen:** Block `auswertung_massnahme` mit
  - Bezeichnung (h4)
  - Text `auswertung_massnahme-text`
  - Quelle `auswertung_massnahme-quelle`
- **Schritt-Aufbau:** Grafik-Skript 1.32.0, neues Modul `auswertung` (Attribut `data-grafik="auswertung"` am Reiter-Element). Im selben Modul:
  - die Schrittleiste (nur Anzeige)
  - Beschriftung über `data-schritte`, Zeitpunkte über `data-takt`
- **Designer, ohne Skript und bei «Bewegung reduzieren»:** Alles steht sofort da.

**Aktiver Reiter:**

- **Heute:** Der aktive Reiter trägt die Plum-Unterstreichung. Diese kommt aus dem bestehenden Zustand «Current». Die Beschriftung ist bei allen Reitern weiss.
- **Im gewählten Entwurf:** Der aktive Reiter hatte eine Plum-Linie links und eine leicht hellere Fläche.
- **Warum nicht gleich:** Den Zustand «Current» kann die Schnittstelle nicht setzen. Ersatz-CSS widerspräche der Prüfliste.
- **Wenn Sie die Linie links möchten:** Klickweg im Benutzerhandbuch 2.47, rund 2 Minuten (offener Punkt 133).

**Geprüft** (Testadresse, lokal und live):

- **Desktop 1440, Tablet 820, Handy 390:** Bilder in `bilder/`.
- **Reiterwechsel:** Schritt 1 beim Öffnen, Schritt 4 nach rund 2,6 s.
- **«Bewegung reduzieren»:** alles sofort sichtbar, keine Schrittleiste.
- **Ablauf:** keine Fehler im Browser.

## 2. Startseite

**«Neueste Insights» als Magazin:**

- **Grosser Beitrag:** der erste Beitrag gross mit Foto (dunkle Karte), die übrigen ohne Foto mit Kurztext.
- **Kein Filter, keine Pfeile:** Der Button «Alle Inhalte» bleibt, ebenso die Links zu Webinaren und ROWAPA TV.
- **Bauweise:**
  - Komponente «Card Insight» mit zwei neuen Varianten: «Insights Magazin · gross» (Foto, dunkel über den Theme-Modus «Kontrast») und «Insights Magazin · klein» (ohne Foto, mit Kurztext)
  - Raster über die Klasse `insights_reihe is-magazin` (3 Spalten, Tablet 2, Handy 1)
  - grosser Beitrag `reihe_item is-gross` (zwei Spalten, zwei Zeilen)
- **Handy:** drei Beiträge (`reihe_item is-ohne-handy` an Beitrag 4 und 5).
- **Tablet:** fünf Beiträge (`reihe_item is-ohne-tablet` an Beitrag 6).
- **Geprüft:** Desktop, Tablet, Handy.

**«Nach oben» auf den Themenlinien:**

- **Einstellung:** Attribut `data-nachoben="mitlaufen"` an `section_themen`.
- **Geprüft auf der echten Seite:**
  - Knopf auf der Bühne sichtbar, nichts liegt darüber
  - ein Klick führt an den Seitenanfang

**Header gemeinsam 1,2 s auf allen Seiten:**

- **Skript:** Kopf-Skript «ROWAPAKopf» 1.1.0, site-weit, Quelle `code/kopf.js`. Nachfolger des Entwurfs-Skripts, jetzt fest mit 1,2 s.
- **Logo-Band:** Nur der Inhalt blendet ein, die dunkle Fläche steht.
- **Gemessen beim Seitenwechsel** Performance-Analyse → Startseite: im Streifen des Logo-Bands in keinem der 73 Bilder weiss.

## 3. Gelöscht und aufgeräumt

**Gelöscht:**

| Was | Wie |
|---|---|
| Abschnitt «Unsere Erfolge» als Kacheln (`section_belege`) | Element und 29 Klassen gelöscht: `section_belege`, 22 Klassen `belege_*` (inkl. `belege_foto`) und 6 Kombi-Klassen an `belege_kachel` |
| Muster 1 «Fenster» | war nur im Skript; mit der Umschaltleiste weg |
| Umschaltleiste «ROWAPAEntwurfUmschaltleiste» | von den Seiten entfernt, Skript mit allen Fassungen gelöscht |
| Kopf-Skript «ROWAPAEntwurfKopf» | ersetzt durch «ROWAPAKopf» 1.1.0, Entwurfs-Skript gelöscht |
| Altes Skript «ROWAPAEntwurfSeitenwechsel» (Runde 75) | nirgends mehr verwendet, gelöscht |
| Komponente «Navbar · Bühne (Entwurf Bewegung)» | Instanzen auf den Entwurfsseiten entfernt, Komponente gelöscht (die echte Navigation hat das Ausblenden beim Scrollen seit Runde 76) |
| Insights-Reihe: Pfeile, Maske, Fortschrittsbalken | gelöscht (kein Slider mehr) |
| Zeilen unter den Auswertungs-Texten (`quote_author is-auswertung`) | fünf Elemente auf der echten Seite gelöscht |

**Offline statt gelöscht** (Schnittstelle kann keine Seiten löschen):

- **Seiten:** «Startseite · Entwurf (erledigt, löschen)» und «Performance-Analyse · Entwurf (erledigt, löschen)», beide als Entwurf (draft), nicht mehr veröffentlicht.
- **Bitte im Designer endgültig löschen:** Pages › Seite › Zahnrad › Delete page.
- **Danach:** Style Manager › «Clean up» entfernt die Klassen, die nur noch dort hingen.

## Technik und Versionen

- Grafik **1.32.0** (`rowapa-website-grafik@5606573`, SRI `sha384-7Y9UjsZJMLSShXYKTvHBCavH94GFCb/Rvx8wfAuMIi/uDFRVWeBoYTVrslSNK0BF`), site-weit, Footer.
- Kopf-Skript **«ROWAPAKopf» 1.1.0** (inline registriert, Quelle `code/kopf.js`), site-weit, Kopf.
- **«ROWAPASeitenwechsel» 1.3.0:** unverändert, site-weit, Kopf.
- **IDs:** `00_webflow-ids.md` (Zeile STUFE4 RUNDE92).

## Texttabelle

| Ort | Original | Vorschlag (umgesetzt) | Begründung | Offene Fragen |
|---|---|---|---|---|
| PA, Reiter 1, Einordnung | «Die Teamleitung schätzt ihr Coaching hoch ein. Ihr Team erlebt es seltener, und in begleiteten Mitarbeitergesprächen fehlen verbindliche Vereinbarungen. Daraus ergibt sich ein konkreter Ansatz für die Führungsentwicklung.» | ohne den letzten Satz | Den Ansatz nennen jetzt die Empfehlungen daneben; wie im gewählten Muster (Entscheide 404, 405) | – |
| PA, Reiter 3, Einordnung | «… sind in allen Teams die tiefsten Werte. Team D wird zusätzlich begleitet.» | ohne «Team D wird zusätzlich begleitet.» | steht in den Empfehlungen («Team D zusätzlich begleiten») | – |
| PA, Reiter 4, Einordnung | «… am grössten. Hier setzt ein Training mit Praxisbeispielen der Referenzgruppe an.» | ohne den zweiten Satz | steht in den Empfehlungen | – |
| PA, alle Reiter | – | Bezeichnung «Einordnung» (neu als Webflow-Text) | gleiche Darstellung wie «Empfehlungen» (Entscheid 404) | – |
| PA, Reiter 1–5, Empfehlungen | – | wie Runde 90: «Monatlicher Coaching-Dialog …», «Training zu Kundenpotenzialen …», «Gemeinsamer Schwerpunkt …», «Training zur Bedarfsergründung …», «On-the-Job-Coaching Bedarfsanalyse …»; Quelle «Abgeleitet aus dem Musterbericht» | gewählt (Entscheid 405) | – |
| PA, Schrittleiste | «4 Massnahme» (Entwurf) | «4 Empfehlungen» | gleiches Wort wie die Bezeichnung des Blocks | – |
| PA, Reiter 1–5 | Zeile unter dem Text (z. B. «Führung · Eigensicht · Fremdsicht · Beobachtung») | entfällt | war im gewählten Muster ausgeblendet; Inhalt steht in der Legende der Grafik | – |
| PA, Header | (ROWAPA) | «Analyse erstellen. Potenziale erkennen. Entwicklung gezielt steuern.» | Änderung von ROWAPA, übernommen | Google-Beschreibung beginnt noch mit «Entwicklung gezielt steuern. Entscheidungen fundiert treffen.»: angleichen? |
| Startseite | – | keine Textänderungen (Kurztexte der Beiträge sind die bestehenden Auszüge) | – | – |

## Prüfsession 28 (Entscheid 378)

| Bereich | Punkt | Ergebnis |
|---|---|---|
| A CI | Farben | ✓ Manganese (Spalte, grosse Karte), Plum nur für Linie und Markierung, Sea Cliff für Quellen und Hinweise |
| A CI | 8-px-Raster | ✓ Abstände 8/16/24/32/48 px; fliessende Innenabstände der grossen Karte wie im abgenommenen Entwurf |
| A CI | Flächen | ✓ Flächenfolge unverändert; dunkle Flächen bleiben beim Einblenden stehen (gemessen) |
| B Texte | keine erfundenen Fakten | ✓ nur gekürzte und abgenommene Texte; Texttabelle oben |
| B Texte | Begriffe, Anrede | ✓ «Unternehmen», Sie |
| C Bauweise | nativ zuerst | ✓ Klassen, Komponenten-Varianten, Theme-Modus und Webflow-Texte; Code nur für den Schritt-Aufbau (Modul `auswertung`) und das gemeinsame Einblenden (Kopf-Skript) |
| C Bauweise | Zustand «Current» | ✓ nicht ersetzt; der bestehende Zustand markiert den aktiven Reiter (Unterstreichung). ? Linie links wie im Entwurf nur über den Klickweg (Frage 1) |
| C Bauweise | «Bewegung reduzieren» | ✓ alles sofort sichtbar |
| D Abmachungen | Entscheid 405 | ✓ alle Punkte umgesetzt; Erfolge und Antrieb unverändert |
| D Abmachungen | Navigation auf der Bühne aus, Knopf läuft mit | ✓ |
| E Ablauf | Entwurf zuerst (389) | ✓ für diese Runde ausdrücklich aufgehoben («direkt in webflow als abgenommene seiten») |
| E Ablauf | Löschen | ✓ nur das Freigegebene und nicht mehr Verwendete; Seiten offline, endgültig löschen macht ROWAPA |
| E Ablauf | Veröffentlichen | ✓ nur Testadresse |
| E Ablauf | keine Zugangsdaten, keine Modellbezeichnungen | ✓ |

## Fragen an ROWAPA

1. **Aktiver Reiter:** Unterstreichung wie heute lassen (meine Empfehlung: ruhig und gleich wie bisher) oder Linie links mit hellerer Fläche wie im Entwurf (Klickweg im Handbuch 2.47, rund 2 Minuten)?
2. **Google-Beschreibung** der Performance-Analyse an den neuen Header-Titel angleichen?
3. **Weitere Hilfsseiten löschen:** «Performance-Analyse · Vorschau» (`/performance-analyse-vorschau`), die alte Fassung (`/performance-analyse-alt`, offener Punkt 110) und die Seite «Fotos · Entwurf» (`/fotos-entwurf`, braucht es noch als Vorlage für «Über uns» und «So arbeiten wir»)?
