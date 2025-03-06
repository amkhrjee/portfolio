"use client";
import { Button } from "@heroui/button";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@heroui/navbar";
import { LuLanguages, LuMoon, LuSunMedium } from "react-icons/lu";
import Link from "next/link";

import { BanglaSans } from "@/config/fonts";
import { useTheme } from "next-themes";

export const Navbar = () => {
  const { theme, setTheme } = useTheme();
  return (
    <HeroUINavbar>
      <NavbarBrand>
        <Link className="font-semibold text-xl" href="/">
          Aniruddha.
        </Link>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            className={BanglaSans.className}
            startContent={<LuLanguages />}
            variant="ghost"
          >
            বাংলা
          </Button>
        </NavbarItem>
        <NavbarItem>
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
        </NavbarItem>
      </NavbarContent>
    </HeroUINavbar>
  );
};
