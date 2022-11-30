import * as React from 'react'
import { Logo } from 'images/logo'
import { Area } from '../containers/area'
import { AnchorButton } from 'components/button/button'
import { mainNav, navList, logoListItem } from './nav.styles'

type NavProps = {
  listTitle: string
}

export const Nav = ({ listTitle }: NavProps) => {
  return (
    <header>
      <nav className={mainNav} id='main-navigation'>
        <ul aria-label={listTitle} className={navList}>
          <li className={logoListItem}>
            <Logo />
          </li>
          <Area direction='row' gap='s500'>
            <li>
              <AnchorButton to='/#main-navigation'>Resume</AnchorButton>
            </li>
            <li>
              <AnchorButton to='/#main-navigation'>Portfolio</AnchorButton>
            </li>
            <li>
              <AnchorButton to='/#main-navigation'>About</AnchorButton>
            </li>
          </Area>
        </ul>
      </nav>
    </header>
  )
}
