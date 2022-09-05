type ColorValue = `#${string}`
type SizeValue = `${number}px` | `${number}rem` | `${number}%` | '0' | `${number}vh` | `${number}vw`

type ColorName = 'orange' | 'yellow' | 'gray' 
type ColorLevel = '100' | '200' | '300'
type Color = `${ColorName}${ColorLevel}` | 'text' | 'black' | 'white'

const spaceNames = ['none', 's100', 's200', 's300', 's400', 's500', 's600', 's700', 's800', 's900'] as const
type SpaceName = typeof spaceNames[number]

 const fontSizes = [
    's50',
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
 type FontSize = typeof fontSizes[number]

type ColorTheme = { [k in Color]: ColorValue }
type SpaceTheme = { [k in SpaceName]: SizeValue }
type FontSizeTheme = {[k in FontSize]: SizeValue}

export type Theme = {
  color: ColorTheme
  space: SpaceTheme
  fontSize: FontSizeTheme
}
