import { css, cx } from '@emotion/css'
import { theme } from '../../theme/index'
import { Color, FontSize } from 'theme/definitions'
import * as React from 'react'

export type TextTag = 'div' | 'p' | 'span'

type TextProps = {
  children: React.ReactNode
  centerAlign?: boolean
  color?: Color
  tag?: TextTag
  size?: FontSize
}

export const Text = ({ children, color = 'text', tag: Tag = 'div', centerAlign, size }: TextProps) => {
  return (
    <Tag
      className={css({
        color: theme.color[color],
        textAlign: centerAlign ? 'center' : 'left',
        fontSize: size && theme.fontSize[size],
        lineHeight: 1.3,
      })}
    >
      {children}
    </Tag>
  )
}
