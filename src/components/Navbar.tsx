import { useEffect, useState } from "react";
import { Activity, Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "AI Analytics", href: "#analytics" },
  { label: "Doctors", href: "#doctors" },
  { label: "Patients", href: "#patients" },
  { label: "Book", href: "#appointment" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 ${
            scrolled ? "glass shadow-[var(--shadow-elev)]" : "bg-transparent"
          }`}
        >
          <a href="#top" className="flex items-center gap-2 group">
            <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-[var(--gradient-primary)] glow-ring">
              <Activity className="h-4 w-4 text-primary-foreground" strokeWidth={2.5} />
              <span className="pointer-events-none absolute inset-0 rounded-xl animate-pulse-glow" />
            </span>
            <div className="leading-tight">
              <div className="font-display text-sm font-semibold tracking-tight">
                Athithyaa
              </div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Diagnostics
              </div>
            </div>
          </a>

          <ul className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors after:absolute after:bottom-1 after:left-3 after:right-3 after:h-px after:scale-x-0 after:bg-[var(--gradient-primary)] after:transition-transform hover:after:scale-x-100"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+917010358445"
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              +91 70103 58445
            </a>
            <a
              href="#appointment"
              className="rounded-full bg-[var(--gradient-primary)] px-4 py-2 text-xs font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]"
            >
              Book Checkup
            </a>
          </div>

          <button
            className="lg:hidden grid h-9 w-9 place-items-center rounded-lg glass"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </nav>

        {open && (
          <div className="lg:hidden mt-2 glass rounded-2xl p-3 animate-fade-up">
            <ul className="flex flex-col">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    onClick={() => setOpen(false)}
                    href={l.href}
                    className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#appointment"
                  onClick={() => setOpen(false)}
                  className="block rounded-full bg-[var(--gradient-primary)] px-4 py-2 text-center text-xs font-semibold text-primary-foreground"
                >
                  Book Checkup
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
