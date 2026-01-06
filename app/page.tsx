'use client';
import { motion } from 'framer-motion';
import { MessageCircle, ShieldCheck, Heart, Sparkles, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="relative">
      {/* Botão WhatsApp Flutuante */}
      <a 
        href="https://wa.me/SEUNUMERO" 
        className="fixed bottom-6 right-6 z-50 bg- p-4 rounded-full shadow-2xl hover:scale-110 transition-transform"
      >
        <MessageCircle size={32} color="white" />
      </a>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(78,28,80,0.2),transparent_70%)]" />
        
        <div className="container mx-auto text-center z-10">
          <motion.span 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-gold-500 tracking-[0.4em] uppercase text-sm mb-4 block"
          >
            Tradição Ancestral e Poder Espiritual
          </motion.span>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
            className="font-display text-5xl md:text-8xl font-bold mb-8 leading-tight"
          >
            Recupere seu Amor com o <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-teal-400">
              Verdadeiro Axé
            </span>
          </h1 >
          <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl mb-10">
            Mestre Reginaldo: 35 anos de experiência resolvendo o impossível. Sigilo absoluto e resultados comprovados.[13, 10]
          </p>
          <a href="https://wa.me/SEUNUMERO" className="inline-flex items-center gap-2 bg-teal-400 text-black font-bold px-8 py-4 rounded-full hover:bg-gold-500 transition-colors">
            QUERO UMA CONSULTA AGORA
          </a>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-24 bg-mystic-900">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
          {", icon: <Heart /> },
            { title: "Limpeza Espiritual", desc: "Remova inveja, demandas e abra seus caminhos financeiros.[13]", icon: <Sparkles /> },
            { title: "Proteção Blindada", desc: "Escudo espiritual contra energias negativas e rivais.", icon: <ShieldCheck /> }
          ].map((s, i) => (
            <div key={i} className="glass p-8 rounded-3xl hover:border-gold-500 transition-all">
              <div className="text-teal-400 mb-4">{s.icon}</div>
              <h3 className="font-display text-2xl font-bold mb-3">{s.title}</h3>
              <p className="text-gray-400">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ - Quebra de Objeções */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-4xl text-center mb-12">Perguntas Frequentes</h2>
          {" },
            { q: "Quanto tempo demora para ver resultados?", a: "Cada caso é único, mas muitos clientes relatam mudanças nos primeiros rituais.[13]" }
          ].map((f, i) => (
            <div key={i} className="mb-4 border-b border-white/10 pb-4">
              <button onClick={() => setOpenFaq(openFaq === i? null : i)} className="w-full text-left flex justify-between font-bold py-4">
                {f.q} <ChevronDown className={openFaq === i? "rotate-180" : ""} />
              </button>
              {openFaq === i && <p className="text-gray-400 mt-2">{f.a}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Rodapé */}
      <footer className="py-12 text-center text-gray-600 text-sm">
        © 2026 Mestre Reginaldo - O Verdadeiro Axé da Bahia. Todos os direitos reservados.
      </footer>
    </main>
  );
}
