import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { PORTFOLIO_DATA } from "../constants";

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-[1px] bg-blue-600" />
              <span className="text-blue-500 font-bold uppercase tracking-widest text-xs">Projects</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
              Selected Works
            </h2>
          </div>
          <p className="text-zinc-500 max-w-sm">
            Building minimalist digital products with focus on clean code and user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-zinc-900 rounded-3xl border border-zinc-800 p-6 relative overflow-hidden flex flex-col justify-between hover:border-zinc-700 transition-colors"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">
                    Project 0{idx + 1}
                  </div>
                  <div className="flex gap-2">
                    <a href={project.link} className="text-zinc-500 hover:text-white transition-colors">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-lg bg-zinc-800 text-[10px] font-medium text-zinc-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="relative aspect-video rounded-xl border border-zinc-800 overflow-hidden bg-zinc-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Decorative gradient corner */}
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
