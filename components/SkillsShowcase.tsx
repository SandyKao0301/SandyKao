// components/SkillsShowcase.tsx
"use client";

type Pill = { label: string };
type Group = { title: string; pills: Pill[] };

const groups: Group[] = [
  { title: "Finance", pills: [{ label: "HGB / IFRS" }, { label: "GL Reconciliations" }, { label: "Payroll / ADP" }] },
  { title: "Programming", pills: [{ label: "Python" }, { label: "R" }, { label: "SQL" }, { label: "VBA" }, { label: "MATLAB" }] },
  { title: "Quant & Econometrics", pills: [{ label: "Stata" }, { label: "SAS" }, { label: "Dynare" }] },
  { title: "Tools", pills: [{ label: "SAP FI" }, { label: "MS Office" }, { label: "Google Sheets" }] },
];

const languages = [
  { name: "Chinese", level: "Native", pct: 100 },
  { name: "English", level: "C1 (Fluent)", pct: 88 },
  { name: "German", level: "B1 (Intermediate)", pct: 60 },
];

export default function SkillsShowcase() {
  return (
    <div className="skillcard relative rounded-2xl border border-emerald-500/15 bg-white/60 dark:bg-slate-900/50 shadow-xl backdrop-blur-md overflow-hidden">
      {/* Subtle shifting background (dialed down) */}
      <div className="bg-shift pointer-events-none absolute inset-0 opacity-[0.35]" />

      <div className="relative p-4 sm:p-5">
        <h3 className="font-semibold tracking-tight text-slate-800 dark:text-slate-100">Skills at a glance</h3>

        {/* Groups */}
        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          {groups.map((g) => (
            <div key={g.title} className="rounded-xl border border-emerald-500/20 bg-white/60 dark:bg-white/5 p-3">
              <div className="text-gray-700 dark:text-gray-200 font-medium">{g.title}</div>

              <div className="mt-2 flex flex-wrap gap-2">
                {g.pills.map((p) => (
                  <span
                    key={p.label}
                    className="inline-flex items-center rounded-full border border-emerald-500/25 px-2.5 py-1 text-[12px] leading-none text-emerald-900 dark:text-emerald-300 bg-emerald-50/70 dark:bg-emerald-500/10"
                  >
                    {p.label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Languages */}
        <div className="mt-4">
          <div className="mb-2 text-xs uppercase tracking-wider text-gray-500">Languages</div>
          <div className="space-y-3">
            {languages.map((lang) => (
              <div key={lang.name} className="rounded-xl border border-emerald-500/20 p-3 bg-white/60 dark:bg-white/5">
                <div className="flex items-center justify-between text-sm">
                  <div className="font-medium text-gray-800 dark:text-gray-200">{lang.name}</div>
                  <div className="text-gray-600 dark:text-gray-300">{lang.level}</div>
                </div>
                <div
                  className="mt-2 h-2 w-full overflow-hidden rounded-full bg-emerald-500/10"
                  role="progressbar"
                  aria-valuenow={lang.pct}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`${lang.name} proficiency`}
                >
                  <div className="h-full bar" style={{ width: `${lang.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scoped styles */}
      <style jsx>{`
        /* Background: very slow left→right color shift with a light vignette */
        .bg-shift {
          background:
            radial-gradient(120% 80% at 10% 10%, rgba(255,255,255,0.55), transparent 60%),
            linear-gradient(90deg,
              rgba(16,185,129,0.12),
              rgba(20,184,166,0.12),
              rgba(51,134,199,0.10),
              rgba(16,185,129,0.12));
          background-size: 120% 100%, 200% 100%;
          animation: shift 30s ease-in-out infinite;
        }
        @keyframes shift {
          0%   { background-position: 0% 0%,   0% 50%; }
          50%  { background-position: 0% 0%, 100% 50%; }
          100% { background-position: 0% 0%,   0% 50%; }
        }

        /* Language bar: subtle moving gradient for a hint of life */
        .bar {
          background: linear-gradient(90deg,
            rgba(16,185,129,1),
            rgba(20,184,166,1),
            rgba(59,130,246,0.9));
          background-size: 180% 100%;
          animation: barShift 12s ease-in-out infinite;
          border-radius: inherit;
        }
        @keyframes barShift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .skillcard { overflow: hidden; }
      `}</style>
    </div>
  );
}
