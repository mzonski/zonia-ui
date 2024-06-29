import React from 'react';
import type { Meta } from '@storybook/react';
import styled from 'styled-components';
import { borderMixin, spacingMixin } from '@zonia-ui/theme';
import Box from '../Box';
import { SpacingBox, SpacingBoxProps } from '../spacing';
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

const SpacedDummyPage = styled(SpacingBox).attrs<Omit<SpacingBoxProps, 'children'>>({
  $mh: '8',
  $mt: '14',
});

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
