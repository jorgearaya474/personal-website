import Image from "next/image";
import CtaButton from "@/components/ui/CtaButton";
import Photo from "@/images/jorge-araya-profile-picture-wp.webp";
import TechStack from "@/components/ui/TechStack";
import ContactBanner from "@/components/layout/ContactBanner";
import CheckMarkIcon from "@/components/icons/checkMarkIcon";

export const metadata = {
  title: "Home | Jorge Araya Web Developer",
  description:
    "Crafting high-quality web experiences with modern technologies. I'm Jorge Araya, a seasoned web developer specializing in WordPress, Next.js and Laravel. Explore my work, insights, and services to elevate your digital presence.",
  keywords: ["wordpress developer", "web developer", "web costa rica"],
};

export default async function Home() {
  return (
    <>
      <div className="gradient-bg bg-zinc-900 relative py-32 md:py-0">
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:min-h-[700px]">
            <div className="col-span-1 md:col-span-3 lg:col-span-2 flex flex-col items-start justify-center gap-6 order-last md:order-first">
              <h1 className="font-primary font-black text-white text-4xl md:text-6xl leading-22">
                Jorge Araya <br />
                <span className="text-2xl md:text-6xl text-teal-400">
                  Full-Stack Developer
                </span>
                .
              </h1>
              <p className="font-secondary text-white font-normal text-xl md:text-2xl">
                I'm a WordPress specialist creating fast, scalable,
                high-converting websites. Also experienced with Next.js, React
                and Laravel.
                <br /> Let’s bring your project to life!
              </p>
              <CtaButton
                href="mailto:jorgearaya474@gmail.com"
                text="Let's Talk"
                title="Contact Jorge Araya"
                className="w-auto"
              />
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-b from-transparent to-zinc-900 absolute bottom-0 w-full h-36"></div>
      </div>

      <div className="container">
        <div className="flex flex-col gap-12">
          <div className="max-w-3xl">
            <h2 className="font-primary text-bold text-3xl lg:text-5xl block font-bold text-white text-left ">
              Elevating Web Development to Make You Stand Out!
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-zinc-800/60 p-8 rounded-lg">
              <div className="flex flex-row gap-4 justify-start items-center">
                <CheckMarkIcon />
                <h3 className="font-primary text-2xl font-bold text-white">
                  Custom development
                </h3>
              </div>
              <p className="mt-3 text-white text-xl font-secondary">
                Transform your ideas into reality with websites tailored to your
                brand’s needs and goals. I create solutions that not only meet
                technical requirements but also enhance your business identity
                and user engagement.
              </p>
            </div>
            <div className="bg-zinc-800/60 p-8 rounded-lg">
              <div className="flex flex-row gap-4 justify-start items-center">
                <CheckMarkIcon />
                <h3 className="font-primary text-2xl font-bold text-white">
                  Adaptive Web Design
                </h3>
              </div>
              <p className="mt-3 text-white text-xl font-secondary">
                Ensure your website delivers a seamless experience across all
                devices. From mobile phones to desktops, I design responsive
                layouts that prioritize user experience and accessibility,
                improving engagement and conversion rates.
              </p>
            </div>
            <div className="bg-zinc-800/60 p-8 rounded-lg">
              <div className="flex flex-row gap-4 justify-start items-center">
                <CheckMarkIcon />
                <h3 className="font-primary text-2xl font-bold text-white">
                  Site Optimization
                </h3>
              </div>
              <p className="mt-3 text-white text-xl font-secondary">
                Boost your website`&apos;s speed and scalability with advanced
                techniques like caching, image optimization, and code
                minification. I use industry-leading tools to ensure your site
                loads faster, retains visitors, and performs optimally across
                all platforms.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-12 lg:py-[10rem]">
        <div className="flex flex-col gap-12">
          <div className="max-w-3xl">
            <h2 className="font-primary text-3xl lg:text-5xl block font-bold text-white text-left">
              Technologies for Scalable Solutions
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="">
              <p className="text-white text-xl font-secondary">
                A strong foundation built on reliable tools and proven
                methodologies supports every project. The focus is on
                performance, scalability, and adaptability, selecting the right
                technologies to meet each challenge’s unique demands.
              </p>
              <br></br>
              <p className="text-white text-xl font-secondary">
                Experienced in custom WordPress development—whether building
                fully custom themes and plugins or enhancing performance and
                flexibility with leading builders like Elementor and others.
              </p>
            </div>
            <div className="md:col-span-2">
              <TechStack />
            </div>
          </div>
        </div>
      </div>
      <ContactBanner />
    </>
  );
}
