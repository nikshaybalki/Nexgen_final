import { motion, AnimatePresence, useScroll } from "motion/react";
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  currentPage: "home" | "about" | "content" | "career";
  onNavigate: (toPage: "home" | "about" | "content" | "career", hash?: string) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const navLinks = [
    { name: "Home", href: "/", page: "home" as const },
    { name: "Content", href: "/content", page: "content" as const },
    { name: "About Us", href: "/about-us", page: "about" as const },
    { name: "Career", href: "/career", page: "career" as const },
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
            const isActive = link.page === currentPage && (!link.hash || window.location.hash === link.hash);
            
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

        {/* Mobile menu icon */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-brand-beige hover:text-white p-2 focus:outline-none cursor-pointer"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-[74px] left-0 w-full bg-black/95 border-b border-brand-beige/10 backdrop-blur-lg flex flex-col items-center gap-6 py-8 md:hidden"
          >
            {navLinks.map((link) => {
              const isActive = link.page === currentPage && (!link.hash || window.location.hash === link.hash);
              
              return (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={(e) => {
                    handleLinkClick(e, link);
                    setIsMenuOpen(false);
                  }}
                  className={`text-lg font-medium transition-colors ${
                    isActive 
                      ? "text-brand-red font-bold" 
                      : "text-brand-beige/80 hover:text-brand-beige"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            
            <a
              href="https://forms.gle/fVo9Nq8fd6xHhGZAA"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-red text-brand-beige px-8 py-3 rounded-full text-sm font-bold tracking-widest uppercase hover:opacity-90 transition-opacity mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              SCHEDULE A CALL
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
