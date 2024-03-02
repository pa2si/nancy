import BellezaItem from './BellezaItem';
import { bellezaItemsList } from './data';

const BellezaItems = () => {
  return (
    <section
      id="belleza"
      className="scroll-mt-24 pt-6 background shadow-xl rounded-lg "
    >
      {/* CocinaItem */}
      <div className="flex flex-col items-center ">
        <h2 className=" font-medium text-4xl sm:text-5xl font-title">
          Productos Belleza
        </h2>
        {/* underline */}
        <div className="relative w-1/2 md:w-1/4 h-1 my-4 ">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        </div>
      </div>
      <ul>
        {bellezaItemsList.map((item) => (
          <BellezaItem key={item.id} bellezaItem={item} />
        ))}
      </ul>
    </section>
  );
};
export default BellezaItems;
