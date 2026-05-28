import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Ankur Warikoo",
    company: "Nearbuy.com",
    text: "I am so impressed with the details and the planning that it felt like we have been working together for such a long time. Would strongly recommend them if you want anything to do with video.",
    image: "https://framerusercontent.com/images/xtNB2IszeI9Qm7JWd3mpQXP41g.png"
  },
  {
    name: "Saqib Saleem",
    company: "Actor",
    text: "Working with OWLED has been an absolute pleasure. Their vision and execution are top-notch, and they really understand how to tell a story that resonates.",
    image: "https://framerusercontent.com/images/juXK99vV1QLnojYLK3vwL40GU.webp"
  },
  {
    name: "Yashoraj Tyagi",
    company: "CASHe",
    text: "They are not just an agency, they are partners in growth. Their AI-driven approach saved us time and gave us creative outputs we hadn't even imagined.",
    image: "https://framerusercontent.com/images/P15RvmAizqbVBGdu3My21HSodY.png"
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto border-y border-brand-beige/10">
      <div className="flex flex-col md:flex-row gap-16 items-center">
        {/* Images Stack */}
        <div className="relative w-full md:w-1/2 aspect-square max-w-md">
           <AnimatePresence mode="popLayout">
             <motion.div 
               key={index}
               className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl"
               initial={{ opacity: 0, x: 100, rotate: 10 }}
               animate={{ opacity: 1, x: 0, rotate: 0 }}
               exit={{ opacity: 0, x: -100, rotate: -10 }}
               transition={{ type: "spring", stiffness: 300, damping: 30 }}
             >
                <img 
                  src={testimonials[index].image} 
                  alt={testimonials[index].name} 
                  className="w-full h-full object-cover"
                />
             </motion.div>
           </AnimatePresence>
           
           {/* Decorative Stack Effect */}
           <div className="absolute inset-0 border-2 border-brand-red rounded-2xl -rotate-3 -z-10 translate-x-4 translate-y-4" />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 space-y-8 text-center md:text-left">
           <div className="space-y-4">
             <span className="text-brand-yellow font-semibold text-xs tracking-widest uppercase">TESTIMONIALS</span>
             <h2 className="font-mango text-7xl md:text-8xl leading-none">THE IMPACT, IN THEIR WORDS</h2>
           </div>

           <div className="min-h-[200px] flex flex-col justify-center">
             <AnimatePresence mode="wait">
               <motion.div
                 key={index}
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -20 }}
                 transition={{ duration: 0.3 }}
                 className="space-y-6"
               >
                 <p className="text-xl md:text-2xl leading-relaxed italic text-brand-beige/80">
                   "{testimonials[index].text}"
                 </p>
                 <div>
                   <h4 className="text-xl font-bold">{testimonials[index].name}</h4>
                   <p className="text-brand-beige/40 text-sm">{testimonials[index].company}</p>
                 </div>
               </motion.div>
             </AnimatePresence>
           </div>

           <div className="flex justify-center md:justify-start gap-4">
             <motion.button 
               onClick={prev}
               className="p-4 bg-brand-red rounded-full hover:bg-brand-red/80 transition-colors shadow-lg"
               whileHover={{ scale: 1.1 }}
               whileTap={{ scale: 0.9 }}
             >
               <ChevronLeft className="w-6 h-6" />
             </motion.button>
             <motion.button 
               onClick={next}
               className="p-4 bg-brand-red rounded-full hover:bg-brand-red/80 transition-colors shadow-lg"
               whileHover={{ scale: 1.1 }}
               whileTap={{ scale: 0.9 }}
             >
               <ChevronRight className="w-6 h-6" />
             </motion.button>
           </div>
        </div>
      </div>
    </section>
  );
}
