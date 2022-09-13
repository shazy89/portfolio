import { css, injectGlobal } from '@emotion/css'
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
`
