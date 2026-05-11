export function Footer() {
  return (
    <footer className="relative border-t border-[var(--rule)] mt-12">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-16">
        <div className="grid grid-cols-12 gap-y-10 gap-x-6">
          <div className="col-span-12 lg:col-span-6">
            <div className="serif text-5xl lg:text-7xl tracking-[-0.03em] leading-[0.9]">
              <span className="italic">Dr.</span> Khiran Athithyaa
              <br />
              <span className="text-foreground/40">Diagnostics, Chennai.</span>
            </div>
            <p className="mt-6 max-w-md text-foreground/65 leading-relaxed">
              An atelier of preventive medicine. Established two thousand and
              eighteen. Set in Fraunces &amp; JetBrains Mono. Printed on
              recycled fibres, where applicable.
            </p>
          </div>

          <div className="col-span-6 lg:col-span-3">
            <div className="mono text-[0.62rem] uppercase tracking-[0.3em] text-muted-foreground">
              Index
            </div>
            <ul className="mt-5 space-y-2.5 text-sm">
              {["Practice", "Diagnostics", "Analytics", "Pathologists", "Patients", "Contact"].map(
                (l, i) => (
                  <li key={l}>
                    <a href={`#${["about","services","analytics","doctors","patients","contact"][i]}`} className="editorial-link text-foreground/80">
                      <span className="mono text-[0.62rem] text-primary mr-2">0{i + 1}</span>
                      {l}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="col-span-6 lg:col-span-3">
            <div className="mono text-[0.62rem] uppercase tracking-[0.3em] text-muted-foreground">
              Colophon
            </div>
            <ul className="mt-5 space-y-2.5 text-sm text-foreground/75">
              <li>NABL · ISO 15189</li>
              <li>Reg. № TN/2018/A-7010</li>
              <li>+91 70103 58445</li>
              <li>hello@athithyaadiagnostics.in</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col-reverse sm:flex-row items-start sm:items-end justify-between gap-6 border-t border-[var(--rule)] pt-6">
          <div className="mono text-[0.62rem] uppercase tracking-[0.3em] text-muted-foreground">
            © MMXXVI — All readings reserved.
          </div>
          <div className="mono text-[0.62rem] uppercase tracking-[0.3em] text-muted-foreground">
            Folio 047 / 047 — Fin.
          </div>
        </div>
      </div>
    </footer>
  );
}
