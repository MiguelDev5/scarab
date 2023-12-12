"use client"

import React, { useContext } from "react"
import { ProjectContext } from "@/lib/contexts/project-context"

const ImportComponent: React.FC = () => {
  const { addProject } = useContext(ProjectContext)

  const handleImport = () => {
    // Example demo data (replace this with your actual fetched data)
    const newProject = {
      id: 1,
      name: "Scarab",
      githubUrl: "github.com/kelvin",
      imported: "8d ago via",
    }

    addProject(newProject)
  }

  return (
    <div>
      <button onClick={handleImport}>Import Project</button>
    </div>
  )
}

export default ImportComponent
