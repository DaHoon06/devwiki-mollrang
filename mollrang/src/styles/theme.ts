import {DefaultTheme} from 'styled-components';
export type ColorBlack = {
  c100: string;
  c200: string;
};

export type ColorGray = {
  c000?: string;
  c100?: string;
  c200?: string;
  c300?: string;
  c400?: string;
  c500?: string;
};

export type ColorTheme = {
  primary: string;
  bg: string;
  black: ColorBlack;
  warning: string;
  white: string;
  gray: ColorGray;
}

const colors = {
  dark: {
    primary: '#778C86',
    white: '#fff',
    gray: {
      c000: '#A6A6A6',
      c200: '#D6D6D6',
    },
    bg: '#383838',
    black: {
      c100: '#222222',
      c200: '#282828',
    },
    warning: '#FF533B'
  },
  light: {
    primary: '#00C7AE',
    white: '#fff',
    gray: {
      c100: '#C6C6C6',
      c200: '#D6D6D6',
      c300: '#D9D9D9',
      c400: '#EFEFEF',
      c500: '#989898',
    },
    bg: '#fff',
    black:{
      c100: '#000000',
      c200: '#444343',
    },
    warning: '#FF5050'
  },
}

export interface MixinsTheme {
  flexRowsContainer: () => string;
  flexBox: (direction?: string, align?: string, justify?: string) => string;
  positionCenter: (type?: string) => string;
}

const mixins: MixinsTheme = {
  flexRowsContainer: () => `
    display: flex;
    align-items: center;
    justify-content: center;

  `,
  // flex
  flexBox: (direction = 'row', align = 'center', justify = 'center') => `
    display: flex;
    flex-direction: ${direction};
    align-items: ${align};
    justify-content: ${justify};
  `,

  // positions
  positionCenter: (type = 'absolute') => {
    if (type === 'absolute' || type === 'fixed')
      return `
        position: ${type};
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      `;
    return;
  },
};

export interface MediaQueryTheme {
  custom: (width: number) => string;
  mobile: string;
  tablet: string;
  pc: string;
}

const customMediaQuery = (maxWidth: number): string =>
  `@media (max-width: ${maxWidth}px)`;

const media: MediaQueryTheme = {
  custom: customMediaQuery,
  pc: customMediaQuery(1440),
  tablet: customMediaQuery(768),
  mobile: customMediaQuery(576),
};

export const theme: DefaultTheme = {
  colors,
  media,
  mixins
};