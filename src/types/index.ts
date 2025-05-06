
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  stock: number;
  featured?: boolean;
  bestSeller?: boolean;
  discountPercentage?: number;
  rating?: number;
  secret?: string;
}
