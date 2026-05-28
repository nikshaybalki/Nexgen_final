"use client";

import React, { useRef } from 'react';
import FlowArt, { FlowSection } from './flow-art';
import { CardStack } from './card-stack';
import { ScrollTiltedGrid } from './scroll-tilted-grid';
import { Perspective, Highlight } from './perspective-highlight';

const data = {
  "Vaibhav Kadnar": [
    { type: "hero", title: "GROWTH WITHOUT LIMITS", subtitle: "We believe everyone deserves insights that put personal evolution first. No noise, no distractions — just pure value and the community that builds it.", bg: "bg-[#e85d04]" },
    { type: "videos", bg: "bg-zinc-950", title: "FEATURED VIDEOS", items: [
      { id: "YEL9posxDS4", title: "Psychology of Money in 16 Minutes", href: "http://www.youtube.com/watch?v=YEL9posxDS4", imageSrc: "https://img.youtube.com/vi/YEL9posxDS4/hqdefault.jpg" },
      { id: "SfULw3T8OWg", title: "Master the Art of Seduction By Robert Greene", href: "http://www.youtube.com/watch?v=SfULw3T8OWg", imageSrc: "https://img.youtube.com/vi/SfULw3T8OWg/hqdefault.jpg" },
      { id: "42lSXeJalgg", title: "48 Laws Of Power PART 2", href: "http://www.youtube.com/watch?v=42lSXeJalgg", imageSrc: "https://img.youtube.com/vi/42lSXeJalgg/hqdefault.jpg" },
      { id: "-TK0dCiE0y4", title: "Make Anyone Like You In 20 Minutes | Psychology Of Seduction", href: "http://www.youtube.com/watch?v=-TK0dCiE0y4", imageSrc: "https://img.youtube.com/vi/-TK0dCiE0y4/hqdefault.jpg" },
      { id: "T0L5eT497xg", title: "What is Monk Mode? How To Get Into Monk Mode Explained", href: "http://www.youtube.com/watch?v=T0L5eT497xg", imageSrc: "https://img.youtube.com/vi/T0L5eT497xg/hqdefault.jpg" }
    ] },
    { type: "mission", title: "MINDSET FIRST ALWAYS", subtitle: "A global community built for thinkers, by thinkers. We're rewriting the rules of how personal growth gets seen, shared, and applied in the real world.", bg: "bg-brand-dark" },
    { type: "grid", title: "", subtitle: "Every video we build starts with one question — does this serve your growth?", bg: "bg-zinc-900", items: [
      { title: "DISCOVERY", desc: "Curated insights that put real perspectives in front of you." },
      { title: "COMMUNITY", desc: "Find collaborators, mentors, and fellow thinkers who push your mindset forward." },
      { title: "VALUE", desc: "High-signal knowledge. No fluff. You keep the wisdom you earn. Always." },
      { title: "DEEP DIVES", desc: "Long-form discussions curated from our global network of experts." },
      { title: "MENTORSHIP", desc: "Paired guidance from established leaders who've walked the path." },
      { title: "TRANSFORMATION", desc: "Access to frameworks that shift your daily paradigms." }
    ]},
    { type: "steps", title: "SHOW UP. LEVEL UP.", bg: "bg-[#f5f5f5]", steps: [
      { num: "01", title: "WATCH", desc: "Press play. Your journey to clarity goes live in seconds." },
      { num: "02", title: "ABSORB", desc: "Match with concepts, frameworks, and ideas actively looking for your attention." },
      { num: "03", title: "REFLECT", desc: "Track your progress, manage your habits, and scale your mindset — all in one place." },
      { num: "04", title: "APPLY", desc: "Set your goals, manage routines, and handle challenges. Built-in life tools." },
      { num: "05", title: "CONNECT", desc: "Find your people. Joint discussions, shared goals, community building." },
      { num: "06", title: "EVOLVE", desc: "Your life changes. Your thinking should too. Flexible concepts that adapt." }
    ]},
    { type: "stats", title: "FUTURE OF THOUGHT", paragraph: "The digital world has been noisy for decades. Algorithms bury substance. We're here to change that — permanently.", bg: "bg-[#1d3557]", stats: "6.97M+ (Minds expanding globally) | #1 (In authentic conversations) | 100% (Value-driven. Every video starts with the viewer.)", columns: [
      { title: "OPEN ACCESS", desc: "No gatekeeping. If you want to learn, you belong here." },
      { title: "GLOBAL REACH", desc: "Ideas shared in 120+ countries from day one." },
      { title: "VIEWER-FIRST", desc: "You keep 100% of the value. We just provide the platform." }
    ] },
    { type: "cta", title: "READY TO BEGIN?", subtitle: "Take control of your personal journey. Join now and let's shape the future of your mindset together.", bg: "bg-black" }
  ],
  "Vaibhav Kadnar Explains": [
    { type: "hero", title: "LEARN WITHOUT LIMITS", subtitle: "We believe every curious mind deserves a platform that puts clarity first. No confusion, no jargon — just pure facts and the context that makes sense of them.", bg: "bg-[#e85d04]" },
    { type: "videos", bg: "bg-zinc-950", title: "DEEP DIVES", items: [
      { id: "7_FwtuTvCzY", title: "This Is How Brands Control You", href: "https://www.youtube.com/watch?v=7_FwtuTvCzY", imageSrc: "https://img.youtube.com/vi/7_FwtuTvCzY/hqdefault.jpg" },
      { id: "8Zi5xf1oEvE", title: "Become The Best Version Of Yourself!", href: "http://www.youtube.com/watch?v=8Zi5xf1oEvE", imageSrc: "https://img.youtube.com/vi/8Zi5xf1oEvE/hqdefault.jpg" },
      { id: "CYvZ9UyXE0M", title: "The 16 Laws Of Power That Will Change How People See You!", href: "https://www.youtube.com/watch?v=CYvZ9UyXE0M", imageSrc: "https://img.youtube.com/vi/CYvZ9UyXE0M/hqdefault.jpg" },
      { id: "SHF863KbJds", title: "Human Evolution And Introverts", href: "https://www.youtube.com/watch?v=SHF863KbJds", imageSrc: "https://img.youtube.com/vi/SHF863KbJds/hqdefault.jpg" }
    ] },
    { type: "mission", title: "CONTEXT FIRST ALWAYS", subtitle: "A global library built for learners, by researchers. We're rewriting the rules of how complex global events get researched, explained, and understood.", bg: "bg-brand-dark" },
    { type: "grid", subtitle: "Every breakdown we build starts with one question — does this explain the 'why'?", bg: "bg-zinc-900", items: [
      { title: "ANALYSIS", desc: "Human-curated breakdowns that put real facts on the table." },
      { title: "CLARITY", desc: "Find answers, context, and historical precedents that push your understanding forward." },
      { title: "TRUTH", desc: "Objective research. Transparent sourcing. Viewers get the full picture. Always." },
      { title: "CASE STUDIES", desc: "Visual and detailed showcases curated from global events." },
      { title: "LOGIC", desc: "Step-by-step guidance through topics that usually confuse the masses." },
      { title: "RESOURCES", desc: "Access funded research materials from around the world." }
    ]},
    { type: "steps", title: "SEEK. LEARN. STAND OUT.", bg: "bg-[#f5f5f5]", steps: [
      { num: "01", title: "QUESTION", desc: "Ask the hard things. Your curiosity is validated here." },
      { num: "02", title: "RESEARCH", desc: "Match with data, history, and experts actively defining the subject." },
      { num: "03", title: "UNDERSTAND", desc: "Track timelines, manage nuances, and scale your knowledge." },
      { num: "04", title: "DISCUSS", desc: "Set your theories, manage debates, handle counter-arguments." },
      { num: "05", title: "SHARE", desc: "Find the truth. Joint investigations, shared documents, open forums." },
      { num: "06", title: "ADAPT", desc: "The world changes. Your perspective should too. Flexible analysis that adapts." }
    ]},
    { type: "stats", title: "FUTURE OF CONTEXT", paragraph: "The news cycle has been broken for decades. Headlines bury the details. We're here to change that — permanently.", bg: "bg-[#1d3557]", stats: "42K+ (Active researchers) | 100+ (Complex topics decoded) | 100% (Fact-checked. Every script starts with the truth.)", columns: [
      { title: "DEEP DIVE", desc: "No surface-level takes. If you want depth, you belong here." },
      { title: "GLOBAL SCOPE", desc: "Events covered from 120+ countries from day one." },
      { title: "TRUTH-FIRST ECONOMICS", desc: "You get 100% of the facts. Zero hidden agendas." }
    ] },
    { type: "cta", title: "READY TO UNDERSTAND?", subtitle: "Take control of your intellectual journey. Join now and let's shape the future of information together.", bg: "bg-black" }
  ],
  "Vaibhav Career Lab": [
    { type: "hero", title: "SCALE WITHOUT LIMITS", subtitle: "We believe every professional deserves a platform that puts career growth first. No gatekeeping, no corporate jargon — just pure strategy and the skills to execute it.", bg: "bg-[#e85d04]" },
    { type: "videos", bg: "bg-zinc-950", title: "CAREER MASTERCLASS", items: [
      { id: "ym_E5VGm8GU", title: "The Top 1% Think on Paper. Here's How To Do It.", href: "http://www.youtube.com/watch?v=ym_E5VGm8GU", imageSrc: "https://img.youtube.com/vi/ym_E5VGm8GU/hqdefault.jpg" },
      { id: "GGikXZYov3U", title: "The Smartest Career Strategy in India", href: "http://www.youtube.com/watch?v=GGikXZYov3U", imageSrc: "https://img.youtube.com/vi/GGikXZYov3U/hqdefault.jpg" },
      { id: "y9dITKfY8nM", title: "Career Change Made Simple!", href: "http://www.youtube.com/watch?v=y9dITKfY8nM", imageSrc: "https://img.youtube.com/vi/y9dITKfY8nM/hqdefault.jpg" },
      { id: "VOL0WycPpYE", title: "Students Watch This!", href: "http://www.youtube.com/watch?v=VOL0WycPpYE", imageSrc: "https://img.youtube.com/vi/VOL0WycPpYE/hqdefault.jpg" },
      { id: "x6CCfPURTlE", title: "You Need To Understand This!", href: "http://www.youtube.com/watch?v=x6CCfPURTlE", imageSrc: "https://img.youtube.com/vi/x6CCfPURTlE/hqdefault.jpg" }
    ] },
    { type: "mission", title: "CAREER FIRST ALWAYS", subtitle: "A global network built for professionals, by industry leaders. We're rewriting the rules of how talent gets hired, promoted, and valued.", bg: "bg-brand-dark" },
    { type: "grid", subtitle: "Every module we build starts with one question — does this get you hired?", bg: "bg-zinc-900", items: [
      { title: "OPPORTUNITY", desc: "Human-curated strategies that put your resume in real hands." },
      { title: "NETWORK", desc: "Find collaborators, mentors, and fellow professionals who push your career forward." },
      { title: "SKILLS", desc: "High-income traits. Transparent roadmaps. You keep the salary you earn. Always." },
      { title: "WORKSHOPS", desc: "Virtual and physical training curated from our global network." },
      { title: "GUIDANCE", desc: "Paired mentorship from established executives who've walked the path." },
      { title: "PLACEMENTS", desc: "Access funded career accelerators around the world." }
    ]},
    { type: "steps", title: "BUILD. PIVOT. STAND OUT.", bg: "bg-[#f5f5f5]", steps: [
      { num: "01", title: "PREPARE", desc: "Build the resume. Your professional portfolio goes live in seconds." },
      { num: "02", title: "CONNECT", desc: "Match with recruiters, managers, and brands actively looking for your skills." },
      { num: "03", title: "INTERVIEW", desc: "Track applications, manage offers, and scale your corporate worth." },
      { num: "04", title: "NEGOTIATE", desc: "Set your price, manage contracts, handle equity. Built-in career tools." },
      { num: "05", title: "COLLABORATE", desc: "Find your industry. Joint ventures, split projects, shared offices." },
      { num: "06", title: "PIVOT", desc: "Your industry changes. Your skill set should too. Flexible tools that adapt." }
    ]},
    { type: "stats", title: "FUTURE OF WORK", paragraph: "The corporate ladder has been broken for decades. ATS algorithms bury talent. We're here to change that — permanently.", bg: "bg-[#1d3557]", stats: "100s (Careers launched) | Top 1% (Interview strategies) | 100% (Actionable. Every tip starts with the applicant.)", columns: [
      { title: "OPEN ACCESS", desc: "No ivy-league codes. If you put in the work, you belong here." },
      { title: "GLOBAL TALENT", desc: "Your skills seen in 120+ countries from day one." },
      { title: "TALENT-FIRST ECONOMICS", desc: "You keep 100% of your salary. The advice is here to fund your mission." }
    ] },
    { type: "cta", title: "READY TO ADVANCE?", subtitle: "Take control of your professional journey. Join now and let's shape the future of your career together.", bg: "bg-black" }
  ],
  "The Vaibhav Doctrine": [
    { type: "hero", title: "STRATEGIC INSIGHTS", subtitle: "Breaking down complex historical, economic, and brand-building trends into actionable frameworks.", bg: "bg-[#e85d04]" },
    { type: "scroll-grid", title: "REELS", bg: "bg-zinc-950", images: [
        "https://img.youtube.com/vi/pH_Rd6rdp5o/hqdefault.jpg",
        "https://img.youtube.com/vi/m6Ybd_055fM/hqdefault.jpg",
        "https://img.youtube.com/vi/u1wpwh_hEEU/hqdefault.jpg",
        "https://img.youtube.com/vi/7yycX33ZFAc/hqdefault.jpg",
        "https://img.youtube.com/vi/Jjp7RoPlMDI/hqdefault.jpg",
        "https://img.youtube.com/vi/RHo_NqSa0hs/hqdefault.jpg"
    ] },
    { type: "videos", bg: "bg-zinc-950", title: "DEEP DIVES", items: [
      { id: "BDGGkT8YB0w", title: "Jobs That Won’t Exist in 2030!", href: "http://www.youtube.com/watch?v=BDGGkT8YB0w", imageSrc: "https://img.youtube.com/vi/BDGGkT8YB0w/hqdefault.jpg" },
      { id: "vIo2nfiqrsc", title: "Why Every Superpower Falls | Is America Next?", href: "http://www.youtube.com/watch?v=vIo2nfiqrsc", imageSrc: "https://img.youtube.com/vi/vIo2nfiqrsc/hqdefault.jpg" }
    ] }
  ]
};

