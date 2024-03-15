'use client';

import Image from 'next/image';
import HogarItem from './HogarItem';
import { hogarItemsList } from '@/lib/itemsList';
import ShowMoreButton from '@/components/ShowMoreButton';
import { useCombinedContext } from '@/lib/Context';

const HogarItems = () => {
  const { itemsToShow } = useCombinedContext();

  // Filter to only include items with a non-empty id
  const validItems = hogarItemsList.filter((item) => item.id !== '');

  return (
    <section
      id="hogar"
      className="scroll-mt-24 pt-6 background shadow-xl rounded-lg mt-5 md:mr-4"
    >
      {/* HogarItems */}
      <div className="flex flex-col items-center">
        <h2 className=" font-medium text-4xl sm:text-5xl font-title">
          Productos de Hogar
        </h2>
        {/* hogar image */}
        <div className="relative h-[160px] w-[125px] md:h-[175px] md:w-[220px]">
          <Image
            src="/undraw_cabin_hkfr.svg"
            alt="kitchen illustration"
            sizes="20vw"
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
              <HogarItem key={item.id} hogarItem={item} />
            ))}
          </ul>
          <ShowMoreButton totalItems={validItems.length} />
        </>
      ) : (
        <div className="text-center py-4">
          <p className="px-6 sm:px-0">
            No hay productos de hogar disponibles en este momento.
          </p>
        </div>
      )}
    </section>
  );
};
export default HogarItems;
