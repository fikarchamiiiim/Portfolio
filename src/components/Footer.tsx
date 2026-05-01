import { Github, Linkedin, Twitter, ArrowUp } from "lucide-react";
import { PORTFOLIO_DATA } from "../constants";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-20 border-t border-zinc-800 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#" className="text-2xl font-display font-bold text-white mb-4 tracking-tighter">
              {PORTFOLIO_DATA.name.split(' ')[0].toUpperCase()}<span className="text-primary">.</span>
            </a>
            <p className="text-zinc-500 text-sm max-w-xs leading-relaxed">
              Full Stack & AI Engineer. Connecting Ideas with Innovation. Transforming complex concepts into robust, intelligent, and user-friendly solutions.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex items-center gap-6">
              {[
                { icon: Github, href: PORTFOLIO_DATA.socials.github },
                { icon: Linkedin, href: PORTFOLIO_DATA.socials.linkedin },
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-500 hover:border-zinc-500 hover:text-white transition-all"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
            
            <button 
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-colors"
            >
              Back to top 
              <div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:bg-zinc-800 transition-colors">
                <ArrowUp size={14} />
              </div>
            </button>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-[10px] uppercase font-bold tracking-widest">
            © {new Date().getFullYear()} {PORTFOLIO_DATA.name.toUpperCase()}.
          </p>
          <div className="flex gap-6 text-zinc-600 text-[10px] uppercase font-bold tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
