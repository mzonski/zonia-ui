import { borderMixin, colorMixin, spacingMixin } from '@zonia-ui/theme';
import styled, { css } from 'styled-components';

const sidebarContainerMixin = ({ $sidebarCollapsed }: { $sidebarCollapsed?: boolean }) => {
  if ($sidebarCollapsed) {
    return css`
      grid-template-areas:
        'sidebar-header header header'
        'sidebar content content'
        'sidebar footer footer';
      grid-template-columns: 96px 1fr auto;
      grid-template-rows: 72px 1fr 64px;
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
  height: 100%;
  width: 100%;
  transition: grid-template-columns 0.2s;
  ${sidebarContainerMixin};
  ${colorMixin('bg', 'primary', 'grey100')}
`;

const Header = styled.header`
  grid-area: header;
  overflow: hidden;
  ${spacingMixin('padding', '4')}
  ${borderMixin('tiny', 'bottom')}
`;

const Sidebar = styled.aside`
  grid-area: sidebar;
  overflow: hidden;
  overflow-y: auto;
  background-color: #e9ecef;
  ${spacingMixin('padding', '4')}
  ${colorMixin('bg', 'primary', 'black')}
  ${colorMixin('color', 'primary', 'white')}
`;

const SidebarHeader = styled.header`
  grid-area: sidebar-header;
  overflow: hidden;

  ${spacingMixin('padding', '4')}
  ${colorMixin('bg', 'primary', 'black')}
  ${colorMixin('color', 'primary', 'white')}
`;

const Content = styled.main`
  grid-area: content;
  overflow: auto;
  ${colorMixin('color', 'primary', 'white')}
`;

const Footer = styled.footer`
  grid-area: footer;
  ${spacingMixin('padding', '4')}
  ${colorMixin('bg', 'primary', 'primary')}
  ${colorMixin('color', 'primary', 'white')}
`;

const Toggle = styled.div`
  ${spacingMixin('padding', '4')}
  ${colorMixin('bg', 'secondary', 'cornflowerBlue')}
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
