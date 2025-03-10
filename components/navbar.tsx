"use client";
import { motion } from "framer-motion";

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
        <motion.div
          initial={{ opacity: 0, translateX: -20 }}
          animate={{ opacity: 1, translateX: 0 }}
        >
          <Link className="font-semibold text-xl" href="/">
            Aniruddha.
          </Link>
        </motion.div>
      </NavbarBrand>
      <motion.div
        initial={{ opacity: 0, translateX: 20 }}
        animate={{ opacity: 1, translateX: 0 }}
      >
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
      </motion.div>
    </HeroUINavbar>
  );
};
