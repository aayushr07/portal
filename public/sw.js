if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const r=e=>a(e,n),d={module:{uri:n},exports:t,require:r};s[n]=Promise.all(i.map((e=>d[e]||r(e)))).then((e=>(c(...e),t)))}}define(["./workbox-c06b064f"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/878rEF7msxe19K-h21-Ds/_buildManifest.js",revision:"c5f17930a62cbeeb1aeb4f70619dcb61"},{url:"/_next/static/878rEF7msxe19K-h21-Ds/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0e5ce63c-7d35da71e89c5d07.js",revision:"878rEF7msxe19K-h21-Ds"},{url:"/_next/static/chunks/117-0562b9aa8bcb72f5.js",revision:"878rEF7msxe19K-h21-Ds"},{url:"/_next/static/chunks/15-825514c50a439014.js",revision:"878rEF7msxe19K-h21-Ds"},{url:"/_next/static/chunks/20-6e048502f503a6f6.js",revision:"878rEF7msxe19K-h21-Ds"},{url:"/_next/static/chunks/228-b3ffb5e82c07273d.js",revision:"878rEF7msxe19K-h21-Ds"},{url:"/_next/static/chunks/250-d64ce32919eb7e6d.js",revision:"878rEF7msxe19K-h21-Ds"},{url:"/_next/static/chunks/264-81216ef438933cfd.js",revision:"878rEF7msxe19K-h21-Ds"},{url:"/_next/static/chunks/285-434086db33997ac1.js",revision:"878rEF7msxe19K-h21-Ds"},{url:"/_next/static/chunks/468-0005afe55e401abf.js",revision:"878rEF7msxe19K-h21-Ds"},{url:"/_next/static/chunks/683-1491bea73a27a908.js",revision:"878rEF7msxe19K-h21-Ds"},{url:"/_next/static/chunks/749-a0b2f0069dc09136.js",revision:"878rEF7msxe19K-h21-Ds"},{url:"/_next/static/chunks/app/_not-found-40e3ff3b95ebfe29.js",revision:"878rEF7msxe19K-h21-Ds"},{url:"/_next/static/chunks/app/blogs/page-7249ac5833127f02.js",revision:"878rEF7msxe19K-h21-Ds"},{url:"/_next/static/chunks/app/clubs/%5Bclub%5D/page-4b5cbf88cc13042c.js",revision:"878rEF7msxe19K-h21-Ds"},{url:"/_next/static/chunks/app/clubs/page-68eace8aa25ebe26.js",revision:"878rEF7msxe19K-h21-Ds"},{url:"/_next/static/chunks/app/concession/page-07c468e51ed1cbe0.js",revision:"878rEF7msxe19K-h21-Ds"},{url:"/_next/static/chunks/app/events/page-617578ff81374cd8.js",revision:"878rEF7msxe19K-h21-Ds"},{url:"/_next/static/chunks/app/layout-b476004f8a132990.js",revision:"878rEF7msxe19K-h21-Ds"},{url:"/_next/static/chunks/app/login/page-29847552c826a18f.js",revision:"878rEF7msxe19K-h21-Ds"},{url:"/_next/static/chunks/app/members/page-8accff13dc664afe.js",revision:"878rEF7msxe19K-h21-Ds"},{url:"/_next/static/chunks/app/page-9a2585de979ab2a8.js",revision:"878rEF7msxe19K-h21-Ds"},{url:"/_next/static/chunks/app/zephyr/page-aca6f73ef50f721d.js",revision:"878rEF7msxe19K-h21-Ds"},{url:"/_next/static/chunks/fd9d1056-e355ab7d92123654.js",revision:"878rEF7msxe19K-h21-Ds"},{url:"/_next/static/chunks/framework-aec844d2ccbe7592.js",revision:"878rEF7msxe19K-h21-Ds"},{url:"/_next/static/chunks/main-app-a43fdaef033cc7ad.js",revision:"878rEF7msxe19K-h21-Ds"},{url:"/_next/static/chunks/main-c6f68c1ef2190eaf.js",revision:"878rEF7msxe19K-h21-Ds"},{url:"/_next/static/chunks/pages/_app-75f6107b0260711c.js",revision:"878rEF7msxe19K-h21-Ds"},{url:"/_next/static/chunks/pages/_error-9a890acb1e81c3fc.js",revision:"878rEF7msxe19K-h21-Ds"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-bde07df7699f6864.js",revision:"878rEF7msxe19K-h21-Ds"},{url:"/_next/static/css/924d51c58c199858.css",revision:"924d51c58c199858"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/1.a25fa0ac.png",revision:"d3b773fa5d41f853cb623bd0b35713e0"},{url:"/_next/static/media/2.18025f8f.jpg",revision:"118e8ba74ea4c107bb9cd8fb5010b5d5"},{url:"/_next/static/media/2.2b56820b.png",revision:"2ab058818471cc90fcad03293b1707f4"},{url:"/_next/static/media/3.33665c60.png",revision:"b1ac81b1a0842202dad9c0bddfd61d77"},{url:"/_next/static/media/3.80fdf5dd.jpg",revision:"9c3b36ec29822aedf94c4d386ffe4c19"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/ansh.f4a75404.jpg",revision:"d4c662f1362b731a203118bbe0cc4aee"},{url:"/_next/static/media/ashrae.613571bf.jpeg",revision:"aff3ebe4a272a100483ffcc23e5aeb6b"},{url:"/_next/static/media/bhavesh.27b9aac0.jpg",revision:"6c3412bc70ba0d67cab03c1d2dfcad09"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/call.9bd14877.png",revision:"b776234cbbda4d941d33b8f5401d438b"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/divesh.5ff6c598.jpg",revision:"fcc8af6ec1814474888e934d3aa468d2"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/eesaevent.906e0619.jpg",revision:"a92dedc16f2691ea118ed6b85a1e4c27"},{url:"/_next/static/media/english.7e34711a.jpeg",revision:"1dfc86076b89ef8a8e948ec9666e6e48"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/_next/static/media/gdsc.0888ec0b.png",revision:"c2ba3d633ab92cbd6b642e2e146869f5"},{url:"/_next/static/media/hasan.fcd47751.jpg",revision:"935f791ac2612ace2e71fe498d384657"},{url:"/_next/static/media/iiclogo.330084b5.jpeg",revision:"95c0130fcb13f4be6180936e72db4437"},{url:"/_next/static/media/image.b1664e04.png",revision:"5a51e5343f79c28e51aef1db9fab8022"},{url:"/_next/static/media/mail.b4ec254a.png",revision:"4310a3b68affb70fc2f906298ad36712"},{url:"/_next/static/media/moni.8a54b154.jpg",revision:"7c1355388f7522cd0e6185d112cfb010"},{url:"/_next/static/media/omkar.674669ea.jpg",revision:"deb1962f8087c4d388bcd63c196b9b7a"},{url:"/_next/static/media/race.c34499a3.jpeg",revision:"09d0258dd0e4eaa06082c3c7a716625f"},{url:"/_next/static/media/roneet.35a37db5.jpg",revision:"36565d52b722f761a3490957748c47c1"},{url:"/_next/static/media/teamImg1.15bd6174.jpg",revision:"5793aa12d18410a2d80d6303e6e21349"},{url:"/_next/static/media/teamImg2.34159df2.jpg",revision:"e99a1580f2ef9b5bf8e77a44d2af0cf3"},{url:"/_next/static/media/teamImg3.3da19f93.jpg",revision:"766ab8d93e2ced77ee73a295fe4e5f2b"},{url:"/_next/static/media/tecEve.f4cd0f0e.png",revision:"581d0e327c96b0aed4988966004787d4"},{url:"/_next/static/media/testimonial.e8aba875.png",revision:"9fa28c665635616d84ddd805a014c0e4"},{url:"/_next/static/media/vivek.0bc8b61b.jpg",revision:"0d754fa8e4631c5b0ddccaf99920a8b7"},{url:"/_next/static/media/wdc.9218e466.png",revision:"17b044163b05556725e5441b049493aa"},{url:"/_next/static/media/wdcEve.55341961.png",revision:"9398e101187cc11297f0741b63df84ff"},{url:"/icons/android-chrome-192x192.png",revision:"62ad98ff0b7e9f737e3423204126225e"},{url:"/icons/android-chrome-384x384.png",revision:"52a1af0ed5e5b01eeded7fc244178653"},{url:"/icons/icon-512x512.png",revision:"a905d732285a3040cb6c2967844be681"},{url:"/manifest.json",revision:"a16677c1b690dff509f1325a1c1bd3a5"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/swe-worker-4da67dda9bc18c53.js",revision:"5a47d90db13bb1309b25bdf7b363570e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));
