import { page } from './containers.styles'
import * as React from 'react'

interface PageProps {
  children: React.ReactNode
}

export const Page = ({ children }: PageProps) => {
  return <main className={page}>{children}</main>
}
