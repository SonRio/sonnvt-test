"use client";
import { useEffect, useState } from "react";
import {
  BtnToTop,
  CountDownContainer,
  DesAndInput,
  InputEmail,
  Time,
  TimeCountDown,
  WrapBanner,
} from "./styled";
import { useMediaQuery } from "react-responsive";

export default function BannerCPN() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const handleToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <WrapBanner>
      <div className="img-fairy animate__animated animate__slideInLeft">
        <img src="/assets/images/banner/img-fairy.png" alt="fairy" />
      </div>
      <BtnToTop
        style={{
          transform: scrollPosition > 10 ? "rotate(180deg)" : "rotate(0deg)",
        }}
        onClick={handleToTop}
      >
        <div className="img-arrow">
          <img src="/assets/images/banner/img-arrow-down.svg" alt="arrow" />
        </div>
      </BtnToTop>
      <CountDownContainer>
        <div className="bg-blur"></div>
        <h1>We’re {isMobile && <br />} Getting Ready</h1>
        <TimeCountDown className="flex justify-between">
          <Time>
            <h2>30</h2>
            <p>Days</p>
          </Time>
          <h3>:</h3>
          <Time>
            <h2>20</h2>
            <p>Hours</p>
          </Time>
          <h3>:</h3>
          <Time>
            <h2>18</h2>
            <p>Minutes</p>
          </Time>
          <h3>:</h3>
          <Time>
            <h2>05</h2>
            <p>Second</p>
          </Time>
        </TimeCountDown>
        <DesAndInput>
          <p>
            We will back to something amazing. Getting the latest <br /> updates
            about our games. Please sign up to our newsletter.
          </p>
          <InputEmail>
            <input type="text" placeholder="Enter your email" />
            <div className="img-arrow-right">
              <img src="/assets/images/banner/arrow-right.svg" alt="arrow" />
            </div>
          </InputEmail>
        </DesAndInput>
      </CountDownContainer>
    </WrapBanner>
  );
}
