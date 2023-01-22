import { theme } from 'theme'
import { css } from '@emotion/css'
import { mq } from 'components/mixins/media-queries'

export const container = css`
  /* nav height 4rem */
  height: calc(100% - 4rem);
  display: flex;
  flex-direction: row;
  gap: 3rem;
  padding: 0 ${theme.space.s900};
`
export const mobileContainer = css`
  height: calc(100% - 4rem);
  display: flex;
  gap: ${theme.space.s300};
  padding: 0 ${theme.space.s300};
`
