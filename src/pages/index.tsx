import { Nav } from 'components/layout/nav/nav'
import { Area } from 'components/layout/containers/area'
import { Tooltip, TooltipContent, TooltipTrigger } from 'components/tooltip'
import { AnchorButton } from 'components/button/button'
import '../assets/reset.css'
import React from 'react'

import { Screen } from 'components/layout/containers/screen'
import { Page } from 'components/layout/containers/page'

const IndexPage = () => {
  return (
    <>
      <Page>
        <Screen border='primary' borderRadius='radiusLarge'>
          <Nav listTitle='main navigation' />
          <Area height='100%'>
            <Area>
              <Tooltip>
                <TooltipTrigger>
                  <AnchorButton isExternal to='#' iconName='github' />
                </TooltipTrigger>
                <TooltipContent>Content</TooltipContent>
              </Tooltip>
            </Area>
            <Area>
              <Tooltip>
                <TooltipTrigger>
                  <AnchorButton isExternal to='#' iconName='github' />
                </TooltipTrigger>
                <TooltipContent>Content</TooltipContent>
              </Tooltip>
            </Area>
            <Area>
              <Tooltip>
                <TooltipTrigger>
                  <AnchorButton isExternal to='#' iconName='github' />
                </TooltipTrigger>
                <TooltipContent>Content</TooltipContent>
              </Tooltip>
            </Area>
            <Area>
              <Tooltip>
                <TooltipTrigger>
                  <AnchorButton isExternal to='#' iconName='github' />
                </TooltipTrigger>
                <TooltipContent>Content</TooltipContent>
              </Tooltip>
            </Area>
          </Area>
        </Screen>
      </Page>
      <Page>
        <Screen border='primary' borderRadius='radiusLarge'>
          <Nav listTitle='second navigation' />
        </Screen>
      </Page>
    </>
  )
}

export default IndexPage
