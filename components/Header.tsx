
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon.tsx';
import { WHATSAPP_LINK } from '../constants.tsx';

interface HeaderProps {
  isScrolled: boolean;
  currentView: 'home' | 'catalog';
  onNavigateHome: () => void;
  onNavigateCatalog: () => void;
}

const Header: React.FC<HeaderProps> = ({ isScrolled, currentView, onNavigateHome, onNavigateCatalog }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Início', onClick: onNavigateHome, active: currentView === 'home' },
    { name: 'Produtos', onClick: onNavigateCatalog, active: currentView === 'catalog' },
    { name: 'FAQ', onClick: onNavigateHome, href: '#faq' },
    { name: 'Contato', onClick: onNavigateHome, href: '#contato' },
  ];

  const handleItemClick = (item: any) => {
    item.onClick();
    setMobileMenuOpen(false);
    if (item.href && currentView === 'home') {
      setTimeout(() => {
        const el = document.querySelector(item.href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 mt-8 md:mt-10 ${isScrolled || currentView === 'catalog' ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'
        }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <button onClick={onNavigateHome} className="flex flex-col text-left group">
          <span className="text-2xl md:text-3xl font-bold tracking-tighter text-black group-hover:text-gold transition-colors">
            SOFISTI
          </span>
          <span className="text-[10px] tracking-[0.3em] font-light text-gray-500 uppercase -mt-1">
            Casa & Presentes
          </span>
        </button>

        <nav className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleItemClick(item)}
              className={`text-sm font-medium transition-all uppercase tracking-widest border-b-2 ${item.active ? 'text-gold border-gold' : 'text-gray-800 border-transparent hover:text-gold'
                }`}
            >
              {item.name}
            </button>
          ))}

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-gold transition-all flex items-center gap-2 shadow-lg hover:shadow-gold/20"
          >
            <WhatsAppIcon size={16} color="white" /> Atendimento
          </a>
        </nav>

        <button className="lg:hidden text-black p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-[70] flex flex-col items-center justify-center gap-8 p-10 animate-in fade-in slide-in-from-top duration-300">
          <button className="absolute top-8 right-8 text-black" onClick={() => setMobileMenuOpen(false)}>
            <X size={32} />
          </button>
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleItemClick(item)}
              className={`text-3xl font-bold uppercase tracking-widest py-2 ${item.active ? 'text-gold' : 'text-black'}`}
            >
              {item.name}
            </button>
          ))}
          <a
            href={WHATSAPP_LINK}
            className="mt-4 bg-gold text-white px-8 py-4 rounded-full text-lg font-bold uppercase tracking-widest flex items-center gap-2 shadow-xl"
          >
            <WhatsAppIcon size={24} color="#D4AF37" /> WhatsApp
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
