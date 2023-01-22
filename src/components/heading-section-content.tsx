import { container, mobileContainer } from './heading-section-content.styles'
import { cx } from '@emotion/css'
import React from 'react'
import { useScreenSize } from './hooks/use-screensize'
import { mobileNav } from './layout/nav/nav.styles'

type HeadingScreenContentProps = {
  children: React.ReactNode
}

export const HeadingScreenContent = ({ children }: HeadingScreenContentProps) => {
  const { isDesktop, isMobile } = useScreenSize()
  return <div className={cx({ [container]: isDesktop, [mobileContainer]: isMobile })}>{children}</div>
}
