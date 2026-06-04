import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StudioSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        pin: ".sticky-viewport",
        pinSpacing: true,
      }
    });

    timeline.to(".image-wrapper", {
      scale: 1,
      width: "100vw",
      height: "100vh",
      borderRadius: "0px",
      ease: "none",
    });

    timeline.fromTo(".overlay-content",
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        ease: "power2.out",
      },
      "0.5" // starts fading in halfway through the scale transition
    );

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative min-h-[160vh] bg-black overflow-visible">
      {/* Sticky Viewport */}
      <div className="sticky-viewport sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Scaling Image Card */}
        <div className="image-wrapper relative overflow-hidden bg-brand-dark/50 flex items-center justify-center w-[90vw] h-[60vh] rounded-[32px] scale-50">
          <img 
            src="/studio.jpeg" 
            alt="NexGen Studio" 
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/80" />

          {/* Centered Overlay Text */}
          <div className="overlay-content relative z-10 text-center px-6 max-w-4xl flex flex-col items-center gap-3">
            <span className="text-brand-red font-semibold text-xs md:text-sm tracking-[0.3em] uppercase">
              OUR PLAYGROUND
            </span>
            <h2 className="font-mango text-7xl md:text-9xl lg:text-[10rem] leading-none text-brand-beige uppercase tracking-[0.06em]">
              NEXGEN STUDIO
            </h2>
            <p className="text-brand-beige/70 text-sm md:text-lg max-w-xl font-medium tracking-tight">
              Where creative vision and AI-native workflows merge to build high-converting content engines.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