export default function ChannelScreens({ channelName, scrollContainerRef }: { channelName: string, scrollContainerRef?: React.RefObject<HTMLElement> }) {
  const screens = (data as any)[channelName];
  if (!screens) return (
    <div className="py-24 text-center max-w-2xl mx-auto border border-brand-beige/20 rounded-2xl bg-brand-dark overflow-hidden my-12 backdrop-blur-sm p-12">
       <h3 className="text-3xl font-mango text-brand-beige uppercase mb-4">MORE CONTENT COMING SOON</h3>
       <p className="text-brand-beige/50">Detailed insights and exclusive content for this channel are currently in production.</p>
    </div>
  );

  if (channelName === "The Vaibhav Doctrine") {
    return <VaibhavDoctrineSection screens={screens} scrollContainerRef={scrollContainerRef} />;
  }

  return (
    <div className="w-full">
      <FlowArt>
        {screens.map((screen: any, i: number) => {
          const isWhiteText = screen.bg !== "bg-[#f5f5f5]";
          const textColor = isWhiteText ? "text-white" : "text-black";

          return (
            <FlowSection key={i} className={`${screen.bg} ${textColor}`}>
              <div className={`w-full h-full p-6 md:p-16 xl:p-24 flex flex-col justify-center`}>
                
                {screen.type === "hero" && (
                  <div className="max-w-4xl">
                    <h2 className="text-5xl md:text-8xl lg:text-[7rem] font-mango uppercase mb-8 leading-[0.9]">{screen.title}</h2>
                    <p className="text-2xl md:text-4xl leading-snug font-medium opacity-90">{screen.subtitle}</p>
                  </div>
                )}
                
                {screen.type === "scroll-grid" && (
                  <div className="w-full flex-1 flex flex-col items-center justify-center max-w-7xl mx-auto py-12">
                    <h2 className="text-4xl md:text-6xl font-mango uppercase mb-2 text-center text-white/50 tracking-wide">{screen.title}</h2>
                    <ScrollTiltedGrid images={screen.images} scrollContainerRef={scrollContainerRef} />
                  </div>
                )}
                
                {screen.type === "videos" && (
                  <div className="w-full flex-1 flex flex-col items-center justify-center max-w-5xl mx-auto py-12">
                    <h2 className="text-4xl md:text-6xl font-mango uppercase mb-12 md:mb-16 text-center text-white/50 tracking-wide">{screen.title}</h2>
                    <CardStack
                      items={screen.items}
                      initialIndex={0}
                      autoAdvance
                      intervalMs={3500}
                      pauseOnHover
                      showDots
                      className="mx-auto"
                    />
                  </div>
                )}
                
                {screen.type === "mission" && (
                  <div className="max-w-4xl mx-auto text-center w-full">
                    <h2 className="text-4xl md:text-7xl lg:text-[6rem] font-mango uppercase mb-8 text-brand-yellow leading-none">{screen.title}</h2>
                    <p className="text-xl md:text-3xl leading-relaxed opacity-80">{screen.subtitle}</p>
                  </div>
                )}
                
                {screen.type === "grid" && (
                  <div className="max-w-6xl mx-auto w-full flex flex-col h-full justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                      {screen.items.map((item: any, idx: number) => (
                        <div key={idx} className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                          <h4 className="text-xl font-bold mb-4 text-brand-yellow uppercase tracking-wider">{item.title}</h4>
                          <p className="opacity-70 text-lg leading-relaxed">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                    {screen.subtitle && (
                      <div className="border-t border-white/10 pt-10 mt-12 text-center">
                        <p className="text-2xl md:text-3xl font-serif italic text-white/60">{screen.subtitle}</p>
                      </div>
                    )}
                  </div>
                )}
                
                {screen.type === "steps" && (
                  <div className="max-w-5xl mx-auto w-full flex flex-col justify-center">
                     <h2 className="text-5xl md:text-7xl font-mango uppercase mb-16 md:mb-24 text-center text-brand-red">{screen.title}</h2>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                        {screen.steps.map((step: any, idx: number) => (
                          <div key={idx} className="flex gap-6 items-start group">
                             <span className="text-4xl md:text-6xl font-mango text-black/20 group-hover:text-brand-red transition-colors block mt-[-8px]">{step.num}</span>
                             <div>
                               <h4 className="text-2xl font-bold mb-3 uppercase tracking-wide">{step.title}</h4>
                               <p className="text-black/60 text-lg leading-relaxed">{step.desc}</p>
                             </div>
                          </div>
                        ))}
                     </div>
                  </div>
                )}
                
                {screen.type === "stats" && (
                  <div className="max-w-6xl mx-auto w-full flex flex-col h-full justify-center">
                    <div className="text-center mb-16 md:mb-24">
                       <h2 className="text-5xl md:text-8xl font-mango uppercase mb-8 text-[#a8dadc]">{screen.title}</h2>
                       <p className="text-2xl md:text-3xl font-medium max-w-4xl mx-auto mb-12 leading-relaxed opacity-90">{screen.paragraph}</p>
                       
                       <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base font-bold tracking-widest text-[#a8dadc]">
                          {screen.stats.split(' | ').map((stat: string, idx: number) => (
                            <div key={idx} className="px-6 py-3 border border-[#a8dadc]/30 rounded-full bg-white/5 flex items-center backdrop-blur-sm">
                              {stat}
                            </div>
                          ))}
                       </div>
                    </div>
  
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-white/20 pt-16">
                       {screen.columns.map((col: any, idx: number) => (
                         <div key={idx} className="text-center">
                           <h4 className="text-xl font-bold mb-4 text-[#f1faee] uppercase tracking-wider">{col.title}</h4>
                           <p className="text-white/70 text-lg leading-relaxed">{col.desc}</p>
                         </div>
                       ))}
                    </div>
                  </div>
                )}
                
                {screen.type === "cta" && (
                  <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center min-h-[50vh]">
                    <h2 className="text-6xl md:text-[8rem] font-mango uppercase mb-8 text-brand-red leading-none">{screen.title}</h2>
                    <p className="text-2xl md:text-4xl leading-snug font-medium opacity-80 mb-16">{screen.subtitle}</p>
                    <button className="bg-brand-red text-white px-12 py-6 rounded-full text-xl font-bold tracking-widest uppercase hover:scale-105 transition-all shadow-[0_0_50px_rgba(207,17,52,0.4)] hover:shadow-[0_0_80px_rgba(207,17,52,0.6)]">
                      Join The Movement
                    </button>
                  </div>
                )}
  
              </div>
            </FlowSection>
          );
        })}
      </FlowArt>
    </div>
  );
}

function VaibhavDoctrineSection({ screens, scrollContainerRef }: { screens: any, scrollContainerRef?: React.RefObject<HTMLElement> }) {
  const leftScrollRef = useRef<HTMLDivElement>(null);
  
  return (
    <div className="w-full bg-zinc-950 min-h-screen text-white">
      <div className="w-full relative px-6 md:px-12 flex flex-col items-start min-h-[100vh]">
        <div className="flex flex-col md:flex-row w-full gap-8 relative items-start h-auto md:h-[100vh]">
          
          {/* Left Column - Independently scrollable */}
          <div 
            ref={leftScrollRef} 
            className="w-full md:w-1/2 relative h-[80vh] md:h-full overflow-y-auto no-scrollbar scroll-smooth overscroll-contain"
          >
            <ScrollTiltedGrid 
              images={screens[1].images} 
              scrollContainerRef={leftScrollRef} 
              loop={true} 
              className="-mt-[5vh]" 
            />
          </div>

          {/* Right Column - Sticky perspective view */}
          <div className="w-full md:w-1/2 h-full flex flex-col items-center justify-center pointer-events-auto sticky top-0 py-12 md:py-0">
            <Perspective maxRotateX={14} maxRotateY={30} smoothing={0.12}>
              <article className="text-lg md:text-xl font-medium leading-[1.75] text-white/70 pointer-events-none">
                <p className="mb-6 pointer-events-auto">
                  <Highlight color="red">Three hidden systems</Highlight>, each with one agenda. 
                  Strip any of them out and the whole global illusion collapses back into a one-dimensional narrative.
                </p>
                <p className="mb-6 pointer-events-auto">
                  <Highlight color="purple">
                    The whole framework rides on shifting perspectives.
                  </Highlight>{" "}
                  The macro layer defines the geopolitical space, the market layer preserves it, and only the 
                  core strategy actually pivots. Three power structures standing on each other's shoulders.
                </p>
                <p className="pointer-events-auto">
                  <Highlight color="green">
                    The doctrine tilts toward wherever the attention goes.
                  </Highlight>{" "}
                  Look closer and the real agenda leans in; pull away and it settles into mainstream noise. 
                  As events turn, the facts drift forward — wealth moving one direction and influence the other, 
                  revealing the true depth of the system.
                </p>
              </article>
            </Perspective>
          </div>
        </div>
      </div>
      
      <div className="w-full flex flex-col items-center justify-center max-w-5xl mx-auto pb-32 pt-24 border-t border-white/10">
        <h2 className="text-4xl md:text-6xl font-mango uppercase mb-12 md:mb-16 text-center text-white/50 tracking-wide">
          {screens[2].title}
        </h2>
        <CardStack
          items={screens[2].items}
          initialIndex={0}
          autoAdvance
          intervalMs={3500}
          pauseOnHover
          showDots
          className="mx-auto"
        />
      </div>
    </div>
  );
}
