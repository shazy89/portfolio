import { theme } from 'theme'
import { css } from '@emotion/css'

export const navHeight = '4rem'

export const mainNav = css`
  align-items: center;
  display: flex;
  width: 100%;
`

export const navList = css`
  align-items: center;
  display: flex;
  flex: 1;
  height: ${navHeight};
  justify-content: space-between;
`

export const logoListItem = css`
  padding: 0 ${theme.space.s600} 0 ${theme.space.s400};

  svg {
    height: 100%;
    width: 9rem;
  }
`
