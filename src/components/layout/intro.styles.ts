import { css } from '@emotion/css'
import { Property } from 'csstype'
import { theme } from 'theme'

export const container = css`
  width: 100%;
  display: flex;
  padding: ${theme.space.s700};
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
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
