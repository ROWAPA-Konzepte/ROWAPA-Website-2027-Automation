import json, os, sys
from PIL import Image
# Aufruf: python3 bauen.py <ordner-heute> <ordner-vorschlag>  (heute-*, kopfA aus dem ersten; vorschlag-*, kopfAv aus dem zweiten)
HEUTE, VORSCHLAG = sys.argv[1], sys.argv[2]
ZIEL = 'site'; os.makedirs(ZIEL + '/b', exist_ok=True)
idx = {}; herkunft = {}
for ordner, passt in [(HEUTE, lambda z: z.startswith('heute') or z == 'kopfA'), (VORSCHLAG, lambda z: z.startswith('vorschlag') or z == 'kopfAv')]:
    for k, e in json.load(open(ordner + '/index.json')).items():
        if passt(k.split('|')[1]): idx[k] = e; herkunft[k] = ordner
INHALT_BETROFFEN = {'loesungen', 'vorgehen', 'erfolge', 'digital', 'team', 'partnerband', 'insights'}
def konv(datei, ordner):
    ziel = 'b/' + datei.replace('.png', '.webp')
    if not os.path.exists(ZIEL + '/' + ziel):
        im = Image.open(ordner + '/' + datei).convert('RGB')
        if im.width > 1280: im = im.resize((1280, round(im.height * 1280 / im.width)), Image.LANCZOS)
        im.save(ZIEL + '/' + ziel, 'WEBP', quality=68, method=5)
    return ziel
out = {}
for k, e in idx.items():
    f, z = k.split('|'); neu = dict(e); sek = []
    for s in e['sektionen']:
        s2 = dict(s)
        ordner = herkunft[k]
        if z.endswith('-gestrafft') and s['key'] not in INHALT_BETROFFEN:
            bk = f + '|' + z.replace('-gestrafft', '-heute'); basis = idx.get(bk)
            b = basis and next((x for x in basis['sektionen'] if x['key'] == s['key']), None)
            if b: s2 = dict(b); ordner = herkunft[bk]
        s2['bild'] = konv(s2['datei'], ordner); del s2['datei']; sek.append(s2)
    neu['sektionen'] = sek; out[k] = neu
