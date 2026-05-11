import { ShieldCheck, Microscope, HeartPulse } from "lucide-react";

const pillars = [
  {
    icon: ShieldCheck,
    num: "I",
    title: "Precision, as a discipline.",
    text: "NABL-grade chemistry, dual-verified by senior pathologists. Every report is signed, dated, and archived for ten years.",
  },
  {
    icon: Microscope,
    num: "II",
    title: "Prevention, as a practice.",
    text: "Curated panels that map risk well before symptom. The earliest possible reading of a quiet body.",
  },
  {
    icon: HeartPulse,
    num: "III",
    title: "Patients, as people.",
    text: "Gentle phlebotomy. Clear explanations. A waiting room that feels like a study, not a clinic.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <ChapterHeader num="01" title="The Practice" />

        <div className="mt-14 grid grid-cols-12 gap-y-12 gap-x-6 lg:gap-x-10">
          <div className="col-span-12 lg:col-span-7">
            <h2 className="serif text-5xl lg:text-6xl leading-[0.95] tracking-[-0.025em] text-balance">
              A diagnostic atelier — where
              <em className="italic text-primary"> the laboratory </em>
              meets the
              <em className="italic"> bedside</em>.
            </h2>
            <p className="mt-8 text-[1.05rem] leading-relaxed text-foreground/75 max-w-prose drop-cap">
              Athithyaa Diagnostics was founded on a single conviction: that
              medicine is read, not guessed. Each panel we run is treated as a
              page in a longer manuscript — your manuscript — to be studied
              with patience, indexed with care, and returned with clarity.
              We blend modern chemistry with the unhurried craft of the
              old-school physician.
            </p>

            <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 mono text-[0.7rem] uppercase tracking-[0.28em] text-foreground/70">
              <span><span className="text-primary mr-2">→</span>NABL Accredited</span>
              <span><span className="text-primary mr-2">→</span>ISO 15189</span>
              <span><span className="text-primary mr-2">→</span>Digital signed reports</span>
            </div>
          </div>

          {/* Pillars stacked as ledger entries */}
          <ol className="col-span-12 lg:col-span-5 lg:col-start-8 space-y-0">
            {pillars.map((p) => (
              <li
                key={p.title}
                className="group grid grid-cols-[auto,1fr] gap-6 border-t border-[var(--rule)] py-7 last:border-b transition-colors hover:bg-[color-mix(in_oklab,var(--primary)_4%,transparent)] px-2 -mx-2 rounded-sm"
              >
                <div className="flex flex-col items-center gap-2 pt-1">
                  <span className="mono text-[0.62rem] uppercase tracking-[0.28em] text-primary">
                    {p.num}
                  </span>
                  <p.icon className="h-4 w-4 text-foreground/60" strokeWidth={1.4} />
                </div>
                <div>
                  <h3 className="serif text-2xl leading-tight">{p.title}</h3>
                  <p className="mt-2 text-sm text-foreground/65 leading-relaxed">
                    {p.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export function ChapterHeader({ num, title }: { num: string; title: string }) {
  return (
    <div className="flex items-end justify-between gap-6 border-b border-[var(--rule)] pb-5">
      <div className="flex items-baseline gap-5">
        <span className="chapter-num">Ch. {num}</span>
        <span className="serif italic text-xl text-foreground/70">— {title}</span>
      </div>
      <span className="mono text-[0.6rem] uppercase tracking-[0.32em] text-muted-foreground hidden sm:block">
        §{num} / 07
      </span>
    </div>
  );
}

export function Label({ children }: { children: React.ReactNode }) {
  return <span className="label-eyebrow">{children}</span>;
}
