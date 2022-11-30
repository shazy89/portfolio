import { Nav } from '../components/layout/nav/nav'
import '../assets/reset.css'
import { StaticImage } from 'gatsby-plugin-image'
import { MediaLinks } from '../components/layout/media-links'
import { Intro } from '../components/layout/intro'
import { HeadingScreenContent } from '../components/layout/heading-screen-content'
import React from 'react'
import { Area } from '../components/layout/containers/area'

import { Screen } from '../components/layout/containers/screen'
import { Page } from '../components/layout/containers/page'

const imageWidth = 370

const IndexPage = () => {
  return (
    <>
      <Page>
        <Screen border='primary' borderRadius='radiusLarge'>
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
        <Screen border='primary' borderRadius='radiusLarge'>
          <Nav listTitle='second navigation' />
        </Screen>
      </Page>
    </>
  )
}

export default IndexPage
