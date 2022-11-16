import { container } from './heading-screen-content.styles'
import React from 'react'

type HeadingScreenContentProps = {
  children: React.ReactNode
}

export const HeadingScreenContent = ({ children }: HeadingScreenContentProps) => {
  return <div className={container}>{children}</div>
}
