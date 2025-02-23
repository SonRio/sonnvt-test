import { styled } from "styled-components";

export const WrapAboutUs = styled.div`
  position: relative;
  margin-top: 127px;
  @media screen and (max-width: 1024px) {
    margin-top: 80px;
  }
  @media screen and (max-width: 767px) {
    margin-top: 228px;
  }
`;

export const ContainerAboutUs = styled.div`
  position: relative;
  max-width: 1160px;
  margin: 0 auto;
  @media screen and (max-width: 1024px) {
    max-width: 100%;
    padding: 0 20px;
  }
  @media screen and (max-width: 767px) {
    padding: 0px;
    flex-direction: column;
  }
`;

export const AboutUsBlock = styled.div`
  position: relative;
  width: calc((100% - 40px) / 2);
  h2 {
    margin-bottom: 40px;
    text-align: left;
  }
  p {
    color: var(--Neutral-N500, #757575);
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 19.6px */
  }
  @media screen and (max-width: 767px) {
    width: 100%;
    padding: 0 20px;
    h2 {
      font-size: 40px;
      line-height: 50px; /* 125% */
      letter-spacing: 0.6px;
      margin-bottom: 26px;
    }
  }
`;

export const WrapCountUser = styled.div`
  position: relative;
  @media screen and (max-width: 767px) {
    flex-direction: row;
    margin-top: 40px;
    gap: 40px;
  }
`;

export const CountUser = styled.div`
  position: relative;
  h1 {
    color: var(--Blue-B500, #079bee);
    font-family: Montserrat;
    font-size: 80px;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -1px;
    text-align: left;
  }
  span {
    color: var(--Blue-B500, #079bee);
    font-feature-settings: "liga" off, "clig" off;
    font-family: Montserrat;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -1px;
  }
  p {
    color: var(--Neutral-Black, #000);
    /* Montserrat/Bold/24px */
    font-size: 24px;
    font-weight: 700;
    line-height: 30px; /* 125% */
    margin-top: 8px;
    &:nth-child(2) {
      margin-top: 6px;
    }
  }
  @media screen and (max-width: 767px) {
    margin: 0;
    h1 {
      font-size: 44px;
      font-weight: 700;
      line-height: normal;
      letter-spacing: -1px;
    }
    span {
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: -1px;
    }
  }
`;

export const BenefitBlock = styled.div`
  position: relative;
  background-color: #eee;
  padding: 113px 75px;
  width: calc((100% - 40px) / 2);
  h3 {
    margin-bottom: 10px;
  }
  @media screen and (max-width: 1024px) {
    padding: 0;
    padding: 80px 40px;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
    padding: 40px 16px;
  }
`;

export const BenefitItem = styled.div`
  position: relative;
  width: 100%;
  .img-benefit {
    max-width: 50px;
    margin-right: 24px;
  }
  @media screen and (max-width: 767px) {
    .img-benefit {
      max-width: 40px;
      margin-right: 20px;
    }
  }
`;

export const DesBenefitItem = styled.div`
  position: relative;
  width: calc(100% - 74px);
`;

export const WitchAndMap = styled.div`
  position: relative;
  margin-top: 398px;
  @media screen and (max-width: 1024px) {
    margin-top: 330px;
    ${ContainerAboutUs} {
      max-width: 800px;
    }
  }
  @media screen and (max-width: 767px) {
    margin-top: 260px;
  }
`;

export const ImgWitch = styled.div`
  position: relative;
  max-width: 533px;
  margin: 0 auto;
  img {
    position: absolute;
    z-index: 2;
    top: -332px;
    left: 14px;
  }
  z-index: 2;
  animation: zoomInOut 3s infinite linear;
  animation-delay: 5s;
  @keyframes zoomInOut {
    0% {
      transform: scale(0.8);
    }
    30% {
      transform: scale(1) rotate(3deg);
    }
    45% {
      transform: rotate(-10deg);
    }
    60% {
      transform: rotate(0deg);
    }
    70% {
      transform: rotateY(-180deg) rotate(3deg);
    }
    80% {
      transform: rotateY(-180deg) rotate(0deg);
    }
    90% {
      transform: rotateY(-180deg) rotate(3deg);
    }
    100% {
      transform: scale(0.8) rotateY(0deg);
    }
  }
  @media screen and (max-width: 1024px) {
    max-width: 375px;
    img {
      top: -250px;
    }
  }

  @media screen and (max-width: 767px) {
    max-width: 300px;
    img {
      top: -220px;
    }
  }
`;
