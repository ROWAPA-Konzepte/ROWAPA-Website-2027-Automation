// Runde 59: Effekte für die Seite Performance-Analyse (Entwurf für die Videos).
// Im Bau: Einblendungen, Reiter und Linien als native Webflow-Interactions bzw. Modul im ROWAPA-Grafik-Skript.
module.exports.FX_CSS = `<style>
html.fx .fx-rev{opacity:0;transform:translateY(28px);transition:opacity .9s ease,transform .9s cubic-bezier(.2,.7,.2,1)}
html.fx .fx-rev.is-in{opacity:1;transform:none}
html.fx .section-head .kicker_line{transform-origin:left center;transform:scaleX(0);transition:transform .9s .2s cubic-bezier(.2,.7,.2,1)}
html.fx .section-head.is-in .kicker_line{transform:scaleX(1)}
html.fx .mk-b .fx-h{opacity:0;transform:translateY(22px);animation:fxUp .9s cubic-bezier(.2,.7,.2,1) forwards}
@keyframes fxUp{to{opacity:1;transform:none}}
html.fx .mk-strich{transform-origin:left center;transform:scaleX(0);animation:fxX .9s 1s cubic-bezier(.2,.7,.2,1) forwards}
@keyframes fxX{to{transform:scaleX(1)}}
.mk-fig{position:relative}.fx-lupe{position:absolute;pointer-events:none;z-index:3}
.fx-sea{position:absolute;top:0;right:0;bottom:0;left:0;height:auto;z-index:0;overflow:hidden}
.mk-b .padding-section-large{padding-bottom:clamp(8rem,13vw,12.5rem)!important}
@media (max-width:767px){.mk-b .padding-section-large{padding-bottom:7rem!important}}
.fx-sea img{width:100%;height:100%;object-fit:cover;object-position:center bottom;display:block}
.pa-fu{position:relative;border-left:0!important}
.pa-fu:before{content:"";position:absolute;left:0;top:0;bottom:0;width:4px;background:#AA1351;border-radius:8px 0 0 8px;transform-origin:top center}
html.fx .pa-fu:before{transform:scaleY(0);transition:transform 1.2s .35s cubic-bezier(.2,.7,.2,1)}
html.fx .pa-fu.is-in:before{transform:scaleY(1)}
html.fx .pa-tabs .pa-fill{transition:width 1s cubic-bezier(.2,.7,.2,1)}
html.fx .pa-tabs .pa-tri .mk{transition:left 1.1s cubic-bezier(.2,.7,.2,1)}
html.fx .pa-heat td:not(.l){transition:opacity .45s ease,transform .45s ease}
html.fx .pa-plan tr{transition:opacity .5s ease,transform .5s ease}
.fx-pre .pa-heat td:not(.l){opacity:0;transform:scale(.8)}
.fx-pre .pa-plan tr:not(:first-child){opacity:0;transform:translateX(-14px)}
html.fx .pa-tabs .w-tab-pane.w--tab-active .quote_content{animation:fxUp .7s .1s both cubic-bezier(.2,.7,.2,1)}
.pa-tabs .w-tab-pane{transition:none!important}
.fx-pin{position:relative}
.fx-pin .fx-pin-in{position:sticky;top:max(96px,calc(50vh - var(--pinh,560px)/2 + 36px))}
html.fx .fx-pin .pa-mr{transition:opacity .28s,box-shadow .28s,transform .28s,border-color .28s}
html.fx .fx-pin .pa-mr:not(.is-done){opacity:.38}
html.fx .fx-pin .pa-mr.is-now{box-shadow:0 12px 32px rgba(29,49,73,.16);transform:translateX(8px);border-left-color:#AA1351}
.pa-wires path.fx-w{opacity:.95}.pa-wires path.fx-w.hl{stroke:#AA1351;stroke-width:3;opacity:1}
.pa-wires circle{fill:#AA1351;transition:opacity .2s}
html.fx .fx-pin .pa-mp li{transition:opacity .3s,transform .3s}
html.fx .fx-pin .pa-mp li:not(.is-on){opacity:.22;transform:translateX(10px)}
html.fx .fx-pin .pa-mp img{transition:opacity .7s}
html.fx .fx-pin.is-done .pa-mp img{opacity:.6}
html.fx .fx-pin .pa-mp{transition:box-shadow 1s}
html.fx .fx-pin.is-done .pa-mp{box-shadow:0 0 0 3px rgba(170,19,81,.55),0 18px 48px rgba(29,49,73,.25)}
.fx-step{position:absolute;right:0;top:-2.25rem;font-family:var(--_typo---font-accent,inherit);font-weight:800;font-size:.75rem;letter-spacing:.12em;text-transform:uppercase;color:#AA1351}
.pa-voice .card{position:relative}
html.fx .pa-voice .card:before{content:"";position:absolute;left:0;top:0;height:2px;width:100%;background:#AA1351;transform-origin:left center;transform:scaleX(0);transition:transform 1.3s .25s cubic-bezier(.2,.7,.2,1);z-index:2}
html.fx .pa-voice.is-in .card:before{transform:scaleX(1)}
</style>`;

