"use client"

import React, { createContext, useState, useContext, FC } from "react"

type Project = {
  id: number
  name: string
  description: string
  releaseNotes: string
}

type ProjectContextType = {
  projects: Project[]
  addProject: (newProject: Project) => void
}

export const ProjectContext = createContext<ProjectContextType>({
  projects: [],
  addProject: () => {},
})

type ProjectProviderProps = {
  children: React.ReactNode
}

export const ProjectProvider: FC<ProjectProviderProps> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>([])

  const addProject = (newProject: Project) => {
    setProjects([...projects, newProject])
  }

  return (
    <ProjectContext.Provider value={{ projects, addProject }}>
      {children}
    </ProjectContext.Provider>
  )
}
