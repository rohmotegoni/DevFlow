import React from "react";
import ModeToggle from "../theme/page";
import { auth, signOut } from "@/auth";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import routes from "@/contest/routes";

export default async function Home() {
  const session = await auth()
  console.log(session)
  return (
    <div>
    <form className="px-10 py-[100px]" action={ async () => {
      'use server'

      await signOut({redirectTo: '/sign-in'})
    }}>
      <Button type="submit"> Log Out </Button>
    </form>
    </div>
    
    
  );
}
