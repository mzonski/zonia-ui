import type { HexColor, RgbaColor, RgbColor, ValidColorFormat, ValidSizeFormat } from '../types';

// Font sizes
export const isValueSizePercent = (str: string): str is ValidSizeFormat => /^-?\d+(\.\d+)?%$/.test(str);
export const isValueSizePx = (str: string): str is ValidSizeFormat => /^-?\d+(\.\d+)?px$/.test(str);
export const isValueSizeRem = (str: string): str is ValidSizeFormat => /^-?\d+(\.\d+)?rem$/.test(str);
export const isValueSizeEm = (str: string): str is ValidSizeFormat => /^-?\d+(\.\d+)?em$/.test(str);
export const isValidSizeFormat = (str: string): str is ValidSizeFormat => {
  return isValueSizePx(str) || isValueSizeRem(str) || isValueSizePercent(str) || isValueSizeEm(str);
};

// Colors
export const isHexColor = (str: string): str is HexColor => /^#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})$/.test(str);
export const isRgbColor = (str: string): str is RgbColor => {
  return /^rgb\(\s*(25[0-5]|2[0-4][0-9]|[01]?[0-9]?[0-9]),\s*(25[0-5]|2[0-4][0-9]|[01]?[0-9]?[0-9]),\s*(25[0-5]|2[0-4][0-9]|[01]?[0-9]?[0-9])\s*\)$/.test(
    str,
  );
};
export const isRgbaColor = (str: string): str is RgbaColor => {
  return /^rgba\(\s*(25[0-5]|2[0-4][0-9]|[01]?[0-9]?[0-9]),\s*(25[0-5]|2[0-4][0-9]|[01]?[0-9]?[0-9]),\s*(25[0-5]|2[0-4][0-9]|[01]?[0-9]?[0-9]),\s*(0|1|0?\.\d+)\s*\)$/.test(
    str,
  );
};
export const isValidColorFormat = (str: string): str is ValidColorFormat => {
  return isHexColor(str) || isRgbColor(str) || isRgbaColor(str);
};
