import { BorderKey } from 'theme/definitions'
import { BoxBorder } from './containers.styles'

export type ScreenOptions = {
  border?: BoxBorder
  borderRadius?: BorderKey
  backgroundColor: 'gray200' | 'black'
}

const screenIds = ['heading-screen', 'portfolio-screen', 'about-me-screen'] as const
export type ScreenId = typeof screenIds[number]
