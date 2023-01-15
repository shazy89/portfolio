import * as React from 'react'
import { Logo } from 'images/logo'
import { Area } from '../containers/area'
import { AnchorButton, ExternalAnchorButton } from 'components/button/button'
import { mainNav, navList, logoListItem } from './nav.styles'
import { graphql, useStaticQuery } from 'gatsby'

type NavProps = {
  listTitle: string
}

type Pdf = {
  file: {
    publicURL: string
  }
}

export const Nav = ({ listTitle }: NavProps) => {
  const resume: Pdf = useStaticQuery(graphql`
    query Pdf {
      file(sourceInstanceName: { eq: "data" }, name: { eq: "Ed_Resume" }) {
        publicURL
      }
    }
  `)

  return (
    <header>
      <nav className={mainNav} id='main-navigation'>
        <ul aria-label={listTitle} className={navList}>
          <li className={logoListItem}>
            <Logo />
          </li>
          <Area direction='row' gap='s500'>
            <li>
              <ExternalAnchorButton to={`${resume.file.publicURL}`} label='Ed Shaziman Resume'>
                Resume
              </ExternalAnchorButton>
            </li>
            <li>
              <AnchorButton to='/#portfolio-screen'>Portfolio</AnchorButton>
            </li>
            <li>
              <AnchorButton to='/#about-me-screen'>About</AnchorButton>
            </li>
          </Area>
        </ul>
      </nav>
    </header>
  )
}
