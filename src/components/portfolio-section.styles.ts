import { css } from '@emotion/css'
import { theme } from 'theme'

export const container = css`
  height: calc(100% - 8rem);
  position: relative;
  padding: 0 ${theme.space.s800};
`

type Position = 'left' | 'right'

export const arrow = (position: Position) => css`
  top: calc(50% - 20px);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
  z-index: 2;
  ${position}: 0px;
`
