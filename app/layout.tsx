import type { Metadata } from "next";
import "./globals.css";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"], weight: ["300","400","500","600"],
  style: ["normal","italic"], variable: "--font-cormorant", display: "swap",
});

export const metadata: Metadata = {
  title: "GUIDA — 55 treaties. Instant compliance.",
  description: "Co-production intelligence for the international independent film. Part of DA SUITE.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className={cormorant.variable}><body>{children}</body></html>;
}
