export interface Product {
    _id: string;
    title: string;
    productImage: string;
    price: number;
    dicountPercentage: number;
    discountedPrice: number;
    tags?: string[]; 
    description: string;
    isNew?: boolean;
    quantity: number
  }
 
  