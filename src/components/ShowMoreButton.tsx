'use client';

import { useCombinedContext } from '@/lib/Context';
import { Button } from './ui/button';
import { MdExpandMore } from 'react-icons/md';

const ShowMoreButton = ({ totalItems }: { totalItems: number }) => {
  const { itemsToShow, showMoreItems } = useCombinedContext();

  if (itemsToShow >= totalItems) return null;

  return (
    <div className="flex justify-center items-center">
      <Button
        onClick={showMoreItems}
        className="btn bg-cyan-500 hover:bg-cyan-700 text-[1.1rem] flex-grow h-12"
      >
        <p>Más</p>
        <MdExpandMore />
      </Button>
    </div>
  );
};

export default ShowMoreButton;
