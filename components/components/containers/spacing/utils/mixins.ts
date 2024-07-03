import { DolarPrefix, mapSpacingCornersToCssProperties, ThemeSpacings } from '@zonia-ui/theme';
import type { ExecutionContext } from 'styled-components';
import { css } from 'styled-components';

import type { SpacingProps } from '../types';

import {
  isHorizontalMarginProps,
  isHorizontalPaddingProps,
  isMarginAroundProps,
  isPaddingAroundProps,
  isVerticalMarginProps,
  isVerticalPaddingProps,
} from './guards';

export const spacingBoxMixin = (props: Partial<DolarPrefix<SpacingProps>>) => {
  const spacingValue = (styledCtx: ExecutionContext, themeSpacing: ThemeSpacings) =>
    styledCtx.theme.spacing[themeSpacing] ?? 0;

  const applySpacing = (styledCtx: ExecutionContext) => {
    const cssFragments: string[] = [];
    const getSpacing = (themeSpacing: ThemeSpacings) => spacingValue(styledCtx, themeSpacing);

    if (isMarginAroundProps(props)) {
      if (props.$mt) {
        cssFragments.push(mapSpacingCornersToCssProperties('margin', getSpacing(props.$mt), ['top']));
      }
      if (props.$mb) {
        cssFragments.push(mapSpacingCornersToCssProperties('margin', getSpacing(props.$mb), ['bottom']));
      }
      if (props.$ml) {
        cssFragments.push(mapSpacingCornersToCssProperties('margin', getSpacing(props.$ml), ['left']));
      }
      if (props.$mr) {
        cssFragments.push(mapSpacingCornersToCssProperties('margin', getSpacing(props.$mr), ['right']));
      }
    }

    if (isVerticalMarginProps(props)) {
      if (props.$mv) {
        cssFragments.push(mapSpacingCornersToCssProperties('margin', getSpacing(props.$mv), ['top', 'bottom']));
      }
      if (props.$ml) {
        cssFragments.push(mapSpacingCornersToCssProperties('margin', getSpacing(props.$ml), ['left']));
      }
      if (props.$mr) {
        cssFragments.push(mapSpacingCornersToCssProperties('margin', getSpacing(props.$mr), ['right']));
      }
    }

    if (isHorizontalMarginProps(props)) {
      if (props.$mh) {
        cssFragments.push(mapSpacingCornersToCssProperties('margin', getSpacing(props.$mh), ['left', 'right']));
      }
      if (props.$mt) {
        cssFragments.push(mapSpacingCornersToCssProperties('margin', getSpacing(props.$mt), ['top']));
      }
      if (props.$mb) {
        cssFragments.push(mapSpacingCornersToCssProperties('margin', getSpacing(props.$mb), ['bottom']));
      }
    }

    if (isPaddingAroundProps(props)) {
      if (props.$pt) {
        cssFragments.push(mapSpacingCornersToCssProperties('padding', getSpacing(props.$pt), ['top']));
      }
      if (props.$pb) {
        cssFragments.push(mapSpacingCornersToCssProperties('padding', getSpacing(props.$pb), ['bottom']));
      }
      if (props.$pl) {
        cssFragments.push(mapSpacingCornersToCssProperties('padding', getSpacing(props.$pl), ['left']));
      }
      if (props.$pr) {
        cssFragments.push(mapSpacingCornersToCssProperties('padding', getSpacing(props.$pr), ['right']));
      }
    }

    if (isVerticalPaddingProps(props)) {
      if (props.$pv) {
        cssFragments.push(mapSpacingCornersToCssProperties('padding', getSpacing(props.$pv), ['top', 'bottom']));
      }
      if (props.$pl) {
        cssFragments.push(mapSpacingCornersToCssProperties('padding', getSpacing(props.$pl), ['left']));
      }
      if (props.$pr) {
        cssFragments.push(mapSpacingCornersToCssProperties('padding', getSpacing(props.$pr), ['right']));
      }
    }

    if (isHorizontalPaddingProps(props)) {
      if (props.$ph) {
        cssFragments.push(mapSpacingCornersToCssProperties('padding', getSpacing(props.$ph), ['left', 'right']));
      }
      if (props.$pt) {
        cssFragments.push(mapSpacingCornersToCssProperties('padding', getSpacing(props.$pt), ['top']));
      }
      if (props.$pb) {
        cssFragments.push(mapSpacingCornersToCssProperties('padding', getSpacing(props.$pb), ['bottom']));
      }
    }

    return cssFragments.join(' ');
  };

  return css`
    ${applySpacing}
  `;
};
