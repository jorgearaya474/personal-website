import ItemCardProject from "@/components/ui/ItemCardProject";
import type { Metadata } from "next";
import HeroSection from "@/components/layout/HeroSection";
import { ToolProps } from "@/types/types";
import ContactBanner from "@/components/layout/ContactBanner";

export const metadata: Metadata = {
  title: "Tools | Jorge Araya Web Developer",
  description:
    "Explore a curated collection of developer tools designed to streamline your WordPress projects. Built to save you time and boost productivity.",
  keywords: [
    "wordpress tools",
    "web development tools",
    "developer productivity",
    "jorge araya tools",
  ],
};

const toolsData: ToolProps[] = [
  {
    title: "WordPress Estimator",
    url: "wp-estimator",
    image: "/images/projects/wp-estimator.webp",
    description:
      "Quickly estimate the timeline of your next WordPress project with this simple, interactive tool.",
  },
];

export default async function Tools() {
  return (
    <>
      <HeroSection heading="Recent Projects" className="" />
      <div className="container pb-12 lg:pb-[10rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {toolsData.map((item) => (
            <ItemCardProject
              key={item.title}
              url={item.url}
              title={item.title}
              image={item.image}
              description={item.description}
            />
          ))}
        </div>
      </div>
      <ContactBanner />
    </>
  );
}
