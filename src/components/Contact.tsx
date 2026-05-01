import { motion } from "motion/react";
import { Mail, MessageSquare, Send } from "lucide-react";
import { PORTFOLIO_DATA } from "../constants";

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-zinc-900 border border-zinc-800 rounded-[2.5rem] p-10 md:p-16 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">
                Let's start some- <br />
                thing <span className="text-primary italic">great</span>.
              </h2>
              <form action="https://formspree.io/f/xlgzdgyn" method="POST" className="flex flex-col gap-4 max-w-lg">
                <input type="hidden" name="_subject" value="New message from portfolio" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" name="name" placeholder="Name" className="bg-zinc-800 border border-zinc-700/50 rounded-2xl p-4 text-white placeholder:text-zinc-500 focus:outline-none focus:border-primary transition-colors" />
                  <input type="email" name="email" placeholder="Email" className="bg-zinc-800 border border-zinc-700/50 rounded-2xl p-4 text-white placeholder:text-zinc-500 focus:outline-none focus:border-primary transition-colors" />
                </div>
                <textarea rows={4} name="message" placeholder="Tell me about your project" className="bg-zinc-800 border border-zinc-700/50 rounded-2xl p-4 text-white placeholder:text-zinc-500 focus:outline-none focus:border-primary transition-colors resize-none"></textarea>
                <button type="submit" className="bg-white text-zinc-950 py-4 rounded-2xl font-bold hover:bg-zinc-200 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>

          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 flex flex-col justify-between flex-1"
            >
              <h3 className="text-lg font-bold">Connect</h3>
              <div className="flex flex-col gap-3">
                {[
                  { name: 'LinkedIn', href: PORTFOLIO_DATA.socials.linkedin },
                  { name: 'Github', href: PORTFOLIO_DATA.socials.github }
                ].map(social => (
                  <a key={social.name} href={social.href} className="flex items-center justify-between p-3 bg-zinc-800 rounded-xl text-sm text-zinc-300 hover:text-white hover:bg-zinc-700 transition-all">
                    <span>{social.name}</span>
                    <span className="text-zinc-500">↗</span>
                  </a>
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
                "Let's Create"
              </div>
              <div className="mt-8">
                <p className="text-blue-100 text-[10px] uppercase font-bold tracking-widest">Email Me</p>
                <p className="text-sm font-bold mt-1 lowercase">{PORTFOLIO_DATA.email}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
