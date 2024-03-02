import Image from 'next/image';
import { BellezaItems } from './data';
import Link from 'next/link';

interface BellezaItemProps {
  bellezaItem: BellezaItems;
}

const BellezaItem: React.FC<BellezaItemProps> = ({ bellezaItem }) => {
  const singleItemUrl = `/${bellezaItem.id}`;

  return (
    <Link href={singleItemUrl}>
      <li className="grid grid-cols-2 lg:grid-cols-4 border border-gray-300 shadow-sm hover:bg-gray-50 transition-all duration-100 ease-in-out">
        {/* image */}
        <div className="relative h-[150px] w-3/4 lg:col-start-2 lg:col-end-3 my-auto">
          <Image
            src={bellezaItem.imageUrl}
            alt={bellezaItem.alt}
            sizes="50vw"
            fill
            className="absolute object-contain p-2"
          />
        </div>
        {/* description */}
        <div>
          <div className="p-4">
            <h3 className="-mb-1">{bellezaItem.title}</h3>
            <p className="italic text-gray-600">{bellezaItem.estado}</p>
            <h4>${bellezaItem.price}</h4>{' '}
            {/* Note: Ensure the price is displayed correctly */}
            <p className="text-gray-900">{bellezaItem.descriptionShort}</p>
          </div>
        </div>
      </li>
    </Link>
  );
};
export default BellezaItem;
