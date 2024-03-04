import CocinaItem from './CocinaItem';
import { cocinaItemsList } from '@/lib/itemsList';
import Image from 'next/image';

const CocinaItems = () => {
  return (
    <section
      id="cocina"
      className="scroll-mt-24 pt-6 background shadow-xl rounded-lg mt-4 md:mr-4"
    >
      {/* CocinaItem */}
      <div className="flex flex-col items-center">
        <h2 className=" font-medium text-4xl sm:text-5xl font-title">
          Productos de Cocina
        </h2>
        {/* kitchen image */}
        <div className="relative h-[150px] md:h-[200px] w-[250px]">
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
      <ul>
        {cocinaItemsList.map((item) => (
          <CocinaItem key={item.id} cocinaItem={item} />
        ))}
      </ul>
    </section>
  );
};
export default CocinaItems;
