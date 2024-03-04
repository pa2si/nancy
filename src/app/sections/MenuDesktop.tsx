import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CgMenuRound } from 'react-icons/cg';

const MenuDesktop = () => {
  return (
    <div className="p-4 flex flex-col gap-2">
      <div className="flex gap-2 justify-center items-center">
        <p className="text-xl font-bold text-center">Menu</p>
        <CgMenuRound />
      </div>
      <Button className="bg-cyan-500 hover:bg-cyan-700">
        <Link href="#cocina">Cocina</Link>
      </Button>
      <Button className="bg-cyan-500 hover:bg-cyan-700">
        <Link href="#hogar">Hogar</Link>
      </Button>
      <Button className="bg-cyan-500 hover:bg-cyan-700">
        <Link href="#belleza">Belleza</Link>
      </Button>
      <Button className="bg-cyan-500 hover:bg-cyan-700">
        <Link href="#electronica">Electronica</Link>
      </Button>
    </div>
  );
};
export default MenuDesktop;
