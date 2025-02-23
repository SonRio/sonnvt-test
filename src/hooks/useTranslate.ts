import * as en from "@/languages/en.json";
import * as vi from "@/languages/vi.json";

const useTranslate = () => {
  const onChangeLanguage = (lang: string) => {
    if (typeof window === "undefined") return;
    const langDefault: any = localStorage && localStorage?.getItem("language");
    if (!langDefault) {
      localStorage.setItem("language", "en");
      return en;
    }

    return langDefault === "en" ? en : vi;
  };
};

export default useTranslate;
