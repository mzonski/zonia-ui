import { DolarPrefix } from '@zonia-ui/theme';
import { css, StyleFunction } from 'styled-components';

import { ButtonGroupProps } from '../types';

const directionBorderMap = {
  left: css`
    &:not(:last-child) {
      border-left: 0;
    }
    &:not(:first-child, :last-child) {
      border-radius: 0;
    }
    &:first-child {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
    &:last-child {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  `,
  right: css`
    &:not(:first-child) {
      border-left: 0;
    }
    &:not(:first-child, :last-child) {
      border-radius: 0;
    }
    &:first-child {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    &:last-child {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  `,
  bottom: css`
    &:not(:last-child) {
      border-bottom: 0;
    }
    &:not(:first-child, :last-child) {
      border-radius: 0;
    }
    &:first-child {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
    &:last-child {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  `,
  top: css`
    &:not(:first-child) {
      border-bottom: 0;
    }
    &:not(:first-child, :last-child) {
      border-radius: 0;
    }
    &:last-child {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
    &:first-child {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  `,
};

const buttonGroupDirectionMixin: StyleFunction<DolarPrefix<Pick<ButtonGroupProps, 'variant' | 'direction'>>> = (
  ctx,
) => {
  const { $variant, $direction } = ctx;

  if ($variant === 'ghost') {
    return null;
  }

  return css`
    button {
      ${directionBorderMap[$direction ?? 'right']}
    }
  `;
};

const stickBorderMap = {
  left: css`
    &:not(:last-child) {
      border-left: 0;
    }
    &:not(:first-child, :last-child) {
      border-radius: 0;
    }
    &:first-child {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
    &:last-child {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  `,
  right: css`
    &:not(:first-child) {
      border-left: 0;
    }
    &:not(:first-child, :last-child) {
      border-radius: 0;
    }
    &:first-child {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    &:last-child {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  `,
  bottom: css`
    &:not(:last-child) {
      border-bottom: 0;
    }
    &:not(:first-child, :last-child) {
      border-radius: 0;
    }
    &:first-child {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
    &:last-child {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  `,
  top: css`
    &:not(:first-child) {
      border-bottom: 0;
    }
    &:not(:first-child, :last-child) {
      border-radius: 0;
    }
    &:last-child {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
    &:first-child {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  `,
};

const buttonGroupBorderMixin: StyleFunction<DolarPrefix<Pick<ButtonGroupProps, 'variant' | 'stick'>>> = (ctx) => {
  const { $variant, $stick } = ctx;

  if ($variant === 'ghost') {
    return null;
  }

  return css`
    button {
      ${buttonGroupDirectionMixin}
      ${stickBorderMap[$stick ?? 'right']}
    }
  `;
};

export const ButtonGroupMixins = {
  // typography: buttonTypographyMixin,
  // size: buttonSizeMixin,
  // colors: buttonColorsMixin,
  // shadows: buttonShadowMixin,
  border: buttonGroupBorderMixin,
};
