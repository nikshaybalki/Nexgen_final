import { motion } from "motion/react";

const values = [
  {
    num: "01",
    title: "Craft",
    desc: "Attention is earned, not assumed. Every cut, line, and frame is considered — because your audience deserves better than average."
  },
  {
    num: "02",
    title: "Clarity",
    desc: "The hard things deserve clear explanation. We simplify without dumbing down — that's the whole point."
  },
  {
    num: "03",
    title: "Consistency",
    desc: "Viral one-offs are nice. Sustained growth is the goal. We help you show up week after week, reliably and powerfully."
  },
  {
    num: "04",
    title: "Authenticity",
    desc: "No generic edits, no diluted message. Content that feels honest, human, and builds genuine connection."
  },
  {
    num: "05",
    title: "Deliberateness",
    desc: "Research first, feeling second. Nothing goes out that we can't explain. Every decision is backed by purpose and executed with precision."
  },
  {
    num: "06",
    title: "Results",
    desc: "We measure success in whether your audience stays, grows, and trusts you more — not just in vanity metrics and temporary views."
  }
];

export default function ValuesSection() {
  return (
    <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto border-t border-brand-beige/5">
      {/* Section Headers */}
      <div className="flex flex-col items-center text-center gap-4 mb-20">
        <motion.span 
          className="text-brand-red font-semibold text-xs tracking-[0.3em] uppercase block"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          WHAT DRIVES US
        </motion.span>
        <motion.h2 
          className="font-mango text-7xl md:text-[6.5rem] lg:text-[7.5rem] leading-none text-brand-beige uppercase tracking-[0.06em]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          OUR VALUES
        </motion.h2>
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {values.map((item, idx) => (
          <motion.div 
            key={item.title}
            className="group relative flex flex-col items-center text-center p-8 rounded-2xl bg-brand-dark/15 border border-brand-beige/5 hover:bg-brand-dark/35 hover:border-brand-beige/10 hover:shadow-[0_12px_40px_rgba(0,0,0,0.6)] transition-all duration-300 hover:-translate-y-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.08 }}
          >
            {/* Red Card Number Badge */}
            <span className="text-[10px] font-bold tracking-widest text-brand-red mb-3 block opacity-60 group-hover:opacity-100 transition-opacity">
              {item.num}
            </span>

            {/* Red Title */}
            <h3 className="text-brand-red font-bold text-lg md:text-xl tracking-widest uppercase mb-4">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-brand-beige/70 text-xs md:text-sm leading-relaxed font-medium">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
