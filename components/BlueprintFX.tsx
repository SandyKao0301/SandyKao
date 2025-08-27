"use client";

export default function BlueprintFX() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 -z-10 pointer-events-none opacity-60 dark:opacity-40"
      style={{
        background:
          `
          linear-gradient(rgba(127,127,127,0.08) 1px, transparent 1px),
          linear-gradient(90deg, rgba(127,127,127,0.08) 1px, transparent 1px),
          linear-gradient(rgba(16,185,129,0.10) 1px, transparent 1px),
          linear-gradient(90deg, rgba(16,185,129,0.10) 1px, transparent 1px)
          `,
        backgroundSize: "24px 24px, 24px 24px, 120px 120px, 120px 120px",
        backgroundPosition: "0 0, 0 0, 0 0, 0 0",
        maskImage:
          "linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.3) 40%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.3) 40%, transparent)",
      }}
    />
  );
}
