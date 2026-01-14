
import { Product, Category, Testimonial, FAQItem } from './types';

export const WHATSAPP_NUMBER = '5524998551077';
export const FIXED_PHONE = '(24) 3401-1077';
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

export const CATEGORIES: Category[] = [
  { id: 'natal', name: 'Natal', description: 'Decoração natalina encantadora.', image: '/IMG-20251224-WA0012.jpg' },
  { id: 'vasos', name: 'Vasos e Arranjos', description: 'Elegância para seus ambientes.', image: '/IMG-20251224-WA0049.jpg' },
  { id: 'esculturas', name: 'Esculturas', description: 'Arte e sofisticação.', image: '/IMG-20251224-WA0026.jpg' },
  { id: 'moveis', name: 'Puffs e Móveis', description: 'Conforto e estilo.', image: '/IMG-20251224-WA0013.jpg' },
  { id: 'almofadas', name: 'Almofadas', description: 'Toque de aconchego.', image: '/IMG-20251224-WA0016.jpg' },
  { id: 'mesa', name: 'Mesa Posta', description: 'Para servir com amor.', image: '/IMG-20251224-WA0029.jpg' },
  { id: 'religioso', name: 'Religiosos', description: 'Fé e devoção.', image: '/IMG-20251224-WA0040.jpg' },
  { id: 'colares', name: 'Colares de Mesa', description: 'Beleza e encanto para sua mesa.', image: '/colares/WhatsApp Image 2026-01-03 at 17.34.43.jpeg' },
];

