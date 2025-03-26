"use client";
import { useTheme } from "next-themes";
import { ShootingStars } from "./shooting-starts";
import { StarsBackground } from "./stars-background";

export default function Background() {
  const { theme } = useTheme();

  if (theme !== "dark") return null;

  return (
    <>
      <ShootingStars />
      <StarsBackground />
    </>
  );
}
