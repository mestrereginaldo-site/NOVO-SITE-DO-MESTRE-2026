'use client';
import { motion } from 'framer-motion';
import { MessageCircle, Heart, Sparkles, ShieldCheck, ChevronDown, Star, Zap } from 'lucide-react';
import { useState } from 'react';

const services =;

const faqs =;

export default function LandingPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#080808]">
      {/* WhatsApp Flutuante */}
      <a href="https://wa.me/5571999999999" className="fixed bottom-6 right-6 z-50 bg- p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.5)] hover:scale-110 transition-all">
        <MessageCircle size={32} color="white" />
      </a>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-6 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(78,28,80,0.2),transparent_70%)]" />
        <div className="z-10 max-w-5xl">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text- uppercase tracking-[0.4em] text-sm block mb-6">Tradição Ancestral da Bahia</motion.span>
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-5xl md:text-8xl font-bold mb-8 leading-tight">
            Recupere seu Amor com o <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from- to-[#006F87]">Verdadeiro Axé</span>
          </motion.h1>
          <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto">Mestre Reginaldo: 35 anos de experiência resolvendo o impossível através do poder dos Orixás.</p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <a href="https://wa.me/5571999999999" className="bg-[#006F87] text-white font-bold px-10 py-5 rounded-full hover:bg- hover:text-black transition-all shadow-xl flex items-center gap-2">
              FALAR COM O MESTRE AGORA <Zap size={20} />
            </a>
            <div className="flex items-center gap-2 text-"><Star fill="currentColor" size={20} /> <span className="font-bold text-white">4.9/5 no Google</span></div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-32 container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="glass-card p-10 rounded-[2.5rem] hover:border-/50 transition-all group">
              <div className="text-[#006F87] mb-6 group-hover:scale-110 transition-transform">{s.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
              <p className="text-gray-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-">Dúvidas Frequentes</h2>
          {faqs.map((f, i) => (
            <div key={i} className="mb-4 border border-white/10 rounded-2xl bg-white/5 overflow-hidden">
              <button onClick={() => setOpenIdx(openIdx === i? null : i)} className="w-full text-left p-6 flex justify-between items-center font-bold">
                {f.q} <ChevronDown className={`transition-transform ${openIdx === i? "rotate-180" : ""}`} />
              </button>
              {openIdx === i && <div className="px-6 pb-6 text-gray-400">{f.a}</div>}
            </div>
          ))}
        </div>
      </section>

      <footer className="py-12 text-center text-gray-600 border-t border-white/5">
        <p>© 2026 Mestre Reginaldo - O Verdadeiro Axé para o Mundo.</p>
      </footer>
    </main>
  );
}
