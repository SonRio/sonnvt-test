"use client";
import { styled } from "styled-components";
import { TitleBlock } from "../our-games/styled";

export const WrapOurPartners = styled.div`
  position: relative;
  margin-top: 120px;
  width: 100%;
  background: #f6f6f6;
  padding: 120px 0;
  @media screen and (max-width: 1024px) {
    margin-top: 80px;
    padding: 80px 0;
  }
  @media screen and (max-width: 767px) {
    margin-top: 55px;
    padding: 40px 0;
    padding-bottom: 76px;
    h2 {
      font-size: 40px;
      line-height: 50px; /* 125% */
      letter-spacing: 0.6px;
    }
  }
`;

export const ShowPartners = styled.div`
  position: relative;
  max-width: 1620px;
  margin: 0 auto;
`;

export const WrapSlide = styled.div`
  position: relative;
  width: 100%;
  padding: 0 40px;
  margin: 0 auto;
  @media screen and (max-width: 1024px) {
    padding: 0 20px;
  }
  @media screen and (max-width: 767px) {
    padding: 0 16px;
  }
`;

export const Partner = styled.div`
  position: relative;
  z-index: 0;
  .img-partner {
    max-width: 260px;
  }
`;

export const BtnNext = styled.div`
  position: absolute;
  right: 0;
  top: 30px;
  z-index: 1;
  cursor: pointer;
  .img-arrow {
    max-width: 40px;
  }
  @media screen and (max-width: 1024px) {
    top: 10px;
  }
  @media screen and (max-width: 767px) {
    top: 5px;
  }
`;

export const BtnPrev = styled.div`
  position: absolute;
  left: 0;
  top: 30px;
  z-index: 1;
  cursor: pointer;
  .img-arrow {
    max-width: 40px;
  }
  @media screen and (max-width: 1024px) {
    top: 10px;
  }
  @media screen and (max-width: 767px) {
    top: 5px;
  }
`;
