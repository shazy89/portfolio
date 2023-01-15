import { ExternalAnchorButton } from 'components/button/button'
import { graphql, useStaticQuery } from 'gatsby'
import { Tooltip, TooltipContent, TooltipTrigger } from 'components/tooltip'
import React from 'react'

import { container, text, bottomLine, sideLine } from './media-links.styles'
import { IconName } from 'icon/generated'



type MediaLinkProps = {
  children: React.ReactNode
  iconName: IconName
  to: string
  label: string
}

const MediaLink = ({ children, to, iconName, label }: MediaLinkProps) => (
  <Tooltip>
    <TooltipTrigger>
      <ExternalAnchorButton to={to} iconName={iconName} label={label} />
    </TooltipTrigger>
    <TooltipContent>{children}</TooltipContent>
  </Tooltip>
)

type SocialData = {
  id: string
  iconName: IconName
  link: string
  tooltip: string
}

type MediaLinks = {
  welcomeJson: {
    social: SocialData[]
  }
}

type Direction = 'horizontal' | 'vertical'

type MediaLinksProps = {
  direction: Direction
}

export const MediaLinks = ({ direction }: MediaLinksProps) => {
  const socialMediaData: MediaLinks = useStaticQuery(graphql`
    query SocialMedia {
      welcomeJson {
        social {
          id
          iconName
          link
          tooltip
        }
      }
    }
  `)

  const isVertical = direction === 'vertical'

  return (
    <div className={container(isVertical ? 'column' : 'row')}>
      <div className={text(isVertical ? 'vertical-lr' : 'horizontal-tb')}>Follow Me</div>
      <div className={isVertical ? sideLine : bottomLine} />
      {socialMediaData.welcomeJson.social.map(s => (
        <MediaLink key={s.id} label={s.iconName} iconName={s.iconName} to={s.link}>
          {s.tooltip}
        </MediaLink>
      ))}
    </div>
  )
}
