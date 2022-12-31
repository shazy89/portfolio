import { Nav } from 'components/layout/nav/nav'
import '../assets/reset.css'
import { StaticImage } from 'gatsby-plugin-image'
import { MediaLinks } from 'components/media-links'
import { Intro } from 'components/intro'
import { HeadingScreenContent } from 'components/heading-section-content'
import { AboutMe } from 'components/about-me'
import { PortfolioSection } from 'components/portfolio-section'
import { Screen } from 'components/layout/containers/screen'
import { Page } from 'components/layout/containers/page'
import { Area } from 'components/layout/containers/area'

const imageWidth = 365
const headingImage = '../images/ed-shaziman.png'

const IndexPage = () => {
  return (
    <Page>
      <Area gap='s900'>
        <Screen screenId='heading-screen' backgroundColor='black' border='primary' borderRadius='radiusLarge'>
          <Nav listTitle='main navigation' />
          <HeadingScreenContent>
            <Area direction='row' gap='s1000'>
              <MediaLinks />
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
        </Screen>

        <PortfolioSection />

        <AboutMe />
      </Area>
    </Page>
  )
}

export default IndexPage
