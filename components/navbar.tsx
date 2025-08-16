"use client";
import { motion } from "framer-motion";

import { Button } from "@heroui/button";
import { LuMoon, LuSunMedium } from "react-icons/lu";

import { useTheme } from "next-themes";
import Link from "next/link";
import { FaHeart } from "react-icons/fa6";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="w-full flex pt-4 justify-between">
      <motion.div
        initial={{ opacity: 0, translateX: -20 }}
        animate={{ opacity: 1, translateX: 0 }}
      >
        <Link className="font-semibold text-xl font-mono" href="/">
          @amkhrjee
        </Link>
      </motion.div>
      <motion.div
        className="flex gap-2"
        initial={{ opacity: 0, translateX: 20 }}
        animate={{ opacity: 1, translateX: 0 }}
      >
        <Link
          href={
            "https://www.paypal.com/paypalme/amkhrjee?country.x=IN&locale.x=en_GB"
          }
        >
          <Button startContent={<FaHeart color="red" />}>Support</Button>
        </Link>
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
      </motion.div>
    </div>
  );
}
