"use client";
import { useContext, useEffect, useState } from "react";
import {
  ContainerBlock,
  ImgLogo,
  LanguageOption,
  LanguageOptions,
  LanguageSelected,
  LogoHome,
  MenuBugger,
  Navbar,
  NavbarLink,
  SwitchLanguage,
  WrapHeader,
  WrapLogoAndNav,
} from "./styled";
import { useMediaQuery } from "react-responsive";
import MenuHamburger from "./menu-bugger";

import { translate } from "@/utils/translateWithParams";
import { ContextProviderWrapper } from "@/context";

export default function Header() {
  const [isSelectLang, setIsSelectLang] = useState(false);
  const [isShowNavMB, setIsShowNavMB] = useState(false);
  const [languageSelected, setLanguageSelected] = useState<OptionLanguageType>(
    LIST_LANGUAGES[0]
  );

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const { onChangeLanguage, trans } = useContext(ContextProviderWrapper)!;

  const handleSelectLang = (language: OptionLanguageType) => {
    if (typeof window === "undefined") return;
    localStorage.setItem("language", language.value);
    onChangeLanguage(language.value);
    setLanguageSelected(language);
  };

  const handleToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (window === undefined) return;
    const defaultLang = localStorage.getItem("language");
    if (!defaultLang || defaultLang === "en") {
      onChangeLanguage(LIST_LANGUAGES[0].value);
      setLanguageSelected(LIST_LANGUAGES[0]);
    } else {
      onChangeLanguage(LIST_LANGUAGES[1].value);
      setLanguageSelected(LIST_LANGUAGES[1]);
    }
  });

  return (
    <WrapHeader>
      <MenuHamburger
        NAV_LINKS={NAV_LINKS}
        setIsShowMenu={() => setIsShowNavMB(!isShowNavMB)}
        isShowMenu={isShowNavMB}
        isSelectLang={isSelectLang}
        languageSelected={languageSelected}
        onSelectLang={handleSelectLang}
        setIsSelectLang={setIsSelectLang}
      />
      <ContainerBlock>
        <WrapLogoAndNav className="flex justify-between items-center">
          <LogoHome onClick={handleToTop}>
            <ImgLogo className="flex items-center">
              <img src="/assets/images/header/logo-home.svg" alt="home" />
            </ImgLogo>
          </LogoHome>
          {isMobile ? (
            <MenuBugger
              onClick={() => {
                setIsShowNavMB(!isShowNavMB);
              }}
            >
              <img src="/assets/images/header/menu.svg" alt="menu" />
            </MenuBugger>
          ) : (
            <Navbar className="flex items-center justify-between">
              {NAV_LINKS.map((link: NavLinkType, index: number) => (
                <NavbarLink
                  href={link.href}
                  className="flex items-center"
                  key={index}
                >
                  <p className="text-white cursor-pointer">
                    {translate(link.label, trans)}
                  </p>
                </NavbarLink>
              ))}
              <SwitchLanguage
                onClick={() => {
                  setIsSelectLang(!isSelectLang);
                }}
              >
                <LanguageSelected className="flex items-center gap-1">
                  <div className="img-flag">
                    <img src={languageSelected.img} alt="flag" />
                  </div>
                  <div
                    style={{
                      transform: isSelectLang
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                    }}
                    className="img-arrow"
                  >
                    <img
                      src="/assets/images/header/img-arrow-down.svg"
                      alt="flag"
                    />
                  </div>
                </LanguageSelected>
                {isSelectLang && (
                  <LanguageOptions>
                    {LIST_LANGUAGES?.map(
                      (lang: OptionLanguageType, index: number) => (
                        <LanguageOption
                          className="flex items-center gap-2"
                          key={index}
                          onClick={() => {
                            handleSelectLang(lang);
                          }}
                        >
                          <div
                            style={{
                              opacity:
                                lang.value === languageSelected.value ? "1" : 0,
                            }}
                            className="img-checked"
                          >
                            <img
                              src="/assets/images/header/img-checked.svg"
                              alt="checked"
                            />
                          </div>
                          <div className="img-flag">
                            <img src={lang.img} alt="flag" />
                          </div>
                          <span>{lang.label}</span>
                        </LanguageOption>
                      )
                    )}
                  </LanguageOptions>
                )}
              </SwitchLanguage>
            </Navbar>
          )}
        </WrapLogoAndNav>
      </ContainerBlock>
    </WrapHeader>
  );
}

export type NavLinkType = {
  label: string;
  href: string;
};

export type OptionLanguageType = {
  label: string;
  img: string;
  value: string;
};

export const LIST_LANGUAGES: OptionLanguageType[] = [
  {
    img: "/assets/images/header/img-flag-usa.svg",
    label: "English",
    value: "en",
  },
  {
    img: "/assets/images/header/img-flag-vn.svg",
    label: "VietNamese",
    value: "vn",
  },
];

const NAV_LINKS: NavLinkType[] = [
  {
    label: "ABOUT US",
    href: "#about",
  },
  {
    label: "GAMES",
    href: "#games",
  },
  {
    label: "PARTNERS",
    href: "#partners",
  },
  {
    label: "CONTACT US",
    href: "#contact",
  },
];
