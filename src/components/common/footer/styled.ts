"use client";
import { styled } from "styled-components";
import { ContainerBlock } from "../header/styled";
import { InputEmail } from "@/components/banner/styled";

export const WrapFooter = styled.div`
  position: relative;
`;

export const WrapInfoCom = styled.div`
  position: relative;
  background-image: url("/assets/images/footer/bg-ft.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  ${ContainerBlock} {
    padding: 0 230px;
  }
  @media screen and (max-width: 1024px) {
    ${ContainerBlock} {
      padding: 0 20px;
    }
  }
  @media screen and (max-width: 767px) {
    ${ContainerBlock} {
      padding: 0 16px;
    }
  }
`;

export const InfoCom = styled.div`
  width: 100%;
  position: relative;
  padding: 102px 0;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    padding: 40px 0;
    align-items: center;
    padding-bottom: 60px;
    gap: 66px;
  }
`;

export const LogoAndSocial = styled.div`
  position: relative;
  .img-logo {
    max-width: 165px;
    margin-bottom: 40px;
    cursor: pointer;
  }
`;

export const Social = styled.div`
  .img-social {
    max-width: 40px;
    cursor: pointer;
  }
`;

export const AddressAndSub = styled.div`
  position: relative;
  width: 59%;
  @media screen and (max-width: 1024px) {
    width: 70%;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
    flex-direction: column;
    gap: 70px;
  }
`;

export const BlockInfo = styled.div`
  position: relative;
  h3 {
    color: #fff;
  }
  &:nth-child(2) {
    width: 48%;
    margin-left: 50px;
  }
  @media screen and (max-width: 767px) {
    &:nth-child(2) {
      width: 100%;
      margin-left: 0px;
    }

    h3 {
      margin-bottom: 20px;
    }
  }
`;

export const RowInfo = styled.div`
  position: relative;
  gap: 8px;
  .img-represent {
    width: 40px;
  }
  p {
    color: var(--Neutral-White, #fff);
    line-height: 140%; /* 19.6px */
    max-width: 360px;
  }
  ${InputEmail} {
    input {
      background: transparent;
      border-radius: 8px;
      border: 1px solid var(--Neutral-White, #fff);
      color: #fff;
    }
  }
  @media screen and (max-width: 767px) {
    &:nth-child(3) {
      margin-bottom: 20px;
    }
    ${InputEmail} {
      input {
        margin-top: 5px;
      }
    }
  }
`;

export const CopyRight = styled.div`
  position: relative;
  background: #000;
  padding: 30px 0;
  p {
    color: var(--Neutral-White, #fff);
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 126%; /* 22.68px */
    text-align: center;
  }
  @media screen and (max-width: 767px) {
    padding: 20px 0;
  }
`;
