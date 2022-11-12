
import { FunctionComponent, SVGProps } from 'react'

import { default as Facebook1 } from './facebook1'
import { default as Github1 } from './github1'
import { default as Instagram1 } from './instagram1'
import { default as Linkedin1 } from './linkedin1'

export const iconNames = [
'facebook1',
'github1',
'instagram1',
'linkedin1'
] as const

export type IconName = typeof iconNames[number]

export const iconMap: Record<IconName, FunctionComponent<SVGProps<any>>> = {
'facebook1': Facebook1,
'github1': Github1,
'instagram1': Instagram1,
'linkedin1': Linkedin1
}
  