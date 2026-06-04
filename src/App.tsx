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
import CareerPage from "./components/career-page";

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState<"home" | "about" | "content" | "career">(() => {
    const path = window.location.pathname;
    if (path === "/about" || path === "/about-us") return "about";
    if (path === "/content") return "content";
    if (path === "/career" || path === "/careers") return "career";
    return "home";
  });

  const forceScrollToTop = () => {
    const htmlEl = document.documentElement;
    // Save current scroll behavior
    const originalStyle = htmlEl.style.scrollBehavior;
    // Disable smooth scrolling temporarily to prevent transitions/delays
    htmlEl.style.scrollBehavior = "auto";
    
    window.scrollTo(0, 0);
    htmlEl.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Restore original style
    setTimeout(() => {
      htmlEl.style.scrollBehavior = originalStyle;
    }, 20);
  };

  const navigate = (toPage: "home" | "about" | "content" | "career", hash?: string) => {
    let url = "/";
    if (toPage === "about") url = "/about";
    else if (toPage === "content") url = "/content";
    else if (toPage === "career") url = "/career";
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
      forceScrollToTop();
    }
  };

  useEffect(() => {
    // Disable default browser scroll restoration on Single Page Router history changes
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === "/about" || path === "/about-us") {
        setCurrentPage("about");
      } else if (path === "/content") {
        setCurrentPage("content");
      } else if (path === "/career" || path === "/careers") {
        setCurrentPage("career");
      } else {
        setCurrentPage("home");
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    if (window.location.hash) {
      setTimeout(() => {
        const element = document.querySelector(window.location.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    } else {
      // Snap instantly to the top
      forceScrollToTop();
      
      // Fire at multiple staggered intervals to ensure the page remains at 0,0
      // during layouts changes, particularly when the mobile menu is collapsing (300ms duration)
      const timers = [50, 150, 350, 500].map(delay => 
        setTimeout(forceScrollToTop, delay)
      );
      
      return () => {
        timers.forEach(clearTimeout);
      };
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
            <CareerSection onNavigate={navigate} />
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
        ) : currentPage === "content" ? (
          <ContentPage />
        ) : (
          <CareerPage />
        )}
      </main>

      <Footer onNavigate={navigate} />
      
      {/* Side Decorative Borders matching the original design */}
      <div className="fixed top-0 left-[20px] md:left-[60px] h-screen w-px bg-brand-beige/10 z-50 pointer-events-none" />
      <div className="fixed top-0 right-[20px] md:right-[60px] h-screen w-px bg-brand-beige/10 z-50 pointer-events-none" />
    </div>
  );
}
