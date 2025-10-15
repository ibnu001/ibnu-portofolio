"use client";

import { cn } from "@/lib/utils";
import { useNavbarStore } from "@/store/navbarStore";
import { Button } from "@heroui/react";
import { usePathname, useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import { ThemeSwitcher } from "./ThemeSwitcher";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const { title, showBackButton } = useNavbarStore();

  console.log("title", title);

  return (
    <div className="relative flex items-center justify-between px-4 sm:px-6 lg:px-8 py-[50px] max-w-7xl mx-auto">
      <div className="flex flex-row items-center gap-4 md:gap-6">
        {showBackButton && (
          <Button
            color="default"
            variant="bordered"
            radius="full"
            onPress={() => router.back()}
          >
            <FaArrowLeft size={14} />
            Back
          </Button>
        )}
        <h1 className="text-5xl font-bold">{title || "Hello world!"}</h1>
      </div>

      <div className="flex flex-row items-center gap-4">
        <Button
          color="default"
          variant="bordered"
          radius="full"
          onPress={() => router.push("/about-me")}
          className={cn(pathname === "/about-me" && "bg-default-100")}
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
