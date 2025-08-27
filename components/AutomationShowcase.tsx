"use client";

export default function AutomationShowcase() {
  return (
    <div className="card card-gradient sticky top-24">
      <h3 className="font-semibold">Automation flow</h3>
      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
        From source systems to a clean, auditable report.
      </p>

      <div className="mt-4">
        {/* Responsive SVG */}
        <svg
          viewBox="0 0 420 260"
          className="w-full h-auto"
          role="img"
          aria-label="Data pipeline from SAP and ADP through automation into final report"
        >
          <defs>
            {/* line color */}
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(16,185,129)" />
              <stop offset="100%" stopColor="rgb(34,211,238)" />
            </linearGradient>

            {/* node glow */}
            <radialGradient id="glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(16,185,129,.9)" />
              <stop offset="100%" stopColor="rgba(16,185,129,0)" />
            </radialGradient>
          </defs>

          {/* CONNECTIONS (animated dashed strokes) */}
          <g
            fill="none"
            stroke="url(#grad)"
            strokeWidth="3"
            strokeLinecap="round"
            className="pipe"
          >
            {/* SAP → Automate */}
            <path d="M90 70 C 150 70, 160 70, 210 95" />
            {/* ADP → Automate */}
            <path d="M90 180 C 150 180, 160 180, 210 155" />
            {/* Automate → Checks */}
            <path d="M210 125 C 260 125, 280 125, 310 125" />
            {/* Checks → Report */}
            <path d="M310 125 C 340 125, 360 125, 380 125" />
          </g>

          {/* NODES */}
          {/* SAP */}
          <g transform="translate(70,70)">
            <circle r="18" fill="url(#glow)" />
            <circle r="10" className="node" />
            <text y="36" textAnchor="middle" className="label">SAP FI</text>
          </g>

          {/* ADP */}
          <g transform="translate(70,180)">
            <circle r="18" fill="url(#glow)" />
            <circle r="10" className="node" />
            <text y="36" textAnchor="middle" className="label">ADP</text>
          </g>

          {/* AUTOMATE */}
          <g transform="translate(210,125)">
            <circle r="26" fill="url(#glow)" />
            <circle r="14" className="node hub" />
            <text y="38" textAnchor="middle" className="label">Python / VBA / SQL</text>
            {/* tiny gear */}
            <g className="gear" transform="translate(-2,-2)">
              <circle r="6" fill="none" stroke="currentColor" />
              <g stroke="currentColor">
                <path d="M0,-9 v4" />
                <path d="M0,9 v-4" />
                <path d="M-9,0 h4" />
                <path d="M9,0 h-4" />
                <path d="M6.3,6.3 l-3,-3" />
                <path d="M-6.3,-6.3 l3,3" />
                <path d="M6.3,-6.3 l-3,3" />
                <path d="M-6.3,6.3 l3,-3" />
              </g>
            </g>
          </g>

          {/* CHECKS */}
          <g transform="translate(310,125)">
            <circle r="20" fill="url(#glow)" />
            <circle r="12" className="node" />
            <text y="36" textAnchor="middle" className="label">Checks &amp; Pivot</text>
          </g>

          {/* REPORT */}
          <g transform="translate(380,125)">
            <rect x="-14" y="-10" width="28" height="20" rx="3" className="report" />
            <text y="36" textAnchor="middle" className="label">Report</text>
          </g>
        </svg>
      </div>

      <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
        Typical run: import → validate → reconcile → summarize. Re-usable, documented, auditable.
      </p>

      {/* Local styles & motion control */}
      <style jsx>{`
        .label {
          font-size: 11px;
          fill: rgba(255,255,255,.85);
        }
        .node {
          fill: rgba(16,185,129,.9);
          stroke: rgba(255,255,255,.6);
          stroke-width: 1;
          animation: pulse 2.2s ease-in-out infinite;
        }
        .hub { animation-duration: 1.8s; }
        .report {
          fill: rgba(16,185,129,.15);
          stroke: rgba(34,211,238,.7);
          stroke-width: 2;
        }
        .pipe path {
          stroke-dasharray: 6 10;
          stroke-dashoffset: 240;
          animation: dash 4.5s linear infinite;
        }
        .pipe path:nth-child(2) { animation-delay: .6s; }
        .pipe path:nth-child(3) { animation-delay: 1.2s; }
        .pipe path:nth-child(4) { animation-delay: 1.8s; }

        .gear {
          color: rgba(255,255,255,.75);
          animation: spin 6s linear infinite;
        }

        @keyframes dash { to { stroke-dashoffset: 0; } }
        @keyframes pulse {
          0%,100% { r: 10; opacity: .85; }
          50%     { r: 13; opacity: 1; }
        }
        @keyframes spin { to { transform: rotate(360deg) translate(-2px,-2px); } }

        /* Respect reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .pipe path,
          .node,
          .gear { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
