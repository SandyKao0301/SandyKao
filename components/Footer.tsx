import Link from "next/link";
import EmailLink from "./EmailLink";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200/50 dark:border-gray-800/60 mt-16">
      <div className="container py-10 text-sm text-gray-600 dark:text-gray-400 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Yu-Hsuan (Sandy) Kao</p>
        <div className="flex items-center gap-4">
          <EmailLink className="fancy-underline" />
          <Link className="fancy-underline" href="/legal/impressum">Impressum</Link>
          <Link className="fancy-underline" href="/legal/datenschutz">Datenschutz</Link>
        </div>
      </div>
    </footer>
  );
}