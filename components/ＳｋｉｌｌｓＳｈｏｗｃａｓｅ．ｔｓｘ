// components/SkillsShowcase.tsx
"use client";

type Pill = { label: string };
type Group = { title: string; pills: Pill[] };

const groups: Group[] = [
  {
    title: "Finance",
    pills: [
      { label: "HGB / IFRS" },
      { label: "GL Reconciliations" },
      { label: "Payroll / ADP" },
    ],
  },
  {
    title: "Programming",
    pills: [
      { label: "Python" },
      { label: "R" },
      { label: "SQL" },
      { label: "VBA" },
      { label: "MATLAB" },
    ],
  },
  {
    title: "Quant & Econometrics",
    pills: [{ label: "Stata" }, { label: "SAS" }, { label: "Dynare" }],
  },
  {
    title: "Tools",
    pills: [{ label: "SAP FI" }, { label: "MS Office" }, { label: "Google Sheets" }],
  },
];

const languages = [
  { name: "Chinese", level: "Native", pct: 100 },
  { name: "English", level: "C1 (Fluent)", pct: 88 },
  { name: "German", level: "B1 (Intermediate)", pct: 60 },
];

export default function SkillsShowcase() {
  return (
    <div className="card card-gradient overflow-hidden">
      <div className="relative">
        {/* Decorative blueprint flare */}
        <div className="pointer-events-none absolute -inset-2 opacity-30 [mask-image:radial-gradient(60%_60%_at_50%_0%,black,transparent)]">
          <svg viewBox="0 0 400 200" className="h-32 w-full text-emerald-400/30">
            <defs>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <h3 className="font-semibold relative">Skills at a glance</h3>

        {/* Groups */}
        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm relative">
          {groups.map((g) => (
            <div key={g.title} className="rounded-xl border border-emerald-500/20 bg-white/5 dark:bg-white/0 p-3">
              <div className="flex items-center gap-2">
                {/* Tiny accent icon */}
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-lg border border-emerald-500/30">
                  <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 text-emerald-600">
                    <path
                      d="M5 11l3 3 7-7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div className="text-gray-600 dark:text-gray-300 font-medium">{g.title}</div>
              </div>

              <div className="mt-2 flex flex-wrap gap-2">
                {g.pills.map((p) => (
                  <span
                    key={p.label}
                    className="inline-flex items-center rounded-full border border-emerald-500/30 px-2.5 py-1 text-[12px] leading-none text-emerald-800 dark:text-emerald-300 bg-emerald-50/60 dark:bg-emerald-500/10"
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
              <div key={lang.name} className="rounded-xl border border-emerald-500/20 p-3">
                <div className="flex items-center justify-between text-sm">
                  <div className="font-medium text-gray-800 dark:text-gray-200">{lang.name}</div>
                  <div className="text-gray-600 dark:text-gray-300">{lang.level}</div>
                </div>
                {/* Progress bar */}
                <div
                  className="mt-2 h-2 w-full overflow-hidden rounded-full bg-emerald-500/10"
                  role="progressbar"
                  aria-valuenow={lang.pct}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`${lang.name} proficiency`}
                >
                  <div
                    className="h-full bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-400"
                    style={{ width: `${lang.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer hint */}
        <div className="mt-3 text-[11px] text-gray-500">
          * CEFR levels: English C1 (Fluent), German B1 (Intermediate)
        </div>
      </div>
    </div>
  );
}
