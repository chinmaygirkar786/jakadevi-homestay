import { About } from "@/components/About";
import { Amenities } from "@/components/Amenities";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Rooms } from "@/components/Rooms";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="fixed inset-0 -z-10 bg-linear-to-b from-blue-400 to-cyan-300" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(80%_50%_at_10%_10%,rgba(255,255,255,0.22),transparent_60%),radial-gradient(70%_55%_at_90%_25%,rgba(255,255,255,0.18),transparent_55%),radial-gradient(55%_45%_at_60%_90%,rgba(255,170,120,0.14),transparent_55%)]" />
      <div className="fixed inset-0 -z-10 bg-white/25" />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Rooms />
        <Amenities />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
