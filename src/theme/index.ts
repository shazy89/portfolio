import { Theme } from './definitions'

export const theme: Theme = {
  border: {
    radiusLarge: '2.625rem',
    radiusDefault: '0.25rem',
    radiusSmall: '0.125rem',
  },
  color: {
    black: '#2F2F2F',
    white: '#FFFFFF',
    text: '#E2E2E2',
    icon: '#D9D9D9',
    button: '#737373',
    gray100: '#737373',
    gray200: '#404040',
    gray300: '#2d2d2d',
    orange100: '#FFAA00',
    orange200: '#FCBF49',
    orange300: '#FCA311',
    yellow100: '#FFEA00',
    yellow200: '#FAF991',
    yellow300: '#ffcc00',
  },
  fontSize: {
    s50: '0.625rem',
    s100: '0.75rem',
    s200: '0.875rem',
    s300: '1rem',
    s400: '1.125rem',
    s500: '1.25rem',
    s600: '1.375rem',
    s700: '1.75rem',
    s800: '2rem',
    s900: '2.5rem',
    s1000: '6rem',
  },
  space: {
    none: '0',
    s100: '0.125rem',
    s200: '0.25rem',
    s300: '0.5rem',
    s400: '0.75rem',
    s500: '1rem',
    s600: '1.5rem',
    s700: '2rem',
    s800: '3rem',
    s900: '4rem',
    s1000: '6rem',
  },
  gradient: {
    gold: `radial-gradient(
      ellipse farthest-corner at right bottom,
      #fedb37 0%,
      #fdb931 8%,
      #9f7928 30%,
      #8a6e2f 40%,
      transparent 80%
    ),
    radial-gradient(
      ellipse farthest-corner at left top,
      #ffffff 0%,
      #ffffac 8%,
      #d1b464 25%,
      #5d4a1f 62.5%,
      #5d4a1f 100%
    );`,
  },
}
