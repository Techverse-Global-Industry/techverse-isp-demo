export default function ReportsPage() {
  return (
    <main className="space-y-6">
      <section className="card p-6">
        <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#0b7a75]">
          SLA monitoring
        </div>
        <h2 className="mt-2 text-3xl font-black tracking-tight">
          Service level performance
        </h2>
      </section>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {[
          ["Open Tickets", "37"],
          ["SLA Healthy", "92%"],
          ["SLA At Risk", "5"],
          ["SLA Breached", "3"],
        ].map(([label, value]) => (
          <div key={label} className="card p-5">
            <div className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
              {label}
            </div>
            <div className="mt-3 text-3xl font-black text-slate-900">
              {value}
            </div>
          </div>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="card p-6">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#0b7a75]">
            SLA performance
          </div>
          <div className="mt-5 flex items-end gap-4">
            <div className="text-5xl font-black text-slate-900">92%</div>
            <div className="pb-2 text-sm text-slate-500">
              Across all active support tickets
            </div>
          </div>
          <div className="mt-6 grid gap-3 text-sm text-slate-700">
            <div className="flex items-center justify-between rounded-xl bg-slate-50 p-3">
              <span>Average response time</span>
              <strong>18 min</strong>
            </div>
            <div className="flex items-center justify-between rounded-xl bg-slate-50 p-3">
              <span>Average resolution time</span>
              <strong>1h 42m</strong>
            </div>
            <div className="flex items-center justify-between rounded-xl bg-slate-50 p-3">
              <span>Tickets resolved within SLA</span>
              <strong>94%</strong>
            </div>
          </div>
        </div>

        <div className="card p-6">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#0b7a75]">
            Countdown indicators
          </div>
          <div className="mt-5 space-y-3">
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
              <div className="text-xs font-bold uppercase tracking-[0.1em] text-amber-800">
                Ticket TCK-2026-01842
              </div>
              <div className="mt-2 text-2xl font-black text-slate-900">
                01:32 remaining
              </div>
              <div className="mt-1 text-sm font-bold uppercase tracking-[0.1em] text-amber-800">
                SLA At Risk
              </div>
            </div>
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
              <div className="text-xs font-bold uppercase tracking-[0.1em] text-emerald-800">
                Ticket TCK-2026-01835
              </div>
              <div className="mt-2 text-2xl font-black text-slate-900">
                03:04 remaining
              </div>
              <div className="mt-1 text-sm font-bold uppercase tracking-[0.1em] text-emerald-800">
                SLA Healthy
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
