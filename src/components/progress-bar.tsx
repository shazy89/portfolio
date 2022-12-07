import { motion } from 'framer-motion'
import { progressBar } from './progress-bar.styles'
import React from 'react'

type ProgressBarProps = {
  activeIndex: number
  totalLength: number
}

export const ProgressBar = ({ activeIndex, totalLength }: ProgressBarProps) => {
  return <motion.div className={progressBar(activeIndex / totalLength)} />
}
