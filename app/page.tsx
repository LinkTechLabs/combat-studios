import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Classes from "@/components/Classes";
import PrivateTraining from "@/components/PrivateTraining";
import Coaches from "@/components/Coaches";
import Schedule from "@/components/Schedule";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Classes />
      <PrivateTraining />
      <Coaches />
      <Schedule />
      <Contact />
      <Footer />
    </main>
  );
}
