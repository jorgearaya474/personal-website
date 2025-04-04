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
              I am a web developer with a passion for crafting intuitive and
              engaging websites. With over seven years of experience in the
              industry, I have had the opportunity to work on a variety of
              projects. This diverse experience has allowed me to develop a
              strong skill set in popular tools and technologies such as
              WordPress, React, Python, and PHP.
            </p>
            <p className="text-white text-xl mb-3 text-justify">
              I enjoy being up to date with the latest technologies and trends,
              expanding my knowledge. I&apos;m always eager to take on new
              challenges and am excited to see where my career as a developer
              takes me.
            </p>
            <p className="text-white text-xl mb-3 leading-8 text-justify">
              Outside of the digital world, I am an avid nature lover and
              traveler. Exploring the beauty of the outdoors and embarking on
              adventures is one of my greatest joys.
            </p>
            <p className="text-white text-xl mb-2 leading-8 text-justify">
              Beyond my love for nature, I am a coffee enthusiast who savors the
              art of crafting the perfect cup.
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
