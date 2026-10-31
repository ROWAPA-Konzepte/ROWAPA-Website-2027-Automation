const { chromium } = require('playwright');
(async()=>{const b=await chromium.launch();const [file,sel,w,out]=process.argv.slice(2);
const p=await b.newPage({viewport:{width:+w,height:900}});await p.goto('file://'+process.cwd()+'/'+file,{waitUntil:'networkidle'});await p.waitForTimeout(600);
const el=await p.$(sel);await el.screenshot({path:out});await b.close();})();
