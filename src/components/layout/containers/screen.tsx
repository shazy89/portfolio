import { screen } from './containers.styles'
import { ScreenOptions } from './container.definitions'
import * as React from 'react'

type ScreenProps = ScreenOptions & {
  children: React.ReactNode
}

export const Screen = ({ children, border, borderRadius }: ScreenProps) => {
  return <section className={screen({ border, borderRadius })}>{children}</section>
}
