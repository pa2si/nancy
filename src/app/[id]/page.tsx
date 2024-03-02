'use client';

import Link from 'next/link';
import { cocinaItemsList, CocinaItems } from '../sections/CocinaItems/data'; // Adjust the import path as needed
import Image from 'next/image';
import { FaArrowLeft } from 'react-icons/fa';

interface ItemDetailPageProps {
  params: {
    id: string; // Define the expected structure of `params`
  };
}

export default function ItemDetailPage({ params }: ItemDetailPageProps) {
  // Destructure the `id` directly from params
  const { id } = params;

  // Find the item in your data list
  const item = cocinaItemsList.find((item: CocinaItems) => item.id === id);

  if (!item) {
    return <div>Item not found</div>;
  }

  const descriptionToShow =
    item.descriptionLong !== '' ? item.descriptionLong : item.descriptionShort;

  return (
    <div className="max-w-sm md:max-w-4xl  mx-auto h-screen grid grid-row pt-8 ">
      <article className="flex flex-col bg-gray-50 rounded-md ">
        <div className="shadow-xl flex-grow rounded-lg overflow-hidden flex flex-col justify-between">
          <div>
            <div className="relative w-full h-64 mt-8">
              <Image
                src={item.imageUrl}
                alt={item.alt}
                sizes="(max-width: 768px) 75vw, 33vw"
                fill
                className="absolute object-contain"
              />
            </div>
            <div className="px-4 pt-10 md:px-12">
              <h1 className="text-3xl font-bold mb-2 border-t pt-4">
                {item.title}
              </h1>
              <p className="italic text-gray-600">{item.estado}</p>
              <h2 className="text-xl font-semibold my-2">${item.price}</h2>
              <p className="text-gray-700">{descriptionToShow}</p>
            </div>
          </div>
          <div>
            <div className="flex items-center px-3 mt-1 md:px-10">
              {' '}
              {/* Contact information */}
              <Image
                src="/icons8-whatsapp.svg"
                alt="logo"
                width={40}
                height={40}
              ></Image>
              <a href="tel:+13183903665" className="text-lg">
                318 390 3665
              </a>
            </div>
          </div>
        </div>
      </article>
      {/* Back Button */}
      <div className="flex flex-row items-center">
        <Link href="/">
          <div className="flex items-center bg-blue-500 hover:bg-blue-700 text-white justify-center font-bold py-2 px-4 rounded transition-all duration-200 ease-in-out">
            <FaArrowLeft />
            <p className="ml-2">atrás</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
