export interface BellezaItems {
  id: string;
  imageUrl: string;
  title: string;
  alt: string;
  estado: string;
  price: number;
  descriptionShort: string;
  descriptionLong: string;
}

export const bellezaItemsList: BellezaItems[] = [
  {
    id: '1',
    imageUrl:
      'https://res.cloudinary.com/dkc3ohnkh/image/upload/v1709253453/nancy/1_eqqsiv.jpg',
    title: 'tasa',
    alt: 'tasa',
    estado: 'usado',
    price: 12,
    descriptionShort: 'viene con 6 tasas de colores',
    descriptionLong:
      'viene con 6 tasas de colores bonitos. Esta en perfecto estado',
  },
  {
    id: '2',
    imageUrl:
      'https://res.cloudinary.com/dkc3ohnkh/image/upload/v1709253456/nancy/4_qbrmzt.jpg',
    title: 'vasos',
    alt: 'vasos',
    estado: 'nuevo',
    price: 180,
    descriptionShort: '6 vasos',
    descriptionLong: '',
  },
  {
    id: '3',
    imageUrl:
      'https://res.cloudinary.com/dkc3ohnkh/image/upload/v1709253455/nancy/2_mik7tg.jpg',
    title: 'vase',
    alt: 'vase',
    estado: 'usado',
    price: 120,
    descriptionShort: '6 vasos',
    descriptionLong: '',
  },
  {
    id: '4',
    imageUrl:
      'https://res.cloudinary.com/dkc3ohnkh/image/upload/v1709253455/nancy/3_hk70fp.jpg',
    title: 'botella',
    alt: 'botella',
    estado: 'usado',
    price: 10,
    descriptionShort: '6 vasos',
    descriptionLong: '',
  },
];
