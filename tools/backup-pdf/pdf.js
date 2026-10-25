const { chromium } = require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage();
for (const [html,pdf] of JSON.parse(process.argv[2])){await p.goto('file://'+html,{waitUntil:'networkidle'});await p.waitForTimeout(300);
await p.pdf({path:pdf,format:'A4',printBackground:true,margin:{top:'18mm',bottom:'18mm',left:'16mm',right:'16mm'},displayHeaderFooter:true,headerTemplate:'<div></div>',footerTemplate:'<div style="font-size:7px;width:100%;text-align:right;padding-right:16mm;color:#4A5A70;font-family:Arial">Seite <span class="pageNumber"></span> / <span class="totalPages"></span></div>'});}
await b.close();})();
