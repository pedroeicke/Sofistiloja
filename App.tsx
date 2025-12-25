
import React, { useState, useEffect } from 'react';
import {
  Truck,
  Gift,
  UserCheck
} from 'lucide-react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Categories from './components/Categories.tsx';
import ProductGrid from './components/ProductGrid.tsx';
import Features from './components/Features.tsx';
import Gallery from './components/Gallery.tsx';
import Testimonials from './components/Testimonials.tsx';
import HowToBuy from './components/HowToBuy.tsx';
import FAQSection from './components/FAQ.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import WhatsAppButton from './components/WhatsAppButton.tsx';

import { PRODUCTS as INITIAL_PRODUCTS } from './constants.tsx';
import { Product } from './types.ts';

type View = 'home' | 'catalog';

const App: React.FC = () => {
  const [view, setView] = useState<View>('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [products] = useState<Product[]>(INITIAL_PRODUCTS);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToCatalog = (categoryId: string = 'all') => {
    setActiveCategory(categoryId);
    setView('catalog');
    window.scrollTo(0, 0);
  };

  const navigateToHome = () => {
    setView('home');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#D4AF37] selection:text-white">
      <div className="fixed top-0 left-0 w-full h-8 md:h-10 bg-black text-white text-[10px] md:text-xs px-4 flex justify-between items-center font-medium tracking-wider uppercase z-[60]">
        <div className="flex items-center gap-2 md:gap-4">
          <span className="flex items-center gap-1"><Truck size={14} className="text-gold" /> Enviamos para todo Brasil</span>
          <span className="hidden md:flex items-center gap-1"><Gift size={14} className="text-gold" /> Embalagens Premium</span>
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <span className="flex items-center gap-1"><UserCheck size={14} className="text-gold" /> Atendimento VIP</span>
        </div>
      </div>

      <Header
        isScrolled={isScrolled}
        currentView={view}
        onNavigateHome={navigateToHome}
        onNavigateCatalog={() => navigateToCatalog('all')}
      />

      <main>
        {view === 'home' ? (
          <>
            <Hero onShowProducts={() => navigateToCatalog('all')} />
            <Categories onSelectCategory={navigateToCatalog} />
            <ProductGrid
              activeCategory="all"
              onCategoryChange={setActiveCategory}
              isFullPage={false}
              onNavigateToCatalog={() => navigateToCatalog('all')}
              products={products}
            />
            <Features />
            <Gallery />
            <Testimonials />
            <HowToBuy />
            <FAQSection />
            <Contact />
          </>
        ) : (
          <div className="pt-32 pb-24 min-h-screen">
            <div className="container mx-auto px-4">
              <ProductGrid
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
                isFullPage={true}
                products={products}
              />
            </div>
            <Contact />
          </div>
        )}
      </main>



      <Footer onNavigateHome={navigateToHome} onNavigateCatalog={() => navigateToCatalog('all')} />
      <WhatsAppButton />
    </div>
  );
};

export default App;
