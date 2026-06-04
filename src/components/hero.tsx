import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function Hero({ onNavigate }: { onNavigate: (toPage: "home" | "about" | "content") => void }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-GB", { hour12: false });
  };

  return (
    <section className="relative h-screen flex flex-col justify-between overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          src="/Website.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black" />
      </div>

      {/* Decorative Clock (Top Center) */}
      {/* <div className="absolute top-10 left-1/2 -translate-x-1/2 z-50 hidden md:block">
        <div className="flex flex-col items-center gap-1">
          <span className="text-[10px] font-bold tracking-[0.3em] text-brand-beige/30 uppercase leading-none">TIME ELAPSED</span>
          <span className="font-mono text-lg text-brand-beige font-medium tracking-tight">
            {formatTime(time)}
          </span>
        </div>
      </div> */}

      {/* Main Content */}
      <div className="relative z-10 flex-1 px-8 md:px-20 pt-32 md:pt-48" />

      {/* Bottom Content */}
      <div className="relative z-10 px-8 md:px-20 pb-20 flex flex-col md:flex-row items-end justify-between gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href="/content"
            onClick={(e) => {
              e.preventDefault();
              onNavigate("content");
            }}
            className="group flex flex-col items-start gap-4"
          >
            <div className="bg-brand-red text-brand-beige px-6 py-4 rounded-lg text-sm font-bold tracking-widest uppercase flex items-center gap-3">
              DISCOVER MY CONTENT
            </div>
          </a>
        </motion.div>

        <motion.div
          className="max-w-xl text-right md:text-right"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-xl md:text-2xl font-medium leading-tight">
            <span className="font-bold">Vaibhav Kadnar</span> blends authentic storytelling, creative vision, and engaging digital media to create content that breaks through the noise.
          </p>
          <p className="mt-8 text-brand-beige/50 text-lg md:text-xl font-medium">
            If you want to experience content that builds genuine connections and inspires audiences, you've come to the right place.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
