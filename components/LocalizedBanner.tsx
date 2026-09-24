"use client";

import { useLanguage } from "@/components/LanguageContext";

export function LocalizedBanner() {
  const { t } = useLanguage();

  return (
    <div className="demo-banner">
      <div className="section-shell py-2 text-center">{t.banner}</div>
    </div>
  );
}
