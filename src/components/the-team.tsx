import { motion } from "motion/react";

const disciplines = [
  {
    role: "Researchers",
    sub: "Ideation & Data",
    desc: "Mining data, validating trending topics, and uncovering creative angles to ensure content is backed by strategy."
  },
  {
    role: "Writers",
    sub: "Script & Narrative",
    desc: "Transforming insights and drafts into high-retention, engaging spoken-word scripts and structured narratives."
  },
  {
    role: "Editors",
    sub: "Post-Production",
    desc: "Refining visual pacing, sound dynamics, graphics, and retention hooks to keep the audience hooked from start to finish."
  },
  {
    role: "Operators",
    sub: "Scale & Distribution",
    desc: "Optimizing platform formatting, packaging thumbnails, scheduling, and running integrated channel pipelines."
  }
];

export default function TheTeam() {
  return (
    <section id="the-team" className="py-24 px-6 md:px-16 max-w-7xl mx-auto border-t border-brand-beige/5 overflow-hidden">
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6">
        
        {/* Red Subtitle */}
        <motion.span 
          className="text-brand-red font-semibold text-xs tracking-[0.3em] uppercase block"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          THE TEAM
        </motion.span>
        
        {/* Main Title */}
        <motion.h2 
          className="font-mango text-7xl md:text-[6.5rem] lg:text-[7.5rem] leading-[0.92] tracking-[0.06em] text-brand-beige uppercase flex flex-col"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          <motion.span variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
            RESEARCHERS. WRITERS.
          </motion.span>
          <motion.span variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
            EDITORS. OPERATORS.
          </motion.span>
        </motion.h2>

        {/* Copy text */}
        <motion.p 
          className="text-brand-beige/70 text-base md:text-lg lg:text-xl font-medium leading-relaxed max-w-3xl pt-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          We're a tight team working out of Pune — turning a feed full of noise into stories worth staying for. Every role exists for one reason: to make the work better.
        </motion.p>
        
      </div>

      {/* Grid of Disciplines */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
        {disciplines.map((item, idx) => (
          <motion.div 
            key={item.role}
            className="group relative flex flex-col p-6 rounded-xl bg-brand-dark/15 border border-brand-beige/5 hover:bg-brand-dark/35 hover:border-brand-beige/10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.08 }}
          >
            {/* Role Header */}
            <h3 className="text-brand-red font-bold text-base md:text-lg tracking-wider uppercase mb-1">
              {item.role}
            </h3>
            
            {/* Subtext */}
            <span className="text-brand-beige/40 text-[9px] md:text-[10px] font-bold tracking-widest uppercase mb-4 block">
              {item.sub}
            </span>

            {/* Description */}
            <p className="text-brand-beige/65 text-xs md:text-sm leading-relaxed font-medium">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Center-aligned Red Divider Bar */}
      <motion.div 
        className="w-16 h-1 bg-brand-red mt-20 mx-auto rounded-full"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      />
    </section>
  );
}
