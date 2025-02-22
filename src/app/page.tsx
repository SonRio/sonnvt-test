import AboutUs from "@/components/about";
import BannerCPN from "@/components/banner";
import OurGames from "@/components/our-games";
import OurPartners from "@/components/our-partners";

export default function Home() {
  return (
    <div>
      <BannerCPN />
      <AboutUs />
      <OurGames />
      <OurPartners />
    </div>
  );
}
