import { css } from '@emotion/css'
import { theme } from 'theme'
import { mq } from 'components/mixins/media-queries'

export const line = css`
  border-left: 3px solid ${theme.color.yellow100};
`

export const container = css`
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: space-evenly;
`

export const mobileContainer = css`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  gap: ${theme.space.s500};
`

export const projectHeading = css`
  width: 60%;
  border-bottom: 3px solid ${theme.color.yellow100};
  padding: ${theme.space.s300};

  ${mq.mobile} {
    padding: ${theme.space.s100};
  }
`
