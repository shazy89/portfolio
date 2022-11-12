import { Nav } from 'components/layout/nav/nav'
import '../assets/reset.css'
import React from 'react'
import { Screen } from 'components/layout/containers/screen'
import { Page } from 'components/layout/containers/page'

const IndexPage = () => {
  return (
    <>
      <Page>
        <Screen border='primary' borderRadius='radiusLarge'>
          <Nav listTitle='main navigation' />
        </Screen>
      </Page>
      <Page>
        <Screen border='primary' borderRadius='radiusLarge'>
          <Nav listTitle='second navigation' />
        </Screen>
      </Page>
    </>
  )
}

export default IndexPage
