import { useState } from "react";
import { ChapterHeader } from "./About";
import { Check, Calendar, FileText, Package } from "lucide-react";

export function Appointment() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="appointment" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <ChapterHeader num="06" title="A Note to the Physician" />

        <div className="mt-14 grid grid-cols-12 gap-y-12 gap-x-6 lg:gap-x-10">
          <div className="col-span-12 lg:col-span-5">
            <h2 className="serif text-4xl lg:text-5xl leading-[0.98] tracking-[-0.025em]">
              Reserve a quiet
              <em className="italic text-primary"> appointment</em>.
            </h2>
            <p className="mt-6 text-foreground/70 leading-relaxed max-w-md">
              Mornings are reserved for fasting panels; afternoons for
              consultations. Our care team confirms each booking personally —
              never an automated reply.
            </p>

            <div className="mt-10 space-y-4">
              {[
                { icon: Calendar, t: "Online Booking", d: "Seven days a week, including holidays" },
                { icon: FileText, t: "Digital Reports", d: "Signed PDFs to your inbox in four hours" },
                { icon: Package, t: "Curated Panels", d: "Designed by senior pathologists" },
              ].map((it) => (
                <div key={it.t} className="flex items-start gap-5 border-b border-[var(--rule)] pb-4">
                  <it.icon className="h-4 w-4 mt-1 text-primary" strokeWidth={1.4} />
                  <div>
                    <div className="serif text-lg leading-tight">{it.t}</div>
                    <div className="mono text-[0.66rem] uppercase tracking-[0.24em] text-muted-foreground mt-1">
                      {it.d}
                    </div>
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
            className="col-span-12 lg:col-span-6 lg:col-start-7 ink-card rounded-sm p-7 lg:p-10 relative"
          >
            <div className="flex items-baseline justify-between border-b border-[var(--rule)] pb-4">
              <div>
                <div className="mono text-[0.62rem] uppercase tracking-[0.28em] text-muted-foreground">
                  Form №&nbsp;6 — Patient intake
                </div>
                <h3 className="mt-1 serif text-2xl">Book your visit</h3>
              </div>
              <span className="mono text-[0.6rem] uppercase tracking-[0.28em] text-primary">
                MMXXVI
              </span>
            </div>

            {submitted ? (
              <div className="mt-10 flex flex-col items-start gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary text-primary">
                  <Check className="h-5 w-5" />
                </div>
                <h4 className="serif text-3xl">Received, with thanks.</h4>
                <p className="text-foreground/70 max-w-sm">
                  A member of our care team will write back within the hour to
                  confirm your slot. Please keep your phone close.
                </p>
              </div>
            ) : (
              <>
                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <Field label="Full name" name="name" required />
                  <Field label="Phone" name="phone" type="tel" required />
                  <Field label="Email" name="email" type="email" />
                  <Field label="Preferred date" name="date" type="date" />
                </div>

                <div className="mt-5">
                  <label className="block">
                    <span className="mono text-[0.62rem] uppercase tracking-[0.28em] text-muted-foreground">
                      Panel
                    </span>
                    <select className="mt-2 w-full border-0 border-b border-[var(--input)] bg-transparent py-2 text-foreground focus:border-primary focus:outline-none focus:ring-0">
                      <option>Preventive Master · 92 parameters</option>
                      <option>Diabetes Profile</option>
                      <option>Cardiac Markers</option>
                      <option>Custom — please advise</option>
                    </select>
                  </label>
                </div>

                <button
                  type="submit"
                  className="mt-8 inline-flex items-center gap-3 px-7 py-3.5 text-sm tracking-tight rounded-full"
                  style={{ background: "var(--ink)", color: "var(--paper)" }}
                >
                  Confirm appointment
                  <span className="mono text-[0.7rem] opacity-70">→</span>
                </button>
                <p className="mt-5 mono text-[0.6rem] uppercase tracking-[0.26em] text-muted-foreground">
                  By submitting, you agree to a courtesy call from our team.
                </p>
              </>
            )}
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
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mono text-[0.62rem] uppercase tracking-[0.28em] text-muted-foreground">
        {label}{required && <span className="text-primary"> *</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full border-0 border-b border-[var(--input)] bg-transparent py-2 text-foreground focus:border-primary focus:outline-none focus:ring-0"
      />
    </label>
  );
}
