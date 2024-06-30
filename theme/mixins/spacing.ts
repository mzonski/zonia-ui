import { css, ExecutionContext } from 'styled-components';

import type { ThemeSpacings, MixinCorners, MixinMoveType, ValidSizeFormat } from '../types';

export const mapSpacingCornersToCssProperties = (
  type: MixinMoveType,
  selectedSpacing: ValidSizeFormat,
  corners: MixinCorners[] = ['all'],
) => {
  return corners
    .map((corner) => {
      switch (corner) {
        case 'top':
          return `${type}-top: ${selectedSpacing};`;
        case 'left':
          return `${type}-left: ${selectedSpacing};`;
        case 'right':
          return `${type}-right: ${selectedSpacing};`;
        case 'bottom':
          return `${type}-bottom: ${selectedSpacing};`;
        case 'vertical':
          return `${type}-top: ${selectedSpacing}; ${type}-bottom: ${selectedSpacing};`;
        case 'horizontal':
          return `${type}-left: ${selectedSpacing}; ${type}-right: ${selectedSpacing};`;
        case 'all':
          return `${type}: ${selectedSpacing};`;
        default:
          throw new Error(`Selected corner not supported: ${corner}`);
      }
    })
    .join(' ');
};

export const spacingMixin = (type: MixinMoveType, themeSpacing: ThemeSpacings, corners: MixinCorners[] = ['all']) => {
  const spacingValue = (props: ExecutionContext) => props.theme.spacing[themeSpacing];

  const applySpacing = (props: ExecutionContext) => {
    const selectedSpacing = spacingValue(props);
    return mapSpacingCornersToCssProperties(type, selectedSpacing, corners);
  };

  return css`
    ${applySpacing}
  `;
};

export const fullViewportMixin = () => css`
  width: 100vw;
  height: 100vh;
`;

export const fixedHeaderMixin = () => css`
  position: fixed;
  top: 0;
  width: 100%;
`;
