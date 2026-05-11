import { ChapterHeader } from "./About";
import { GraduationCap, Award, BookOpen, Microscope } from "lucide-react";
import portrait from "@/assets/khiran-portrait.jpg";

const timeline = [
  {
    year: "2008",
    title: "MBBS — Madras Medical College",
    body: "Graduated with honours in pathology and internal medicine. Early fascination with the slide and the smear.",
    icon: GraduationCap,
  },
  {
    year: "2013",
    title: "MD Pathology — JIPMER, Puducherry",
    body: "Specialised in haematology and histopathology. Thesis on early biomarkers in metabolic syndrome.",
    icon: BookOpen,
  },
  {
    year: "2016",
    title: "Fellowship — Royal College, London",
    body: "Two years abroad. Returned with a quiet conviction: reports must read like letters, not receipts.",
    icon: Award,
  },
  {
    year: "2018",
    title: "Founded Athithyaa Diagnostics",
    body: "A small atelier in Mylapore. Eight beds, three centrifuges, one rule — every report is signed by hand.",
    icon: Microscope,
  },
];

const pubs = [
  "Early biomarkers in pre-diabetic adults — Indian J. Path. (2019)",
  "Re-reading the CBC: a clinician's monograph — Lancet Letters (2021)",
  "Lipid drift in urban South Asia — JAMA-India (2023)",
];

export function Doctors() {
  return (
    <section id="doctors" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <ChapterHeader num="04" title="The Physician" />

        <div className="mt-14 grid grid-cols-12 gap-y-12 gap-x-6 lg:gap-x-12">
          {/* Portrait + name card */}
          <aside className="col-span-12 lg:col-span-4 lg:sticky lg:top-28 self-start">
            <div className="ink-card rounded-sm p-2 grain">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2px]">
                <img
                  src={portrait}
                  alt="Dr. Khiran Athithyaa portrait"
                  width={1024}
                  height={1280}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ filter: "grayscale(0.35) contrast(1.02) sepia(0.1)" }}
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-[oklch(0.18_0.015_60/0.18)]" />
                <div className="absolute top-3 left-3 mono text-[0.58rem] uppercase tracking-[0.28em] text-paper/95">
                  Plate II
                </div>
                <div className="absolute bottom-3 right-3 mono text-[0.58rem] tracking-[0.24em] text-paper/95">
                  № 002
                </div>
              </div>
            </div>
            <div className="mt-5">
              <h3 className="serif text-3xl leading-tight">Dr. Khiran Athithyaa</h3>
              <div className="mt-1 mono text-[0.62rem] uppercase tracking-[0.28em] text-primary">
                Founder · Consultant Pathologist
              </div>
              <p className="mt-4 text-sm text-foreground/70 leading-relaxed">
                MBBS, MD (Pathology), FRCPath. Fifteen years at the bench.
                Believes a report is half chemistry, half conversation —
                and that the patient deserves both, slowly.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {["Haematology", "Histopathology", "Preventive Care", "Endocrinology"].map(
                  (t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-full border border-[var(--rule)] px-3 py-1 mono text-[0.58rem] uppercase tracking-[0.22em] text-foreground/75"
                    >
                      {t}
                    </span>
                  ),
                )}
              </div>
            </div>
          </aside>

          {/* Timeline */}
          <div className="col-span-12 lg:col-span-8">
            <h2 className="serif text-4xl lg:text-5xl leading-[1] tracking-[-0.02em] max-w-2xl">
              A practice built <em className="italic text-primary">slowly</em>,
              the way medicine ought to be.
            </h2>

            <ol className="mt-12 relative">
              <span className="absolute left-[11px] top-2 bottom-2 w-px bg-[var(--rule)]" />
              {timeline.map((t) => (
                <li key={t.year} className="relative pl-12 pb-10 last:pb-0">
                  <span className="absolute left-0 top-1 grid h-6 w-6 place-items-center rounded-full bg-[var(--paper)] border border-[var(--rule)]">
                    <t.icon className="h-3 w-3 text-primary" strokeWidth={1.6} />
                  </span>
                  <div className="mono text-[0.6rem] uppercase tracking-[0.3em] text-primary">
                    {t.year}
                  </div>
                  <h4 className="mt-1.5 serif text-2xl leading-tight">{t.title}</h4>
                  <p className="mt-2 text-sm text-foreground/70 leading-relaxed max-w-2xl">
                    {t.body}
                  </p>
                </li>
              ))}
            </ol>

            {/* Publications */}
            <div className="mt-12 border-t border-[var(--rule)] pt-8">
              <div className="mono text-[0.62rem] uppercase tracking-[0.3em] text-muted-foreground">
                Selected publications
              </div>
              <ul className="mt-5 space-y-3">
                {pubs.map((p, i) => (
                  <li key={p} className="flex items-start gap-4 text-sm">
                    <span className="mono text-[0.62rem] text-primary pt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="serif italic leading-snug text-foreground/85">
                      {p}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
