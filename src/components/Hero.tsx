import { motion } from "motion/react";
import { ArrowRight, Download } from "lucide-react";
import { PORTFOLIO_DATA } from "../constants";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-32 pb-20 overflow-hidden flex flex-col justify-center">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-linear-to-bl from-blue-600/10 to-transparent blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 -z-10 w-1/3 h-1/2 bg-linear-to-tr from-zinc-800/20 to-transparent blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-zinc-900 border border-zinc-800 text-primary text-[10px] font-bold uppercase tracking-widest mb-10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for new opportunities
            </div>
            
            <h1 className="text-6xl md:text-7xl font-display font-bold tracking-tight leading-[0.85] text-white mb-10">
              Zulfikar Chamim <br />
              <span className="text-zinc-500 italic flex items-center gap-4">
                Connecting Ideas with Innovation: Full-Stack & AI Engineer. <span className="text-blue-600 font-normal">.</span>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed mb-12 max-w-2xl">
              {PORTFOLIO_DATA.bio}
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#projects"
                className="px-8 py-4 bg-white text-zinc-950 rounded-2xl font-bold flex items-center gap-2 hover:bg-zinc-200 transition-colors"
              >
                Hire Me <ArrowRight size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#"
                className="px-8 py-4 bg-zinc-900 border border-zinc-800 text-white rounded-2xl font-bold flex items-center gap-2 hover:border-zinc-700 transition-colors"
              >
                Download CV <Download size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-shrink-0 flex items-center justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Gradient ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600 via-blue-400 to-zinc-700 p-[3px]">
                <div className="w-full h-full rounded-full bg-zinc-950 overflow-hidden">
                  <img
                    src={PORTFOLIO_DATA.heroImage}
                    alt={PORTFOLIO_DATA.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              {/* Subtle glow */}
              <div className="absolute inset-0 rounded-full bg-blue-600/20 blur-2xl -z-10 scale-110" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
