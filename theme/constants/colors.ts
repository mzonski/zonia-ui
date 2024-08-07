import { isString } from '@zonia-ui/core';

import type { ThemePrimaryColor, ThemeSecondaryColor, ValidColorFormat } from '../types';

export const themePrimaryColorKey = [
  'black',
  'white',
  'grey50',
  'grey100',
  'grey200',
  'grey300',
  'grey400',
  'grey500',
  'primary',
  'primaryLight',
  'info',
  'infoLight',
  'error',
  'error2',
  'errorLight',
  'warning',
  'warningLight',
  'success',
  'successLight',
] as const;

export const primaryColors = {
  black: '#000',
  white: '#FFF',
  grey50: '#FBFBF9',
  grey100: '#F4F4F0',
  grey200: '#E7E5E4',
  grey300: '#D6D3D1',
  grey400: '#A8A29E',
  grey500: '#78716C',
  primary: '#B286FD',
  primaryLight: '#E9DCFE',
  info: '#93AAED',
  infoLight: '#E9EEFB',
  error: '#EB1C26',
  error2: '#E2442F',
  errorLight: '#FCEBE9',
  warning: '#FFC900',
  warningLight: '#FFFAE5',
  success: '#11A365',
  successLight: '#D2FEEB',
} as const as Record<ThemePrimaryColor, ValidColorFormat>;

export const themeSecondaryColorsKey = [
  'tomato',
  'tomatoLight',
  'fusionCoral',
  'fusionCoralLight',
  'topaz',
  'topazLight',
  'fuelYellow',
  'fuelYellowLight',
  'darkOrange',
  'darkOrangeLight',
  'orange',
  'orangeLight',
  'orangePeel',
  'orangePeelLight',
  'orangeYellow',
  'orangeYellowLight',
  'mikadoYellow',
  'mikadoYellowLight',
  'philippineYellow',
  'philippineYellowLight',
  'yellow',
  'yellowLight',
  'slimeGreen',
  'slimeGreenLight',
  'neoGreen',
  'neoGreenLight',
  'freshGreen',
  'freshGreenLight',
  'celadonGreen',
  'celadonGreenLight',
  'seaGreen',
  'seaGreenLight',
  'jadeGreen',
  'jadeGreenLight',
  'jungleGreen',
  'jungleGreenLight',
  'oceanGreen',
  'oceanGreenLight',
  'teal',
  'tealLight',
  'cyan',
  'cyanLight',
  'mayaBlue',
  'mayaBlueLight',
  'crystalBlue',
  'crystalBlueLight',
  'cornflowerBlue',
  'cornflowerBlueLight',
  'softBlue',
  'softBlueLight',
  'warmBlue',
  'warmBlueLight',
  'purpleMimosa',
  'purpleMimosaLight',
  'lavenderBlue',
  'lavenderBlueLight',
  'lightPurple',
  'lightPurpleLight',
  'easterPurple',
  'easterPurpleLight',
  'paleViolet',
  'paleVioletLight',
  'violet',
  'violetLight',
  'pink',
  'pinkLight',
  'rosyPink',
  'rosyPinkLight',
  'beanRed',
  'beanRedLight',
  'pastelRed',
  'pastelRedLight',
] as const;

export const secondaryColors = {
  tomato: '#FF7051',
  tomatoLight: '#FFD9D1',
  fusionCoral: '#FF8577',
  fusionCoralLight: '#FFDFDB',
  topaz: '#FFCB7F',
  topazLight: '#FFF2DF',
  fuelYellow: '#FD9B28',
  fuelYellowLight: '#FEEACD',
  darkOrange: '#FA984B',
  darkOrangeLight: '#FEEBD5',
  orange: '#FD9B28',
  orangeLight: '#FEEACD',
  orangePeel: '#FABE24',
  orangePeelLight: '#FDF2C6',
  orangeYellow: '#FABE24',
  orangeYellowLight: '#FDF2C6',
  mikadoYellow: '#F9CB15',
  mikadoYellowLight: '#FDF8C2',
  philippineYellow: '#FFC700',
  philippineYellowLight: '#FFF2DF',
  yellow: '#F1F333',
  yellowLight: '#FDFEE7',
  slimeGreen: '#CEEA76',
  slimeGreenLight: '#F1F9D8',
  neoGreen: '#A2E435',
  neoGreenLight: '#EAFAC9',
  freshGreen: '#4ADC7F',
  freshGreenLight: '#DBFBE6',
  celadonGreen: '#85E0A5',
  celadonGreenLight: '#E9FDEF',
  seaGreen: '#68D391',
  seaGreenLight: '#E6FBED',
  jadeGreen: '#23A185',
  jadeGreenLight: '#EAFAF7',
  jungleGreen: '#23A094',
  jungleGreenLight: '#EAFAF9',
  oceanGreen: '#3CD9A0',
  oceanGreenLight: '#D4FCEC',
  teal: '#2DD3BE',
  tealLight: '#CBFAF0',
  cyan: '#22D2ED',
  cyanLight: '#CEF9FD',
  mayaBlue: '#61BCFF',
  mayaBlueLight: '#D1ECFF',
  crystalBlue: '#60A5F9',
  crystalBlueLight: '#DAE9FD',
  cornflowerBlue: '#689BF7',
  cornflowerBlueLight: '#D3E2FD',
  softBlue: '#828DF9',
  softBlueLight: '#E0E7FF',
  warmBlue: '#5551FF',
  warmBlueLight: '#D2D1FF',
  purpleMimosa: '#A68AF8',
  purpleMimosaLight: '#ECE8FD',
  lavenderBlue: '#C7B9FF',
  lavenderBlueLight: '#F0E3FF',
  lightPurple: '#BE83FA',
  lightPurpleLight: '#F2E7FE',
  easterPurple: '#D47FFB',
  easterPurpleLight: '#F7E8FF',
  paleViolet: '#CB99FF',
  paleVioletLight: '#FFE3F9',
  violet: '#E779F8',
  violetLight: '#F9E7FE',
  pink: '#EA4898',
  pinkLight: '#FBE6F2',
  rosyPink: '#F97084',
  rosyPinkLight: '#FDE2E4',
  beanRed: '#F56565',
  beanRedLight: '#FEE3E3',
  pastelRed: '#DE5456',
  pastelRedLight: '#F7DBD9',
} as const;

export const isThemePrimaryColor = (type: unknown): type is ThemePrimaryColor =>
  isString(type) && themePrimaryColorKey.includes(type as ThemePrimaryColor);
export const isThemeSecondaryColor = (type: unknown): type is ThemeSecondaryColor =>
  isString(type) && themeSecondaryColorsKey.includes(type as ThemeSecondaryColor);
