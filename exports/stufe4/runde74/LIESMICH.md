# Runde 74 · Tresmares-Code geprüft: Feedback vor dem Bau (Stufe 4, 01.11.2026)

**Nur Analyse und Feedback.** Es ist nichts gebaut, in Webflow nichts geändert und nichts veröffentlicht.

ROWAPA hat das ausgelieferte HTML, das CSS und die zwei JavaScript-Dateien von tresmarescapital.com sowie eine Analyse aus einem anderen Chat geschickt. Auftrag: «bitte erst analysieren und feedback geben, bevor du etwas baust.»

Die Tresmares-Dateien sind fremder Code und liegen **nicht** im Repo. Hier steht nur die eigene Auswertung.

## 1. Abgleich der Analyse mit dem Code

Jede Aussage der Analyse habe ich im Code nachgesucht.

| Aussage der Analyse | Im Code gefunden | Ergebnis |
|---|---|---|
| Bibliotheken Taxi, GSAP, ScrollTrigger, SplitText, Lenis 1.3.15 | Bibliotheksdatei: alle vorhanden, Lenis-Version «1.3.15» | ✓ |
| Seitenwechsel am Desktop: neue Seite startet 100 vh tiefer mit 80 % Grösse, fährt in 1,4 s hoch und wächst auf 100 %; alte Seite fährt 50 vh hoch, Deckkraft 0,8; Kurve «expo.inOut» | Übergang im Anwendungscode, genau diese Werte; alte Seite wird nach 1,4 s entfernt | ✓ |
| Header wechselt mit der Seite | Der Header steht im Seitencontainer (`data-taxi-view`), nicht darüber | ✓ |
| Mobil Aus- und Einblenden mit 0,4 s | Beim Start wird je nach Gerät Desktop- oder Handy-Übergang gewählt; Handy: alte Seite blendet in 0,4 s aus | ✓ |
| Header: transparent, «sticky», 5 vw hoch, negative Marge −5 vw | CSS genau so | ✓ |
| Header blendet aus und ein: 0,6 s; ein bei weniger als 10 px oder nach 200 px Hochscrollen | Anwendungscode genau so | ✓ |
| Megamenü öffnet über `mouseenter`: Maske 0,8 in 0,2 s, Untermenü 0,2 s, weisse Fläche 0,1 s, Karten gestaffelt | Anwendungscode genau so | ✓ |
| Bild in den Menükarten: 1,1 → 1 in 4 s | CSS genau so | ✓, Ergänzung: Bei Podcast- und Pressekarten ist es umgekehrt (1 → 1,1, ebenfalls 4 s) |
| Text wortweise mit Maske, 1 s, Versatz 0,01 s | Anwendungscode genau so | ✓ |
| Video `autoplay-onscroll` | Anwendungscode genau so | ✓ |
| Lösungssymbole bauen sich in 1,4 s auf und ab | Anwendungscode: Aufbau und Abbau je 1,4 s, «expo.inOut» | ✓ |
| Keine Behandlung von «Bewegung reduzieren» | Einzige Regel im CSS betrifft Font-Awesome-Symbole; im Anwendungscode nichts | ✓ |

**Ergänzung:** Hinter den Seiten liegt eine schwarze Fläche (`#app`, Hintergrund Schwarz). Darum wirkt die alte Seite bei Deckkraft 0,8 abgedunkelt. Die neue Seite steht mit 80 % Grösse wie eine Karte auf schwarzem Grund. Daher kommt der Eindruck von Tiefe.

**Fazit:** Die Analyse ist korrekt und gut belegt.

## 2. Was das für Runde 73 heisst (Korrektur)

- Der «eingeflogene Header» ist **der Seitenwechsel selbst**. Die ganze neue Seite samt Header kommt von unten und wächst von 80 auf 100 %. Es gibt keine eigene Header-Animation und keinen Vorhang.
- Meine Variante B «Vorhang» bildete deshalb nicht den Seitenwechsel von Tresmares ab. Der Vorhang stammt aus den Scroll-Flächen der Startseite von Tresmares (frühere Analyse, Entscheide 173 und 259). Das korrigiere ich hiermit.
- Variante C «Plum-Band» bleibt eine eigene ROWAPA-Idee.
- Neu kommt Variante **D «Aufziehen»** dazu. Sie folgt dem Prinzip von Tresmares, mit eigenen Werten.

## 3. Übertragbarkeit auf Webflow

| Weg | Einschätzung |
|---|---|
| Wie Tresmares: Taxi tauscht die Seite per Skript aus, ohne neu zu laden | **Nicht empfohlen.** Nach jedem Tausch müssten Webflow-Interaktionen, Formulare, unser Grafik-Skript und die Seitenskripte neu gestartet werden. Das ist fehleranfällig, wird von Webflow nicht unterstützt und ist nicht ohne Code pflegbar |
| View Transitions (wie in den Videos von Runde 73) | **Empfohlen.** Gleiche Wirkung mit rund 10 Zeilen CSS: neue Seite von unten mit 80 → 100 %, alte Seite nach oben und abgedunkelt. Die Kurve «expo.inOut» lässt sich mit `cubic-bezier(.87,0,.13,1)` nachbilden. Kein Austausch per Skript, Webflow lädt jede Seite normal |
| Megamenü beim Wechsel | Mit einer Zeile Skript (Ereignis `pageswap`, vor dem Bild der alten Seite) schliesst das Megamenü, bevor die alte Seite wegfährt |

## 4. Empfehlung (angepasst)

**D «Aufziehen» als Grundlage, mit eigenen Werten:**

