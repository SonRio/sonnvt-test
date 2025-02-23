"use client";

import { styled } from "styled-components";

export const ContainerBlock = styled.div`
  max-width: 1920px;
  padding: 0 80px;
  margin: 0 auto;
  position: relative;
  @media screen and (max-width: 1024px) {
    padding: 0 20px;
  }
  @media screen and (max-width: 767px) {
    padding: 0 16px;
  }
`;

export const WrapHeader = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.5) -25%,
    rgba(0, 0, 0, 0) 100%
  );
  left: 0;
  padding-top: 20px;
  padding-bottom: 78px;
`;

export const WrapLogoAndNav = styled.div`
  position: relative;
  width: 100%;
  @media screen and (max-width: 767px) {
    padding-top: 30px;
  }
`;

export const LogoHome = styled.div`
  cursor: pointer;
  position: relative;
`;

export const ImgLogo = styled.div`
  max-width: 108px;
  @media screen and (max-width: 767px) {
    max-width: 68px;
  }
`;

export const Navbar = styled.div`
  position: relative;
  max-width: 710px;
  width: 100%;
  padding-top: 20px;
`;

export const NavbarLink = styled.a`
  position: relative;
`;

export const SwitchLanguage = styled.div`
  position: relative;
  .img-flag {
    max-width: 34px;
  }
  @media screen and (max-width: 767px) {
    border-radius: 8px;
    border: 1px solid var(--Neutral-N400, #afafaf);
    background: var(--Neutral-N50, #f6f6f6);
    width: 80px;
    padding: 4px 8px;
  }
`;

export const LanguageSelected = styled.div`
  position: relative;
  .img-arrow {
    max-width: 24px;
  }
`;

export const LanguageOptions = styled.div`
  transition: all.3s;
  position: absolute;
  width: 156px;
  border-radius: 8px;
  border: 1px solid var(--Neutral-N100, #eee);
  background: #fff;
  padding: 0px 8px;
  left: -100px;
  top: 35px;
  padding-bottom: 5px;
  padding-top: 5px;
  @media screen and (max-width: 767px) {
    left: 0;
    top: 50px;
  }
`;

export const LanguageOption = styled.div`
  cursor: pointer;
  transition: all.3s;
  border-radius: 6px;
  span {
    color: #000;
    font-feature-settings: "liga" off, "clig" off;
    font-family: Montserrat;
    font-size: 10px;
    font-style: normal;
    font-weight: 700;
    line-height: 17.5px; /* 175% */
  }
`;

export const MenuBugger = styled.div`
  max-width: 40px;
`;

// CSS FOR MENU BUGGER
export const WrapModalMenu = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  padding: 30px 20px;
  padding-bottom: 100px;
  min-height: 100vh;
  background-color: #fff;
`;

export const ModalMenuMB = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const HeaderMenuMB = styled.div``;

export const BtnClose = styled.div`
  max-width: 40px;
`;

export const ItemMenuMB = styled.div`
  gap: 12px;
  border-bottom: 1px solid #eee;
  padding: 24px 0;
  transition: all.3s;
  p {
    color: var(--Neutral-Black, #000);
    font-feature-settings: "liga" off, "clig" off;
    font-weight: 700;
    line-height: 17.5px; /* 125% */
    text-align: center;
  }
`;
