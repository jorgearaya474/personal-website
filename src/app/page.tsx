import CtaButton from "@/components/ui/CtaButton";
import TechStack from "@/components/ui/TechStack";
import ContactBanner from "@/components/layout/ContactBanner";
import RocketIcon from "@/components/icons/RocketIcon";
import ResponsiveIcon from "@/components/icons/ResponsiveIcon";
import SpeedIcon from "@/components/icons/SpeedIcon";
import FeaturedCard from "@/components/ui/FeaturedCard";
import StepCard from "@/components/ui/StepCard";


export const metadata = {
  title: "WordPress Developer Focused on Clean, Scalable Development | Jorge Araya",
  description:
    "WordPress developer specializing in clean architecture, scalable builds, and long-term maintainability. I help businesses build fast, reliable websites that drive real results.",
  keywords: [
    "wordpress developer",
    "web developer",
    "web costa rica",
    "Wordpress costa rica",
  ],
};

export default async function Home() {
  return (
    <>
      <section className="gradient-bg relative py-32 md:py-0">
        <div className="container relative z-10 pt-16">
          <div className="flex flex-col items-start justify-center md:min-h-[800px]">
            <div className="flex flex-col items-start justify-center gap-6 max-w-4xl">
              <h1 className="">
                WordPress Developer Focused on Clean, Scalable Builds
                <span className="text-accent">{' '}that turn visitors into customers
                  <span className="text-white">.</span>
                </span>
              </h1>
              <p className="font-secondary font-normal text-xl md:text-2xl">
                I help growing businesses build fast, scalable WordPress websites that drive measurable results.
              </p>
              <CtaButton
                href="#contact"
                text="Start a Project"
                title="Contact Jorge"
                className="w-auto"
              />
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-b from-transparent to-background absolute bottom-0 w-full h-40"></div>
      </section>

      <section className="py-12 lg:py-20">
        <div className="container">
        <div className="flex flex-col gap-12">
          <div className="max-w-3xl">
            <h2>
              Custom Web Solutions for Meaningful Online Growth
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <FeaturedCard
              icon={<RocketIcon className="w-12" />}
              heading="Custom development"
              text="Custom WordPress builds engineered for performance, scalability and long-term growth."
            />

            <FeaturedCard
              icon={<ResponsiveIcon className="w-12" />}
              heading="Adaptive Web Design"
              text="Mobile-first experiences designed to convert across every device."
            />

            <FeaturedCard
              icon={<SpeedIcon className="w-12" />}
              heading="Site Optimization"
              text="Advanced performance optimization including caching strategy, Core Web Vitals improvements, and clean code architecture."
            />
          </div>
        </div>
      </div>
      </section>

    <section className="py-12 lg:py-20">
      <div className="container">
        <div className="flex flex-col gap-12">
          <div className="max-w-3xl">
            <h2 className="font-primary text-3xl lg:text-5xl block font-black text-foreground text-left">
              A Clear, Strategic Development Process
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <StepCard step="1" heading="Strategy & Planning" text="Define goals, target audience, and performance metrics."/>
            <StepCard step="2" heading="Design & Architecture" text="UX-focused structure and scalable technical foundation."/>
            <StepCard step="3" heading="Development & Optimization" text="Clean code, performance tuning, and Core Web Vitals optimization."/>
            <StepCard step="4" heading="Launch & Continuous Improvement" text="Deployment, monitoring, and ongoing enhancements."/>
          </div>
        </div>
      </div>
      </section>

      <section className="container py-12 lg:py-20">
        <div className="flex flex-col gap-12">
          <div className="max-w-3xl">
            <h2 className="font-primary text-3xl lg:text-5xl block font-black text-white text-left">
              Technologies for Scalable Solutions
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="">
              <p className="text-white text-xl font-secondary">
                I build on a modern, performance-first stack designed for speed, scalability and long-term maintainability.
              </p>
              <br></br>
              <p className="text-white text-xl font-secondary">
                Experienced in custom WordPress development, from building fully
                tailored themes and plugins to optimizing performance and
                flexibility using leading builders like Elementor and others.
              </p>
            </div>
              <TechStack />
          </div>
        </div>
      </section>
      
      <ContactBanner />
    </>
  );
}
