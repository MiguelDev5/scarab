import Balancer from "react-wrap-balancer"
import { Button } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <main className="flex  flex-col items-center justify-between md:p-[200px] p-0 md:pt-[200px] pt-32">
      <div className="container z-10 w-full max-screen-w-xl px-5 xl:px-0">
        <a
          href=""
          target="_blank"
          rel="noreferrer"
          className="mx-auto mb-5 flex max-w-fit items-center justify-center hover:bg-slate-100 space-x-2 overflow-hidden rounded-full border border-slate-300 px-7 py-2"
        >
          <p className="text-sm font-semibold">Introducing Scarab</p>
        </a>
        <h1 className="text-center text-4xl font-cal font-bold tracking-[-0.02em] md:text-7xl md:leading-[4rem]">
          <Balancer>Release Notes tracking and management</Balancer>
        </h1>
        <p className="mt-6 text-center text-gray-500 md:text-xl">
          <Balancer>
            Open source web application designed for efficient release
            management, integrating with GitHub to automatically retrieve and
            process release data.
          </Balancer>
        </p>
        <div className="mx-auto mt-6 flex items-center justify-center space-x-5">
          <Button size="lg">Get Started</Button>
        </div>
      </div>
    </main>
  )
}
