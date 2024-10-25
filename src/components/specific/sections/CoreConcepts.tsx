import { dataCore } from '../../data/dataCore';

function CoreConcepts() {
  return (
    <section className="bg-gray-950 bg-opacity-50 h-auto w-11/12 px-4 py-6 mx-auto text-white text-center rounded shadow">
      <h2 className="text-4xl font-sans text-yellow-200">Core Concepts</h2>
      <div className="sm:flex sm:gap-8 sm:justify-between">
        {dataCore.map((item, index) => (
          <picture
            key={index}
            className="flex items-center
        mt-12 sm:flex-col sm:w-3/12"
          >
            <div className="w-54 h-6/6 sm:h-36 sm:w-32 sm:py-5">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto"
              />
            </div>
            <figcaption className="flex flex-col gap-5 px-6 sm:px-0 ">
              <h3 className="text-2xl font-bold xl:text-3xl">{item.title}</h3>
              <p className="text-xs xl:text-xl">{item.description}</p>
            </figcaption>
          </picture>
        ))}
      </div>
    </section>
  );
}
export default CoreConcepts;
