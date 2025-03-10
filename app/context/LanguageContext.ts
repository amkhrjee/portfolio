import { Language } from "@/config/definitions";
import { createContext } from "react";

export const LanguageContext = createContext<Language>(Language.en);
