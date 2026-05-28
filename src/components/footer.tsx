import { motion } from "motion/react";
import { Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black pt-32 pb-16 px-6 md:px-16 border-t border-brand-beige/10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row gap-20 items-start">
          {/* Left Side: CTA */}
          <div className="w-full md:w-1/2 space-y-12">
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
            >
              <h2 className="font-mango text-8xl md:text-[10rem] leading-[0.9] text-brand-beige uppercase">
                 Your next big <br />
                 <span className="text-brand-red italic">idea</span> <br />
                 starts here
              </h2>
              <p className="text-brand-beige/60 text-xl mt-8 max-w-md leading-relaxed">
                 We're ready to turn ideas into reality. Reach out now and let's build something extraordinary.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-12 pt-8">
               <div className="space-y-6">
                 <h4 className="text-xl font-bold">Pages</h4>
                 <ul className="space-y-3 text-brand-beige/40">
                   <li><a href="/" className="hover:text-brand-beige transition-colors">Home</a></li>
                   <li><a href="#social" className="hover:text-brand-beige transition-colors">Social</a></li>
                   <li><a href="#about" className="hover:text-brand-beige transition-colors">About</a></li>
                 </ul>
               </div>
               <div className="space-y-6">
                 <h4 className="text-xl font-bold">Connect</h4>
                 <div className="space-y-3 text-brand-beige/40">
                    <p className="leading-tight">
                        Based in Bengaluru,<br />
                        India
                    </p>
                    <a href="mailto:hello@nexgenmedia.com" className="block pt-4 text-brand-beige font-semibold hover:text-brand-red transition-colors underline underline-offset-4">
                        hello@nexgenmedia.com
                    </a>
                 </div>
               </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <motion.div 
            className="w-full md:w-1/2 bg-brand-dark p-8 md:p-12 rounded-3xl border border-brand-beige/10"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form className="space-y-8">
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-widest uppercase text-brand-beige/40">Email</label>
                <input 
                  type="email" 
                  placeholder="hello@example.com" 
                  className="w-full bg-transparent border-b border-brand-beige/20 py-4 focus:outline-none focus:border-brand-red transition-colors text-lg"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-widest uppercase text-brand-beige/40">Phone</label>
                <input 
                  type="tel" 
                  placeholder="+91 00000 00000" 
                  className="w-full bg-transparent border-b border-brand-beige/20 py-4 focus:outline-none focus:border-brand-red transition-colors text-lg"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-widest uppercase text-brand-beige/40">Tell us about your project</label>
                <textarea 
                  placeholder="Write here..." 
                  rows={4}
                  className="w-full bg-transparent border-b border-brand-beige/20 py-4 focus:outline-none focus:border-brand-red transition-colors text-lg resize-none"
                />
              </div>
              
              <motion.button
                type="submit"
                className="w-full bg-brand-red text-brand-beige py-6 rounded-xl font-bold tracking-widest uppercase flex items-center justify-center gap-3 hover:opacity-90 transition-opacity"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>SEND YOUR BRIEF</span>
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>
        </div>

        <div className="mt-32 pt-16 border-t border-brand-beige/5 flex flex-col md:flex-row justify-between items-center gap-8 text-brand-beige/20 text-xs font-bold tracking-widest">
           <p>© 2026 NEXGEN MEDIA. ALL RIGHTS RESERVED.</p>
           <div className="flex gap-8">
             <a href="#" className="hover:text-brand-beige transition-colors uppercase">Privacy Policy</a>
             <a href="#" className="hover:text-brand-beige transition-colors uppercase">Terms of Service</a>
           </div>
        </div>
      </div>

      {/* Background Graphic Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square -z-0 pointer-events-none opacity-[0.03]">
          <img src="https://framerusercontent.com/images/yE30Awwqz87mghYDpHukkspPLBg.png" alt="" className="w-full h-full object-contain" />
      </div>
    </footer>
  );
}
