
import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../constants.tsx';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-4">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">O que dizem nossos clientes</h2>
            <p className="text-gray-500">Mais de 1.000 lares transformados com nossas peças.</p>
          </div>
          <div className="flex items-center gap-2 bg-white px-6 py-4 rounded-3xl shadow-sm border border-gray-100">
            <div className="flex text-gold">
              {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
            </div>
            <span className="font-bold text-black text-lg">4.9/5.0</span>
            <span className="text-gray-400 text-sm">média de avaliações</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 flex flex-col justify-between">
              <div>
                <div className="flex text-gold mb-6">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-gray-600 italic text-lg leading-relaxed mb-8">
                  "{t.text}"
                </p>
              </div>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-black">{t.name}</h4>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Cliente Verificado</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
