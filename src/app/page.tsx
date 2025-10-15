"use client";

import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import GridCanvas from "@/modules/GridCanvas";

export default function Home() {
  return (
    <div className="block w-full">
      <div className="relative flex items-center justify-between px-4 sm:px-6 lg:px-8 py-[50px] max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <ThemeSwitcher />

        {/* Glassmorphism Effect */}
        <div className="-z-10 absolute left-1/2 top-0 w-screen h-full -translate-x-1/2 bg-white/10 dark:bg-black/10 backdrop-blur-[2px]" />
      </div>

      <GridCanvas className="-z-20" />
    </div>
  );
}
