import React from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type Project = {
  id: number
  name: string
  description: string
  releaseNotes: string
  // Other project properties
}

type ProjectCardProps = {
  project: Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="project-card ">
      <Card>
        <CardHeader>
          <CardTitle>{project.name}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p></p>
        </CardContent>
        <CardFooter>
          <p></p>
        </CardFooter>
      </Card>
    </div>
  )
}

export default ProjectCard
