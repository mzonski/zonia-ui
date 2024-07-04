import { DUMMY_MESSAGE } from '@zonia-ui/core/constants';

import { createArray } from '@zonia-ui/core/utils';
import { Stack as component } from './Stack';

export default {
  title: '2. Components/Containers',
  component,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    as: {
      control: 'select',
      options: ['div', 'span'],
    },
    $gap: {
      control: 'select',
      options: ['2px', '5rem', '8px'],
    },
    $direction: {
      control: 'select',
      options: ['column', 'row', 'column-reverse', 'row-reverse'],
    },
    children: { table: { disable: true } },
  },
};

function Content() {
  return (
    <>
      {createArray(5, 1).map((id) => (
        <div key={id}>
          {id}. {DUMMY_MESSAGE}
        </div>
      ))}
    </>
  );
}

export const Stack = {
  args: {
    children: <Content />,
    as: 'div',
    $direction: 'column',
  },
};
