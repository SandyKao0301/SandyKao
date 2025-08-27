import Section from "@/components/Section";

export const metadata = { title: "Projects — Sandy Kao" };

/** Small colored pill. Color is chosen by the tag text. */
function Tag({ children }: { children: string }) {
  const name = children;
  const color =
    {
      "SAP FI":
        "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
      "Excel VBA":
        "bg-amber-100 text-amber-900 dark:bg-amber-900/30 dark:text-amber-300",
      Automation:
        "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300",
      ADP: "bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300",
      Excel:
        "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
      Python:
        "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300",
      "Risk Modeling":
        "bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300",
      "Time Series":
        "bg-sky-100 text-sky-800 dark:bg-sky-900/30 dark:text-sky-300",
    }[name] ||
    "bg-gray-100 text-gray-800 dark:bg-gray-800/40 dark:text-gray-200";

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-medium ${color}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current/70" aria-hidden />
      {name}
    </span>
  );
}

export default function ProjectsPage() {
  return (
    <Section title="Projects">
      <div className="grid gap-6 md:grid-cols-2">
        {/* Month-end Automation */}
        <article className="card p-6 relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/5" />
          <div className="h-1 w-16 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-300" />
          <h3 id="month-end-automation" className="mt-3 text-lg font-semibold">
            Month-end Automation
          </h3>
          <div className="mt-2 flex flex-wrap gap-2">
            <Tag>SAP FI</Tag>
            <Tag>Excel VBA</Tag>
            <Tag>Automation</Tag>
          </div>
          <dl className="mt-4 grid grid-cols-[auto,1fr] gap-x-3 gap-y-2 text-sm">
            <dt className="font-medium">Context:</dt>
            <dd>
              Monthly close involved exporting SAP FI data and assembling
              reports manually.
            </dd>
            <dt className="font-medium">Approach:</dt>
            <dd>
              Designed Excel VBA macros to import SAP exports, validate
              columns, pivot, and render final sheets.
            </dd>
            <dt className="font-medium">Result:</dt>
            <dd>
              Reduced manual errors by <strong>30%</strong>; faster and more
              consistent close.
            </dd>
          </dl>
        </article>

        {/* Working-hours Compliance Tracker */}
        <article className="card p-6 relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/5" />
          <div className="h-1 w-16 rounded-full bg-gradient-to-r from-rose-400 to-amber-300" />
          <h3 id="compliance-tracker" className="mt-3 text-lg font-semibold">
            Working-hours Compliance Tracker
          </h3>
          <div className="mt-2 flex flex-wrap gap-2">
            <Tag>ADP</Tag>
            <Tag>Excel</Tag>
            <Tag>Automation</Tag>
          </div>
          <dl className="mt-4 grid grid-cols-[auto,1fr] gap-x-3 gap-y-2 text-sm">
            <dt className="font-medium">Context:</dt>
            <dd>
              HR needed to verify recorded hours against policy and labor
              constraints.
            </dd>
            <dt className="font-medium">Approach:</dt>
            <dd>
              Built ADP → Excel automation to ingest timesheets, apply
              validation rules, flag anomalies, and export audit-ready CSV and
              summary.
            </dd>
            <dt className="font-medium">Result:</dt>
            <dd>Reliable anomaly detection; reduced manual checks.</dd>
          </dl>
        </article>

        {/* DCC-GARCH Brexit Risk Study */}
        <article className="card p-6 md:col-span-2 relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/5" />
          <div className="h-1 w-16 rounded-full bg-gradient-to-r from-indigo-400 to-violet-400" />
          <h3 id="dcc-garch" className="mt-3 text-lg font-semibold">
            DCC-GARCH Brexit Risk Study
          </h3>
          <div className="mt-2 flex flex-wrap gap-2">
            <Tag>Python</Tag>
            <Tag>Risk Modeling</Tag>
            <Tag>Time Series</Tag>
          </div>
          <dl className="mt-4 grid grid-cols-[auto,1fr] gap-x-3 gap-y-2 text-sm">
            <dt className="font-medium">Context:</dt>
            <dd>Analyze post-Brexit market integration &amp; risk transmission.</dd>
            <dt className="font-medium">Approach:</dt>
            <dd>
              Estimated DCC-GARCH; visualized conditional correlations and
              stress periods.
            </dd>
            <dt className="font-medium">Result:</dt>
            <dd>Clear correlation dynamics; informed risk-mitigation discussion.</dd>
          </dl>
        </article>
      </div>

      <p className="no-print mt-8 text-xs text-gray-500">
        Note: When publishing code publicly, use <em>mocked</em> datasets to
        respect confidentiality.
      </p>
    </Section>
  );
}
