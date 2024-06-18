import type { PropsWithChildren } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { baseTheme } from '../themes/baseTheme';
import GlobalStyle from './GlobalStyle';

export type ThemeProviderProps = Readonly<PropsWithChildren>;

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <StyledThemeProvider theme={baseTheme}>
      <GlobalStyle />
      {children}
    </StyledThemeProvider>
  );
}
