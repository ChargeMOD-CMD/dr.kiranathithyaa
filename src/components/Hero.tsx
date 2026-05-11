import { ArrowDownRight } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
      {/* archival index marker */}
      <div className="absolute top-28 right-6 lg:right-10 mono text-[0.62rem] tracking-[0.3em] text-muted-foreground uppercase">
        Vol. I · Folio 001 / 047
      </div>
      <div className="absolute top-28 left-6 lg:left-10 mono text-[0.62rem] tracking-[0.3em] text-muted-foreground uppercase">
        N° 7010 — MMXXVI
      </div>

      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Eyebrow */}
        <div className="flex items-center gap-4 animate-fade-up">
          <span className="chapter-num">00 — Prologue</span>
          <span className="h-px flex-1 max-w-[140px] bg-[var(--rule)]" />
          <span className="stamp">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--highlight)]" />
            NABL · Certified
          </span>
        </div>

        {/* Editorial headline */}
        <h1
          className="mt-10 serif font-normal leading-[0.92] tracking-[-0.035em] animate-fade-up"
          style={{ animationDelay: "0.1s", fontSize: "clamp(3rem, 9vw, 8.5rem)" }}
        >
          The quiet <em className="italic text-primary">art</em> of
          <br />
          knowing the <span className="relative inline-block">
            body.
            <svg
              viewBox="0 0 320 24"
              className="absolute -bottom-2 left-0 w-full"
              preserveAspectRatio="none"
            >
              <path
                d="M2 16 Q 80 2, 160 14 T 318 10"
                stroke="oklch(0.42 0.09 165)"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h1>

        {/* The asymmetric meta row */}
        <div className="mt-16 grid grid-cols-12 gap-y-10 gap-x-6 lg:gap-x-10">
          {/* Left: Lede */}
          <div
            className="col-span-12 lg:col-span-5 lg:col-start-1 animate-fade-up"
            style={{ animationDelay: "0.25s" }}
          >
            <p className="serif text-2xl leading-snug text-pretty">
              A monograph of preventive medicine assembled in Chennai —
              <span className="italic"> half laboratory, half library</span>,
              measuring what the body whispers before it speaks.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href="#appointment"
                className="group inline-flex items-center gap-3 rounded-full bg-ink text-paper px-6 py-3.5 text-sm tracking-tight"
                style={{ background: "var(--ink)", color: "var(--paper)" }}
              >
                Book a consultation
                <span className="grid h-7 w-7 place-items-center rounded-full border border-[oklch(1_0_0/0.25)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowDownRight className="h-3.5 w-3.5 rotate-[-45deg]" />
                </span>
              </a>
              <a href="#services" className="editorial-link mono text-[0.72rem] uppercase tracking-[0.28em] text-foreground/80">
                Browse the index of tests
              </a>
            </div>
          </div>

          {/* Center: portrait card */}
          <div
            className="col-span-12 lg:col-span-4 lg:col-start-7 animate-fade-up"
            style={{ animationDelay: "0.35s" }}
          >
            <figure className="relative">
              <div className="ink-card rounded-sm p-1.5 rotate-[-1.2deg] grain">
                <div
                  className="relative aspect-[4/5] overflow-hidden rounded-[2px]"
                  style={{
                    background:
                      "linear-gradient(160deg, oklch(0.92 0.014 80), oklch(0.88 0.018 80))",
                  }}
                >
                  {/* Engraved anatomical mark */}
                  <svg
                    viewBox="0 0 200 250"
                    className="absolute inset-0 h-full w-full p-8 opacity-90"
                  >
                    <defs>
                      <pattern id="dots" width="6" height="6" patternUnits="userSpaceOnUse">
                        <circle cx="1" cy="1" r="0.6" fill="oklch(0.18 0.015 60 / 0.35)" />
                      </pattern>
                    </defs>
                    {/* heart silhouette */}
                    <path
                      d="M100 60
                         C 70 30, 30 50, 50 100
                         C 60 130, 100 165, 100 200
                         C 100 165, 140 130, 150 100
                         C 170 50, 130 30, 100 60 Z"
                      fill="url(#dots)"
                      stroke="oklch(0.18 0.015 60 / 0.5)"
                      strokeWidth="0.8"
                    />
                    {/* annotation lines */}
                    <g stroke="oklch(0.18 0.015 60 / 0.55)" strokeWidth="0.5" fill="none">
                      <line x1="65" y1="80" x2="20" y2="50" />
                      <line x1="135" y1="80" x2="180" y2="50" />
                      <line x1="100" y1="200" x2="100" y2="235" />
                    </g>
                    <g
                      className="mono"
                      fontFamily="JetBrains Mono, monospace"
                      fontSize="5"
                      fill="oklch(0.18 0.015 60 / 0.75)"
                      letterSpacing="0.5"
                    >
                      <text x="6" y="46">Fig. A — Atrium</text>
                      <text x="148" y="46">Fig. B — Aorta</text>
                      <text x="78" y="245">VENTRICULUS</text>
                    </g>
                  </svg>

                  {/* faint ECG line */}
                  <svg
                    viewBox="0 0 400 80"
                    className="absolute bottom-6 left-0 w-full h-10"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 40 L80 40 L92 40 L100 20 L108 60 L120 35 L140 40 L200 40 L212 40 L220 22 L228 58 L240 40 L400 40"
                      fill="none"
                      stroke="oklch(0.42 0.09 165)"
                      strokeWidth="1.2"
                      className="ecg-path"
                    />
                  </svg>
                </div>
              </div>
              <figcaption className="mt-3 flex items-center justify-between mono text-[0.6rem] uppercase tracking-[0.3em] text-muted-foreground">
                <span>Plate I</span>
                <span>Hand-engraved · 1893 / restored MMXXVI</span>
              </figcaption>
            </figure>
          </div>

          {/* Right: numeric ledger */}
          <div
            className="col-span-12 lg:col-span-2 lg:col-start-11 animate-fade-up"
            style={{ animationDelay: "0.45s" }}
          >
            <div className="rule-strong" />
            <Ledger k="50,420" v="Reports authored" />
            <Ledger k="124" v="Test panels" />
            <Ledger k="99.8%" v="Accuracy index" />
            <Ledger k="4 hrs" v="Median turnaround" />
          </div>
        </div>

        {/* Marquee credit line */}
        <div className="mt-24 border-y border-[var(--rule)] py-5 overflow-hidden">
          <div className="flex gap-12 whitespace-nowrap animate-[marquee_40s_linear_infinite]">
            {[...Array(2)].map((_, n) => (
              <div key={n} className="flex gap-12 shrink-0">
                {[
                  "Haematology",
                  "Biochemistry",
                  "Endocrinology",
                  "Cardiac Markers",
                  "Molecular PCR",
                  "Histopathology",
                  "Preventive Panels",
                  "Home Phlebotomy",
                ].map((t) => (
                  <span
                    key={t}
                    className="mono text-[0.72rem] uppercase tracking-[0.34em] text-foreground/70"
                  >
                    <span className="mr-3 text-primary">✦</span>
                    {t}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Ledger({ k, v }: { k: string; v: string }) {
  return (
    <div className="border-b border-[var(--rule)] py-4">
      <div className="serif text-2xl leading-none">{k}</div>
      <div className="mt-1.5 mono text-[0.6rem] uppercase tracking-[0.24em] text-muted-foreground">
        {v}
      </div>
    </div>
  );
}
