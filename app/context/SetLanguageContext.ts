import { Language } from "@/config/definitions";
import { createContext } from "react";

export const SetLanguageContext = createContext<
  React.Dispatch<React.SetStateAction<Language>> | undefined
>(undefined);
