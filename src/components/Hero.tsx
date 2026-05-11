import { ArrowDownRight, BadgeCheck } from "lucide-react";
import portrait from "@/assets/khiran-portrait.jpg";

export function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
      {/* archival index marker */}
      <div className="absolute top-28 right-6 lg:right-10 mono text-[0.62rem] tracking-[0.3em] text-muted-foreground uppercase">
        Portfolio · MMXXVI
      </div>
      <div className="absolute top-28 left-6 lg:left-10 mono text-[0.62rem] tracking-[0.3em] text-muted-foreground uppercase">
        N° 001 · Chennai
      </div>

      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Eyebrow */}
        <div className="flex items-center gap-4 animate-fade-up">
          <span className="chapter-num">00 — A Personal Practice</span>
          <span className="h-px flex-1 max-w-[120px] bg-[var(--rule)]" />
          <span className="stamp">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--highlight)]" />
            MBBS · MD · NABL
          </span>
        </div>

        {/* 2-column editorial split */}
        <div className="mt-12 grid grid-cols-12 gap-y-10 gap-x-6 lg:gap-x-12 items-end">
          {/* LEFT — name + lede */}
          <div className="col-span-12 lg:col-span-7 order-2 lg:order-1">
            <div
              className="mono text-[0.7rem] uppercase tracking-[0.32em] text-primary animate-fade-up"
              style={{ animationDelay: "0.05s" }}
            >
              Dr. Khiran Athithyaa
            </div>

            <h1
              className="mt-4 serif font-normal leading-[0.9] tracking-[-0.035em] animate-fade-up"
              style={{ animationDelay: "0.1s", fontSize: "clamp(2.75rem, 8.5vw, 7.5rem)" }}
            >
              The quiet <em className="italic text-primary">art</em>
              <br />
              of reading
              <br />
              the <span className="relative inline-block">
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

            <p
              className="mt-10 serif text-xl lg:text-2xl leading-snug max-w-xl text-pretty animate-fade-up"
              style={{ animationDelay: "0.25s" }}
            >
              Consultant pathologist & founder of a small diagnostic practice in
              Mylapore — <span className="italic">half laboratory, half library</span>,
              measuring what the body whispers before it speaks.
            </p>

            <div
              className="mt-10 flex flex-wrap items-center gap-6 animate-fade-up"
              style={{ animationDelay: "0.35s" }}
            >
              <a
                href="#appointment"
                className="group inline-flex items-center gap-3 rounded-full px-6 py-3.5 text-sm tracking-tight"
                style={{ background: "var(--ink)", color: "var(--paper)" }}
              >
                Book a consultation
                <span className="grid h-7 w-7 place-items-center rounded-full border border-[oklch(1_0_0/0.25)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowDownRight className="h-3.5 w-3.5 rotate-[-45deg]" />
                </span>
              </a>
              <a href="#about" className="editorial-link mono text-[0.72rem] uppercase tracking-[0.28em] text-foreground/80">
                Read the practice notes
              </a>
            </div>

            {/* Ledger row */}
            <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-px bg-[var(--rule)] border border-[var(--rule)] rounded-sm overflow-hidden">
              {[
                ["15 yrs", "At the bench"],
                ["50,420", "Reports authored"],
                ["124", "Panels offered"],
                ["99.8%", "Accuracy index"],
              ].map(([k, v]) => (
                <div key={v} className="bg-card px-5 py-4">
                  <div className="serif text-2xl leading-none">{k}</div>
                  <div className="mt-1.5 mono text-[0.58rem] uppercase tracking-[0.24em] text-muted-foreground">
                    {v}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — portrait */}
          <div
            className="col-span-12 lg:col-span-5 order-1 lg:order-2 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <figure className="relative">
              {/* index strip */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 mono text-[0.58rem] uppercase tracking-[0.32em] bg-[var(--paper)] px-3 py-1 border border-[var(--rule)] rounded-full">
                Plate I · Portrait
              </div>

              <div className="ink-card rounded-sm p-2 grain rotate-[-1.2deg]">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2px] bg-muted">
                  <img
                    src={portrait}
                    alt="Dr. Khiran Athithyaa — Consultant Pathologist"
                    width={1024}
                    height={1280}
                    className="absolute inset-0 h-full w-full object-cover"
                    style={{ filter: "contrast(1.02) saturate(0.92)" }}
                  />
                  {/* warm vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.18_0.015_60/0.35)] via-transparent to-transparent" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-[oklch(0.18_0.015_60/0.18)]" />

                  {/* corner crosshairs */}
                  <Crosshair className="top-3 left-3" />
                  <Crosshair className="top-3 right-3" />
                  <Crosshair className="bottom-3 left-3" />
                  <Crosshair className="bottom-3 right-3" />

                  {/* badge */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between mono text-[0.58rem] uppercase tracking-[0.28em] text-paper/95">
                    <span className="inline-flex items-center gap-1.5">
                      <BadgeCheck className="h-3 w-3 text-[oklch(0.85_0.09_165)]" />
                      Verified · NABL
                    </span>
                    <span>MMXXVI</span>
                  </div>

                  {/* faint ECG line */}
                  <svg
                    viewBox="0 0 400 80"
                    className="absolute top-1/2 left-0 w-full h-8 opacity-60"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 40 L80 40 L92 40 L100 20 L108 60 L120 35 L140 40 L200 40 L212 40 L220 22 L228 58 L240 40 L400 40"
                      fill="none"
                      stroke="oklch(0.95 0.05 165)"
                      strokeWidth="1"
                      className="ecg-path"
                    />
                  </svg>
                </div>
              </div>

              <figcaption className="mt-3 flex items-center justify-between mono text-[0.6rem] uppercase tracking-[0.3em] text-muted-foreground">
                <span>Dr. K. Athithyaa</span>
                <span>Founder · Pathologist</span>
              </figcaption>
            </figure>
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

function Crosshair({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute ${className} h-3 w-3 pointer-events-none`}>
      <span className="absolute inset-x-0 top-1/2 h-px bg-paper/70" />
      <span className="absolute inset-y-0 left-1/2 w-px bg-paper/70" />
    </div>
  );
}
