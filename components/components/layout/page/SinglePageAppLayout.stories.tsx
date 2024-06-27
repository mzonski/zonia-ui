import React from 'react';
import type { Meta } from '@storybook/react';
import styled from 'styled-components';
import { borderMixin, spacingMixin } from '@zonia-ui/theme';
import Box from '../Box';
import { SpacingBox, SpacingBoxProps } from '../spacing';
import SinglePageAppLayout from './SinglePageAppLayout';
import { useSPALayoutCollapseContext } from './contexts/CollapseContext';

const meta = {
  title: '2. Components/Layout/SPA',
  parameters: {
    layout: 'none',
  },
  argTypes: {
    children: { table: { disable: true } },
  },
} satisfies Meta;
export default meta;

const StyledButton = styled.button`
  z-index: 1;
  ${borderMixin('tiny', 'all', 'primary')};
  ${spacingMixin('margin', '2')};
  ${spacingMixin('padding', '2')};
`;

const SpaSidebarControlIcon = () => {
  const { toggle } = useSPALayoutCollapseContext();
  const handleToggle = () => {};

  return (
    <StyledButton type="button" onClick={toggle}>
      TOGGLE
    </StyledButton>
  );
};

const SpacedDummyPage = styled(SpacingBox).attrs<Omit<SpacingBoxProps, 'children'>>({
  $mh: '8',
  $mt: '14',
});

export const Collapsed = () => {
  return (
    <SinglePageAppLayout defaultSidebarOpen={false} togglePlacement="header">
      <div key="footer">footer</div>
      <div key="sidebar-header">sidebar content</div>
      <div key="sidebar">sidebar</div>
      <div key="content">content</div>
      <SpaSidebarControlIcon key="toggle" />
      <div key="header">Box</div>
    </SinglePageAppLayout>
  );
};
