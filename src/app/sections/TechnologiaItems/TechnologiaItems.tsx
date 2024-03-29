'use client';

import Image from 'next/image';
import TechnologiaItem from './TechnicaItem';
import { technologiaItemsList } from '@/lib/itemsList';
import ShowMoreButton from '@/components/ShowMoreButton';
import { useCombinedContext } from '@/lib/Context';

const TechnologiaItems = () => {
  const { itemsToShow } = useCombinedContext();

  // Filter to only include items with a non-empty id
  const validItems = technologiaItemsList.filter((item) => item.id !== '');

  return (
    <section
      id="technologia"
      className="scroll-mt-24 pt-6 background shadow-xl rounded-lg md:mr-4"
    >
      {/* CocinaItem */}
      <div className="flex flex-col items-center">
        <h2 className=" font-medium text-4xl sm:text-5xl font-title">
          Productos de Technologia
        </h2>
        {/* kitchen image */}
        <div className="relative h-[140px] w-[130px] md:h-[160px] md:w-[140px]">
          <Image
            src="/data-process-monochromatic.svg"
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
              <TechnologiaItem key={item.id} technologiaItem={item} />
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
export default TechnologiaItems;
