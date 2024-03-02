import Hero from './sections/Hero';
import CocinaItems from './sections/CocinaItems/CocinaItems';
import BellezaItems from './sections/BellezaItems/BellezaItems';
import Menu from './sections/Menu';

export default function Home() {
  return (
    <main className="relative">
      <Menu />
      <Hero />
      <CocinaItems />
      <BellezaItems />
    </main>
  );
}
