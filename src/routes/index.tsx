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
      { title: "Athithyaa Diagnostics — Precision Diagnostics. Trusted Healthcare." },
      {
        name: "description",
        content:
          "Dr. Khiran Athithyaa Diagnostics — futuristic medical clinic in Chennai for accurate testing, AI health analytics and patient-centered care.",
      },
      { property: "og:title", content: "Athithyaa Diagnostics — Precision Healthcare" },
      {
        property: "og:description",
        content:
          "AI-powered diagnostics, preventive wellness, and trusted clinical expertise in Chennai.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
      />
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
