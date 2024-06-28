import { ValidColorFormat } from '../types';
import { getRgbValues } from '../utils';

const LinearConstants = {
  threshold: 0.03928,
  lowValueDivisor: 12.92,
  highValueOffset: 0.055,
  highValueDivisor: 1.055,
  exponent: 2.4,
};

const linearize = (check: number) => {
  const { threshold, exponent, lowValueDivisor, highValueDivisor, highValueOffset } = LinearConstants;
  const value = check / 255;
  if (value <= threshold) {
    return value / lowValueDivisor;
  }
  return ((value + highValueOffset) / highValueDivisor) ** exponent;
};

const LuminanceCoefficients = {
  sRGB: {
    red: 0.2126,
    green: 0.7152,
    blue: 0.0722,
  },
  contrast: {
    adjustment: 0.05,
    maxLuminance: 1.05,
  },
};

const lSRGB = LuminanceCoefficients.sRGB;
const lCon = LuminanceCoefficients.contrast;

export function getColorLuminance(color: ValidColorFormat) {
  const [r, g, b] = getRgbValues(color);
  const [rLin, gLin, bLin] = [linearize(r), linearize(g), linearize(b)];

  return lSRGB.red * rLin + lSRGB.green * gLin + lSRGB.blue * bLin;
}

function getContrastRatio(luminance1: number, luminance2: number) {
  const lighter = Math.max(luminance1, luminance2);
  const darker = Math.min(luminance1, luminance2);
  return (lighter + lCon.adjustment) / (darker + lCon.adjustment);
}

export function calculateTextContrast(
  color: ValidColorFormat,
  black: ValidColorFormat = '#000',
  white: ValidColorFormat = '#fff',
  minContrast: number = 4.5,
) {
  const luminance = getColorLuminance(color);

  const contrastWhite = getContrastRatio(luminance, getColorLuminance(white));
  const contrastBlack = getContrastRatio(luminance, getColorLuminance(black));

  if (contrastWhite >= minContrast) {
    if (contrastBlack >= minContrast) {
      return contrastBlack > contrastWhite ? black : white;
    }
    return white;
  }
  if (contrastBlack >= minContrast) {
    return black;
  }

  return contrastBlack > contrastWhite ? black : white;
}
