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


    </div>
    
    
  );
}
