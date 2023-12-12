"use client"

import React, { useContext } from "react"
import { ProjectContext } from "@/lib/contexts/project-context"
import ProjectCard from "./project-card"

const ProjectsList: React.FC = () => {
  const { projects } = useContext(ProjectContext)

  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4">
      {projects.map((project) => (
        <div key={project.id} className="col-span-1">
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  )
}

export default ProjectsList
