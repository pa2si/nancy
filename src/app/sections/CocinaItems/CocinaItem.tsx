import Image from 'next/image';
import { CocinaItems } from './data';
import Link from 'next/link';

interface CocinaItemProps {
  cocinaItem: CocinaItems;
}

const CocinaItem: React.FC<CocinaItemProps> = ({ cocinaItem }) => {
  const singleItemUrl = `/${cocinaItem.id}`;

  return (
    <Link href={singleItemUrl}>
      <li className="grid grid-cols-2 border border-gray-300 shadow-sm hover:bg-gray-50 transition-all duration-100 ease-in-out">
        {/* image */}
        <div className="relative h-[150px] w-3/4  my-auto">
          <Image
            src={cocinaItem.imageUrl}
            alt={cocinaItem.alt}
            sizes="50vw"
            fill
            className="absolute object-contain p-2"
          />
        </div>
        {/* description */}
        <div>
          <div className="p-4">
            <h3 className="-mb-1">{cocinaItem.title}</h3>
            <p className="italic text-gray-600">{cocinaItem.estado}</p>
            <h4>${cocinaItem.price}</h4>{' '}
            {/* Note: Ensure the price is displayed correctly */}
            <p className="text-gray-900">{cocinaItem.descriptionShort}</p>
          </div>
        </div>
      </li>
    </Link>
  );
};
export default CocinaItem;
