import { networkIncidents } from "@/lib/demo-data";

export default function NetworkPage() {
  return (
    <main className="space-y-6">
      <section className="card p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#0b7a75]">
              Network status
            </div>
            <h2 className="mt-2 text-3xl font-black tracking-tight">
              Overall network status
            </h2>
          </div>
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm font-bold text-emerald-800">
            Operational
          </div>
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {[
          ["Cotonou", "Operational"],
          ["Abomey-Calavi", "Operational"],
          ["Porto-Novo", "Degraded"],
          ["Sèmè-Kpodji", "Operational"],
        ].map(([area, status]) => (
          <div key={area} className="card p-5">
            <div className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
              {area}
            </div>
            <div className="mt-3 flex items-center gap-2 text-xl font-black text-slate-900">
              <span
                className={`h-3 w-3 rounded-full ${status === "Degraded" ? "bg-amber-500" : "bg-emerald-500"}`}
              />
              {status}
            </div>
          </div>
        ))}
      </section>

      <section className="card p-6">
        <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#0b7a75]">
          Fictional network incidents
        </div>
        <div className="mt-5 space-y-4">
          {networkIncidents.map((incident) => (
            <div
              key={incident.id}
              className="rounded-2xl border border-slate-200 p-4"
            >
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="font-black text-slate-900">{incident.id}</div>
                  <div className="text-sm text-slate-500">{incident.area}</div>
                </div>
                <span className="rounded-full bg-amber-100 px-2 py-1 text-[10px] font-black uppercase tracking-[0.08em] text-amber-800">
                  {incident.status}
                </span>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4 text-sm text-slate-700">
                <div>
                  <span className="font-bold text-slate-900">Issue:</span>{" "}
                  {incident.issue}
                </div>
                <div>
                  <span className="font-bold text-slate-900">Started:</span>{" "}
                  {incident.started}
                </div>
                <div>
                  <span className="font-bold text-slate-900">Impact:</span>{" "}
                  {incident.impact}
                </div>
                <div>
                  <span className="font-bold text-slate-900">Assigned:</span>{" "}
                  {incident.assigned}
                </div>
              </div>
              <div className="mt-3 text-sm text-slate-600">
                {incident.summary}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
