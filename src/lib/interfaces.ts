export interface Item {
  id: string;
  category: string;
  imageUrl: string;
  imageUrl2: string;
  title: string;
  estado: string;
  price: string;
  descriptionShort: string;
  descriptionLong: string;
}

export type Category = 'cocina' | 'belleza' | 'hogar' | 'technologia';
