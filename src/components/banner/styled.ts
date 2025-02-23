"use client";

import { styled } from "styled-components";

export const WrapBanner = styled.div`
  position: relative;
  background-image: url("/assets/images/banner/bg-banner.png");
  background-position: center;
  background-size: cover;
  height: 1018px;
  background-repeat: no-repeat;
  .img-fairy {
    max-width: 938px;
    position: absolute;
    top: 84px;
  }
  @media screen and (max-width: 1440px) {
    .img-fairy {
      max-width: 650px;
      top: 310px;
    }
  }
  @media screen and (max-width: 767px) {
    background-image: url("/assets/images/banner/bg-banner-mb.png");
    background-position: 0 0;
    height: auto;
    padding-bottom: 70px;
    .img-fairy {
      max-width: 320px;
      top: 550px;
      right: 0px;
    }
  }
`;

export const BtnToTop = styled.button`
  border: none;
  outline: none;
  background: transparent;
  transition: all 0.3s;
  .img-arrow {
    max-width: 80px;
  }
  position: fixed;
  bottom: 200px;
  right: 80px;
  z-index: 99;
  @media screen and (max-width: 1024px) {
    bottom: 50px;
    right: 20px;
  }
`;

export const CountDownContainer = styled.div`
  position: relative;
  max-width: 860px;
  margin: 0 auto;
  padding: 0 46px;
  padding-top: 294px;
  h1 {
    color: var(--Neutral-White, #fff);
    text-align: center;
    font-feature-settings: "liga" off, "clig" off;
    font-family: "Playfair Display";
    font-size: 80px;
    font-style: normal;
    font-weight: 900;
    line-height: 120px; /* 150% */
    letter-spacing: 0.6px;

    margin-bottom: 21px;
  }
  .bg-blur {
    width: 1050px;
    height: 350px;
    background: radial-gradient(
      27.72% 27.79% at 50.81% 68.15%,
      #210544 0%,
      rgba(23, 5, 68, 0.71) 50.52%,
      rgba(23, 5, 68, 0) 100%
    );
    backdrop-filter: blur(5px);
    position: absolute;
    border-radius: 40%;
    z-index: 0;
    left: -80px;
    bottom: -100px;
    mix-blend-mode: color-dodge;
    pointer-events: none;
  }
  @media screen and (max-width: 1440px) {
    .bg-blur {
      width: 860px;
      left: 40px;
    }
  }
  @media screen and (max-width: 1024px) {
    .bg-blur {
      display: none;
    }
  }
  @media screen and (max-width: 767px) {
    padding: 0 16px;
    padding-top: 115px;
    padding-bottom: 100px;
    h1 {
      font-size: 40px;
      font-weight: 900;
      line-height: 50px; /* 125% */
      letter-spacing: 0.6px;
      margin-bottom: 35px;
      margin-top: 21px;
    }
  }
`;

export const TimeCountDown = styled.div`
  position: relative;
  margin-bottom: 101px;
  border-radius: 21px;
  background: var(--Neutral-White, #fff);
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
  padding: 25px 40px;
  h3 {
    color: var(--Neutral-Black, #000);
    text-align: center;
    font-feature-settings: "liga" off, "clig" off;
    font-family: Montserrat;
    font-size: 65.172px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.652px;
  }
  @media screen and (max-width: 767px) {
    padding: 30px 26px;
    margin-bottom: 40px;
    h3 {
      color: var(--Neutral-Black, #000);
      text-align: center;
      font-feature-settings: "liga" off, "clig" off;
      font-family: Montserrat;
      font-size: 40px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -0.652px;
    }
  }
`;

export const Time = styled.div`
  p {
    color: var(--Neutral-Black, #000);
    text-align: center;
    font-feature-settings: "liga" off, "clig" off;
    font-family: Montserrat;
    font-size: 15.641px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.652px;
  }
  h2 {
    margin-bottom: 20px;
  }
  @media screen and (max-width: 767px) {
    h2 {
      font-size: 36px;
      line-height: 45px;
      margin: 0;
    }
    p {
      font-size: 12px;
    }
  }
`;

export const DesAndInput = styled.div`
  width: 560px;
  margin: 0 auto;
  position: relative;
  p {
    color: var(--Neutral-White, #fff);
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    line-height: 126%; /* 22.68px */
    margin-bottom: 32px;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
    p {
      font-size: 12px;
      line-height: 15px;
      margin-bottom: 18px;
    }
  }
`;

export const InputEmail = styled.div`
  position: relative;
  input {
    width: 100%;
    outline: none;
    border: none;
    color: var(--Neutral-N600, #000);
    font-feature-settings: "liga" off, "clig" off;
    /* Montserrat/Regular/14px */
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 19.6px */
    padding: 16px 14px;
    border-radius: 8px;
    background: var(--Neutral-White, #fff);
  }
  .img-arrow-right {
    max-width: 24px;
    position: absolute;
    right: 10px;
    top: 14px;
  }
`;
