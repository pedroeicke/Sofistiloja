
import React from 'react';
import { Search, CreditCard, PackageCheck } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon.tsx';

const HowToBuy: React.FC = () => {
  const steps = [
    {
      icon: <Search size={24} />,
      title: "Escolha sua peça",
      desc: "Navegue pelo nosso site ou catálogo no Instagram e selecione os itens que mais combinam com seu lar."
    },
    {
      icon: <WhatsAppIcon size={24} color="#D4AF37" />,
      title: "Chame no WhatsApp",
      desc: "Clique no botão de compra ou no ícone flutuante para falar diretamente com nosso atendimento especializado."
    },
    {
      icon: <CreditCard size={24} />,
      title: "Pagamento Seguro",
      desc: "Finalize seu pedido via PIX ou Cartão. Enviamos o link de pagamento ou chave de forma segura."
    },
    {
      icon: <PackageCheck size={24} />,
      title: "Receba com Sofisticação",
      desc: "Suas peças serão embaladas com todo carinho e enviadas. Em breve estarão brilhando em sua casa."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold/10 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] translate-y-1/2 translate-x-1/3"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-24">
          <span className="text-gold font-bold text-xs uppercase tracking-[0.3em] mb-4 block animate-in fade-in slide-in-from-bottom duration-700">Praticidade & Segurança</span>
          <h2 className="text-4xl md:text-6xl font-bold text-black mb-6 animate-in fade-in slide-in-from-bottom duration-700 delay-100 font-display">
            Experiência de Compra <span className="text-gold italic font-light">Exclusiva</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-light leading-relaxed animate-in fade-in slide-in-from-bottom duration-700 delay-200">
            Adquirir suas peças favoritas é simples e totalmente seguro. Acompanhamos você em cada etapa.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-[60px] left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-transparent via-gold/30 to-transparent z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            {steps.map((s, i) => (
              <div
                key={i}
                className="relative z-10 flex flex-col items-center text-center group"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                {/* Icon Container */}
                <div className="w-32 h-32 relative mb-8 transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="absolute inset-0 bg-white rounded-full shadow-2xl border border-gray-100 flex items-center justify-center z-10 group-hover:border-gold/50 transition-colors duration-500">
                    <div className="text-gray-400 group-hover:text-gold transition-colors duration-500 transform group-hover:scale-110">
                      {React.cloneElement(s.icon as React.ReactElement, { size: 32 })}
                    </div>
                  </div>

                  {/* Number Badge */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-display font-bold text-xl shadow-lg z-20 border-4 border-white">
                    {i + 1}
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gold/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <h3 className="text-xl font-bold mb-4 font-display text-black group-hover:text-gold transition-colors duration-300">
                  {s.title}
                </h3>
                <p className="text-gray-500 font-light leading-relaxed text-sm px-4">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;
