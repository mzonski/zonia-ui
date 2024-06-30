/* eslint-disable no-bitwise */
// TODO: This code needs to be refactored
import { HexColor } from '@zonia-ui/components/types';
import { isNumber } from '@zonia-ui/core';

import type { ValidColorFormat } from '../types';

import { isHexColor, isValidColorFormat } from './guards';

type RGBAColorArray = [number, number, number, number?];

export const extractRgb = (rgb: string): RGBAColorArray => {
  const match = rgb.match(/(\d+(\.\d+)?)/g);

  if (!match || match.length < 3) {
    throw new Error('Invalid RGB(A) color format');
  }

  const [r, g, b, a] = match.map(Number);

  return [r, g, b, a].slice(0, 4) as RGBAColorArray;
};

export const hexToRgb = (hex: string): RGBAColorArray => {
  let newHex = hex.replace(/^#/, '');

  if (newHex.length === 3 || newHex.length === 4) {
    newHex = newHex
      .split('')
      .map((char) => char + char)
      .join('');
  }

  const bigint = parseInt(newHex, 16);

  if (newHex.length === 6) {
    return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
  }

  if (newHex.length === 8) {
    return [(bigint >> 24) & 255, (bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
  }

  throw new Error('Invalid hex color format');
};

// export const rgbToHex = (array: RgbColorArray): RgbColorArray => {
//   let newHex = hex.replace(/^#/, '');
//   if (newHex.length === 3) {
//     newHex = newHex
//       .split('')
//       .map((char) => char + char)
//       .join('');
//   }
//   const bigint = parseInt(newHex, 16);
//   // eslint-disable-next-line no-bitwise
//   return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
// };

export const getRgbValues = (color: ValidColorFormat): RGBAColorArray => {
  let r: number;
  let g: number;
  let b: number;
  let a: number | undefined;

  if (isHexColor(color)) {
    [r, g, b, a] = hexToRgb(color);
  } else if (color.startsWith('rgb')) {
    [r, g, b, a] = extractRgb(color);
  } else {
    throw new Error('Invalid color format');
  }

  return [r, g, b, a];
};

const convertRgbToComplementary = ([r, g, b, a]: RGBAColorArray) => {
  return [255 - r, 255 - g, 255 - b, a];
};

export function getComplementaryColor(color: ValidColorFormat, g: never, b: never);
export function getComplementaryColor(colorArray: RGBAColorArray, g: never, b: never);
export function getComplementaryColor(r: number | RGBAColorArray | ValidColorFormat, g: number, b: number) {
  if (isNumber(r)) {
    return convertRgbToComplementary([r, g, b]);
  }

  if (isValidColorFormat(r)) {
    // TODO not support alpha
    return convertRgbToComplementary(getRgbValues(r));
  }

  return convertRgbToComplementary(r);
}

export function darkenColor(color: ValidColorFormat, percent: number): RGBAColorArray {
  const [r, g, b, a] = getRgbValues(color);
  const factor = (100 - percent) / 100;

  return [Math.round(r * factor), Math.round(g * factor), Math.round(b * factor), a];
}

export function lightenColor(color: ValidColorFormat, percent: number): RGBAColorArray {
  const [r, g, b, a] = getRgbValues(color);
  const factor = percent / 100;

  return [
    Math.round(r + (255 - r) * factor),
    Math.round(g + (255 - g) * factor),
    Math.round(b + (255 - b) * factor),
    a,
  ];
}

export function blendColors(color1: ValidColorFormat, color2: ValidColorFormat, ratio: number = 0.5): RGBAColorArray {
  const [r1, g1, b1, a1] = getRgbValues(color1);
  const [r2, g2, b2, a2] = getRgbValues(color2);

  return [
    Math.round(r1 * (1 - ratio) + r2 * ratio),
    Math.round(g1 * (1 - ratio) + g2 * ratio),
    Math.round(b1 * (1 - ratio) + b2 * ratio),
    a1 && a2 ? Math.round(a1 * (1 - ratio) + a2 * ratio) : undefined,
  ];
}

export const numToHex = (num: number): string => num.toString(16).padStart(2, '0');

export function rgbaToHex(array: RGBAColorArray, g?: never, b?: never, a?: never): HexColor;
export function rgbaToHex(array: RGBAColorArray, g?: never, b?: never, a?: never): HexColor;
export function rgbaToHex(r: number, g: number, b: number, a?: number): HexColor;
export function rgbaToHex(r: number | RGBAColorArray, g?: number, b?: number, a?: number): HexColor {
  if (isNumber(r)) {
    if (!g || !b) throw new Error('Green and blue are not defined');

    return `#${numToHex(r)}${numToHex(g)}${numToHex(b)}${a ? numToHex(a) : ''}`;
  }
  const [ar, ag, ab, aa] = r;
  return `#${numToHex(ar)}${numToHex(ag)}${numToHex(ab)}${aa ? numToHex(aa) : ''}`;
}

function rgbToHsl(r: number, g: number, b: number): { h: number; s: number; l: number } {
  const rNorm = r / 255;
  const gNorm = g / 255;
  const bNorm = b / 255;
  const max = Math.max(rNorm, gNorm, bNorm);
  const min = Math.min(rNorm, gNorm, bNorm);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    // eslint-disable-next-line default-case
    switch (max) {
      case rNorm:
        h = (gNorm - bNorm) / d + (gNorm < bNorm ? 6 : 0);
        break;
      case gNorm:
        h = (bNorm - rNorm) / d + 2;
        break;
      case bNorm:
        h = (rNorm - gNorm) / d + 4;
        break;
    }
    h /= 6;
  }

  return { h: h * 360, s: s * 100, l: l * 100 };
}

function hslToRgb(h: number, s: number, l: number): { r: number; g: number; b: number } {
  const newS = s / 100;
  const newL = l / 100;
  const c = (1 - Math.abs(2 * newL - 1)) * newS;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = newL - c / 2;
  let r = 0;
  let g = 0;
  let b = 0;

  if (h < 60) {
    r = c;
    g = x;
  } else if (h < 120) {
    r = x;
    g = c;
  } else if (h < 180) {
    g = c;
    b = x;
  } else if (h < 240) {
    g = x;
    b = c;
  } else if (h < 300) {
    r = x;
    b = c;
  } else {
    r = c;
    b = x;
  }

  return {
    r: Math.round((r + m) * 255),
    g: Math.round((g + m) * 255),
    b: Math.round((b + m) * 255),
  };
}

export function adjustSaturation(color: ValidColorFormat, amount: number, alpha?: undefined) {
  const [r, g, b] = getRgbValues(color);
  const { h, s, l } = rgbToHsl(r, g, b);
  const maxS = Math.max(0, Math.min(100, s + amount));

  const { r: newR, g: newG, b: newB } = hslToRgb(h, maxS, l);
  return rgbaToHex(newR, newG, newB, alpha);
}

export function adjustLightness(color: ValidColorFormat, amount: number, alpha?: undefined) {
  const [r, g, b] = getRgbValues(color);
  const { h, s, l } = rgbToHsl(r, g, b);
  const maxL = Math.max(0, Math.min(100, l + amount));

  const { r: newR, g: newG, b: newB } = hslToRgb(h, s, maxL);
  return rgbaToHex(newR, newG, newB, alpha);
}

export function appendAlpha(color: ValidColorFormat, a: number) {
  const [r, g, b] = getRgbValues(color);

  return rgbaToHex(r, g, b, a);
}
