export interface User {
  id: number;
  username: string;
  email: string;
  role: 'user' | 'admin';
  avatar?: string;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  accent: string;
  description: string;
  tagline?: string;
  specs?: {
    processor?: string;
    display?: string;
    battery?: string;
    weight?: string;
    connectivity?: string;
  };
  features?: string[];
  rating?: number;
  ratingCount?: number;
}

export interface Review {
  id: number;
  productId: number;
  userId?: number;
  username: string;
  body: string;
  rating?: number;
  date?: string;
}

export interface OrderItem {
  productId: number;
  product?: Product;
  quantity: number;
  price?: number;
}

export interface Order {
  id: number;
  userId: number;
  items: OrderItem[];
  total: number;
  status: 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
  address: string;
  date: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface VulnerabilityInfo {
  id: number;
  name: string;
  area: string;
  route: string;
  description: string;
  burpSteps: string[];
  remediation: string;
}
