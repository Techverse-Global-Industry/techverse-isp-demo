"use client";

import { useState } from "react";
import { SectionTitle } from "@/components/SectionTitle";

const areas = ["Cotonou", "Abomey-Calavi", "Porto-Novo", "Sèmè-Kpodji", "Adjarra", "Akpro-Missérété", "Dangbo"];

export default function CoveragePage() {
  const [area, setArea] = useState("");
  const [checked, setChecked] = useState(false);
  const available = areas.includes(area);
  return <main className="section-shell py-14"><SectionTitle eyebrow="Coverage checker" title="Know whether service is available before installation" text="This demo uses seven illustrative service areas. In production, connect this flow to the ISP's coverage database or serviceability API." /><div className="mt-10 grid gap-6 md:grid-cols-[.9fr_1.1fr]"><div className="card p-7"><label className="text-sm font-bold">Select service area</label><select className="input mt-2" value={area} onChange={e=>{setArea(e.target.value);setChecked(false)}}><option value="">Choose an area</option>{areas.map(a=><option key={a}>{a}</option>)}</select><button className="btn btn-primary mt-4 w-full" onClick={()=>setChecked(true)} disabled={!area}>Check availability</button>{checked ? <div className={`mt-5 rounded-xl p-4 ${available?"bg-emerald-50 text-emerald-900":"bg-amber-50 text-amber-900"}`}>{available ? <><div className="font-black">Serviceable in {area}</div><div className="mt-1 text-sm">A customer can proceed to plan selection and installation request.</div></> : <><div className="font-black">Manual confirmation required</div><div className="mt-1 text-sm">The demo does not contain a live network database.</div></>}</div>:null}</div><div className="card p-7"><div className="text-sm font-bold text-slate-500">Demo network footprint</div><div className="mt-5 grid grid-cols-2 gap-3">{areas.map((a,i)=><div key={a} className="rounded-xl border border-slate-200 p-4"><div className="font-bold">{a}</div><div className="mt-2 flex items-center gap-2 text-xs text-emerald-700"><span className="h-2 w-2 rounded-full bg-emerald-500"/>Illustrative coverage</div><div className="mt-1 text-xs text-slate-400">Zone {String(i+1).padStart(2,"0")}</div></div>)}</div></div></div></main>;
}
