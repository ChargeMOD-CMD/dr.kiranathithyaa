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

export default function App() {
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
