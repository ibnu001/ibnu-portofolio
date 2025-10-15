"use client";

import Navbar from "@/components/Navbar";
import GridCanvas from "@/modules/GridCanvas";
import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <HeroUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <Navbar />
        {children}
        <GridCanvas className="-z-20" />
      </NextThemesProvider>
    </HeroUIProvider>
  );
}
