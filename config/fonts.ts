import { Inter_Tight, Tiro_Bangla, JetBrains_Mono } from "next/font/google";

export const fontSans = Inter_Tight({ subsets: ["latin"] });
export const BanglaSans = Tiro_Bangla({
  weight: "400",
  subsets: ["bengali"],
});

export const fontMono = JetBrains_Mono({
  weight: "variable",
  subsets: ["latin"],
});
