import { button, anchorStyles } from './button.styles'
import * as React from 'react'
import { cx } from '@emotion/css'
import { Color, FontSize } from 'theme/definitions'
import { Icon } from 'icon/icon'
import { IconName } from 'icon/generated/index'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

type BaseProps = {
  children: React.ReactNode
}
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & BaseProps

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...rest }: React.PropsWithChildren<ButtonProps>, ref) => (
    <button className={button} ref={ref} type='button' {...rest}>
      {children}
    </button>
  )
)

type AnchorButtonProps = {
  to: string
  children?: React.ReactNode
}

export const AnchorButton = ({ to, children }: AnchorButtonProps) => {
  return (
    <AnchorLink className={cx(button, anchorStyles)} to={to}>
      {children}
    </AnchorLink>
  )
}

type ExternalAnchorButtonProps = {
  to: string
  iconName: IconName
  label: string
}

export const ExternalAnchorButton = React.forwardRef<HTMLAnchorElement, ExternalAnchorButtonProps>(
  ({ to, iconName, label, ...rest }: ExternalAnchorButtonProps, ref) => {
    return (
      <a
        className={cx(anchorStyles)}
        href={to}
        ref={ref}
        rel='noopener noreferrer'
        target='_blank'
        aria-label={label}
        {...rest}
      >
        {iconName && <Icon name={iconName} size='s900' color='icon' />}
      </a>
    )
  }
)

type IconButtonProps = {
  iconColor: Color
  size: FontSize
  iconName: IconName
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ iconColor, size, ...rest }: IconButtonProps, ref) => {
    return (
      <button ref={ref} {...rest}>
        HEY
      </button>
    )
  }
)
