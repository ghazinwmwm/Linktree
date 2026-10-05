const CACHE='canvas-agent-v4-2';
const ASSETS=['./','./index.html','./styles.css','./app.js','./manifest.webmanifest'];
self.addEventListener('install',event=>event.waitUntil(
  caches.open(CACHE).then(cache=>cache.addAll(ASSETS)).then(()=>self.skipWaiting())
));
self.addEventListener('activate',event=>event.waitUntil(
  caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim())
));
self.addEventListener('fetch',event=>{
  const req=event.request;
  if(req.method!=='GET')return;
  const url=new URL(req.url);
  // Never hijack Gemini/GitHub/Wikimedia or other external tool traffic.
  if(url.origin!==self.location.origin)return;
  if(req.mode==='navigate'){
    event.respondWith(fetch(req).then(res=>{
      const copy=res.clone();caches.open(CACHE).then(c=>c.put('./index.html',copy)).catch(()=>{});return res;
    }).catch(()=>caches.match('./index.html')));
    return;
  }
  event.respondWith(fetch(req).then(res=>{
    const copy=res.clone();caches.open(CACHE).then(c=>c.put(req,copy)).catch(()=>{});return res;
  }).catch(()=>caches.match(req)));
});
