import { serviceAreas } from "@/lib/demo-data";

const mapPins = [
  { label: "Installation", x: 28, y: 28, color: "bg-emerald-500" },
  { label: "Ticket", x: 58, y: 22, color: "bg-amber-500" },
  { label: "Technician", x: 40, y: 52, color: "bg-sky-500" },
  { label: "Incident", x: 70, y: 61, color: "bg-rose-500" },
];

export default function MapPage() {
  return (
    <main className="space-y-6">
      <section className="card p-6">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#0b7a75]">
              Field operations
            </div>
            <h2 className="mt-2 text-3xl font-black tracking-tight">
              Regional operations map
            </h2>
          </div>
          <div className="flex flex-wrap gap-2 text-sm">
            <span className="rounded-full bg-emerald-100 px-2.5 py-1.5 font-bold text-emerald-800">
              Installations
            </span>
            <span className="rounded-full bg-amber-100 px-2.5 py-1.5 font-bold text-amber-800">
              Tickets
            </span>
            <span className="rounded-full bg-sky-100 px-2.5 py-1.5 font-bold text-sky-800">
              Technicians
            </span>
            <span className="rounded-full bg-rose-100 px-2.5 py-1.5 font-bold text-rose-800">
              Incidents
            </span>
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.4fr_.6fr]">
        <div className="card overflow-hidden p-4">
          <div className="mb-3 flex items-center justify-between px-2">
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
              Demo data only
            </div>
            <div className="rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-slate-600">
              Live concept
            </div>
          </div>

          <div className="relative h-[540px] overflow-hidden rounded-[28px] border border-slate-200 bg-[radial-gradient(circle_at_20%_25%,_rgba(11,122,117,0.10),_transparent_18%),linear-gradient(135deg,#edf5f6,#f8fafc_42%,#eef2f7)]">
            <div className="absolute inset-0 opacity-80 [background-image:linear-gradient(rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px)] [background-size:32px_32px]" />

            <div className="absolute left-[10%] top-[18%] h-24 w-24 rounded-full border border-slate-200 bg-white/60" />
            <div className="absolute left-[18%] top-[38%] h-20 w-20 rounded-full border border-slate-200 bg-white/40" />
            <div className="absolute left-[42%] top-[15%] h-28 w-28 rounded-full border border-slate-200 bg-white/60" />
            <div className="absolute left-[56%] top-[32%] h-24 w-24 rounded-full border border-slate-200 bg-white/60" />
            <div className="absolute left-[62%] top-[52%] h-28 w-28 rounded-full border border-slate-200 bg-white/60" />
            <div className="absolute left-[32%] top-[68%] h-20 w-20 rounded-full border border-slate-200 bg-white/50" />

            {[
              ["Cotonou", 18, 38],
              ["Abomey-Calavi", 34, 58],
              ["Porto-Novo", 64, 28],
              ["Sèmè-Kpodji", 58, 66],
              ["Adjarra", 78, 46],
              ["Akpro-Missérété", 46, 72],
              ["Dangbo", 28, 76],
            ].map(([label, x, y]) => (
              <div
                key={label}
                className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#10202f]/10 bg-white/85 px-2 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-slate-700"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                {label}
              </div>
            ))}

            {mapPins.map((pin, index) => (
              <div
                key={pin.label}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
              >
                <div
                  className={`grid h-4 w-4 place-items-center rounded-full ${pin.color}`}
                >
                  <span className="block h-1.5 w-1.5 rounded-full bg-white" />
                </div>
                <div className="mt-2 rounded-full bg-white/90 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.08em] text-slate-700 shadow-sm">
                  {pin.label}
                </div>
                {index === 0 ? (
                  <div className="absolute left-5 top-5 h-3 w-3 rounded-full bg-emerald-300" />
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="card p-6">
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#0b7a75]">
              Service areas
            </div>
            <div className="mt-4 space-y-3 text-sm text-slate-700">
              {serviceAreas.map((area) => (
                <div key={area.name} className="rounded-xl bg-slate-50 p-3">
                  <div className="font-bold text-slate-900">{area.name}</div>
                  <div className="mt-1 text-xs text-slate-500">
                    {area.zones.join(" · ")}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card p-6">
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#0b7a75]">
              Filters
            </div>
            <div className="mt-4 space-y-2 text-sm">
              {["Installations", "Tickets", "Technicians", "Incidents"].map(
                (filter) => (
                  <label
                    key={filter}
                    className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-3 py-2"
                  >
                    <span className="font-semibold text-slate-700">
                      {filter}
                    </span>
                    <input
                      type="checkbox"
                      defaultChecked
                      className="h-4 w-4 accent-[#0b7a75]"
                    />
                  </label>
                ),
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
