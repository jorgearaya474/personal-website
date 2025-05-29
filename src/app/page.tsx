import CtaButton from "@/components/ui/CtaButton";
import TechStack from "@/components/ui/TechStack";
import ContactBanner from "@/components/layout/ContactBanner";
import RocketIcon from "@/components/icons/RocketIcon";
import ResponsiveIcon from "@/components/icons/ResponsiveIcon";
import SpeedIcon from "@/components/icons/SpeedIcon";

export const metadata = {
  title: "Home | Jorge Araya Web Developer",
  description:
    "I'm Jorge Araya, a web developer specializing in WordPress, Next.js & Laravel. Explore my work and services to boost your digital presence.",
  keywords: ["wordpress developer", "web developer", "web costa rica"],
};

export default async function Home() {
  return (
    <>
      <div className="gradient-bg bg-zinc-900 relative py-32 md:py-0">
        <div className="container relative z-10">
          <div className="flex flex-col items-start justify-center md:min-h-[700px]">
            <div className="flex flex-col items-start justify-center gap-6 max-w-3xl">
              <h1 className="font-primary font-black text-white text-4xl md:text-7xl leading-22">
                Jorge Araya <br />
                <span className="text-3xl md:text-6xl text-teal-400">
                  Full-Stack Developer
                </span>
                .
              </h1>
              <p className="font-secondary text-white font-normal text-xl md:text-2xl">
                I'm a WordPress specialist creating fast, scalable,
                high-converting websites. Also experienced with Next.js, React
                and Laravel.
              </p>
              <p className="font-secondary text-white font-normal text-xl md:text-2xl">
                Got a project in mind?
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
              Custom Web Solutions for Meaningful Online Growth
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-zinc-800/60 p-8 rounded-lg">
              <div className="flex flex-col gap-4 justify-start items-start">
                <RocketIcon className="w-12" />
                <h3 className="font-primary text-3xl font-bold text-white">
                  Custom development
                </h3>
              </div>
              <p className="mt-3 text-white text-xl font-secondary">
                Build websites custom-made for your brand’s identity and goals.
                My solutions go beyond functionality—they support growth and
                elevate user engagement.
              </p>
            </div>
            <div className="bg-zinc-800/60 p-8 rounded-lg">
              <div className="flex flex-col gap-4 justify-start items-start">
                <ResponsiveIcon className="w-12" />
                <h3 className="font-primary text-3xl font-bold text-white">
                  Adaptive Web Design
                </h3>
              </div>
              <p className="mt-3 text-white text-xl font-secondary">
                Responsive layouts that look great and perform well on any
                device, improving both accessibility and conversions.
              </p>
            </div>
            <div className="bg-zinc-800/60 p-8 rounded-lg">
              <div className="flex flex-col gap-4 justify-start items-start">
                <SpeedIcon className="w-12" />
                <h3 className="font-primary text-3xl font-bold text-white">
                  Site Optimization
                </h3>
              </div>
              <p className="mt-3 text-white text-xl font-secondary">
                Speed up your site with caching, image compression, and clean
                code—so users (and Google) love it.
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
                Every project starts with a solid foundation. I use reliable
                tools and proven methodologies to ensure your website performs
                well, is easy to maintain, and can grow with your business.
              </p>
              <br></br>
              <p className="text-white text-xl font-secondary">
                Experienced in custom WordPress development, from building fully
                tailored themes and plugins to optimizing performance and
                flexibility using leading builders like Elementor and others.
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
