"use client";

import {
  AboutUsBlock,
  BenefitBlock,
  BenefitItem,
  ContainerAboutUs,
  CountUser,
  DesBenefitItem,
  ImgWitch,
  WitchAndMap,
  WrapAboutUs,
  WrapCountUser,
} from "./styled";
import { translate } from "@/utils/translateWithParams";
import { useContext } from "react";
import { ContextProviderWrapper } from "@/context";

export default function AboutUs() {
  const { trans } = useContext(ContextProviderWrapper)!;

  return (
    <WrapAboutUs id="about">
      <ContainerAboutUs className="flex gap-10 items-stretch">
        <AboutUsBlock data-aos="fade-right">
          <h2>{translate("About Us", trans)}</h2>
          <p>{translate("Browse", trans)}</p>
          <WrapCountUser className="flex flex-col">
            <CountUser className="flex flex-col mt-20 mb-10">
              <h1 className="text-primary">
                600<span>M</span>+
              </h1>
              <p>{translate("Users", trans)}</p>
            </CountUser>
            <CountUser className="flex flex-col ">
              <h1 className="text-primary">135+</h1>
              <p>{translate("Games", trans)}</p>
            </CountUser>
          </WrapCountUser>
        </AboutUsBlock>
        <BenefitBlock data-aos="fade-left" className="flex flex-col gap-10">
          {LIST_BENEFITS.map((benefit: BenefitsType, index: number) => (
            <BenefitItem className="flex" key={index}>
              <div className="img-benefit">
                <img src={benefit.img} alt="benefit" />
              </div>
              <DesBenefitItem>
                <h3>{translate(benefit.title, trans)}</h3>
                <p>{translate(benefit.des, trans)}</p>
              </DesBenefitItem>
            </BenefitItem>
          ))}
        </BenefitBlock>
      </ContainerAboutUs>
      <WitchAndMap data-aos="fade-up">
        <ImgWitch>
          <img src="/assets/images/about/img-witch.png" alt="witch" />
        </ImgWitch>
        <ContainerAboutUs>
          <img src="/assets/images/about/img-map.png" alt="map" />
        </ContainerAboutUs>
      </WitchAndMap>
    </WrapAboutUs>
  );
}

type BenefitsType = {
  img: string;
  title: string;
  des: string;
};

const LIST_BENEFITS: BenefitsType[] = [
  {
    img: "/assets/images/about/img-hour.svg",
    title: "24",
    des: "24/7",
  },
  {
    img: "/assets/images/about/img-design.svg",
    title: "Design",
    des: "Combining",
  },
  {
    img: "/assets/images/about/img-team.svg",
    title: "Team",
    des: "Etech",
  },
];
