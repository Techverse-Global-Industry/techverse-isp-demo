import Link from "next/link";
import { customers } from "@/lib/demo-data";

export default function CustomersPage() {
  return (
    <main className="space-y-6">
      <section className="card p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#0b7a75]">
              Customer management
            </div>
            <h2 className="mt-2 text-3xl font-black tracking-tight">
              Customer directory
            </h2>
          </div>
          <div className="min-w-[220px] rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500">
            Search customer
          </div>
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {customers.map((customer) => (
          <Link
            key={customer.id}
            href={`/operations/customers/${customer.id}`}
            className="card p-5 transition hover:-translate-y-0.5"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                  {customer.company}
                </div>
                <h3 className="mt-2 text-xl font-black text-slate-900">
                  {customer.name}
                </h3>
              </div>
              <span className="rounded-full bg-emerald-100 px-2 py-1 text-[10px] font-black uppercase tracking-[0.1em] text-emerald-800">
                {customer.status}
              </span>
            </div>
            <div className="mt-4 space-y-2 text-sm text-slate-600">
              <div>
                <span className="font-bold text-slate-900">Plan:</span>{" "}
                {customer.plan}
              </div>
              <div>
                <span className="font-bold text-slate-900">Location:</span>{" "}
                {customer.area}
              </div>
              <div>
                <span className="font-bold text-slate-900">Open tickets:</span>{" "}
                {customer.openTickets}
              </div>
              <div>
                <span className="font-bold text-slate-900">Installations:</span>{" "}
                {customer.installations}
              </div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
