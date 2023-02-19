import { AdvancedImage, lazyload, placeholder } from '@cloudinary/react'
import { Project } from './project'
import { Cloudinary } from '@cloudinary/url-gen'
import { useScreenSize } from './hooks/use-screensize'
import { scale } from '@cloudinary/url-gen/actions/resize'

const imageWidth = 460
const mobileWidth = 320

type ProjectImageProps = {
  image: Project['project']['node']['images'][number]
}

export const ProjectImage = ({ image }: ProjectImageProps) => {
  const { isMobile } = useScreenSize()
  const cloud = new Cloudinary({
    cloud: {
      cloudName: process.env.GATSBY_CLOUDINARY_CLOUD_NAME,
      apiKey: process.env.GATSBY_CLOUDINARY_API_KEY,
      apiSecret: process.env.GATSBY_CLOUDINARY_API_SECRET,
    },
  })

  const displayImage = cloud.image(image.image_id).resize(scale().width(isMobile ? mobileWidth : imageWidth))

  //modes: 'vectorize' | 'pixelate' | 'blur' | 'predominant-color'.
  return (
    <AdvancedImage
      width={isMobile ? mobileWidth : imageWidth}
      cldImg={displayImage}
      plugins={[lazyload(), placeholder({ mode: 'predominant-color' })]}
      alt={image.description}
    />
  )
}
