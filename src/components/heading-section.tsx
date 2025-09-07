
import { Screen } from './layout/containers/screen'
import { Responsive } from './responsive'
import { Nav } from './layout/nav/nav'
import { HeadingScreenContent } from './heading-section-content'
import { Area } from './layout/containers/area'
import { MediaLinks } from './media-links'
import { Intro } from './intro'



export const HeadingSection = () => {
  return (
    <Screen screenId='heading-screen' backgroundColor='black' border='primary' borderRadius='radiusLarge'>
      <Nav listTitle='main navigation' />
      <Responsive screenSize={'desktop'}>
        <HeadingScreenContent>
          <Area direction='row' gap='s1000'>
            <MediaLinks direction='vertical' />
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
        <MediaLinks direction='horizontal' />
      </Area>
    </HeadingScreenContent>
  )
}
