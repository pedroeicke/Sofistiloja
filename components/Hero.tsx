
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants.tsx';
import WhatsAppIcon from './WhatsAppIcon.tsx';

interface HeroProps {
  onShowProducts: () => void;
}

const Hero: React.FC<HeroProps> = ({ onShowProducts }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Imagem de Fundo de Alta Performance */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?auto=format&fit=crop&q=80&w=1920"
          alt="Ambiente Sofisticado Sofisti Casa & Presentes"
          className="w-full h-full object-cover"
        />
        {/* Overlay para legibilidade e profundidade */}
        <div className="absolute inset-0 bg-white/40 md:bg-white/20 backdrop-blur-[1px]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/40 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-xl animate-in slide-in-from-left duration-700">
          <span className="inline-block px-4 py-1 bg-gold text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-6 rounded shadow-sm">
            Exclusividade & Charme
          </span>
          <h1 className="text-4xl md:text-7xl font-bold text-black leading-tight mb-6">
            Estilo e <span className="text-gold italic font-light">sofisticação</span> para o seu lar.
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed font-light">
            Peças decorativas cheias de charme! Vasos, esculturas, colares decorativos e presentes para transformar qualquer ambiente com elegância e bom gosto.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={(e) => { e.preventDefault(); onShowProducts(); }}
              className="bg-black text-white px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-gold transition-all flex items-center justify-center gap-3 group shadow-2xl hover:-translate-y-1"
            >
              Ver produtos <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black border-2 border-black/10 px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:border-gold hover:text-gold transition-all flex items-center justify-center gap-3 shadow-sm hover:-translate-y-1"
            >
              <WhatsAppIcon size={18} color="black" /> Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Indicador de Scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 animate-pulse">
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-black">Scroll</span>
        <div className="w-[1px] h-10 bg-black"></div>
      </div>
    </section>
  );
};

export default Hero;
