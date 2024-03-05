'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  cocinaItemsList,
  bellezaItemsList,
  hogarItemsList,
  technologiaItemsList,
} from '@/lib/itemsList'; // Adjust the import path as needed
import Image from 'next/image';
import { FaArrowLeft } from 'react-icons/fa';
import { Item, Category } from '@/lib/interfaces';
import { ParsedUrlQuery } from 'querystring';
import { Button } from '@/components/ui/button';
import { useGlobalContext } from '@/utils/context';
import ImageModal from './ImageModal';

interface Params extends ParsedUrlQuery {
  id: string;
  category: Category;
}

interface ItemDetailPageProps {
  params: Params;
}

// export async function generateStaticParams() {
//   const allItems = [...cocinaItemsList, ...bellezaItemsList];
//   return allItems.map((item) => ({
//     category: item.category,
//     id: item.id,
//   }));
// }

export default function ItemDetailPage({ params }: ItemDetailPageProps) {
  const { category, id } = params;
  const { openImageModal } = useGlobalContext();

  let itemsList: Item[]; // Assuming your items have a common type Item[]
  switch (category) {
    case 'cocina':
      itemsList = cocinaItemsList;
      break;
    case 'belleza':
      itemsList = bellezaItemsList;
      break;
    case 'hogar':
      itemsList = hogarItemsList;
      break;
    case 'technologia':
      itemsList = technologiaItemsList;
      break;
    default:
      // Handle the case where the category doesn't match any of the known categories
      console.error('Error: Category not found for category:', category);
      itemsList = []; // Assigning an empty array as a fallback
  }
  const item = itemsList.find((item: Item) => item.id === id);
  const [currentImage, setCurrentImage] = useState(item?.imageUrl || '');

  if (!item) {
    console.error('Error: Item not found for id:', params.id);
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        Oops...Item not found
      </div>
    );
  }

  // Event handlers for buttons
  const handleImageChange = (imageUrl: string) => {
    setCurrentImage(imageUrl);
  };

  const handleImageClick = (imageUrl: string) => {
    openImageModal(imageUrl);
  };

  const descriptionToShow =
    item.descriptionLong !== '' ? item.descriptionLong : item.descriptionShort;

  return (
    <div className="max-w-sm md:max-w-4xl  mx-auto h-svh grid grid-row pt-8 ">
      <article className="flex flex-col bg-gray-50 rounded-md ">
        <div className="shadow-xl flex-grow rounded-lg overflow-hidden flex flex-col justify-between">
          <div className="flex flex-col">
            {/* Image */}
            <div
              className="relative w-full h-56 mt-8 cursor-pointer"
              onClick={() => handleImageClick(currentImage)}
            >
              <Image
                src={currentImage}
                alt={item.alt}
                sizes="(max-width: 768px) 75vw, 33vw"
                fill
                className="absolute object-contain"
                priority
              />
            </div>
            {item.imageUrl2 && (
              <div className="flex justify-center gap-8 mt-8">
                <Button
                  className="text-center w-8 h-8 bg-cyan-500 hover:bg-cyan-700"
                  onClick={() => handleImageChange(item.imageUrl)}
                >
                  1
                </Button>
                <Button
                  className="text-center w-8 h-8 bg-cyan-500 hover:bg-cyan-700"
                  onClick={() => handleImageChange(item.imageUrl2)}
                >
                  2
                </Button>
              </div>
            )}

            <div className="px-4 pt-10 md:px-12">
              <h1 className="text-3xl font-bold mb-2 border-t pt-4">
                {item.title}
              </h1>
              <p className="italic text-gray-600">{item.estado}</p>
              {item.price && (
                <h2 className="text-xl font-semibold my-2">${item.price}</h2>
              )}
              <p className="text-gray-700 text-lg mt-4">{descriptionToShow}</p>
            </div>
          </div>
          <div>
            <div className="flex items-center px-3 mb-2 md:px-10">
              {/* Contact information */}
              <Image
                src="/icons8-whatsapp.svg"
                alt="logo"
                width={40}
                height={40}
              />
              <a href="tel:3183903665" className="text-lg">
                318 390 3665
              </a>
            </div>
          </div>
        </div>
      </article>
      {/* Back Button */}
      <div className="flex flex-row items-center">
        <Link href="/">
          <div className="flex items-center bg-cyan-500 hover:bg-cyan-400 text-white justify-center font-bold py-2 px-4 ml-2 rounded transition-all duration-200 ease-in-out">
            <FaArrowLeft />
            <p className="ml-2">atrás</p>
          </div>
        </Link>
      </div>
      <ImageModal />
    </div>
  );
}
