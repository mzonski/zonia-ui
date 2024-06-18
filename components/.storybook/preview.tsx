import type { Preview, ReactRenderer } from "@storybook/react";
import type { DecoratorFunction } from "@storybook/types";
import { themes } from '@storybook/theming';

import 'modern-normalize/modern-normalize.css';
import '@zonia-ui/theme/reset.css';
import { primaryColors, ThemeProvider } from "@zonia-ui/theme";

export const withZuiTheme: DecoratorFunction<ReactRenderer> = (Story) => {
  return <ThemeProvider><Story /></ThemeProvider>
}

const preview: Preview = {
  parameters: {
    actions: {argTypesRegex: "^on[A-Z].*"},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    darkMode: {
      dark: { ...themes.dark, appBg: 'black' },
      light: { ...themes.normal, appBg: 'lightgrey' }
    },
    backgrounds: {
      default: 'zui-light',
      values: [
        {
          name: 'zui-light',
          value: primaryColors.grey300,
        },
        {
          name: 'zui-dark',
          value: '#161616',
        },
      ],
    },
  },
  decorators: [withZuiTheme],
};

export default preview;
