import componentImg from '../../assets/images/components.png';
import jsxImg from '../../assets/images/jsx-ui.png';
import propsImg from '../../assets/images/config.png';
import stateImg from '../../assets/images/state-mgmt.png';

export type CoreItem = {
  image: string;
  title: string;
  description: string;
};

export const dataCore: CoreItem[] = [
  {
    image: componentImg,
    title: 'Components',
    description:
      'The core UI building block - compose the user interface by combining multiple components.',
  },
  {
    image: jsxImg,
    title: 'JSX',
    description:
      'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.',
  },
  {
    image: propsImg,
    title: 'Props',
    description:
      'Make components configurable (and therefore reusable) by passing input data to them.',
  },
  {
    image: stateImg,
    title: 'State',
    description:
      'React-managed data which, when changed, causes the component to re-render & the UI to update.',
  },
];
