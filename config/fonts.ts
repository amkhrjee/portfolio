import { IBM_Plex_Sans, Libre_Baskerville } from "next/font/google";

export const fontSans = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400"] });

export const fontSerif = Libre_Baskerville({
  weight: "400",
  subsets: ["latin"],
});
