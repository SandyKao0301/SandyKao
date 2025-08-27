import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sandy Kao — Finance & Data",
  description:
    "Portfolio of Yu-Hsuan (Sandy) Kao — Finance & Data Analyst with programming skills in Python, R, SQL, and VBA.",
  // Set this to your real domain when ready
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Sandy Kao — Finance & Data",
    description: "Finance & Data Analyst | SAP • Python • VBA",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 antialiased">
        {/* Global micro-effects: shimmer CTA + hairline gradient borders */}
        <style jsx global>{`
          /* 3) Shimmer-on-hover for primary buttons */
          .btn-shimmer {
            position: relative;
            overflow: hidden;
          }
          .btn-shimmer::after {
            content: "";
            position: absolute;
            inset: -200% -30%;
            background: linear-gradient(
              115deg,
              transparent,
              rgba(255, 255, 255, 0.28),
              transparent
            );
            transform: translateX(-60%) rotate(8deg);
            transition: transform 0.6s ease;
            pointer-events: none;
          }
          .btn-shimmer:hover::after {
            transform: translateX(60%) rotate(8deg);
          }

          /* 6) Hairline gradient border for premium-looking cards */
          .card-gradient {
            position: relative;
            background-clip: padding-box;
            border: 1px solid transparent; /* keeps layout consistent */
          }
          .card-gradient::before {
            content: "";
            position: absolute;
            inset: 0;
            z-index: -1;
            border-radius: inherit;
            padding: 1px; /* hairline */
            background: linear-gradient(
              135deg,
              rgba(255, 255, 255, 0.25),
              rgba(16, 185, 129, 0.35)
            );
            -webkit-mask: linear-gradient(#000 0 0) content-box,
              linear-gradient(#000 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
          }
        `}</style>

        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
