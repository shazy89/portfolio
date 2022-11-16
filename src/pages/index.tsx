import { Nav } from 'components/layout/nav/nav'
import { Area } from 'components/layout/containers/area'
import { Tooltip, TooltipContent, TooltipTrigger } from 'components/tooltip'
import { ExternalAnchorButton } from 'components/button/button'
import '../assets/reset.css'
import { MediaLinks } from 'components/layout/media-links'
import { HeadingScreenContent } from 'components/layout/heading-screen-content'
import React from 'react'

import { Screen } from 'components/layout/containers/screen'
import { Page } from 'components/layout/containers/page'

const IndexPage = () => {
  return (
    <>
      <Page>
        <Screen border='primary' borderRadius='radiusLarge'>
          <Nav listTitle='main navigation' />
          <HeadingScreenContent>
            <MediaLinks />
          </HeadingScreenContent>
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
