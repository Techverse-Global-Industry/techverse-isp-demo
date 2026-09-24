import Link from "next/link";
import { technicians } from "@/lib/demo-data";

export default function TechniciansPage() {
  return (
    <main className="space-y-6">
      <section className="card p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#0b7a75]">
              Technician management
            </div>
            <h2 className="mt-2 text-3xl font-black tracking-tight">
              Field operations team
            </h2>
          </div>
          <div className="flex flex-wrap gap-2 text-sm">
            <button className="rounded-lg border border-slate-200 bg-white px-3 py-2 font-semibold text-slate-700">
              All regions
            </button>
            <button className="rounded-lg border border-slate-200 bg-white px-3 py-2 font-semibold text-slate-700">
              Available
            </button>
          </div>
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {technicians.map((tech) => (
          <Link
            key={tech.id}
            href={`/operations/technicians/${tech.id}`}
            className="card p-5 transition hover:-translate-y-0.5"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-full bg-[#10202f] text-sm font-black text-white">
                {tech.name.split(" ")[0][0]}
                {tech.name.split(" ")[1]?.[0] ?? ""}
              </div>
              <span
                className={`rounded-full px-2 py-1 text-[10px] font-black uppercase tracking-[0.1em] ${tech.status === "Available" ? "bg-emerald-100 text-emerald-800" : tech.status === "On Job" ? "bg-amber-100 text-amber-800" : tech.status === "Offline" ? "bg-slate-200 text-slate-700" : "bg-violet-100 text-violet-800"}`}
              >
                {tech.status}
              </span>
            </div>
            <h3 className="mt-4 text-xl font-black text-slate-900">
              {tech.name}
            </h3>
            <div className="mt-1 text-sm text-slate-500">
              Region: {tech.region}
            </div>
            <div className="mt-4 space-y-2 text-sm text-slate-600">
              <div>
                <span className="font-bold text-slate-900">Open jobs:</span>{" "}
                {tech.openJobs}
              </div>
              <div>
                <span className="font-bold text-slate-900">Today:</span>{" "}
                {tech.todaysJobs}
              </div>
              <div>
                <span className="font-bold text-slate-900">
                  Completion rate:
                </span>{" "}
                {tech.completionRate}
              </div>
              <div>
                <span className="font-bold text-slate-900">
                  Avg resolution:
                </span>{" "}
                {tech.avgResolution}
              </div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
