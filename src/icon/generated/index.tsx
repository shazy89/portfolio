
import { FunctionComponent, SVGProps } from 'react'

import { default as CircleLeftSolid } from './circle-left-solid'
import { default as CircleRightSolid } from './circle-right-solid'
import { default as Facebook } from './facebook'
import { default as Github } from './github'
import { default as Instagram } from './instagram'
import { default as Linkedin } from './linkedin'

export const iconNames = [
'circle-left-solid',
'circle-right-solid',
'facebook',
'github',
'instagram',
'linkedin'
] as const

export type IconName = typeof iconNames[number]

export const iconMap: Record<IconName, FunctionComponent<SVGProps<any>>> = {
'circle-left-solid': CircleLeftSolid,
'circle-right-solid': CircleRightSolid,
'facebook': Facebook,
'github': Github,
'instagram': Instagram,
'linkedin': Linkedin
}
  