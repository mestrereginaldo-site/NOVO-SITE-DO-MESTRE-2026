'use client';
import { motion } from 'framer-motion';
import { MessageCircle, ShieldCheck, Heart, Sparkles, ChevronDown } from 'lucide-react';
import { useState } from 'react';

// Dados da página centralizados para evitar erros de sintaxe
const services =;

const faqData =;

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="relative bg-[#080808] text-white min-h-screen font-sans antialiased">
      {/* Botão WhatsApp Flutuante */}
      <a 
        href="https://wa.me/SEUNUMERO" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg- p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.5)] hover:scale-110 transition-transform"
      >
        <MessageCircle size={32} />
      </a>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden">
        {/* Efeito de luz mística no fundo */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(78,28,80,0.15),transparent_70%)]" />
        
        <div className="container mx-auto text-center z-10">
          <motion.span 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            className="text- tracking-[0.4em] uppercase text-xs md:text-sm mb-6 block font-medium"
          >
            Tradição Ancestral • O Verdadeiro Axé da Bahia
          </motion.span>
          
          <motion.h1 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-7xl font-bold mb-8 leading-tight font-serif"
          >
            Domine o seu Destino com o <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from- to-[#006F87]">
              Poder dos Orixás
            </span>
          </motion.h1>

          <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl mb-12 leading-relaxed">
            Mestre Reginaldo une o conhecimento milenar à sensibilidade moderna para resolver problemas amorosos e abrir seus caminhos.
          </p>

          <a 
            href="https://wa.me/SEUNUMERO" 
            className="inline-flex items-center gap-3 bg-[#006F87] text-white font-bold px-10 py-5 rounded-full hover:bg- hover:text-black transition-all shadow-xl active:scale-95"
          >
            FALAR COM O MESTRE AGORA
          </a>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-24 bg-[#111111]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white/5 p-10 rounded-[2rem] border border-white/10 hover:border-/50 transition-all"
              >
                <div className="text-[#006F87] mb-6">{s.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-">{s.title}</h3>
                <p className="text-gray-400 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 border-t border-white/5 bg-[#080808]">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-">Dúvidas Frequentes</h2>
          <div className="space-y-4">
            {faqData.map((f, i) => (
              <div key={i} className="border border-white/10 rounded-2xl overflow-hidden bg-white/5">
                <button 
                  onClick={() => setOpenFaq(openFaq === i? null : i)} 
                  className="w-full text-left flex justify-between items-center p-6 font-bold hover:bg-white/5 transition-colors"
                >
                  {f.q} 
                  <ChevronDown className={`transition-transform duration-300 ${openFaq === i? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    className="px-6 pb-6 text-gray-400 leading-relaxed"
                  >
                    {f.a}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center border-t border-white/5 text-gray-600 text-sm">
        <p>© 2026 Mestre Reginaldo - Consultoria Espiritual de Alto Nível.</p>
        <p className="mt-2 text-xs opacity-50 text-center">Atendimento especializado no Brasil e em Portugal.</p>
      </footer>
    </main>
  );
}
