import { css } from '@emotion/css'
import { SEO } from 'components/seo'
import '../assets/reset.css'
import { AboutMeSection } from 'components/about-me'
import { PortfolioSection } from 'components/portfolio-section'

import { HeadingSection } from 'components/heading-section'
import { ScreenSizeProvider } from 'components/providers/screensize-provider'
import { Footer } from 'components/layout/containers/footer'
import { Page } from 'components/layout/containers/page'
import { Area } from 'components/layout/containers/area'

const wrapper = css`
  display: flex;
  flex-direction: 'column';
  gap: 13px;
`

const IndexPage = () => {
  return (
    <ScreenSizeProvider>
      <Page>
        <Area gap='s900'>
          <HeadingSection />
          <PortfolioSection />
          <AboutMeSection />
          <Footer />
        </Area>
      </Page>
    </ScreenSizeProvider>
  )
}

export default IndexPage

export const Head = () => <SEO />
