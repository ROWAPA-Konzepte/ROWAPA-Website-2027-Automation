import base64,sys
s=open('src.html').read()
s=s.replace('.map{display:grid;grid-template-columns:3fr 2fr 0fr 1fr;','.map{display:grid;grid-template-columns:3fr 2fr 1fr 1fr;').replace('<div class="h"></div>','<div><b>03 Handeln</b>Massnahmen</div>')
for k,f in [('F400','TASAOrbiterDisplay-Regular.woff2'),('F600','TASAOrbiterDisplay-SemiBold.woff2'),('F700','TASAOrbiterDisplay-Bold.woff2'),('FEX','TASAExplorer-ExtraBold.woff2')]:
  s=s.replace('{{'+k+'}}',base64.b64encode(open('../fonts/'+f,'rb').read()).decode())
open('performance-analyse.html','w').write(s)
open('test.html','w').write('<meta charset="utf-8">'+s)
