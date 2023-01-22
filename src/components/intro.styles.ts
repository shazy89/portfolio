import { css } from '@emotion/css'
import { Property } from 'csstype'
import { mq } from './mixins/media-queries'
import { theme } from 'theme'

export const container = css`
  width: 100%;
  display: flex;
  padding: ${theme.space.s700};
  flex-direction: column;
  align-items: center;

  ${mq.mobile} {
    padding: ${theme.space.s200};
    gap: ${theme.space.s900};
  }
  ${mq.desktop} {
    padding: ${theme.space.s700};
    justify-content: space-around;
  }
`

export const heading = css`
  border-left: 3px solid ${theme.color.yellow100};
  padding: ${theme.space.s400};
`

export const verticalLine = (direction: Property.AlignSelf) => css`
  border-bottom: 3px solid ${theme.color.yellow100};
  width: 20%;
  align-self: ${direction};
`
