"use client";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { TitleBlock } from "../our-games/styled";
import {
  BtnNext,
  BtnPrev,
  Partner,
  ShowPartners,
  WrapOurPartners,
  WrapSlide,
} from "./styled";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default function OurPartners() {
  return (
    <WrapOurPartners id="partners">
      <TitleBlock>
        <h2 className="mb-6">Our Partners</h2>
      </TitleBlock>
      <ShowPartners className="flex items-center">
        <WrapSlide className="flex items-center">
          <Swiper
            slidesPerView={5}
            spaceBetween={40}
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
          >
            <BtnNext>
              <div className="img-arrow">
                <img src="/assets/images/partners/arrow.png" alt="" />
              </div>
            </BtnNext>
            {LIST_PARTNER.map((item: { img: string }, index: number) => (
              <SwiperSlide key={index}>
                <Partner>
                  <div className="img-partner">
                    <img src={item.img} alt="partner" />
                  </div>
                </Partner>
              </SwiperSlide>
            ))}
            <BtnPrev>
              <div className="img-arrow">
                <img src="/assets/images/partners/arrow-2.png" alt="" />
              </div>
            </BtnPrev>
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
