
import { FunctionComponent, SVGProps } from 'react'

import { default as Bootstrap } from './bootstrap'
import { default as CircleLeftSolid } from './circle-left-solid'
import { default as CircleRightSolid } from './circle-right-solid'
import { default as Css } from './css'
import { default as ExpressJs } from './express-js'
import { default as Facebook } from './facebook'
import { default as GatsbyJs } from './gatsby-js'
import { default as Github } from './github'
import { default as Html } from './html'
import { default as Instagram } from './instagram'
import { default as Javascript } from './javascript'
import { default as Linkedin } from './linkedin'
import { default as Mongo } from './mongo'
import { default as NodeJs } from './node-js'
import { default as Postgresql } from './postgresql'
import { default as React } from './react'
import { default as Redux } from './redux'
import { default as RubyRails } from './ruby-rails'
import { default as Sass } from './sass'
import { default as Typescript } from './typescript'
import { default as Youtube } from './youtube'

export const iconNames = [
'bootstrap',
'circle-left-solid',
'circle-right-solid',
'css',
'express-js',
'facebook',
'gatsby-js',
'github',
'html',
'instagram',
'javascript',
'linkedin',
'mongo',
'node-js',
'postgresql',
'react',
'redux',
'ruby-rails',
'sass',
'typescript',
'youtube'
] as const

export type IconName = typeof iconNames[number]

export const iconMap: Record<IconName, FunctionComponent<SVGProps<any>>> = {
'bootstrap': Bootstrap,
'circle-left-solid': CircleLeftSolid,
'circle-right-solid': CircleRightSolid,
'css': Css,
'express-js': ExpressJs,
'facebook': Facebook,
'gatsby-js': GatsbyJs,
'github': Github,
'html': Html,
'instagram': Instagram,
'javascript': Javascript,
'linkedin': Linkedin,
'mongo': Mongo,
'node-js': NodeJs,
'postgresql': Postgresql,
'react': React,
'redux': Redux,
'ruby-rails': RubyRails,
'sass': Sass,
'typescript': Typescript,
'youtube': Youtube
}
  