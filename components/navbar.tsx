"use client";

import { LuMoon, LuSunMedium } from "react-icons/lu";

import { Button, Link as HeroLink } from "@heroui/react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { FaHeart } from "react-icons/fa6";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="w-full flex pt-4 justify-between">
      <Link className="font-semibold text-xl font-mono" href="/">
        অনিরুদ্ধ
      </Link>
      <div className="flex gap-2">
        <HeroLink
          className="inline-flex items-center gap-2 rounded-md border border-default px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-default-100"
          href="https://www.paypal.com/paypalme/amkhrjee?country.x=IN&locale.x=en_GB"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaHeart color="red" />
          Support
        </HeroLink>
        <Button
          onPress={() =>
            theme == "light" ? setTheme("dark") : setTheme("light")
          }
          isIconOnly
          aria-label="Theme Change"
          variant="light"
        >
          {theme == "light" ? <LuMoon /> : <LuSunMedium />}
        </Button>
      </div>
    </div>
  );
}
