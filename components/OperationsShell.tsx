"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  ["Overview", "/operations"],
  ["Installations", "/operations/installations"],
  ["Tickets", "/operations/tickets"],
  ["Customers", "/operations/customers"],
  ["Technicians", "/operations/technicians"],
  ["Map", "/operations/map"],
  ["Network", "/operations/network"],
  ["Reports", "/operations/reports"],
  ["Settings", "/operations/settings"],
] as const;

export function DemoModeControls() {
  const [reset, setReset] = useState(false);

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em] text-amber-800">
        DEMO MODE
      </span>
      <button
        type="button"
        onClick={() => {
          setReset(true);
          setTimeout(() => setReset(false), 1800);
        }}
        className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-700 transition hover:border-[#0b7a75] hover:text-[#0b7a75]"
      >
        Reset Demo Data
      </button>
      {reset ? (
        <span className="text-xs font-semibold text-emerald-700">
          Demo data refreshed
        </span>
      ) : null}
    </div>
  );
}

export function OperationsShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="section-shell flex flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center justify-between gap-4">
            <Link href="/operations" className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#0b7a75] text-sm font-black text-white">
                TV
              </div>
              <div>
                <div className="text-lg font-black tracking-tight text-slate-900">
                  TechVerse
                </div>
                <div className="text-xs text-slate-500">ISP Operations</div>
              </div>
            </Link>
            <span className="rounded-full bg-slate-100 px-2 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-slate-600">
              DEMO
            </span>
          </div>

          <div className="flex flex-1 items-center justify-end gap-3">
            <div className="hidden min-w-[220px] items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500 md:flex">
              <span>⌕</span>
              <span>Search customer, ticket, technician</span>
            </div>
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white text-lg text-slate-600"
            >
              🔔
            </button>
            <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-2 py-2">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-[#10202f] text-xs font-black text-white">
                OM
              </div>
              <div className="hidden text-left md:block">
                <div className="text-sm font-bold text-slate-900">
                  Operations Manager
                </div>
                <div className="text-[11px] text-slate-500">
                  Staff dashboard
                </div>
              </div>
            </div>
            <Link
              href="/"
              className="btn btn-secondary hidden text-sm md:inline-flex"
            >
              Customer View
            </Link>
          </div>
        </div>
      </header>

      <div className="section-shell py-6">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#0b7a75]">
              Operations
            </div>
            <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-900">
              ISP Operations
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <DemoModeControls />
          </div>
        </div>

        <nav className="mb-8 flex flex-wrap gap-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
          {navItems.map(([label, href]) => {
            const active =
              pathname === href ||
              (href !== "/operations" && pathname.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                className={`rounded-xl px-3 py-2 text-sm font-semibold transition ${
                  active
                    ? "bg-[#e8f5f2] text-[#075d59]"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {children}
      </div>
    </div>
  );
}
