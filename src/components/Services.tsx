import { Droplet, FlaskConical, Activity, Stethoscope, Pill, ScanLine, ShieldPlus, Brain, FileHeart } from "lucide-react";
import { Label } from "./About";

const groups = [
  {
    title: "General Diagnostics",
    desc: "Routine panels for everyday health.",
    items: [
      { icon: Droplet, name: "Blood Tests" },
      { icon: FlaskConical, name: "Urine Tests" },
      { icon: Activity, name: "Thyroid Profile" },
      { icon: Pill, name: "Diabetes Screening" },
      { icon: FileHeart, name: "Lipid Profile" },
    ],
  },
  {
    title: "Advanced Testing",
    desc: "Deeper insight panels for precision care.",
    items: [
      { icon: ScanLine, name: "Full Body Checkup" },
      { icon: Brain, name: "Hormonal Testing" },
      { icon: ShieldPlus, name: "Vitamin Deficiency" },
      { icon: FlaskConical, name: "Allergy Testing" },
      { icon: Activity, name: "Infection Screening" },
    ],
  },
  {
    title: "Clinical Support",
    desc: "Guidance from real specialists.",
    items: [
      { icon: Stethoscope, name: "Doctor Consultation" },
      { icon: Activity, name: "Health Monitoring" },
      { icon: ShieldPlus, name: "Preventive Care" },
      { icon: FileHeart, name: "Digital Report Analysis" },
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-28">
      <div
        className="absolute inset-0 bg-grid opacity-30"
        aria-hidden
        style={{ maskImage: "linear-gradient(180deg, transparent, black 20%, black 80%, transparent)" }}
      />
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Label>Diagnostic Services</Label>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
              Comprehensive <span className="text-gradient">testing pathways</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            From routine wellness to advanced clinical insight — every test is
            calibrated for accuracy and reviewed by experts.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {groups.map((g) => (
            <article
              key={g.title}
              className="group relative overflow-hidden rounded-3xl p-6 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]"
              style={{ background: "var(--gradient-card)" }}
            >
              <div className="pointer-events-none absolute -top-24 right-0 h-48 w-48 rounded-full bg-primary/15 blur-3xl opacity-0 transition-opacity group-hover:opacity-100" />
              <header className="flex items-baseline justify-between">
                <h3 className="font-display text-xl font-semibold">{g.title}</h3>
                <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  {g.items.length} tests
                </span>
              </header>
              <p className="mt-2 text-sm text-muted-foreground">{g.desc}</p>

              <ul className="mt-6 space-y-2">
                {g.items.map((it) => (
                  <li
                    key={it.name}
                    className="flex items-center gap-3 rounded-xl border border-border/60 bg-background/40 px-3 py-2.5 text-sm transition-colors hover:border-primary/40 hover:bg-primary/5"
                  >
                    <span className="grid h-8 w-8 place-items-center rounded-lg bg-[var(--gradient-primary)]/20 text-primary">
                      <it.icon className="h-4 w-4" />
                    </span>
                    <span className="flex-1">{it.name}</span>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                      NABL
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#appointment"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
              >
                Book this panel →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
