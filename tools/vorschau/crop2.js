const { chromium } = require('playwright');
(async()=>{const b=await chromium.launch();const [file,sel,w,out]=process.argv.slice(2);
const p=await b.newPage({viewport:{width:+w,height:900}});await p.goto('file://'+process.cwd()+'/'+file,{waitUntil:'networkidle'});await p.waitForTimeout(600);
const r=await p.evaluate(s=>{const e=document.querySelector(s).getBoundingClientRect();return {x:0,y:e.top+scrollY,width:innerWidth,height:e.height}},sel);
await p.screenshot({path:out,fullPage:true,clip:r});await b.close();})();
