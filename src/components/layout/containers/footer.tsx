import { footer } from './containers.styles'
import { Logo } from 'images/logo'
import { MediaLinks } from 'components/media-links'

export const Footer = () => {
  return (
    <div className={footer}>
      <MediaLinks direction='horizontal' />
      <Logo />
    </div>
  )
}
