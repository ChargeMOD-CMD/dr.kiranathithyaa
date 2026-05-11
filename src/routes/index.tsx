import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Analytics } from "@/components/Analytics";
import { Doctors } from "@/components/Doctors";
import { Testimonials } from "@/components/Testimonials";
import { Appointment } from "@/components/Appointment";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { AIAssistant } from "@/components/AIAssistant";
import { CursorScanner } from "@/components/CursorScanner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Athithyaa Diagnostics — A Monograph of Preventive Medicine · Chennai",
      },
      {
        name: "description",
        content:
          "Dr. Khiran Athithyaa Diagnostics — an editorial diagnostic atelier in Chennai. NABL-grade chemistry, signed reports, preventive panels read by senior pathologists.",
      },
      { property: "og:title", content: "Athithyaa Diagnostics — Precision, as a discipline." },
      {
        property: "og:description",
        content:
          "Half laboratory, half library. Preventive medicine, read with patience and care.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;1,9..144,400&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative z-[1]">
      <CursorScanner />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Analytics />
      <Doctors />
      <Testimonials />
      <Appointment />
      <Contact />
      <Footer />
      <AIAssistant />
    </main>
  );
}
