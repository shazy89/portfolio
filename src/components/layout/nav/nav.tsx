import * as React from 'react'
import { cx } from '@emotion/css'
import { motion, AnimatePresence } from 'framer-motion'
import { Logo } from 'images/logo'
import { IconButton } from 'components/button/button'
import { Screen } from '../containers/screen'
import { Area } from '../containers/area'
import { Responsive } from '../../responsive'
import { AnchorButton, ExternalAnchorButton } from 'components/button/button'
import { mainNav, navList, logoListItem, mobileNav, mobileNavMenu, noScroll, mobileMenuList } from './nav.styles'
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
      <Responsive screenSize={['desktop', 'tablet']}>
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
      </Responsive>
      <Responsive screenSize='mobile'>
        <MobileNav />
      </Responsive>
    </header>
  )
}

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const handleMenuOpen = () => {
    const wrapper = document.getElementById('app-wrapper')
    setIsMenuOpen(true)
    wrapper?.classList.add(noScroll)
  }
  const handleMenuClose = React.useCallback(() => {
    const wrapper = document.getElementById('app-wrapper')
    setIsMenuOpen(false)
    wrapper?.classList.remove(noScroll)
  }, [])

  return (
    <nav className={cx(mobileNav)}>
      <div className={logoListItem}>
        <Logo />
      </div>
      <IconButton
        onClick={handleMenuOpen}
        size='lg'
        label='hamburger button'
        iconColor='yellow100'
        iconName='hamburger'
      />
      <MobileNavMenu isOpen={isMenuOpen} onClose={handleMenuClose} />
    </nav>
  )
}

type MobileNavMenuProps = {
  isOpen: boolean
  onClose: () => void
}

const MobileNavMenu = ({ isOpen, onClose }: MobileNavMenuProps) => {
  const resume: Pdf = useStaticQuery(graphql`
    query Pdf {
      file(sourceInstanceName: { eq: "data" }, name: { eq: "Ed_Resume" }) {
        publicURL
      }
    }
  `)

  return isOpen ? (
    <nav className={mobileNavMenu}>
      <Screen border='primary' backgroundColor='black' borderRadius='radiusLarge'>
        <Area gap='s1000'>
          <Area justifyContent='flex-end' direction='row'>
            <IconButton
              onClick={onClose}
              size='lg'
              label='hamburger button'
              iconColor='yellow100'
              iconName='hamburger'
            />
          </Area>
          <ul className={mobileMenuList}>
            <li>
              <ExternalAnchorButton to={`${resume.file.publicURL}`} label='Ed Shaziman Resume'>
                Resume
              </ExternalAnchorButton>
            </li>
            <li>
              <AnchorButton onClick={onClose} to='/#about-me-screen'>
                About
              </AnchorButton>
            </li>
            <li>
              <AnchorButton onClick={onClose} to='/#portfolio-screen'>
                Portfolio
              </AnchorButton>
            </li>
          </ul>
        </Area>
      </Screen>
    </nav>
  ) : null
}
