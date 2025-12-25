
import React from 'react';
import { Phone, Instagram, Send } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon.tsx';
import { WHATSAPP_LINK, FIXED_PHONE } from '../constants.tsx';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-black rounded-[3rem] p-8 md:p-20 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[50%] h-full bg-gold/5 -skew-x-12 transform origin-top-right"></div>

          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <span className="text-gold font-bold text-xs uppercase tracking-[0.3em] mb-6 block">Vamos Conversar?</span>
              <h2 className="text-4xl md:text-6xl font-bold mb-8">Dê um toque de <span className="text-gold italic font-light">Sofisti</span> na sua casa.</h2>
              <p className="text-gray-400 text-lg mb-12 font-light leading-relaxed">
                Nossa equipe está pronta para te atender e ajudar a escolher as melhores peças para o seu ambiente. Entre em contato por qualquer um de nossos canais.
              </p>

              <div className="space-y-8">
                <a href={WHATSAPP_LINK} className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-gold transition-colors">
                    <WhatsAppIcon size={24} className="text-gold group-hover:text-white transition-colors" color="currentColor" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">WhatsApp</p>
                    <p className="text-xl font-bold">(24) 99855-1077</p>
                  </div>
                </a>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-gold transition-colors">
                    <Phone size={24} className="text-gold group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">Telefone Fixo</p>
                    <p className="text-xl font-bold">{FIXED_PHONE}</p>
                  </div>
                </div>

                <a href="https://instagram.com/sofisti_casaepresentes" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-gold transition-colors">
                    <Instagram size={24} className="text-gold group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">Instagram</p>
                    <p className="text-xl font-bold">@sofisti_casaepresentes</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-10 text-black shadow-2xl">
              <h3 className="text-2xl font-bold mb-8">Envie uma mensagem</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2">Nome Completo</label>
                  <input
                    type="text"
                    placeholder="Seu nome"
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-gold transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2">E-mail</label>
                  <input
                    type="email"
                    placeholder="seu@email.com"
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-gold transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2">Sua Mensagem</label>
                  <textarea
                    rows={4}
                    placeholder="Como podemos te ajudar?"
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-gold transition-all resize-none"
                  ></textarea>
                </div>
                <button className="w-full bg-black text-white py-5 rounded-2xl text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-gold transition-colors shadow-lg">
                  Enviar Mensagem <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
