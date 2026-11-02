const { chromium } = require('playwright');
const file = process.argv[2] || 'home.html';
const widths = (process.argv[3] || '1920,1440,1024,820,390').split(',').map(Number);
(async()=>{const b=await chromium.launch();
for (const w of widths){const p=await b.newPage({viewport:{width:w,height:900},deviceScaleFactor:1});
await p.goto('file://'+process.cwd()+'/'+file,{waitUntil:'networkidle'});await p.waitForTimeout(800);
const m=await p.evaluate(()=>({sw:document.documentElement.scrollWidth,h:document.documentElement.scrollHeight,over:[...document.querySelectorAll('body *')].filter(e=>!e.closest('.logos_marquee')&&!e.closest('.footer_wordmark')).filter(e=>{const r=e.getBoundingClientRect();return r.right>innerWidth+1&&getComputedStyle(e).position!=='absolute'}).slice(0,8).map(e=>e.className+' '+Math.round(e.getBoundingClientRect().right))}));
console.log(w, JSON.stringify(m));
await p.screenshot({path:`${file.replace('.html','')}_${w}.png`,fullPage:true});await p.close();}
await b.close();})();
