import darkColors from './darkMode';
import lightColors from './lightMode';
import margins from './margins';
import shadows from './shadows';
export * from './breakpoints';

export const darkTheme = {
  colors: darkColors,
  margins,
  shadows,
} as const;

export const lightTheme = {
  colors: lightColors,
  margins,
  shadows,
} as const;
