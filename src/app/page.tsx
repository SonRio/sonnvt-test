"use client";
import AboutUs from "@/components/about";
import BannerCPN from "@/components/banner";
import OurGames from "@/components/our-games";
import OurPartners from "@/components/our-partners";
import { useEffect } from "react";
import AOS from "aos";
import { ReactLenis } from "lenis/react";

export default function Home() {
  useEffect(() => {
    setTimeout(() => {
      AOS.init();
      AOS.refresh();
    }, 1000);
  }, []);
  return (
    <div>
      <ReactLenis
        root
        options={{
          duration: 2,
        }}
      >
        <BannerCPN />
        <AboutUs />
        <OurGames />
        <OurPartners />
      </ReactLenis>
    </div>
  );
}
