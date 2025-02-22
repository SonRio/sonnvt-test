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
  z-index: 999;
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
    background: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    position: absolute;
    border-radius: 40%;
    z-index: 0;
    left: -80px;
    bottom: -100px;
    mix-blend-mode: color-dodge;
    /* pointer-events: none; */
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
