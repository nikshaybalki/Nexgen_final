import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useState } from "react";

interface NavbarProps {
  currentPage: "home" | "about";
  onNavigate: (toPage: "home" | "about", hash?: string) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const navLinks = [
    { name: "Home", href: "#", page: "home" as const },
    { name: "Content", href: "#content", page: "home" as const, hash: "#content" },
    { name: "About Us", href: "#about-us", page: "about" as const },
    { name: "Career", href: "#career", page: "home" as const, hash: "#career" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof navLinks[number]) => {
    e.preventDefault();
    onNavigate(link.page, link.hash);
  };

  return (
    <motion.nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-colors duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md border-b border-brand-beige/10" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 h-[74px] flex items-center justify-between">
        <a 
          href="/" 
          onClick={(e) => {
            e.preventDefault();
            onNavigate("home");
          }}
          className="flex items-center gap-2"
        >
          {/* NEXGEN Logo */}
          <div className="text-xl font-bold tracking-tighter flex items-center">
             <span className="text-brand-beige">NEXGEN</span>
             <span className="ml-1 text-[10px] text-brand-beige/50 border border-brand-beige/20 px-1 rounded uppercase">media</span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = 
              (link.name === "About Us" && currentPage === "about") || 
              (link.name === "Home" && currentPage === "home" && !window.location.hash);
            
            return (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleLinkClick(e, link)}
                className={`text-sm font-medium transition-colors ${
                  isActive 
                    ? "text-brand-red font-semibold" 
                    : "text-brand-beige/60 hover:text-brand-beige"
                }`}
              >
                {link.name}
              </a>
            );
          })}
          
          <motion.a
            href="https://forms.gle/fVo9Nq8fd6xHhGZAA"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-red text-brand-beige px-6 py-3 rounded-full text-xs font-bold tracking-widest uppercase hover:opacity-90 transition-opacity"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            SCHEDULE A CALL
          </motion.a>
        </div>

        {/* Mobile menu icon (Simplified for now) */}
        <div className="md:hidden">
            <div className="w-8 h-8 rounded-full bg-brand-red flex items-center justify-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
            </div>
        </div>
      </div>
    </motion.nav>
  );
}
