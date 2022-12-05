import * as React from 'react'
import { arrow, container } from './portfolio-section-content.styles'
import { Icon } from 'icon/icon'

import { AnimatePresence, motion } from 'framer-motion'
import { Heading } from './layout/containers/heading'

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
}

const ComponentOne = () => {
  return (
    <motion.div
      key={'one'}
      variants={variants}
      initial='enter'
      animate='center'
      exit='exit'
      transition={{
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}
    >
      <Heading tag='h1'>TEST One</Heading>
    </motion.div>
  )
}
const ComponentTwo = () => {
  return (
    <motion.div
      key={'two'}
      variants={variants}
      initial='enter'
      animate='center'
      exit='exit'
      transition={{
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}
    >
      <Heading tag='h1'>TEST Two</Heading>
    </motion.div>
  )
}
const ComponentThree = () => {
  return (
    <motion.div
      key={'three'}
      variants={variants}
      initial='enter'
      animate='center'
      exit='exit'
      transition={{
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}
    >
      <Heading tag='h1'>TEST Three</Heading>
    </motion.div>
  )
}

const projects = [{ component: ComponentOne }, { component: ComponentTwo }, { component: ComponentThree }]

export const PortfolioSection = () => {
  const [activeIndex, setActiveIndex] = React.useState(0)

  const handleNext = () =>
    setActiveIndex(step => {
      if (step < projects.length - 1) {
        return (step += 1)
      }
      return step
    })
  const handlePrev = () => setActiveIndex(step => (step -= 1))

  return (
    <div className={container}>
      <AnimatePresence exitBeforeEnter>
        {projects.map(({ component: Component }, index) =>
          activeIndex === index ? <Component key={index} /> : null
        )}
      </AnimatePresence>
      <div className={arrow('left')} onClick={handlePrev}>
        <Icon name='circle-left-solid' size='s900' color='yellow100' />
      </div>
      <div className={arrow('right')} onClick={handleNext}>
        <Icon name='circle-right-solid' size='s900' color='yellow100' />
      </div>
    </div>
  )
}
