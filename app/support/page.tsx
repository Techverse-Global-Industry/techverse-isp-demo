"use client";

import { useState } from "react";
import { SectionTitle } from "@/components/SectionTitle";

const tickets = [
  {id:"#BN-10429", issue:"Internet unavailable", area:"Abomey-Calavi", status:"Assigned", age:"18 min"},
  {id:"#BN-10421", issue:"Slow connection", area:"Cotonou", status:"Investigating", age:"32 min"},
  {id:"#BN-10405", issue:"Billing question", area:"Porto-Novo", status:"Resolved", age:"1 hr"},
];

export default function SupportPage(){
  const [created,setCreated]=useState(false);
  return <main className="section-shell py-14">
    <SectionTitle eyebrow="Support" title="Turn service problems into trackable tickets" text="A structured support workflow gives customers visibility and gives the ISP an operations queue."/><div className="mt-10 grid gap-6 md:grid-cols-[1fr_.9fr]"><div className="card p-7">{created?<div className="rounded-xl bg-emerald-50 p-5"><div className="font-black text-emerald-900">Ticket created — #BN-10432</div><div className="mt-2 text-sm text-emerald-800">The customer receives a confirmation and the operations queue receives the request.</div></div>:<><h3 className="text-xl font-black">Report a problem</h3><div className="mt-5 grid gap-4"><input className="input" placeholder="Customer / business name"/><select className="input"><option>Internet unavailable</option><option>Slow connection</option><option>Billing issue</option><option>Installation issue</option></select><textarea className="input min-h-28" placeholder="Describe the problem…"/><button className="btn btn-primary" onClick={()=>setCreated(true)}>Create support ticket</button></div></>}</div><div className="card p-7"><div className="flex items-center justify-between"><h3 className="text-xl font-black">Operations queue</h3><span className="pill">3 demo tickets</span></div><div className="mt-5 space-y-3">{tickets.map(t=><div key={t.id} className="rounded-xl border border-slate-200 p-4"><div className="flex items-start justify-between gap-3"><div><div className="font-bold">{t.issue}</div><div className="mt-1 text-xs text-slate-500">{t.id} · {t.area}</div></div><span className={`rounded-full px-2.5 py-1 text-xs font-bold ${t.status==="Resolved"?"bg-emerald-100 text-emerald-800":"bg-amber-100 text-amber-800"}`}>{t.status}</span></div><div className="mt-3 text-xs text-slate-400">Open for {t.age}</div></div>)}</div></div></div></main>
}
