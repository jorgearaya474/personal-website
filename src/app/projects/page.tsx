import ItemCard from "@/components/ui/ItemCard";
import type { Metadata } from "next";
import HeroSection from "@/components/layout/HeroSection";
import { ToolProps } from "@/types/types";
import ContactBanner from "@/components/layout/ContactBanner";

export const metadata: Metadata = {
  title: "Side Projects & Tools | WordPress Developer | jorgearaya.com",
  description:
    "Free tools and side projects built for WordPress developers. A time estimator and a Chrome extension to speed up your workflow.",
  keywords: [
    "wordpress developer tools",
    "wordpress time estimator",
    "wordpress project calculator",
    "wordpress chrome extension",
    "developer productivity tools",
    "jorge araya projects",
  ],
  alternates: {
    canonical: "https://jorgearaya.com/projects",
  },
};

const toolsData: ToolProps[] = [
  {
    title: "WordPress Estimator",
    url: "/projects/wp-estimator",
    image: "/images/projects/wp-estimator.webp",
    description:
      "Quickly estimate the timeline of your next WordPress project with this simple, interactive tool.",
  },
  {
    title: "Post Bulk Actions",
    url: "https://chromewebstore.google.com/detail/nbpcfgdpkpobefgjgonollgflpfcgeko?utm_source=portfolio.",
    image: "/images/projects/post-bulk-actions.webp",
    description:
      "Streamline your WordPress editing workflow with this Chrome extension that adds bulk actions, making it easier and faster to manage your posts.",
  },
];

export default async function Tools() {
  return (
    <>
      <HeroSection heading="Recent Projects" className="" />
      <div className="container pb-12 lg:pb-[10rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {toolsData.map((item) => (
            <ItemCard
              key={item.title}
              href={item.url}
              target="_blank"
              title={item.title}
              image={item.image}
              description={item.description}
              ctaText="Try It Now"
            />
          ))}
        </div>
      </div>
      <ContactBanner />
    </>
  );
}
