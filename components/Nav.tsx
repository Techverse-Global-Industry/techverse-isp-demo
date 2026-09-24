"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLanguage } from "@/components/LanguageContext";

const primaryLinks = [
  ["nav.home", "/"],
  ["nav.plans", "/plans"],
  ["nav.coverage", "/coverage"],
  ["nav.installation", "/install"],
  ["nav.support", "/support"],
] as const;

const workspaceLinks = [
  ["nav.portal", "/portal"],
  ["nav.staffOps", "/operations"],
] as const;

export function Nav() {
  const path = usePathname();
  const { language, t, toggleLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const linkClass = (href: string, mobile = false) => {
    const active = path === href || (href !== "/" && path.startsWith(href));
    return `${mobile ? "block min-h-11 border-b border-slate-100 px-1 py-3" : "rounded-lg px-3 py-2"} flex items-center font-semibold transition-colors ${active ? "bg-[#e8f5f2] text-[#075d59]" : "text-slate-600 hover:bg-slate-100"}`;
  };

  const renderLinks = (
    items: readonly (readonly [string, string])[],
    mobile = false,
  ) =>
    items.map(([label, href]) => {
      return (
        <Link
          key={href}
          href={href}
          onClick={mobile ? () => setMenuOpen(false) : undefined}
          className={`${linkClass(href, mobile)} ${mobile ? "text-base" : "text-sm"}`}
        >
          {t.nav[label.replace("nav.", "") as keyof typeof t.nav]}
        </Link>
      );
    });

  const renderWorkspace = (mobile = false) => {
    if (mobile) {
      const expanded = expandedGroup === "workspace";
      return (
        <div className=" border-b border-slate-100">
          <button
            type="button"
            onClick={() => setExpandedGroup(expanded ? null : "workspace")}
            className="flex min-h-11 w-full items-center justify-between px-1 py-3 text-left text-base font-semibold text-slate-700"
            aria-expanded={expanded}
            aria-controls="mobile-workspace-links"
          >
            <span>{t.nav.workspace}</span>
            <span
              className={`text-xl transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
              aria-hidden="true"
            >
              ⌄
            </span>
          </button>
          <div
            id="mobile-workspace-links"
            className={`grid overflow-hidden pl-3 transition-[grid-template-rows,opacity] duration-300 ${expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
          >
            <div className="min-h-0">{renderLinks(workspaceLinks, true)}</div>
          </div>
        </div>
      );
    }

    return (
      <div className="group relative">
        <button
          type="button"
          className="flex min-h-11 items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100"
          aria-haspopup="true"
        >
          {t.nav.workspace} <span aria-hidden="true">⌄</span>
        </button>
        <div className="invisible absolute right-0 top-full z-10 mt-2 w-52 translate-y-1 rounded-xl border border-slate-200 bg-white p-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
          {renderLinks(workspaceLinks)}
        </div>
      </div>
    );
  };

  return (
    <header className="site-nav sticky top-0 z-40 isolate border-b border-slate-200 bg-white shadow-sm">
      <div className="section-shell flex min-h-full items-center justify-between gap-3">
        <nav className="hidden items-center gap-1 lg:flex">
          {renderLinks(primaryLinks)}
          {renderWorkspace()}
        </nav>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleLanguage}
            className="btn btn-secondary min-h-10 px-2 text-xs"
            aria-label={
              language === "fr" ? t.nav.switchToEnglish : t.nav.switchToFrench
            }
          >
            {language === "fr" ? "EN" : "FR"}
          </button>
          <Link
            href="/operations"
            className="btn btn-secondary hidden text-sm xl:inline-flex"
          >
            {t.nav.staffOpsCta}
          </Link>
          <Link
            href="/portal"
            className="btn btn-primary hidden text-sm sm:inline-flex"
          >
            {t.nav.customerPortal}
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="grid min-h-11 min-w-11 place-items-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-[#0b7a75] lg:hidden"
            aria-label={t.nav.openMenu}
            aria-expanded={menuOpen}
          >
            <span className="sr-only">{t.nav.openMenu}</span>
            <span className="flex w-5 flex-col gap-1" aria-hidden="true">
              <span className="h-0.5 w-full bg-current" />
              <span className="h-0.5 w-full bg-current" />
              <span className="h-0.5 w-full bg-current" />
            </span>
          </button>
        </div>
      </div>

      <div
        className={`fixed  inset-0 z-50 lg:hidden ${menuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        <button
          type="button"
          className={`absolute inset-0 h-full w-full bg-slate-950/40 backdrop-blur-sm transition-opacity duration-300 ${menuOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setMenuOpen(false)}
          aria-label={t.nav.closeMenu}
        />
        <aside
          aria-label={t.nav.openMenu}
          className={`absolute right-0 top-0 flex h-full w-[min(86vw,22rem)] flex-col bg-white p-5 text-slate-900 shadow-2xl transition-transform duration-300 ease-out ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex items-center justify-between border-b border-slate-100 bg-white pb-5">
            <span className="text-sm font-black uppercase tracking-[0.14em] text-[#075d59]">
              {t.brand.title}
            </span>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="grid min-h-11 min-w-11 place-items-center rounded-xl border border-slate-200 bg-white text-xl text-slate-700 shadow-sm"
              aria-label={t.nav.closeMenu}
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <nav className="mt-3">
            {renderLinks(primaryLinks, true)}
            {renderWorkspace(true)}
          </nav>
          <div className="mt-auto grid gap-3 border-t border-slate-100 pt-5">
            <Link
              href="/portal"
              onClick={() => setMenuOpen(false)}
              className="btn btn-primary w-full"
            >
              {t.nav.customerPortal}
            </Link>
            <Link
              href="/operations"
              onClick={() => setMenuOpen(false)}
              className="btn btn-secondary w-full"
            >
              {t.nav.staffOpsCta}
            </Link>
            <button
              type="button"
              onClick={toggleLanguage}
              className="btn btn-secondary w-full"
              aria-label={
                language === "fr" ? t.nav.switchToEnglish : t.nav.switchToFrench
              }
            >
              {t.nav.languageLabel}:{" "}
              {language === "fr" ? "Français" : "English"}
            </button>
          </div>
        </aside>
      </div>
    </header>
  );
}
