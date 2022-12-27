import { Area } from './layout/containers/area'
import { Heading } from './typography/heading'
import { Button } from 'components/button/button'
import { heading, container, verticalLine } from './intro.styles'
import React from 'react'

export const Intro = () => {
  return (
    <div className={container}>
      <Area alignItems='center'>
        <div className={heading}>
          <Heading tag='h1' size='500'>
            <pre>I’m a full-stack web developer,</pre>
            based in the New York Metro Area
          </Heading>
        </div>
        <Button>Learn More</Button>
      </Area>
      <Area gap='s100'>
        <Heading tag='h2' size='700'>
          Erdoan
        </Heading>
        <div className={verticalLine('flex-start')} />
        <Heading tag='h2' size='700' whiteSpace='s900'>
          Shaziman
        </Heading>
        <div className={verticalLine('flex-end')} />
      </Area>
    </div>
  )
}
