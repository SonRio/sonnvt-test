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
import { formatUnitTime } from "@/utils/formatUnitTime";

export default function BannerCPN() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [days, setDays] = useState<string>("00");
  const [hours, setHours] = useState<string>("00");
  const [minutes, setMinutes] = useState<string>("00");
  const [secs, setSecs] = useState<string>("00");
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

  const countDownTime = (dateTime: string) => {
    // Set the date we're counting down to
    let currentDate = 0;
    let currentHours = 0;
    let currentMins = 0;
    let currentSecs = 0;
    // Update the count down every 1 second
    const intervalTimer = setInterval(function () {
      // Get today's date and time
      const now = new Date().getTime();
      const dateTimeUnit = new Date(dateTime).getTime();

      // Find the distance between now and the count down date
      const distance = dateTimeUnit - now;

      // Time calculations for days, hours, minutes and seconds
      currentDate =
        Math.floor(distance / (1000 * 60 * 60 * 24)) <= 0
          ? 0
          : Math.floor(distance / (1000 * 60 * 60 * 24));
      currentHours =
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) <= 0
          ? 0
          : Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      currentMins =
        Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)) <= 0
          ? 0
          : Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      currentSecs =
        Math.floor((distance % (1000 * 60)) / 1000) <= 0
          ? 0
          : Math.floor((distance % (1000 * 60)) / 1000);

      setDays(`${formatUnitTime(currentDate)}`);
      setHours(`${formatUnitTime(currentHours)}`);
      setMinutes(`${formatUnitTime(currentMins)}`);
      setSecs(`${formatUnitTime(currentSecs)}`);

      if (distance <= 0) {
        clearInterval(intervalTimer);
      }
    }, 1000);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    countDownTime("2025-02-28T00:00:00.000Z"); // Time UTC
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
            <h2>{days}</h2>
            <p>Days</p>
          </Time>
          <h3>:</h3>
          <Time>
            <h2>{hours}</h2>
            <p>Hours</p>
          </Time>
          <h3>:</h3>
          <Time>
            <h2>{minutes}</h2>
            <p>Minutes</p>
          </Time>
          <h3>:</h3>
          <Time>
            <h2>{secs}</h2>
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
