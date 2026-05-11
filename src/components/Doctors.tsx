import { ChapterHeader } from "./About";

const doctors = [
  {
    name: "Dr. Khiran Athithyaa",
    role: "Founder · Consultant Pathologist",
    bio: "MBBS, MD (Pathology). Fifteen years at the bench. Believes a report is half chemistry, half conversation.",
    plate: "Plate II",
  },
  {
    name: "Dr. Priya Raghavendran",
    role: "Senior Biochemist",
    bio: "DNB Biochemistry. Specialises in metabolic and endocrine profiling for adults and adolescents.",
    plate: "Plate III",
  },
  {
    name: "Dr. Aravind Ramesh",
    role: "Molecular Diagnostics Lead",
    bio: "PhD Molecular Biology. Heads the PCR & genetic testing wing. Published, twice over.",
    plate: "Plate IV",
  },
];

export function Doctors() {
  return (
    <section id="doctors" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <ChapterHeader num="04" title="The Pathologists" />

        <h2 className="mt-12 serif text-4xl lg:text-5xl leading-[1] tracking-[-0.02em] max-w-3xl">
          Read by <em className="italic text-primary">human hands</em>, before
          any algorithm reads it again.
        </h2>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((d, i) => (
            <article key={d.name} className="group">
              <div className="ink-card rounded-sm p-2 grain transition-transform group-hover:-translate-y-1">
                <div
                  className="relative aspect-[4/5] overflow-hidden rounded-[2px]"
                  style={{
                    background:
                      "linear-gradient(160deg, oklch(0.92 0.014 80), oklch(0.86 0.018 80))",
                  }}
                >
                  {/* Portrait monogram */}
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="text-center">
                      <div className="serif italic text-[7rem] leading-none text-foreground/15 select-none">
                        {d.name.split(" ").map(n => n[0]).slice(0, 2).join("")}
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 ring-1 ring-inset ring-[oklch(0.18_0.015_60/0.1)]" />
                  <div className="absolute top-3 left-3 mono text-[0.6rem] uppercase tracking-[0.28em] text-foreground/60">
                    {d.plate}
                  </div>
                  <div className="absolute bottom-3 right-3 mono text-[0.6rem] tracking-[0.24em] text-foreground/60">
                    № 0{i + 2}
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <h3 className="serif text-2xl leading-tight">{d.name}</h3>
                <div className="mt-1 mono text-[0.62rem] uppercase tracking-[0.28em] text-primary">
                  {d.role}
                </div>
                <p className="mt-3 text-sm text-foreground/65 leading-relaxed">
                  {d.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
