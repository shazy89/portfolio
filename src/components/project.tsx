import { Area } from './layout/containers/area'
import { line } from './project.styles'
import { Projects } from 'data/queries.definitions'
import { motion, AnimatePresence } from 'framer-motion'
import { container } from './project.styles'
import React from 'react'
import { Heading } from './layout/containers/heading'

type Project = {
  project: Projects['allProjectsJson']['edges'][number]
}

export const Project = ({ project }: Project) => {
  return (
    <>
      <div className={container}>
        <Area>One</Area>
        <motion.div className={line} layout='position' />
        <Area>
          <Heading tag='h3'>{project.node.projectName}</Heading>
        </Area>
      </div>
    </>
  )
}
