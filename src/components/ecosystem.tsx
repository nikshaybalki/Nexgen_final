import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const cards = [
  {
    title: "We Build Videos",
    description: "An AI-native content studio built for the future. We produce high-quality video content - ad films, AI films, animated videos, and CGI/VFX - using cutting-edge tools that compress timelines.",
    tag: "FILMS",
    color: "brand-red",
    bg: "https://framerusercontent.com/images/Li0bUodg313W8R1l6HmsfrBdBRM.png",
    logo: "https://framerusercontent.com/images/EQ0HT7ALBVuVfa8aG0U58ZgTdMY.svg"
  },
  {
    title: "We Build Campaigns",
    description: "Marketing Campaigns, Influencer partnerships, and hands-on social media management, all working together to keep your brand relevant in the ever-changing digital landscape.",
    tag: "SOCIALS",
    color: "brand-red",
    bg: "https://framerusercontent.com/images/cp5EVvf483opYzxmKy2Xr9MAILg.png",
    logo: "https://framerusercontent.com/images/bzn6syysrxRVUBoALWGUM9HZU.svg"
  },
  {
    title: "We Build IPs & Distribution",
    description: "Creating digital IPs like Podcasts and YT channels to build lasting engagement and organic ownership for future-forward brands.",
    tag: "NEXGEN",
    color: "brand-red",
    bg: "https://framerusercontent.com/images/Xh26wQSX5TiLwpVnFFsboZFM.png",
    logo: "https://framerusercontent.com/images/EQ0HT7ALBVuVfa8aG0U58ZgTdMY.svg"
  }
];

export default function Ecosystem() {
  return (
    <section id="what-we-build" className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center gap-4 mb-20">
        <motion.span 
          className="text-brand-yellow font-semibold text-xs tracking-widest uppercase"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          ECOSYSTEM
        </motion.span>
        <motion.h2 
          className="font-mango text-8xl md:text-9xl leading-none"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          WHAT WE BUILD
        </motion.h2>
        <motion.p 
          className="text-brand-beige/60 text-lg max-w-2xl mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Our structure is designed for specialized excellence across the modern marketing stack.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, idx) => (
          <motion.div 
            key={card.title}
            className="group relative flex flex-col bg-brand-dark rounded-xl overflow-hidden cursor-pointer h-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -10 }}
          >
            {/* Image Header */}
            <div className="relative h-64 overflow-hidden">
                <img 
                  src={card.bg} 
                  alt={card.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center p-12">
                   <img src={card.logo} alt="Logo" className="w-full h-auto object-contain max-h-16" />
                </div>
            </div>

            {/* Content */}
            <div className="p-8 flex-1 flex flex-col gap-6">
               <div className="flex flex-col gap-2">
                 <h3 className="text-2xl font-bold font-sans tracking-tight">{card.title}</h3>
                 <p className="text-brand-beige/50 text-sm leading-relaxed">{card.description}</p>
               </div>
               
               <div className="mt-auto pt-4 flex items-center justify-between border-t border-brand-beige/10">
                  <span className="text-xs font-bold tracking-widest text-brand-beige/40">{card.tag}</span>
                  <div className="w-10 h-10 bg-brand-beige/5 rounded-full flex items-center justify-center group-hover:bg-brand-red group-hover:text-brand-beige transition-colors">
                     <ArrowUpRight className="w-5 h-5" />
                  </div>
               </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
