import { ChapterHeader } from "./About";
import {
  Droplets,
  HeartPulse,
  Brain,
  Dna,
  Stethoscope,
  Activity,
  FlaskConical,
  Syringe,
} from "lucide-react";

const services = [
  { icon: Droplets, name: "Complete Haematology", code: "HEM-01", tat: "4h", note: "CBC, ESR, peripheral smear" },
  { icon: FlaskConical, name: "Biochemistry Panel", code: "BIO-02", tat: "4h", note: "Liver, kidney, lipid, electrolytes" },
  { icon: HeartPulse, name: "Cardiac Markers", code: "CAR-03", tat: "2h", note: "Troponin-I, CK-MB, NT-proBNP" },
  { icon: Brain, name: "Thyroid & Endocrine", code: "END-04", tat: "6h", note: "TSH, T3/T4, cortisol, insulin" },
  { icon: Dna, name: "Molecular & PCR", code: "MOL-05", tat: "24h", note: "Infectious + genetic markers" },
  { icon: Stethoscope, name: "Preventive Master", code: "PRV-06", tat: "Same day", note: "92 parameters · curated" },
  { icon: Activity, name: "Diabetes Profile", code: "DIA-07", tat: "4h", note: "HbA1c, FBS, PPBS, C-peptide" },
  { icon: Syringe, name: "Home Phlebotomy", code: "HOM-08", tat: "On request", note: "Trained nurse · sterile kit" },
];

export function Services() {
  return (
    <section id="services" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <ChapterHeader num="02" title="An Index of Diagnostics" />

        <div className="mt-12 grid grid-cols-12 gap-y-10 gap-x-6 lg:gap-x-10">
          <div className="col-span-12 lg:col-span-4">
            <h2 className="serif text-4xl lg:text-5xl leading-[1] tracking-[-0.02em]">
              One hundred and twenty-four
              <em className="italic text-primary"> instruments </em>
              of reading.
            </h2>
            <p className="mt-6 text-foreground/70 leading-relaxed max-w-sm">
              From the first prick of the lancet to the final signed report,
              each panel is annotated by the pathologist on duty. A selection
              of the most-requested entries is shown below.
            </p>
          </div>

          <ul className="col-span-12 lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-px bg-[var(--rule)] border border-[var(--rule)]">
            {services.map((s, i) => (
              <li
                key={s.code}
                className="group relative bg-card p-6 transition-colors hover:bg-[color-mix(in_oklab,var(--primary)_5%,var(--card))]"
              >
                <div className="flex items-start justify-between">
                  <span className="mono text-[0.62rem] uppercase tracking-[0.28em] text-muted-foreground">
                    № {String(i + 1).padStart(2, "0")} · {s.code}
                  </span>
                  <s.icon className="h-4 w-4 text-primary opacity-80" strokeWidth={1.4} />
                </div>
                <h3 className="mt-4 serif text-2xl leading-tight">{s.name}</h3>
                <p className="mt-1.5 text-sm text-foreground/65">{s.note}</p>
                <div className="mt-5 flex items-center justify-between border-t border-[var(--rule)] pt-3">
                  <span className="mono text-[0.62rem] uppercase tracking-[0.24em] text-foreground/60">
                    Turnaround · <span className="text-foreground">{s.tat}</span>
                  </span>
                  <span className="mono text-[0.7rem] text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    Read →
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
