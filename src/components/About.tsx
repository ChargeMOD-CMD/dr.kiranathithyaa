import { ShieldCheck, Microscope, HeartPulse } from "lucide-react";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Trust by Precision",
    text: "NABL-grade protocols, calibrated instruments and validated chemistry — every report is reviewed by senior pathologists.",
  },
  {
    icon: Microscope,
    title: "Preventive Wellness",
    text: "We focus on early detection through curated panels that uncover risks long before symptoms appear.",
  },
  {
    icon: HeartPulse,
    title: "Patient-First Care",
    text: "From gentle phlebotomy to digital reports, every touchpoint is designed around comfort, clarity, and dignity.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-12 lg:grid-cols-[0.9fr,1.1fr]">
          <div>
            <Label>About the Clinic</Label>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
              A futuristic <span className="text-gradient">diagnostics ecosystem</span>{" "}
              built around the patient.
            </h2>
            <p className="mt-6 max-w-lg text-muted-foreground">
              Dr. Khiran Athithyaa Diagnostics combines clinical excellence with
              intelligent technology — delivering accurate testing, preventive
              insights, and a seamless experience from booking to report.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["NABL Protocols", "AI-assisted Review", "4-Hour Reports", "Home Collection"].map(
                (t) => (
                  <span
                    key={t}
                    className="rounded-full glass px-4 py-1.5 text-xs text-muted-foreground"
                  >
                    {t}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-1">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className="group relative overflow-hidden rounded-2xl p-6 transition-transform hover:-translate-y-1"
                style={{ background: "var(--gradient-card)" }}
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--gradient-primary)] shadow-[var(--shadow-glow)]">
                    <p.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{p.text}</p>
                  </div>
                </div>
                <div className="mt-5 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  0{i + 1} / 03
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_var(--primary)]" />
      {children}
    </div>
  );
}
