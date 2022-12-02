import { Nav } from 'components/layout/nav/nav'
import '../assets/reset.css'
import { StaticImage } from 'gatsby-plugin-image'
import { MediaLinks } from 'components/layout/media-links'
import { Intro } from 'components/layout/intro'
import { HeadingScreenContent } from 'components/layout/heading-screen-content'
import React from 'react'

import { Screen } from 'components/layout/containers/screen'
import { Page } from 'components/layout/containers/page'
import { Area } from 'components/layout/containers/area'

const imageWidth = 366

const IndexPage = () => {
  return (
    <>
      <Page>
        <Screen backgroundColor='black' border='primary' borderRadius='radiusLarge'>
          <Nav listTitle='main navigation' />
          <HeadingScreenContent>
            <Area direction='row' gap='s1000'>
              <MediaLinks />
              <StaticImage
                src='../images/ed-shaziman.png'
                layout='fixed'
                width={imageWidth}
                alt='Erdoan Shaziman'
                placeholder='blurred'
              />
            </Area>
            <Intro />
          </HeadingScreenContent>
        </Screen>
      </Page>
      <Page>
        <Screen backgroundColor='gray200'>
          <h1>HEllo World</h1>
        </Screen>
      </Page>
    </>
  )
}

export default IndexPage
