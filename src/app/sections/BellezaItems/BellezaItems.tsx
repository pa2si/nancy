import BellezaItem from './BellezaItem';
import { bellezaItemsList } from '@/lib/itemsList';
import Image from 'next/image';

const BellezaItems = () => {
  const validItems = bellezaItemsList.filter((item) => item.id !== '');

  return (
    <section
      id="belleza"
      className="scroll-mt-24 pt-6 background shadow-xl rounded-lg mt-5 md:mr-4"
    >
      {/* CocinaItem */}
      <div className="flex flex-col items-center ">
        <h2 className=" font-medium text-4xl sm:text-5xl font-title ">
          Productos de Belleza
        </h2>
        {/* kitchen image */}
        <div className="relative h-[150px] w-[150px] md:h-[200px] md:w-[180px]">
          <Image
            src="/undraw_makeup_artist_rxn8.svg"
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
        <ul>
          {validItems.map((item) => (
            <BellezaItem key={item.id} bellezaItem={item} />
          ))}
        </ul>
      ) : (
        <div className="text-center py-4">
          <p className="px-6 sm:px-0">
            No hay productos de belleza disponibles en este momento.
          </p>
        </div>
      )}
    </section>
  );
};
export default BellezaItems;
