import Link from "next/link";
import { getInstallationById } from "@/lib/demo-data";

export default function InstallationDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return <InstallationDetailContent params={params} />;
}

async function InstallationDetailContent({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const installation = getInstallationById(id);

  if (!installation) {
    return (
      <main className="card p-8">
        <h1 className="text-2xl font-black">Installation not found</h1>
      </main>
    );
  }

  const stages = [
    "Request received",
    "Request reviewed",
    "Technician assigned",
    "Visit scheduled",
    "Installation in progress",
    "Installation completed",
    "Customer activated",
  ];

  const currentStageIndex = stages.indexOf(installation.stage);

  return (
    <main className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#0b7a75]">
            Installation record
          </div>
          <h1 className="mt-2 text-3xl font-black">{installation.id}</h1>
        </div>
        <div className="flex flex-wrap gap-2">
          <button type="button" className="btn btn-secondary text-sm">
            Assign Technician
          </button>
          <button type="button" className="btn btn-primary text-sm">
            Mark In Progress
          </button>
        </div>
      </div>

      <section className="grid gap-6 xl:grid-cols-[1.1fr_.9fr]">
        <div className="space-y-6">
          <div className="card p-6">
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#0b7a75]">
              Customer information
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div>
                <div className="text-xs text-slate-500">Name</div>
                <div className="mt-1 font-bold text-slate-900">
                  {installation.customer}
                </div>
              </div>
              <div>
                <div className="text-xs text-slate-500">Phone</div>
                <div className="mt-1 font-bold text-slate-900">
                  {installation.phone}
                </div>
              </div>
              <div>
                <div className="text-xs text-slate-500">Email</div>
                <div className="mt-1 font-bold text-slate-900">
                  {installation.email}
                </div>
              </div>
              <div>
                <div className="text-xs text-slate-500">Business</div>
                <div className="mt-1 font-bold text-slate-900">
                  {installation.business}
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="text-xs text-slate-500">Address</div>
                <div className="mt-1 font-bold text-slate-900">
                  {installation.address}
                </div>
              </div>
              <div>
                <div className="text-xs text-slate-500">Area</div>
                <div className="mt-1 font-bold text-slate-900">
                  {installation.area}
                </div>
              </div>
            </div>
          </div>

          <div className="card p-6">
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#0b7a75]">
              Service requested
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div>
                <div className="text-xs text-slate-500">Plan</div>
                <div className="mt-1 font-bold text-slate-900">
                  {installation.plan}
                </div>
              </div>
              <div>
                <div className="text-xs text-slate-500">Installation type</div>
                <div className="mt-1 font-bold text-slate-900">
                  {installation.installationType}
                </div>
              </div>
              <div>
                <div className="text-xs text-slate-500">Requested date</div>
                <div className="mt-1 font-bold text-slate-900">
                  {installation.requestedDate}
                </div>
              </div>
              <div>
                <div className="text-xs text-slate-500">Priority</div>
                <div className="mt-1 font-bold text-slate-900">
                  {installation.priority}
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="text-xs text-slate-500">
                  Special requirements
                </div>
                <div className="mt-1 font-bold text-slate-900">
                  {installation.specialRequirements}
                </div>
              </div>
            </div>
          </div>

          <div className="card p-6">
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#0b7a75]">
              Operational status
            </div>
            <div className="mt-5 flex flex-col gap-3">
              {stages.map((stage, index) => (
                <div key={stage} className="flex items-center gap-3">
                  <div
                    className={`grid h-8 w-8 place-items-center rounded-full text-xs font-black ${index <= currentStageIndex ? "bg-[#0b7a75] text-white" : "bg-slate-200 text-slate-600"}`}
                  >
                    {index + 1}
                  </div>
                  <div
                    className={`flex-1 rounded-xl border px-3 py-2 text-sm font-semibold ${index <= currentStageIndex ? "border-[#0b7a75] bg-[#e8f5f2] text-[#075d59]" : "border-slate-200 bg-slate-50 text-slate-600"}`}
                  >
                    {stage}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="card p-6">
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#0b7a75]">
              Assignment panel
            </div>
            <div className="mt-5 space-y-4 text-sm">
              <div>
                <label className="mb-1 block text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                  Technician
                </label>
                <select
                  className="input"
                  defaultValue={installation.technician}
                >
                  <option>{installation.technician}</option>
                  <option>Jean K.</option>
                  <option>Fatou D.</option>
                  <option>Moussa A.</option>
                </select>
              </div>
              <div>
                <label className="mb-1 block text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                  Team
                </label>
                <select className="input" defaultValue={installation.team}>
                  <option>{installation.team}</option>
                  <option>Fiber Deployment A</option>
                  <option>Fiber Deployment B</option>
                  <option>Business Line Team</option>
                </select>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                    Scheduled date
                  </label>
                  <input className="input" defaultValue="24 September 2026" />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                    Scheduled time
                  </label>
                  <input className="input" defaultValue="08:30" />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                  Priority
                </label>
                <select className="input" defaultValue={installation.priority}>
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                  <option>Critical</option>
                </select>
              </div>
              <button type="button" className="btn btn-primary w-full">
                Assign Technician
              </button>
            </div>
          </div>

          <div className="card p-6">
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#0b7a75]">
              Internal notes
            </div>
            <div className="mt-4 space-y-3">
              {installation.notes.map((note, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700"
                >
                  <div className="font-semibold text-slate-900">
                    Operations team
                  </div>
                  <div className="mt-1">{note}</div>
                </div>
              ))}
            </div>
            <textarea
              className="input mt-4 min-h-24"
              placeholder="Add internal note…"
            />
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr_.9fr]">
        <div className="card p-6">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#0b7a75]">
            Activity history
          </div>
          <div className="mt-4 space-y-4">
            {installation.activity.map((item) => (
              <div key={item.time} className="flex items-start gap-3">
                <div className="mt-1 h-2.5 w-2.5 rounded-full bg-[#0b7a75]" />
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.08em] text-slate-500">
                    {item.time}
                  </div>
                  <div className="mt-1 font-semibold text-slate-800">
                    {item.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-6">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#0b7a75]">
            Actions
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              "Assign Technician",
              "Reschedule",
              "Change Priority",
              "Contact Customer",
              "Mark In Progress",
              "Mark Completed",
              "Cancel Request",
            ].map((action) => (
              <button
                key={action}
                type="button"
                className="btn btn-secondary justify-start text-left"
              >
                {action}
              </button>
            ))}
          </div>
          <div className="mt-5 rounded-xl bg-slate-50 p-4 text-sm text-slate-600">
            <strong className="text-slate-900">Current status:</strong>{" "}
            {installation.status}
          </div>
        </div>
      </section>

      <div className="text-sm text-slate-500">
        <Link
          href="/operations/installations"
          className="font-bold text-[#0b7a75]"
        >
          ← Back to installations
        </Link>
      </div>
    </main>
  );
}
