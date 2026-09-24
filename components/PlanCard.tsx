import Link from "next/link";

export function PlanCard({ name, speed, price, tag, features }: { name:string; speed:string; price:string; tag:string; features:string[] }) {
  return (
    <div className="card p-6">
      <div className="flex items-start justify-between gap-4">
        <div><span className="pill">{tag}</span><h3 className="mt-4 text-xl font-black">{name}</h3></div>
        <div className="text-right"><div className="text-2xl font-black">{price}</div><div className="text-xs text-slate-500">per month · demo</div></div>
      </div>
      <div className="mt-5 rounded-xl bg-slate-50 p-4"><div className="text-3xl font-black">{speed}</div><div className="text-sm text-slate-500">download speed</div></div>
      <ul className="mt-5 space-y-3 text-sm text-slate-600">{features.map(f => <li key={f} className="flex gap-2"><span className="text-[#0b7a75]">✓</span>{f}</li>)}</ul>
      <Link href="/install" className="btn btn-primary mt-6 w-full">Request installation</Link>
    </div>
  );
}
