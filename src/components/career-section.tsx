import { motion } from "motion/react";
import { Plus } from "lucide-react";

const positions = [
  { title: "Video Editor", team: "NEXGEN media", link: "https://binary.so/UDQPjo0" },
  { title: "Creative Lead", team: "NEXGEN media", link: "https://binary.so/6fSQBiA" },
  { title: "Social Media Manager", team: "NEXGEN media", link: "https://binary.so/W4rk4vx" },
  { title: "Jr. Creative Strategist", team: "NEXGEN media", link: "https://binary.so/uOWUtk0" },
];

export default function CareerSection() {
  return (
    <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto flex flex-col items-center gap-16">
      <div className="flex flex-col items-center text-center gap-4">
        <motion.span 
          className="text-brand-yellow font-semibold text-xs tracking-widest uppercase"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          JOIN THE NEST &
        </motion.span>
        <motion.h2 
          className="font-mango text-8xl md:text-9xl leading-none flex flex-wrap justify-center gap-x-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>BUILD THE</span>
          <span className="text-brand-red italic">FUTURE</span>
          <span>WITH US</span>
        </motion.h2>
        <p className="text-brand-beige/60 text-lg max-w-2xl mt-4">
          Our structure is designed for AI-native specialised excellence across the modern marketing stack.
        </p>
      </div>

      <div className="w-full max-w-4xl space-y-4">
        <div className="flex gap-4 mb-8">
            <button className="bg-brand-yellow text-brand-dark px-6 py-2 rounded-lg font-bold text-xs tracking-widest uppercase">ALL OPEN POSITIONS</button>
            <button className="border border-brand-beige/20 text-brand-beige px-6 py-2 rounded-lg font-bold text-xs tracking-widest uppercase hover:bg-brand-beige/5 transition-colors">SELECT A ROLE</button>
        </div>

        <div className="divide-y divide-brand-beige/10">
          {positions.map((job, idx) => (
            <motion.a
              key={job.title}
              href={job.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between py-8 group hover:px-4 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="flex flex-col gap-1">
                 <h3 className="text-2xl md:text-3xl font-medium group-hover:text-brand-yellow transition-colors">{job.title}</h3>
                 <p className="text-brand-beige/40 text-sm">{job.team}</p>
              </div>
              <div className="w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center text-brand-dark transition-transform duration-300 group-hover:rotate-45">
                 <Plus className="w-6 h-6" />
              </div>
            </motion.a>
          ))}
        </div>

        <div className="pt-12 flex justify-center">
            <motion.a
                href="#"
                className="bg-brand-red text-brand-beige px-10 py-4 rounded-full text-sm font-bold tracking-widest uppercase hover:opacity-90 transition-opacity shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                VIEW MORE
            </motion.a>
        </div>
      </div>
    </section>
  );
}
