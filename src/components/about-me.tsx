import { Screen } from './layout/containers/screen'
import { css } from '@emotion/css'
import { Heading } from './typography/heading'
import { Area } from './layout/containers/area'
import { Text } from './typography/text'
import { Copy } from './copy'
import { Icon } from 'icon/icon'
import { StaticImage } from 'gatsby-plugin-image'
import { ProjectImage } from './project-image'
import { about, image } from './about-me.styles'
import { graphql, useStaticQuery } from 'gatsby'
import { AboutMeData } from './about-me.definitions'
import { Responsive } from './responsive'

const aboutMeImage = '../images/ed-about-me.png'

export const AboutMeSection = () => {
  const aboutMeData: AboutMeData = useStaticQuery(graphql`
    query AboutMe {
      aboutJson {
        about_me
        email
        software_skills {
          icon
          skill
        }
        personal_skills
        languages
      }
    }
  `)

  const softwareSkillsColumn1 = aboutMeData.aboutJson.software_skills.filter((_, i) => i % 2 === 0)
  const softwareSkillsColumn2 = aboutMeData.aboutJson.software_skills.filter((_, i) => i % 2 !== 0)

  const personalSkills1 = aboutMeData.aboutJson.personal_skills.filter((_, i) => i % 2 === 0)
  const personalSkills2 = aboutMeData.aboutJson.personal_skills.filter((_, i) => i % 2 !== 0)

  return (
    <Screen backgroundColor='gray200' screenId='about-me-screen'>
      <Responsive screenSize={['desktop', 'tablet']}>
        <Area direction='row' height='100%' gap='s800'>
          <div className={about}>
            <Area gap='none'>
              <Heading tag='h2' size='700' centerAlign>
                About
              </Heading>
              <Copy text={aboutMeData.aboutJson.email}>{aboutMeData.aboutJson.email}</Copy>
            </Area>
            <Text tag='p' size='s400'>
              <span
                dangerouslySetInnerHTML={{
                  __html: aboutMeData.aboutJson.about_me,
                }}
              />
            </Text>
          </div>
          <Area direction='row' padding='s400' alignItems='center'>
            <Area gap='s600'>
              <Area gap='s500'>
                <Heading tag='h3'>Software Skills</Heading>
                <Area direction='row' gap='s800'>
                  <Area>
                    {softwareSkillsColumn1.map(sk => (
                      <Area key={sk.skill} direction='row' alignItems='center'>
                        <Icon color='text' size='s700' name={sk.icon as any} /> <Text>{sk.skill}</Text>{' '}
                      </Area>
                    ))}
                  </Area>
                  <Area>
                    {softwareSkillsColumn2.map(sk => (
                      <Area key={sk.skill} direction='row' alignItems='center'>
                        <Icon color='text' size='s700' name={sk.icon as any} /> <Text>{sk.skill}</Text>{' '}
                      </Area>
                    ))}
                  </Area>
                </Area>
              </Area>
              <Area>
                <Heading tag='h3'>Languages</Heading>
                <ul>
                  {aboutMeData.aboutJson.languages.map(l => (
                    <li className={css({ listStyleType: 'circle' })} key={l}>
                      {<Text tag='span'>- {l}</Text>}
                    </li>
                  ))}
                </ul>
              </Area>
              <Area>
                <Heading tag='h3'>Personal Skills</Heading>
                <Area direction='row'>
                  <ul>
                    {personalSkills1.map(sk => (
                      <li key={sk}>
                        <Text tag='span'>- {sk}</Text>
                      </li>
                    ))}
                  </ul>
                  <ul>
                    {personalSkills2.map(sk => (
                      <li key={sk}>
                        <Text tag='span'>- {sk}</Text>
                      </li>
                    ))}
                  </ul>
                </Area>
              </Area>
            </Area>
            <div className={image}>
              <StaticImage
                src={aboutMeImage}
                width={400}
                height={600}
                placeholder='blurred'
                layout='fixed'
                alt='Erdoan Shaziman'
              />
            </div>
          </Area>
        </Area>
      </Responsive>
      <Responsive screenSize={'mobile'}>
        <Area>
          <Area gap='none'>
            <Heading tag='h2' size='500' centerAlign>
              About
            </Heading>
            <Copy text={aboutMeData.aboutJson.email}>{aboutMeData.aboutJson.email}</Copy>
          </Area>
          <Text tag='p' size='s200'>
            <span
              dangerouslySetInnerHTML={{
                __html: aboutMeData.aboutJson.about_me,
              }}
            />
          </Text>
          <Area gap='s500'>
            <Heading tag='h3' size='300' centerAlign>
              Software Skills
            </Heading>
            <Area direction='row' gap='s500' justifyContent='center'>
              <Area>
                {softwareSkillsColumn1.map(sk => (
                  <Area key={sk.skill} direction='row' alignItems='center'>
                    <Icon color='text' size='s300' name={sk.icon as any} /> <Text>{sk.skill}</Text>{' '}
                  </Area>
                ))}
              </Area>
              <Area>
                {softwareSkillsColumn2.map(sk => (
                  <Area key={sk.skill} direction='row' alignItems='center'>
                    <Icon color='text' size='s300' name={sk.icon as any} /> <Text>{sk.skill}</Text>{' '}
                  </Area>
                ))}
              </Area>
            </Area>
            <Area direction='row'>
              <Area>
                <Heading tag='h3' size='300'>
                  Languages
                </Heading>
                <ul>
                  {aboutMeData.aboutJson.languages.map(l => (
                    <li className={css({ listStyleType: 'circle' })} key={l}>
                      <Text size='s200' tag='span'>
                        - {l}
                      </Text>
                    </li>
                  ))}
                </ul>
              </Area>
              <Area>
                <Heading tag='h3' size='300'>
                  Personal Skills
                </Heading>
                <Area direction='row'>
                  <ul>
                    {personalSkills1.map(sk => (
                      <li key={sk}>
                        <Text size='s200' tag='span'>
                          - {sk}
                        </Text>
                      </li>
                    ))}
                  </ul>
                  <ul>
                    {personalSkills2.map(sk => (
                      <li key={sk}>
                        <Text size='s200' tag='span'>
                          - {sk}
                        </Text>
                      </li>
                    ))}
                  </ul>
                </Area>
              </Area>
            </Area>
          </Area>
        </Area>
      </Responsive>
    </Screen>
  )
}
