import { motion, AnimatePresence } from "motion/react";
import { Youtube, Instagram, X } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ContainerScroll } from "./container-scroll-animation";
import ChannelScreens from "./channel-screens";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    side: "left",
    position: "top",
    platform: "youtube",
    name: "Vaibhav Kadnar",
    stat: "6.97M Subscribers",
    tilt: 5,
    y: "15%",
    x: "5%",
    videoId: "UpOwxW_bcqw",
    hasPage: true,
  },
  {
    side: "left",
    position: "mid",
    platform: "instagram",
    name: "vaibhavkadnarofficial",
    stat: "706K Followers",
    tilt: 0,
    y: "45%",
    x: "2%",
  },
  {
    side: "left",
    position: "bot",
    platform: "youtube",
    name: "Vaibhav Kadnar Explains",
    stat: "42.1K Subscribers",
    tilt: -5,
    y: "75%",
    x: "5%",
    videoId: "UpOwxW_bcqw",
    hasPage: true,
  },
  {
    side: "right",
    position: "top",
    platform: "instagram",
    name: "vaibhavkadnar.talks",
    stat: "255K Followers",
    tilt: -5,
    y: "15%",
    x: "65%",
  },
  {
    side: "right",
    position: "mid",
    platform: "youtube",
    name: "The Vaibhav Doctrine",
    stat: "3.5K Subscribers",
    tilt: 0,
    y: "45%",
    x: "68%",
    videoId: "BDGGkT8YB0w",
    hasPage: true,
  },
  {
    side: "right",
    position: "bot",
    platform: "youtube",
    name: "Vaibhav Career Lab",
    stat: "2.92K Subscribers",
    tilt: 5,
    y: "75%",
    x: "65%",
    videoId: "ym_E5VGm8GU",
    hasPage: true,
  },
];

export default function ImageSection() {
  const containerRef = useRef<HTMLElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const [selectedChannel, setSelectedChannel] = useState<any>(null);

  // Prevent body scrolling when overlay is active
  useEffect(() => {
    if (selectedChannel) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedChannel]);

  useGSAP(() => {
    const wrappers = gsap.utils.toArray<HTMLElement>(".stat-card-wrapper");
    const cards = gsap.utils.toArray<HTMLElement>(".stat-card");
    
    wrappers.forEach((wrapper, i) => {
      const item = stats[i];
      const xOffset = item.side === "left" ? 150 : -150;
      const yOffset = -60;
      const initialRotation = item.side === "left" ? -20 : 20;

      gsap.fromTo(wrapper, 
        {
          x: xOffset,
          y: yOffset,
          rotation: initialRotation,
          opacity: 0,
        }, 
        {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            toggleActions: "play reverse play reverse",
          },
          x: 0,
          y: 0,
          opacity: 1,
          rotation: item.tilt,
          duration: 1,
          ease: "back.out(1.2)",
          delay: i * 0.1,
          overwrite: "auto",
        }
      );
    });

    cards.forEach((card) => {
      gsap.to(card, {
        y: -10,
        duration: 2 + Math.random(),
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        delay: Math.random() * 2
      });
    });
  }, { scope: containerRef });

  return (
    <>
      <section ref={containerRef} className="px-6 md:px-16 max-w-7xl mx-auto py-24 relative overflow-visible">
        {/* Background Rings or abstract elements from image could go here */}
        <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-20 hidden md:flex">
           <div className="w-[600px] h-[600px] border border-brand-beige/20 rounded-full" />
           <div className="absolute w-[450px] h-[450px] border border-brand-beige/20 rounded-full" />
           <div className="absolute w-[300px] h-[300px] border border-brand-beige/20 rounded-full" />
        </div>

        <div className="relative w-full aspect-square md:aspect-[16/9] max-w-4xl mx-auto">
          {/* Character Image */}
          <motion.div 
            className="w-full h-full relative z-10"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://lh3.googleusercontent.com/d/1YH4V7trQ35jtuP9V_6tNdtuGsPW1x-xK" 
              alt="Vaibhav Kadnar Character" 
              className="w-full h-full object-contain drop-shadow-[0_0_50px_rgba(207,17,52,0.2)]"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://images.unsplash.com/photo-1492691523567-6119200a9443?q=80&w=2070&auto=format&fit=crop";
              }}
            />
          </motion.div>

          {/* Floating Stat Cards */}
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="stat-card-wrapper absolute z-20"
              style={{ 
                top: item.y, 
                left: item.x,
              }}
            >
              <div
                className={`stat-card flex items-center gap-2 md:gap-4 bg-brand-dark/80 backdrop-blur-xl border border-brand-beige/10 p-2 md:p-3 rounded-2xl shadow-2xl min-w-[160px] md:min-w-[240px] transition-colors scale-75 md:scale-100 ${item.hasPage ? "cursor-pointer hover:bg-brand-dark/100 hover:border-brand-beige/30" : "cursor-default"}`}
                onClick={() => {
                  if (item.hasPage) setSelectedChannel(item);
                }}
              >
                {/* Avatar Placeholder */}
                <div className="w-12 h-12 rounded-full overflow-hidden border border-brand-beige/20 bg-brand-beige/10 shrink-0">
                   <img src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${item.name.replace(/\s+/g, "")}&backgroundColor=b6e3f4`} alt="" className="w-full h-full object-cover" />
                </div>

                {/* Info */}
                <div className="flex flex-col gap-0.5">
                   <h4 className="text-xs font-bold text-brand-beige tracking-tight uppercase line-clamp-1">{item.name}</h4>
                   <div className="flex items-center gap-2">
                      {item.platform === "youtube" ? (
                        <Youtube className="w-4 h-4 text-red-600 fill-red-600" />
                      ) : (
                        <Instagram className="w-4 h-4 text-pink-500" />
                      )}
                      <span className="text-[10px] font-medium text-brand-beige/60 uppercase">{item.stat}</span>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

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
            <div className="pt-20 pb-10">
              {selectedChannel.videoId ? (
                <ContainerScroll 
                  scrollContainerRef={modalRef}
                  titleComponent={
                    <h1 className="text-4xl md:text-7xl font-mango uppercase font-bold text-white mb-20 text-center">
                      {selectedChannel.name}
                    </h1>
                  }
                >
                  <div className="w-full h-full bg-black">
                     <iframe 
                       className="w-full h-full" 
                       src={`https://www.youtube.com/embed/${selectedChannel.videoId}?autoplay=1&mute=1`} 
                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                       allowFullScreen 
                     />
                  </div>
                </ContainerScroll>
              ) : (
                <div className="text-center mb-16 mt-10 px-6">
                   <h1 className="text-4xl md:text-7xl font-mango uppercase font-bold text-white">
                      {selectedChannel.name}
                   </h1>
                </div>
              )}

              <ChannelScreens channelName={selectedChannel.name} scrollContainerRef={modalRef} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
