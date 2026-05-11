import { Label } from "./About";
import { Phone, Mail, MapPin, MessageCircle, Clock, Activity } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Label>Get in Touch</Label>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
              We're here, <span className="text-gradient">whenever you need us.</span>
            </h2>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <Card icon={Phone} label="Call us" value="+91 70103 58445" href="tel:+917010358445" />
              <Card icon={MessageCircle} label="WhatsApp" value="Chat with care" href="https://wa.me/917010358445" />
              <Card icon={Mail} label="Email" value="info@athithyaadiagnostics.com" href="mailto:info@athithyaadiagnostics.com" />
              <Card icon={MapPin} label="Location" value="Chennai, Tamil Nadu" href="#" />
            </div>

            <div className="mt-6 flex items-center gap-3 glass rounded-2xl p-4">
              <Clock className="h-5 w-5 text-primary" />
              <div className="text-sm">
                <div className="font-semibold">Hours</div>
                <div className="text-muted-foreground text-xs">
                  Mon–Fri: 7:00 AM – 9:00 PM &nbsp;·&nbsp; Sat–Sun: 7:00 AM – 6:00 PM
                </div>
              </div>
            </div>
          </div>

          <div
            className="relative overflow-hidden rounded-3xl p-1"
            style={{ background: "var(--gradient-primary)" }}
          >
            <div className="relative h-full w-full overflow-hidden rounded-[1.4rem] bg-background">
              <div className="absolute inset-0 bg-grid opacity-40" />
              <div className="absolute inset-0 scanline opacity-60" />
              <div className="relative grid h-full min-h-[360px] place-items-center p-10 text-center">
                <div>
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-[var(--gradient-primary)] animate-pulse-glow">
                    <Activity className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold">Visit our Clinic</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Dr. Khiran Athithyaa Diagnostics Medical Clinic
                    <br />
                    Chennai, Tamil Nadu, India
                  </p>
                  <a
                    href="https://maps.google.com/?q=Chennai"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-semibold hover:bg-secondary/60"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="group flex items-center gap-4 rounded-2xl glass p-4 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow)]"
    >
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--gradient-primary)] text-primary-foreground">
        <Icon className="h-4 w-4" />
      </span>
      <div>
        <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          {label}
        </div>
        <div className="text-sm font-semibold">{value}</div>
      </div>
    </a>
  );
}
