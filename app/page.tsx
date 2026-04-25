import { About } from "@/components/About";
import { Amenities } from "@/components/Amenities";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Rooms } from "@/components/Rooms";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "Jakadevi Homestay",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Near Malvan Post Office, Behind of Swami Hotel",
      addressLocality: "Malvan",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    telephone: ["+919404821656", "+919764180917"],
    image: ["/images/IMG-20260424-WA0028.jpg"],
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Parking", value: true },
      {
        "@type": "LocationFeatureSpecification",
        name: "Rental bikes available",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Nearby beach access",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Family friendly",
        value: true,
      },
    ],
    makesOffer: [
      {
        "@type": "Offer",
        name: "AC Rooms",
        priceCurrency: "INR",
        price: "1500",
      },
      {
        "@type": "Offer",
        name: "Non-AC Rooms",
        priceCurrency: "INR",
        price: "1200",
      },
    ],
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
