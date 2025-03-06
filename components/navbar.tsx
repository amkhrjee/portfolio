import { Button } from "@heroui/button";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@heroui/navbar";
import { LuLanguages, LuMoon } from "react-icons/lu";
import Link from "next/link";

import { BanglaSans } from "@/config/fonts";

export const Navbar = () => {
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
          <Button isIconOnly aria-label="Theme Change" variant="ghost">
            <LuMoon />
          </Button>
        </NavbarItem>
      </NavbarContent>
    </HeroUINavbar>
  );
};
