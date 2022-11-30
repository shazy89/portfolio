import { css } from '@emotion/css'
import { SpaceName } from 'theme/definitions'
import { theme } from 'theme'
import { Property } from 'csstype'

export type AreaProps = {
  alignItems?: Property.AlignItems
  direction?: Property.FlexDirection
  padding?: SpaceName
  flex?: Property.Flex
  flexGrow?: Property.FlexGrow
  flexShrink?: Property.FlexShrink
  gap?: SpaceName
  justifyContent?: Property.JustifyContent
  wrap?: Property.FlexWrap
}

export const area = ({
  alignItems,
  direction = 'column',
  flex,
  flexGrow,
  flexShrink,
  gap = 's400',
  justifyContent,
  wrap,
  padding,
}: AreaProps) =>
  css({
    alignItems: alignItems && alignItems,
    display: 'flex',
    flex: flex && flex,
    flexDirection: direction,
    flexGrow,
    flexShrink,
    flexWrap: wrap && wrap,
    gap: theme.space[gap],
    justifyContent: justifyContent && justifyContent,
    padding: padding && theme.space[padding],
  })

type AreaPropsWithChildren = AreaProps & {
  children: React.ReactNode
}

export const Area = ({ children, ...areaProps }: AreaPropsWithChildren) => (
  <div className={area(areaProps)}>{children}</div>
)
