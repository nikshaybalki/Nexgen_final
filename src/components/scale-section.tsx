import { motion } from "motion/react";

export default function ScaleSection() {
  return (
    <section className="py-24 space-y-32">
      {/* Block 1 */}
      <div className="px-6 md:px-16 max-w-7xl mx-auto flex flex-col items-center gap-16">
         <div className="flex flex-col items-center text-center gap-4">
            <motion.span 
              className="text-brand-yellow font-semibold text-xs tracking-widest uppercase"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Our Scale & Dedication
            </motion.span>
            <motion.h2 
              className="font-mango text-8xl md:text-9xl leading-none flex flex-wrap justify-center gap-x-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span>BUILT IN-HOUSE</span>
              <span>FOR</span>
              <span className="text-brand-red italic">EXCELLENCE.</span>
            </motion.h2>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="space-y-6"
            >
              <p className="text-2xl md:text-3xl leading-snug font-medium">
                As a fast-growing voice in the digital space, <span className="underline decoration-brand-red decoration-2 underline-offset-4 font-bold">Vaibhav Kadnar</span> operates with the agility of an independent creator and the production quality of a professional media team.
              </p>
              <p className="text-brand-beige/50 text-xl leading-relaxed">
                My dedicated approach to <span className="text-brand-beige font-semibold">strategy, creative direction, and filmmaking</span> is united by a single goal: to deliver content that genuinely moves culture and connects with audiences.
              </p>
            </motion.div>
            
            <motion.div 
               className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden bg-brand-dark"
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
            >
               <video 
                 src="https://framerusercontent.com/assets/sLExNztbxBz0iQXzKiG4WAPki0E.webm" 
                 autoPlay 
                 loop 
                 muted 
                 playsInline 
                 className="w-full h-full object-cover"
               />
            </motion.div>
         </div>
      </div>

      {/* Block 2 (Sticky/Overlap feel) */}
      <div className="px-6 md:px-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
             className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden bg-brand-dark order-2 md:order-1"
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
          >
             <video 
               src="https://framerusercontent.com/assets/UzV0LXfr8BwVii9AICZtT3UAG4c.webm" 
               autoPlay 
               loop 
               muted 
               playsInline 
               className="w-full h-full object-cover"
             />
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="space-y-6 order-1 md:order-2"
          >
            <p className="text-2xl md:text-3xl leading-snug font-medium">
              I own the entire content creation and distribution <span className="underline decoration-brand-red decoration-2 underline-offset-4 font-bold">process end-to-end</span>, from creative ideation to flawless final execution.
            </p>
            <p className="text-brand-beige/50 text-xl leading-relaxed">
               I provide <span className="text-brand-beige font-semibold underline">authentic storytelling in a crowded digital world</span>, transforming ideas into engaging, dynamic, and impactful content. Let my creative vision become your brand's definitive advantage.
            </p>
          </motion.div>
      </div>
    </section>
  );
}
