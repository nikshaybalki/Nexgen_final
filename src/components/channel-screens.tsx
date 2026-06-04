"use client";

import React, { useRef } from 'react';
import { Youtube, Instagram, Compass, Eye, Brain, SquareArrowOutUpRight } from 'lucide-react';
import FlowArt, { FlowSection } from './flow-art';
import { CardStack } from './card-stack';
import { ScrollTiltedGrid } from './scroll-tilted-grid';

const data = {
  "Vaibhav Kadnar": [
    {
      type: "channel-hero",
      bg: "bg-black",
      platform: "YOUTUBE",
      handle: "@VAIBHAVKADNAR",
      firstName: "VAIBHAV",
      lastName: "KADNAR",
      stats: [
        { label: "SUBSCRIBERS", value: "6.97M" },
        { label: "VIDEOS", value: "1K+" },
        { label: "TOTAL VIEWS", value: "200M+" }
      ],
      description: "India's mentor for Gen Z. Trusted by 7M+ people for real talk on education, career, money, and the way the world actually works — in Hinglish, without lectures.",
      tags: ["EDUCATION", "CAREER", "FINANCE", "PSYCHOLOGY", "GEOPOLITICS", "MINDSET"],
      logo: "/Vaibhav Kadnar.jpg",
      url: "https://www.youtube.com/@VaibhavKadnar"
    },
    { type: "videos", bg: "bg-zinc-950", title: "FEATURED VIDEOS", items: [
      { id: "YEL9posxDS4", title: "Psychology of Money in 16 Minutes", href: "http://www.youtube.com/watch?v=YEL9posxDS4", imageSrc: "https://img.youtube.com/vi/YEL9posxDS4/hqdefault.jpg" },
      { id: "SfULw3T8OWg", title: "Master the Art of Seduction By Robert Greene", href: "http://www.youtube.com/watch?v=SfULw3T8OWg", imageSrc: "https://img.youtube.com/vi/SfULw3T8OWg/hqdefault.jpg" },
      { id: "42lSXeJalgg", title: "48 Laws Of Power PART 2", href: "http://www.youtube.com/watch?v=42lSXeJalgg", imageSrc: "https://img.youtube.com/vi/42lSXeJalgg/hqdefault.jpg" },
      { id: "-TK0dCiE0y4", title: "Make Anyone Like You In 20 Minutes | Psychology Of Seduction", href: "http://www.youtube.com/watch?v=-TK0dCiE0y4", imageSrc: "https://img.youtube.com/vi/-TK0dCiE0y4/hqdefault.jpg" },
      { id: "T0L5eT497xg", title: "What is Monk Mode? How To Get Into Monk Mode Explained", href: "http://www.youtube.com/watch?v=T0L5eT497xg", imageSrc: "https://img.youtube.com/vi/T0L5eT497xg/hqdefault.jpg" }
    ] },
    {
      type: "channel-impact",
      bg: "bg-black",
      sectionTitle: "THE IMPACT",
      title: "HOW THIS CHANNEL ACTUALLY HELPS.",
      subtitle: "This isn't entertainment. Every video is designed to change how a viewer thinks, decides, or acts. Here's what people consistently say they walk away with.",
      items: [
        {
          num: "01",
          icon: "compass",
          title: "CLARITY ON CAREER DIRECTION",
          description: "Most 18–25 year olds don't know what they want or how to get it. This channel breaks down real career paths — not just popular ones — and helps viewers make decisions with actual data behind them instead of parental pressure or peer pressure.",
          quote: "He's the only one who explained what a career in finance actually looks like in India."
        },
        {
          num: "02",
          icon: "rupee",
          title: "FINANCIAL LITERACY FROM ZERO",
          description: "The majority of Indian students graduate with zero knowledge of money management, investing, or wealth building. This channel simplifies personal finance — SIPs, credit, budgeting, freelancing income — so that viewers start making smart money moves years earlier than their peers.",
          quote: "Started my first SIP at 19 because of his video. No one else explained it this simply."
        },
        {
          num: "03",
          icon: "eye",
          title: "A SMARTER VIEW OF THE WORLD",
          description: "Geopolitics, global economics, why wars happen, why industries rise and fall — explained in Hinglish with enough depth to actually make sense. Viewers come away understanding news they previously ignored, and thinking more critically about India's place in the world.",
          quote: "I finally understand why Russia-Ukraine affects petrol prices in India."
        },
        {
          num: "04",
          icon: "brain",
          title: "EMOTIONALLY INTELLIGENT THINKING",
          description: "Book summaries, psychology frameworks, and mindset content that helps viewers manage anxiety, build discipline, understand people, and stop self-sabotaging. Not motivational fluff — actual tools from books and research, explained in a way that makes them usable the next day.",
          quote: "His Atomic Habits video changed how I built my morning routine. Stuck with it 8 months."
        }
      ]
    },
    { type: "cta", title: "READY TO BEGIN?", subtitle: "Take control of your personal journey. Join now and let's shape the future of your mindset together.", bg: "bg-black", url: "https://www.youtube.com/@VaibhavKadnar" }
  ],
  "vaibhavkadnarofficial": [
    {
      type: "channel-hero",
      bg: "bg-black",
      platform: "INSTAGRAM",
      handle: "@vaibhavkadnarofficial",
      firstName: "VAIBHAV KADNAR",
      lastName: "OFFICIAL",
      stats: [
        { label: "FOLLOWERS", value: "706K" },
        { label: "REELS", value: "400+" },
        { label: "TOTAL VIEWS", value: "50M+" }
      ],
      description: "Real, actionable psychology and social dynamics. Direct, high-impact videos helping Gen Z decode human behaviour and build confidence.",
      tags: ["PSYCHOLOGY", "SOCIAL DYNAMICS", "CONFIDENCE", "HABITS", "MINDSET"],
      logo: "/vaibhavkadnarofficial.jpg",
      url: "https://www.instagram.com/vaibhavkadnarofficial"
    },
    { type: "videos", bg: "bg-zinc-950", title: "FEATURED REELS", items: [
      { id: "1", title: "Stop Being a People Pleaser | 3 Actionable Steps", href: "https://www.instagram.com/vaibhavkadnarofficial", imageSrc: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?q=80&w=1200&auto=format&fit=crop" },
      { id: "2", title: "The Rule of 2 Minutes to Destroy Procrastination", href: "https://www.instagram.com/vaibhavkadnarofficial", imageSrc: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop" },
      { id: "3", title: "How to Double Your Confidence Before a Meeting", href: "https://www.instagram.com/vaibhavkadnarofficial", imageSrc: "https://images.unsplash.com/photo-1552581230-c0137413876e?q=80&w=1200&auto=format&fit=crop" }
    ] },
    {
      type: "channel-impact",
      bg: "bg-black",
      sectionTitle: "THE IMPACT",
      title: "HOW THIS PROFILE ACTUALLY HELPS.",
      subtitle: "Daily bites of high-value social psychology. Designed to shift your mental frames, build authority, and help you project confidence.",
      items: [
        {
          num: "01",
          icon: "brain",
          title: "PSYCHOLOGY OF SOCIAL DYNAMICS",
          description: "Understanding human behavior, social cues, and confidence building. Actionable rules to navigate social pressure, charm people, and speak assertively.",
          quote: "Learnt how to stop being a people-pleaser in 3 minutes."
        },
        {
          num: "02",
          icon: "compass",
          title: "HIGH-IMPACT HABITS",
          description: "Creating systems that force consistency. Practical breakdowns of how to structure your morning, manage screentime, and build laser-like focus.",
          quote: "Replaced my late-night scrolling with reading using his checklist."
        },
        {
          num: "03",
          icon: "eye",
          title: "COMMUNICATION MASTERY",
          description: "Learning how to articulate thoughts clearly, speak with authority, and command a room. Mastering tone, body language, and storytelling.",
          quote: "Helped me clear my first job interview with confidence."
        },
        {
          num: "04",
          icon: "rupee",
          title: "FINANCIAL MINDSET",
          description: "Shifting how you think about earning, saving, and wealth creation. Understanding leverage, skill-building, and business thinking early in life.",
          quote: "Understood why earning a high-income skill beats chasing grades."
        }
      ]
    },
    { type: "cta", title: "READY TO TRANSFORM?", subtitle: "Take control of your mindset. Follow now and level up your daily habits.", bg: "bg-black", url: "https://www.instagram.com/vaibhavkadnarofficial" }
  ],
  "Vaibhav Kadnar Explains": [
    {
      type: "channel-hero",
      bg: "bg-black",
      platform: "YOUTUBE",
      handle: "@VAIBHAVKADNAR.EXPLAINS",
      firstName: "VAIBHAV KADNAR",
      lastName: "EXPLAINS",
      stats: [
        { label: "SUBSCRIBERS", value: "42.1K" },
        { label: "VIDEOS", value: "80+" },
        { label: "TOTAL VIEWS", value: "2M+" }
      ],
      description: "Psychology decoded. Human behaviour, influence, confidence, dark psychology, and the hidden mental models behind power and success.",
      tags: ["PSYCHOLOGY", "HUMAN BEHAVIOUR", "DARK PSYCHOLOGY", "INFLUENCE", "MINDSET"],
      logo: "/Vaibhav Kadnar Explains.jpg",
      url: "https://www.youtube.com/@VaibhavKadnarExplains"
    },
    { type: "videos", bg: "bg-zinc-950", title: "DEEP DIVES", items: [
      { id: "7_FwtuTvCzY", title: "This Is How Brands Control You", href: "https://www.youtube.com/watch?v=7_FwtuTvCzY", imageSrc: "https://img.youtube.com/vi/7_FwtuTvCzY/hqdefault.jpg" },
      { id: "8Zi5xf1oEvE", title: "Become The Best Version Of Yourself!", href: "http://www.youtube.com/watch?v=8Zi5xf1oEvE", imageSrc: "https://img.youtube.com/vi/8Zi5xf1oEvE/hqdefault.jpg" },
      { id: "CYvZ9UyXE0M", title: "The 16 Laws Of Power That Will Change How People See You!", href: "https://www.youtube.com/watch?v=CYvZ9UyXE0M", imageSrc: "https://img.youtube.com/vi/CYvZ9UyXE0M/hqdefault.jpg" },
      { id: "SHF863KbJds", title: "Human Evolution And Introverts", href: "https://www.youtube.com/watch?v=SHF863KbJds", imageSrc: "https://img.youtube.com/vi/SHF863KbJds/hqdefault.jpg" }
    ] },
    {
      type: "channel-impact",
      bg: "bg-black",
      sectionTitle: "THE IMPACT",
      title: "HOW THIS CHANNEL ACTUALLY HELPS.",
      subtitle: "Unlocking dark psychology, consumer manipulation, and power laws. Breaking down dense concepts into clear, actionable frameworks.",
      items: [
        {
          num: "01",
          icon: "eye",
          title: "DECODING MODERN MONOPOLIES",
          description: "Breaking down how the world's biggest corporations hook your attention, control markets, and influence your daily decisions behind the scenes.",
          quote: "Now I look at retail stores and food brands completely differently."
        },
        {
          num: "02",
          icon: "brain",
          title: "HUMAN PSYCHOLOGY LAWS",
          description: "Analyzing psychological frameworks like the Laws of Power, persuasion, and human evolution to explain why people behave the way they do.",
          quote: "Greene's books are hard to read, but his visual case studies make it click."
        },
        {
          num: "03",
          icon: "compass",
          title: "ACTIONABLE LIFE BLUEPRINTS",
          description: "Converting dense books and scientific research into clear, 15-minute frameworks that you can apply to study, work, and personal growth.",
          quote: "No fluff, no generic motivation. Just pure logic and systems."
        },
        {
          num: "04",
          icon: "rupee",
          title: "CRITICAL LOGIC SYSTEMS",
          description: "Teaching viewers how to detect bias, identify propaganda in the media, and analyze global events with objectivity and independent thought.",
          quote: "Helped me realize how algorithms manipulate what I believe."
        }
      ]
    },
    { type: "cta", title: "READY TO UNDERSTAND?", subtitle: "Take control of your intellectual journey. Join now and let's shape the future of information together.", bg: "bg-black", url: "https://www.youtube.com/@VaibhavKadnarExplains" }
  ],
  "vaibhavkadnar.talks": [
    {
      type: "channel-hero",
      bg: "bg-black",
      platform: "INSTAGRAM",
      handle: "@vaibhavkadnar.talks",
      firstName: "VAIBHAV KADNAR",
      lastName: "TALKS",
      stats: [
        { label: "FOLLOWERS", value: "255K" },
        { label: "REELS", value: "150+" },
        { label: "TOTAL VIEWS", value: "10M+" }
      ],
      description: "Deep conversations and key insights on modern careers, high-income skills, and mental frameworks for the next generation of builders.",
      tags: ["CAREERS", "SKILLS", "FINANCE", "NETWORKING", "MINDSET"],
      logo: "/vaibhavkadnar.talks.jpg",
      url: "https://www.instagram.com/vaibhavkadnar.talks"
    },
    { type: "videos", bg: "bg-zinc-950", title: "FEATURED INSIGHTS", items: [
      { id: "1", title: "Why College Degrees are Losing Value in India", href: "https://www.instagram.com/vaibhavkadnar.talks", imageSrc: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop" },
      { id: "2", title: "How to Build a High-Income Digital Skill", href: "https://www.instagram.com/vaibhavkadnar.talks", imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop" },
      { id: "3", title: "Unfiltered Career Advice for Gen Z", href: "https://www.instagram.com/vaibhavkadnar.talks", imageSrc: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop" }
    ] },
    {
      type: "channel-impact",
      bg: "bg-black",
      sectionTitle: "THE IMPACT",
      title: "HOW THIS PROFILE ACTUALLY HELPS.",
      subtitle: "Unlocking modern career insights, networking strategies, and high-income skill building to help you secure real opportunities.",
      items: [
        {
          num: "01",
          icon: "brain",
          title: "DEEP DISCUSSIONS",
          description: "Short podcasts and talks with founders, industry experts, and creators discussing what it takes to build a modern career in India.",
          quote: "These talks are better than most 2-hour college lectures."
        },
        {
          num: "02",
          icon: "rupee",
          title: "HIGH-INCOME SKILLING",
          description: "Focusing on skills that pay — copywriting, design, sales, digital products, and coding — rather than traditional textbook theory.",
          quote: "Decided to start freelancing in design after watching this reel."
        },
        {
          num: "03",
          icon: "compass",
          title: "UNFILTERED PERSPECTIVES",
          description: "Honest, hard-hitting advice on relationships, career stagnation, mental traps, and breaking out of middle-class mental blocks.",
          quote: "Uncensored truth that Gen Z needs to hear instead of sweet talk."
        },
        {
          num: "04",
          icon: "eye",
          title: "NETWORKING GUIDES",
          description: "Practical blueprints on cold-emailing, finding high-quality mentors on LinkedIn, and positioning yourself in front of active recruiters.",
          quote: "Got a remote gig by following the exact cold DM framework he shared."
        }
      ]
    },
    { type: "cta", title: "READY TO LISTEN?", subtitle: "Expand your career horizons. Follow now for daily unfiltered lessons.", bg: "bg-black", url: "https://www.instagram.com/vaibhavkadnar.talks" }
  ],
  "The Vaibhav Doctrine": [
    {
      type: "channel-hero",
      bg: "bg-black",
      platform: "YOUTUBE",
      handle: "@THEVAIBHAVDOCTRINE",
      firstName: "THE VAIBHAV",
      lastName: "DOCTRINE",
      stats: [
        { label: "SUBSCRIBERS", value: "3.5K" },
        { label: "VIDEOS", value: "20+" },
        { label: "TOTAL VIEWS", value: "100K+" }
      ],
      description: "Geopolitics, global power, and international strategy. Decoding wars, economies, and the forces that quietly shape nations and your future.",
      tags: ["GEOPOLITICS", "ECONOMICS", "GLOBAL POWER", "HISTORY", "STRATEGY"],
      logo: "/The Vaibhav Doctrine.jpg",
      url: "https://www.youtube.com/@TheVaibhavDoctrine"
    },
    { type: "videos", bg: "bg-zinc-950", title: "DEEP DIVES", items: [
      { id: "BDGGkT8YB0w", title: "Jobs That Won’t Exist in 2030!", href: "http://www.youtube.com/watch?v=BDGGkT8YB0w", imageSrc: "https://img.youtube.com/vi/BDGGkT8YB0w/hqdefault.jpg" },
      { id: "vIo2nfiqrsc", title: "Why Every Superpower Falls | Is America Next?", href: "http://www.youtube.com/watch?v=vIo2nfiqrsc", imageSrc: "https://img.youtube.com/vi/vIo2nfiqrsc/hqdefault.jpg" }
    ] },
    {
      type: "channel-impact",
      bg: "bg-black",
      sectionTitle: "THE IMPACT",
      title: "HOW THIS CHANNEL ACTUALLY HELPS.",
      subtitle: "Unlocking global logistics, macroeconomic systems, and historical cycles to give you an objective view of global power changes.",
      items: [
        {
          num: "01",
          icon: "eye",
          title: "GEOPOLITICAL DECODING",
          description: "Analyzing borders, global wars, trade routes, and international treaties in a simplified narrative that connects history to your future.",
          quote: "Finally understood how the US Dollar controls global trade."
        },
        {
          num: "02",
          icon: "rupee",
          title: "ECONOMIC FORECASTING",
          description: "Tracking inflation, market cycles, debt crises, and how shifting wealth distribution impacts everyday jobs and cost of living in India.",
          quote: "Made me realize why holding assets is better than saving cash."
        },
        {
          num: "03",
          icon: "compass",
          title: "MACRO SYSTEMS ANALYSIS",
          description: "Looking at the hidden networks that shape our world — energy logistics, silicon supply chains, and technological decoupling between powers.",
          quote: "Excellent breakdown of the semiconductor cold war."
        },
        {
          num: "04",
          icon: "brain",
          title: "HISTORICAL CYCLES",
          description: "Connecting patterns of past civilizations to current geopolitical movements, helping viewers anticipate global trends over the next decade.",
          quote: "Like Ray Dalio's frameworks, but customized for Indian context."
        }
      ]
    },
    { type: "cta", title: "READY TO ANALYZE?", subtitle: "Get ahead of global developments. Subscribe now and join the doctrine.", bg: "bg-black", url: "https://www.youtube.com/@TheVaibhavDoctrine" }
  ],
  "Vaibhav Career Lab": [
    {
      type: "channel-hero",
      bg: "bg-black",
      platform: "YOUTUBE",
      handle: "@VAIBHAVCAREERLAB",
      firstName: "VAIBHAV",
      lastName: "CAREER LAB",
      stats: [
        { label: "SUBSCRIBERS", value: "2.92K" },
        { label: "VIDEOS", value: "30+" },
        { label: "TOTAL VIEWS", value: "100K+" }
      ],
      description: "Unlocking career excellence and job strategies. Practical guides on resume building, networking, and high-income skills in the digital economy.",
      tags: ["CAREER DEVELOPMENT", "JOB SEARCH", "RESUME", "SALARY NEGOTIATION", "SKILLS"],
      logo: "/Vaibhav Career Lab.jpg",
      url: "https://www.youtube.com/@VaibhavCareerLab"
    },
    { type: "videos", bg: "bg-zinc-950", title: "CAREER MASTERCLASS", items: [
      { id: "ym_E5VGm8GU", title: "The Top 1% Think on Paper. Here's How To Do It.", href: "http://www.youtube.com/watch?v=ym_E5VGm8GU", imageSrc: "https://img.youtube.com/vi/ym_E5VGm8GU/hqdefault.jpg" },
      { id: "GGikXZYov3U", title: "The Smartest Career Strategy in India", href: "http://www.youtube.com/watch?v=GGikXZYov3U", imageSrc: "https://img.youtube.com/vi/GGikXZYov3U/hqdefault.jpg" },
      { id: "y9dITKfY8nM", title: "Career Change Made Simple!", href: "http://www.youtube.com/watch?v=y9dITKfY8nM", imageSrc: "https://img.youtube.com/vi/y9dITKfY8nM/hqdefault.jpg" },
      { id: "VOL0WycPpYE", title: "Students Watch This!", href: "http://www.youtube.com/watch?v=VOL0WycPpYE", imageSrc: "https://img.youtube.com/vi/VOL0WycPpYE/hqdefault.jpg" },
      { id: "x6CCfPURTlE", title: "You Need To Understand This!", href: "http://www.youtube.com/watch?v=x6CCfPURTlE", imageSrc: "https://img.youtube.com/vi/x6CCfPURTlE/hqdefault.jpg" }
    ] },
    {
      type: "channel-impact",
      bg: "bg-black",
      sectionTitle: "THE IMPACT",
      title: "HOW THIS CHANNEL ACTUALLY HELPS.",
      subtitle: "Unlocking corporate blueprints, negotiation tactics, and high-signal resumes to accelerate your career trajectory.",
      items: [
        {
          num: "01",
          icon: "compass",
          title: "RESUME & PORTFOLIO BUILDERS",
          description: "Creating high-signal resumes, git repositories, and project portfolios that beat ATS filters and grab the attention of recruiters.",
          quote: "Rewrote my resume using his template and got 3 calls in a week."
        },
        {
          num: "02",
          icon: "eye",
          title: "JOB HUNTING TACTICS",
          description: "Going beyond job boards. How to use cold mailing, value-propositions, and Twitter/LinkedIn to reach CEOs and founders directly.",
          quote: "Chased recruiters for months, then got a job by building a project for the founder."
        },
        {
          num: "03",
          icon: "rupee",
          title: "SALARY NEGOTIATION",
          description: "Understanding your market value, handling HR negotiation tricks, and securing higher starting compensation Packages.",
          quote: "Negotiated my first package from 6 LPA to 8.5 LPA using his script."
        },
        {
          num: "04",
          icon: "brain",
          title: "FUTURE-PROOF SKILLS",
          description: "Guiding students and graduates toward fields that are resistant to AI automation — engineering, marketing, operations, and sales.",
          quote: "Helped me pivot from general coding to specialized system design."
        }
      ]
    },
    { type: "cta", title: "READY TO ADVANCE?", subtitle: "Take control of your professional journey. Join now and let's shape the future of your career together.", bg: "bg-black", url: "https://www.youtube.com/@VaibhavCareerLab" }
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

  const isInstagram = screens[0]?.platform === "INSTAGRAM";



  return (
    <div className="w-full">
      <FlowArt>
        {screens.map((screen: any, i: number) => {
          const isWhiteText = screen.bg !== "bg-[#f5f5f5]";
          const textColor = isWhiteText ? "text-white" : "text-black";

          return (
            <FlowSection key={i} className={`${screen.bg} ${textColor}`}>
              <div className={`w-full h-full p-6 md:p-16 xl:p-24 flex flex-col justify-center`}>
                
                {screen.type === "channel-hero" && (
                  <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 py-8">
                     {/* Left Side: Stats and Info */}
                     <div className="w-full lg:w-3/5 flex flex-col items-start text-left">
                        <span className={`font-bold text-xs tracking-[0.25em] uppercase mb-4 ${
                          isInstagram ? "text-pink-500" : "text-brand-red"
                        }`}>
                           CHANNEL • {screen.platform} • {screen.handle}
                        </span>
                        
                        <h2 className="font-mango text-7xl sm:text-8xl lg:text-[7.5rem] leading-[0.88] tracking-[0.04em] text-white uppercase mb-8 flex flex-col">
                           <span>{screen.firstName}</span>
                           <span className={isInstagram ? "text-pink-500" : "text-brand-red"}>{screen.lastName}</span>
                        </h2>

                        {/* Stats Row */}
                        <div className="flex flex-wrap gap-8 sm:gap-16 mb-8">
                           {screen.stats.map((stat: any, idx: number) => (
                             <div key={idx} className="flex flex-col">
                               <span className="text-4xl md:text-5xl font-mango font-bold text-white leading-none mb-2">
                                  {stat.value}
                               </span>
                               <span className="text-[10px] font-bold text-brand-beige/40 tracking-widest uppercase">
                                  {stat.label}
                               </span>
                             </div>
                           ))}
                        </div>

                        {/* Description */}
                        <p className="text-brand-beige/70 text-base md:text-lg leading-relaxed mb-8 max-w-xl font-medium">
                           {screen.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2.5 mb-10 max-w-xl">
                           {screen.tags.map((tag: string) => (
                             <span 
                               key={tag} 
                               className={`px-3.5 py-1.5 border rounded-md text-[10px] font-bold tracking-wider text-brand-beige/70 uppercase ${
                                 isInstagram 
                                   ? "border-pink-500/20 bg-pink-500/5 text-pink-400" 
                                   : "border-brand-red/20 bg-brand-red/5 text-brand-red"
                               }`}
                             >
                               {tag}
                             </span>
                           ))}
                        </div>

                        {/* Visit Channel Button */}
                        <a 
                          href={screen.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-3 text-white px-8 py-4 rounded-xl font-bold tracking-widest text-xs uppercase transition-all duration-300 shadow-lg cursor-pointer hover:scale-105 ${
                            isInstagram 
                              ? "bg-pink-600 hover:bg-pink-600/90 shadow-pink-600/10" 
                              : "bg-brand-red hover:bg-brand-red/90 shadow-brand-red/10"
                          }`}
                        >
                          {isInstagram ? (
                            <Instagram className="w-4 h-4" />
                          ) : (
                            <Youtube className="w-4 h-4 fill-white" />
                          )}
                          {isInstagram ? "VISIT INSTAGRAM" : "VISIT CHANNEL"}
                        </a>
                     </div>

                     {/* Right Side: Channel Logo Circle with Watermark */}
                     <div className="w-full lg:w-2/5 flex items-center justify-center relative">
                        {/* Faint handle watermark background */}
                        <div className="absolute font-mango text-[5rem] sm:text-[6rem] uppercase tracking-wider text-brand-beige/[0.02] select-none pointer-events-none -z-10 rotate-90 lg:rotate-0">
                           {screen.handle}
                        </div>
                        
                        {/* Large glowing circle with logo */}
                        <div className="relative group">
                          {/* Outer glowing ring */}
                          <div className={`absolute -inset-2 rounded-full blur-xl opacity-80 transition-all duration-700 pointer-events-none ${
                             isInstagram 
                               ? "bg-pink-500/20 group-hover:bg-pink-500/35" 
                               : "bg-brand-red/20 group-hover:bg-brand-red/35"
                           }`} />
                          
                          {/* Circle wrapper */}
                          <div className={`w-60 h-60 sm:w-72 sm:h-72 rounded-full overflow-hidden border-[6px] bg-brand-dark flex items-center justify-center relative shadow-2xl transition-transform duration-700 group-hover:scale-103 ${
                             isInstagram ? "border-pink-500/80" : "border-brand-red/80"
                           }`}>
                             <img 
                               src={screen.logo} 
                               alt={screen.name || "Channel Logo"} 
                               className="w-full h-full object-cover"
                             />
                             <div className={`absolute inset-0 group-hover:bg-transparent transition-colors duration-500 ${
                                isInstagram ? "bg-pink-500/10" : "bg-brand-red/10"
                              }`} />
                          </div>
                        </div>
                     </div>
                  </div>
                )}

                {screen.type === "channel-impact" && (
                  <div className="w-full max-w-6xl mx-auto py-12 px-4 sm:px-6 flex flex-col items-start text-left">
                     {/* Section Header */}
                     <span className={`font-bold text-xs tracking-[0.25em] uppercase mb-4 ${
                       isInstagram ? "text-pink-500" : "text-brand-red"
                     }`}>
                        {screen.sectionTitle}
                     </span>
                     
                     <h2 className="font-mango text-5xl sm:text-7xl md:text-8xl leading-[0.95] uppercase mb-6 text-white">
                        {screen.title.split('ACTUALLY HELPS.')[0]}
                        <span className={`block md:inline lg:block ${
                          isInstagram ? "text-pink-500" : "text-brand-red"
                        }`}>ACTUALLY HELPS.</span>
                     </h2>

                     {/* Divider Line */}
                     <div className={`w-12 h-[3px] mb-6 ${
                       isInstagram ? "bg-pink-500" : "bg-brand-red"
                     }`} />

                     {/* Subheading Description */}
                     <p className="text-brand-beige/70 text-sm sm:text-base md:text-lg leading-relaxed mb-16 max-w-2xl font-medium">
                        {screen.subtitle}
                     </p>

                     {/* 2x2 Responsive Grid */}
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 w-full">
                        {screen.items.map((item: any, idx: number) => {
                          // Select icon dynamically
                          const renderIcon = () => {
                            const iconClass = `w-5 h-5 ${isInstagram ? "text-pink-500" : "text-brand-red"}`;
                            if (item.icon === "compass") return <Compass className={iconClass} />;
                            if (item.icon === "eye") return <Eye className={iconClass} />;
                            if (item.icon === "brain") return <Brain className={iconClass} />;
                            if (item.icon === "rupee") return <span className={`${isInstagram ? "text-pink-500" : "text-brand-red"} font-bold text-lg leading-none`}>₹</span>;
                            return null;
                          };

                          return (
                            <div 
                              key={idx} 
                              className={`relative border-l pl-6 py-2 flex flex-col items-start group transition-colors duration-500 ${
                                isInstagram 
                                  ? "border-pink-500/30 hover:border-pink-500" 
                                  : "border-brand-red/30 hover:border-brand-red"
                              }`}
                            >
                               {/* Faint Big Number Watermark */}
                               <div className={`absolute right-4 top-2 font-mango text-[5rem] sm:text-[6rem] font-bold select-none pointer-events-none transition-colors duration-500 ${
                                 isInstagram 
                                   ? "text-pink-500/[0.03] group-hover:text-pink-500/[0.06]" 
                                   : "text-brand-red/[0.03] group-hover:text-brand-red/[0.06]"
                               }`}>
                                  {item.num}
                               </div>

                               {/* Icon Wrapper */}
                               <div className="mb-4">
                                  {renderIcon()}
                               </div>

                               {/* Item Title */}
                               <h4 className="text-white text-base md:text-lg font-bold tracking-wide uppercase mb-3">
                                  {item.title}
                               </h4>

                               {/* Item Description */}
                               <p className="text-brand-beige/65 text-xs sm:text-sm md:text-base leading-relaxed font-medium mb-6">
                                  {item.description}
                               </p>

                               {/* Quote Box */}
                               {item.quote && (
                                 <div className="border-l border-brand-beige/10 pl-4 py-1 italic text-xs md:text-sm text-brand-beige/45">
                                    "{item.quote}"
                                 </div>
                               )}
                            </div>
                          );
                        })}
                     </div>
                  </div>
                )}

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
                      renderCard={(item: any, { active }) => {
                        const isReel = isInstagram || item.href?.includes("instagram.com");
                        const buttonLabel = isReel ? "View Reel" : "Watch Video";
                        const buttonBg = isInstagram ? "bg-pink-600 hover:bg-pink-700" : "bg-brand-red hover:bg-red-700";
                        return (
                          <div className="relative h-full w-full group">
                            {/* image */}
                            <div className="absolute inset-0">
                              {item.imageSrc ? (
                                <img
                                  src={item.imageSrc}
                                  alt={item.title}
                                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                  draggable={false}
                                  loading="eager"
                                />
                              ) : (
                                <div className="flex h-full w-full items-center justify-center bg-zinc-800 text-sm text-white/50">
                                  No image
                                </div>
                              )}
                            </div>

                            {/* gradient overlay at bottom for text readability */}
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity" />

                            {/* content */}
                            <div className="relative z-10 flex h-full flex-col justify-end p-6">
                              <div className="truncate text-xl font-medium tracking-tight text-white shadow-sm">
                                {item.title}
                              </div>
                              {item.description ? (
                                <div className="mt-2 line-clamp-2 text-sm text-white/80">
                                  {item.description}
                                </div>
                              ) : null}
                              {item.href && active && (
                                <div className="mt-4 pointer-events-auto">
                                   <a 
                                     href={item.href} 
                                     target="_blank" 
                                     rel="noreferrer" 
                                     className={`inline-flex items-center gap-2 px-4 py-2 ${buttonBg} text-white text-sm font-bold uppercase tracking-wider rounded-full transition`}
                                   >
                                     {buttonLabel} <SquareArrowOutUpRight className="w-4 h-4" />
                                   </a>
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      }}
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
                    <h2 className={`text-6xl md:text-[8rem] font-mango uppercase mb-8 leading-none ${
                      isInstagram ? "text-pink-500" : "text-brand-red"
                    }`}>{screen.title}</h2>
                    <p className="text-2xl md:text-4xl leading-snug font-medium opacity-80 mb-16">{screen.subtitle}</p>
                    <a 
                      href={screen.url || (isInstagram ? "https://www.instagram.com/vaibhavkadnarofficial" : "https://www.youtube.com/@VaibhavKadnar")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-white px-12 py-6 rounded-full text-xl font-bold tracking-widest uppercase hover:scale-105 transition-all cursor-pointer inline-block ${
                        isInstagram 
                          ? "bg-pink-600 shadow-[0_0_50px_rgba(219,39,119,0.4)] hover:shadow-[0_0_80px_rgba(219,39,119,0.6)]" 
                          : "bg-brand-red shadow-[0_0_50px_rgba(207,17,52,0.4)] hover:shadow-[0_0_80px_rgba(207,17,52,0.6)]"
                      }`}
                    >
                      {isInstagram ? "Follow on Instagram" : "Join The Movement"}
                    </a>
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
