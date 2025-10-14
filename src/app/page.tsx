"use client";

import { ThemeSwitcher } from "@/components/ThemeSwitcher";

export default function Home() {
  return (
    <div>
      <div className="flex items-center justify-between mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-6">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <ThemeSwitcher />
      </div>

    </div>
  );
}