NOTIZEN = {
 'start': {'v': {'laptop': 'Etwas weniger Luft über dem Titel, damit die Logo-Leiste auch auf kleinen Laptops ganz sichtbar bleibt.', 'mittel': 'Etwas weniger Luft über dem Titel, damit die Logo-Leiste ganz sichtbar bleibt.', 'alle': 'Unverändert.'}},
 'loesungen': {'v': {'gross': 'Titel auf einer Zeile. Die vier Themen rechts als ruhige Zeilen mit Titel und Figur; die Beschreibung steht auf der Themenseite und im Menü (ab 1920 px wieder sichtbar). Höhe an die Fensterhöhe gekoppelt.', 'laptop': 'Titel auf einer Zeile, die vier Themen als Zeilen mit Titel und Figur, ohne Beschreibung. Höhe an die Fensterhöhe gekoppelt.', 'mittel': 'Wie kleine Laptops: Themen als Zeilen mit Titel und Figur, Höhe an die Fensterhöhe gekoppelt.', 'tablet': 'Grosse Karte über die volle Breite, darunter die vier Themen in zwei Spalten mit Titel (Text auf der Themenseite).', 'handy': 'Alle fünf Themen als Wischreihe.'}, 'g': 'Kartentexte auf den Kern gekürzt, der Teil nach dem Doppelpunkt entfällt.'},
 'antrieb': {'v': {'handy': 'Die drei Zahlen nebeneinander statt untereinander.', 'alle': 'Unverändert, Abstände an die Fensterhöhe gekoppelt.'}},
 'vorgehen': {'v': {'mittel': 'Die vier Phasen nebeneinander, die Treppe als schmales Band darüber.', 'tablet': 'Treppe als Band oben, die vier Phasen in zwei Reihen.', 'handy': 'Die vier Phasen als Wischreihe, ohne Treppe.', 'alle': 'Die vier Phasen nebeneinander, die Treppe als Band darüber. Höhe der Treppe an die Fensterhöhe gekoppelt.'}, 'g': 'Fette Unterzeilen entfallen, ein Satz je Phase.'},
 'erfolge': {'v': {'tablet': 'Unverändert.', 'handy': 'Unverändert.', 'alle': 'Foto an die Fensterhöhe gekoppelt, damit Titel bis Name auch mit den neuen Abständen in einen Bildschirm passen. Die drei Zitate darunter bleiben, sie passen erst mit «Gestrafft».'}}, 
 'digital': {'v': {'gross': 'Text breiter (Titel zweizeilig), Kugel kleiner, die fünf Karten ohne Beschreibung (ab 1920 px mit Beschreibung).', 'laptop': 'Text breiter, Kugel kleiner, Karten nur mit Name und Titel; das Symbol steht in der Kugel.', 'mittel': 'Ohne Kugel, Text über die ganze Breite, Karten nur mit Name und Titel.', 'tablet': 'Ohne Kugel, die fünf Karten als Wischreihe.', 'handy': 'Ohne Kugel und ohne Hinweis «Wissensplattform», Buttons nebeneinander, Karten als Wischreihe mit Name und Titel.'}, 'g': 'Einleitung von vier auf zwei Sätze, Kartentexte auf einen kurzen Satz.'},
 'team': {'v': {'tablet': 'Team als Wischreihe, Partnerlogos als eigenes Band.', 'handy': 'Team als Wischreihe, Partnerlogos als eigenes Band.', 'alle': 'Titel auf einer Zeile, Fotos an die Fensterhöhe gekoppelt. Partnerlogos als eigenes, schmales Band nach dem Team.'}, 'g': 'Partnerlogos nicht mehr auf der Startseite, sondern auf der Seite «Partner & Kooperationen».'},
 'partnerband': {'v': {'gross': 'Neu als eigenes Band: alle 14 Logos in einer Zeile.', 'laptop': 'Neu als eigenes Band: alle 14 Logos in einer Zeile.', 'alle': 'Neu als eigenes Band mit allen 14 Logos.'}},
 'wege': {'v': {'tablet': 'Drei kompakte Zeilen, Bild links.', 'handy': 'Die drei Wege als Wischreihe.', 'alle': 'Die drei Wege nebeneinander: Bild oben, Text darunter. Bildhöhe an die Fensterhöhe gekoppelt.'}},
 'cas': {'v': {'mittel': 'Titel etwas kleiner, damit die Section in einen Bildschirm passt.', 'alle': 'Unverändert, Abstände an die Fensterhöhe gekoppelt.'}},
 'insights': {'v': {'gross': 'Bilder an die Fensterhöhe gekoppelt, Karten ohne Auszug (ab 1920 px mit Auszug).', 'laptop': 'Bilder an die Fensterhöhe gekoppelt, Karten ohne Auszug.', 'mittel': 'Bilder an die Fensterhöhe gekoppelt, Karten ohne Auszug.', 'alle': 'Bilder an die Fensterhöhe gekoppelt.'}, 'g': 'Hinweise «Live-Webinare» und «ROWAPA TV» entfallen, sie stehen jetzt im Menü «Über uns».'},
 'faq': {'v': {'handy': 'Fragen etwas enger gesetzt.', 'alle': 'Unverändert, Abstände an die Fensterhöhe gekoppelt.'}},
 'kontakt': {'v': {'handy': 'Porträt kleiner.', 'alle': 'Unverändert, Abstände an die Fensterhöhe gekoppelt.'}},
 'kopfA': 'Ohne Obertitel, der Header beginnt direkt mit dem grossen Titel. Unter dem Lead-Text die Leiste «ROWAPA Digital» mit den fünf Symbolen und Namen; ein Klick führt zur Digital-Section. Auf dem Handy nur die Symbole.'
}
TEXTE = [
 ['Lösungen · Thema 02', 'Potenziale sichtbar machen und gezielt entwickeln: mit Diagnostik, Coaching und Resilienz-Training.', 'Potenziale sichtbar machen und gezielt entwickeln.'],
 ['Lösungen · Thema 03', 'Führung wirksam gestalten: vom Führungsprofil bis zur Teamentwicklung.', 'Führung wirksam gestalten.'],
 ['Lösungen · Thema 04', 'Talente gewinnen, gut integrieren und langfristig binden: vom Assessment bis zur attraktiven Arbeitgebermarke.', 'Talente gewinnen, gut integrieren und langfristig binden.'],
 ['Lösungen · Thema 05', 'E-Learning, hybride Lernformate und KI-gestützte Lösungen, die Training und Beratung in den Alltag verlängern.', 'E-Learning, hybride Lernformate und KI-gestützte Lösungen.'],
 ['Vorgehen · Analysieren', 'Ist-Zustand erheben, Ziele festlegen. Mit Diagnostik, Daten und Gesprächen erfassen wir, wo Ihr Unternehmen heute steht. Wo es sinnvoll ist, legen wir ein Soll-Profil fest: messbare Ziele, abgeleitet aus Vergleichsgruppen, auch für Soft Skills.', 'Mit Diagnostik, Daten und Gesprächen erfassen wir, wo Ihr Unternehmen steht, und legen messbare Ziele fest.'],
 ['Vorgehen · Verstehen', 'Muster erkennen, Ursachen verstehen. Wir machen sichtbar, was wirkt, wo Leistung verloren geht und was die Menschen antreibt. Gehandelt wird erst, wenn die Ursachen klar sind.', 'Wir machen sichtbar, was wirkt und wo Leistung verloren geht.'],
 ['Vorgehen · Handeln', 'Gezielt umsetzen, laufend nachjustieren. Programme, Begleitung und digitale Lösungen setzen genau dort an. Vergleichsformate zeigen früh, was in der Praxis überzeugt.', 'Programme, Begleitung und digitale Lösungen setzen genau dort an.'],
 ['Vorgehen · Messen', 'Wirkung belegen, den Kreis schliessen. Mit denselben Instrumenten wie zu Beginn messen wir, was sich verändert hat. Die Ergebnisse sind die Grundlage für die nächste Runde.', 'Mit denselben Instrumenten wie zu Beginn messen wir, was sich verändert hat.'],
 ['Erfolge', 'Slider mit 5 Folien, darunter drei weitere Zitate (Dietrich, Süess, Künzli).', 'Slider mit 8 Folien, die drei Zitate stehen im Slider.'],
 ['Digital · Einleitung', 'Was wir beraten, bauen wir auch: Unsere Methodik steckt in fünf digitalen Lösungen mit künstlicher Intelligenz, entwickelt mit ETH juniors (ETH Zürich). Eingeführt werden sie vom Vertrieb oder vom HR, genutzt im ganzen Vertrieb bis zur einzelnen Beraterin und zum einzelnen Berater. Jede Lösung ist einzeln buchbar.', 'Was wir beraten, bauen wir auch: fünf digitale Lösungen mit künstlicher Intelligenz, entwickelt mit ETH juniors (ETH Zürich). Jede Lösung ist einzeln buchbar.'],
 ['Digital · Anker', 'Das Personalökosystem begleitet vom ersten Interesse bis zur Anstellung, findet die richtigen Mitarbeitenden und senkt die Fluktuation.', 'Begleitet vom ersten Interesse bis zur Anstellung und senkt die Fluktuation.'],
 ['Digital · Kompass', 'Der digitale Beratungsprozess führt Beraterinnen und Berater Schritt für Schritt von der Ausgangslage zur passenden Lösung.', 'Führt Schritt für Schritt von der Ausgangslage zur passenden Lösung.'],
 ['Digital · Lotse', 'Der digitale Performance Coach begleitet Entwicklung über den Trainingstag hinaus, damit das Gelernte im Alltag wirkt.', 'Begleitet Entwicklung über den Trainingstag hinaus.'],
 ['Digital · Segel', 'Die interaktive Beratung macht Themen im Kundengespräch sichtbar und greifbar, mit hybridem Storytelling.', 'Macht Themen im Kundengespräch sichtbar und greifbar.'],
 ['Digital · Logbuch', 'Der digitale Sales Coach gibt Beraterinnen und Beratern im Alltag konkrete Impulse für das nächste Kundengespräch.', 'Gibt im Alltag konkrete Impulse für das nächste Kundengespräch.'],
 ['Team', 'Block «Partner und Zertifizierungen» mit 14 Logos unter dem Team.', 'Logos auf der Seite «Partner & Kooperationen».'],
 ['Insights', 'Zwei Hinweise «Live-Webinare» und «ROWAPA TV» unter den Beiträgen.', 'Entfallen (im Menü «Über uns»).'],
 ['Header', 'Obertitel «Beratung · Training · Digitale Lösungen» über dem Titel.', 'Ohne Obertitel; Leiste «ROWAPA Digital» mit fünf Symbolen unter dem Lead-Text (Variante A).'],
]
data = {'index': out, 'notizen': NOTIZEN, 'texte': TEXTE, 'fuss': 'Stand 26.10.2026 · Screens von der Staging-Seite home-v2 · Schrift TASA lokal geladen · Messung: Section-Oberkante bis Ende des Inhalts gegen sichtbare Höhe.'}
html = open('viewer_template.html').read().replace('__DATA__', json.dumps(data, ensure_ascii=False))
open(ZIEL + '/index.html', 'w').write(html)
print('Einträge', len(out), 'Bilder', len(os.listdir(ZIEL + '/b')), 'HTML', len(html)//1024, 'KB')
