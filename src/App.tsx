import { useScroll, useTransform, motion, useSpring } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import ImageSection from "./components/image-section";
import ScaleSection from "./components/scale-section";
import AboutUs from "./components/about-us";
import StudioSection from "./components/studio-section";
import ValuesSection from "./components/values-section";
import WhoWeAre from "./components/who-we-are";
import WhyWeExist from "./components/why-we-exist";
import TheWayWeWork from "./components/the-way-we-work";
import TheTeam from "./components/the-team";
import CareerSection from "./components/career-section";
import Footer from "./components/footer";
import ContentPage from "./components/content-page";

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState<"home" | "about" | "content">(() => {
    const path = window.location.pathname;
    if (path === "/about" || path === "/about-us") return "about";
    if (path === "/content") return "content";
    return "home";
  });

  const navigate = (toPage: "home" | "about" | "content", hash?: string) => {
    let url = "/";
    if (toPage === "about") url = "/about";
    else if (toPage === "content") url = "/content";
    window.history.pushState({}, "", url + (hash || ""));
    setCurrentPage(toPage);

    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === "/about" || path === "/about-us") {
        setCurrentPage("about");
      } else if (path === "/content") {
        setCurrentPage("content");
      } else {
        setCurrentPage("home");
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    if (currentPage === "home" && window.location.hash) {
      setTimeout(() => {
        const element = document.querySelector(window.location.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    }
  }, [currentPage]);
  
  return (
    <div ref={containerRef} className="min-h-screen bg-black font-sans text-brand-beige">
      <Navbar currentPage={currentPage} onNavigate={navigate} />
      
      <main>
        {currentPage === "home" ? (
          <>
            <Hero onNavigate={navigate} />
            <ImageSection />
            <ScaleSection />
            <CareerSection />
          </>
        ) : currentPage === "about" ? (
          <>
            <AboutUs />
            <StudioSection />
            <ValuesSection />
            <WhoWeAre />
            <WhyWeExist />
            <TheWayWeWork />
            <TheTeam />
          </>
        ) : (
          <ContentPage />
        )}
      </main>

      <Footer onNavigate={navigate} />
      
      {/* Side Decorative Borders matching the original design */}
      <div className="fixed top-0 left-[20px] md:left-[60px] h-screen w-px bg-brand-beige/10 z-50 pointer-events-none" />
      <div className="fixed top-0 right-[20px] md:right-[60px] h-screen w-px bg-brand-beige/10 z-50 pointer-events-none" />
    </div>
  );
}
