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
      <div className="flex flex-col gap-2">
        <Link href="#cocina ">
          <Button className=" w-full bg-cyan-500 hover:bg-cyan-700">
            Cocina
          </Button>
        </Link>

        <Link href="#hogar">
          <Button className="w-full bg-cyan-500 hover:bg-cyan-700">
            Hogar
          </Button>
        </Link>
        <Link href="#belleza">
          <Button className="w-full bg-cyan-500 hover:bg-cyan-700">
            Belleza
          </Button>
        </Link>
        <Link href="#technologia">
          <Button className="w-full bg-cyan-500 hover:bg-cyan-700">
            Technologia
          </Button>
        </Link>
      </div>
    </div>
  );
};
export default MenuDesktop;
