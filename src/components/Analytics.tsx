import { ChapterHeader } from "./About";
import { TrendingUp, AlertCircle, CheckCircle2 } from "lucide-react";

export function Analytics() {
  return (
    <section id="analytics" className="relative py-28 lg:py-36 bg-[color-mix(in_oklab,var(--surface)_70%,var(--paper))]">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <ChapterHeader num="03" title="The Reading Room" />

        <div className="mt-14 grid grid-cols-12 gap-y-10 gap-x-6 lg:gap-x-10">
          <div className="col-span-12 lg:col-span-5">
            <h2 className="serif text-4xl lg:text-5xl leading-[0.98] tracking-[-0.025em]">
              Numbers, set in
              <em className="italic text-primary"> their context</em>.
            </h2>
            <p className="mt-6 text-foreground/70 leading-relaxed max-w-md">
              Each report arrives with a quiet narrative — six-month trends,
              interval comparisons, and an annotation from the reviewing
              physician. The data is yours to keep, indexed forever.
            </p>

            <div className="mt-10 space-y-3 mono text-[0.72rem] uppercase tracking-[0.24em]">
              <Row label="Lipid · LDL" value="92 mg/dL" status="ok" />
              <Row label="HbA1c" value="5.4 %" status="ok" />
              <Row label="Vit. D₃" value="22 ng/mL" status="watch" />
              <Row label="Haemoglobin" value="14.8 g/dL" status="ok" />
            </div>
          </div>

          {/* Chart card */}
          <div className="col-span-12 lg:col-span-7">
            <div className="ink-card rounded-sm p-6 lg:p-8 grain">
              <div className="flex items-baseline justify-between border-b border-[var(--rule)] pb-4">
                <div>
                  <div className="mono text-[0.62rem] uppercase tracking-[0.28em] text-muted-foreground">
                    Patient № A-7010 · Wellness ledger
                  </div>
                  <div className="mt-1 serif text-2xl">Six-month trend</div>
                </div>
                <div className="mono text-[0.62rem] uppercase tracking-[0.24em] text-primary flex items-center gap-1.5">
                  <TrendingUp className="h-3 w-3" /> Improving
                </div>
              </div>

              <div className="relative mt-8">
                <svg viewBox="0 0 600 220" className="w-full h-auto">
                  <defs>
                    <linearGradient id="fadefill" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0" stopColor="oklch(0.42 0.09 165)" stopOpacity="0.25" />
                      <stop offset="1" stopColor="oklch(0.42 0.09 165)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {/* grid */}
                  {[40, 90, 140, 190].map((y) => (
                    <line
                      key={y}
                      x1="40"
                      x2="590"
                      y1={y}
                      y2={y}
                      stroke="oklch(0.18 0.015 60 / 0.08)"
                      strokeDasharray="2 4"
                    />
                  ))}
                  {/* y-axis labels */}
                  {[
                    { y: 44, v: "180" },
                    { y: 94, v: "140" },
                    { y: 144, v: "100" },
                    { y: 194, v: "60" },
                  ].map((t) => (
                    <text
                      key={t.v}
                      x="10"
                      y={t.y}
                      fontFamily="JetBrains Mono, monospace"
                      fontSize="9"
                      fill="oklch(0.42 0.012 60)"
                    >
                      {t.v}
                    </text>
                  ))}
                  {/* area */}
                  <path
                    d="M 40 80 L 130 100 L 220 70 L 310 110 L 400 90 L 490 130 L 590 115 L 590 200 L 40 200 Z"
                    fill="url(#fadefill)"
                  />
                  {/* line */}
                  <path
                    d="M 40 80 L 130 100 L 220 70 L 310 110 L 400 90 L 490 130 L 590 115"
                    fill="none"
                    stroke="oklch(0.42 0.09 165)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {/* points */}
                  {[
                    [40, 80], [130, 100], [220, 70], [310, 110], [400, 90], [490, 130], [590, 115],
                  ].map(([x, y], i) => (
                    <g key={i}>
                      <circle cx={x} cy={y} r="3.5" fill="var(--paper)" stroke="oklch(0.42 0.09 165)" strokeWidth="1.5" />
                    </g>
                  ))}
                  {/* x labels */}
                  {["Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((m, i) => (
                    <text
                      key={m}
                      x={40 + i * 91.6}
                      y="215"
                      fontFamily="JetBrains Mono, monospace"
                      fontSize="9"
                      fill="oklch(0.42 0.012 60)"
                      textAnchor="middle"
                    >
                      {m.toUpperCase()}
                    </text>
                  ))}
                </svg>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-px bg-[var(--rule)] border border-[var(--rule)]">
                {[
                  { k: "Cholesterol", v: "162", d: "mg/dL", t: "−12%" },
                  { k: "Glucose", v: "94", d: "mg/dL", t: "−4%" },
                  { k: "Vit. B₁₂", v: "486", d: "pg/mL", t: "+18%" },
                ].map((m) => (
                  <div key={m.k} className="bg-card p-4">
                    <div className="mono text-[0.6rem] uppercase tracking-[0.24em] text-muted-foreground">
                      {m.k}
                    </div>
                    <div className="mt-1.5 flex items-baseline gap-1.5">
                      <span className="serif text-2xl">{m.v}</span>
                      <span className="mono text-[0.62rem] text-muted-foreground">{m.d}</span>
                    </div>
                    <div className="mono text-[0.62rem] text-primary mt-1">{m.t} vs. prev.</div>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-4 mono text-[0.62rem] uppercase tracking-[0.28em] text-muted-foreground">
              Annotated by Dr. Khiran A. · Last reviewed 04 May MMXXVI
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ label, value, status }: { label: string; value: string; status: "ok" | "watch" }) {
  return (
    <div className="flex items-center justify-between border-b border-[var(--rule)] pb-3">
      <span className="text-foreground/70">{label}</span>
      <span className="flex items-center gap-2 text-foreground">
        {value}
        {status === "ok" ? (
          <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
        ) : (
          <AlertCircle className="h-3.5 w-3.5 text-[var(--highlight)]" />
        )}
      </span>
    </div>
  );
}
