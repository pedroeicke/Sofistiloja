
import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80&w=800", // Sala de Estar (New 0)
    "https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?auto=format&fit=crop&q=80&w=800", // Cantinho decorado
    "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?auto=format&fit=crop&q=80&w=800", // Ambiente Clean (New 2)
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800", // Cozinha sofisticada
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800", // Quarto aconchegante
    "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=80&w=800", // Detalhes de estante
  ];

  return (
    <section id="galeria" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-gold font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Inspire-se</span>
          <h2 className="text-3xl md:text-5xl font-bold text-black">Nossos Produtos em Ambientes</h2>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, i) => (
            <div key={i} className="relative group overflow-hidden rounded-3xl cursor-zoom-in">
              <img
                src={img}
                alt={`Ambiente ${i}`}
                className="w-full h-full object-cover rounded-3xl transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white text-sm font-bold uppercase tracking-widest border border-white/30 px-6 py-2 rounded-full backdrop-blur-sm">
                  Ver Detalhes
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
