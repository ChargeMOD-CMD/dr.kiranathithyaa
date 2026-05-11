import { Label } from "./About";
import { Stethoscope, Award } from "lucide-react";

const doctors = [
  { name: "Dr. Khiran Athithyaa", role: "Chief Pathologist & Founder", exp: "15+ yrs", spec: "Clinical Pathology" },
  { name: "Dr. Meera Ramanathan", role: "Senior Consultant", exp: "12 yrs", spec: "Endocrinology" },
  { name: "Dr. Arjun Subramanian", role: "Diagnostic Radiologist", exp: "10 yrs", spec: "Imaging & Scans" },
];

export function Doctors() {
  return (
    <section id="doctors" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-2xl">
          <Label>Doctors & Experts</Label>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Specialists who <span className="text-gradient">care deeply</span>.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Our medical team blends decades of expertise with a modern,
            patient-centric approach to diagnostics and preventive care.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {doctors.map((d, i) => (
            <article
              key={d.name}
              className="group relative overflow-hidden rounded-3xl p-6 transition-all hover:-translate-y-1"
              style={{ background: "var(--gradient-card)" }}
            >
              {/* portrait placeholder */}
              <div className="relative mx-auto h-40 w-40 rounded-full p-[2px]" style={{ background: "var(--gradient-primary)" }}>
                <div className="grid h-full w-full place-items-center rounded-full bg-background">
                  <div className="grid h-32 w-32 place-items-center rounded-full bg-secondary/50">
                    <Stethoscope className="h-10 w-10 text-primary" />
                  </div>
                </div>
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 rounded-full glass px-2 py-0.5 text-[10px] uppercase tracking-wider">
                  {d.exp}
                </span>
              </div>

              <div className="mt-6 text-center">
                <h3 className="font-display text-lg font-semibold">{d.name}</h3>
                <p className="text-sm text-primary">{d.role}</p>
                <p className="mt-2 inline-flex items-center gap-1.5 rounded-full glass px-3 py-1 text-xs text-muted-foreground">
                  <Award className="h-3 w-3 text-primary" />
                  {d.spec}
                </p>
              </div>

              <span className="absolute right-4 top-4 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                0{i + 1}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
