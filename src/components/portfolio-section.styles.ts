import { css } from '@emotion/css'
import { mq } from 'components/mixins/media-queries'
import { theme } from 'theme'

export const container = css`
  height: calc(100% - 8rem);
  position: relative;
  padding: ${theme.space.s500} ${theme.space.s800};

  ${mq.mobile} {
    padding: ${theme.space.s300} ${theme.space.s400};
  }
`

type Position = 'left' | 'right'

export const arrow = (position: Position) => css`
  top: calc(50% - 20px);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  z-index: 2;
  ${position}: 0px;
`
export const arrowMobileView = (position: Position) => css`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  z-index: 2;
  bottom: ${theme.space.s300};
  ${position}: 35%;
`
