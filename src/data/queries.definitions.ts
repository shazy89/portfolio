type ProjectData = {
  node: {
    id: number
    projectName: string
    github: string
    link: string
    developed_at: string
    demo: string
    techologies: string[]
  }
}

export type Projects = {
  allProjectsJson: {
    edges: ProjectData[]
  }
}
