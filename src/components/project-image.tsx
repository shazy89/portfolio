import { AdvancedImage, lazyload, placeholder } from '@cloudinary/react'
import { Project } from './project'
import { Cloudinary } from '@cloudinary/url-gen'
import { scale } from '@cloudinary/url-gen/actions/resize'

type ProjectImageProps = {
  image: Project['project']['node']['images'][number]
}

export const ProjectImage = ({ image }: ProjectImageProps) => {
  const cloud = new Cloudinary({
    cloud: {
      cloudName: process.env.GATSBY_CLOUDINARY_CLOUD_NAME,
      apiKey: process.env.GATSBY_CLOUDINARY_API_KEY,
      apiSecret: process.env.GATSBY_CLOUDINARY_API_SECRET,
    },
  })

  const displayImage = cloud.image(image.image_id).resize(scale().width(450))
  //modes: 'vectorize' | 'pixelate' | 'blur' | 'predominant-color'.

  return (
    <AdvancedImage
      width={450}
      cldImg={displayImage}
      plugins={[lazyload(), placeholder({ mode: 'predominant-color' })]}
      alt={image.description}
    />
  )
}
