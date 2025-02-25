/* eslint-disable  @typescript-eslint/no-explicit-any */
import { useContext } from "react";
import Link from "next/link";
import {
  BtnClose,
  HeaderMenuMB,
  ItemMenuMB,
  LanguageOption,
  LanguageOptions,
  LanguageSelected,
  ModalMenuMB,
  SwitchLanguage,
  WrapModalMenu,
} from "./styled";
import { LIST_LANGUAGES, OptionLanguageType } from ".";
import { translate } from "@/utils/translateWithParams";
import { ContextProviderWrapper } from "@/context";

type MenuHamburgerType = {
  NAV_LINKS: any[];
  isShowMenu: boolean;
  isSelectLang: boolean;
  setIsShowMenu: (params: boolean) => void;
  onSelectLang: (params: OptionLanguageType) => void;
  setIsSelectLang: (params: boolean) => void;
  languageSelected: OptionLanguageType;
};

const MenuHamburger = ({
  NAV_LINKS,
  isShowMenu,
  languageSelected,
  isSelectLang,
  onSelectLang,
  setIsShowMenu,
  setIsSelectLang,
}: MenuHamburgerType) => {
  const { trans } = useContext(ContextProviderWrapper)!;
  const smoothScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsShowMenu(false);
  };

  return (
    <WrapModalMenu
      style={{
        zIndex: isShowMenu ? 999 : "-999",
      }}
      className={
        isShowMenu
          ? `animate__faster animate__animated animate__fadeInDown`
          : `animate__faster animate__animated animate__fadeOutUp`
      }
    >
      <ModalMenuMB
        style={{
          background: isShowMenu ? "#fff" : "transparent",
          opacity: isShowMenu ? 1 : 0,
        }}
      >
        <HeaderMenuMB className="flex justify-between items-center">
          <SwitchLanguage
            onClick={() => {
              setIsSelectLang(!isSelectLang);
            }}
          >
            <LanguageSelected className="flex items-center gap-1">
              <div className="img-flag">
                <img src={languageSelected?.img} alt="flag" />
              </div>
              <div
                style={{
                  transform: isSelectLang ? "rotate(180deg)" : "rotate(0deg)",
                }}
                className="img-arrow"
              >
                <img
                  src="/assets/images/header/arrow-drop-down.svg"
                  alt="flag"
                />
              </div>
            </LanguageSelected>
            {isSelectLang && (
              <LanguageOptions data-aos="flip-left">
                {LIST_LANGUAGES?.map(
                  (lang: OptionLanguageType, index: number) => (
                    <LanguageOption
                      className="flex items-center gap-2"
                      key={index}
                      onClick={() => {
                        onSelectLang(lang);
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
          <BtnClose
            onClick={() => {
              setIsShowMenu(false);
            }}
          >
            <img src="/assets/images/header/icon-close.svg" alt="close" />
          </BtnClose>
        </HeaderMenuMB>
        {NAV_LINKS.map((item: any, index: number) => (
          <Link
            key={index}
            href={item.href}
            onClick={() => {
              setIsShowMenu(!isShowMenu);
              if (item.href.startsWith("/#")) {
                smoothScroll(item.href.replace("/#", ""));
              }
            }}
          >
            <ItemMenuMB key={index}>
              <p> {translate(item.label, trans)}</p>
            </ItemMenuMB>
          </Link>
        ))}
      </ModalMenuMB>
    </WrapModalMenu>
  );
};

export default MenuHamburger;
