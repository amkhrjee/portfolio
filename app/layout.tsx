// @ts-ignore
import "@/styles/globals.css";
import { Metadata, Viewport } from "next";

import Providers from "./providers";

import Navbar from "@/components/navbar";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Geist } from "next/font/google";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL("https://amkhrjee.in"),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords:
    "portfolio, web development, software engineering, personal website, developer portfolio",
  authors: [{ name: "Aniruddha Mukherjee", url: "https://amkhrjee.in" }],
  creator: "Aniruddha Mukherjee",
  publisher: "Aniruddha Mukherjee",

  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/og-image.jpg"],
    creator: "@amkhrjee",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={cn("font-sans", geist.variable)}
    >
      <head />
      <body
        className={`min-h-screen bg-background font-sans antialiased px-4 md:px-14`}
        style={{ fontFamily: "CMU Sans Serif" }}
      >
        <Providers
          themeProps={{
            attribute: "class",
            enableSystem: true,
          }}
        >
          <Navbar />
          <div className="relative z-10">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
