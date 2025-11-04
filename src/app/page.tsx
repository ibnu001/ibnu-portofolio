"use client";

import Earth3D from "@/modules/3D/Earth3D";
import Moon3D from "@/modules/3D/Moon3D";
import GridCanvas from "@/modules/grid-effect/GridCanvas";
import Header from "@/modules/header/Header";
import Landing from "@/modules/home/Landing";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <GridCanvas className="-z-20" />

      <Earth3D className="fixed -top-44 -left-44 pointer-events-none select-none overflow-hidden -z-10" />
      <Moon3D className="fixed -bottom-52 -right-52 pointer-events-none select-none overflow-hidden -z-10 blur-[1px]" />
      <Landing />

      <footer className="text-center py-6 border-t border-t-white/20 backdrop-blur-sm w-full">
        <p className="text-white/50 text-sm px-12 lg:px-[100px]">
          © 2025 Muhammad Ibnu Al Yazzar. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}