import Link from "next/link";
import { installations } from "@/lib/demo-data";

export default function InstallationsPage() {
  return (
    <main className="space-y-6">
      <section className="card p-6">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#0b7a75]">
              Installation management
            </div>
            <h2 className="mt-2 text-3xl font-black tracking-tight">
              Installation requests
            </h2>
          </div>
          <div className="flex flex-wrap gap-2 text-sm">
            <button
              type="button"
              className="rounded-lg border border-slate-200 bg-white px-3 py-2 font-semibold text-slate-700"
            >
              All areas
            </button>
            <button
              type="button"
              className="rounded-lg border border-slate-200 bg-white px-3 py-2 font-semibold text-slate-700"
            >
              Package
            </button>
            <button
              type="button"
              className="rounded-lg border border-slate-200 bg-white px-3 py-2 font-semibold text-slate-700"
            >
              Priority
            </button>
            <button
              type="button"
              className="rounded-lg border border-slate-200 bg-white px-3 py-2 font-semibold text-slate-700"
            >
              Technician
            </button>
          </div>
        </div>
      </section>

      <section className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                <th className="px-4 py-4 font-bold">Request ID</th>
                <th className="px-4 py-4 font-bold">Customer</th>
                <th className="px-4 py-4 font-bold">Area</th>
                <th className="px-4 py-4 font-bold">Plan</th>
                <th className="px-4 py-4 font-bold">Requested</th>
                <th className="px-4 py-4 font-bold">Priority</th>
                <th className="px-4 py-4 font-bold">Tech</th>
                <th className="px-4 py-4 font-bold">Status</th>
              </tr>
            </thead>
            <tbody>
              {installations.map((item) => (
                <tr
                  key={item.id}
                  className="border-t border-slate-200 align-top"
                >
                  <td className="px-4 py-3 font-black text-slate-900">
                    <Link href={`/operations/installations/${item.id}`}>
                      {item.id}
                    </Link>
                  </td>
                  <td className="px-4 py-3">
                    <div className="font-semibold text-slate-800">
                      {item.customer}
                    </div>
                    <div className="text-xs text-slate-500">{item.phone}</div>
                  </td>
                  <td className="px-4 py-3">{item.area}</td>
                  <td className="px-4 py-3">{item.plan}</td>
                  <td className="px-4 py-3">{item.requestedDate}</td>
                  <td className="px-4 py-3">
                    <span className="rounded-full bg-amber-50 px-2 py-1 text-[10px] font-black uppercase tracking-[0.08em] text-amber-800">
                      {item.priority}
                    </span>
                  </td>
                  <td className="px-4 py-3">{item.technician}</td>
                  <td className="px-4 py-3">
                    <span className="rounded-full bg-sky-100 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.1em] text-sky-800">
                      {item.status}
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
