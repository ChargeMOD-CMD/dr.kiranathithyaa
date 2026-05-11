import { ChapterHeader } from "./About";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <ChapterHeader num="07" title="Colophon · Find us" />

        <div className="mt-14 grid grid-cols-12 gap-y-10 gap-x-6 lg:gap-x-10">
          <div className="col-span-12 lg:col-span-6">
            <h2 className="serif text-4xl lg:text-5xl leading-[0.98] tracking-[-0.025em] max-w-lg">
              Pay us a visit, or send
              <em className="italic text-primary"> a letter</em>.
            </h2>

            <dl className="mt-12 space-y-7">
              <Item icon={MapPin} label="Address">
                14, Bishop Wallers Avenue (East),<br />
                Mylapore, Chennai 600 004
              </Item>
              <Item icon={Phone} label="Telephone">
                <a className="editorial-link" href="tel:+917010358445">+91 70103 58445</a>
              </Item>
              <Item icon={Mail} label="Correspondence">
                <a className="editorial-link" href="mailto:hello@athithyaadiagnostics.in">
                  hello@athithyaadiagnostics.in
                </a>
              </Item>
              <Item icon={Clock} label="Hours">
                Monday — Saturday · 06:30 to 21:00<br />
                Sunday · 07:00 to 13:00
              </Item>
            </dl>
          </div>

          <div className="col-span-12 lg:col-span-6">
            <div className="ink-card rounded-sm overflow-hidden grain">
              <div
                className="relative aspect-[5/4]"
                style={{
                  background:
                    "linear-gradient(170deg, oklch(0.93 0.014 80), oklch(0.88 0.02 80))",
                }}
              >
                {/* hand-drawn map */}
                <svg viewBox="0 0 500 400" className="absolute inset-0 h-full w-full">
                  <g stroke="oklch(0.18 0.015 60 / 0.35)" strokeWidth="0.8" fill="none">
                    <path d="M0 120 Q 150 100, 250 140 T 500 130" />
                    <path d="M0 220 Q 180 200, 280 250 T 500 240" />
                    <path d="M120 0 Q 140 150, 100 250 T 130 400" />
                    <path d="M340 0 Q 320 150, 360 250 T 340 400" />
                  </g>
                  <g
                    fontFamily="JetBrains Mono, monospace"
                    fontSize="8"
                    letterSpacing="1.5"
                    fill="oklch(0.18 0.015 60 / 0.55)"
                  >
                    <text x="20" y="115">CATHEDRAL RD ↗</text>
                    <text x="20" y="215">BISHOP WALLERS AVE ↗</text>
                    <text x="125" y="20" transform="rotate(90 125 20)">LUZ CHURCH RD</text>
                    <text x="345" y="20" transform="rotate(90 345 20)">DR RADHAKRISHNAN SALAI</text>
                  </g>
                  {/* pin */}
                  <g transform="translate(230,200)">
                    <circle r="28" fill="oklch(0.42 0.09 165 / 0.15)" />
                    <circle r="14" fill="oklch(0.42 0.09 165 / 0.25)" />
                    <circle r="5" fill="oklch(0.42 0.09 165)" />
                    <text
                      x="20"
                      y="6"
                      fontFamily="Fraunces, serif"
                      fontSize="14"
                      fill="oklch(0.18 0.015 60)"
                    >
                      ✦ Athithyaa Diagnostics
                    </text>
                    <text
                      x="20"
                      y="22"
                      fontFamily="JetBrains Mono, monospace"
                      fontSize="7"
                      letterSpacing="1.5"
                      fill="oklch(0.42 0.012 60)"
                    >
                      13.0337° N · 80.2697° E
                    </text>
                  </g>
                </svg>
              </div>
              <div className="flex items-center justify-between p-4 border-t border-[var(--rule)] mono text-[0.6rem] uppercase tracking-[0.28em] text-muted-foreground">
                <span>Plate V — Site Map, Mylapore</span>
                <span>Scale 1 : 4000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Item({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ElementType;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[auto,1fr] gap-5 border-b border-[var(--rule)] pb-6">
      <Icon className="h-4 w-4 mt-1 text-primary" strokeWidth={1.4} />
      <div>
        <dt className="mono text-[0.62rem] uppercase tracking-[0.28em] text-muted-foreground">
          {label}
        </dt>
        <dd className="mt-2 serif text-lg leading-snug">{children}</dd>
      </div>
    </div>
  );
}
