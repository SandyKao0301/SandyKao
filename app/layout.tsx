import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sandy Kao — Finance & Data",
  description: "Portfolio of Yu-Hsuan (Sandy) Kao — Finance & Data Analyst with programming skills in Python, R, SQL, and VBA.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Sandy Kao — Finance & Data",
    description: "Finance & Data Analyst | SAP • Python • VBA",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}