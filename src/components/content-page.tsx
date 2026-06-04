import { motion, AnimatePresence } from "motion/react";
import { Youtube, Instagram, X, ArrowUpRight } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";
import ChannelScreens from "./channel-screens";

const channels = [
  {
    name: "Vaibhav Kadnar",
    platform: "youtube",
    initials: "VK",
    image: "/Vaibhav Kadnar.jpg",
    metric: "6.97M",
    metricType: "SUBSCRIBERS",
    description: "The flagship channel. Education, career strategy, and making money in the real world — trusted by 7M+ Indians navigating their next move.",
    videoId: "UpOwxW_bcqw",
    url: "https://www.youtube.com/@VaibhavKadnar",
    hasPage: true,
  },
  {
    name: "vaibhavkadnarofficial",
    platform: "instagram",
    initials: "VK",
    image: "/vaibhavkadnarofficial.jpg",
    metric: "706K",
    metricType: "FOLLOWERS",
    description: "Real, actionable psychology and social dynamics. Direct, high-impact videos helping Gen Z decode human behaviour and build confidence.",
    url: "https://www.instagram.com/vaibhavkadnarofficial",
    hasPage: true,
  },
  {
    name: "Vaibhav Kadnar Explains",
    platform: "youtube",
    initials: "VE",
    image: "/Vaibhav Kadnar Explains.jpg",
    metric: "42.1K",
    metricType: "SUBSCRIBERS",
    description: "Psychology decoded. Human behaviour, influence, confidence, dark psychology, and the hidden mental models behind power and success.",
    videoId: "UpOwxW_bcqw",
    url: "https://www.youtube.com/@VaibhavKadnarExplains",
    hasPage: true,
  },
  {
    name: "vaibhavkadnar.talks",
    platform: "instagram",
    initials: "VT",
    image: "/vaibhavkadnar.talks.jpg",
    metric: "255K",
    metricType: "FOLLOWERS",
    description: "Deep conversations and key insights on modern careers, high-income skills, and mental frameworks for the next generation of builders.",
    url: "https://www.instagram.com/vaibhavkadnar.talks",
    hasPage: true,
  },
  {
    name: "The Vaibhav Doctrine",
    platform: "youtube",
    initials: "VD",
    image: "/The Vaibhav Doctrine.jpg",
    metric: "3.5K",
    metricType: "SUBSCRIBERS",
    description: "Geopolitics, global power, and international strategy. Decoding wars, economies, and the forces that quietly shape nations and your future.",
    videoId: "BDGGkT8YB0w",
    url: "https://www.youtube.com/@TheVaibhavDoctrine",
    hasPage: true,
  },
  {
    name: "Vaibhav Career Lab",
    platform: "youtube",
    initials: "VC",
    image: "/Vaibhav Career Lab.jpg",
    metric: "2.92K",
    metricType: "SUBSCRIBERS",
    description: "Unlocking career excellence and job strategies. Practical guides on resume building, networking, and high-income skills in the digital economy.",
    videoId: "ym_E5VGm8GU",
    url: "https://www.youtube.com/@VaibhavCareerLab",
    hasPage: true,
  },
];

