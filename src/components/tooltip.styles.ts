import { css } from '@emotion/css'

import { theme } from 'theme'

export const tooltip = css`
  > .tippy-content {
    background-color: ${theme.color.gray200};
    border-radius: ${theme.border.radiusDefault};
    padding: ${theme.space.s400};
  }

  > .tippy-arrow {
    color: ${theme.color.gray200};
  }

  box-shadow: 0px 0px 3px ${theme.color.gray200};
`
