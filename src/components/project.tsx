import { Area } from './layout/containers/area'
import { line } from './project.styles'
import { Projects } from 'data/queries.definitions'
import { container } from './project.styles'
import { Cloudinary } from '@cloudinary/url-gen'
import { scale } from '@cloudinary/url-gen/actions/resize'
import { AdvancedImage, lazyload, placeholder } from '@cloudinary/react'
import React from 'react'
import { Heading } from './heading/heading'
import { graphql } from 'gatsby'

type Project = {
  project: Projects['allProjectsJson']['edges'][number]
}

export const Project = ({ project }: Project) => {
  return (
    <>
      <div className={container}>
        <Area gap='s600' justifyContent='center'>
          {project.node.images.map(image => (
            <ProjectImage key={image.image_id} image={image} />
          ))}
        </Area>
        <div className={line} />
        <Area alignItems='center' flex={0.5}>
          <Heading tag='h3'>{project.node.projectName}</Heading>
          <Area>{project.node.info}</Area>
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
