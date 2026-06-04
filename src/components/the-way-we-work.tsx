import React, { useState, useRef } from "react";
import { motion } from "motion/react";

export default function TheWayWeWork() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate mouse position relative to card center
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    
    // Calculate rotation angles (max 10 degrees)
    const rX = -(mouseY / (height / 2)) * 10;
    const rY = (mouseX / (width / 2)) * 10;
    
    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <section id="the-way-we-work" className="py-24 px-6 md:px-16 max-w-7xl mx-auto border-t border-brand-beige/5 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Column: Copy Details */}
        <div className="lg:col-span-7 space-y-6">
          <motion.span 
            className="text-brand-red font-semibold text-xs tracking-[0.3em] uppercase block"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            THE WAY WE WORK
          </motion.span>
          
          <motion.h2 
            className="font-mango text-7xl md:text-[6.5rem] lg:text-[7.5rem] leading-none text-brand-beige uppercase tracking-[0.06em] mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            ALL UNDER ONE ROOF
          </motion.h2>

          <motion.div 
            className="text-brand-beige/70 text-base md:text-lg lg:text-xl font-medium leading-relaxed space-y-6 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p>
              We treat attention as a craft, not a fluke. Every script is written to be spoken, not read. Every thumbnail is engineered against banner-blindness. Every upload teaches the next one.
            </p>
            <p>
              We research, write, shoot, and edit — all under one roof. Small on purpose, deliberate by default: research first, feeling second, nothing published that we can't explain.
            </p>
          </motion.div>
        </div>

        {/* Right Column: Interactive 3D Image Card */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-[380px] md:max-w-none"
            style={{ perspective: 1000 }}
          >
            <motion.div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transformStyle: "preserve-3d",
              }}
              animate={{
                rotateX,
                rotateY,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                mass: 0.5,
              }}
              className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-brand-dark/50 border border-brand-beige/10 shadow-[0_0_50px_rgba(207,17,52,0.1)] group cursor-pointer"
            >
              <img 
                src="/img2.png" 
                alt="NexGen Pipeline" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
              
              {/* Inner card glow element */}
              <div 
                className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
                style={{
                  transform: "translateZ(20px)",
                }}
              />
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
