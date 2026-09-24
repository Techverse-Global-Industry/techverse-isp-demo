import Link from "next/link";
import { getTechnicianById } from "@/lib/demo-data";

export default function TechnicianDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return <TechnicianDetailContent params={params} />;
}

async function TechnicianDetailContent({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const technician = getTechnicianById(id);

  if (!technician) {
    return (
      <main className="card p-8">
        <h1 className="text-2xl font-black">Technician not found</h1>
      </main>
    );
  }

  return (
    <main className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#0b7a75]">
            Technician profile
          </div>
          <h1 className="mt-2 text-3xl font-black">{technician.name}</h1>
        </div>
        <span className="rounded-full bg-amber-100 px-3 py-1.5 text-xs font-black uppercase tracking-[0.12em] text-amber-800">
          {technician.status}
        </span>
      </div>

      <section className="grid gap-6 xl:grid-cols-[1.1fr_.9fr]">
        <div className="card p-6">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#0b7a75]">
            Current assignments
          </div>
          <div className="mt-5 space-y-3">
            <div className="rounded-xl bg-slate-50 p-3">
              INS-2026-00419 · Koffi Agbodji · Business Max 100 Mbps
            </div>
            <div className="rounded-xl bg-slate-50 p-3">
              INS-2026-00326 · Grace Alassani · Residential installation
            </div>
          </div>
        </div>

        <div className="card p-6">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#0b7a75]">
            Performance summary
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl bg-slate-50 p-3">
              <div className="text-xs text-slate-500">Completion rate</div>
              <div className="mt-1 text-xl font-black">
                {technician.completionRate}
              </div>
            </div>
            <div className="rounded-xl bg-slate-50 p-3">
              <div className="text-xs text-slate-500">Avg resolution</div>
              <div className="mt-1 text-xl font-black">
                {technician.avgResolution}
              </div>
            </div>
            <div className="rounded-xl bg-slate-50 p-3">
              <div className="text-xs text-slate-500">Open jobs</div>
              <div className="mt-1 text-xl font-black">
                {technician.openJobs}
              </div>
            </div>
            <div className="rounded-xl bg-slate-50 p-3">
              <div className="text-xs text-slate-500">Today</div>
              <div className="mt-1 text-xl font-black">
                {technician.todaysJobs}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <div className="card p-6">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#0b7a75]">
            Service areas
          </div>
          <div className="mt-4 space-y-2 text-sm text-slate-700">
            <div>Abomey-Calavi</div>
            <div>Cotonou</div>
            <div>Dangbo</div>
          </div>
        </div>
        <div className="card p-6">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#0b7a75]">
            Contact
          </div>
          <div className="mt-4 space-y-2 text-sm text-slate-700">
            <div>+229 61 44 18 08</div>
            <div>jean.k@techverse-demo.bj</div>
          </div>
        </div>
        <div className="card p-6">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#0b7a75]">
            Availability
          </div>
          <div className="mt-4 text-sm text-slate-700">
            Available from 08:00 to 17:00 · On-site rotation active
          </div>
        </div>
      </section>

      <div className="text-sm text-slate-500">
        <Link
          href="/operations/technicians"
          className="font-bold text-[#0b7a75]"
        >
          ← Back to technicians
        </Link>
      </div>
    </main>
  );
}
