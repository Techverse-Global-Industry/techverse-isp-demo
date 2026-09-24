import Link from "next/link";
import { PlanCard } from "@/components/PlanCard";
import { SectionTitle } from "@/components/SectionTitle";

const stats = [
  ["Coverage", "7 service areas", "illustrative"],
  ["Support", "24/7 ticket intake", "demo workflow"],
  ["Payments", "Online-ready", "integration point"],
  ["Business", "Multi-branch portal", "demo capability"],
];

export default function Home() {
  return (
    <main>
      <section className="hero-grid border-b border-slate-200">
        <div className="section-shell grid gap-10 py-16 md:grid-cols-[1.05fr_.95fr] md:items-center md:py-24">
          <div>
            <span className="pill">Concept demo for an ISP</span>
            <h1 className="mt-5 max-w-3xl text-5xl font-black leading-[1.02] tracking-[-.04em] md:text-6xl">
              Make internet service easier to discover, buy and support.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              A complete ISP experience for the customer journey—from discovery
              and plan selection to installation, service visibility, and
              support—plus a staff operations layer that keeps the back office
              aligned in real time.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/plans" className="btn btn-primary">
                Explore plans
              </Link>
              <Link href="/coverage" className="btn btn-secondary">
                Check coverage
              </Link>
              <Link href="/portal" className="btn btn-secondary">
                Customer Platform
              </Link>
              <Link href="/operations" className="btn btn-secondary">
                Staff Operations Demo
              </Link>
            </div>
            <div className="mt-7 text-xs text-slate-500">
              Demo note: this concept showcases a fictional TechVerse digital
              experience for pitch purposes. Plans, coverage, SLAs and service
              workflows are illustrative and designed to convey the product
              story.
            </div>
          </div>
          <div className="card overflow-hidden p-4 md:p-5">
            <div className="rounded-2xl bg-[#10202f] p-6 text-white">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-slate-300">
                  Customer portal preview
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs">
                  Live concept
                </span>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-white/10 p-4">
                  <div className="text-xs text-slate-300">Current plan</div>
                  <div className="mt-2 text-lg font-bold">Business Pro</div>
                  <div className="mt-1 text-2xl font-black">50 Mbps</div>
                </div>
                <div className="rounded-xl bg-white/10 p-4">
                  <div className="text-xs text-slate-300">Service status</div>
                  <div className="mt-2 flex items-center gap-2 font-bold">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    Operational
                  </div>
                  <div className="mt-1 text-xs text-slate-300">
                    Last checked 10:42
                  </div>
                </div>
                <div className="col-span-2 rounded-xl bg-white p-4 text-[#10202f]">
                  <div className="flex items-center justify-between">
                    <span className="font-bold">Open support ticket</span>
                    <span className="rounded bg-amber-100 px-2 py-1 text-xs font-bold text-amber-800">
                      #BN-10429
                    </span>
                  </div>
                  <div className="mt-3 text-sm text-slate-600">
                    Connectivity issue · Assigned to field support · ETA 45 min
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-14">
        <div className="grid gap-4 md:grid-cols-4">
          {stats.map(([title, value, note]) => (
            <div key={title} className="card p-5">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                {title}
              </div>
              <div className="mt-3 text-xl font-black">{value}</div>
              <div className="mt-1 text-xs text-slate-400">{note}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell py-14">
        <SectionTitle
          eyebrow="Customer acquisition"
          title="From discovering a plan to becoming a customer"
          text="The demo keeps the first journey simple: compare plans, check serviceability, request installation, then manage the relationship online."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            [
              "01",
              "Explore",
              "Customers can compare residential and business packages without calling support.",
            ],
            [
              "02",
              "Check",
              "A coverage checker makes the serviceability question visible before installation.",
            ],
            [
              "03",
              "Convert",
              "A guided installation request captures the information an operations team needs.",
            ],
          ].map(([n, t, d]) => (
            <div className="card p-6" key={n}>
              <div className="text-sm font-black text-[#0b7a75]">{n}</div>
              <h3 className="mt-3 text-xl font-black">{t}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell py-14">
        <SectionTitle
          eyebrow="Illustrative packages"
          title="Simple plans for the pitch"
          text="Use these as placeholders to demonstrate the product experience. Replace with the ISP's actual tariffs after discovery."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <PlanCard
            name="Home Plus"
            speed="20 Mbps"
            price="₦18,000"
            tag="Home"
            features={[
              "Unlimited browsing",
              "Standard support",
              "Wi‑Fi installation",
            ]}
          />
          <PlanCard
            name="Business Pro"
            speed="50 Mbps"
            price="₦45,000"
            tag="Business"
            features={[
              "Priority support",
              "Static IP option",
              "Service dashboard",
            ]}
          />
          <PlanCard
            name="Business Max"
            speed="100 Mbps"
            price="₦85,000"
            tag="Business"
            features={[
              "Priority support",
              "Multi-site readiness",
              "Performance reporting",
            ]}
          />
        </div>
      </section>

      <section className="section-shell py-14">
        <div className="card overflow-hidden bg-[#0b7a75] p-8 text-white md:p-10">
          <div className="max-w-3xl">
            <div className="text-xs font-bold uppercase tracking-[.18em] text-white/70">
              Operations opportunity
            </div>
            <h2 className="mt-3 text-3xl font-black">
              A customer-facing platform can also reduce manual support work.
            </h2>
            <p className="mt-4 leading-7 text-white/80">
              The concept includes structured installation requests, support
              tickets, service status and a customer portal so the ISP can move
              repetitive interactions out of phone and chat channels.
            </p>
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/support" className="btn bg-white text-[#075d59]">
              See support workflow
            </Link>
            <Link
              href="/portal"
              className="btn border border-white/30 bg-white/10 text-white"
            >
              See portal
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
