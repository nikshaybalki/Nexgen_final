import { useScroll, useTransform, motion, useSpring } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import ImageSection from "./components/image-section";
import BrandTicker from "./components/brand-ticker";
import Showreel from "./components/showreel";
import Ecosystem from "./components/ecosystem";
import ScaleSection from "./components/scale-section";
import Testimonials from "./components/testimonials";
import CareerSection from "./components/career-section";
import Footer from "./components/footer";

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <div ref={containerRef} className="min-h-screen bg-black font-sans text-brand-beige">
      <Navbar />
      
      <main>
        <Hero />
        <ImageSection />
        <BrandTicker />
        <Showreel />
        <Ecosystem />
        <ScaleSection />
        <Testimonials />
        <CareerSection />
      </main>

      <Footer />
      
      {/* Side Decorative Borders matching the original design */}
      <div className="fixed top-0 left-[20px] md:left-[60px] h-screen w-px bg-brand-beige/10 z-50 pointer-events-none" />
      <div className="fixed top-0 right-[20px] md:right-[60px] h-screen w-px bg-brand-beige/10 z-50 pointer-events-none" />
    </div>
  );
}
