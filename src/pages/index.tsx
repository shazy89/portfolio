import { Nav } from 'components/layout/nav/nav'
import '../assets/reset.css'
import { StaticImage } from 'gatsby-plugin-image'
import { MediaLinks } from 'components/layout/media-links'
import { HeadingScreenContent } from 'components/layout/heading-screen-content'
import React from 'react'

import { Screen } from 'components/layout/containers/screen'
import { Page } from 'components/layout/containers/page'

const imageWidth = 370

const IndexPage = () => {
  return (
    <>
      <Page>
        <Screen border='primary' borderRadius='radiusLarge'>
          <Nav listTitle='main navigation' />
          <HeadingScreenContent>
            <MediaLinks />
            <StaticImage
              src='../images/ed-shaziman.png'
              layout='fixed'
              width={imageWidth}
              alt='Erdoan Shaziman'
              placeholder='blurred'
            />
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
