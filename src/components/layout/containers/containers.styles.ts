import { css, injectGlobal } from '@emotion/css'
import { ScreenOptions } from './container.definitions'
import { theme } from 'theme'

injectGlobal`
body {
  background-color: ${theme.color.gray300}
}
`

export const page = css`
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 4.5rem;
`
export type BoxBorder = 'primary'

export const boxBorders: Record<BoxBorder, string> = {
  primary: `3px solid ${theme.color.yellow100}`,
}

export const screen = ({ border, borderRadius, backgroundColor }: ScreenOptions) =>
  css({
    border: border && boxBorders[border],
    borderRadius: borderRadius && theme.border[borderRadius],
    height: '100%',
    padding: theme.space.s700,
    backgroundColor: theme.color[backgroundColor],
  })
