import Link from "next/link";
import { getTicketById } from "@/lib/demo-data";

export default function TicketDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return <TicketDetailContent params={params} />;
}

async function TicketDetailContent({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const ticket = getTicketById(id);

  if (!ticket) {
    return (
      <main className="card p-8">
        <h1 className="text-2xl font-black">Ticket not found</h1>
      </main>
    );
  }

  const timeline = [
    "Customer submitted outage report",
    "Ticket acknowledged",
    "Assigned to support agent",
    "Network diagnostics started",
    "Issue identified",
    "Customer service restored",
    "Ticket resolved",
  ];

  return (
    <main className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#0b7a75]">
            Support ticket
          </div>
          <h1 className="mt-2 text-3xl font-black">{ticket.id}</h1>
        </div>
        <div className="flex flex-wrap gap-2">
          <button className="btn btn-secondary text-sm">Assign</button>
          <button className="btn btn-primary text-sm">Resolve</button>
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
                <div className="text-xs text-slate-500">Customer</div>
                <div className="mt-1 font-bold text-slate-900">
                  {ticket.customer}
                </div>
              </div>
              <div>
                <div className="text-xs text-slate-500">Area</div>
                <div className="mt-1 font-bold text-slate-900">
                  {ticket.area}
                </div>
              </div>
              <div>
                <div className="text-xs text-slate-500">Priority</div>
                <div className="mt-1 font-bold text-slate-900">
                  {ticket.priority}
                </div>
              </div>
              <div>
                <div className="text-xs text-slate-500">Assigned agent</div>
                <div className="mt-1 font-bold text-slate-900">
                  {ticket.assignedTo}
                </div>
              </div>
            </div>
          </div>

          <div className="card p-6">
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#0b7a75]">
              Problem description
            </div>
            <p className="mt-4 text-base leading-7 text-slate-700">
              {ticket.summary}
            </p>
          </div>

          <div className="card p-6">
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#0b7a75]">
              Customer communication history
            </div>
            <div className="mt-4 space-y-3 text-sm text-slate-700">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                Customer reported intermittent connectivity and requested
                escalation after the previous router reboot.
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                Support agent confirmed the issue and requested a 15-minute
                validation window.
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="card p-6">
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#0b7a75]">
              Status & SLA
            </div>
            <div className="mt-5 space-y-4">
              <div className="rounded-xl bg-slate-50 p-3">
                <div className="text-xs text-slate-500">Status</div>
                <div className="mt-1 text-lg font-black text-slate-900">
                  {ticket.status}
                </div>
              </div>
              <div className="rounded-xl bg-slate-50 p-3">
                <div className="text-xs text-slate-500">SLA timer</div>
                <div className="mt-1 text-lg font-black text-slate-900">
                  {ticket.slaRemaining}
                </div>
                <div className="mt-1 text-xs font-bold uppercase tracking-[0.08em] text-amber-700">
                  {ticket.slaState}
                </div>
              </div>
            </div>
          </div>

          <div className="card p-6">
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#0b7a75]">
              Internal notes
            </div>
            <textarea
              className="input mt-4 min-h-24"
              defaultValue="Technician identified congestion on the access ring. Customer has been notified and waiting for confirmation."
            />
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr_.9fr]">
        <div className="card p-6">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#0b7a75]">
            Activity timeline
          </div>
          <div className="mt-5 space-y-4">
            {timeline.map((item, index) => (
              <div key={item} className="flex items-start gap-3">
                <div className="mt-1 h-2.5 w-2.5 rounded-full bg-[#0b7a75]" />
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.08em] text-slate-500">
                    09:{String(14 + index * 7).padStart(2, "0")}
                  </div>
                  <div className="mt-1 font-semibold text-slate-800">
                    {item}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-6">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#0b7a75]">
            Resolution
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              "Assign",
              "Escalate",
              "Change Priority",
              "Add Note",
              "Contact Customer",
              "Put On Hold",
              "Resolve",
              "Close",
            ].map((action) => (
              <button
                key={action}
                className="btn btn-secondary justify-start text-left"
              >
                {action}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="text-sm text-slate-500">
        <Link href="/operations/tickets" className="font-bold text-[#0b7a75]">
          ← Back to tickets
        </Link>
      </div>
    </main>
  );
}
