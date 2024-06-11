"use client";
import dynamic from "next/dynamic";
// import HeroComponent from "@/components/hero/heroComponent";
// import { BentoGridDemo } from "./bentoGrid";
import Testimonials from "./testimonials";
import Stats from "./stats";
import RecentEvents from "./recentEvent";
import ContactUs from "./contactUs";
import { Company } from "@/components/marqeecomp";
import { TestMarquee } from "./testmonialMarquee";

const HeroComponent = dynamic(() => import("@/components/hero/heroComponent"), {
  ssr: false,
});


export default function Home() {
  return (
    <div>
      <HeroComponent />
      <div className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <Company />
      </div>
      <div className="space-y-20">
        <RecentEvents />
        <Stats />
        <TestMarquee />
        {/* <Testimonials /> */}
        {/* <ContactUs /> */}
      </div>
    </div>
  );
}
