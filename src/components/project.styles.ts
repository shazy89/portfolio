import { css } from '@emotion/css'
import { theme } from 'theme'

export const line = css`
  border-left: 3px solid ${theme.color.yellow100};
`

export const container = css`
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: space-evenly;
`
