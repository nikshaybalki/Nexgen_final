import { motion } from "motion/react";

export default function WhyWeExist() {
  return (
    <section id="why-we-exist" className="min-h-[50vh] flex flex-col justify-center py-16 px-6 md:px-16 max-w-7xl mx-auto border-t border-brand-beige/5 overflow-hidden">
      <div className="space-y-6 flex flex-col items-center text-center max-w-4xl mx-auto">
        
        {/* Red Subtitle */}
        <motion.span 
          className="text-brand-red font-semibold text-xs tracking-[0.3em] uppercase block"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          WHY WE EXIST
        </motion.span>
        
        {/* Main Title */}
        <motion.h2 
          className="font-mango text-7xl md:text-[6.5rem] lg:text-[7.5rem] leading-none text-brand-beige uppercase tracking-[0.06em] mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          THE GAP WE'RE FILLING
        </motion.h2>

        {/* Copy text */}
        <motion.div 
          className="text-brand-beige/70 text-base md:text-lg lg:text-xl font-medium leading-relaxed space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p>
            India's Gen Z isn't short on content. They're short on someone who explains the hard things — money, the mind, the way the world actually works — without talking down to them.
          </p>
          <p>
            We exist to build that voice: the older brother who sits beside you instead of lecturing from a stage. Someone who breaks down what matters, in a way that actually lands.
          </p>
        </motion.div>
        
      </div>
    </section>
  );
}