export const PRODUCTS: Product[] = [
  // Natal
  { id: '12', name: 'Guirlanda Clássica Natalina', category: 'natal', image: '/IMG-20251224-WA0012.jpg', tag: 'Destaque' },
  { id: '32', name: 'Papai Noel de Pano Nórdico', category: 'natal', image: '/IMG-20251224-WA0032.jpg' },
  { id: '33', name: 'Boneco de Neve Decorativo', category: 'natal', image: '/IMG-20251224-WA0033.jpg' },
  { id: '34', name: 'Vila Natalina Dourada', category: 'natal', image: '/IMG-20251224-WA0034.jpg' },
  { id: '35', name: 'Vasinhos Bota com Pássaros', category: 'natal', image: '/IMG-20251224-WA0035.jpg' },
  { id: '36', name: 'Anjo de Porcelana Gold', category: 'natal', image: '/IMG-20251224-WA0036.jpg' },
  { id: '37', name: 'Sagrada Família com Árvore', category: 'natal', image: '/IMG-20251224-WA0037.jpg' },
  { id: '38', name: 'Arranjo Natalino Vermelho', category: 'natal', image: '/IMG-20251224-WA0038.jpg' },
  { id: '39', name: 'Trio Natalino Cerâmica', category: 'natal', image: '/IMG-20251224-WA0039.jpg' },
  { id: '41', name: 'Almofada Urso Noel', category: 'natal', image: '/IMG-20251224-WA0041.jpg' },
  { id: '42', name: 'Papai Noel Sentado', category: 'natal', image: '/IMG-20251224-WA0042.jpg' },
  { id: '43', name: 'Kit Almofada e Pugs Natalinos', category: 'natal', image: '/IMG-20251224-WA0043.jpg' },
  { id: '44', name: 'Vaso Candy Cane', category: 'natal', image: '/IMG-20251224-WA0044.jpg' },
  { id: '45', name: 'Alce Dourado Imperial', category: 'natal', image: '/IMG-20251224-WA0045.jpg' },
  { id: '46', name: 'Vaso Vidro Xadrez', category: 'natal', image: '/IMG-20251224-WA0046.jpg' },
  { id: '47', name: 'Quebra-Nozes e Camelo Gold', category: 'natal', image: '/IMG-20251224-WA0047.jpg' },
  { id: '48', name: 'Árvore de Natal Decorada Luxo', category: 'natal', image: '/IMG-20251224-WA0048.jpg', tag: 'Premium' },

  // Vasos e Arranjos
  { id: '15', name: 'Vaso Marrom com Borla', category: 'vasos', image: '/IMG-20251224-WA0015(1).jpg' },
  { id: '20', name: 'Vaso Branco Texturizado', category: 'vasos', image: '/IMG-20251224-WA0020.jpg' },
  { id: '22', name: 'Trio de Vasos Elegance', category: 'vasos', image: '/IMG-20251224-WA0022.jpg' },
  { id: '25', name: 'Vasos Rústicos com Colares', category: 'vasos', image: '/IMG-20251224-WA0025.jpg' },
  { id: '31', name: 'Orquídea em Vaso Riscado', category: 'vasos', image: '/IMG-20251224-WA0031.jpg' },
  { id: '49', name: 'Orquídea Branca Vaso Âmbar', category: 'vasos', image: '/IMG-20251224-WA0049.jpg' },
  { id: '50', name: 'Orquídea Real Gold', category: 'vasos', image: '/IMG-20251224-WA0050.jpg' },
  { id: '51', name: 'Orquídea Pink Vibrante', category: 'vasos', image: '/IMG-20251224-WA0051.jpg' },
  { id: '52', name: 'Arranjo Flores do Campo', category: 'vasos', image: '/IMG-20251224-WA0052.jpg' },
  { id: '53', name: 'Cesta de Girassóis', category: 'vasos', image: '/IMG-20251224-WA0053.jpg' },
  { id: '54', name: 'Arranjo Misto Primavera', category: 'vasos', image: '/IMG-20251224-WA0054.jpg' },
  { id: '56', name: 'Arranjo Rosas Bronze', category: 'vasos', image: '/IMG-20251224-WA0056.jpg' },
  { id: '57', name: 'Vaso Outonal Âmbar', category: 'vasos', image: '/IMG-20251224-WA0057.jpg' },
  { id: '58', name: 'Vaso Gold Flowers', category: 'vasos', image: '/IMG-20251224-WA0058.jpg' },

  // Esculturas
  { id: '23', name: 'Escultura Pensador', category: 'esculturas', image: '/IMG-20251224-WA0023.jpg' },
  { id: '24', name: 'Escultura Elo e Esferas', category: 'esculturas', image: '/IMG-20251224-WA0024.jpg' },
  { id: '26', name: 'Escultura Abstrata Thinker', category: 'esculturas', image: '/IMG-20251224-WA0026.jpg' },
  { id: '27', name: 'Escultura Menina e Pássaros', category: 'esculturas', image: '/IMG-20251224-WA0027.jpg' },

  // Móveis e Puffs
  { id: '13', name: 'Puff Bege com Colar de Mesa', category: 'moveis', image: '/IMG-20251224-WA0013.jpg' },
  { id: '14', name: 'Puff Veludo Terracota', category: 'moveis', image: '/IMG-20251224-WA0014.jpg' },

  // Almofadas
  { id: '16', name: 'Dupla Almofadas Textura', category: 'almofadas', image: '/IMG-20251224-WA0016.jpg' },
  { id: '19', name: 'Almofada Azul Mandala', category: 'almofadas', image: '/IMG-20251224-WA0019.jpg' },

  // Mesa Posta
  { id: '29', name: 'Travessas Comida Boa', category: 'mesa', image: '/IMG-20251224-WA0029.jpg' },
  { id: '30', name: 'Travessas Cozinhar é Amor', category: 'mesa', image: '/IMG-20251224-WA0030.jpg' },

  // Colares
  { id: '18', name: 'Colares de Mesa Madeira', category: 'esculturas', image: '/IMG-20251224-WA0018.jpg' },

  // Religiosos
  { id: '40', name: 'Coleção Sagrada Família e Anjos', category: 'religioso', image: '/IMG-20251224-WA0040.jpg' },
  // Colares (Novos)
  { id: '100', name: 'Elo Colonial Madeira', category: 'colares', image: '/colares/WhatsApp Image 2026-01-03 at 17.34.43 (1).jpeg' },
  { id: '101', name: 'Peixe Náutico Shell', category: 'colares', image: '/colares/WhatsApp Image 2026-01-03 at 17.34.43.jpeg' },
  { id: '102', name: 'Oceano Starfish White', category: 'colares', image: '/colares/WhatsApp Image 2026-01-03 at 17.34.44 (1).jpeg' },
  { id: '103', name: 'Geométrico Tribal Wood', category: 'colares', image: '/colares/WhatsApp Image 2026-01-03 at 17.34.44 (2).jpeg' },
  { id: '104', name: 'Raízes Kraft Natural', category: 'colares', image: '/colares/WhatsApp Image 2026-01-03 at 17.34.44 (3).jpeg' },
  { id: '106', name: 'Tassel Terracota Ouro', category: 'colares', image: '/colares/WhatsApp Image 2026-01-03 at 17.34.45 (1).jpeg' },
  { id: '107', name: 'Borboleta Âmbar Metal', category: 'colares', image: '/colares/WhatsApp Image 2026-01-03 at 17.34.45 (2).jpeg' },
  { id: '108', name: 'Infinito Zen Negro', category: 'colares', image: '/colares/WhatsApp Image 2026-01-03 at 17.34.45 (3).jpeg' },
  { id: '109', name: 'Harmonia Musical Wood', category: 'colares', image: '/colares/WhatsApp Image 2026-01-03 at 17.34.45.jpeg' },
  { id: '110', name: 'Disco Gráfico Contrast', category: 'colares', image: '/colares/WhatsApp Image 2026-01-03 at 17.34.46 (1).jpeg' },
  { id: '111', name: 'Rosa Negra Off-white', category: 'colares', image: '/colares/WhatsApp Image 2026-01-03 at 17.34.46 (2).jpeg' },
  { id: '112', name: 'Festivo Natal Prime', category: 'colares', image: '/colares/WhatsApp Image 2026-01-03 at 17.34.46 (3).jpeg' },
  { id: '113', name: 'Dual Noir Contrast', category: 'colares', image: '/colares/WhatsApp Image 2026-01-03 at 17.34.46.jpeg' },
  { id: '114', name: 'Natalino Star & Tree', category: 'colares', image: '/colares/WhatsApp Image 2026-01-03 at 17.34.47 (1).jpeg' },
  { id: '115', name: 'Gala Marinho Gold', category: 'colares', image: '/colares/WhatsApp Image 2026-01-03 at 17.34.47 (2).jpeg' },
  { id: '116', name: 'Papai Noel Classic', category: 'colares', image: '/colares/WhatsApp Image 2026-01-03 at 17.34.47.jpeg' },
  { id: '117', name: 'Coração Suspenso Wood', category: 'colares', image: '/colares/WhatsApp Image 2026-01-03 at 17.34.48 (1).jpeg' },
  // Removed duplicates (IDs 118-128)
  { id: '129', name: 'Esculpido Marsala Duo', category: 'colares', image: '/colares/WhatsApp Image 2026-01-03 at 17.34.50.jpeg' },
  { id: '130', name: 'Marfim Étnico Dark', category: 'colares', image: '/colares/WhatsApp Image 2026-01-03 at 17.34.51 (1).jpeg' },
  { id: '131', name: 'Triângulo Boho Terroso', category: 'colares', image: '/colares/WhatsApp Image 2026-01-03 at 17.34.51 (2).jpeg' },
  { id: '132', name: 'Cordão Equilíbrio', category: 'colares', image: '/colares/WhatsApp Image 2026-01-03 at 17.34.51 (3).jpeg' },
  { id: '133', name: 'Colar Terra Molhada', category: 'colares', image: '/colares/WhatsApp Image 2026-01-03 at 17.34.51.jpeg' },
  { id: '134', name: 'Elo Sofisticação', category: 'colares', image: '/colares/WhatsApp Image 2026-01-03 at 17.34.52 (1).jpeg' },
  { id: '135', name: 'Colar Artesanal Premium', category: 'colares', image: '/colares/WhatsApp Image 2026-01-03 at 17.34.52 (2).jpeg' },
  { id: '136', name: 'Cordão Beleza Pura', category: 'colares', image: '/colares/WhatsApp Image 2026-01-03 at 17.34.52 (3).jpeg' },
  { id: '137', name: 'Colar Magia da Ilha', category: 'colares', image: '/colares/WhatsApp Image 2026-01-03 at 17.34.52.jpeg' },
  { id: '138', name: 'Elo Rústico Clean', category: 'colares', image: '/colares/WhatsApp Image 2026-01-03 at 17.34.53 (1).jpeg' },
  { id: '139', name: 'Colar Madeira Clara', category: 'colares', image: '/colares/WhatsApp Image 2026-01-03 at 17.34.53 (2).jpeg' },
  { id: '140', name: 'Cordão Inspiração', category: 'colares', image: '/colares/WhatsApp Image 2026-01-03 at 17.34.53.jpeg' },
  { id: '141', name: 'Colar Madeira Imperial', category: 'colares', image: '/colares/WhatsApp Image 2026-01-03 at 17.34.54 (1).jpeg' },
  { id: '142', name: 'Elo Design Exclusivo', category: 'colares', image: '/colares/WhatsApp Image 2026-01-03 at 17.34.54 (2).jpeg' },
  { id: '143', name: 'Colar Charme Rústico', category: 'colares', image: '/colares/WhatsApp Image 2026-01-03 at 17.34.54 (3).jpeg' },
  { id: '144', name: 'Cordão Elegância', category: 'colares', image: '/colares/WhatsApp Image 2026-01-03 at 17.34.54.jpeg' },
  { id: '145', name: 'Colar Madeira Crua', category: 'colares', image: '/colares/WhatsApp Image 2026-01-03 at 17.34.55 (1).jpeg' },
  { id: '146', name: 'Elo Natureza Viva', category: 'colares', image: '/colares/WhatsApp Image 2026-01-03 at 17.34.55 (2).jpeg' },
  { id: '147', name: 'Colar Rústico Moderno', category: 'colares', image: '/colares/WhatsApp Image 2026-01-03 at 17.34.55 (3).jpeg' },
  { id: '148', name: 'Cordão Detalhes', category: 'colares', image: '/colares/WhatsApp Image 2026-01-03 at 17.34.55.jpeg' },
  { id: '149', name: 'Colar Madeira e Resina', category: 'colares', image: '/colares/WhatsApp Image 2026-01-03 at 17.34.56 (1).jpeg' },
  { id: '150', name: 'Elo Conexão Natural', category: 'colares', image: '/colares/WhatsApp Image 2026-01-03 at 17.34.56 (2).jpeg' },
  { id: '151', name: 'Colar Essencial', category: 'colares', image: '/colares/WhatsApp Image 2026-01-03 at 17.34.56 (3).jpeg' },
  { id: '152', name: 'Cordão Raízes', category: 'colares', image: '/colares/WhatsApp Image 2026-01-03 at 17.34.56.jpeg' },
  { id: '153', name: 'Colar Madeira e Corda', category: 'colares', image: '/colares/WhatsApp Image 2026-01-03 at 17.34.57 (1).jpeg' },
  { id: '154', name: 'Elo Simplicidade', category: 'colares', image: '/colares/WhatsApp Image 2026-01-03 at 17.34.57 (2).jpeg' },
  { id: '155', name: 'Colar Toque de Mestre', category: 'colares', image: '/colares/WhatsApp Image 2026-01-03 at 17.34.57.jpeg' },
  { id: '156', name: 'Cordão Harmonia', category: 'colares', image: '/colares/WhatsApp Image 2026-01-03 at 17.34.58 (1).jpeg' },
  { id: '157', name: 'Colar Finalização Perfeita', category: 'colares', image: '/colares/WhatsApp Image 2026-01-03 at 17.34.58.jpeg' },
];

export const TESTIMONIALS: Testimonial[] = [
  { id: '1', name: 'Mariana Silva', rating: 5, text: 'As peças são ainda mais lindas pessoalmente! A embalagem veio impecável.', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150' },
  { id: '2', name: 'Ricardo Santos', rating: 5, text: 'Excelente atendimento via WhatsApp. Me ajudaram a escolher o presente ideal.', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150' },
  { id: '3', name: 'Beatriz Costa', rating: 4, text: 'Sofisticação resume. Minha sala ficou outra depois dos vasos que comprei.', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150' },
];

export const FAQ: FAQItem[] = [
  { question: 'Vocês enviam para todo o Brasil?', answer: 'Sim! Enviamos para todos os estados brasileiros com embalagens ultra seguras para garantir que suas peças cheguem impecáveis.' },
  { question: 'Como faço para comprar?', answer: 'Você pode escolher seus produtos aqui no site e clicar no botão de WhatsApp. Nossa equipe finalizará seu pedido de forma personalizada.' },
  { question: 'Quais as formas de pagamento?', answer: 'Aceitamos PIX, cartões de crédito (com parcelamento) e boleto bancário.' },
];
