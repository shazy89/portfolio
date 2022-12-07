import { theme } from 'theme'

import { css } from '@emotion/css'

export const progressBar = (progress: number) => css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 5px;
  background: ${theme.gradient.gold};
  transform-origin: 0%;
  transform: ${`scaleX(calc(${progress}))`};
`
