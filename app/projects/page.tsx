import Section from "@/components/Section";

export const metadata = { title: "Projects — Sandy Kao" };

export default function ProjectsPage(){
  return (
    <Section title="Projects">
      <div className="grid gap-6 md:grid-cols-2">
        {/* Month-end Automation */}
        <article className="card p-6">
          <h3 id="month-end-automation" className="text-lg font-semibold">
            Month-end Automation
          </h3>
          <div className="mt-2 flex flex-wrap gap-2 text-xs">
            <span className="rounded-full border px-2.5 py-0.5">SAP FI</span>
            <span className="rounded-full border px-2.5 py-0.5">Excel VBA</span>
            <span className="rounded-full border px-2.5 py-0.5">Automation</span>
          </div>
          <dl className="mt-4 grid grid-cols-[auto,1fr] gap-x-3 gap-y-2 text-sm">
            <dt className="font-medium">Context:</dt>
            <dd>Monthly close involved exporting SAP FI data and assembling reports manually.</dd>
            <dt className="font-medium">Approach:</dt>
            <dd>Designed Excel VBA macros to import SAP exports, validate columns, pivot, and render final sheets.</dd>
            <dt className="font-medium">Result:</dt>
            <dd>Reduced manual errors by <strong>30%</strong>; faster and more consistent close.</dd>
          </dl>
        </article>

        {/* Working-hours Compliance Tracker */}
        <article className="card p-6">
          <h3 id="compliance-tracker" className="text-lg font-semibold">
            Working-hours Compliance Tracker
          </h3>
          <div className="mt-2 flex flex-wrap gap-2 text-xs">
            <span className="rounded-full border px-2.5 py-0.5">ADP</span>
            <span className="rounded-full border px-2.5 py-0.5">Excel</span>
            <span className="rounded-full border px-2.5 py-0.5">Automation</span>
          </div>
          <dl className="mt-4 grid grid-cols-[auto,1fr] gap-x-3 gap-y-2 text-sm">
            <dt className="font-medium">Context:</dt>
            <dd>HR needed to verify recorded hours against policy and labor constraints.</dd>
            <dt className="font-medium">Approach:</dt>
            <dd>Built ADP → Excel automation to ingest timesheets, apply validation rules, flag anomalies, and export audit-ready CSV and summary.</dd>
            <dt className="font-medium">Result:</dt>
            <dd>Reliable anomaly detection; reduced manual checks.</dd>
          </dl>
        </article>

        {/* DCC-GARCH Brexit Risk Study */}
        <article className="card p-6 md:col-span-2">
          <h3 id="dcc-garch" className="text-lg font-semibold">
            DCC-GARCH Brexit Risk Study
          </h3>
          <div className="mt-2 flex flex-wrap gap-2 text-xs">
            <span className="rounded-full border px-2.5 py-0.5">Python</span>
            <span className="rounded-full border px-2.5 py-0.5">Risk Modeling</span>
            <span className="rounded-full border px-2.5 py-0.5">Time Series</span>
          </div>
          <dl className="mt-4 grid grid-cols-[auto,1fr] gap-x-3 gap-y-2 text-sm">
            <dt className="font-medium">Context:</dt>
            <dd>Analyze post-Brexit market integration &amp; risk transmission.</dd>
            <dt className="font-medium">Approach:</dt>
            <dd>Estimated DCC-GARCH; visualized conditional correlations and stress periods.</dd>
            <dt className="font-medium">Result:</dt>
            <dd>Clear correlation dynamics; informed risk-mitigation discussion.</dd>
          </dl>
        </article>
      </div>

      <p className="no-print mt-8 text-xs text-gray-500">
        Note: When publishing code publicly, use <em>mocked</em> datasets to respect confidentiality.
      </p>
    </Section>
  );
}
