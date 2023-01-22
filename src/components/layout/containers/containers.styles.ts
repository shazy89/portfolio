import { css, injectGlobal } from '@emotion/css'
import { BoxBorder, ScreenOptions } from './container.definitions'
import { mq } from 'components/mixins/media-queries'
import { theme } from 'theme'

const screenHeight = '781px'
const footerSize = `160px`

injectGlobal`
body {
  background-color: ${theme.color.gray300}
}
`

export const page = css`
  display: flex;
  flex-direction: column;

  ${mq.mobile} {
    padding: ${theme.space.s600};
  }
  ${mq.desktop} {
    padding: ${theme.space.s900};
  }
`

export const boxBorders: Record<BoxBorder, string> = {
  primary: `3px solid ${theme.color.yellow100}`,
}

export const screen = ({ border, borderRadius, backgroundColor }: ScreenOptions) => css`
  position: relative;
  border: ${border && boxBorders[border]};
  border-radius: ${borderRadius && theme.border[borderRadius]};
  height: ${screenHeight};

  background-color: ${theme.color[backgroundColor]};

  ${mq.mobile} {
    padding: ${theme.space.s400};
  }
  ${mq.desktop} {
    padding: ${theme.space.s700};
  }
`

export const footer = css`
  display: flex;
  flex-direction: column;
  height: ${footerSize};
  align-items: center;
  justify-content: space-around;
`