module.exports.FX_JS = `<script>(function(){
var H=document.documentElement;if(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches)return;H.classList.add('fx');
function ready(f){document.readyState!=='loading'?f():document.addEventListener('DOMContentLoaded',f)}
ready(function(){
  var hd=document.querySelector('.mk-b-grid > div');if(hd){[].slice.call(hd.children).forEach(function(c,i){if(c.classList.contains('mk-strich'))return;c.classList.add('fx-h');c.style.animationDelay=(0.15+i*0.13)+'s'})}
  var T=[['.section-head',0],['.pa-lf .card',0.14],['.pa-fu',0],['.pa-win > div',0.14],['.pa-sl-head',0],['.pa-cta',0],['.pa-voice',0],['.pa-mnote',0],['.pa-eff > div',0.12],['.faq_item',0.06],['.contact_content',0],['.contact_person',0.15]];
  T.forEach(function(t){[].slice.call(document.querySelectorAll(t[0])).forEach(function(el,i){if(el.closest('.mk-b'))return;el.classList.add('fx-rev');el.style.transitionDelay=(t[1]?(i%5)*t[1]:0)+'s'})});
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('is-in');io.unobserve(e.target)}})},{threshold:.12,rootMargin:'0px 0px -6% 0px'});
  [].slice.call(document.querySelectorAll('.fx-rev')).forEach(function(el){io.observe(el)});
  lupe();tabs();pin();
});
function lupe(){var fig=document.querySelector('.mk-fig');if(!fig)return;var img=fig.querySelector('img');if(!img)return;var cv=document.createElement('canvas');cv.className='fx-lupe';fig.appendChild(cv);img.style.opacity='0';
  function go(){var r=img.getBoundingClientRect(),fr=fig.getBoundingClientRect();var pad=160,W=r.width,Hh=r.height;var dpr=Math.min(2,window.devicePixelRatio||1);
    cv.style.left=(r.left-fr.left-pad)+'px';cv.style.top=(r.top-fr.top-pad)+'px';cv.style.width=(W+2*pad)+'px';cv.style.height=(Hh+2*pad)+'px';cv.width=(W+2*pad)*dpr;cv.height=(Hh+2*pad)*dpr;
    var x=cv.getContext('2d');x.setTransform(dpr,0,0,dpr,0,0);var off=document.createElement('canvas');off.width=Math.round(W);off.height=Math.round(Hh);var o=off.getContext('2d');o.drawImage(img,0,0,off.width,off.height);var d;
    try{d=o.getImageData(0,0,off.width,off.height).data}catch(e){img.style.opacity='1';return}
    var P=[],st=3;for(var y=0;y<off.height;y+=st)for(var xx=0;xx<off.width;xx+=st){var k=(y*off.width+xx)*4;if(d[k+3]>110)P.push({tx:xx+pad,ty:y+pad,x:pad+Math.random()*W*1.4-W*.2,y:Hh+2*pad-Math.random()*60,c:'rgb('+d[k]+','+d[k+1]+','+d[k+2]+')',dl:Math.random()*.7})}
    var t0=performance.now(),D=1.7;
    (function tick(n){var t=(n-t0)/1000,done=true;x.clearRect(0,0,W+2*pad,Hh+2*pad);for(var i=0;i<P.length;i++){var p=P[i];var q=Math.min(1,Math.max(0,(t-p.dl)/D));if(q<1)done=false;var e=1-Math.pow(1-q,3);x.globalAlpha=Math.min(1,q*3);x.fillStyle=p.c;x.fillRect(p.x+(p.tx-p.x)*e,p.y+(p.ty-p.y)*e,2.4,2.4)}
      if(!done)requestAnimationFrame(tick);else{img.style.transition='opacity .7s';img.style.opacity='1';cv.style.transition='opacity .7s';cv.style.opacity='0'}})(t0)}
  if(img.complete)setTimeout(go,700);else img.onload=function(){setTimeout(go,700)}}
function tabs(){var T=document.querySelector('.pa-tabs');if(!T)return;var links=[].slice.call(T.querySelectorAll('.w-tab-link')),panes=[].slice.call(T.querySelectorAll('.w-tab-pane'));
  panes.forEach(function(p){[].slice.call(p.querySelectorAll('.pa-fill')).forEach(function(f){f.dataset.w=f.style.width});[].slice.call(p.querySelectorAll('.pa-tri .mk')).forEach(function(m){m.dataset.l=m.style.left})});
  function reset(p){[].slice.call(p.querySelectorAll('.pa-fill')).forEach(function(f){f.style.transition='none';f.style.width='0'});[].slice.call(p.querySelectorAll('.pa-tri .mk')).forEach(function(m){m.style.transition='none';m.style.left='50%'});p.classList.add('fx-pre')}
  function build(p){if(!p)return;reset(p);void p.offsetWidth;
    [].slice.call(p.querySelectorAll('.pa-heat tr')).forEach(function(tr,r){[].slice.call(tr.querySelectorAll('td:not(.l)')).forEach(function(td,c){td.style.transitionDelay=((r+c)*0.09)+'s'})});
    [].slice.call(p.querySelectorAll('.pa-plan tr')).forEach(function(tr,r){tr.style.transitionDelay=(r*0.2)+'s'});
    requestAnimationFrame(function(){requestAnimationFrame(function(){p.classList.remove('fx-pre');
      [].slice.call(p.querySelectorAll('.pa-fill')).forEach(function(f,i){f.style.transition='';setTimeout(function(){f.style.width=f.dataset.w},60+i*55)});
      [].slice.call(p.querySelectorAll('.pa-tri .mk')).forEach(function(m,i){m.style.transition='';setTimeout(function(){m.style.left=m.dataset.l},250+Math.floor(i/3)*160)})})})}
  function show(i){links.forEach(function(l,k){l.classList.toggle('w--current',k===i)});panes.forEach(function(p,k){p.classList.toggle('w--tab-active',k===i);p.style.display=k===i?'block':'none';p.style.opacity=1});build(panes[i])}
  links.forEach(function(l,i){l.style.cursor='pointer';l.addEventListener('click',function(e){e.preventDefault();e.stopImmediatePropagation();show(i)},true)});
  var a=panes.filter(function(p){return p.classList.contains('w--tab-active')})[0];reset(a);
  var io=new IntersectionObserver(function(es){if(es[0].isIntersecting){build(a);io.disconnect()}},{threshold:.35});io.observe(T)}
function pin(){var meth=document.querySelector('.pa-meth');if(!meth)return;var rows=[].slice.call(meth.querySelectorAll('.pa-mr')),lis=[].slice.call(meth.querySelectorAll('.pa-mp li'));
  if(innerWidth<992){rows.forEach(function(r,i){r.classList.add('fx-rev','is-done');r.style.transitionDelay=(i*0.08)+'s';new IntersectionObserver(function(es,o){if(es[0].isIntersecting){r.classList.add('is-in');o.disconnect()}},{threshold:.2}).observe(r)});lis.forEach(function(l){l.classList.add('is-on')});return}
  var wrap=document.createElement('div');wrap.className='fx-pin';var inner=document.createElement('div');inner.className='fx-pin-in';meth.parentNode.insertBefore(wrap,meth);inner.appendChild(meth);wrap.appendChild(inner);
  var step=document.createElement('div');step.className='fx-step';meth.style.position='relative';meth.appendChild(step);
  var STEP=190,N=5,paths=[],lens=[],dots=[],map=[[0],[],[1,2],[4],[3]];
  function layout(){var h=inner.offsetHeight;inner.style.setProperty('--pinh',h+'px');wrap.style.height=(h+STEP*(N+1))+'px';draw()}
  function draw(){var svg=meth.querySelector('#pa-wires');if(!svg)return;var wr=svg.getBoundingClientRect();if(!wr.width)return;var pr=meth.querySelector('.pa-mp').getBoundingClientRect();var ty=pr.top+pr.height/2-wr.top,h='';
    rows.forEach(function(r,k){var b=r.getBoundingClientRect(),y=b.top+b.height/2-wr.top;h+='<path class="fx-w'+(k==4?' o':'')+'" d="M0,'+y+' C'+wr.width*.55+','+y+' '+wr.width*.45+','+ty+' '+(wr.width-2)+','+ty+'"/>'});
    h+='<path class="ar" d="M'+(wr.width-10)+','+(ty-6)+' L'+(wr.width-2)+','+ty+' L'+(wr.width-10)+','+(ty+6)+'"/>';rows.forEach(function(){h+='<circle r="4.5" cx="-30" cy="-30" style="opacity:0"/>'});svg.innerHTML=h;
    paths=[].slice.call(svg.querySelectorAll('path.fx-w'));dots=[].slice.call(svg.querySelectorAll('circle'));lens=paths.map(function(p){return p.getTotalLength()});paths.forEach(function(p,k){p.style.strokeDasharray=lens[k];p.style.strokeDashoffset=lens[k]});upd()}
  function upd(){var top=wrap.getBoundingClientRect().top,start=parseFloat(getComputedStyle(inner).top)||0,s=Math.max(0,start-top),prog=s/STEP,cur=-1;
    rows.forEach(function(r,k){var lp=Math.max(0,Math.min(1,prog-k));r.classList.toggle('is-done',lp>0.02);r.classList.toggle('is-now',lp>0.02&&lp<1);if(lp>0.02&&lp<1)cur=k;
      if(paths[k]){paths[k].style.strokeDashoffset=lens[k]*(1-lp);var d=dots[k];if(lp>0.02&&lp<0.98){var pt=paths[k].getPointAtLength(lens[k]*lp);d.setAttribute('cx',pt.x);d.setAttribute('cy',pt.y);d.style.opacity=1}else d.style.opacity=0}
      map[k].forEach(function(j){if(lis[j])lis[j].classList.toggle('is-on',lp>=0.95)})});
    if(map[0].length&&prog>=N){lis.forEach(function(l){l.classList.add('is-on')})}
    wrap.classList.toggle('is-done',prog>=N);step.textContent=prog>=N?'Fünf Quellen, ein Bild':(cur>=0?'Methode '+(cur+1)+' von 5':'')}
  rows.forEach(function(r,k){r.addEventListener('mouseenter',function(){if(paths[k])paths[k].classList.add('hl')});r.addEventListener('mouseleave',function(){if(paths[k])paths[k].classList.remove('hl')})});
  addEventListener('scroll',upd,{passive:true});addEventListener('resize',layout);setTimeout(layout,60);if(document.fonts)document.fonts.ready.then(layout);addEventListener('load',layout)}
})();</script>`;
