export const deviceNames = ['mobile', 'tablet', 'desktop'] as const
export type DeviceName = typeof deviceNames[number]

export const breakpointMinWidths: Record<DeviceName, number> = {
  mobile: 0,
  tablet: 768,
  desktop: 1280,
}

export const mq: Record<DeviceName, string> = {
  mobile: `@media (min-width: ${breakpointMinWidths.mobile}px)`,
  tablet: `@media (min-width: ${breakpointMinWidths.tablet}px)`,
  desktop: `@media (min-width: ${breakpointMinWidths.desktop}px)`,
}
