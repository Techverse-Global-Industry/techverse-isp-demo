import Link from "next/link";
import { installations, operationsOverview, tickets } from "@/lib/demo-data";

const installationQueue = installations.slice(0, 5);
const supportQueue = tickets.slice(0, 6);

function StatusPill({ status }: { status: string }) {
  const tone =
    status === "NEW" ||
    status === "NEW" ||
    status === "OPEN" ||
    status === "REVIEWING"
      ? "bg-sky-100 text-sky-800"
      : status === "SCHEDULED" ||
          status === "ASSIGNED" ||
          status === "ACKNOWLEDGED" ||
          status === "IN PROGRESS" ||
          status === "INVESTIGATING"
        ? "bg-amber-100 text-amber-800"
        : status === "COMPLETED" || status === "RESOLVED" || status === "CLOSED"
          ? "bg-emerald-100 text-emerald-800"
          : "bg-slate-200 text-slate-700";

  return (
    <span
      className={`rounded-full px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.12em] ${tone}`}
    >
      {status}
    </span>
  );
}

export default function OperationsPage() {
  return (
    <main className="space-y-8">
      <section className="card p-6">
        <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#0b7a75]">
          End-to-end ISP operations
        </div>
        <h1 className="mt-3 text-3xl font-black tracking-[-0.03em] text-slate-900 md:text-4xl">
          Service command center for a faster, more visible internet experience.
        </h1>
        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
          TechVerse can move from customer request to installation, ticket
          resolution and network visibility in one workflow—giving frontline
          teams a single place to monitor service health, field readiness and
          SLA risk.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {operationsOverview.map((item) => (
          <div key={item.label} className="card p-5">
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
              {item.label}
            </div>
            <div className="mt-3 kpi text-[#10202f]">{item.value}</div>
          </div>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.3fr_.7fr]">
        <div className="card p-6">
          <div className="flex items-center justify-between gap-3">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#0b7a75]">
                Installation queue
              </div>
              <h2 className="mt-2 text-2xl font-black">Pending field work</h2>
            </div>
            <Link
              href="/operations/installations"
              className="text-sm font-bold text-[#0b7a75]"
            >
              View all
            </Link>
          </div>

          <div className="mt-5 overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="text-slate-500">
                <tr>
                  <th className="pb-3 pr-4 font-bold">Request ID</th>
                  <th className="pb-3 pr-4 font-bold">Customer</th>
                  <th className="pb-3 pr-4 font-bold">Area</th>
                  <th className="pb-3 pr-4 font-bold">Plan</th>
                  <th className="pb-3 pr-4 font-bold">Requested</th>
                  <th className="pb-3 pr-4 font-bold">Priority</th>
                  <th className="pb-3 pr-4 font-bold">Technician</th>
                  <th className="pb-3 font-bold">Status</th>
                </tr>
              </thead>
              <tbody>
                {installationQueue.map((item) => (
                  <tr
                    key={item.id}
                    className="border-t border-slate-200 align-top"
                  >
                    <td className="py-3 pr-4 font-bold text-slate-800">
                      <Link href={`/operations/installations/${item.id}`}>
                        {item.id}
                      </Link>
                    </td>
                    <td className="py-3 pr-4">{item.customer}</td>
                    <td className="py-3 pr-4">{item.area}</td>
                    <td className="py-3 pr-4">{item.plan}</td>
                    <td className="py-3 pr-4">{item.requestedDate}</td>
                    <td className="py-3 pr-4">
                      <span className="rounded-full bg-amber-50 px-2 py-1 text-[10px] font-black uppercase tracking-[0.08em] text-amber-800">
                        {item.priority}
                      </span>
                    </td>
                    <td className="py-3 pr-4">{item.technician}</td>
                    <td className="py-3">
                      <StatusPill status={item.status.toUpperCase()} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-6">
          <div className="card p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#0b7a75]">
                  SLA monitoring
                </div>
                <h3 className="mt-2 text-2xl font-black">Performance pulse</h3>
              </div>
            </div>
            <div className="mt-5 space-y-4">
              {[
                ["Open Tickets", "37"],
                ["SLA Healthy", "82%"],
                ["SLA At Risk", "5"],
                ["SLA Breached", "3"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-3"
                >
                  <span className="text-sm text-slate-600">{label}</span>
                  <strong className="text-lg font-black text-slate-900">
                    {value}
                  </strong>
                </div>
              ))}
            </div>
          </div>

          <div className="card p-6">
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#0b7a75]">
              Support queue
            </div>
            <div className="mt-4 space-y-3">
              {supportQueue.map((ticket) => (
                <div
                  key={ticket.id}
                  className="rounded-xl border border-slate-200 p-3"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="font-black text-slate-900">
                        {ticket.id}
                      </div>
                      <div className="text-xs text-slate-500">
                        {ticket.customer}
                      </div>
                    </div>
                    <StatusPill status={ticket.status} />
                  </div>
                  <div className="mt-2 flex items-center justify-between text-xs text-slate-500">
                    <span>{ticket.issue}</span>
                    <span>{ticket.slaRemaining}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
