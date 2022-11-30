type ColorValue = `#${string}`
export type SizeValue = `${number}px` | `${number}rem` | `${number}%` | '0' | `${number}vh` | `${number}vw`

type ColorName = 'orange' | 'yellow' | 'gray'
type ColorLevel = '100' | '200' | '300'
export type Color = `${ColorName}${ColorLevel}` | 'text' | 'black' | 'white' | 'button' | 'icon'

const spaceNames = [
  'none',
  's100',
  's200',
  's300',
  's400',
  's500',
  's600',
  's700',
  's800',
  's900',
  's1000',
] as const
export type SpaceName = typeof spaceNames[number]

const fontSizes = ['s50', 's100', 's200', 's300', 's400', 's500', 's600', 's700', 's800', 's900', 's1000'] as const
export type FontSize = typeof fontSizes[number]

const borderKeys = ['radiusLarge', 'radiusDefault', 'radiusSmall'] as const
export type BorderKey = typeof borderKeys[number]

export type ColorTheme = { [k in Color]: ColorValue }
export type SpaceTheme = { [k in SpaceName]: SizeValue }
export type FontSizeTheme = { [k in FontSize]: SizeValue }
export type BorderTheme = { [k in BorderKey]: SizeValue }

export type Theme = {
  color: ColorTheme
  border: BorderTheme
  space: SpaceTheme
  fontSize: FontSizeTheme
}
