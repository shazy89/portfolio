import { ExternalAnchorButton } from 'components/button/button'
import { graphql, useStaticQuery } from 'gatsby'
import { Tooltip, TooltipContent, TooltipTrigger } from 'components/tooltip'
import React from 'react'
import { container } from './media-links.styles'
import { IconName } from 'icon/generated'

type MediaLinkProps = {
  children: React.ReactNode
  iconName: IconName
  to: string
}

const MediaLink = ({ children, to, iconName }: MediaLinkProps) => (
  <Tooltip>
    <TooltipTrigger>
      <ExternalAnchorButton to={to} iconName={iconName} />
    </TooltipTrigger>
    <TooltipContent>{children}</TooltipContent>
  </Tooltip>
)

export const MediaLinks = () => {
  const socialMediaData = useStaticQuery(graphql`
    query SocialMedia {
      welcomeJson {
        social {
          iconName
          link
          tooltip
        }
      }
    }
  `)

  console.log(socialMediaData)
  return (
    <div className={container}>
      <Tooltip>
        <TooltipTrigger>
          <ExternalAnchorButton to='#' iconName='github' />
        </TooltipTrigger>
        <TooltipContent>Content</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger>
          <ExternalAnchorButton to='#' iconName='github' />
        </TooltipTrigger>
        <TooltipContent>Content</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger>
          <ExternalAnchorButton to='#' iconName='instagram' />
        </TooltipTrigger>
        <TooltipContent>Content</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger>
          <ExternalAnchorButton to='#' iconName='github' />
        </TooltipTrigger>
        <TooltipContent>Content</TooltipContent>
      </Tooltip>
    </div>
  )
}
