import EmailLink from "@/components/EmailLink";

export const metadata = { title: "Resume — Sandy Kao" };

export default function ResumePage(){
  // Works locally and on GitHub Pages (/SandyKao)
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <div className="container py-12 print:py-0">
      <div className="card max-w-4xl mx-auto">
        {/* Header with details on the left and portrait on the right */}
        <header className="grid gap-4 md:grid-cols-[1fr,260px] items-start">
          <div className="md:pr-4">
            {/* Name + Download button (moved here) */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h1 className="text-2xl font-semibold">Yu-Hsuan (Sandy) Kao</h1>
              <a
                className="btn-outline no-print shrink-0"
                href={`${base}/assets/CV.pdf`}
                download
              >
                Download PDF
              </a>
            </div>

            <h2 className="mt-3 font-semibold uppercase tracking-wide text-sm">Personal Details</h2>
            <div className="mt-1 h-[2px] bg-gray-300 dark:bg-gray-700" />

            <dl className="mt-3 grid grid-cols-[auto,1fr] gap-x-4 gap-y-2 text-sm">
              <dt className="font-medium">Name</dt>
              <dd>Yu-Hsuan, Kao (Sandy Kao)</dd>

              <dt className="font-medium">Date of birth</dt>
              <dd>01.03.2000</dd>

              <dt className="font-medium">Place of birth</dt>
              <dd>Taipei, Taiwan</dd>

              <dt className="font-medium">Nationality</dt>
              <dd>Taiwanese</dd>

              <dt className="font-medium">Phone</dt>
              <dd>+49 (0) 176 372 73895</dd>

              <dt className="font-medium">Email</dt>
              <dd><EmailLink /></dd>
            </dl>
          </div>

          {/* Portrait */}
          <div className="justify-self-end">
            <img
              src={`${base}/assets/Sandy_portrait.jpg`}
              alt="Sandy Kao — professional portrait"
              className="rounded-2xl border border-gray-200/50 dark:border-gray-800/50 object-cover aspect-[3/4] w-full max-w-[260px] print:max-w-[150px] print:rounded-md"
            />
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mt-6">
          <h2 className="font-semibold text-lg">Professional Summary</h2>
          <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
            Finance graduate with international experience in reporting, risk analysis, and financial operations across Europe and Asia.
            Skilled in SAP, Excel/VBA, and financial data analytics, with proven success in improving workflows, ensuring compliance, and delivering precise reporting.
          </p>
        </section>

        {/* Experience */}
        <section className="mt-6">
          <h2 className="font-semibold text-lg">Experience</h2>
          <div className="mt-3 space-y-4 text-sm">
            <div>
              <div className="font-medium">Accounting & Payroll Intern — Texas Instruments</div>
              <div className="text-gray-500">Freising, Germany · Aug 2024 – Aug 2025</div>
              <ul className="list-disc ml-5 mt-2 space-y-1">
                <li>Automated month-end reports using SAP/Excel (VBA), reducing manual errors by 30%.</li>
                <li>Supported HR tracking employees’ working hours to ensure labor law compliance.</li>
                <li>Prepared general ledger account and reconciliations under HGB/IFRS.</li>
                <li>Served as Intern Chair with onboarding support and events to strengthen team collaboration.</li>
              </ul>
            </div>
            <div>
              <div className="font-medium">Accounting Assistant — Mami Love (E-Commerce)</div>
              <div className="text-gray-500">Taipei, Taiwan · Sep 2021 – Aug 2022</div>
              <ul className="list-disc ml-5 mt-2 space-y-1">
                <li>Managed accounts payable/receivable, reconciling €700K+ in monthly transactions.</li>
                <li>Achieved 100% on-time vendor payments by resolving invoice disputes with 50+ partners.</li>
                <li>Assisted in financial closings: ledger matching and credit card validation.</li>
              </ul>
            </div>
            <div>
              <div className="font-medium">Bank Teller Intern — Taishin International Bank</div>
              <div className="text-gray-500">Taipei, Taiwan · Jul 2021 – Aug 2021</div>
              <ul className="list-disc ml-5 mt-2 space-y-1">
                <li>Processed high-volume transactions and advised clients on account services.</li>
                <li>Executed accurate cash handling and strict fraud prevention protocols.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education & Skills */}
        <section className="mt-6 grid sm:grid-cols-2 gap-6 text-sm">
          <div>
            <h2 className="font-semibold text-lg">Education</h2>
            <ul className="mt-2 space-y-2">
              <li>
                <div className="font-medium">M.Sc. Economics and Finance</div>
                <div className="text-gray-500">Eberhard Karls Universität Tübingen, Germany · Oct 2022 – Present</div>
              </li>
              <li>
                <div className="font-medium">B.A. Global Financial Management</div>
                <div className="text-gray-500">Tamkang University, New Taipei City, Taiwan · Sep 2018 – Jun 2022</div>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-lg">Skills</h2>
            <ul className="mt-2 space-y-1">
              <li><strong>Programming:</strong> Python, R, VBA (Macro), SQL</li>
              <li><strong>Computing:</strong> MS Office (Word, Excel, PowerPoint), Outlook, SAP (FI), ADP, Google Sheets</li>
              <li><strong>Languages:</strong> Mandarin (Native), English (C1), German (B1)</li>
            </ul>
          </div>
        </section>

        {/* Coursework */}
        <section className="mt-6 text-sm">
          <h2 className="font-semibold text-lg">Coursework</h2>
          <p className="mt-2">CFA Level 1, Advanced Corporate Finance, Computational Macroeconomics, Continuous-time Derivatives Pricing, Applied Statistics</p>
        </section>

        {/* Voluntary */}
        <section className="mt-6 text-sm">
          <h2 className="font-semibold text-lg">Voluntary & Practical Experience</h2>
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>Taiwan Ministry of Science and Technology — Government Sponsored Researcher (Aug 2021 – Mar 2022)</li>
            <li>Waker Charity Association — Instructor (Aug 2020 – Jan 2021)</li>
            <li>Hult Prize — Project Leader (Sep 2020 – Dec 2020)</li>
          </ul>
        </section>

        <footer className="mt-8 text-xs text-gray-500">
          Updated: 26.08.2025
        </footer>
      </div>
    </div>
  )
}
