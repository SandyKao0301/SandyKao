import Link from "next/link"; 
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import Timeline from "@/components/Timeline";
import KPIs from "@/components/KPIs";
import BlueprintFX from "@/components/BlueprintFX";
import ParallaxGroup from "@/components/ParallaxGroup";
import AutomationShowcase from "@/components/AutomationShowcase";
import SkillsShowcase from "@/components/SkillsShowcase"; // NEW

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
      <header className="container pt-14 pb-10 relative overflow-hidden">
        <BlueprintFX variant="bold" fullBleed />

        <div className="grid gap-8 md:grid-cols-12 items-center">
          <div className="md:col-span-7">
            <p className="text-sm uppercase tracking-widest text-gray-500">Finance × Programming</p>

            {/* 4) Gradient accent on name */}
            <h1
              className="mt-2 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight
              bg-gradient-to-r from-emerald-300 via-cyan-300 to-emerald-300 bg-clip-text text-transparent"
            >
              Yu-Hsuan (Sandy) Kao
            </h1>

            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
              Finance & Data Analyst with international experience (Europe & Asia). Skilled in SAP FI, Excel/VBA, Python, R, and SQL.
              Improved reporting accuracy and workflows, ensured compliance, and delivered precise financial analytics.
            </p>

            {/* KPIs */}
            <div className="mt-6 max-w-xl">
              <KPIs
                items={[
                  { label: "Manual errors reduced", value: -30, suffix: "%", spark: [-5, -10, -15, -22, -28, -30], decimals: 0 },
                  { label: "On-time vendor payments", value: 100, suffix: "%", spark: [88, 92, 95, 97, 99, 100], decimals: 0 },
                ]}
              />
            </div>

            {/* Unified grid for both rows so widths line up */}
            <div className="mt-6 grid grid-cols-6 gap-3 max-w-xl">
              {/* Top line: 3 equal buttons (each col-span-2 = 1/3) */}
              <a
                href={`${base}/assets/CV.pdf`}
                className="btn btn-shimmer w-full col-span-6 sm:col-span-2"
                download
              >
                Download CV
              </a>
              <Link href="/resume" className="btn-outline w-full col-span-6 sm:col-span-2">
                Resume
              </Link>
              <Link href="/projects" className="btn-outline w-full col-span-6 sm:col-span-2">
                View Projects
              </Link>

              {/* Second line: 2 bigger buttons (each col-span-3 = 1/2) */}
              <a
                href="https://www.linkedin.com/in/yu-hsuan-kao/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-flex items-center justify-center gap-2 w-full col-span-6 sm:col-span-3 py-3"
                aria-label="LinkedIn profile"
              >
                {/* LinkedIn logo (24px) */}
                <svg className="w-6 h-6 fill-current" viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M1.146 0C.513 0 0 .526 0 1.175v13.65C0 15.474.526 16 1.146 16h13.708c.63 0 1.146-.526 1.146-1.175V1.175C16 .526 15.474 0 14.854 0H1.146zM4.943 13.394H2.542V6.169h2.401v7.225zM3.743 5.092c-.808 0-1.327-.554-1.327-1.248 0-.709.534-1.248 1.356-1.248.822 0 1.327.539 1.342 1.248 0 .694-.519 1.248-1.371 1.248zM13.458 13.394h-2.4V9.526c0-.963-.349-1.62-1.221-1.62-.666 0-1.063.443-1.237.87-.063.155-.079.369-.079.583v4.035h-2.4V6.169h2.4v.999c.32-.493.891-1.193 2.165-1.193 1.58 0 2.764 1.032 2.764 3.252v4.167z"/>
                </svg>
                LinkedIn
              </a>

              <a
                href="https://github.com/SandyKao0301"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-flex items-center justify-center gap-2 w-full col-span-6 sm:col-span-3 py-3"
                aria-label="GitHub profile"
              >
                {/* GitHub logo (24px) */}
                <svg className="w-6 h-6 fill-current" viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.074.55-.174.55-.388 0-.19-.007-.693-.01-1.36-2.23.485-2.7-1.076-2.7-1.076-.364-.924-.89-1.17-.89-1.17-.727-.498.055-.488.055-.488.804.057 1.228.826 1.228.826.715 1.225 1.874.871 2.33.666.072-.518.28-.872.508-1.073-1.78-.203-3.64-.89-3.64-3.96 0-.874.312-1.588.823-2.148-.083-.203-.357-1.02.078-2.125 0 0 .672-.215 2.2.82a7.62 7.62 0 0 1 2-.27c.68.003 1.36.093 2 .27 1.53-1.035 2.2-.82 2.2-.82.436 1.105.162 1.922.08 2.125.512.56.822 1.274.822 2.148 0 3.08-1.863 3.755-3.64 3.957.287.248.543.735.543 1.482 0 1.07-.01 1.93-.01 2.194 0 .216.146.466.553.386A8.002 8.002 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
                GitHub
              </a>
            </div>
          </div>

          <div className="md:col-span-5">
            {/* NEW: Fancy skills + languages */}
            <SkillsShowcase />
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

              {/* Interests */}
              <div className="mt-6 pt-4 border-t border-gray-200/50 dark:border-gray-800/60 text-center">
                <h3 className="font-semibold text-base uppercase tracking-wide">Interests</h3>
                <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl mx-auto">
                  {interests.map(({ label, emoji }) => (
                    <span
                      key={label}
                      className="w-full h-[3.5rem] inline-flex items-center justify-center gap-2 rounded-full border border-gray-200/40 dark:border-gray-800/60 bg-white/5 text-sm font-medium px-3 text-center whitespace-normal break-words leading-snug"
                    >
                      <span aria-hidden className="shrink-0">{emoji}</span>
                      <span className="block">{label}</span>
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap justify-center gap-3">
                  <a href={`${base}/assets/CV.pdf`} className="btn btn-shimmer" download>
                    Download CV (PDF)
                  </a>
                  <Link href="/projects" className="btn-outline">View Projects</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right: photos with captions + 5) parallax */}
          <ParallaxGroup>
            <div className="grid grid-cols-2 gap-3">
              <figure
                data-parallax="0.12"
                className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-gray-200/30 dark:border-gray-800/50"
              >
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

              <figure
                data-parallax="0.18"
                className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-gray-200/30 dark:border-gray-800/50"
              >
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

              <figure
                data-parallax="0.10"
                className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-gray-200/30 dark:border-gray-800/50"
              >
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

              <figure
                data-parallax="0.16"
                className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-gray-200/30 dark:border-gray-800/50"
              >
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
          </ParallaxGroup>
        </div>
      </Section>

      {/* Featured Projects */}
      <Section id="projects" title="Featured projects" subtitle="Real-world finance + data work with measurable outcomes.">
        <div className="grid md:grid-cols-3 gap-6">
          <ProjectCard
            title="Month-end Automation"
            subtitle="Automated SAP → Excel reports with VBA to reduce manual steps & errors"
            kpi="−30% manual errors"
            tags={["SAP FI", "Excel VBA", "Automation"]}
            href="/projects#month-end-automation"
            cta="View project"
          />
          <ProjectCard
            title="Working-hours Compliance Tracker"
            subtitle="Validated HR hours against policy & labor limits; anomaly detection"
            tags={["ADP", "Excel", "Automation"]}
            href="/projects#compliance-tracker"
            cta="View project"
          />
          <ProjectCard
            title="DCC-GARCH Brexit Risk Study"
            subtitle="Modeled correlations and risk channels post-Brexit"
            tags={["Python", "Risk Modeling", "Time Series"]}
            href="/projects#dcc-garch"
            cta="View project"
          />
        </div>
      </Section>

      {/* Experience */}
      <Section title="Experience">
        <div className="grid md:grid-cols-12 gap-6">
          {/* Left: timeline (unchanged content) */}
          <div className="md:col-span-8">
            <Timeline
              items={[
                {
                  role: "Accounting & Payroll Intern",
                  org: "Texas Instruments",
                  loc: "Freising, Germany",
                  period: "Aug 2024 – Aug 2025",
                  bullets: [
                    "Automated month-end reports using SAP/Excel (VBA), reducing manual errors by 30%.",
                    "Supported HR tracking employees’ working hours to ensure labor law compliance.",
                    "Prepared GL accounts and reconciliations under HGB/IFRS.",
                    "Served as Intern Chair; onboarding support and cross-department events.",
                  ],
                },
                {
                  role: "Accounting Assistant",
                  org: "Mami Love (E-Commerce)",
                  loc: "Taipei, Taiwan",
                  period: "Sep 2021 – Aug 2022",
                  bullets: [
                    "Managed AP/AR, reconciling €700K+ in monthly transactions.",
                    "Achieved 100% on-time vendor payments by resolving invoice disputes (50+ partners).",
                    "Assisted in financial closings: ledger matching and credit card validation.",
                  ],
                },
                {
                  role: "Bank Teller Intern",
                  org: "Taishin International Bank",
                  loc: "Taipei, Taiwan",
                  period: "Jul 2021 – Aug 2021",
                  bullets: [
                    "Processed high-volume transactions; fraud-prevention protocols.",
                    "Advised clients on account services.",
                  ],
                },
              ]}
            />
          </div>

          {/* Right: visual showcase (sticky on desktop) */}
          <aside className="md:col-span-4">
            <AutomationShowcase />
          </aside>
        </div>
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
