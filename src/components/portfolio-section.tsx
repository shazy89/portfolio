import * as React from 'react'
import { arrow, container, arrowMobileView } from './portfolio-section.styles'
import { ProgressBar } from './progress-bar'
import { Screen } from './layout/containers/screen'
import { IconButton } from './button/button'
import { Projects } from 'data/queries.definitions'
import { Project, ProjectMobileView } from './project'
import { Heading } from './typography/heading'
import { Area } from './layout/containers/area'
import { graphql, useStaticQuery } from 'gatsby'
import { Responsive } from './responsive'
import { AnimatedSlideItem, AnimatedSlide, Direction } from './animated-slide'

const projetcsQuery = graphql`
  query Projects {
    allProjectsJson {
      edges {
        node {
          id
          projectName
          github
          link
          developed_at
          demo
          techologies
          info
          images {
            description
            image_id
          }
        }
      }
    }
  }
`

export const PortfolioSection = () => {
  const [activeIndex, setActiveIndex] = React.useState(0)
  const projects = useStaticQuery<Projects>(projetcsQuery)
  const [direction, setDirection] = React.useState<Direction>('out')

  const allProjects = projects.allProjectsJson.edges

  const handleNext = () =>
    setActiveIndex(step => {
      if (step < allProjects.length - 1) {
        setDirection('out')
        return (step += 1)
      }
      return step
    })

  const handleBack = () => {
    setActiveIndex(step => {
      if (step > 0) {
        setDirection('in')
        return (step -= 1)
      }

      return step
    })
  }

  return (
    <>
      <Screen backgroundColor='gray200' screenId='portfolio-screen'>
        <Responsive screenSize={['desktop', 'tablet']}>
          <ProgressBar activeIndex={activeIndex} totalLength={allProjects.length - 1} />
          <Area alignItems='center'>
            <Heading tag='h1' size='700'>
              Portfolio
            </Heading>
          </Area>
          <div className={container}>
            <AnimatedSlide direction={direction}>
              {allProjects.map((data, index) =>
                activeIndex === index ? (
                  <AnimatedSlideItem key={data.node.projectName}>
                    <Project project={data} />
                  </AnimatedSlideItem>
                ) : null
              )}
            </AnimatedSlide>
            <div className={arrow('left')}>
              <IconButton
                onClick={handleBack}
                iconColor={'yellow100'}
                size={'lg'}
                iconName={'circle-left-solid'}
                label={'scroll left button'}
              />
            </div>
            <div className={arrow('right')}>
              <IconButton
                onClick={handleNext}
                iconColor={'yellow100'}
                size={'lg'}
                iconName={'circle-right-solid'}
                label={'scroll left button'}
              />
            </div>
          </div>
        </Responsive>
        <Responsive screenSize={'mobile'}>
          <ProgressBar activeIndex={activeIndex} totalLength={allProjects.length - 1} />
          <div className={container}>
            {allProjects.map((data, index) =>
              activeIndex === index ? (
                <AnimatedSlideItem key={data.node.projectName}>
                  <ProjectMobileView project={data} />
                </AnimatedSlideItem>
              ) : null
            )}
          </div>
          <div className={arrowMobileView('left')}>
            <IconButton
              onClick={handleBack}
              iconColor={'yellow100'}
              size={'lg'}
              iconName={'circle-left-solid'}
              label={'scroll left button'}
            />
          </div>
          <div className={arrowMobileView('right')}>
            <IconButton
              onClick={handleNext}
              iconColor={'yellow100'}
              size={'lg'}
              iconName={'circle-right-solid'}
              label={'scroll left button'}
            />
          </div>
        </Responsive>
      </Screen>
    </>
  )
}
