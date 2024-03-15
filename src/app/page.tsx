import { CombinedProvider } from '@/lib/Context';
import Hero from './sections/Hero';
import CocinaItems from './sections/CocinaItems/CocinaItems';
import BellezaItems from './sections/BellezaItems/BellezaItems';
import MenuMobile from './sections/MenuMobile';
import MenuDesktop from './sections/MenuDesktop';
import Footer from './sections/Footer';
import HogarItems from './sections/HogarItems/HogarItems';
import TechnologiaItems from './sections/TechnologiaItems/TechnologiaItems';

export default function Home() {
  return (
    <CombinedProvider initialItems={4} increment={4}>
      <main className="bg-gray-50">
        <Hero />
        <div className="grid md:grid-cols-8 ">
          <div className="hidden md:block sticky top-0 h-20 col-span-2">
            <MenuDesktop />
          </div>
          <div className="col-span-6">
            <CocinaItems />
            <HogarItems />
            <BellezaItems />
            <TechnologiaItems />
          </div>
        </div>
        <MenuMobile />
      </main>
      <Footer />
    </CombinedProvider>
  );
}
