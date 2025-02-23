"use client";
import { createContext, ReactNode, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import * as en from "@/languages/en.json";
import * as vi from "@/languages/vi.json";

interface StoreContextValue {
  isMobile: any;
  onChangeLanguage: (params: string) => void;
  trans: any;
}
interface Props {
  children: ReactNode;
}
export const ContextProviderWrapper = createContext<StoreContextValue | null>(
  null
);
export const ContextProvider: React.FC<Props> = ({ children }: Props) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [trans, setTrans] = useState<any>(null);

  const onChangeLanguage = (lang?: string) => {
    if (!lang) {
      localStorage.setItem("language", "en");
      setTrans(en);
      return;
    }
    lang === "en" ? setTrans(en) : setTrans(vi);
    return;
  };

  return (
    <ContextProviderWrapper.Provider
      value={{
        isMobile,
        onChangeLanguage,
        trans,
      }}
    >
      {children}
    </ContextProviderWrapper.Provider>
  );
};
