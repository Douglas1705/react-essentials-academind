import { useState, useCallback } from 'react';
import { dataExample, ExampleItem } from '../../data/dataExamples';

const buttonXm =
  ' text-base text-white bg-sky-950 rounded-2xl h-12 w-[40%] hover:bg-sky-700 active:bg-blue-800 focus:bg-blue-800 sm:text-2xl';

function Examples() {
  const [currentExample, setCurrentExample] = useState<ExampleItem>(
    dataExample.components,
  );

  const handleExampleClick = useCallback((example: ExampleItem) => {
    setCurrentExample(example);
  }, []);

  return (
    <section className=" p-4">
      <h2 className="text-4xl text-white text-center font-bold mb-8 mt-8">
        Examples
      </h2>
      <aside className="flex flex-col gap-4 px-4">
        <div className="flex justify-center flex-wrap gap-6 ">
          <button
            className={` ${buttonXm} }`}
            // eslint-disable-next-line react/jsx-no-bind
            onClick={() => handleExampleClick(dataExample.components)}
          >
            Components
          </button>
          <button
            className={` ${buttonXm} }`}
            // eslint-disable-next-line react/jsx-no-bind
            onClick={() => handleExampleClick(dataExample.jsx)}
          >
            JSX
          </button>
          <button
            className={buttonXm}
            // eslint-disable-next-line react/jsx-no-bind
            onClick={() => handleExampleClick(dataExample.props)}
          >
            Props
          </button>
          <button
            className={buttonXm}
            // eslint-disable-next-line react/jsx-no-bind
            onClick={() => handleExampleClick(dataExample.state)}
          >
            State
          </button>
        </div>
        <div className="px-5 py-8 bg-slate-900 rounded shadow-md w-full mb-10 text-base break-words overflow-auto text-white">
          <h3 className="font-bold text-white text-3xl">
            {currentExample.title}
          </h3>
          <p className="mt-2">{currentExample.description}</p>
          <pre className="mt-4 rounded text-yellow-500">
            <code>{currentExample.code}</code>
          </pre>
        </div>
      </aside>
    </section>
  );
}

export default Examples;
