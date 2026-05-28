import { motion } from "motion/react";
import { Play } from "lucide-react";

export default function Showreel() {
  return (
    <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto flex flex-col items-center gap-16">
      <div className="flex flex-col items-center text-center gap-4">
        <motion.span 
          className="text-brand-yellow font-semibold text-xs tracking-widest uppercase"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          SHOWREEL
        </motion.span>
        <motion.h2 
          className="font-mango text-8xl md:text-9xl leading-none flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>SEE OUR VISION</span>
          <span className="text-brand-red italic">IN MOTION</span>
        </motion.h2>
        <motion.p 
          className="text-brand-beige/60 text-lg max-w-2xl mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          A curated reel of our most insightful work across all three divisions — a testament to clarity and execution.
        </motion.p>
      </div>

      <motion.div 
        className="relative w-full aspect-video rounded-2xl overflow-hidden group cursor-pointer border border-brand-beige/10"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.5 }}
      >
        <img 
          src="https://i.ytimg.com/vi_webp/hfoye376H4I/sddefault.webp" 
          alt="Showreel Preview" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <motion.div 
              className="w-20 h-20 md:w-24 md:h-24 bg-brand-red rounded-full flex items-center justify-center shadow-2xl"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Play className="w-8 h-8 fill-white text-white translate-x-1" />
            </motion.div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-4 left-4 flex gap-1 items-center">
            <div className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
            <span className="text-[10px] font-bold tracking-widest text-white/50 uppercase">REC</span>
        </div>
        <div className="absolute bottom-4 right-4 flex gap-4 text-[10px] font-bold tracking-widest text-white/50 uppercase">
            <span>4K 60FPS</span>
            <span>LOG-C</span>
        </div>
      </motion.div>
    </section>
  );
}
