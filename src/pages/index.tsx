import * as React from 'react'
import '../assets/reset.css'
import { Logo } from 'images/logo'
import { Screen } from 'components/layout/containers/screen'
import { Page } from 'components/layout/containers/page'

const IndexPage = () => {
  return (
    <Page>
      <Screen border='primary' borderRadius='radiusLarge'>
        <Logo hanging='7.5rem' width='9rem' />
      </Screen>
    </Page>
  )
}

export default IndexPage
