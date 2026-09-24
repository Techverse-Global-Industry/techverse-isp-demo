"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";

const productLinks = [
  ["Plans", "/plans"],
  ["Coverage", "/coverage"],
  ["Installation", "/install"],
  ["Support", "/support"],
];

const experienceLinks = [
  ["Customer Platform", "/portal"],
  ["Staff Operations Demo", "/operations"],
  ["Business Accounts", "/plans"],
  ["FAQs", "/support"],
];

const companyLinks = [
  ["About TechVerse", "/"],
  ["Service Areas", "/coverage"],
  ["Network Health", "/operations/network"],
  ["Demo Overview", "/operations"],
];

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="mt-20 border-t border-slate-800 bg-slate-950 text-slate-200">
      <div className="section-shell py-12">
        <div className=" mt-3 grid gap-10 md:grid-cols-[1.2fr_.8fr_.8fr_.8fr]">
          <div>
            <div className="flex items-center gap-3 ">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#0b7a75] text-sm font-black text-white">
                TV
              </div>
              <div>
                <div className="font-black tracking-tight text-white">
                  TechVerse Global
                </div>
                <div className="text-xs text-slate-400">
                  ISP Digital Platform
                </div>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
              {t.footer.description}
            </p>
            <div className="mt-5 flex items-center gap-3 text-xs text-slate-400">
              <span className="rounded-full border border-slate-700 px-2.5 py-1">
                {t.footer.demoReady}
              </span>
              <span>{t.footer.conceptOnly}</span>
            </div>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
              {t.footer.product}
            </div>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              {productLinks.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="transition hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
              {t.footer.experience}
            </div>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              {experienceLinks.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="transition hover:text-white">
                    {label === "Customer Platform"
                      ? t.footer.customerPlatform
                      : label === "Business Accounts"
                        ? t.footer.businessAccounts
                        : label === "FAQs"
                          ? t.footer.faqs
                          : t.nav.staffOpsCta}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
              {t.footer.company}
            </div>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              {companyLinks.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="transition hover:text-white">
                    {label === "About TechVerse"
                      ? t.footer.about
                      : label === "Service Areas"
                        ? t.footer.serviceAreas
                        : label === "Network Health"
                          ? t.footer.networkHealth
                          : t.footer.demoOverview}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-800 pt-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <div>{t.footer.copyright}</div>
          <div className="max-w-xl text-right text-xs leading-6 text-slate-500">
            {t.footer.disclaimer}
          </div>
        </div>
      </div>
    </footer>
  );
}
