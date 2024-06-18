import { createGlobalStyle } from 'styled-components';
import '@fontsource-variable/plus-jakarta-sans';
import '@fontsource-variable/inter';

const GlobalStyle = createGlobalStyle`
  body {
    font-size: ${({ theme }) => theme.fonts.defaultSize};
    font-family: ${({ theme }) => theme.fonts.defaultFamily}, sans-serif;
  }
`;

export default GlobalStyle;
