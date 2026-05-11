import { Label } from "./About";
import { Activity, TrendingUp, Brain, Gauge } from "lucide-react";

export function Analytics() {
  return (
    <section id="analytics" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Label>AI Health Analytics</Label>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
              Your reports, <span className="text-gradient">decoded by intelligence.</span>
            </h2>
            <p className="mt-6 max-w-lg text-muted-foreground">
              Every report is paired with an AI-assisted insight layer — surfacing
              patterns, trends and preventive cues, so you understand what your
              numbers actually mean for your wellbeing.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: Brain, t: "Smart Insights", d: "Plain-language summary of every value." },
                { icon: TrendingUp, t: "Trend Tracking", d: "Compare health across visits over time." },
                { icon: Gauge, t: "Risk Scoring", d: "Personalized preventive risk indicators." },
                { icon: Activity, t: "Wellness Score", d: "A single number to track holistic health." },
              ].map((f) => (
                <div key={f.t} className="glass rounded-2xl p-4">
                  <f.icon className="h-5 w-5 text-primary" />
                  <div className="mt-3 font-semibold">{f.t}</div>
                  <div className="text-xs text-muted-foreground">{f.d}</div>
                </div>
              ))}
            </div>
          </div>

          <Dashboard />
        </div>
      </div>
    </section>
  );
}

function Dashboard() {
  const metrics = [
    { label: "Hemoglobin", val: "14.8", unit: "g/dL", pct: 78, tag: "Optimal" },
    { label: "HbA1c", val: "5.4", unit: "%", pct: 62, tag: "Healthy" },
    { label: "Vit D", val: "32", unit: "ng/mL", pct: 55, tag: "Watch" },
    { label: "LDL", val: "98", unit: "mg/dL", pct: 70, tag: "Optimal" },
  ];
  return (
    <div className="relative">
      <div
        className="absolute -inset-6 rounded-[2.5rem] opacity-50 blur-2xl"
        style={{ background: "var(--gradient-primary)" }}
        aria-hidden
      />
      <div
        className="relative overflow-hidden rounded-3xl p-6 shadow-[var(--shadow-elev)]"
        style={{ background: "var(--gradient-card)" }}
      >
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Patient · #ATH-2048
            </div>
            <div className="mt-1 font-display text-xl font-semibold">Wellness Snapshot</div>
          </div>
          <div className="text-right">
            <div className="font-display text-3xl font-semibold text-gradient">86</div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
              Wellness Score
            </div>
          </div>
        </div>

        {/* fake chart */}
        <div className="mt-6 h-32 rounded-2xl border border-border/60 bg-background/40 p-3">
          <svg viewBox="0 0 300 100" className="h-full w-full">
            <defs>
              <linearGradient id="ag" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.74 0.14 210)" stopOpacity="0.6" />
                <stop offset="100%" stopColor="oklch(0.74 0.14 210)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0 80 L30 70 L60 75 L90 55 L120 60 L150 40 L180 48 L210 28 L240 35 L270 18 L300 24 L300 100 L0 100 Z"
              fill="url(#ag)"
            />
            <path
              d="M0 80 L30 70 L60 75 L90 55 L120 60 L150 40 L180 48 L210 28 L240 35 L270 18 L300 24"
              fill="none"
              stroke="oklch(0.74 0.14 210)"
              strokeWidth="2"
            />
          </svg>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          {metrics.map((m) => (
            <div key={m.label} className="rounded-xl border border-border/60 bg-background/40 p-3">
              <div className="flex items-baseline justify-between">
                <span className="text-xs text-muted-foreground">{m.label}</span>
                <span className="text-[10px] uppercase tracking-wider text-primary">{m.tag}</span>
              </div>
              <div className="mt-1 font-display text-lg font-semibold">
                {m.val}
                <span className="ml-1 text-xs text-muted-foreground">{m.unit}</span>
              </div>
              <div className="mt-2 h-1 overflow-hidden rounded-full bg-secondary">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${m.pct}%`,
                    background: "var(--gradient-primary)",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
