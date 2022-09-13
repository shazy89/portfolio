import * as React from 'react'
import '../assets/reset.css'
import type { HeadFC } from 'gatsby'
import { Page } from '../components/layout/containers/page'

const IndexPage = () => {
  return (
    <Page>
      <h1>PAGE</h1>
    </Page>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
