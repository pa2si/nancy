import { ScrollProvider } from '@/lib/ScrollContext';
import Hero from './sections/Hero';
import CocinaItems from './sections/CocinaItems/CocinaItems';
import BellezaItems from './sections/BellezaItems/BellezaItems';
import MenuMobile from './sections/MenuMobile';
import MenuDesktop from './sections/MenuDesktop';

export default function Home() {
  return (
    <ScrollProvider>
      <main>
        <Hero />
        <div className="grid md:grid-cols-8 ">
          <div className="hidden md:block sticky top-0 h-20 col-span-2">
            <MenuDesktop />
          </div>
          <div className="col-span-6">
            <CocinaItems />
            <BellezaItems />
          </div>
        </div>
        <MenuMobile />
      </main>
    </ScrollProvider>
  );
}
