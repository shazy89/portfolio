import { theme } from 'theme'
import { css } from '@emotion/css'

export const container = css`
  display: flex;
  flex-direction: column;
  gap: ${theme.space.s600};
  width: 5%;
  align-items: center;
  justify-content: center;
  height: 100%;
`
