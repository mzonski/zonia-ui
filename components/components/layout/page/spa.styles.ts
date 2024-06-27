import { borderMixin, colorMixin, spacingMixin } from '@zonia-ui/theme';
import { Property } from 'csstype';
import { boolean } from 'fp-ts';
import styled, { css } from 'styled-components';

import { SpaSlotProp } from './SinglePageAppLayout';

const sidebarContainerMixin = ({ $sidebarCollapsed }: { $sidebarCollapsed?: boolean }) => {
  if ($sidebarCollapsed) {
    return css`
      grid-template-areas:
        'sidebar-header header header'
        'content content content'
        'footer footer footer';
      grid-template-columns: 0 145px 1fr auto;
      grid-template-rows: 78px 1fr 64px;
    `;
  }
  return css`
    grid-template-areas:
      'sidebar-header header header'
      'sidebar content content'
      'sidebar footer footer';
    grid-template-columns: 300px 1fr auto;
    grid-template-rows: 72px 1fr 64px;
  `;
};

const Container = styled.div<{ $sidebarCollapsed?: boolean }>`
  display: grid;
  ${sidebarContainerMixin};
  height: 100%;
  width: 100%;
`;

const Header = styled.header`
  grid-area: header;
  ${spacingMixin('padding', '4')}
  ${borderMixin('tiny', 'bottom')}
`;

const Sidebar = styled.aside`
  grid-area: sidebar;
  background-color: #e9ecef;
  ${spacingMixin('padding', '4')}
  ${colorMixin('bg', 'primary', 'black')}
  ${colorMixin('color', 'primary', 'white')}
`;

const SidebarHeader = styled.header`
  grid-area: sidebar-header;
  background-color: #e9ecef;
  ${spacingMixin('padding', '4')}
  ${colorMixin('bg', 'primary', 'black')}
  ${colorMixin('color', 'primary', 'white')}
`;

const Content = styled.main`
  grid-area: content;
  background-color: #ffffff;
  padding: 1rem;
  ${colorMixin('bg', 'primary', 'grey300')}
  ${colorMixin('color', 'primary', 'white')}
`;

const Footer = styled.footer`
  grid-area: footer;
  ${spacingMixin('padding', '4')}
  ${colorMixin('bg', 'primary', 'primary')}
  ${colorMixin('color', 'primary', 'white')}
`;

const Toggle = styled.div<{ $gridArea: SpaSlotProp }>`
  grid-area: ${(props) => props.$gridArea};
  ${spacingMixin('padding', '4')}
  ${colorMixin('color', 'primary', 'white')}
  width: 50px;
  height: 80px;
`;

export const SpaLayoutStyles = {
  Container,
  Header,
  Sidebar,
  SidebarHeader,
  Content,
  Footer,
  Toggle,
} as const;
