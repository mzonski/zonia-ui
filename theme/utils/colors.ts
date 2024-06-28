import { isNumber } from '@zonia-ui/core';

import type { ValidColorFormat } from '../types';

import { isHexColor, isValidColorFormat } from './guards';

type RgbColorArray = [number, number, number];

export const extractRgb = (rgb: string) => {
  return rgb.match(/\d+/g)!.map(Number).slice(0, 3);
};

export const hexToRgb = (hex: string): RgbColorArray => {
  let newHex = hex.replace(/^#/, '');
  if (newHex.length === 3) {
    newHex = newHex
      .split('')
      .map((char) => char + char)
      .join('');
  }
  const bigint = parseInt(newHex, 16);
  // eslint-disable-next-line no-bitwise
  return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
};

export const getRgbValues = (color: ValidColorFormat): RgbColorArray => {
  let r: number;
  let g: number;
  let b: number;

  if (isHexColor(color)) {
    [r, g, b] = hexToRgb(color);
  } else if (color.startsWith('rgb')) {
    [r, g, b] = extractRgb(color);
  } else {
    throw new Error('Invalid color format');
  }

  return [r, g, b];
};

const convertRgbToComplementary = ([r, g, b]: RgbColorArray) => {
  return [255 - r, 255 - g, 255 - b];
};

export function getComplementaryColor(color: ValidColorFormat, g: never, b: never);
export function getComplementaryColor(colorArray: RgbColorArray, g: never, b: never);
export function getComplementaryColor(r: number | RgbColorArray | ValidColorFormat, g: number, b: number) {
  if (isNumber(r)) {
    return convertRgbToComplementary([r, g, b]);
  }

  if (isValidColorFormat(r)) {
    return convertRgbToComplementary(getRgbValues(r));
  }

  return convertRgbToComplementary(r);
}
