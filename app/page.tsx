import Link from "next/link";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import Timeline from "@/components/Timeline";

export default function Page() {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

  // Interests for the pills inside About
  const interests = [
    { label: "Padel", emoji: "🎾" },
    { label: "Strength Training", emoji: "🏋️" },
    { label: "Bouldering", emoji: "🧗‍♀️" },
    { label: "Running", emoji: "🏃‍♀️" },
    { label: "Swimming", emoji: "🏊‍♀️" },
    { label: "Travel", emoji: "✈️" },
    { label: "Photography", emoji: "📷" },
    { label: "Video Editing", emoji: "🎬" },
  ];

  return (
    <>
      {/* Hero */}
      <header className="container pt-14 pb-10">
        <div className="grid gap-8 md:grid-cols-12 items-center">
          <div className="md:col-span-7">
            <p className="text-sm uppercase tracking-widest text-gray-500">Finance × Programming</p>
            <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
              Yu-Hsuan (Sandy) Kao
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
              Finance & Data Analyst with international experience (Europe & Asia). Skilled in SAP FI, Excel/VBA, Python, R, and SQL.
              Improved reporting accuracy and workflows, ensured compliance, and delivered precise financial analytics.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={`${base}/assets/CV.pdf`} className="btn" download>Download CV</a>
              <Link href="/resume" className="btn-outline">Resume</Link>
              <Link href="/projects" className="btn-outline">View Projects</Link>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="card">
              <h3 className="font-semibold">Skills at a glance</h3>
              <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
                <div>
                  <div className="text-gray-500">Finance</div>
                  <ul className="mt-1 space-y-1">
                    <li>HGB / IFRS</li>
                    <li>GL Reconciliations</li>
                    <li>Payroll / ADP</li>
                    <li>SAP (FI)</li>
                  </ul>
                </div>
                <div>
                  <div className="text-gray-500">Programming</div>
                  <ul className="mt-1 space-y-1">
                    <li>Python, R, SQL</li>
                    <li>Excel VBA</li>
                    <li>Data Cleaning & Viz</li>
                  </ul>
                </div>
                <div>
                  <div className="text-gray-500">Tools</div>
                  <ul className="mt-1 space-y-1">
                    <li>MS Office, Google Sheets</li>
                    <li>SAP FI</li>
                  </ul>
                </div>
                <div>
                  <div className="text-gray-500">Languages</div>
                  <ul className="mt-1 space-y-1">
                    <li>Chinese (Native)</li>
                    <li>English (C1)</li>
                    <li>German (B1)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* About */}
      <Section id="about" title="About" subtitle="Who I am and what I bring to finance + data roles.">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Left: bio + goals + interests */}
          <div className="card">
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <p>
                Hi, I’m <strong>Yu-Hsuan (Sandy) Kao</strong>. I like taking messy spreadsheets and SAP exports and turning them into reports teams trust.
                My sweet spot is where accounting meets automation. I use SAP FI, Excel/VBA, Python and SQL to speed up month-end, cut errors, and keep checks easy for the people who run them.
              </p>

              <p>
                I came to Germany in 2022 for my M.Sc. in Economics and Finance at the University of Tübingen and to build an international career in finance operations and analytics.
                Working with SAP and time/payroll tools like ADP has let me ship changes that people actually feel in their daily work.
              </p>

              <p>
                <strong>Near-term goal:</strong> join a team where I can own reporting flows from SAP into Excel, SQL or Python, automate the boring parts, keep controls simple for users, and track the impact with clear metrics.
              </p>

              <p>
                <strong>Long-term goal:</strong> grow into a finance systems and operations role that bridges accounting, engineering and data, leading projects that shorten the close and strengthen the control environment.
              </p>

              {/* Interests: centered, separated; equal-size pills */}
              <div className="mt-6 pt-4 border-t border-gray-200/50 dark:border-gray-800/60 text-center">
                <h3 className="font-semibold text-base uppercase tracking-wide">Interests</h3>
                <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl mx-auto">
                  {interests.map(({ label, emoji }) => (
                    <span
                      key={label}
                      className="w-full h-9 inline-flex items-center justify-center gap-2 rounded-full border border-gray-200/40 dark:border-gray-800/60 bg-white/5 text-sm font-medium"
                    >
                      <span aria-hidden className="shrink-0">{emoji}</span>
                      <span className="truncate">{label}</span>
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap justify-center gap-3">
                  <a href={`${base}/assets/CV.pdf`} className="btn" download>Download CV (PDF)</a>
                  <Link href="/projects" className="btn-outline">View Projects</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right: photos with captions */}
          <div className="grid grid-cols-2 gap-3">
            {/* Headshot */}
            <figure className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-gray-200/30 dark:border-gray-800/50">
              <img
                src={`${base}/assets/Sandy_portrait.jpg`}
                alt="Sandy Kao — professional headshot"
                className="absolute inset-0 h-full w-full object-cover object-top"
                loading="lazy"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent px-2 py-1.5">
                <span className="text-[11px] sm:text-xs text-white/95">Work portrait</span>
              </figcaption>
            </figure>

            {/* Frühlingsfest */}
            <figure className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-gray-200/30 dark:border-gray-800/50">
              <img
                src={`${base}/assets/Octoberfest.jpg`}
                alt="With a friend at Frühlingsfest 2025 in Munich"
                className="absolute inset-0 h-full w-full object-cover object-center"
                loading="lazy"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent px-2 py-1.5">
                <span className="text-[11px] sm:text-xs text-white/95">Frühlingsfest ’25 with a friend</span>
              </figcaption>
            </figure>

            {/* O2 Surftown */}
            <figure className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-gray-200/30 dark:border-gray-800/50">
              <img
                src={`${base}/assets/Surfing.jpg`}
                alt="Surfing at O2 Surftown in Munich"
                className="absolute inset-0 h-full w-full object-cover object-center"
                loading="lazy"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent px-2 py-1.5">
                <span className="text-[11px] sm:text-xs text-white/95">O2 Surftown, Munich</span>
              </figcaption>
            </figure>

            {/* Wörthsee */}
            <figure className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-gray-200/30 dark:border-gray-800/50">
              <img
                src={`${base}/assets/Lake.jpg`}
                alt="Wörthsee"
                className="absolute inset-0 h-full w-full object-cover object-center"
                loading="lazy"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent px-2 py-1.5">
                <span className="text-[11px] sm:text-xs text-white/95">Wörthsee</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </Section>

      {/* Featured Projects */}
      <Section id="projects" title="Featured projects" subtitle="Real-world finance + data work with measurable outcomes.">
        <div className="grid md:grid-cols-3 gap-6">
          <ProjectCard
            title="Month-end Automation"
            subtitle="Automated SAP → Excel reports with VBA to reduce manual steps & errors"
            kpi="−30% manual errors"
            tags={["SAP FI","Excel VBA","Automation"]}
            href="/projects#month-end-automation"
            cta="View project"
          />
          <ProjectCard
            title="Working-hours Compliance Tracker"
            subtitle="Validated HR hours against policy & labor limits; anomaly detection"
            tags={["ADP","Excel","Automation"]}
            href="/projects#compliance-tracker"
            cta="View project"
          />
          <ProjectCard
            title="DCC-GARCH Brexit Risk Study"
            subtitle="Modeled correlations and risk channels post-Brexit"
            tags={["Python","Risk Modeling","Time Series"]}
            href="/projects#dcc-garch"
            cta="View project"
          />
        </div>
      </Section>

      {/* Experience */}
      <Section title="Experience">
        <Timeline items={[
          {
            role:"Accounting & Payroll Intern",
            org:"Texas Instruments",
            loc:"Freising, Germany",
            period:"Aug 2024 – Aug 2025",
            bullets:[
              "Automated month-end reports using SAP/Excel (VBA), reducing manual errors by 30%.",
              "Supported HR tracking employees’ working hours to ensure labor law compliance.",
              "Prepared GL accounts and reconciliations under HGB/IFRS.",
              "Served as Intern Chair; onboarding support and cross-department events."
            ]
          },
          {
            role:"Accounting Assistant",
            org:"Mami Love (E-Commerce)",
            loc:"Taipei, Taiwan",
            period:"Sep 2021 – Aug 2022",
            bullets:[
              "Managed AP/AR, reconciling €700K+ in monthly transactions.",
              "Achieved 100% on-time vendor payments by resolving invoice disputes (50+ partners).",
              "Assisted in financial closings: ledger matching and credit card validation."
            ]
          },
          {
            role:"Bank Teller Intern",
            org:"Taishin International Bank",
            loc:"Taipei, Taiwan",
            period:"Jul 2021 – Aug 2021",
            bullets:[
              "Processed high-volume transactions; fraud-prevention protocols.",
              "Advised clients on account services."
            ]
          },
        ]}/>
      </Section>

      {/* Education & Leadership */}
      <Section title="Education & Leadership">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="font-semibold">Education</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <div className="font-medium">M.Sc. Economics & Finance</div>
                <div className="text-gray-500">Eberhard Karls Universität Tübingen, Germany · Oct 2022 – Present</div>
              </li>
              <li>
                <div className="font-medium">B.A. Global Financial Management</div>
                <div className="text-gray-500">Tamkang University, Taiwan · Sep 2018 – Jun 2022</div>
              </li>
            </ul>
            <div className="mt-3 text-sm">
              <span className="font-medium">Coursework:</span> CFA Level 1, Advanced Corporate Finance, Computational Macroeconomics, Continuous-time Derivatives Pricing, Applied Statistics
            </div>
          </div>
          <div className="card">
            <h3 className="font-semibold">Leadership & Research</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <div className="font-medium">Intern Chair — Texas Instruments</div>
                <div className="text-gray-500">Oct 2024 – Aug 2025 · onboarding & networking events</div>
              </li>
              <li>
                <div className="font-medium">Government Sponsored Researcher — Taiwan MoST</div>
                <div className="text-gray-500">Aug 2021 – Mar 2022 · DCC-GARCH, risk mitigation & market strategy</div>
              </li>
              <li>
                <div className="font-medium">Project Leader — Hult Prize</div>
                <div className="text-gray-500">Sep 2020 – Dec 2020 · Financial planning & P&L forecasting</div>
              </li>
              <li>
                <div className="font-medium">Instructor — Waker Charity Association</div>
                <div className="text-gray-500">Aug 2020 – Jan 2021 · Financial literacy workshops</div>
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
