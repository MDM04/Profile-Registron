import 'styled-components';
import type { defaultTheme } from '../global/defaultTheme';
;

type ThemeType = typeof defaultTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType{
    __brand?: 'Theme';
  }
}

