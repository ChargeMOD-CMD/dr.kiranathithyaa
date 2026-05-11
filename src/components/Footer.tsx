import { Activity } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 py-12">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-[var(--gradient-primary)]">
              <Activity className="h-4 w-4 text-primary-foreground" />
            </span>
            <div className="leading-tight">
              <div className="font-display font-semibold">Athithyaa Diagnostics</div>
              <div className="text-[11px] text-muted-foreground">
                Precision Diagnostics. Trusted Healthcare.
              </div>
            </div>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            A futuristic healthcare and diagnostics center in Chennai —
            engineered for accuracy, intelligence, and patient trust.
          </p>
        </div>

        <div>
          <div className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            Explore
          </div>
          <ul className="mt-3 grid grid-cols-2 gap-2 text-sm">
            {["About", "Services", "Analytics", "Doctors", "Patients", "Contact"].map(
              (l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {l}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        <div>
          <div className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            Contact
          </div>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>+91 70103 58445</li>
            <li>info@athithyaadiagnostics.com</li>
            <li>Chennai, Tamil Nadu, India</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl px-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Dr. Khiran Athithyaa Diagnostics. All rights reserved.
      </div>
    </footer>
  );
}
