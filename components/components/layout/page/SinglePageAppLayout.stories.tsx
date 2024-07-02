import React from 'react';
import type { Meta } from '@storybook/react';
import { Button } from '../../inputs/button/Button';
import { Flexbox } from '../flexbox';
import SinglePageAppLayout from './SinglePageAppLayout';
import { useSPALayoutCollapseContext } from './contexts/CollapseContext';

const meta = {
  title: '2. Components/Layout',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    children: { table: { disable: true } },
  },
} satisfies Meta;
export default meta;

const SpaSidebarControlIcon = () => {
  const { toggle } = useSPALayoutCollapseContext();

  return (
    <Button fullWidth size="2xs" labelTextVariant="xs" onClick={toggle}>
      TOGGLE
    </Button>
  );
};

export const SingleSPALayout = () => {
  return (
    <SinglePageAppLayout defaultSidebarOpen={false} togglePlacement="header">
      <Flexbox $direction="row" key="header">
        header
      </Flexbox>
      <Flexbox $direction="column" key="footer">
        footer
      </Flexbox>
      <Flexbox $direction="column" key="content">
        <div style={{ height: 8000, width: 400, backgroundColor: 'rebeccapurple' }} />
      </Flexbox>
      <Flexbox $direction="column" key="sidebar">
        sidebar
      </Flexbox>
      <SpaSidebarControlIcon key="sidebar-header" />
    </SinglePageAppLayout>
  );
};
