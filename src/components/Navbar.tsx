"use client";

import { cn } from "@/lib/utils";
import { useNavbarStore } from "@/store/navbarStore";
import { Button } from "@heroui/react";
import { usePathname, useRouter } from "next/navigation";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { MdKeyboardArrowLeft } from "react-icons/md";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const { title, showBackButton } = useNavbarStore();

  return (
    <div className="relative flex items-center justify-between px-4 sm:px-6 lg:px-8 py-[50px] max-w-7xl mx-auto">
      <div className="flex flex-row items-center gap-4 md:gap-6">
        {showBackButton && (
          <Button
            color="default"
            variant="ghost"
            radius="full"
            onPress={() => router.back()}
            className="max-md:p-1 max-md:min-w-10 flex items-center border-1"
          >
            <MdKeyboardArrowLeft size={20} />
            <p className="max-md:hidden">Back</p>
          </Button>
        )}
        <h1 className="text-3xl md:text-5xl font-bold">{title || "Hello world!"}</h1>
      </div>

      <div className="flex flex-row items-center gap-2 md:gap-4">
        <Button
          color="default"
          variant={pathname === "/about-me" ? "flat" : "light"}
          radius="full"
          onPress={() => router.push("/about-me")}
          className={cn("max-md:text-xs max-md:p-1", pathname !== "/about-me" ? "border-1 border-default-300" : "")}
        >
          About Me
        </Button>
        <ThemeSwitcher />
      </div>

      {/* Glassmorphism Effect */}
      <div className="-z-10 absolute left-1/2 top-0 w-screen h-full -translate-x-1/2 bg-white/10 dark:bg-black/10 backdrop-blur-[2px]" />
    </div>
  );
}
