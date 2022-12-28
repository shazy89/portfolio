import { button, anchorStyles } from './button.styles'
import * as React from 'react'
import { cx } from '@emotion/css'
import { Color, FontSize } from 'theme/definitions'
import { Icon, IconSize } from 'icon/icon'
import { IconName } from 'icon/generated/index'
import { ScreenId } from 'components/layout/containers/container.definitions'
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
  to: `/#${ScreenId}`
  children?: React.ReactNode
}

export const AnchorButton = ({ to, children }: AnchorButtonProps) => {
  return (
    <AnchorLink className={cx(button, anchorStyles)} to={to}>
      {children}
    </AnchorLink>
  )
}

type SizeKeys = 'sm' | 'md' | 'lg'
type Sizes = 's400' | 's600' | 's900'

const anchorButtonsizes: Record<SizeKeys, Sizes> = {
  sm: 's400',
  md: 's600',
  lg: 's900',
}

type ExternalAnchorButtonProps = {
  to: string
  iconName: IconName
  size?: SizeKeys
  label: string
  children?: React.ReactNode
}

export const ExternalAnchorButton = React.forwardRef<HTMLAnchorElement, ExternalAnchorButtonProps>(
  ({ to, iconName, label, children, size = 'lg', ...rest }: ExternalAnchorButtonProps, ref) => {
    return (
      <a
        className={cx(anchorStyles, children ? button : undefined)}
        href={to}
        ref={ref}
        rel='noopener noreferrer'
        target='_blank'
        aria-label={label}
        {...rest}
      >
        {iconName && <Icon name={iconName} size={anchorButtonsizes[size]} color='icon' />}
        <span>{children}</span>
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
