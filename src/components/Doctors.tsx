import { ChapterHeader } from "./About";
import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";
import doctor3 from "@/assets/doctor-3.jpg";

const doctors = [
  {
    name: "Dr. Khiran Athithyaa",
    role: "Founder · Consultant Pathologist",
    bio: "MBBS, MD (Pathology). Fifteen years at the bench. Believes a report is half chemistry, half conversation.",
    plate: "Plate II",
    image: doctor1,
  },
  {
    name: "Dr. Priya Raghavendran",
    role: "Senior Biochemist",
    bio: "DNB Biochemistry. Specialises in metabolic and endocrine profiling for adults and adolescents.",
    plate: "Plate III",
    image: doctor2,
  },
  {
    name: "Dr. Aravind Ramesh",
    role: "Molecular Diagnostics Lead",
    bio: "PhD Molecular Biology. Heads the PCR & genetic testing wing. Published, twice over.",
    plate: "Plate IV",
    image: doctor3,
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
                  className="relative aspect-[4/5] overflow-hidden rounded-[2px] bg-muted"
                >
                  <img
                    src={d.image}
                    alt={`${d.name}, ${d.role} portrait`}
                    width={832}
                    height={1024}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                    style={{ filter: "grayscale(0.4) contrast(1.02) sepia(0.12)" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.18_0.015_60/0.45)] via-transparent to-transparent" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-[oklch(0.18_0.015_60/0.18)]" />
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
