export interface CocinaItems {
  id: string;
  imageUrl: string;
  title: string;
  alt: string;
  estado: string;
  price: number;
  descriptionShort: string;
  descriptionLong: string;
}

export const cocinaItemsList: CocinaItems[] = [
  {
    id: '1',
    imageUrl:
      'https://res.cloudinary.com/dkc3ohnkh/image/upload/v1709446879/nancy/1_ount90.png',
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
      'https://res.cloudinary.com/dkc3ohnkh/image/upload/v1709446886/nancy/2_c2kf7f.png',
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
      'https://res.cloudinary.com/dkc3ohnkh/image/upload/v1709446893/nancy/3_nvxm6i.png',
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
      'https://res.cloudinary.com/dkc3ohnkh/image/upload/v1709446900/nancy/4_zmfvpz.png',
    title: 'botella',
    alt: 'botella',
    estado: 'usado',
    price: 10,
    descriptionShort: '6 vasos',
    descriptionLong: '',
  },
];
