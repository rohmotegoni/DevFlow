"use client"
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { toast } from "sonner";
import { signIn } from "next-auth/react";
import routes from "@/contest/routes";

const SocialAuthForm = () => {
  const buttonclassname =
    "background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 rounded-2 px-4 py-3.5";

  const handleSignIn = async (provider: "github" | "google") => {
    try {
      await signIn(provider, {
        callbackUrl: routes.HOME, // e.g. "/"
        redirect: true,           // let NextAuth handle redirect
      });
    } catch (error) {
      console.log(error);

      toast("SignIn failed", {
        description:
          error instanceof Error
            ? error.message
            : "An error occured during sign-in",
      });
    }
  };

  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button
        className={buttonclassname}
        onClick={() => handleSignIn("github")}
      >
        <Image
          src={"/icons/github.svg"}
          alt="GitHub Logo"
          width={20}
          height={20}
          className="invert-colors mr-2.5 object-contain"
        />
        <span>Log in with GitHub</span>
      </Button>

      <Button
        className={buttonclassname}
        onClick={() => handleSignIn("google")}
      >
        <Image
          src={"/icons/google.svg"}
          alt="Google Logo"
          width={20}
          height={20}
          className="mr-2.5 object-contain"
        />
        <span>Log in with Google</span>
      </Button>
    </div>
  );
};

export default SocialAuthForm;
