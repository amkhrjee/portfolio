"use client";

import { LuMoon, LuSunMedium } from "react-icons/lu";

import { Button } from "@heroui/react";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="w-full flex pt-4 justify-between">
      <Link className="font-semibold text-xl font-mono" href="/">
        অনিরুদ্ধ
      </Link>
      <div className="flex gap-2">
        <Button
          onPress={() =>
            theme == "light" ? setTheme("dark") : setTheme("light")
          }
          isIconOnly
          aria-label="Theme Change"
          variant="ghost"
        >
          {theme == "light" ? <LuMoon /> : <LuSunMedium />}
        </Button>
      </div>
    </div>
  );
}
