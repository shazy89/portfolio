import { button, anchorStyles } from './button.styles'
import * as React from 'react'
import { cx } from '@emotion/css'
import { Color, FontSize } from 'theme/definitions'
import { Icon } from 'icon/icon'
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

export type AnchorButtonSizeKeys = 'sm' | 'md' | 'lg'
export type AnchorButtonSizes = 's400' | 's600' | 's900'

const anchorButtonsizes: Record<AnchorButtonSizeKeys, AnchorButtonSizes> = {
  sm: 's400',
  md: 's600',
  lg: 's900',
}

type ExternalAnchorBaseProps = {
  to: string
  iconName: IconName
  size?: AnchorButtonSizeKeys
  label: string
  children?: React.ReactNode
}
type ExternalAnchorButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & ExternalAnchorBaseProps

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
  size: AnchorButtonSizeKeys
  iconName: IconName
  label: string
  children?: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ iconColor, iconName, size, label, children, ...rest }: IconButtonProps, ref) => {
    return (
      <button ref={ref} aria-label={label} {...rest}>
        {children}
        <Icon name={iconName} size={anchorButtonsizes[size]} color={iconColor} />
      </button>
    )
  }
)
