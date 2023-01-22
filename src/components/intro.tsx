import { Area } from './layout/containers/area'
import { Heading } from './typography/heading'
import { Button } from 'components/button/button'
import { AnchorButton } from 'components/button/button'
import { heading, container, verticalLine } from './intro.styles'
import React from 'react'
import { useScreenSize } from './hooks/use-screensize'

export const Intro = () => {
  const { isMobile } = useScreenSize()
  return (
    <div className={container}>
      <Area alignItems='center'>
        <div className={heading}>
          <Heading tag='h1' size={isMobile ? '200' : '500'}>
            <pre>I’m a full-stack web developer,</pre>
            based in the New York Metro Area
          </Heading>
        </div>
        <AnchorButton to='/#about-me-screen'>Learn More</AnchorButton>
      </Area>
      <Area gap='s100'>
        <Heading tag='h2' size={isMobile ? '600' : '700'}>
          Erdoan
        </Heading>
        <div className={verticalLine('flex-start')} />
        <Heading tag='h2' size={isMobile ? '600' : '700'} whiteSpace='s900'>
          Shaziman
        </Heading>
        <div className={verticalLine('flex-end')} />
      </Area>
    </div>
  )
}
