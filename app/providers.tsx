"use client";

import type { ThemeProviderProps } from "next-themes";

import { Language } from "@/config/definitions";
import { HeroUIProvider } from "@heroui/system";
import { ToastProvider } from "@heroui/toast";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/navigation";
import * as React from "react";
import { LanguageContext } from "./context/LanguageContext";
import { SetLanguageContext } from "./context/SetLanguageContext";

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
            <div>
              <ToastProvider placement="top-right" toastOffset={80} />
              {children}
            </div>
          </SetLanguageContext.Provider>
        </LanguageContext.Provider>
      </NextThemesProvider>
    </HeroUIProvider>
  );
}
