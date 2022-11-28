import { ExternalAnchorButton } from 'components/button/button'
import { graphql, useStaticQuery } from 'gatsby'
import { Tooltip, TooltipContent, TooltipTrigger } from 'components/tooltip'
import React from 'react'

import { container, horizontalLine, text } from './media-links.styles'
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

type SocinalData = {
  id: string
  iconName: IconName
  link: string
  tooltip: string
}

type MediaLinks = {
  welcomeJson: {
    social: SocinalData[]
  }
}

export const MediaLinks = () => {
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

  return (
    <div className={container}>
      <div className={text}>Follow Me</div>
      <div className={horizontalLine} />
      {socialMediaData.welcomeJson.social.map(s => (
        <MediaLink key={s.id} label={s.iconName} iconName={s.iconName} to={s.link}>
          {s.tooltip}
        </MediaLink>
      ))}
    </div>
  )
}
