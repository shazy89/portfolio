
import { FunctionComponent, SVGProps } from 'react'

import { default as Facebook } from './facebook'
import { default as Github } from './github'
import { default as Instagram } from './instagram'
import { default as Linkedin } from './linkedin'

export const iconNames = [
'facebook',
'github',
'instagram',
'linkedin'
] as const

export type IconName = typeof iconNames[number]

export const iconMap: Record<IconName, FunctionComponent<SVGProps<any>>> = {
'facebook': Facebook,
'github': Github,
'instagram': Instagram,
'linkedin': Linkedin
}
  