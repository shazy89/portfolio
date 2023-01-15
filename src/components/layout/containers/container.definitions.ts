import { BorderKey } from 'theme/definitions'

export type BoxBorder = 'primary'

export type ScreenOptions = {
  border?: BoxBorder
  borderRadius?: BorderKey
  backgroundColor: 'gray200' | 'black'
}

const screenIds = ['heading-screen', 'portfolio-screen', 'about-me-screen', 'footer'] as const
export type ScreenId = typeof screenIds[number]
