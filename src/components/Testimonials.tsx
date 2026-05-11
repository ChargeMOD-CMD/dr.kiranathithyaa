import { ChapterHeader } from "./About";

const notes = [
  {
    quote:
      "The report came with a paragraph from the doctor herself — I have never been read this carefully.",
    name: "Lakshmi V.",
    place: "T. Nagar, Chennai",
    date: "March MMXXVI",
  },
  {
    quote:
      "Calm, unhurried, and astonishingly precise. The kind of clinic that restores faith in medicine.",
    name: "Aravind S.",
    place: "Adyar",
    date: "January MMXXVI",
  },
  {
    quote:
      "Their preventive panel caught a thyroid drift two years before any specialist did. I owe them.",
    name: "Meera K.",
    place: "Mylapore",
    date: "February MMXXVI",
  },
];

export function Testimonials() {
  return (
    <section id="patients" className="relative py-28 lg:py-36 bg-[color-mix(in_oklab,var(--surface)_60%,var(--paper))]">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <ChapterHeader num="05" title="Marginalia · Patient Notes" />

        <div className="mt-14 grid gap-px bg-[var(--rule)] border border-[var(--rule)] sm:grid-cols-3">
          {notes.map((n, i) => (
            <figure key={i} className="bg-card p-8 lg:p-10 flex flex-col">
              <div className="serif italic text-5xl text-primary leading-none">"</div>
              <blockquote className="mt-2 serif text-xl leading-snug flex-1 text-balance">
                {n.quote}
              </blockquote>
              <figcaption className="mt-8 pt-5 border-t border-[var(--rule)]">
                <div className="serif text-base">{n.name}</div>
                <div className="mono text-[0.6rem] uppercase tracking-[0.28em] text-muted-foreground mt-1">
                  {n.place} · {n.date}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
