import { useState } from "react";
import { Label } from "./About";
import { Calendar, FileText, Package, Check } from "lucide-react";

export function Appointment() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="appointment" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-12 lg:grid-cols-[1fr,1.1fr]">
          <div>
            <Label>Appointment & Reports</Label>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
              Book your <span className="text-gradient">health checkup</span> in seconds.
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              Choose a slot that fits your day. Our care team confirms your
              booking on WhatsApp and prepares a personalized panel.
            </p>

            <div className="mt-8 space-y-4">
              {[
                { icon: Calendar, t: "Online Booking", d: "Instant slots, 7 days a week" },
                { icon: FileText, t: "Digital Reports", d: "Delivered to your inbox & dashboard" },
                { icon: Package, t: "Health Packages", d: "Curated wellness panels by experts" },
              ].map((it) => (
                <div key={it.t} className="flex items-start gap-4 glass rounded-2xl p-4">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--gradient-primary)] text-primary-foreground">
                    <it.icon className="h-4 w-4" />
                  </span>
                  <div>
                    <div className="font-semibold">{it.t}</div>
                    <div className="text-xs text-muted-foreground">{it.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="relative overflow-hidden rounded-3xl p-6 sm:p-8 shadow-[var(--shadow-elev)]"
            style={{ background: "var(--gradient-card)" }}
          >
            <div className="absolute inset-0 scanline opacity-50" aria-hidden />
            <div className="relative">
              {submitted ? (
                <div className="grid place-items-center py-16 text-center">
                  <div className="grid h-16 w-16 place-items-center rounded-full bg-[var(--gradient-primary)] animate-pulse-glow">
                    <Check className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold">
                    Appointment requested
                  </h3>
                  <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                    Our care team will reach out on WhatsApp shortly to confirm your visit.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="font-display text-2xl font-semibold">Request a Slot</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Fill in your details — we'll handle the rest.
                  </p>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <Field label="Full name" name="name" required />
                    <Field label="Phone" name="phone" type="tel" required />
                    <Field label="Email" name="email" type="email" />
                    <Field label="Preferred date" name="date" type="date" />
                  </div>

                  <div className="mt-4">
                    <label className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                      Health package
                    </label>
                    <select className="mt-2 w-full rounded-xl border border-border bg-background/50 px-3 py-3 text-sm outline-none focus:border-primary">
                      <option>Full Body Checkup</option>
                      <option>Diabetes & Lipid Panel</option>
                      <option>Thyroid Profile</option>
                      <option>Hormonal Wellness</option>
                      <option>Allergy & Vitamin Screen</option>
                    </select>
                  </div>

                  <div className="mt-4">
                    <label className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                      Notes
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Anything we should know?"
                      className="mt-2 w-full rounded-xl border border-border bg-background/50 px-3 py-3 text-sm outline-none focus:border-primary"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-6 w-full rounded-full bg-[var(--gradient-primary)] px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.01]"
                  >
                    Confirm Appointment
                  </button>
                  <p className="mt-3 text-center text-[11px] text-muted-foreground">
                    By submitting, you agree to be contacted by our care team.
                  </p>
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-xl border border-border bg-background/50 px-3 py-3 text-sm outline-none focus:border-primary"
      />
    </label>
  );
}
