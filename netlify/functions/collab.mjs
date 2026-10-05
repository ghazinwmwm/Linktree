import { getStore } from '@netlify/blobs';
const headers={'content-type':'application/json','access-control-allow-origin':'*','access-control-allow-headers':'content-type','access-control-allow-methods':'GET,POST,OPTIONS'};
export default async (req)=>{
  if(req.method==='OPTIONS')return new Response('',{status:204,headers});
  const url=new URL(req.url),room=(url.searchParams.get('room')||'').replace(/[^a-zA-Z0-9_-]/g,'').slice(0,80);
  if(!room)return new Response(JSON.stringify({error:'room required'}),{status:400,headers});
  const store=getStore('canvas-collab');
  if(req.method==='GET'){
    const data=await store.get(room,{type:'json'}).catch(()=>null);
    return new Response(JSON.stringify(data||null),{status:200,headers});
  }
  if(req.method==='POST'){
    const body=await req.json().catch(()=>null); if(!body?.project)return new Response(JSON.stringify({error:'project required'}),{status:400,headers});
    const record={project:body.project,updatedAt:Date.now(),clientId:String(body.clientId||'').slice(0,100)};
    await store.setJSON(room,record);
    return new Response(JSON.stringify({ok:true,updatedAt:record.updatedAt}),{status:200,headers});
  }
  return new Response(JSON.stringify({error:'method'}),{status:405,headers});
};
