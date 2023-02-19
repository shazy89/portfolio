import { theme } from 'theme'
import { mq } from 'components/mixins/media-queries'
import { css } from '@emotion/css'

export const navHeight = '4rem'

export const mainNav = css`
  align-items: center;
  display: flex;
  width: 100%;
  padding: 0 ${theme.space.s1000} 0 0;
`

export const mobileNav = css`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0 ${theme.space.s300} ${theme.space.s300} 0;
`

export const navList = css`
  align-items: center;
  display: flex;
  flex: 1;
  height: ${navHeight};
  justify-content: space-between;
`

export const logoListItem = css`
  svg {
    height: 100%;
    width: 9rem;

    ${mq.mobile} {
      width: 6rem;
    }
    ${mq.desktop} {
      width: 9rem;
    }
  }
`
export const mobileNavMenu = css`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${theme.color.gray300};
  z-index: 1000;
  padding: ${theme.space.s600};
`

export const noScroll = css`
  overflow: hidden;
`

export const mobileMenuList = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`
