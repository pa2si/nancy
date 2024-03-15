import Image from 'next/image';
import { Item } from '@/lib/interfaces';
import Link from 'next/link';

interface HogarItemProps {
  hogarItem: Item;
}

const HogarItem: React.FC<HogarItemProps> = ({ hogarItem }) => {
  const singleItemUrl = `/item/${hogarItem.category}/${hogarItem.id}`;

  return (
    <Link href={singleItemUrl}>
      <li className="grid grid-cols-2 bg-neutral-50 bg-opacity-50  border border-gray-300 shadow-sm hover:bg-slate-50 transition-all duration-100 ease-in-out rounded-md">
        {/* image */}
        <div className="relative h-[150px] w-3/4 my-auto">
          <Image
            src={hogarItem.imageUrl}
            alt={`foto de ${hogarItem.title}`}
            sizes="20vw"
            fill
            className="absolute object-contain p-2"
          />
        </div>
        {/* description */}

        <div className="p-4">
          <h3 className="-mb-1">{hogarItem.title}</h3>
          <p className="italic text-gray-600">{hogarItem.estado}</p>
          {hogarItem.price && <h4>${hogarItem.price}</h4>}
          {/* Note: Ensure the price is displayed correctly */}
          <p className="text-gray-900  mt-1">{hogarItem.descriptionShort}</p>
        </div>
      </li>
    </Link>
  );
};
export default HogarItem;
