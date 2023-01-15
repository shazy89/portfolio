import { css, injectGlobal } from '@emotion/css'
import { BoxBorder, ScreenOptions } from './container.definitions'
import { theme } from 'theme'

const screenHeight = '781px'
const footerSize= `160px`

injectGlobal`
body {
  background-color: ${theme.color.gray300}
}
`

export const page = css`
  display: flex;
  flex-direction: column;
  padding: ${theme.space.s900};
`

export const boxBorders: Record<BoxBorder, string> = {
  primary: `3px solid ${theme.color.yellow100}`,
}

export const screen = ({ border, borderRadius, backgroundColor }: ScreenOptions) =>
  css({
    position: 'relative',
    border: border && boxBorders[border],
    borderRadius: borderRadius && theme.border[borderRadius],
    height: `${screenHeight}`,
    padding: theme.space.s700,
    backgroundColor: theme.color[backgroundColor],
  })

export const footer = css`
  display: flex;
  flex-direction: column;
  height: ${footerSize};
  align-items: center;
  justify-content: space-around;
`
