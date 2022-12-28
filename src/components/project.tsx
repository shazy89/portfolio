import { Area } from './layout/containers/area'
import { Text } from './typography/text'
import { line } from './project.styles'
import { Projects } from 'data/queries.definitions'
import { container, projectHeading } from './project.styles'
import { Cloudinary } from '@cloudinary/url-gen'
import { scale } from '@cloudinary/url-gen/actions/resize'
import { AdvancedImage, lazyload, placeholder } from '@cloudinary/react'
import React from 'react'
import DOMPurify from 'dompurify'
import { AnchorButton, ExternalAnchorButton } from './button/button'
import { Icon } from 'icon/icon'
import { IconName, iconMap } from 'icon/generated'
import { Heading } from './typography/heading'

type Project = {
  project: Projects['allProjectsJson']['edges'][number]
}

export const Project = ({ project }: Project) => {
  const info = DOMPurify.sanitize(project.node.info)

  return (
    <>
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
                __html: info,
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
              <ExternalAnchorButton size='sm' to={project.node.demo} iconName='github' label={'Github'}>
                Youtube
              </ExternalAnchorButton>
            )}
          </Area>
        </Area>
      </div>
    </>
  )
}

type ProjectImageProps = {
  image: Pick<Project, 'project'>['project']['node']['images'][number]
}

const ProjectImage = ({ image }: ProjectImageProps) => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: process.env.GATSBY_CLOUDINARY_CLOUD_NAME,
      apiKey: process.env.GATSBY_CLOUDINARY_API_KEY,
      apiSecret: process.env.GATSBY_CLOUDINARY_API_SECRET,
    },
  })

  const img = cld.image(image.image_id).resize(scale(460))
  //modes: 'vectorize' | 'pixelate' | 'blur' | 'predominant-color'
  return (
    <AdvancedImage
      alt={image.description}
      width='460px'
      cldImg={img}
      plugins={[
        placeholder({ mode: 'predominant-color' }),
        lazyload({ rootMargin: '10px 20px 10px 30px', threshold: 0.25 }),
      ]}
    />
  )
}
