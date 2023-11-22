"use client"

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
import Logo from "../logo-svg"

export default function NavBar() {
  const scrolled = useScroll(50)

  return (
    <>
      <div
        className={`fixed top-0 w-full flex justify-center ${
          scrolled ? "border-b bg-background backdrop-blur-xl" : "bg-white/0"
        } z-30 transition-all`}
      >
        <div className="container flex h-16 items-center justify-between w-full">
          <Link
            href="/"
            className="flex items-center font-display font-semibold"
          >
            <Logo />
            <p className="font-bold">Scarab</p>
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
