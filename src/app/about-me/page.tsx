"use client";

import { useNavbarStore } from "@/store/navbarStore";
import { useEffect } from "react";

export default function AboutMe() {
  const setNavbar = useNavbarStore((s) => s.setNavbar);

  useEffect(() => {
    setNavbar({ title: "About Me", showBackButton: true });
  }, [setNavbar]);

  return <div className="block w-full"></div>;
}
