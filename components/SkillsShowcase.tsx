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
    pills: [{ label: "Python" }, { label: "R" }, { label: "SQL" }, { label: "VBA" }, { label: "MATLAB" }],
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
    <div className="relative">
      {/* Animated gradient border wrapper */}
      <div className="relative rounded-2xl p-[1px] overflow-hidden">
        <div className="absolute inset-0 animate-border-spin opacity-80"
          style={{
            background:
              "conic-gradient(from 0deg, rgba(16,185,129,.6), rgba(34,197,94,.6), rgba(20,184,166,.6), rgba(59,130,246,.4), rgba(16,185,129,.6))",
            filter: "hue-rotate(0deg)",
          }}
        />
        {/* Inner card */}
        <div className="relative rounded-2xl bg-white/60 dark:bg-slate-900/50 backdrop-blur-sm">
          {/* Animated background grid + hue shift */}
          <div className="pointer-events-none absolute -inset-2 [mask-image:radial-gradient(70%_50%_at_50%_0%,black,transparent)]">
            <svg viewBox="0 0 400 200" className="h-32 w-full animate-hue-shift opacity-30">
              <defs>
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgb(16 185 129)" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Sheen sweep */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -inset-y-10 -left-1/3 w-1/3 rotate-12 animate-sheen"
                 style={{
                   background:
                     "linear-gradient(90deg, transparent 0%, rgba(255,255,255,.65) 40%, rgba(255,255,255,.9) 50%, rgba(255,255,255,.65) 60%, transparent 100%)",
                   filter: "blur(2px)",
                 }}
            />
          </div>

          <div className="relative p-4 sm:p-5">
            <h3 className="font-semibold tracking-tight bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-500 bg-clip-text text-transparent">
              Skills at a glance
            </h3>

            {/* Groups */}
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              {groups.map((g) => (
                <div
                  key={g.title}
                  className="group relative rounded-xl border border-emerald-500/20 bg-white/40 dark:bg-white/5 p-3 overflow-hidden"
                >
                  {/* soft glow on hover */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                       style={{ background: "radial-gradient(80% 60% at 50% 0%, rgba(16,185,129,.12), transparent 60%)" }}
                  />
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-lg border border-emerald-500/30 bg-white/60 dark:bg-white/10">
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
                    <div className="text-gray-700 dark:text-gray-200 font-medium">{g.title}</div>
                  </div>

                  <div className="mt-2 flex flex-wrap gap-2">
                    {g.pills.map((p) => (
                      <span
                        key={p.label}
                        className="inline-flex items-center rounded-full border border-emerald-500/30 px-2.5 py-1 text-[12px] leading-none text-emerald-800 dark:text-emerald-300 bg-emerald-50/70 dark:bg-emerald-500/10 transition-transform duration-200 hover:scale-[1.04]"
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
                  <div key={lang.name} className="rounded-xl border border-emerald-500/20 p-3 bg-white/40 dark:bg-white/5">
                    <div className="flex items-center justify-between text-sm">
                      <div className="font-medium text-gray-800 dark:text-gray-200">{lang.name}</div>
                      <div className="text-gray-600 dark:text-gray-300">{lang.level}</div>
                    </div>
                    {/* Animated progress bar with shifting gradient */}
                    <div
                      className="mt-2 h-2 w-full overflow-hidden rounded-full bg-emerald-500/10"
                      role="progressbar"
                      aria-valuenow={lang.pct}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={`${lang.name} proficiency`}
                    >
                      <div
                        className="h-full animate-bar-sheen"
                        style={{
                          width: `${lang.pct}%`,
                          background:
                            "linear-gradient(90deg, rgba(16,185,129,1) 0%, rgba(20,184,166,1) 50%, rgba(59,130,246,1) 100%)",
                          filter: "hue-rotate(0deg)",
                          backgroundSize: "200% 100%",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-3 text-[11px] text-gray-500">
              * CEFR levels: English C1 (Fluent), German B1 (Intermediate)
            </div>
          </div>
        </div>
      </div>

      {/* Local animations via styled-jsx (scoped to this component) */}
      <style jsx>{`
        @keyframes border-spin {
          to { transform: rotate(360deg); }
        }
        .animate-border-spin > * { }
        .animate-border-spin {
          animation: border-spin 16s linear infinite;
        }

        @keyframes hue-shift {
          0% { filter: hue-rotate(0deg); }
          50% { filter: hue-rotate(25deg); }
          100% { filter: hue-rotate(0deg); }
        }
        .animate-hue-shift { animation: hue-shift 10s ease-in-out infinite; }

        @keyframes sheen {
          0% { transform: translateX(-140%) rotate(12deg); }
          60% { transform: translateX(120%) rotate(12deg); }
          100% { transform: translateX(120%) rotate(12deg); }
        }
        .animate-sheen { animation: sheen 7s ease-in-out infinite; }

        @keyframes bar-sheen {
          0% { background-position: 0% 50%; filter: hue-rotate(0deg); }
          50% { background-position: 100% 50%; filter: hue-rotate(20deg); }
          100% { background-position: 0% 50%; filter: hue-rotate(0deg); }
        }
        .animate-bar-sheen { animation: bar-sheen 6s ease-in-out infinite; }
      `}</style>
    </div>
  );
}
