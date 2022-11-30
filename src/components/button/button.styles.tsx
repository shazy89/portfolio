import { theme } from 'theme'
import { css } from '@emotion/css'

export const button = css`
  align-items: center;
  background: ${theme.color.button};
  border-radius: ${theme.border.radiusDefault};
  color: ${theme.color.text};
  display: inline-flex;
  font-family: inherit;
  font-size: ${theme.fontSize.s200};
  gap: ${theme.space.s300};
  justify-content: center;
  padding: ${theme.space.s300} ${theme.space.s400};
  white-space: nowrap;
  min-width: 11rem;
  box-shadow: 0px 0px 3px #e2e2e2;

  :disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }

  :active:enabled {
    background: ${theme.color.gray200};
    box-shadow: 0px 0px 3px #e2e2e2;
  }

  :hover {
    background-color: ${theme.color.gray200};
  }
`

export const anchorStyles = css`
  :hover {
    background-color: ${theme.color.gray200};
  }

  :link,
  :link:active,
  :link:hover,
  :link:visited {
    text-decoration: none;
  }

  :link:active {
    background-color: ${theme.color.gray200};
    box-shadow: 0px 0px 3px #e2e2e2;
  }
`
