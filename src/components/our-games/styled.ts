"use client";

import { styled } from "styled-components";

export const WrapOurGames = styled.div`
  position: relative;
  margin: 128px 0;
  @media screen and (max-width: 1024px) {
    margin: 80px 0;
  }
  @media screen and (max-width: 767px) {
    margin: 40px 0;
    margin-top: 58px;
    h2 {
      font-size: 40px;
      font-style: normal;
      font-weight: 900;
      line-height: 50px; /* 125% */
      letter-spacing: 0.6px;
    }
  }
`;

export const TitleBlock = styled.div`
  position: relative;
  max-width: 860px;
  margin: 0 auto;
  margin-bottom: 80px;
  p {
    padding: 3px 10px;
  }
  @media screen and (max-width: 767px) {
    margin-bottom: 36px;
  }
`;

export const ShowAllGame = styled.div`
  position: relative;
  width: 100%;
  gap: 40px;
  @media screen and (max-width: 1024px) {
    gap: 10px;
  }
  @media screen and (max-width: 767px) {
    gap: 15px;
    flex-wrap: wrap;
  }
`;

export const SlideGames = styled.div`
  position: relative;
  width: calc((100% - 120px) / 4);
  gap: 40px;
  &:nth-child(even) {
    margin-top: 120px;
  }
  @media screen and (max-width: 1024px) {
    width: calc((100% - 30px) / 4);
    gap: 10px;
    &:nth-child(even) {
      margin-top: 80px;
    }
  }
  @media screen and (max-width: 767px) {
    gap: 20px;
    width: calc((100% - 15px) / 2);
    &:nth-child(even) {
      margin-top: 0;
    }
    &:nth-child(2) {
      margin-top: 40px;
    }
    &:nth-child(3) {
      margin-top: -40px;
    }
  }
`;

export const WrapSlideGameItem = styled.div`
  position: relative;
  width: 100%;
  height: 560px;
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 10px;
  background: #f6f6fb;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  @media screen and (max-width: 767px) {
    height: 267px;
  }
`;

export const SlideGameItem = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  transition: all.3s;
  h3 {
    color: var(--Neutral-White, #fff);
    font-feature-settings: "liga" off, "clig" off;
    /* Montserrat/Bold/48px */
    font-family: Montserrat;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 60px; /* 125% */
    letter-spacing: -1px;
    z-index: 1;
    position: relative;
    margin-left: 32px;
  }
  p {
    color: var(--Neutral-White, #fff);
    z-index: 1;
    position: relative;
    margin-bottom: 45px;
    margin-left: 32px;
    margin-top: 16px;
  }
  &:hover {
    transform: scale(1.1);
    transition: all.3s;
  }
  @media screen and (max-width: 767px) {
    h3 {
      font-size: 24px;
      line-height: 30px; /* 125% */
      margin-left: 8px;
    }

    p {
      font-size: 12px;
      line-height: 15px; /* 125% */
      letter-spacing: 0.9px;
      margin-bottom: 8px;
      margin-left: 8px;
      margin-top: 3px;
    }
    &:hover {
      transform: scale(1.02);
      transition: all.3s;
    }
  }
`;
