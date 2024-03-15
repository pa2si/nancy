import Image from 'next/image';
import { Item } from '@/lib/interfaces';
import Link from 'next/link';

interface CocinaItemProps {
  cocinaItem: Item;
}

const CocinaItem: React.FC<CocinaItemProps> = ({ cocinaItem }) => {
  const singleItemUrl = `/item/${cocinaItem.category}/${cocinaItem.id}`;

  return (
    <Link href={singleItemUrl}>
      <li className="grid grid-cols-2 bg-neutral-50 bg-opacity-50  border border-gray-300 shadow-sm hover:bg-slate-50 transition-all duration-100 ease-in-out rounded-md">
        {/* image */}
        <div className="relative h-[150px] w-3/4 my-auto">
          <Image
            src={cocinaItem.imageUrl}
            alt={`foto de ${cocinaItem.title}`}
            sizes="20vw"
            fill
            className="absolute object-contain p-2"
          />
        </div>
        {/* description */}
        <div className="p-4">
          <h3 className="-mb-1">{cocinaItem.title}</h3>
          <p className="italic text-gray-600">{cocinaItem.estado}</p>
          {cocinaItem.price && <h4>${cocinaItem.price}</h4>}
          {/* Note: Ensure the price is displayed correctly */}
          <p className="text-gray-900 mt-1">{cocinaItem.descriptionShort}</p>
        </div>
      </li>
    </Link>
  );
};
export default CocinaItem;
