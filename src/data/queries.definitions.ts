type ProjectData = {
  node: {
    id: number
    projectName: string
    github: string
    link: string
    developed_at: string
    demo: string
    info: string
    techologies: string[]
    images: [
      {
        image: { description: string; image_id: string }
        description: string
        image_id: string
      }
    ]
  }
}

export type Projects = {
  allProjectsJson: {
    edges: ProjectData[]
  }
}
