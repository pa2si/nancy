import CocinaItem from './CocinaItem';
import { cocinaItemsList } from '@/lib/itemsList';
import Image from 'next/image';

const CocinaItems = () => {
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
        {/* kitchen image */}
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
      {cocinaItemsList.length > 0 ? (
        <ul>
          {cocinaItemsList.map((item) => (
            <CocinaItem key={item.id} cocinaItem={item} />
          ))}
        </ul>
      ) : (
        <div className="text-center py-4">
          <p className="px-6 sm:px-0">
            No hay productos de cocina disponibles en este momento.
          </p>
        </div>
      )}
    </section>
  );
};
export default CocinaItems;