| Punkt | Tresmares | Vorschlag ROWAPA | Grund |
|---|---|---|---|
| Bewegung | neue Seite von unten, 80 → 100 %; alte Seite hoch, abgedunkelt | gleich | Das ist der Effekt, der gefällt |
| Navigation | fährt mit der Seite | fährt mit der Seite | macht den «Einflug» aus |
| Dauer | 1,4 s | **rund 1,0 s** | Generalagenten, Vertriebs- und Bankleitungen klicken oft mehrmals hintereinander. Während des Übergangs nimmt die Seite keine Klicks an. Nielsen Norman Group: 1 s als Grenze des Gedankenflusses |
| Handy | Ausblenden 0,4 s | Überblenden rund 0,3 s | ruhig, schnell, wie Tresmares |
| Bewegung reduzieren | nicht behandelt | kein Übergang | Barrierefreiheit (WCAG 2.3.3), Prüfliste |
| ROWAPA-Note (optional) | – | feine Plum-Linie an der Oberkante der neuen Seite | verbindet D mit dem Band aus C |

Damit wird der Header-Einflug aus Runde 73 (Ebene 2) als eigener Teil überflüssig, denn die ganze Seite fliegt ein. Beim Erstbesuch von aussen gibt es weiterhin keinen Übergang (Punkt 105 bleibt).

## 5. Weitere Muster, die sich für ROWAPA lohnen

| Tresmares | Für ROWAPA | Bauweise |
|---|---|---|
| Megamenü dunkelt die Seite dahinter ab (Maske 80 %), Karten erscheinen gestaffelt | Megamenü «Bühne»: Seite dahinter leicht abdunkeln, Spalten 0,1 s versetzt einblenden | native Interaktion beim Öffnen des Dropdowns |
| Bild in der Menükarte setzt sich langsam (1,1 → 1 in 4 s) | Vorschaukarte im Megamenü: Bild oder Figur setzt sich langsam | nativer Übergang im Style-Panel (Hover, Transform, 4 s) |
| Header blendet beim Runterscrollen aus, beim Hochscrollen ein | mehr Platz auf langen Seiten (z. B. Performance-Analyse) | native Interaktion «Seite scrollt»; mit dem Ausblenden der Navigation in der Themen-Bühne der Startseite abstimmen |
| Gleiche Symbole in Menü, Akkordeon und Detailseite | Themenfiguren aus Punkten durchgängig: Megamenü-Vorschau, Themen-Bühne Startseite, Header der Themenlinie | bestehende Grafik-Module, bestätigt Ebene 3 aus Runde 73 |
| Text erscheint wortweise | nur Section-Titel (H2) beim Scrollen, nie der Titel im Header beim Erstbesuch | Webflow-Interaktionen (GSAP) mit Text-Aufteilung, beim Bau prüfen |

**Nicht übernehmen:**
- Scrollsperre bei offenem Menü
- 1,4 s pro Wechsel
- Seitentausch per Skript (Taxi)
- Video-Autoplay beim Scrollen (bei uns nicht nötig)

## 6. Nächster Schritt (Vorschlag)

Vor dem Bau D als Video aufnehmen, nur im Testbrowser wie in Runde 73, ohne Webflow. Drei Fassungen zum Vergleich:
1. 1,0 s
2. 1,0 s mit Plum-Kante
3. 1,4 s wie Tresmares

Danach entscheidet ROWAPA, dann folgt der Bau site-weit. Anschliessend geht es weiter mit der Themenlinie Vertriebsperformance (Punkt 103) und «So arbeiten wir» (Punkt 112).

## Fragen an ROWAPA

1. D als Video aufnehmen (drei Fassungen)?
2. Megamenü: Seite dahinter abdunkeln, Spalten gestaffelt, Bild setzt sich langsam. Interessant?
3. Navigation beim Runterscrollen ausblenden, beim Hochscrollen einblenden: ja oder nein?

## Prüfsession 10 (Entscheid 378), vor dem Vorschlag

| Bereich | Punkt | Ergebnis |
|---|---|---|
| B Texte | keine erfundenen Fakten | ✓ jede Aussage im Code nachgesucht; Abweichung bei den Kartenbildern ergänzt; eigener Fehler in Runde 73 (Variante B) offen korrigiert |
| C Bauweise | native zuerst, eigener Code nur, wo Webflow es nicht kann | ✓ Seitenwechsel (kann Webflow nicht) über View Transitions statt Seitentausch per Skript; Megamenü, Scroll-Header, Hover über native Interaktionen und Style-Panel |
| C Bauweise | «Bewegung reduzieren» | ✓ eingeplant (bei Tresmares fehlt es) |
| D Abmachungen | Punkt 105, Entscheid 362 | ✓ kein Übergang beim Erstbesuch; Dauer kürzer als bei Tresmares |
| D Abmachungen | fremde Inhalte | ✓ Tresmares-Code nicht ins Repo übernommen, nur ausgewertet; keine fremden Werte ungeprüft übernommen |
| E Ablauf | erst Feedback, dann bauen | ✓ nichts gebaut, nichts veröffentlicht, nichts gelöscht |

## Quellen

- Von ROWAPA gelieferte Dateien von tresmarescapital.com (HTML der Seite Financial Solutions, `style.css`, `app.min.js`, `vendor.min.js`), ausgewertet am 01.11.2026, nicht im Repo
- Nielsen Norman Group zur Dauer von Animationen, zitiert in der [W3C-CSS-Liste](https://lists.w3.org/Archives/Public/public-css-archive/2025Apr/0702.html)
- Chrome for Developers: [Cross-document view transitions](https://developer.chrome.com/docs/web-platform/view-transitions/cross-document) (Ereignisse `pageswap`/`pagereveal`)
- WCAG 2.3.3 «Animation from Interactions»
