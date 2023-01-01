import { theme } from 'theme'

import { css } from '@emotion/css'

export const about = css`
  width: 40%;
  height: 100%;
  background-color: ${theme.color.black};
  border-top: 3px solid ${theme.color.yellow100};
  padding: ${theme.space.s700} ${theme.space.s600};
  display: flex;
  flex-direction: column;
  gap: ${theme.space.s800};
`
