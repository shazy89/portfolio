import { cx } from '@emotion/css'
import React from 'react'

import { Color, FontSize } from 'theme/definitions'
import { iconMap, IconName } from './generated'

import { icon, iconColor, spinAnimation } from './icon.styles'

type IconSvgProps = Pick<React.SVGAttributes<SVGSVGElement>, 'aria-hidden'>
export type IconSize = FontSize

export interface IconProps extends IconSvgProps {
  color?: Color
  name: IconName
  size?: IconSize
  spin?: boolean
}

const Icon = ({ color, name, size, spin, ...rest }: IconProps) => {
  const IconComponent = iconMap[name]

  return (
    <IconComponent
      aria-hidden
      className={cx(icon(size), color && iconColor(color), spin && spinAnimation)}
      {...rest}
    />
  )
}

export { Icon }
