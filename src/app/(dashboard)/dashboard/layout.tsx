import "@/styles/globals.css"
import type { Metadata } from "next"
import { DashboardFooter } from "@/components/layout/dashboard-footer"
import { ThemeProvider } from "@/components/theme-provider"
import { dashboardConfig } from "@/config/dashboard"
import { DashboardNav } from "@/components/layout/nav"
import DashboardNavbar from "@/components/layout/dashboard-nav"

interface DashboardLayoutProps {
  children?: React.ReactNode
}

export const metadata: Metadata = {
  title: "Scarab",
  description:
    "Scarab is an open source web application designed for efficient release management, integrating with GitHub to automatically retrieve and process release data.",
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col space-y-24">
      <DashboardNavbar />
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
        <aside className="hidden w-[200px] flex-col md:flex">
          <DashboardNav items={dashboardConfig.sidebarNav} />
        </aside>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </main>
      </div>
      <DashboardFooter />
    </div>
  )
}
