import GetInTouch from "@/components/GetInTouch";
import HomeAbout from "./HomeAbout";
import HomeChooseUs from "./HomeChooseUs";
import HomeHero from "./HomeHero";
import HomeIndustries from "./HomeIndustries";
import HomeServices from "./HomeServices";
import HomeStatistics from "./HomeStatistics";
import HomeTestimonials from "./HomeTestimonials";
import HomeTrackingSection from "./HomeTrackingSection";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeAbout />
      <HomeServices />
      <HomeChooseUs />
      <HomeIndustries />
      <HomeTrackingSection />
      <HomeStatistics />
      <HomeTestimonials />
      <GetInTouch />
    </>
  );
}