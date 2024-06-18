import { css } from 'styled-components';
import type { ExecutionContext, RuleSet } from 'styled-components';

import type { ThemePrimaryColor, ThemeSecondaryColor, ValidColorFormat } from '../types';
import { isValidColorFormat } from '../utils';

type ColorOptions = 'bg' | 'color' | 'accent' | 'border';

export function colorMixin(cssType: ColorOptions, colorType: 'custom', color: ValidColorFormat): RuleSet;
export function colorMixin(cssType: ColorOptions, colorType: 'primary', color: ThemePrimaryColor): RuleSet;
export function colorMixin(cssType: ColorOptions, colorType: 'secondary', color: ThemeSecondaryColor): RuleSet;
export function colorMixin(
  cssType: ColorOptions,
  colorType: 'primary' | 'secondary' | 'custom',
  color: ThemePrimaryColor | ThemeSecondaryColor | ValidColorFormat,
): RuleSet {
  const applyColor = (props: ExecutionContext) => {
    let selectedColor: ValidColorFormat;
    if (colorType === 'custom' && isValidColorFormat(color)) {
      selectedColor = color;
    } else {
      selectedColor = colorType === 'primary' ? props.theme.colors.primary[color] : props.theme.colors.secondary[color];
    }
    switch (cssType) {
      case 'bg':
        return `background-color: ${selectedColor};`;
      case 'color':
        return `color: ${selectedColor};`;
      case 'accent':
        return `accent-color: ${selectedColor};`;
      case 'border':
        return `border-color: ${selectedColor};`;
      default:
        throw new Error(`Selected color not supported: ${cssType}`);
    }
  };

  return css`
    ${applyColor}
  `;
}
