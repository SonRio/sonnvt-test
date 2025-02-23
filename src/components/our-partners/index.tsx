/* eslint-disable  @typescript-eslint/no-explicit-any */
"use client";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { TitleBlock } from "../our-games/styled";
import {
  BtnNext,
  BtnPrev,
  Partner,
  ShowPartners,
  WrapOurPartners,
  WrapSlide,
} from "./styled";
import { Autoplay } from "swiper/modules";
import { useMediaQuery } from "react-responsive";
import { useContext, useState } from "react";

import { translate } from "@/utils/translateWithParams";
import { ContextProviderWrapper } from "@/context";

type ButtonType = {
  onClick: (params: any) => void;
};

const ButtonPrev = ({ onClick }: ButtonType) => {
  const swiper = useSwiper();
  return (
    <BtnPrev
      onClick={() => {
        onClick(swiper);
      }}
    >
      <div className="img-arrow">
        <img src="/assets/images/partners/arrow.png" alt="" />
      </div>
    </BtnPrev>
  );
};

const ButtonNext = ({ onClick }: ButtonType) => {
  const swiper = useSwiper();
  return (
    <BtnNext
      onClick={() => {
        onClick(swiper);
      }}
    >
      <div className="img-arrow">
        <img src="/assets/images/partners/arrow-2.png" alt="" />
      </div>
    </BtnNext>
  );
};

export default function OurPartners() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [slideActive, setSlideActive] = useState(10);

  const { trans } = useContext(ContextProviderWrapper)!;

  /* eslint-disable  @typescript-eslint/no-explicit-any */
  const handleNextSwiper = (swiper: any) => {
    const slideTo = slideActive === 0 ? LIST_PARTNER.length : slideActive - 1;
    swiper.slideTo(slideTo);
  };

  const handlePreSwiper = (swiper: any) => {
    const slideTo = slideActive === 4 ? 1 : slideActive + 1;
    swiper.slideTo(slideTo);
  };

  const onSetSwiper = (swiper: any) => {
    setSlideActive(swiper.activeIndex);
  };

  return (
    <WrapOurPartners id="partners">
      <TitleBlock data-aos="fade-right">
        <h2 className="mb-6">{translate("Our Partners", trans)}</h2>
      </TitleBlock>
      <ShowPartners className="flex items-center">
        <WrapSlide className="flex items-center">
          <Swiper
            slidesPerView={isMobile ? 3 : 5}
            spaceBetween={isMobile ? 5 : 40}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2000,
            }}
            loop={true}
            className="mySwiper"
            navigation={true}
            modules={[Autoplay]}
            onSlideChange={(swiper: any) => onSetSwiper(swiper)}
          >
            <ButtonPrev onClick={handlePreSwiper} />
            {LIST_PARTNER.map((item: { img: string }, index: number) => (
              <SwiperSlide key={index}>
                <Partner>
                  <div className="img-partner">
                    <img src={item.img} alt="partner" />
                  </div>
                </Partner>
              </SwiperSlide>
            ))}
            <ButtonNext onClick={handleNextSwiper} />
          </Swiper>
        </WrapSlide>
      </ShowPartners>
    </WrapOurPartners>
  );
}

const LIST_PARTNER = [
  {
    img: "/assets/images/partners/img-p1.png",
  },
  {
    img: "/assets/images/partners/img-p2.png",
  },
  {
    img: "/assets/images/partners/img-p3.png",
  },
  {
    img: "/assets/images/partners/img-p4.png",
  },
  {
    img: "/assets/images/partners/img-p5.png",
  },
  {
    img: "/assets/images/partners/img-p6.png",
  },
  {
    img: "/assets/images/partners/img-p7.png",
  },
];
