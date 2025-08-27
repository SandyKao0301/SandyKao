import Link from "next/link";

export default function Header() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-white/60 dark:bg-gray-900/60 border-b border-gray-200/40 dark:border-gray-800/50">
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="font-semibold tracking-tight text-lg">
          <span className="text-emerald-600">Sandy</span> Kao
        </Link>

        <details className="sm:hidden">
          <summary className="cursor-pointer px-3 py-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">Menu</summary>
          <div className="mt-2 space-y-2">
            <NavLinks />
          </div>
        </details>

        <div className="hidden sm:flex items-center gap-6">
          <NavLinks />
        </div>
      </div>
    </nav>
  );
}

function NavLinks() {
  return (
    <>
      <Link href="/#projects" className="fancy-underline">Projects</Link>
      <Link href="/resume" className="fancy-underline">Resume</Link>
      <Link href="/projects" className="fancy-underline">Case Studies</Link>
      <Link href="/legal/impressum" className="fancy-underline">Impressum</Link>
      <Link href="/legal/datenschutz" className="fancy-underline">Datenschutz</Link>
    </>
  );
}