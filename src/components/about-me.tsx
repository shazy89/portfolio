import { Screen } from './layout/containers/screen'
import { Heading } from './typography/heading'
import { Area } from './layout/containers/area'
import { Text } from './typography/text'
import { ExternalAnchorButton } from './button/button'
import { Copy } from './copy'
import { about } from './about-me.styles'
import { graphql, useStaticQuery } from 'gatsby'
import DOMPurify from 'dompurify'

type AboutMeData = {
  aboutJson: {
    email: string
    about_me: string
  }
}

export const AboutMe = () => {
  const aboutMeData: AboutMeData = useStaticQuery(graphql`
    query AboutMe {
      aboutJson {
        about_me
        email
      }
    }
  `)
  const content = DOMPurify.sanitize(aboutMeData.aboutJson.about_me)

  return (
    <Screen backgroundColor='gray200' screenId={'about-me-screen'}>
      <div className={about}>
        <Area gap='none'>
          <Heading tag='h1' size='700' centerAlign>
            About
          </Heading>
          <Copy text={aboutMeData.aboutJson.email}>{aboutMeData.aboutJson.email}</Copy>
        </Area>
        <Text tag='p' size='s400'>
          <span
            dangerouslySetInnerHTML={{
              __html: content,
            }}
          />
        </Text>
      </div>
      <div></div>
    </Screen>
  )
}
