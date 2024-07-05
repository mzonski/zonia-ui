import { DUMMY_MESSAGE } from '@zonia-ui/core/constants';

import { createArray } from '@zonia-ui/core/utils';
import { themeSpacing } from '@zonia-ui/theme/themes/spacing';
import { primaryColors, themeBorderSize, themeShape } from '@zonia-ui/theme';
import { Stack as component, directionMap } from '../stack';

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
      options: Object.keys(themeSpacing),
    },
    $direction: {
      control: 'select',
      options: Object.keys(directionMap),
    },
    $borderSize: {
      control: 'select',
      options: Object.keys(themeBorderSize),
    },
    $borderColor: {
      control: 'select',
      options: Object.keys(primaryColors),
    },
    $bgColor: {
      control: 'select',
      options: Object.keys(primaryColors),
    },
    $shape: {
      control: 'select',
      options: themeShape,
    },
    children: { table: { disable: true } },
  },
  args: {
    $direction: 'bottom',
    $gap: '4',
    as: 'div',
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
  },
};
