import Image from 'next/image';
import { Item } from '@/lib/interfaces';
import Link from 'next/link';

interface BellezaItemProps {
  bellezaItem: Item;
}

const BellezaItem: React.FC<BellezaItemProps> = ({ bellezaItem }) => {
  const singleItemUrl = `/item/${bellezaItem.category}/${bellezaItem.id}`;

  return (
    <Link href={singleItemUrl}>
      <li className="grid grid-cols-2 border border-gray-300 rounded-md bg-neutral-50 bg-opacity-50 shadow-sm hover:bg-slate-50 transition-all duration-100 ease-in-out">
        {/* image */}
        <div className="relative h-[150px] w-3/4 my-auto ">
          <Image
            src={bellezaItem.imageUrl}
            alt={`foto de ${bellezaItem.title}`}
            sizes="20vw"
            fill
            className="absolute object-contain p-2"
          />
        </div>
        {/* description */}
        <div className="p-4">
          <h3 className="-mb-1">{bellezaItem.title}</h3>
          <p className="italic text-gray-600">{bellezaItem.estado}</p>
          {bellezaItem.price && <h4>${bellezaItem.price}</h4>}
          {/* Note: Ensure the price is displayed correctly */}
          <p className="text-gray-900 mt-1">{bellezaItem.descriptionShort}</p>
        </div>
      </li>
    </Link>
  );
};
export default BellezaItem;
