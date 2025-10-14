"use client";

import { Button } from "@heroui/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { CiLight } from "react-icons/ci";
import { PiMoonThin } from "react-icons/pi";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <Button
      isIconOnly
      variant="bordered"
      color="default"
      radius="full"
      onPress={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Light mode" : "Dark mode"}
      className="border-1 hover:bg-default-100 transition-all duration-300"
    >
      {isDark ? <CiLight size={28} color="#d4d4d8" /> : <PiMoonThin size={28} color="#27272a" />}
    </Button>
  );
}
