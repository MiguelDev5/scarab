"use client"

import Image from "next/image"
import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { UserAvatar } from "../user-avatar"

export default function DashboardNavbar() {
  return (
    <>
      <div className="fixed top-0 w-full flex justify-center z-40 border-b">
        <div className="container mx-5 flex h-16 items-center justify-between w-full">
          <Link
            href="/"
            className="flex items-center font-display font-semibold"
          >
            <Image
              src="/beetle.svg"
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
                      Support
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
                  <UserAvatar />
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </div>
    </>
  )
}
