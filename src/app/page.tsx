"use client";

import { useNavbarStore } from "@/store/navbarStore";
import { useEffect } from "react";

export default function Home() {
  const setNavbar = useNavbarStore((s) => s.setNavbar);
  useEffect(() => {
    setNavbar({ title: "Hello World!", showBackButton: false });
  }, [setNavbar]);

  const num = Array.from({ length: 50 }, (_, i) => i);

  return (
    <div className="block w-full min-h-[2000px]">
      <div className="flex flex-col max-w-7xl mx-auto mb-[200px] mt-[50px]">
        {num.map((n) => (
          <div
            key={n}
            className="bg-background/60 backdrop-blur-[2px] max-md:mx-4 max-lg:mx-6 max-2xl:mx-10 px-4 sm:px-6 lg:px-8 py-10 border-1 border-default-900 mb-2 transition rounded"
          >
            <h2 className="text-2xl font-semibold mb-4">Section {n + 1}</h2>
            <p className="text-gray-700 dark:text-gray-300">
              This is some sample content for section {n + 1}. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
