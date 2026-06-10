import { motion } from "motion/react";
import { MapPin, Briefcase, BarChart2, ArrowRight } from "lucide-react";
import { useRef } from "react";

const openPositions = [
  {
    title: "Junior Video Editor",
    location: "Pune, India",
    type: "Full-time",
    experience: "Mid Level",
    // category: "ENGINEERING",
    link: "https://binary.so/UDQPjo0",
  },
  {
    title: "Senior Script Writer",
    location: "Pune, India",
    type: "Full-time",
    experience: "Mid Level",
    // category: "DESIGN",
    link: "https://binary.so/6fSQBiA",
  },
  // {
  //   title: "FRONTEND DEVELOPER",
  //   location: "Bangalore, India",
  //   type: "Full-time",
  //   experience: "Mid Level",
  //   category: "ENGINEERING",
  //   link: "https://binary.so/uOWUtk0",
  // },
  // {
  //   title: "MARKETING SPECIALIST",
  //   location: "Bangalore, India",
  //   type: "Full-time",
  //   experience: "Mid Level",
  //   category: "MARKETING",
  //   link: "https://binary.so/W4rk4vx",
  // },
];

export default function CareerPage() {
  const rolesRef = useRef<HTMLDivElement>(null);

  const scrollToRoles = () => {
    rolesRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="bg-black text-brand-beige min-h-screen pt-20">
      {/* Dark Header Hero */}
      <section className="relative py-24 px-6 md:px-16 max-w-7xl mx-auto overflow-hidden">
        {/* Concentric Circles Background detail on the right */}
        <div className="hidden lg:block absolute right-[-50px] top-1/2 -translate-y-1/2 w-[550px] h-[550px] pointer-events-none select-none opacity-45">
          <div className="absolute inset-0 rounded-full border border-brand-red/5 flex items-center justify-center">
            <div className="w-[85%] h-[85%] rounded-full border border-brand-red/10 flex items-center justify-center">
              <div className="w-[72%] h-[72%] rounded-full border border-brand-red/15 flex items-center justify-center">
                <div className="w-[60%] h-[60%] rounded-full border border-brand-red/20 flex items-center justify-center">
                  <div className="w-[48%] h-[48%] rounded-full border border-brand-red/25 flex items-center justify-center">
                    <div className="w-[36%] h-[36%] rounded-full border border-brand-red/30 flex items-center justify-center">
                      <div className="w-[20%] h-[20%] rounded-full border border-brand-red/40 bg-brand-red/5"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-start gap-8 max-w-3xl">
          {/* Subtitle tag */}
          <motion.div 
            className="flex items-center gap-2 text-brand-red font-bold text-xs tracking-[0.2em] uppercase"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            WE'RE HIRING
            <span className="w-12 h-[2px] bg-brand-red inline-block"></span>
          </motion.div>

          {/* Heading */}
          <motion.h1 
            className="font-sans font-black text-5xl md:text-7xl lg:text-[85px] leading-[0.9] tracking-tighter uppercase text-white flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span>BUILD THE FUTURE</span>
            <span>
              WITH <span className="text-brand-red">US.</span>
            </span>
          </motion.h1>

          {/* Subtext description */}
          <motion.p 
            className="text-brand-beige/60 text-lg md:text-xl max-w-xl leading-relaxed mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore open opportunities and find your next challenge.
          </motion.p>

          {/* Button */}
          <motion.button
            onClick={scrollToRoles}
            className="group flex items-center gap-3 bg-brand-red hover:bg-brand-red/90 text-white px-8 py-4 rounded font-bold text-xs tracking-wider uppercase transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.98] cursor-pointer shadow-lg shadow-brand-red/20 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            SEE OPEN ROLES
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
        </div>
      </section>

      {/* Light Section for Open Positions */}
      <section ref={rolesRef} className="bg-[#f8f9fa] text-black py-24 px-6 md:px-16 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-brand-red font-black text-lg md:text-xl tracking-wider uppercase flex items-center gap-2 whitespace-nowrap">
              <span className="text-brand-red font-black text-2xl">/</span> OPEN POSITIONS
            </h2>
            <div className="w-full h-px bg-black/10"></div>
          </div>

          {/* Positions Cards Grid */}
          <div className="flex flex-col gap-6">
            {openPositions.map((job, idx) => (
              <motion.div
                key={job.title}
                className="bg-white border border-black/5 rounded-xl p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-[0_4px_25px_rgba(0,0,0,0.01)] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                {/* Left Side Info */}
                <div className="flex flex-col items-start">
                  <div className="flex items-center gap-1.5 text-brand-red font-black text-[10px] tracking-widest uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-red inline-block"></span>
                    • OPEN
                  </div>
                  
                  <h3 className="font-sans font-black text-xl md:text-2xl tracking-tight text-black mt-2 uppercase">
                    {job.title}
                  </h3>

                  {/* Metadata Row */}
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-4 text-black/55 text-xs md:text-sm font-semibold">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-black/35" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Briefcase className="w-4 h-4 text-black/35" />
                      {job.type}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <BarChart2 className="w-4 h-4 text-black/35" />
                      {job.experience}
                    </div>
                  </div>
                </div>

                {/* Right Side Actions */}
                <div className="flex flex-col md:items-end justify-between gap-4 self-stretch md:self-auto min-w-[160px]">
                  {/* Category Tag */}
                  {/* <div className="border border-brand-red/20 text-brand-red px-4 py-1.5 rounded font-black text-[9px] tracking-[0.15em] uppercase text-center inline-block max-w-fit self-start md:self-auto">
                    {job.category}
                  </div> */}

                  {/* Action Button */}
                  <a
                    href={job.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-brand-red hover:bg-brand-red/90 text-white font-bold text-xs tracking-wider uppercase px-6 py-3.5 rounded flex items-center justify-center gap-2 cursor-pointer transition-colors duration-300 w-full md:w-auto shadow-md shadow-brand-red/10 hover:scale-[1.02] active:scale-[0.98] transform"
                  >
                    VIEW ROLE
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
