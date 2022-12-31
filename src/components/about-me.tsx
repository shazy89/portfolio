import { Screen } from './layout/containers/screen'
import { about } from './about-me.styles'

export const AboutMe = () => {
  return (
    <Screen backgroundColor='gray200' screenId={'about-me-screen'}>
      <div className={about}></div>
      <div></div>
    </Screen>
  )
}
