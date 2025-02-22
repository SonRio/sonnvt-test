"use client";
import { styled } from "styled-components";
import { TitleBlock } from "../our-games/styled";

export const WrapOurPartners = styled.div`
  position: relative;
  margin-top: 120px;
  width: 100%;
  background: #f6f6f6;
  padding-bottom: 120px;
  ${TitleBlock} {
    padding-top: 120px;
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
  left: 0;
  top: 30px;
  z-index: 1;
  cursor: pointer;
  .img-arrow {
    max-width: 40px;
  }
`;

export const BtnPrev = styled.div`
  position: absolute;
  right: 0;
  top: 30px;
  z-index: 1;
  cursor: pointer;
  .img-arrow {
    max-width: 40px;
  }
`;
