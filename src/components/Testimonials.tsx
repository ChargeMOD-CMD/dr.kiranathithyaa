import { Label } from "./About";
import { Quote, Star } from "lucide-react";

const stories = [
  {
    name: "Priya R.",
    role: "Chennai",
    text:
      "The reports were delivered in just a few hours and the AI summary helped me actually understand my health. Genuinely felt cared for.",
  },
  {
    name: "Karthik M.",
    role: "Annual checkup",
    text:
      "Calm, premium environment with thoughtful staff. The wellness score helped me change my routine for the better.",
  },
  {
    name: "Anitha S.",
    role: "Preventive screening",
    text:
      "Easily the most modern diagnostic experience in the city. Booking, sample, report — everything seamless.",
  },
];

export function Testimonials() {
  return (
    <section id="patients" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-2xl">
          <Label>Patient Care Experience</Label>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Stories of <span className="text-gradient">healthier journeys.</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {stories.map((s) => (
            <figure
              key={s.name}
              className="relative overflow-hidden rounded-3xl p-6"
              style={{ background: "var(--gradient-card)" }}
            >
              <Quote className="h-8 w-8 text-primary/60" />
              <blockquote className="mt-4 text-sm text-foreground/90">"{s.text}"</blockquote>
              <figcaption className="mt-6 flex items-center justify-between">
                <div>
                  <div className="font-semibold">{s.name}</div>
                  <div className="text-xs text-muted-foreground">{s.role}</div>
                </div>
                <div className="flex items-center gap-0.5 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
