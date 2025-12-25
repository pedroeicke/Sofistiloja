
export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  tag?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  avatar: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
