if(!self.define){let e,i={};const r=(r,s)=>(r=new URL(r+".js",s).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(s,c)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(i[f])return;let n={};const t=e=>r(e,f),o={module:{uri:f},exports:n,require:t};i[f]=Promise.all(s.map((e=>o[e]||t(e)))).then((e=>(c(...e),n)))}}define(["./workbox-bd9393cf"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"about.html",revision:"cb9adee3936fb4852c84c441dffefba9"},{url:"app.js",revision:"d769720124450f16b36c5fcbd9c8e191"},{url:"helpers.js",revision:"bc07d24f5427fe371d3ed40f2fda41f2"},{url:"icon.png",revision:"93944143dc8d7f9b3da5ffc7c7bc1e4d"},{url:"index.html",revision:"f4d275ca9f148f9640e81c5b6e9b7547"},{url:"manifest.webmanifest",revision:"e2489d54475815be7bced4f49e74decc"},{url:"style.css",revision:"0588670e11067d3e0e4af057e8ee80bb"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
