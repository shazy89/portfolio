import * as React from 'react'

import { useScreenSize } from 'components/hooks/use-screensize'
import { DeviceName } from 'components/mixins/media-queries'

interface ResponsiveProps {
  screenSize: DeviceName | DeviceName[]
}

export const Responsive = ({ children, screenSize }: React.PropsWithChildren<ResponsiveProps>) => {
  const { isDesktop, isMobile, isTablet } = useScreenSize()

  const screenSizes = Array.isArray(screenSize) ? screenSize : [screenSize]

  const show =
    (screenSizes.includes('mobile') && isMobile) ||
    (screenSizes.includes('tablet') && isTablet) ||
    (screenSizes.includes('desktop') && isDesktop)

  return show ? <>{children}</> : null
}
