"use client";
import { InputEmail } from "@/components/banner/styled";
import { ContainerBlock } from "../header/styled";
import {
  CopyRight,
  WrapInfoCom,
  WrapFooter,
  InfoCom,
  LogoAndSocial,
  AddressAndSub,
  BlockInfo,
  RowInfo,
} from "./styled";

export default function Footer() {
  const handleToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <WrapFooter id="contact">
      <WrapInfoCom>
        <ContainerBlock>
          <InfoCom className="flex justify-between">
            <LogoAndSocial>
              <div className="img-logo" onClick={handleToTop}>
                <img src="/assets/images/header/logo-home.svg" alt="logo" />
              </div>
              <LogoAndSocial className="flex gap-6 items-center">
                <div className="img-social">
                  <img src="/assets/images/footer/icon-x.svg" alt="social" />
                </div>
                <div className="img-social">
                  <img src="/assets/images/footer/icon-f.svg" alt="social" />
                </div>
                <div className="img-social">
                  <img src="/assets/images/footer/icon-l.svg" alt="social" />
                </div>
              </LogoAndSocial>
            </LogoAndSocial>
            <AddressAndSub className="flex">
              <BlockInfo>
                <h3 className="mb-10">Address</h3>
                <RowInfo className="flex mb-3">
                  <div className="img-represent">
                    <img
                      src="/assets/images/footer/icon-location.svg"
                      alt="location"
                    />
                  </div>
                  <p>
                    Valletta Buildings, South Street, Valletta - VLT 1103 Malta,
                    US
                  </p>
                </RowInfo>
                <RowInfo className="flex mb-10">
                  <div className="img-represent"></div>
                  <p>
                    Valletta Buildings, South Street, Valletta - VLT 1103 Malta,
                    US
                  </p>
                </RowInfo>
                <RowInfo className="flex items-center">
                  <div className="img-represent">
                    <img
                      src="/assets/images/footer/icon-phone.svg"
                      alt="location"
                    />
                  </div>
                  <p>
                    <a href="tel:+1 555-0108-000">(+1) 555-0108-000</a> or
                    <a href="tel:+236 555-0108"> (+236) 555-0108</a>
                  </p>
                </RowInfo>
              </BlockInfo>
              <BlockInfo>
                <h3 className="mb-10">Subscribe</h3>
                <RowInfo className="flex mb-3">
                  <p>
                    Subscribe to our newsletter and be the first to know about
                    our updates
                  </p>
                </RowInfo>
                <RowInfo className="flex">
                  <InputEmail className="w-full">
                    <input type="text" placeholder="Enter your email" />
                    <div className="img-arrow-right">
                      <img
                        src="/assets/images/footer/arrow-right.svg"
                        alt="arrow"
                      />
                    </div>
                  </InputEmail>
                </RowInfo>
              </BlockInfo>
            </AddressAndSub>
          </InfoCom>
        </ContainerBlock>
      </WrapInfoCom>
      <CopyRight>
        <p>2017 Copyright. Policy.</p>
      </CopyRight>
    </WrapFooter>
  );
}
