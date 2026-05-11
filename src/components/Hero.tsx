import { ArrowRight, Sparkles, ShieldCheck, Activity } from "lucide-react";
import heroImg from "@/assets/hero-diagnostics.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden pt-28">
      {/* layered backgrounds */}
      <div className="absolute inset-0 bg-hero" aria-hidden />
      <div className="absolute inset-0 bg-grid opacity-60" aria-hidden />
      <img
        src={heroImg}
        alt="Holographic medical diagnostics"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-screen"
      />
      <div
        className="absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, color-mix(in oklab, var(--background) 0%, transparent) 0%, var(--background) 70%)",
        }}
      />

      {/* floating orbs */}
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-float" />
      <div
        className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full blur-3xl animate-float"
        style={{ background: "color-mix(in oklab, var(--highlight) 25%, transparent)", animationDelay: "-3s" }}
      />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-16 lg:grid-cols-[1.1fr,0.9fr] lg:gap-16">
        <div className="flex flex-col justify-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-muted-foreground animate-fade-up">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            AI-powered precision diagnostics
          </div>

          <h1
            className="mt-6 font-display text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[1.02] tracking-tight animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="text-gradient">Precision Diagnostics.</span>
            <br />
            <span className="text-foreground/90">Trusted Healthcare.</span>
          </h1>

          <p
            className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Dr. Khiran Athithyaa Diagnostics is a futuristic medical clinic
            blending intelligent diagnostics, preventive wellness, and a
            patient‑first healthcare experience — engineered for clarity,
            accuracy, and trust.
          </p>

          <div
            className="mt-8 flex flex-wrap items-center gap-4 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href="#appointment"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[var(--gradient-primary)] px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]"
            >
              Book Health Checkup
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </a>
            <a
              href="#analytics"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary/60"
            >
              <Activity className="h-4 w-4 text-primary" />
              AI Diagnostics Assistant
            </a>
          </div>

          <div
            className="mt-12 grid max-w-lg grid-cols-3 gap-4 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            {[
              { k: "50K+", v: "Reports Delivered" },
              { k: "120+", v: "Diagnostic Tests" },
              { k: "99.8%", v: "Accuracy Rate" },
            ].map((s) => (
              <div key={s.v} className="glass rounded-2xl p-4">
                <div className="text-2xl font-display font-semibold text-gradient">
                  {s.k}
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Holographic diagnostic panel */}
        <div className="relative flex items-center justify-center">
          <div className="relative aspect-square w-full max-w-md">
            {/* rotating rings */}
            <div className="absolute inset-0 rounded-full border border-primary/30 animate-orbit" />
            <div
              className="absolute inset-6 rounded-full border border-dashed border-primary/20 animate-orbit"
              style={{ animationDirection: "reverse", animationDuration: "26s" }}
            />
            <div
              className="absolute inset-14 rounded-full border border-[color-mix(in_oklab,var(--highlight)_40%,transparent)] animate-orbit"
              style={{ animationDuration: "14s" }}
            />

            {/* core */}
            <div className="absolute inset-20 rounded-full glass glow-ring grid place-items-center overflow-hidden">
              <div className="absolute inset-0 scanline" />
              <div className="text-center">
                <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  Live Vitals
                </div>
                <div className="mt-2 font-display text-4xl font-semibold text-gradient">
                  72
                  <span className="ml-1 text-base text-muted-foreground">bpm</span>
                </div>
                <Heartbeat />
                <div className="mt-2 text-[11px] text-primary">Optimal · Stable</div>
              </div>
            </div>

            {/* orbiting badges */}
            <Badge label="DNA" pos="top-2 left-1/2 -translate-x-1/2" />
            <Badge label="WBC" pos="right-2 top-1/3" />
            <Badge label="O₂" pos="bottom-3 right-1/3" />
            <Badge label="BP" pos="left-2 bottom-1/3" />
          </div>
        </div>
      </div>

      <Marquee />
    </section>
  );
}

function Badge({ label, pos }: { label: string; pos: string }) {
  return (
    <div
      className={`absolute ${pos} glass rounded-full px-3 py-1.5 text-[10px] font-semibold tracking-wider text-foreground/90 animate-float`}
    >
      <span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_var(--primary)]" />
      {label}
    </div>
  );
}

function Heartbeat() {
  return (
    <svg viewBox="0 0 120 30" className="mx-auto mt-3 h-6 w-32">
      <path
        d="M0 15 L18 15 L24 5 L32 25 L42 15 L60 15 L68 8 L78 22 L88 15 L120 15"
        fill="none"
        stroke="url(#hbg)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="animate-heartbeat origin-center"
      />
      <defs>
        <linearGradient id="hbg" x1="0" x2="1">
          <stop offset="0" stopColor="oklch(0.74 0.14 210)" />
          <stop offset="1" stopColor="oklch(0.74 0.12 180)" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function Marquee() {
  const items = [
    "NABL-grade Precision",
    "Digital Reports in 4 Hours",
    "Home Sample Collection",
    "AI Health Analytics",
    "Preventive Wellness",
    "Expert Consultations",
  ];
  return (
    <div className="relative mt-8 overflow-hidden border-y border-border/60 py-4">
      <div className="flex animate-[orbit_40s_linear_infinite] gap-12 whitespace-nowrap will-change-transform" style={{ animationName: "shimmer" }}>
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            <span className="mr-3 text-primary">◆</span>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
