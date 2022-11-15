import { css } from '@emotion/css'
import { IconSize } from './icon'
import { Color } from 'theme/definitions'
import { theme } from 'theme'

export const icon = (size?: IconSize) => css`
  flex-shrink: 0;
  font-size: ${size ? theme.fontSize[size] : 'inherit'};
`
export const iconColor = (color: Color) => css`
  color: ${theme.color[color]};
`

export const spinAnimation = css`
  animation: spin 2s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`
