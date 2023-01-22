import * as React from 'react'

import { breakpointMinWidths } from 'components/mixins/media-queries'

type ScreenSizeContextValue = {
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
}

export const screenSizeContext = React.createContext<ScreenSizeContextValue | undefined>(undefined)


export const ScreenSizeProvider = ({ children }: React.PropsWithChildren<unknown>) => {
  const [width, setWidth] = React.useState(window.innerWidth)

  React.useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const value = React.useMemo(
    () => ({
      isMobile: width < breakpointMinWidths.tablet,
      isTablet: width >= breakpointMinWidths.tablet && width < breakpointMinWidths.desktop,
      isDesktop: width >= breakpointMinWidths.desktop,
    }),
    [width]
  )

  return <screenSizeContext.Provider value={value}>{children}</screenSizeContext.Provider>
}