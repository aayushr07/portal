if(!self.define){let e,s={};const a=(a,t)=>(a=new URL(a+".js",t).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(t,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let n={};const r=e=>a(e,c),o={module:{uri:c},exports:n,require:r};s[c]=Promise.all(t.map((e=>o[e]||r(e)))).then((e=>(i(...e),n)))}}define(["./workbox-c06b064f"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/PDF-icon.png",revision:"6e0d7b3e62a1a503b708c6b606420371"},{url:"/_next/static/chunks/0e5ce63c-811e5003683484a9.js",revision:"hMRXUKtsKM_CSZLLgo5TU"},{url:"/_next/static/chunks/1380.cbc4b854c440f0dd.js",revision:"cbc4b854c440f0dd"},{url:"/_next/static/chunks/1611-a5e2b6b2fcb60911.js",revision:"hMRXUKtsKM_CSZLLgo5TU"},{url:"/_next/static/chunks/1782-ea7c04463dd6e9bb.js",revision:"hMRXUKtsKM_CSZLLgo5TU"},{url:"/_next/static/chunks/1800.1af5d4a0bc9f4f04.js",revision:"1af5d4a0bc9f4f04"},{url:"/_next/static/chunks/2646-6da8c90a75301e5f.js",revision:"hMRXUKtsKM_CSZLLgo5TU"},{url:"/_next/static/chunks/2659-8446fef15ddfdf37.js",revision:"hMRXUKtsKM_CSZLLgo5TU"},{url:"/_next/static/chunks/3319-6658d04c3f2dc6f6.js",revision:"hMRXUKtsKM_CSZLLgo5TU"},{url:"/_next/static/chunks/3453-82bf1c1cd453ef78.js",revision:"hMRXUKtsKM_CSZLLgo5TU"},{url:"/_next/static/chunks/3464-358030a12c5e039c.js",revision:"hMRXUKtsKM_CSZLLgo5TU"},{url:"/_next/static/chunks/4435.10f1ef9f46cb9b24.js",revision:"10f1ef9f46cb9b24"},{url:"/_next/static/chunks/5009.08cae16d5efc6a80.js",revision:"08cae16d5efc6a80"},{url:"/_next/static/chunks/5385.9d7271a92376bbcd.js",revision:"9d7271a92376bbcd"},{url:"/_next/static/chunks/5452.1fa3ac52e2da0c00.js",revision:"1fa3ac52e2da0c00"},{url:"/_next/static/chunks/5453-83de2a9add8e3628.js",revision:"hMRXUKtsKM_CSZLLgo5TU"},{url:"/_next/static/chunks/557-0322ab8f919a37a0.js",revision:"hMRXUKtsKM_CSZLLgo5TU"},{url:"/_next/static/chunks/5600.585b4158b92b9ab8.js",revision:"585b4158b92b9ab8"},{url:"/_next/static/chunks/5751-ab09909eff9372dc.js",revision:"hMRXUKtsKM_CSZLLgo5TU"},{url:"/_next/static/chunks/602-599ef5d1c0df71f3.js",revision:"hMRXUKtsKM_CSZLLgo5TU"},{url:"/_next/static/chunks/6127-71d02ae7de4b2f8b.js",revision:"hMRXUKtsKM_CSZLLgo5TU"},{url:"/_next/static/chunks/6137-18a167958ef6b3b5.js",revision:"hMRXUKtsKM_CSZLLgo5TU"},{url:"/_next/static/chunks/6619.fd56ef8e25225242.js",revision:"fd56ef8e25225242"},{url:"/_next/static/chunks/6852-fe71e08d78e2c1f5.js",revision:"hMRXUKtsKM_CSZLLgo5TU"},{url:"/_next/static/chunks/6997-748cb954084739d9.js",revision:"hMRXUKtsKM_CSZLLgo5TU"},{url:"/_next/static/chunks/7036-98d3cf14aa4adabe.js",revision:"hMRXUKtsKM_CSZLLgo5TU"},{url:"/_next/static/chunks/7193-28f0eba8c28821ee.js",revision:"hMRXUKtsKM_CSZLLgo5TU"},{url:"/_next/static/chunks/7551-586a187c270500ac.js",revision:"hMRXUKtsKM_CSZLLgo5TU"},{url:"/_next/static/chunks/7598-50f08238a0d94c14.js",revision:"hMRXUKtsKM_CSZLLgo5TU"},{url:"/_next/static/chunks/7648-e89e2a11b48ee1e2.js",revision:"hMRXUKtsKM_CSZLLgo5TU"},{url:"/_next/static/chunks/7712.219a1aa28d3e3af6.js",revision:"219a1aa28d3e3af6"},{url:"/_next/static/chunks/7933.f350880ae5f84616.js",revision:"f350880ae5f84616"},{url:"/_next/static/chunks/7940-1b468e75dc4157dd.js",revision:"hMRXUKtsKM_CSZLLgo5TU"},{url:"/_next/static/chunks/822-c89a3aa8ca98f1d9.js",revision:"hMRXUKtsKM_CSZLLgo5TU"},{url:"/_next/static/chunks/8391.e3b836f57cfae12f.js",revision:"e3b836f57cfae12f"},{url:"/_next/static/chunks/8575-869ecf93d83985ce.js",revision:"hMRXUKtsKM_CSZLLgo5TU"},{url:"/_next/static/chunks/8594-ab9db1d640b2fda1.js",revision:"hMRXUKtsKM_CSZLLgo5TU"},{url:"/_next/static/chunks/8658-e47aa98afbde1abc.js",revision:"hMRXUKtsKM_CSZLLgo5TU"},{url:"/_next/static/chunks/8935-35f270690a23063d.js",revision:"hMRXUKtsKM_CSZLLgo5TU"},{url:"/_next/static/chunks/8e1d74a4-d08caf947ea15608.js",revision:"hMRXUKtsKM_CSZLLgo5TU"},{url:"/_next/static/chunks/9197-5219145927a3f249.js",revision:"hMRXUKtsKM_CSZLLgo5TU"},{url:"/_next/static/chunks/9501-724057bd0d0df2c1.js",revision:"hMRXUKtsKM_CSZLLgo5TU"},{url:"/_next/static/chunks/9531.bafda103f4ec564d.js",revision:"bafda103f4ec564d"},{url:"/_next/static/chunks/9c4e2130-a88724d9bf46d174.js",revision:"hMRXUKtsKM_CSZLLgo5TU"},{url:"/_next/static/chunks/app/_not-found/page-8db038b0856d713d.js",revision:"hMRXUKtsKM_CSZLLgo5TU"},{url:"/_next/static/chunks/app/blogs/%5Bid%5D/page-064d34a3f91aef41.js",revision:"hMRXUKtsKM_CSZLLgo5TU"},{url:"/_next/static/chunks/app/blogs/page-6018d2dbdac053db.js",revision:"hMRXUKtsKM_CSZLLgo5TU"},{url:"/_next/static/chunks/app/clubs/%5Bclub%5D/page-0f5554166ff09987.js",revision:"hMRXUKtsKM_CSZLLgo5TU"},{url:"/_next/static/chunks/app/clubs/page-8cfcc041d0bc00ed.js",revision:"hMRXUKtsKM_CSZLLgo5TU"},{url:"/_next/static/chunks/app/concession/page-ff1932815ee2f4ca.js",revision:"hMRXUKtsKM_CSZLLgo5TU"},{url:"/_next/static/chunks/app/createEve/page-d3862897e3950f3d.js",revision:"hMRXUKtsKM_CSZLLgo5TU"},{url:"/_next/static/chunks/app/events/%5Bevent%5D/page-25ea82c36e3fb91d.js",revision:"hMRXUKtsKM_CSZLLgo5TU"},{url:"/_next/static/chunks/app/events/page-126a99cbadf09b28.js",revision:"hMRXUKtsKM_CSZLLgo5TU"},{url:"/_next/static/chunks/app/internship/page-75f0e87194d7ac7b.js",revision:"hMRXUKtsKM_CSZLLgo5TU"},{url:"/_next/static/chunks/app/layout-7286624164f5c809.js",revision:"hMRXUKtsKM_CSZLLgo5TU"},{url:"/_next/static/chunks/app/login/page-4d8e9313d61d5522.js",revision:"hMRXUKtsKM_CSZLLgo5TU"},{url:"/_next/static/chunks/app/members/page-3dc01d7757f03e5f.js",revision:"hMRXUKtsKM_CSZLLgo5TU"},{url:"/_next/static/chunks/app/page-0185e4504fbea496.js",revision:"hMRXUKtsKM_CSZLLgo5TU"},{url:"/_next/static/chunks/app/profile/page-47f62de5e22e4d9f.js",revision:"hMRXUKtsKM_CSZLLgo5TU"},{url:"/_next/static/chunks/app/signup/page-0cf3742873dff01f.js",revision:"hMRXUKtsKM_CSZLLgo5TU"},{url:"/_next/static/chunks/app/zephyr/page-413089e54c166267.js",revision:"hMRXUKtsKM_CSZLLgo5TU"},{url:"/_next/static/chunks/cff4c5fa.3c25bca6c7b3831c.js",revision:"3c25bca6c7b3831c"},{url:"/_next/static/chunks/fd9d1056-31073a18d03e6c0e.js",revision:"hMRXUKtsKM_CSZLLgo5TU"},{url:"/_next/static/chunks/framework-08aa667e5202eed8.js",revision:"hMRXUKtsKM_CSZLLgo5TU"},{url:"/_next/static/chunks/main-525ce155897232af.js",revision:"hMRXUKtsKM_CSZLLgo5TU"},{url:"/_next/static/chunks/main-app-599ef3b5e23f6755.js",revision:"hMRXUKtsKM_CSZLLgo5TU"},{url:"/_next/static/chunks/pages/_app-3c9ca398d360b709.js",revision:"hMRXUKtsKM_CSZLLgo5TU"},{url:"/_next/static/chunks/pages/_error-cf5ca766ac8f493f.js",revision:"hMRXUKtsKM_CSZLLgo5TU"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-33a9c9cfbb1c624e.js",revision:"hMRXUKtsKM_CSZLLgo5TU"},{url:"/_next/static/css/2d16a258f3e7be21.css",revision:"2d16a258f3e7be21"},{url:"/_next/static/css/8aee48eb52f4c731.css",revision:"8aee48eb52f4c731"},{url:"/_next/static/hMRXUKtsKM_CSZLLgo5TU/_buildManifest.js",revision:"26c1874eb99fd733eb0deaea19257c61"},{url:"/_next/static/hMRXUKtsKM_CSZLLgo5TU/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/26a46d62cd723877-s.woff2",revision:"befd9c0fdfa3d8a645d5f95717ed6420"},{url:"/_next/static/media/55c55f0601d81cf3-s.woff2",revision:"43828e14271c77b87e3ed582dbff9f74"},{url:"/_next/static/media/581909926a08bbc8-s.woff2",revision:"f0b86e7c24f455280b8df606b89af891"},{url:"/_next/static/media/6d93bde91c0c2823-s.woff2",revision:"621a07228c8ccbfd647918f1021b4868"},{url:"/_next/static/media/97e0cb1ae144a2a9-s.woff2",revision:"e360c61c5bd8d90639fd4503c829c2dc"},{url:"/_next/static/media/EveHero.39b7e918.png",revision:"83261b4a47a29ebbe3557c162cf57a8d"},{url:"/_next/static/media/a34f9d1faa5f3315-s.p.woff2",revision:"d4fe31e6a2aebc06b8d6e558c9141119"},{url:"/_next/static/media/ansh.f4a75404.jpg",revision:"d4c662f1362b731a203118bbe0cc4aee"},{url:"/_next/static/media/bhavesh.27b9aac0.jpg",revision:"6c3412bc70ba0d67cab03c1d2dfcad09"},{url:"/_next/static/media/call.76670fc1.png",revision:"e32444726264e197038d4e56a63758f1"},{url:"/_next/static/media/df0a9ae256c0569c-s.woff2",revision:"d54db44de5ccb18886ece2fda72bdfe0"},{url:"/_next/static/media/hasan.fcd47751.jpg",revision:"935f791ac2612ace2e71fe498d384657"},{url:"/_next/static/media/internHero.63a31483.svg",revision:"e71bf43771f35a448710acea42da124e"},{url:"/_next/static/media/location.598f9e85.png",revision:"cfc4da7810da241e0e6b2d8f3772ef84"},{url:"/_next/static/media/loginAlert.51379e9b.svg",revision:"b1e50fff3e6818f5f291366c7e1bdcd6"},{url:"/_next/static/media/logoTv.1251f0cf.svg",revision:"c363943ce3dda9d640cfd069c1cff881"},{url:"/_next/static/media/mail.b4ec254a.png",revision:"4310a3b68affb70fc2f906298ad36712"},{url:"/_next/static/media/moni.8a54b154.jpg",revision:"7c1355388f7522cd0e6185d112cfb010"},{url:"/_next/static/media/nav-icon1.7b9d29e3.svg",revision:"d502374ec89b6bdc01481aa3d6e07615"},{url:"/_next/static/media/nav-icon2.684a499c.svg",revision:"a579c8668fc388b3c08328dcb17502ce"},{url:"/_next/static/media/nav-icon3.afd83c2a.svg",revision:"b91059170d333110d1a1f4e0a211c039"},{url:"/_next/static/media/nav-icon4.7e2acbd6.svg",revision:"d9c88a1f956891777e5d3340c0ba36ef"},{url:"/_next/static/media/omkar.674669ea.jpg",revision:"deb1962f8087c4d388bcd63c196b9b7a"},{url:"/_next/static/media/roneet.35a37db5.jpg",revision:"36565d52b722f761a3490957748c47c1"},{url:"/_next/static/media/teamImg1.15bd6174.jpg",revision:"5793aa12d18410a2d80d6303e6e21349"},{url:"/_next/static/media/teamImg2.34159df2.jpg",revision:"e99a1580f2ef9b5bf8e77a44d2af0cf3"},{url:"/_next/static/media/teamImg3.3da19f93.jpg",revision:"766ab8d93e2ced77ee73a295fe4e5f2b"},{url:"/_next/static/media/testimonial.e8aba875.png",revision:"9fa28c665635616d84ddd805a014c0e4"},{url:"/_next/static/media/vivek.0bc8b61b.jpg",revision:"0d754fa8e4631c5b0ddccaf99920a8b7"},{url:"/animations/error.json",revision:"308ba9fde4034ce828f5b82217e266ee"},{url:"/icons/192-192.png",revision:"456976f9591039291551edc98682a056"},{url:"/icons/384-384.png",revision:"b1bbf2388e0a496322540e012202d62c"},{url:"/icons/512-512.png",revision:"5447fcbe2d68b316734fb2f76f1c19b2"},{url:"/icons/LTCE_Mumbai.mp4",revision:"8d813bba1e27828d8995abe589da8446"},{url:"/icons/zephyr_ltce.mp4",revision:"ae8f26a72fca8c24a6d517ca84ddb8eb"},{url:"/manifest.json",revision:"97d45dea1a0a2ce3b21d739ae9c3121e"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/swe-worker-4da67dda9bc18c53.js",revision:"5a47d90db13bb1309b25bdf7b363570e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));
