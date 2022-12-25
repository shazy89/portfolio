import * as React from 'react'
import { arrow, container } from './portfolio-section.styles'
import { Icon } from 'icon/icon'
import { ProgressBar } from './progress-bar'
import { Screen } from './layout/containers/screen'

import { Projects } from 'data/queries.definitions'
import { Project } from './project'
import { Heading } from './layout/containers/heading'
import { Area } from './layout/containers/area'
import { graphql, useStaticQuery } from 'gatsby'
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
    <Screen backgroundColor='gray200' screenId='portfolio-screen'>
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
        <div className={arrow('left')} onClick={handleBack}>
          <Icon name='circle-left-solid' size='s900' color='yellow100' />
        </div>
        <div className={arrow('right')} onClick={handleNext}>
          <Icon name='circle-right-solid' size='s900' color='yellow100' />
        </div>
      </div>
    </Screen>
  )
}
