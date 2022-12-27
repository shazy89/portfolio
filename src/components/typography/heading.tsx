import { css, cx } from '@emotion/css'
import { theme } from 'theme'
import { Color, SpaceName } from 'theme/definitions'
import { h1, h2, h3, h4, h5, h6, heading, headingScreen } from './heading.styles'

export const headingTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const
export type HeadingTag = typeof headingTags[number]

export const headingSizes = ['100', '200', '300', '400', '500', '600', '700'] as const
export type HeadingSize = typeof headingSizes[number]

export type HeadingProps = {
  size?: HeadingSize
  whiteSpace?: SpaceName
  centerAlign?: boolean
  tag: HeadingTag
  color?: Color
  id?: string
}

const headings: Record<HeadingTag, string> = {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
}

const headingSizeMap: Record<HeadingSize, string> = {
  100: h6,
  200: h5,
  300: h4,
  400: h3,
  500: h2,
  600: h1,
  700: headingScreen,
}

export const Heading = ({
  children,
  color = 'text',
  id,
  size,
  tag: Tag,
  centerAlign,
  whiteSpace,
}: React.PropsWithChildren<HeadingProps>) => {
  return (
    <Tag
      id={id}
      className={cx(
        size ? headingSizeMap[size] : headings[Tag],
        heading,
        css({
          color: theme.color[color],
          textIndent: whiteSpace && theme.space[whiteSpace],
          textAlign: centerAlign ? 'center' : 'left',
        })
      )}
    >
      {children}
    </Tag>
  )
}
