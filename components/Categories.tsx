
import React from 'react';
import { CATEGORIES } from '../constants.tsx';

interface CategoriesProps {
  onSelectCategory: (id: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({ onSelectCategory }) => {
  return (
    <section id="categorias" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <span className="text-gold font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Curadoria Sofisti</span>
        <h2 className="text-3xl md:text-5xl font-bold text-black mb-16">Nossas Coleções</h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {CATEGORIES.map((cat) => (
            <div 
              key={cat.id} 
              onClick={() => onSelectCategory(cat.id)}
              className="group relative h-64 md:h-80 overflow-hidden rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <img 
                src={cat.image} 
                alt={cat.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end items-center text-center">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 transform group-hover:-translate-y-2 transition-transform duration-500">
                  {cat.name}
                </h3>
                <p className="text-white/70 text-xs md:text-sm font-light opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {cat.description}
                </p>
                <div className="mt-4 w-10 h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
