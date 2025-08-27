"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type KPIItem = {
  label: string;
  value: number;       // target number (supports negatives)
  prefix?: string;     // e.g. "≈"
  suffix?: string;     // e.g. "%"
  decimals?: number;   // e.g. 0, 1, 2
  spark?: number[];    // array of y-values for sparkline
};

export default function KPIs({ items }: { items: KPIItem[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const node = ref.current;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(true);
        });
      },
      { threshold: 0.3 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {items.map((it) => (
        <KpiCard key={it.label} active={active} {...it} />
      ))}
    </div>
  );
}

function KpiCard({
  label, value, prefix = "", suffix = "", decimals = 0, spark = []
}: { label: string; value: number; prefix?: string; suffix?: string; decimals?: number; spark?: number[] } & { active: boolean }) {
  const [display, setDisplay] = useState(0);

  const { min, max } = useMemo(() => {
    if (!spark.length) return { min: 0, max: 0 };
    let mi = spark[0], ma = spark[0];
    for (const v of spark) { if (v < mi) mi = v; if (v > ma) ma = v; }
    if (mi === ma) { ma = mi + 1; }
    return { min: mi, max: ma };
  }, [spark]);

  // animated count-up (respects reduced motion)
  useEffect(() => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reduce) { setDisplay(value); return; }

    let raf = 0;
    const start = performance.now();
    const dur = 1200; // ms
    const from = 0;
    const to = value;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / dur);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(from + (to - from) * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value]);

  // simple sparkline path
  const path = useMemo(() => {
    if (!spark.length) return "";
    const W = 120, H = 36, P = 4;
    const rng = max - min;
    const step = (W - P * 2) / (spark.length - 1 || 1);
    const yMap = (v: number) => H - P - ((v - min) / rng) * (H - P * 2);
    return spark
      .map((v, i) => `${i === 0 ? "M" : "L"} ${P + i * step} ${yMap(v)}`)
      .join(" ");
  }, [spark, min, max]);

  return (
    <div className="rounded-xl border border-gray-200/60 dark:border-gray-800/60 p-4 bg-white/40 dark:bg-gray-900/30 backdrop-blur-sm">
      <div className="text-2xl font-semibold">
        {prefix}
        {display.toLocaleString(undefined, { maximumFractionDigits: decimals, minimumFractionDigits: decimals })}
        {suffix}
      </div>
      <div className="text-xs text-gray-500 mt-1">{label}</div>

      {spark.length > 0 && (
        <svg viewBox="0 0 120 36" className="mt-3 w-full">
          <path d={path} fill="none" className="stroke-emerald-500 dark:stroke-emerald-400" strokeWidth="2" />
        </svg>
      )}
    </div>
  );
}
