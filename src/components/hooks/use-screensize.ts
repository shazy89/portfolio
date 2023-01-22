import * as React from 'react'

import { screenSizeContext } from 'components/providers/screensize-provider'

export function useScreenSize() {
  const context = React.useContext(screenSizeContext)

  if (context === undefined) {
    throw new Error('useScreenSize requires a ScreenSizeProvider')
  }

  return context
}
