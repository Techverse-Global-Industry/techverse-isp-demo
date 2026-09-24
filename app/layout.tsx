import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/components/LanguageContext";
import { LocalizedBanner } from "@/components/LocalizedBanner";

export const metadata: Metadata = {
  title: "TechVerse ISP Digital Platform — Demo",
  description:
    "A TechVerse concept demo for ISP customer acquisition, service management and digital support.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <LanguageProvider>
          <LocalizedBanner />
          <Nav />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