export default function ContentPage() {
  const modalRef = useRef<HTMLDivElement>(null);
  const [selectedChannel, setSelectedChannel] = useState<any>(null);

  // Prevent body scroll when detail modal is open
  useEffect(() => {
    if (selectedChannel) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedChannel]);

  return (
    <>
      <section className="pt-28 pb-20 px-4 sm:px-6 md:px-16 max-w-7xl mx-auto overflow-hidden">
        {/* Subtitle */}
        <motion.div
          className="text-center mb-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-brand-red font-semibold text-xs tracking-[0.3em] uppercase block">
            OUR WORK • THE CHANNELS
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-mango text-5xl sm:text-7xl md:text-9xl leading-none tracking-wider text-white uppercase">
            THE CONTENT WE <span className="text-brand-red">BUILD</span>
          </h1>
        </motion.div>

        {/* Grid Layout */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-10"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          {channels.map((channel) => {
            const isYouTube = channel.platform === "youtube";
            
            return (
              <motion.div
                key={channel.name}
                variants={{
                  hidden: { opacity: 0, y: 35 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
                }}
                whileHover={{ y: -6 }}
                className="group relative bg-[#0a0a0c] border border-brand-beige/5 rounded-3xl p-6 sm:p-8 hover:border-brand-red/20 transition-all duration-500 shadow-2xl flex flex-col justify-between overflow-hidden"
              >
                {/* Glowing red gradient overlay on hover */}
                <div className="absolute -inset-px rounded-3xl bg-gradient-to-b from-brand-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10" />
                
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between gap-4">
                    {/* Avatar with Glow on hover (Larger size) */}
                    <div className="relative shrink-0">
                      <div className={`w-20 h-20 rounded-full overflow-hidden border-2 bg-brand-dark flex items-center justify-center relative shadow-xl transition-all duration-500 ${
                        isYouTube 
                          ? 'border-brand-beige/10 group-hover:border-brand-red group-hover:shadow-[0_0_25px_rgba(207,17,52,0.6)]' 
                          : 'border-brand-beige/10 group-hover:border-pink-500 group-hover:shadow-[0_0_25px_rgba(236,72,153,0.6)]'
                      }`}>
                        <img 
                          src={channel.image} 
                          alt={channel.name} 
                          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500" 
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = "none";
                          }}
                        />
                      </div>
                    </div>

                    {/* Platform Tag Pill */}
                    {isYouTube ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-[10px] font-bold tracking-widest uppercase">
                        <Youtube className="w-3.5 h-3.5 fill-brand-red" />
                        YOUTUBE
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-orange-500/10 border border-pink-500/20 text-pink-400 text-[10px] font-bold tracking-widest uppercase">
                        <Instagram className="w-3.5 h-3.5" />
                        INSTAGRAM
                      </span>
                    )}
                  </div>

                  {/* Channel Name */}
                  <h3 className="text-xl md:text-2xl font-bold text-brand-beige mt-6 group-hover:text-white transition-colors tracking-tight line-clamp-1">
                    {channel.name}
                  </h3>

                  {/* Creative Metric Styling */}
                  <div className="flex items-baseline gap-1 mt-4">
                    <span className="text-4xl md:text-5xl font-mango uppercase font-bold text-white tracking-wide">
                      {channel.metric.replace(/[MK]/g, '')}
                    </span>
                    <span className="text-2xl md:text-3xl font-mango uppercase font-bold text-brand-red">
                      {channel.metric.includes('M') ? 'M' : channel.metric.includes('K') ? 'K' : ''}
                    </span>
                    <span className="text-[10px] font-bold text-brand-beige/40 tracking-widest uppercase ml-2">
                      {channel.metricType}
                    </span>
                  </div>

                  {/* Red Divider Line */}
                  <div className="w-12 h-[2px] bg-brand-red mt-5 mb-4 group-hover:w-20 transition-all duration-500" />

                  {/* Description */}
                  <p className="text-brand-beige/65 text-sm md:text-base leading-relaxed font-medium">
                    {channel.description}
                  </p>
                </div>

                {/* Card Actions */}
                <div className="mt-8 pt-5 border-t border-brand-beige/5 flex items-center justify-between">
                  <button
                    onClick={() => {
                      setSelectedChannel(channel);
                    }}
                    className="text-xs font-bold tracking-widest uppercase text-brand-beige/60 hover:text-brand-red transition-colors flex items-center gap-1.5 group/btn focus:outline-none cursor-pointer"
                  >
                    EXPLORE INSIGHTS
                    <span className="transform group-hover/btn:translate-x-1.5 transition-transform duration-300">→</span>
                  </button>

                  <a 
                    href={channel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-beige/40 hover:text-brand-beige p-2 hover:bg-brand-beige/5 rounded-full transition-colors flex items-center justify-center"
                    title={`Open ${channel.name} online`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Detail overlay modal */}
      <AnimatePresence>
        {selectedChannel && (
          <motion.div 
            ref={modalRef}
            id="modal-scroller"
            className="fixed inset-0 z-[200] bg-black overflow-y-auto"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5, ease: "circOut" }}
          >
            <button 
              onClick={() => setSelectedChannel(null)} 
              className="fixed top-8 right-8 z-[210] p-3 md:p-4 bg-brand-dark/80 backdrop-blur-xl rounded-full border border-brand-beige/10 text-brand-beige hover:bg-brand-red hover:text-white transition-colors shadow-2xl"
            >
              <X className="w-6 h-6" />
            </button>
            <ChannelScreens channelName={selectedChannel.name} scrollContainerRef={modalRef} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
