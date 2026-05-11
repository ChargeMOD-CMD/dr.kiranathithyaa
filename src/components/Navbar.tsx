import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Practice", href: "#about", num: "01" },
  { label: "Diagnostics", href: "#services", num: "02" },
  { label: "Analytics", href: "#analytics", num: "03" },
  { label: "Physician", href: "#doctors", num: "04" },
  { label: "Patients", href: "#patients", num: "05" },
  { label: "Contact", href: "#contact", num: "07" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled
          ? "py-2 backdrop-blur-md bg-[color-mix(in_oklab,var(--paper)_82%,transparent)] border-b border-[var(--rule)]"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 lg:px-10">
        <a href="#top" className="flex items-baseline gap-3 group">
          <span className="mono text-[0.62rem] tracking-[0.32em] text-muted-foreground uppercase">
            Est. 2018 · Chennai
          </span>
        </a>

        <a
          href="#top"
          className="hidden md:block absolute left-1/2 -translate-x-1/2 serif text-[1.05rem] tracking-tight"
        >
          <span className="italic">Dr.</span> Khiran Athithyaa
          <span className="mx-2 text-primary">·</span>
          <span className="mono text-[0.7rem] tracking-[0.3em] uppercase align-middle">
            Diagnostics
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-[0.78rem] uppercase tracking-[0.22em] text-foreground/70 hover:text-foreground transition-colors"
            >
              <span className="mono text-[0.6rem] text-primary mr-1.5">{l.num}</span>
              {l.label}
            </a>
          ))}
          <a
            href="#appointment"
            className="editorial-link mono text-[0.72rem] uppercase tracking-[0.28em] text-primary"
          >
            Book →
          </a>
        </nav>

        <button
          className="lg:hidden grid h-10 w-10 place-items-center rounded-full border border-[var(--rule)]"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden mx-6 mt-3 ink-card rounded-lg p-4">
          <ul className="flex flex-col divide-y divide-[var(--rule)]">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  onClick={() => setOpen(false)}
                  href={l.href}
                  className="flex items-center justify-between py-3 text-sm"
                >
                  <span><span className="mono text-[0.62rem] text-primary mr-2">{l.num}</span>{l.label}</span>
                  <span className="text-muted-foreground">→</span>
                </a>
              </li>
            ))}
            <li>
              <a
                href="#appointment"
                onClick={() => setOpen(false)}
                className="block py-3 mono text-[0.72rem] uppercase tracking-[0.28em] text-primary"
              >
                Book Consultation →
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
