import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";
import HeroSection from "@/components/sections/HeroSection";
import InsightsSection from "@/components/sections/InsightsSection";
import JourneyMetricsSection from "@/components/sections/JourneyMetricsSection";
import MissionSection from "@/components/sections/MissionSection";
import SectorsSection from "@/components/sections/SectorsSection";
import Image from "next/image";

export default function Home() {
  return (
    // app/page.tsx or your main component
<main className="w-full min-h-screen">
  <div className="mx-auto">
    {/* All sections go here */}
    <HeroSection />
    <MissionSection />
    <SectorsSection />
    <JourneyMetricsSection />
    <InsightsSection />
    <ContactSection />
    <Footer />
  </div>
</main>
  );
}
