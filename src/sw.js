if(!self.define){let e,i={};const r=(r,s)=>(r=new URL(r+".js",s).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(s,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let f={};const o=e=>r(e,t),c={module:{uri:t},exports:f,require:o};i[t]=Promise.all(s.map((e=>c[e]||o(e)))).then((e=>(n(...e),f)))}}define(["./workbox-bd9393cf"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"about.html",revision:"cb9adee3936fb4852c84c441dffefba9"},{url:"app.js",revision:"73a8de97b786a827fa2e62fa9291e294"},{url:"helpers.js",revision:"bc07d24f5427fe371d3ed40f2fda41f2"},{url:"icon.png",revision:"93944143dc8d7f9b3da5ffc7c7bc1e4d"},{url:"index.html",revision:"9bac7e3e2147937093afa4cb626ebcbb"},{url:"manifest.webmanifest",revision:"d7b0c597ea73a8b487e128d62efac639"},{url:"style.css",revision:"0588670e11067d3e0e4af057e8ee80bb"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
