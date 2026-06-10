import { motion } from "motion/react";

const positions = [
  { title: "Video Editor", team: "NEXGEN media", link: "https://binary.so/UDQPjo0" },
  { title: "Creative Lead", team: "NEXGEN media", link: "https://binary.so/6fSQBiA" },
  { title: "Social Media Manager", team: "NEXGEN media", link: "https://binary.so/W4rk4vx" },
  { title: "Jr. Creative Strategist", team: "NEXGEN media", link: "https://binary.so/uOWUtk0" },
];

interface CareerSectionProps {
  onNavigate: (toPage: "home" | "about" | "content" | "career", hash?: string) => void;
}

export default function CareerSection({ onNavigate }: CareerSectionProps) {
  return (
    <section id="career" className="py-24 px-6 md:px-16 max-w-7xl mx-auto flex flex-col gap-20 relative">
      {/* Header Grid Section */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">
        {/* Left Column: Headline and Paragraph */}
        <div className="lg:col-span-9 flex flex-col items-start text-left gap-6 z-10">
          
          {/* Tagline Indicator */}
          <motion.div 
            className="flex items-center gap-2 text-brand-red font-bold text-[11px] md:text-xs tracking-[0.2em] uppercase"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="w-5 h-[2px] bg-brand-red inline-block"></span>
            WE'RE HIRING · PUNE, INDIA
          </motion.div>

          {/* Bold Editorial Heading */}
          <motion.h2 
            className="font-sans font-black text-5xl md:text-7xl lg:text-[85px] leading-[0.9] tracking-tighter flex flex-col uppercase text-brand-beige"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span>BUILD THE</span>
            <span>CONTENT THAT</span>
            <span className="text-brand-red">MILLIONS WATCH.</span>
          </motion.h2>

          {/* Description Paragraph */}
          <motion.p 
            className="text-brand-beige/60 text-base md:text-lg max-w-2xl leading-relaxed mt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We're a small, deliberate team in Pune building content for{" "}
            <span className="font-bold text-brand-beige border-b border-brand-beige/40 pb-0.5 whitespace-nowrap">
              7M+ subscribers
            </span>{" "}
            across India's most-watched Gen Z channels. Every role here is real
            work — not assistance, not support. If you're sharp and want to grow
            fast, there's a seat for you.
          </motion.p>

          {/* Actions Block */}
          <motion.div 
            className="flex flex-wrap items-center gap-4 mt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Roles Open Pill Badge */}
            <div className="flex items-center gap-2.5 bg-black/40 border border-brand-beige/10 px-5 py-3.5 rounded font-bold text-xs tracking-wider uppercase text-brand-beige/70">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red"></span>
              </span>
              {2} ROLE{positions.length > 1 ? "S" : ""} OPEN NOW
              {/* {positions.length} ROLE{positions.length > 1 ? "S" : ""} OPEN NOW */}

            </div>

            {/* See Open Roles Action Button */}
            <a 
              href="/career"
              onClick={(e) => {
                e.preventDefault();
                onNavigate("career");
              }}
              className="group flex items-center gap-3 bg-brand-red hover:bg-brand-red/90 text-brand-beige px-7 py-3.5 rounded font-bold text-xs tracking-wider uppercase transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.98] cursor-pointer shadow-lg shadow-brand-red/10"
            >
              SEE OPEN ROLES
              <svg 
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Right Column: Decorative Faint Vertical Text */}
        <div className="hidden lg:col-span-3 lg:flex justify-end h-full relative pr-4">
          <div 
            className="absolute top-1/2 -translate-y-1/2 right-0 text-[11px] font-bold text-brand-beige/10 tracking-[0.3em] uppercase select-none pointer-events-none whitespace-nowrap h-fit"
            style={{ 
              writingMode: "vertical-rl", 
              textOrientation: "mixed",
            }}
          >
            NEXGEN MEDIA · CAREERS · PUNE 2026
          </div>
        </div>
      </div>
    </section>
  );
}


