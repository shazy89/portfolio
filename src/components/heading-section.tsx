import React from 'react'
import { Screen } from './layout/containers/screen'
import { Responsive } from './responsive'
import { Nav } from './layout/nav/nav'
import { HeadingScreenContent } from './heading-section-content'
import { Area } from './layout/containers/area'
import { MediaLinks } from './media-links'
import { StaticImage } from 'gatsby-plugin-image'
import { useScreenSize } from './hooks/use-screensize'
import { Intro } from './intro'

const imageWidth = 365
const mobileImageWidth = 200
const headingImage = '../images/ed-shaziman.png'

export const HeadingSection = () => {
  return (
    <Screen screenId='heading-screen' backgroundColor='black' border='primary' borderRadius='radiusLarge'>
      <Nav listTitle='main navigation' />
      <Responsive screenSize={'desktop'}>
        <HeadingScreenContent>
          <Area direction='row' gap='s1000'>
            <MediaLinks direction='vertical' />
            <StaticImage
              src={headingImage}
              layout='fixed'
              width={imageWidth}
              alt='Erdoan Shaziman'
              placeholder='blurred'
            />
          </Area>
          <Intro />
        </HeadingScreenContent>
      </Responsive>
      <Responsive screenSize='mobile'>
        <HeadingSectionMobile />
      </Responsive>
    </Screen>
  )
}

const HeadingSectionMobile = () => {
  return (
    <HeadingScreenContent>
      <Area alignItems='center'>
        <Intro />
        <StaticImage
          src={headingImage}
          layout='fixed'
          width={mobileImageWidth}
          alt='Erdoan Shaziman'
          placeholder='blurred'
        />
        <MediaLinks direction='horizontal' />
      </Area>
    </HeadingScreenContent>
  )
}
