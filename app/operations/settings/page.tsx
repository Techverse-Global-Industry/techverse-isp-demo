export default function SettingsPage() {
  return (
    <main className="space-y-6">
      <section className="card p-6">
        <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#0b7a75]">
          Operations settings
        </div>
        <h2 className="mt-2 text-3xl font-black tracking-tight">
          Operational preferences
        </h2>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="card p-6">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#0b7a75]">
            Routing
          </div>
          <div className="mt-5 space-y-3 text-sm text-slate-700">
            <div className="flex items-center justify-between rounded-xl bg-slate-50 p-3">
              <span>Auto-assign tickets</span>
              <strong>Enabled</strong>
            </div>
            <div className="flex items-center justify-between rounded-xl bg-slate-50 p-3">
              <span>Priority escalation</span>
              <strong>Active</strong>
            </div>
            <div className="flex items-center justify-between rounded-xl bg-slate-50 p-3">
              <span>Customer updates</span>
              <strong>Triggered</strong>
            </div>
          </div>
        </div>

        <div className="card p-6">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#0b7a75]">
            Field teams
          </div>
          <div className="mt-5 space-y-3 text-sm text-slate-700">
            <div className="flex items-center justify-between rounded-xl bg-slate-50 p-3">
              <span>Fiber deployment</span>
              <strong>4 teams</strong>
            </div>
            <div className="flex items-center justify-between rounded-xl bg-slate-50 p-3">
              <span>Business lines</span>
              <strong>2 teams</strong>
            </div>
            <div className="flex items-center justify-between rounded-xl bg-slate-50 p-3">
              <span>Network support</span>
              <strong>3 squads</strong>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
