"use client";
import { motion } from "framer-motion";

import { Button } from "@heroui/button";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@heroui/navbar";
import Link from "next/link";
import { LuLanguages, LuMoon, LuSunMedium } from "react-icons/lu";

import { LanguageContext } from "@/app/context/LanguageContext";
import { SetLanguageContext } from "@/app/context/SetLanguageContext";
import { Language } from "@/config/definitions";
import { useTheme } from "next-themes";
import { useContext } from "react";

export const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const language = useContext(LanguageContext);
  const setLanguage = useContext(SetLanguageContext);

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
              startContent={<LuLanguages />}
              variant="ghost"
              onPress={() =>
                setLanguage!(
                  language === Language.en ? Language.bn : Language.en
                )
              }
            >
              {language === Language.en ? "বাংলা" : "English"}
            </Button>
          </NavbarItem>
          <NavbarItem>
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
          </NavbarItem>
        </NavbarContent>
      </motion.div>
    </HeroUINavbar>
  );
};
