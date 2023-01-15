import { screen } from './containers.styles'
import { ScreenOptions, ScreenId } from './container.definitions'
import * as React from 'react'

type ScreenProps = ScreenOptions & {
  children: React.ReactNode
  screenId?: ScreenId
}

export const Screen = ({ children, border, borderRadius, backgroundColor, screenId }: ScreenProps) => {
  return (
    <section id={screenId} className={screen({ border, borderRadius, backgroundColor })}>
      {children}
    </section>
  )
}
