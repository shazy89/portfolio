import { button, anchorStyles } from './button.styles'
import * as React from 'react'
import { cx } from '@emotion/css'
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
  children: React.ReactNode
}

export const AnchorButton = ({ to, children }: AnchorButtonProps) => {
  return (
    <AnchorLink className={cx(button, anchorStyles)} to={to}>
      {children}
    </AnchorLink>
  )
}

export const IconLinks = ({}) => {}
