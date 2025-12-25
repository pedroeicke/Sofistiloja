
import React, { useState } from 'react';
import { ShoppingCart, ExternalLink, X, Info, SlidersHorizontal } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants.tsx';
import WhatsAppIcon from './WhatsAppIcon.tsx';
import { Product } from '../types.ts';

interface ProductGridProps {
  activeCategory: string;
  onCategoryChange: (id: string) => void;
  isFullPage?: boolean;
  onNavigateToCatalog?: () => void;
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({
  activeCategory,
  onCategoryChange,
  isFullPage = false,
  onNavigateToCatalog,
  products
}) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Filtramos os produtos com base na categoria ativa ou se for a home (8 primeiros)
  const baseProducts = isFullPage
    ? (activeCategory === 'all' ? products : products.filter(p => p.category === activeCategory))
    : products.slice(0, 8);

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'vasos', name: 'Vasos' },
    { id: 'esculturas', name: 'Esculturas' },
    { id: 'colares', name: 'Colares' },
    { id: 'canecas', name: 'Canecas' },
    { id: 'presentes', name: 'Presentes' },
    { id: 'natal', name: 'Natal' },
  ];

  const handleWhatsAppOrder = (product: Product) => {
    const text = encodeURIComponent(`Olá! Gostaria de informações sobre o produto: ${product.name}`);
    window.open(`${WHATSAPP_LINK}?text=${text}`, '_blank');
  };

  return (
    <section id="produtos" className={isFullPage ? '' : 'py-24'}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
          <div className="text-center md:text-left">
            <h2 className={`${isFullPage ? 'text-4xl md:text-6xl' : 'text-3xl md:text-5xl'} font-bold text-black mb-4`}>
              {isFullPage ? 'Catálogo Sofisti' : 'Destaques da Vitrine'}
            </h2>
            <p className="text-gray-500 max-w-md">
              {isFullPage
                ? 'Navegue por nossa curadoria completa de peças exclusivas.'
                : 'Uma prévia das peças que estão fazendo sucesso na nossa curadoria.'}
            </p>
          </div>

          {isFullPage && (
            <div className="flex flex-wrap justify-center gap-2 bg-gray-50 p-2 rounded-full border border-gray-100">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => onCategoryChange(cat.id)}
                  className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${activeCategory === cat.id
                    ? 'bg-black text-white shadow-lg'
                    : 'bg-transparent text-gray-400 hover:text-gold'
                    }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {baseProducts.map(product => (
            <div key={product.id} className="group bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col">
              <div className="relative aspect-[4/5] overflow-hidden cursor-pointer" onClick={() => setSelectedProduct(product)}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {product.tag && (
                  <span className="absolute top-4 left-4 bg-gold text-white text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg z-10">
                    {product.tag}
                  </span>
                )}

                <div className="absolute inset-0 bg-black/20 md:bg-black/40 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-4">
                  <button className="bg-white text-black px-4 py-2 md:px-6 md:py-3 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-widest shadow-xl transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform">
                    Ver Detalhes
                  </button>
                </div>
              </div>

              <div className="p-6 text-center flex-grow flex flex-col justify-between">
                <div>
                  <span className="text-[9px] text-gold uppercase tracking-[0.3em] font-bold block mb-2">{product.category}</span>
                  <h3 className="text-lg font-bold text-black mb-2">{product.name}</h3>
                </div>
                <div className="mt-4">
                  <button
                    onClick={(e) => { e.stopPropagation(); handleWhatsAppOrder(product); }}
                    className="w-full bg-gray-50 text-black py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-black hover:text-white transition-all"
                  >
                    <WhatsAppIcon size={14} color="black" /> Consultar Disponibilidade
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!isFullPage && (
          <div className="mt-16 text-center">
            <button
              onClick={onNavigateToCatalog}
              className="inline-flex items-center gap-3 bg-black text-white px-10 py-5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-gold transition-all shadow-xl group"
            >
              Ver Catálogo Completo <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}

        {selectedProduct && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-in fade-in duration-300">
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={() => setSelectedProduct(null)}></div>
            <div className="relative bg-white w-full max-w-4xl rounded-[2.5rem] overflow-hidden shadow-2xl grid md:grid-cols-2 animate-in zoom-in-95 duration-300">
              <button onClick={() => setSelectedProduct(null)} className="absolute top-6 right-6 z-10 p-2 bg-black text-white rounded-full"><X size={20} /></button>
              <img src={selectedProduct.image} className="w-full h-full object-cover max-h-[400px] md:max-h-full" />
              <div className="p-10 flex flex-col justify-center">
                <span className="text-gold font-bold text-xs uppercase mb-2">{selectedProduct.category}</span>
                <h2 className="text-3xl font-bold text-black mb-4">{selectedProduct.name}</h2>
                <p className="text-gray-500 mb-8 font-light leading-relaxed">Peça exclusiva com acabamento premium, ideal para compor ambientes sofisticados ou presentear alguém especial.</p>
                <button onClick={() => handleWhatsAppOrder(selectedProduct)} className="bg-black text-white py-4 px-8 rounded-full text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-gold transition-colors shadow-xl w-full md:w-auto">
                  <WhatsAppIcon size={18} color="white" /> <span>Pedir no WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
