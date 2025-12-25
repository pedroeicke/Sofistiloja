
import React from 'react';
import { Instagram, Facebook, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigateHome: () => void;
  onNavigateCatalog: () => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigateHome, onNavigateCatalog }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white pt-24 pb-12 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <button onClick={onNavigateHome} className="flex flex-col mb-6 text-left">
              <span className="text-3xl font-bold tracking-tighter text-black">
                SOFISTI
              </span>
              <span className="text-[10px] tracking-[0.3em] font-light text-gray-500 uppercase -mt-1">
                Casa & Presentes
              </span>
            </button>
            <p className="text-gray-500 font-light mb-8 leading-relaxed">
              Transformamos lares com peças decorativas exclusivas e curadoria premium. Elegância e sofisticação em cada detalhe.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/sofisti_casaepresentes" target="_blank" className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-black uppercase tracking-widest text-xs mb-8">Navegação</h4>
            <ul className="space-y-4">
              <li><button onClick={onNavigateHome} className="text-gray-500 hover:text-gold transition-colors text-sm font-light">Início</button></li>
              <li><button onClick={onNavigateCatalog} className="text-gray-500 hover:text-gold transition-colors text-sm font-light">Catálogo de Produtos</button></li>
              <li><button onClick={onNavigateHome} className="text-gray-500 hover:text-gold transition-colors text-sm font-light">Coleções</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-black uppercase tracking-widest text-xs mb-8">Suporte</h4>
            <ul className="space-y-4">
              <li><button onClick={onNavigateHome} className="text-gray-500 hover:text-gold transition-colors text-sm font-light">Perguntas Frequentes</button></li>
              <li><a href="#" className="text-gray-500 hover:text-gold transition-colors text-sm font-light">Políticas de Troca</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gold transition-colors text-sm font-light">Envio & Prazos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-black uppercase tracking-widest text-xs mb-8">Atendimento</h4>
            <div className="space-y-4">
              <p className="text-sm text-gray-500 font-light">(24) 3401-1077</p>
              <p className="text-sm text-gray-500 font-light">(24) 99855-1077</p>
              <p className="text-sm text-gray-500 font-light">contato@sofisti.com.br</p>
              <button 
                onClick={scrollToTop}
                className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gold hover:text-black transition-colors"
              >
                Voltar ao Topo <ArrowUp size={14} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} Sofisti Casa & Presentes.
          </p>
          <div className="flex items-center gap-4 grayscale opacity-50">
            <img src="https://logodownload.org/wp-content/uploads/2014/10/visa-logo-5.png" alt="Visa" className="h-3" />
            <img src="https://logodownload.org/wp-content/uploads/2014/07/mastercard-logo.png" alt="Master" className="h-5" />
            <img src="https://logodownload.org/wp-content/uploads/2015/03/pix-logo.png" alt="Pix" className="h-4" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
