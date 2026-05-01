import { motion } from "motion/react";
import { Github, Linkedin, Twitter, Menu, X } from "lucide-react";
import { useState } from "react";
import { PORTFOLIO_DATA } from "../constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <motion.a
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          href="#"
          className="text-xl font-display font-bold tracking-tighter text-white hover:text-primary transition-colors"
        >
          {PORTFOLIO_DATA.name.split(' ')[0].toUpperCase()}<span className="text-primary">.</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, idx) => (
            <motion.a
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              href={link.href}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <div className="w-[1px] h-4 bg-zinc-800" />
          <span className="bg-zinc-900 border border-zinc-800 text-zinc-300 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
            Available for work
          </span>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-zinc-100" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-16 left-0 w-full bg-zinc-900 border-b border-zinc-800 px-6 py-8 flex flex-col gap-6 shadow-xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-zinc-100"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-6 pt-4 border-t border-zinc-800 text-zinc-500">
            <a href={PORTFOLIO_DATA.socials.github}><Github size={20} /></a>
            <a href={PORTFOLIO_DATA.socials.linkedin}><Linkedin size={20} /></a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
