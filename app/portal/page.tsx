"use client";

import { useState } from "react";
import Link from "next/link";
import { SectionTitle } from "@/components/SectionTitle";

export default function PortalPage() {
  const [action, setAction] = useState("");

  const act = (x: string) => {
    setAction(x);
    setTimeout(() => setAction(""), 2500);
  };

  return (
    <main className="section-shell py-14">
      <SectionTitle
        eyebrow="Customer portal"
        title="One place for the customer relationship after installation"
        text="This concept can become a full self-service account once connected to billing, network and CRM systems."
      />

      <div className="mt-10 grid gap-5 md:grid-cols-4">
        <div className="card p-5">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Plan
          </div>
          <div className="mt-3 text-2xl font-black">Business Pro</div>
          <div className="mt-1 text-sm text-slate-500">50 Mbps · active</div>
        </div>
        <div className="card p-5">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Next bill
          </div>
          <div className="mt-3 text-2xl font-black">₦45,000</div>
          <div className="mt-1 text-sm text-slate-500">Due 05 Oct · demo</div>
        </div>
        <div className="card p-5">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Service
          </div>
          <div className="mt-3 flex items-center gap-2 text-2xl font-black">
            <span className="h-3 w-3 rounded-full bg-emerald-500" />
            Live
          </div>
          <div className="mt-1 text-sm text-slate-500">No active outage</div>
        </div>
        <div className="card p-5">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Support
          </div>
          <div className="mt-3 text-2xl font-black">1 open</div>
          <div className="mt-1 text-sm text-slate-500">Ticket #BN-10429</div>
        </div>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-[1.2fr_.8fr]">
        <div className="card p-7">
          <h3 className="text-xl font-black">Quick actions</h3>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <button
              className="btn btn-secondary justify-start"
              onClick={() => act("Upgrade flow opened")}
            >
              ↗ Upgrade plan
            </button>
            <button
              className="btn btn-secondary justify-start"
              onClick={() => act("Invoice download started")}
            >
              ↓ Download invoice
            </button>
            <button
              className="btn btn-secondary justify-start"
              onClick={() => act("Support flow opened")}
            >
              ⚑ Report an outage
            </button>
            <button
              className="btn btn-secondary justify-start"
              onClick={() => act("Payment flow opened")}
            >
              💳 Manage billing
            </button>
          </div>

          {action ? (
            <div className="mt-5 rounded-xl bg-slate-50 p-3 text-sm text-slate-700">
              {action}
            </div>
          ) : null}

          <div className="mt-5 rounded-xl border border-[#0b7a75]/20 bg-[#e8f5f2] p-4">
            <div className="text-xs font-bold uppercase tracking-[0.12em] text-[#0b7a75]">
              Customer Platform → Staff Operations Demo
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              This is the handoff point where customer activity moves into the
              ISP command center for service coordination, technician dispatch
              and support follow-through.
            </p>
            <Link
              href="/operations"
              className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-[#075d59]"
            >
              Open the operations dashboard →
            </Link>
          </div>
        </div>

        <div className="card p-7">
          <h3 className="text-xl font-black">Live status</h3>
          <div className="mt-5 space-y-4">
            <div className="rounded-xl bg-slate-50 p-4">
              <div className="text-xs text-slate-500">Installation request</div>
              <div className="mt-1 flex items-center justify-between">
                <span className="font-bold text-slate-900">
                  New request created
                </span>
                <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-bold text-emerald-800">
                  Assigned
                </span>
              </div>
            </div>
            <div className="rounded-xl bg-slate-50 p-4">
              <div className="text-xs text-slate-500">Customer notice</div>
              <div className="mt-1 text-sm text-slate-700">
                A field technician is scheduled for 24 September at 08:30.
              </div>
            </div>
            <div className="rounded-xl bg-slate-50 p-4">
              <div className="text-xs text-slate-500">Support ticket</div>
              <div className="mt-1 text-sm text-slate-700">
                #BN-10429 was acknowledged and routed to operations.
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
