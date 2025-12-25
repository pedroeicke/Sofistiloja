
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQ } from '../constants.tsx';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">Dúvidas Frequentes</h2>
            <p className="text-gray-500">Tudo o que você precisa saber sobre nossa entrega, produtos e atendimento.</p>
          </div>

          <div className="space-y-4">
            {FAQ.map((item, idx) => (
              <div 
                key={idx} 
                className={`bg-white rounded-3xl overflow-hidden border transition-all duration-300 ${
                  openIndex === idx ? 'border-gold shadow-lg shadow-gold/5' : 'border-gray-100 hover:border-gray-300'
                }`}
              >
                <button 
                  className="w-full px-8 py-6 flex justify-between items-center text-left"
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                >
                  <span className={`text-lg font-bold transition-colors ${openIndex === idx ? 'text-gold' : 'text-black'}`}>
                    {item.question}
                  </span>
                  {openIndex === idx ? <ChevronUp size={24} className="text-gold" /> : <ChevronDown size={24} className="text-gray-300" />}
                </button>
                
                <div 
                  className={`px-8 overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === idx ? 'max-h-96 pb-8 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed font-light">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
