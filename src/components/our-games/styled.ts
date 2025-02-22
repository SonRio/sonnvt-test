"use client";

import { styled } from "styled-components";

export const WrapOurGames = styled.div`
  position: relative;
  margin: 128px 0;
`;

export const TitleBlock = styled.div`
  position: relative;
  max-width: 860px;
  margin: 0 auto;
  margin-bottom: 80px;
  p {
    padding: 3px 10px;
  }
`;

export const ShowAllGame = styled.div`
  position: relative;
  width: 100%;
  gap: 40px;
`;

export const SlideGames = styled.div`
  position: relative;
  width: calc((100% - 120px) / 4);
  gap: 40px;
  &:nth-child(even) {
    margin-top: 120px;
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
`;
