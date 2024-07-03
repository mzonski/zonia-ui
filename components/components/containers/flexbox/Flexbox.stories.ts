import { DUMMY_MESSAGE } from '@zonia-ui/core/constants';

import { Flexbox as component } from './Flexbox.tsx';

export default {
  title: '2. Components/Containers',
  component,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    as: {
      control: 'select',
      options: ['div', 'span', 'p'],
    },
  },
};

export const Flexbox = {
  args: {
    children: DUMMY_MESSAGE,
    as: 'div',
  },
};
