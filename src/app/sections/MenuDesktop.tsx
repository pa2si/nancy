import Link from 'next/link';
import { Button } from '@/components/ui/button';

const MenuDesktop = () => {
  return (
    <div className="p-4 flex flex-col gap-2">
      <Button className="bg-cyan-500">
        <Link href="#cocina">Cocina</Link>
      </Button>
      <Button className="bg-cyan-500">
        <Link href="#belleza">Belleza</Link>
      </Button>

      <Button className="bg-cyan-500">
        <Link href="#decoracion">Decoracion</Link>
      </Button>
      <Button className="bg-cyan-500">
        <Link href="#technica">Technica</Link>
      </Button>
    </div>
  );
};
export default MenuDesktop;
