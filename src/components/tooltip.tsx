import { Placement } from 'tippy.js'
import 'tippy.js/dist/tippy.css'
import * as React from 'react'
import Tippy, { TippyProps } from '@tippyjs/react'
import { tooltip } from './tooltip.styles'

type TooltipElement = Pick<TippyProps, 'reference'>

export const Tooltip = ({ children }: React.PropsWithChildren<TooltipElement>) => {
  const reference = React.useRef(null)
  return (
    <>
      {React.Children.map(children, child => {
        const element = child as React.ReactElement<React.PropsWithChildren<TooltipElement>>
        return React.cloneElement(element, { reference })
      })}
    </>
  )
}

export const TooltipTrigger = ({ children, reference }: React.PropsWithChildren<TooltipElement>) => {
  return (
    <>
      {React.Children.map(children, child => {
        const element = child as React.ReactElement<React.PropsWithChildren<any>>
        return React.cloneElement(element, { ref: reference })
      })}
    </>
  )
}

export interface TooltipProps extends TooltipElement {
  visible?: boolean
  placement?: Placement
  children?: React.ReactNode
}

export const TooltipContent = ({ children, reference, placement, visible }: TooltipProps) => {
  return (
    <Tippy
      arrow
      className={tooltip}
      content={children}
      duration={300}
      placement={placement}
      reference={reference}
      visible={visible}
    />
  )
}

/* <Tooltip>
  <TooltipTrigger>
    <Button >
Trigger
    </Button>
  </TooltipTrigger>
  <TooltipContent>
  Content
  </TooltipContent>
</Tooltip> */
