"use client";

import type { ThemeProviderProps } from "next-themes";

import * as React from "react";
import { HeroUIProvider } from "@heroui/system";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { LanguageContext } from "./context/LanguageContext";
import { Language } from "@/config/definitions";
import { SetLanguageContext } from "./context/SetLanguageContext";
import { BanglaSans, fontSans } from "@/config/fonts";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NonNullable<
      Parameters<ReturnType<typeof useRouter>["push"]>[1]
    >;
  }
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();
  const [language, setLanguage] = React.useState(Language.en);
  return (
    <HeroUIProvider navigate={router.push}>
      <NextThemesProvider {...themeProps}>
        <LanguageContext.Provider value={language}>
          <SetLanguageContext.Provider value={setLanguage}>
            <div
              className={
                language === Language.en
                  ? fontSans.className
                  : BanglaSans.className
              }
            >
              {children}
            </div>
          </SetLanguageContext.Provider>
        </LanguageContext.Provider>
      </NextThemesProvider>
    </HeroUIProvider>
  );
}
