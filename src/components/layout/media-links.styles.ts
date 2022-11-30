import { theme } from 'theme'
import { css } from '@emotion/css'

export const container = css`
  display: flex;
  flex-direction: column;
  gap: ${theme.space.s600};
  flex: 1;
  width: 5%;
  align-items: center;
  justify-content: center;
  height: 100%;
`

export const horizontalLine = css`
  height: 2.8rem;
  border-left: 3px solid ${theme.color.yellow100};
`

export const text = css`
  writing-mode: tb;
  color: ${theme.color.text};
`
