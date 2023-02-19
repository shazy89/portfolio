import { Area } from './layout/containers/area'
import { Text } from './typography/text'
import { line } from './project.styles'
import { Projects } from 'data/queries.definitions'
import { container, projectHeading, mobileContainer } from './project.styles'

import { ExternalAnchorButton } from './button/button'
import { Icon } from 'icon/icon'
import { IconName, iconMap } from 'icon/generated'
import { Heading } from './typography/heading'
import { ProjectImage } from './project-image'

export type Project = {
  project: Projects['allProjectsJson']['edges'][number]
}

export const Project = ({ project }: Project) => (
  <div className={container}>
    <Area gap='s600' justifyContent='center'>
      {project.node.images.map(image => (
        <ProjectImage key={image.image_id} image={image} />
      ))}
    </Area>
    <div className={line} />
    <Area gap='s600' padding='s500' alignItems='center' flex={0.5}>
      <div className={projectHeading}>
        <Heading tag='h2' centerAlign>
          {project.node.projectName}
        </Heading>
      </div>
      <Text tag='p' size='s400'>
        <span
          dangerouslySetInnerHTML={{
            __html: project.node.info,
          }}
        />
      </Text>
      <Area direction='row'>
        {project.node.techologies.map(icon => {
          if (iconMap[icon as IconName]) {
            return <Icon key={icon} color='text' size='s900' name={icon as IconName} />
          }
        })}
      </Area>
      <Area direction='row' justifyContent='flex-start'>
        {project.node.github && (
          <ExternalAnchorButton size='sm' to={project.node.github} iconName='github' label={'Github'}>
            Github
          </ExternalAnchorButton>
        )}
        {project.node.demo && (
          <ExternalAnchorButton size='sm' to={project.node.demo} iconName='youtube' label={'Github'}>
            Demo
          </ExternalAnchorButton>
        )}
      </Area>
    </Area>
  </div>
)

export const ProjectMobileView = ({ project }: Project) => (
  <div className={mobileContainer}>
    <div className={projectHeading}>
      <Heading tag='h2' centerAlign>
        {project.node.projectName}
      </Heading>
    </div>
    <ProjectImage key={project.node.images[0].image_id} image={project.node.images[0]} />
    <Text tag='p' size='s300'>
      <span
        dangerouslySetInnerHTML={{
          __html: project.node.info,
        }}
      />
    </Text>
    <Area direction='row'>
      {project.node.techologies.map(icon => {
        if (iconMap[icon as IconName]) {
          return <Icon key={icon} color='text' size='s900' name={icon as IconName} />
        }
      })}
    </Area>
    <Area direction='row' justifyContent='flex-start'>
      {project.node.github && (
        <ExternalAnchorButton size='sm' to={project.node.github} iconName='github' label={'Github'}>
          Github
        </ExternalAnchorButton>
      )}
      {project.node.demo && (
        <ExternalAnchorButton size='sm' to={project.node.demo} iconName='youtube' label={'Github'}>
          Demo
        </ExternalAnchorButton>
      )}
    </Area>
  </div>
)
