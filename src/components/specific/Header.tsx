import { useState, useEffect, useMemo } from 'react';
import ReactCore from '../../assets/images/react-core-concepts.png';
import GenSequential from '../../utils/GenSequential';

function Header() {
  const descriptions = useMemo(() => ['Fundamental', 'Crucial', 'Core'], []);
  const generator = useMemo(
    () => new GenSequential(descriptions),
    [descriptions],
  );
  const [description, setDescription] = useState<string>(descriptions[0]);

  useEffect(() => {
    generator.startUpdating(2000, 15000, setDescription);

    return () => generator.stopUpdating();
  }, [generator]);

  const headerMobile = 'flex flex-col items-center py-8 px-4 gap-8';

  return (
    <header className={headerMobile}>
      <img src={ReactCore} alt="Imagem do React" />
      <h1 className="text-3xl">REACT ESSENTIALS</h1>
      <p className="text-base text-white text-center sm:text-2xl">
        <span className="font-bold ">{description}</span> React concepts you
        will need for almost any app you are going to build!
      </p>
    </header>
  );
}

export default Header;
