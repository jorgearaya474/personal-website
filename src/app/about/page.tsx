import HeroSection from "@/components/layout/HeroSection";
import ImageGallery from "@/components/ui/ImageGallery";
import { ImageItem } from "@/types/types";
import ContactBanner from "@/components/layout/ContactBanner";

export const metadata = {
  title: "About me | Jorge Araya Web Developer",
  description:
    "I'm Jorge Araya, a passionate web developer with years of experience building dynamic, user-friendly websites. With expertise in WordPress, Laravel, and modern front-end frameworks, I help businesses and individuals create impactful digital solutions.",
  keywords: ["wordpress developer", "web developer", "web costa rica"],
};

const images: ImageItem[] = [
  {
    src: "/images/jorge-araya-profile-picture-wp.webp",
    alt: "Jorge Araya",
  },
  {
    src: "/images/20220123_130852-01.webp",
    alt: "Jorge Araya Hiking",
  },
  {
    src: "/images/20220421_130922.webp",
    alt: "Jorge Araya Traveling",
  },
];

export default function About() {
  return (
    <>
      <HeroSection heading="About me" className="" />
      <div className="container pb-8 lg:pb-[10rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="font-secondary">
            <p className="text-white text-xl mb-3 text-justify">
              I’m a web developer from Costa Rica 🇨🇷 with a passion for crafting
              intuitive and engaging websites. With over eight years of
              experience in the industry, I’ve had the chance to work on a wide
              range of projects — from custom WordPress builds to modern web
              apps using React, NextJS, and Laravel.
            </p>
            <p className="text-white text-xl mb-3 text-justify">
              This diverse background has helped me develop a strong, adaptable
              skill set and a love for solving problems through clean,
              thoughtful code.
            </p>
            <p className="text-white text-xl mb-3 leading-8 text-justify">
              I enjoy staying up to date with the latest technologies and
              trends, always looking for new things to learn and new challenges
              to tackle. I’m excited to keep growing and see where this journey
              takes me.
            </p>
            <p className="text-white text-xl mb-2 leading-8 text-justify">
              Outside the digital world, I’m a nature lover and frequent
              traveler — exploring the outdoors is one of my greatest joys.
            </p>
          </div>
          <div>
            <ImageGallery images={images} />
          </div>
        </div>
      </div>
      <ContactBanner />
    </>
  );
}
