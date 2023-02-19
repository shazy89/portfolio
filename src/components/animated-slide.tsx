import { motion, AnimatePresence } from 'framer-motion'
import * as React from 'react'

const transitionDuration = 1

export type Direction = 'in' | 'out'

const variants = {
  enter: (direction: Direction) => {
    return {
      x: direction === 'in' ? 500 : -500,
      opacity: 0,
    }
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: Direction) => {
    return {
      zIndex: 0,
      x: direction === 'in' ? -500 : 500,
      opacity: 0,
    }
  },
}

type AnimatedSlideProps = {
  children: React.ReactNode
  direction?: Direction
  onAnimationComplete?: () => void
}

export const AnimatedSlide = ({ children, direction, onAnimationComplete }: AnimatedSlideProps) => {
  return (
    <AnimatePresence mode='popLayout' custom={direction}>
      {React.Children.map(children, child => {
        const element = child as React.ReactElement<
          React.PropsWithChildren<{ direction: Direction; onAnimationComplete: () => void }>
        >
        return element ? React.cloneElement(element, { direction, onAnimationComplete }) : null
      })}
    </AnimatePresence>
  )
}

type AnimatedSlideItemProps = {
  children: React.ReactNode
  direction?: Direction
  onAnimationComplete?: () => void
  animationKey: string
}

export const AnimatedSlideItem = React.forwardRef<HTMLDivElement, AnimatedSlideItemProps>(
  ({ children, animationKey, direction, onAnimationComplete, ...rest }: AnimatedSlideItemProps, ref) => {
    return (
      <motion.div
        key={animationKey}
        variants={variants}
        custom={direction}
        initial='enter'
        animate='center'
        onAnimationComplete={onAnimationComplete}
        exit='exit'
        transition={{ duration: transitionDuration, type: 'spring', bounce: 0.25 }}
        ref={ref}
        {...rest}
        style={{ height: '100%' }}
      >
        {children}
      </motion.div>
    )
  }
)
