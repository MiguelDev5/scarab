"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"

import useScroll from "@/lib/hooks/use-scroll"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export default function NavBar() {
  const scrolled = useScroll(50)
  const [user, setUser] = useState(null)
  const [authenticated, setAuthenticated] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const fetchKindeSession = async () => {
      try {
        const res = await fetch("/api/kindeSession")
        if (res.ok) {
          const data = await res.json()
          setUser(data.user)
          setAuthenticated(data.authenticated)

          if (data.authenticated) {
            await router.push("/dashboard")
          }
        } else {
          // Handle the case where the API request fails
        }
      } catch (error) {
        console.error("Error fetching Kinde session:", error)
      }
    }

    fetchKindeSession()
  }, [])

  return (
    <>
      <div
        className={`fixed top-0 w-full flex justify-center ${
          scrolled
            ? "border-b bg-background backdrop-blur-xl"
            : "bg-white/0"
        } z-30 transition-all`}
      >
        <div className="container mx-5 flex h-16 items-center justify-between w-full">
          <Link
            href="/"
            className="flex items-center font-display font-semibold"
          >
            <Image
              src="/beetle.png"
              alt="Scarab logo"
              width="30"
              height="30"
              className="mr-2 rounded-sm"
            ></Image>
            <p>Scarab</p>
          </Link>
          <div>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Features
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Documentation
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Button asChild variant="secondary">
                    <a href="api/auth/login">Login</a>
                  </Button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </div>
    </>
  )
}
