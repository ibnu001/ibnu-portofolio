"use client";

import Earth3D from "@/components/3D/Earth3D";
import Moon3D from "@/components/3D/Moon3D";
import GridCanvas from "@/components/GridCanvas";
import Header from "@/components/Header";
import Landing from "@/modules/Landing";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <GridCanvas className="-z-20" />

      <Earth3D className="fixed -top-[180px] -left-[180px] pointer-events-none select-none overflow-hidden -z-10 blur-[1px]" />
      <Moon3D className="fixed -bottom-[200px] -right-[200px] pointer-events-none select-none overflow-hidden -z-10 blur-[3px]" />
      <Landing />

      <footer className="text-center py-6 border-t border-bdr-light dark:border-bdr-dark">
        <p className="text-secondary-light dark:text-secondary-dark text-sm">
          © 2024 Alex Doe. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
