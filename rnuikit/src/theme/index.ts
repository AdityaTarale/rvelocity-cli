import darkColors from './darkMode';
import lightColors from './lightMode';
import margins from './margins';
import shadows from './shadows';
import typeFaces from './typography';
export * from './breakpoints';

export const darkTheme = {
  colors: darkColors,
  typeFaces,
  margins,
  shadows
} as const;

export const lightTheme = {
  colors: lightColors,
  typeFaces,
  margins,
  shadows
} as const;

export type Theme = typeof lightTheme;
