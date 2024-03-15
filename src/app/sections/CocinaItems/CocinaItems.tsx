'use client';

import Image from 'next/image';
import CocinaItem from './CocinaItem';
import { cocinaItemsList } from '@/lib/itemsList';
import ShowMoreButton from '@/components/ShowMoreButton';
import { useCombinedContext } from '@/lib/Context';

const CocinaItems = () => {
  const { itemsToShow } = useCombinedContext();

  // Filter to only include items with a non-empty id
  const validItems = cocinaItemsList.filter((item) => item.id !== '');

  return (
    <section
      id="cocina"
      className="scroll-mt-24 pt-6 background shadow-xl rounded-lg mt-5 md:mr-4"
    >
      {/* CocinaItem */}
      <div className="flex flex-col items-center">
        <h2 className=" font-medium text-4xl sm:text-5xl font-title">
          Productos de Cocina
        </h2>
        {/* cocina image */}
        <div className="relative h-[130px] md:h-[160px] w-[220px]">
          <Image
            src="/chef-isometric.svg"
            alt="kitchen illustration"
            sizes="40vw"
            fill
            className="absolute object-contain"
          />
        </div>
        {/* underline */}
        <div className="relative w-1/2 md:w-1/4 h-1 my-4 ">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        </div>
      </div>
      {validItems.length > 0 ? (
        <>
          <ul>
            {validItems.slice(0, itemsToShow).map((item) => (
              <CocinaItem key={item.id} cocinaItem={item} />
            ))}
          </ul>
          <ShowMoreButton totalItems={validItems.length} />
        </>
      ) : (
        <div className="text-center py-4">
          <p>No hay productos de cocina disponibles en este momento.</p>
        </div>
      )}
    </section>
  );
};
export default CocinaItems;
