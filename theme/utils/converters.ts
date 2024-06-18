import { isNumber, isString } from '@zonia-ui/core';

import { DEFAULT_FONT_SIZE } from '../constants';
import type { ValidSizeFormat } from '../types';

import { isValueSizeEm, isValueSizePx, isValueSizeRem } from './guards';

export const valueToRem = (checkValue: number | string, baseFontSize: number = DEFAULT_FONT_SIZE): ValidSizeFormat => {
  let value = checkValue;
  if (value === 0 || value === '0') return '0';

  if (isString(value)) {
    if (isValueSizeRem(value)) {
      return value;
    }

    if (isValueSizePx(value)) {
      value = parseFloat(value);
    } else {
      throw new Error('Value must be in px or rem');
    }
  }

  return `${Number((value / baseFontSize).toFixed(4))}rem`;
};

export const remToPx = (checkValue: number | string, baseFontSize: number = DEFAULT_FONT_SIZE): ValidSizeFormat => {
  let value = checkValue;
  if (value === 0 || value === '0') return '0';

  if (isString(value)) {
    if (isValueSizeRem(value)) {
      value = parseFloat(value) * baseFontSize;
      return `${Number(value.toFixed(4))}px`;
    }

    if (isValueSizePx(value)) {
      return value;
    }
    throw new Error('Value must be in px or rem');
  }

  return `${value}px`;
};

export const convertSizeToNumber = (value: ValidSizeFormat | number): number => {
  if (isNumber(value)) {
    return value;
  }

  if (isString(value)) {
    if (isValueSizeRem(value) || isValueSizeEm(value) || isValueSizePx(value)) {
      return Number(parseFloat(value).toFixed(4));
    }
    throw new Error('Value must be in px, rem, or em');
  }

  throw new Error('Value must be a string or a number');
};
