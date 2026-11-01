# Baut ../skizze.html aus der Vorlage, den Punktformen und den Werkzeug-Symbolen.
# Aufruf im Ordner skizze/: python3 quelle/bau.py
import json, re, pathlib
Q = pathlib.Path(__file__).resolve().parent
tpl = (Q / 'skizze.tpl.html').read_text()
formen = (Q / 'formen.json').read_text().strip()
icons = {}
for k in ['anker', 'kompass', 'lotse', 'segel', 'logbuch']:
    s = (Q / 'icons' / f'icon-{k}-weiss.svg').read_text().strip().replace('stroke="#FFFFFF"', 'stroke="currentColor"')
    icons[k] = re.sub(r'>\s+<', '><', s)
out = tpl.replace('{{FORMEN}}', formen).replace('{{ICONS}}', json.dumps(icons, ensure_ascii=False))
assert '{{' not in out
(Q.parent / 'skizze.html').write_text(out)
print('skizze.html', len(out), 'Zeichen')
