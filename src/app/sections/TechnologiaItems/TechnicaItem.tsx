import Image from 'next/image';
import { Item } from '@/lib/interfaces';
import Link from 'next/link';

interface TechnologiaItemProps {
  technologiaItem: Item;
}

const TechnologiaItem: React.FC<TechnologiaItemProps> = ({
  technologiaItem,
}) => {
  const singleItemUrl = `/item/${technologiaItem.category}/${technologiaItem.id}`;

  return (
    <Link href={singleItemUrl}>
      <li className="grid grid-cols-2 border border-gray-300 shadow-sm hover:bg-gray-50 transition-all duration-100 ease-in-out">
        {/* image */}
        <div className="relative h-[150px] w-3/4 my-auto">
          <Image
            src={technologiaItem.imageUrl}
            alt={technologiaItem.alt}
            sizes="50vw"
            fill
            className="absolute object-contain p-2"
          />
        </div>
        {/* description */}

        <div className="p-4">
          <h3 className="-mb-1">{technologiaItem.title}</h3>
          <p className="italic text-gray-600">{technologiaItem.estado}</p>
          {technologiaItem.price && <h4>${technologiaItem.price}</h4>}
          {/* Note: Ensure the price is displayed correctly */}
          <p className="text-gray-900 mt-1">
            {technologiaItem.descriptionShort}
          </p>
        </div>
      </li>
    </Link>
  );
};
export default TechnologiaItem;
