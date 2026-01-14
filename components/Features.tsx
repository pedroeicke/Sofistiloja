
import React from 'react';
import { ShieldCheck, Truck, Clock, Sparkles } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Sparkles className="text-gold" size={32} />,
      title: "Curadoria Exclusiva",
      desc: "Peças selecionadas a dedo para garantir que seu lar tenha personalidade e estilo único."
    },
    {
      icon: <Truck className="text-gold" size={32} />,
      title: "Entrega Protegida",
      desc: "Nossas embalagens são reforçadas para que sua peça chegue perfeita em qualquer lugar do Brasil."
    },
    {
      icon: <ShieldCheck className="text-gold" size={32} />,
      title: "Compra Segura",
      desc: "Atendimento humanizado e personalizado do início ao fim da sua experiência de compra."
    },
    {
      icon: <Clock className="text-gold" size={32} />,
      title: "Pronta Entrega",
      desc: "Grande parte de nosso acervo está disponível para envio imediato, sem esperas longas."
    }
  ];

  return (
    <section className="py-24 bg-black text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/10 rounded-full -ml-48 -mb-48 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Por que escolher a Sofisti?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-light">Comprometimento com a excelência em cada detalhe, desde a escolha da peça até o momento em que ela brilha na sua decoração.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, idx) => (
            <div key={idx} className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-300 group">
              <div className="mb-6 p-4 bg-white/5 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{f.title}</h3>
              <p className="text-gray-400 font-light leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
