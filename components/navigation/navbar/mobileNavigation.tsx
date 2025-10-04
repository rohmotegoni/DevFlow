import React from "react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link";
import Image from "next/image";
import routes from "@/contest/routes";
import Navbar from ".";
import NavLinks from "./navLinks";
 

const  MobileNavigation = () => {
    return(
        <Sheet>
      <SheetTrigger asChild>
        <img
          src="/icons/hamburger.svg"
          width={36}
          height={36}
          alt="Menu"
          className="invert-colors sm:hidden"
        />
      </SheetTrigger>
      <SheetContent side={"left"} className="background-light900_dark200 border-none">
      
          <SheetTitle className="hidden">Navigation</SheetTitle>
         <Link href={"/"} className="flex items-center gap-1" >
         <Image 
         src={"/images/site-logo.svg"}
         width={23}
         height={23}
         alt="Logo"
         />
        <p className="h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900  ">Dev <span className="text-primary-500">Flow</span></p>
         </Link>

        <div className="no-scrollbar flex h-[calc(100vh-80px)] flex-col overflow-y-auto">

        <SheetClose asChild>
        <section className="flex flex-col gap-6 pt-16">
        <NavLinks isMobileNav />
        </section>
        </SheetClose>
        
        <div className="flex flex-col gap-3 mt-6 pb-6">
        <SheetClose asChild>
        <Link href={routes.SIGN_IN}>
        <Button className=" small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none ">
            <span className="primary-text-gradient">
                Log In
            </span>
        </Button>
        </Link>
        </SheetClose> 

        <SheetClose asChild>
        <Link href={routes.SING_UP}>
        <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg border px-4 py-3 shadow-none ">
           
                Sign Up
           
        </Button>
        </Link>
        </SheetClose>
        </div>
        </div>
        
        
      </SheetContent>
    </Sheet>
    )
}
export default MobileNavigation; 