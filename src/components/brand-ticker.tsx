import { motion } from "motion/react";

const brands = [
  "https://framerusercontent.com/images/IV7LyDqojZJHVvBpSdVYFzzqanE.png",
  "https://framerusercontent.com/images/OMJXG6Ly9qUfHSEQFD5mLGNlVA.png",
  "https://framerusercontent.com/images/gfcTechTbXW8JDvrFD89mfVbyo.png",
  "https://framerusercontent.com/images/i5ZaIIo1KWZtYXHtrMKBRPE9SZE.png",
  "https://framerusercontent.com/images/5ph229n0uAjciQ55tcyZRR5l8DE.png",
  "https://framerusercontent.com/images/nTKdjwTzFoUPXAC1TheHn4oV5M.png",
  "https://framerusercontent.com/images/Wl2rh2I7afEspEiQ48qWsAADHE.png",
  "https://framerusercontent.com/images/M4d3MWeOvzOrht8h4ocVNVIZMsU.png",
];

export default function BrandTicker() {
  return (
    <section className="py-24 overflow-hidden bg-black flex flex-col gap-12">
      <motion.div 
        className="flex flex-col items-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-brand-yellow font-semibold text-xs tracking-widest uppercase">TRUSTED BY BRANDS THAT</span>
        <h2 className="font-mango text-8xl md:text-9xl leading-none text-center">SHAPE THE WORLD</h2>
      </motion.div>

      <div className="relative mt-8">
        <div className="flex overflow-hidden group">
          <motion.div 
            className="flex gap-20 items-center justify-around min-w-full py-4 shrink-0 transition-transform"
            animate={{ x: [0, -1000] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {[...brands, ...brands, ...brands].map((logo, idx) => (
              <img 
                key={idx} 
                src={logo} 
                alt="Brand Logo" 
                className="h-8 md:h-12 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer"
              />
            ))}
          </motion.div>
        </div>
        
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
