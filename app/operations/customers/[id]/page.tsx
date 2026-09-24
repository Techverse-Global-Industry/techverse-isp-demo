import Link from "next/link";
import { getCustomerById } from "@/lib/demo-data";

export default function CustomerDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return <CustomerDetailContent params={params} />;
}

async function CustomerDetailContent({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const customer = getCustomerById(id);

  if (!customer) {
    return (
      <main className="card p-8">
        <h1 className="text-2xl font-black">Customer not found</h1>
      </main>
    );
  }

  return (
    <main className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#0b7a75]">
            Customer profile
          </div>
          <h1 className="mt-2 text-3xl font-black">{customer.name}</h1>
        </div>
        <span className="rounded-full bg-emerald-100 px-3 py-1.5 text-xs font-black uppercase tracking-[0.12em] text-emerald-800">
          {customer.status}
        </span>
      </div>

      <section className="grid gap-6 xl:grid-cols-[1.1fr_.9fr]">
        <div className="card p-6">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#0b7a75]">
            Customer information
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div>
              <div className="text-xs text-slate-500">Company</div>
              <div className="mt-1 font-bold text-slate-900">
                {customer.company}
              </div>
            </div>
            <div>
              <div className="text-xs text-slate-500">Phone</div>
              <div className="mt-1 font-bold text-slate-900">
                {customer.phone}
              </div>
            </div>
            <div>
              <div className="text-xs text-slate-500">Email</div>
              <div className="mt-1 font-bold text-slate-900">
                {customer.email}
              </div>
            </div>
            <div>
              <div className="text-xs text-slate-500">Service plan</div>
              <div className="mt-1 font-bold text-slate-900">
                {customer.plan}
              </div>
            </div>
            <div className="sm:col-span-2">
              <div className="text-xs text-slate-500">Address</div>
              <div className="mt-1 font-bold text-slate-900">
                {customer.address}
              </div>
            </div>
          </div>
        </div>

        <div className="card p-6">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#0b7a75]">
            Service summary
          </div>
          <div className="mt-5 space-y-3 text-sm">
            <div className="rounded-xl bg-slate-50 p-3">
              <span className="font-bold text-slate-900">Location:</span>{" "}
              {customer.area}
            </div>
            <div className="rounded-xl bg-slate-50 p-3">
              <span className="font-bold text-slate-900">Open tickets:</span>{" "}
              {customer.openTickets}
            </div>
            <div className="rounded-xl bg-slate-50 p-3">
              <span className="font-bold text-slate-900">Installations:</span>{" "}
              {customer.installations}
            </div>
            <div className="rounded-xl bg-slate-50 p-3">
              <span className="font-bold text-slate-900">Billing summary:</span>{" "}
              Next invoice due 05 Oct · ₦45,000
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <div className="card p-6">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#0b7a75]">
            Installation
          </div>
          <div className="mt-3 text-lg font-black">INS-2026-00419</div>
          <div className="mt-2 text-sm text-slate-600">
            Business Max 100 Mbps · scheduled for 24 Sep
          </div>
        </div>
        <div className="card p-6">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#0b7a75]">
            Support tickets
          </div>
          <div className="mt-3 text-lg font-black">2 open</div>
          <div className="mt-2 text-sm text-slate-600">
            Internet unavailable · VPN latency
          </div>
        </div>
        <div className="card p-6">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#0b7a75]">
            Activity
          </div>
          <div className="mt-3 text-lg font-black">Last 30 days</div>
          <div className="mt-2 text-sm text-slate-600">
            7 service events · 2 escalations · 1 resolution
          </div>
        </div>
      </section>

      <div className="text-sm text-slate-500">
        <Link href="/operations/customers" className="font-bold text-[#0b7a75]">
          ← Back to customers
        </Link>
      </div>
    </main>
  );
}
