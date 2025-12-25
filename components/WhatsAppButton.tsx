
import React from 'react';
import WhatsAppIcon from './WhatsAppIcon.tsx';
import { WHATSAPP_LINK } from '../constants.tsx';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[9999] bg-[#25D366] text-white p-4 md:p-5 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group"
      aria-label="Fale conosco no WhatsApp"
    >
      <div className="absolute -top-12 right-0 bg-white text-black px-4 py-2 rounded-xl text-xs font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none after:content-[''] after:absolute after:top-full after:right-6 after:border-8 after:border-transparent after:border-t-white">
        Falar com Atendimento
      </div>
      <WhatsAppIcon size={32} className="md:w-8 md:h-8" color="#FFFFFF" />
      <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366]/40 -z-10"></span>
    </a>
  );
};

export default WhatsAppButton;
