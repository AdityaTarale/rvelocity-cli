import darkColors from './darkMode';
import lightColors from './lightMode';
import margins from './margins';
import shadows from './shadows';
import {fontSize, fontWeight, lineHeight} from './typography';
export * from './breakpoints';

export const darkTheme = {
  colors: darkColors,
  fontWeight,
  fontSize,
  lineHeight,
  margins,
  shadows
} as const;

export const lightTheme = {
  colors: lightColors,
  fontWeight,
  fontSize,
  lineHeight,
  margins,
  shadows
} as const;

export type Theme = typeof lightTheme;
