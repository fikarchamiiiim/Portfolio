import { motion } from "motion/react";
import { PORTFOLIO_DATA } from "../constants";

export default function About() {
  return (
    <section id="about" className="py-32 overflow-hidden bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-zinc-900 border border-zinc-800 rounded-[2.5rem] p-10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[1px] bg-primary" />
                <span className="text-primary font-bold uppercase tracking-widest text-xs">About Me</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
                Professional <br /> Journey.
              </h2>
              <p className="text-lg text-zinc-400 leading-relaxed max-w-md">
                {PORTFOLIO_DATA.about}
              </p>
            </div>
            
            <div className="mt-12 pt-8 border-t border-zinc-800 flex items-center gap-8">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white tracking-tighter">06+</span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-500">Years Exp</span>
              </div>
              <div className="w-[1px] h-10 bg-zinc-800" />
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white tracking-tighter"> Jakarta</span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-500">Based in ID</span>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 flex flex-col justify-center gap-6"
            >
              <h4 className="text-white font-bold text-sm uppercase tracking-widest">Tech Stack</h4>
              <div className="grid grid-cols-3 gap-3">
                {PORTFOLIO_DATA.skills.slice(0, 9).map(skill => (
                  <div key={skill} className="aspect-square bg-zinc-800 rounded-xl flex items-center justify-center text-[10px] font-bold text-zinc-400 border border-zinc-700/50 hover:text-white hover:border-zinc-500 transition-colors">
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-blue-600 rounded-3xl p-8 text-white flex flex-col justify-between"
            >
              <div className="text-3xl font-bold italic leading-tight">
                "Code is <br /> my symphony."
              </div>
              <div className="text-xs font-bold uppercase tracking-widest opacity-80">
                Full Stack Engineer
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="col-span-1 md:col-span-2 bg-zinc-900 border border-zinc-800 rounded-3xl p-8 flex items-center justify-between"
            >
              <div className="flex flex-col gap-2">
                <h4 className="text-white font-bold">Latest Milestone</h4>
                <p className="text-zinc-500 text-sm">Working with high-growth startups globally.</p>
              </div>
              <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center text-xl">🚀</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
