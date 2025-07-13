import "@/styles/globals.css";
import { Metadata, Viewport } from "next";

import { Providers } from "./providers";

import { Navbar } from "@/components/navbar";
import Background from "@/components/ui/background";
import { fontSans } from "@/config/fonts";
import { siteConfig } from "@/config/site";

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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://amkhrjee.in",
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
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
    <html suppressHydrationWarning lang="en">
      <head />
      <script
        src="https://beamanalytics.b-cdn.net/beam.min.js"
        data-token="2471c6fc-54eb-449d-bf40-814496412f30"
        async
      ></script>
      <body
        className={`min-h-screen bg-background ${fontSans.className} antialiased`}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <Navbar />
          <div className="relative z-10">{children}</div>
          <Background />
        </Providers>
      </body>
    </html>
  );
}
