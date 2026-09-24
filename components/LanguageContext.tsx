"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import en from "@/locales/en.json";
import fr from "@/locales/fr.json";

type Language = "en" | "fr";
type Dictionary = typeof fr;

type LanguageContextValue = {
  language: Language;
  toggleLanguage: () => void;
  t: Dictionary;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);
const frenchText = fr.auto as Record<string, string>;
const englishAuto = Object.fromEntries(
  Object.keys(frenchText).map((key) => [key, key]),
);
const dictionaries: Record<Language, Dictionary> = {
  en: { ...en, auto: englishAuto } as Dictionary,
  fr,
};
const englishByFrenchText = Object.fromEntries(
  Object.entries(frenchText).map(([english, french]) => [french, english]),
);
const textSources = new WeakMap<Text, string>();
const attributeSources = new WeakMap<HTMLElement, Map<string, string>>();

function sourceText(value: string) {
  return englishByFrenchText[value] ?? value;
}

function translateValue(value: string, language: Language) {
  const source = sourceText(value);
  return language === "fr" ? (frenchText[source] ?? source) : source;
}

function translateDocument(language: Language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const textNodes: Text[] = [];
  let node = walker.nextNode();

  while (node) {
    if (
      node.parentElement?.tagName !== "SCRIPT" &&
      node.parentElement?.tagName !== "STYLE"
    ) {
      textNodes.push(node as Text);
    }
    node = walker.nextNode();
  }

  for (const textNode of textNodes) {
    const current = textNode.nodeValue ?? "";
    const leading = current.match(/^\s*/)?.[0] ?? "";
    const trailing = current.match(/\s*$/)?.[0] ?? "";
    const content = current.trim();
    if (!content) continue;

    const cachedSource = textSources.get(textNode);
    const cachedTranslation = cachedSource
      ? translateValue(cachedSource, language)
      : null;
    const source =
      cachedSource &&
      (content === cachedSource || content === cachedTranslation)
        ? cachedSource
        : sourceText(content);
    textSources.set(textNode, source);
    const translated = translateValue(source, language);
    if (translated !== content) {
      textNode.nodeValue = `${leading}${translated}${trailing}`;
    }
  }

  for (const element of Array.from(
    document.body.querySelectorAll<HTMLElement>(
      "[placeholder], [title], [aria-label], [alt]",
    ),
  )) {
    const sources = attributeSources.get(element) ?? new Map<string, string>();
    attributeSources.set(element, sources);

    for (const attribute of ["placeholder", "title", "aria-label", "alt"]) {
      const value = element.getAttribute(attribute);
      if (value && !sources.has(attribute)) {
        sources.set(attribute, sourceText(value));
      }
      const source = sources.get(attribute);
      if (source) {
        element.setAttribute(attribute, translateValue(source, language));
      }
    }
  }
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("techverse-language");
    if (savedLanguage !== "en" && savedLanguage !== "fr") return;

    const restoreLanguage = window.setTimeout(() => {
      setLanguage(savedLanguage);
    }, 0);
    return () => window.clearTimeout(restoreLanguage);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    translateDocument(language);

    let translating = false;
    const applyTranslation = () => {
      if (translating) return;
      translating = true;
      translateDocument(language);
      translating = false;
    };
    const observer = new MutationObserver(applyTranslation);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    return () => observer.disconnect();
  }, [language]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      toggleLanguage: () => {
        setLanguage((current) => {
          const nextLanguage = current === "fr" ? "en" : "fr";
          window.localStorage.setItem("techverse-language", nextLanguage);
          return nextLanguage;
        });
      },
      t: dictionaries[language],
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return context;
}
