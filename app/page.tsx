'use client';
import { motion } from 'framer-motion';
import { MessageCircle, ShieldCheck, Heart, Sparkles, ChevronDown, Star } from 'lucide-react';
import { useState } from 'react';

const services =;

const faqData =;

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="relative bg-[#080808] text-white min-h-screen font-sans antialiased">
      {/* Botão WhatsApp Flutuante */}
      <a 
        href="https://wa.me/5571999999999" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg- p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform"
      >
        <MessageCircle size={32} className="text-white" />
      </a>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(78,28,80,0.15),transparent_70%)]" />
        
        <div className="container mx-auto text-center z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text- tracking-[0.4em] uppercase text-xs mb-6 block font-medium">
              O Verdadeiro Axé da Bahia para o Mundo
            </span>
            <h1 className="text-4xl md:text-7xl font-bold mb-8 leading-tight">
              Recupere seu Amor e <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from- to-[#006F87]">
                Abra seus Caminhos
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl mb-12">
              Mestre Reginaldo traz a sabedoria ancestral para resolver seus problemas sentimentais e espirituais com seriedade e eficácia.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              <a href="https://wa.me/5571999999999" className="bg-[#006F87] text-white font-bold px-10 py-5 rounded-full hover:bg- hover:text-black transition-all shadow-xl">
                INICIAR CONSULTA AGORA
              </a>
              <div className="flex items-center gap-2 text-yellow-500">
                <Star size={20} fill="currentColor" />
                <span className="font-bold text-white">4.9/5 no Google</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-24 bg-[#111111]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div key={i} className="bg-white/5 p-10 rounded-[2rem] border border-white/10 hover:border-/50 transition-all group">
                <div className="text-[#006F87] mb-6 group-hover:scale-110 transition-transform">{s.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-">{s.title}</h3>
                <p className="text-gray-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 border-t border-white/5 bg-[#080808]">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-16 text-">Dúvidas Comuns</h2>
          <div className="space-y-4">
            {faqData.map((f, i) => (
              <div key={i} className="border border-white/10 rounded-2xl bg-white/5">
                <button 
                  onClick={() => setOpenFaq(openFaq === i? null : i)} 
                  className="w-full text-left flex justify-between items-center p-6 font-bold"
                >
                  {f.q} 
                  <ChevronDown className={`transition-transform ${openFaq === i? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-gray-400 border-t border-white/5 pt-4">
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 text-center border-t border-white/5 text-gray-600 text-sm">
        <p>© 2026 Mestre Reginaldo - Axé da Bahia em Brasil e Portugal.</p>
      </footer>
    </main>
  );
}
