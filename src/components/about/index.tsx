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

export default function AboutUs() {
  return (
    <WrapAboutUs id="about">
      <ContainerAboutUs className="flex gap-10 items-stretch">
        <AboutUsBlock>
          <h2>About Us</h2>
          <p>
            Browse our selection of free online games and have a great time
            without leaving the site! Our Kids Games option also includes game
            reviews, extensive game cheats and walkthroughs, and much more. We
            have exclusive free downloads, videos, and articles as well. Etech
            reviews the most popular kids games from all the most popular video
            gaming platforms, so you don't need to search around for fun
            anywhere else on the Internet. Explore a whole new world of gaming
            on Etech.
          </p>
          <WrapCountUser className="flex flex-col">
            <CountUser className="flex flex-col mt-20 mb-10">
              <h1 className="text-primary">
                600<span>M</span>+
              </h1>
              <p>Users</p>
            </CountUser>
            <CountUser className="flex flex-col ">
              <h1 className="text-primary">135+</h1>
              <p>Games</p>
            </CountUser>
          </WrapCountUser>
        </AboutUsBlock>
        <BenefitBlock className="flex flex-col gap-10">
          {LIST_BENEFITS.map((benefit: BenefitsType, index: number) => (
            <BenefitItem className="flex" key={index}>
              <div className="img-benefit">
                <img src={benefit.img} alt="benefit" />
              </div>
              <DesBenefitItem>
                <h3>{benefit.title}</h3>
                <p>{benefit.des}</p>
              </DesBenefitItem>
            </BenefitItem>
          ))}
        </BenefitBlock>
      </ContainerAboutUs>
      <WitchAndMap>
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
    title: "24 - Hour",
    des: "24/7 access ensures operators' businesses runs smoothly all year long.",
  },
  {
    img: "/assets/images/about/img-design.svg",
    title: "Design",
    des: "Combining imaginative universes, play dynamics, and unprecedented gameplay, our games transcend the boundaries of the virtual world by weaving innovative gameplay.",
  },
  {
    img: "/assets/images/about/img-team.svg",
    title: "Team",
    des: "Etech is an award-winning, international studio of designers, artists, animators and producers that create content for the biggest names in film and video games. ",
  },
];
