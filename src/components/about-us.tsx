import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Search, PenTool, Camera, Scissors, Send, Zap } from "lucide-react";

interface NodeItem {
  id: string;
  label: string;
  x: number; // percentage from left
  y: number; // percentage from top
  color: string;
  desc: string;
  icon: string;
}

const nodes: NodeItem[] = [
  {
    id: "research",
    label: "Research",
    x: 50,
    y: 15,
    color: "#f4bd45", // brand-yellow
    desc: "Brainstorming, ideation, and analysis to uncover compelling concepts for the NexGen Story. This stage ensures every project is backed by data and strong creative angles.",
    icon: "Search"
  },
  {
    id: "write",
    label: "Write",
    x: 85,
    y: 38,
    color: "#cf1134", // brand-red
    desc: "Transforming researched ideas into structured scripts and narratives. This crucial step bridges raw analysis and actual production entirely under one roof.",
    icon: "PenTool"
  },
  {
    id: "shoot",
    label: "Shoot",
    x: 72,
    y: 78,
    color: "#fff3e2", // brand-beige
    desc: "Bringing the vision to life using an all-inclusive, in-house production setup. Having every necessary resource in one place allows for seamless creative execution.",
    icon: "Camera"
  },
  {
    id: "edit",
    label: "Edit",
    x: 28,
    y: 78,
    color: "#cf1134", // brand-red
    desc: "Polishing the raw footage through a dedicated, specialized team of editors. They refine the audio and visuals to ensure high-quality, engaging storytelling.",
    icon: "Scissors"
  },
  {
    id: "post",
    label: "Post",
    x: 15,
    y: 38,
    color: "#f4bd45", // brand-yellow
    desc: "Packaging and publishing the final product across targeted platforms. Operating the entire pipeline from a single room makes distribution fast and highly efficient.",
    icon: "Send"
  }
];

export default function AboutUs() {
  const [activeNode, setActiveNode] = useState<NodeItem | null>(null);

  const getIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case "Search":
        return <Search className={className} />;
      case "PenTool":
        return <PenTool className={className} />;
      case "Camera":
        return <Camera className={className} />;
      case "Scissors":
        return <Scissors className={className} />;
      case "Send":
        return <Send className={className} />;
      default:
        return <Zap className={className} />;
    }
  };

  return (
    <section id="about-us" className="pt-32 pb-24 px-6 md:px-16 max-w-7xl mx-auto overflow-hidden">
      <style>{`
        @keyframes flow {
          to {
            stroke-dashoffset: -20;
          }
        }
        .flow-line {
          stroke-dasharray: 6 4;
          animation: flow 1.2s linear infinite;
        }
      `}</style>

      {/* Subtitle */}
      <motion.span 
        className="text-brand-red font-semibold text-xs tracking-[0.3em] uppercase block mb-6"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        OUR STORY · NEXGEN MEDIA
      </motion.span>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Column: Story Copy */}
        <div className="lg:col-span-7 space-y-8">
          <motion.h2 
            className="font-mango text-7xl md:text-[6.5rem] lg:text-[7.5rem] leading-[0.92] tracking-[0.06em] text-brand-beige uppercase flex flex-col"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
          >
            <motion.span variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
              NOT JUST
            </motion.span>
            <motion.span variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
              CONTENT MAKERS.
            </motion.span>
            <motion.span variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} className="text-brand-red">
              WE'RE SYSTEM
            </motion.span>
            <motion.span variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} className="text-brand-red">
              BUILDERS.
            </motion.span>
          </motion.h2>

          <motion.p 
            className="text-brand-beige/65 text-lg md:text-xl font-medium max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            We don't just publish videos. We craft content ecosystems that elevate India's Gen Z — and fuel real, lasting growth.
          </motion.p>
        </div>

        {/* Right Column: Interactive Ecosystem Diagram */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <motion.div 
            className="relative w-full max-w-[340px] md:max-w-[400px] aspect-square flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Glowing background */}
            <div 
              className="absolute inset-0 rounded-full bg-brand-red/5 blur-3xl pointer-events-none -z-10 transition-colors duration-500"
              style={{
                backgroundColor: activeNode ? `${activeNode.color}0d` : 'rgba(207, 17, 52, 0.05)'
              }}
            />

            {/* SVG Connecting Lines */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none z-0" 
              viewBox="0 0 100 100" 
              preserveAspectRatio="none"
            >
              <defs>
                <filter id="line-glow">
                  <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {nodes.map((node) => {
                const isActive = activeNode?.id === node.id;
                return (
                  <line
                    key={node.id}
                    x1={50}
                    y1={50}
                    x2={node.x}
                    y2={node.y}
                    stroke={isActive ? node.color : "rgba(255, 243, 226, 0.15)"}
                    strokeWidth={isActive ? 1.5 : 0.75}
                    className={isActive ? "flow-line" : ""}
                    style={{
                      filter: isActive ? "url(#line-glow)" : "none",
                      transition: "stroke 0.3s, stroke-width 0.3s",
                    }}
                  />
                );
              })}
            </svg>

            {/* Center Hub Node */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-20 h-20 rounded-full bg-black border-2 border-brand-red flex items-center justify-center shadow-[0_0_20px_rgba(207,17,52,0.3)]"
            >
              <span className="text-[10px] md:text-xs font-bold text-brand-beige tracking-wider">NEXGEN</span>
            </div>

            {/* Outer Nodes */}
            {nodes.map((node) => {
              const isActive = activeNode?.id === node.id;
              return (
                <div
                  key={node.id}
                  className="absolute z-20 flex flex-col items-center -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: `${node.x}%`,
                    top: `${node.y}%`
                  }}
                >
                  <button
                    onMouseEnter={() => setActiveNode(node)}
                    onMouseLeave={() => setActiveNode(null)}
                    onClick={() => setActiveNode(node)}
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-brand-dark/95 backdrop-blur-md flex items-center justify-center transition-all duration-300 border focus:outline-none"
                    style={{
                      borderColor: isActive ? node.color : "rgba(255, 243, 226, 0.1)",
                      boxShadow: isActive ? `0 0 15px ${node.color}50` : "none",
                      transform: isActive ? "scale(1.15)" : "scale(1)"
                    }}
                  >
                    {getIcon(node.icon, `w-5 h-5 transition-colors duration-300 ${isActive ? "" : "text-brand-beige/75"}`)}
                  </button>
                  <span 
                    className="text-[9px] md:text-[10px] font-bold tracking-widest uppercase mt-2 select-none transition-colors duration-300"
                    style={{
                      color: isActive ? node.color : "rgba(255, 243, 226, 0.4)"
                    }}
                  >
                    {node.label}
                  </span>
                </div>
              );
            })}
          </motion.div>

          {/* Description Panel */}
          <div className="w-full min-h-[110px] mt-8 bg-brand-dark/30 border border-brand-beige/10 p-5 rounded-2xl backdrop-blur-md relative overflow-hidden flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {activeNode ? (
                <motion.div
                  key={activeNode.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-1"
                >
                  <span 
                    className="text-xs font-bold uppercase tracking-widest block"
                    style={{ color: activeNode.color }}
                  >
                    {activeNode.label}
                  </span>
                  <p className="text-brand-beige/85 text-xs md:text-sm leading-relaxed">
                    {activeNode.desc}
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="default"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center"
                >
                  <p className="text-brand-beige/40 text-xs md:text-sm italic">
                    Hover over or tap the nodes in the system diagram to explore our content ecosystem.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
