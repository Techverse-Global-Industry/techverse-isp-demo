import Link from "next/link";
import { tickets } from "@/lib/demo-data";

function slaTone(state: string) {
  if (state === "Healthy") return "bg-emerald-100 text-emerald-800";
  if (state === "At Risk") return "bg-amber-100 text-amber-800";
  return "bg-rose-100 text-rose-800";
}

export default function TicketsPage() {
  return (
    <main className="space-y-6">
      <section className="card p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#0b7a75]">
              Support ticket management
            </div>
            <h2 className="mt-2 text-3xl font-black tracking-tight">
              Active support tickets
            </h2>
          </div>
          <div className="flex flex-wrap gap-2 text-sm">
            <button className="rounded-lg border border-slate-200 bg-white px-3 py-2 font-semibold text-slate-700">
              All priorities
            </button>
            <button className="rounded-lg border border-slate-200 bg-white px-3 py-2 font-semibold text-slate-700">
              Open
            </button>
            <button className="rounded-lg border border-slate-200 bg-white px-3 py-2 font-semibold text-slate-700">
              Escalated
            </button>
          </div>
        </div>
      </section>

      <section className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                <th className="px-4 py-4 font-bold">Ticket ID</th>
                <th className="px-4 py-4 font-bold">Customer</th>
                <th className="px-4 py-4 font-bold">Issue</th>
                <th className="px-4 py-4 font-bold">Area</th>
                <th className="px-4 py-4 font-bold">Priority</th>
                <th className="px-4 py-4 font-bold">Assigned To</th>
                <th className="px-4 py-4 font-bold">Created</th>
                <th className="px-4 py-4 font-bold">SLA</th>
                <th className="px-4 py-4 font-bold">Status</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((ticket) => (
                <tr
                  key={ticket.id}
                  className="border-t border-slate-200 align-top"
                >
                  <td className="px-4 py-3 font-black text-slate-900">
                    <Link href={`/operations/tickets/${ticket.id}`}>
                      {ticket.id}
                    </Link>
                  </td>
                  <td className="px-4 py-3">{ticket.customer}</td>
                  <td className="px-4 py-3">{ticket.issue}</td>
                  <td className="px-4 py-3">{ticket.area}</td>
                  <td className="px-4 py-3">
                    <span className="rounded-full bg-amber-50 px-2 py-1 text-[10px] font-black uppercase tracking-[0.08em] text-amber-800">
                      {ticket.priority}
                    </span>
                  </td>
                  <td className="px-4 py-3">{ticket.assignedTo}</td>
                  <td className="px-4 py-3">{ticket.created}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex rounded-full px-2 py-1 text-[10px] font-black uppercase tracking-[0.08em] ${slaTone(ticket.slaState)}`}
                    >
                      {ticket.slaState}
                    </span>
                    <div className="mt-1 text-xs text-slate-500">
                      {ticket.slaRemaining}
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="rounded-full bg-sky-100 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.1em] text-sky-800">
                      {ticket.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
