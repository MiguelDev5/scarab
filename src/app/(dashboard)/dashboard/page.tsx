"use client"
import { AppProps } from "next/app"

import { ProjectProvider } from "@/lib/contexts/project-context"
import ImportComponent from "@/components/import-component"
import ProjectsList from "@/components/project-list"

const IndexPage = () => {
  return (
    <ProjectProvider>
      <div className="App">
        <h1 className="text-[18px] font-semibold">Projects</h1>
        <p className="text-sm">Manage all imported projects.</p>

        <div className="my-4">
          <ImportComponent />
          <ProjectsList />
        </div>
      </div>
    </ProjectProvider>
  )
}

export default IndexPage
