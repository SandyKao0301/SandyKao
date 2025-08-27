import Section from "@/components/Section";

export const metadata = { title: "Case Studies — Sandy Kao" };

export default function ProjectsPage(){
  return (
    <Section title="Case Studies" subtitle="Deeper dives into selected finance × programming projects.">
      <div className="prose prose-emerald dark:prose-invert max-w-none">
        <h3 id="month-end-automation">Month‑end Automation (SAP → Excel VBA)</h3>
        <p><strong>Context:</strong> Monthly close involved exporting SAP FI data and assembling reports manually.</p>
        <p><strong>Approach:</strong> Designed Excel VBA macros to import SAP exports, validate columns, pivot, and render final sheets.</p>
        <p><strong>Result:</strong> Reduced manual errors by <strong>30%</strong>; faster and more consistent close.</p>
        <hr />
        <h3 id="compliance-tracker">Working‑hours Compliance Tracker (Python)</h3>
        <p><strong>Context:</strong> HR needed to verify recorded hours vs. policy/labor constraints.</p>
        <p><strong>Approach:</strong> Built Python/pandas pipeline; flagged anomalies; exported audit‑ready CSV and summary.</p>
        <p><strong>Result:</strong> Reliable anomaly detection; reduced manual checks.</p>
        <hr />
        <h3 id="dcc-garch">DCC‑GARCH Brexit Risk Study (R/Python)</h3>
        <p><strong>Context:</strong> Analyze post‑Brexit market integration & risk transmission.</p>
        <p><strong>Approach:</strong> Estimated DCC‑GARCH; visualized conditional correlations; stress periods.</p>
        <p><strong>Result:</strong> Clear correlation dynamics; informed risk mitigation discussion.</p>
        <p className="no-print mt-8 text-sm text-gray-500">Note: When publishing code publicly, use <em>mocked</em> datasets to respect confidentiality.</p>
      </div>
    </Section>
  )
}