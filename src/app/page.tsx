import CtaButton from "@/components/ui/CtaButton";
import TechStack from "@/components/ui/TechStack";
import ContactBanner from "@/components/layout/ContactBanner";
import RocketIcon from "@/components/icons/RocketIcon";
import ResponsiveIcon from "@/components/icons/ResponsiveIcon";
import SpeedIcon from "@/components/icons/SpeedIcon";
import FeaturedCard from "@/components/ui/FeaturedCard";
import StepCard from "@/components/ui/StepCard";


export const metadata = {
  title: "WordPress Developer Focused on Clean, Scalable Development | jorgearaya.com",
  description:
    "WordPress developer focused on clean architecture, thoughtful engineering, and long-term maintainability. I build reliable websites crafted with care.",
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
            <div className="flex flex-col items-start justify-center gap-6 max-w-5xl">
              <h1 className="">
                WordPress Developer Focused on Clean, Scalable Builds
                <span className="text-accent">{' '}crafted with care and built to last
                  <span className="text-white">.</span>
                </span>
              </h1>
              <p className="font-secondary font-normal text-xl md:text-2xl">
                I build reliable WordPress websites with clarity, structure, and long-term thinking at their core.
              </p>
              <CtaButton
                href="/contact"
                text="Start a Project"
                title="Contact Jorge"
                className="w-auto"
              />
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-b from-transparent to-background absolute bottom-0 w-full h-40"></div>
      </section>

      <section className="py-12 lg:py-24">
        <div className="container">
          <div className="flex flex-col gap-12">
            <div className="max-w-3xl">
              <h2>
                Thoughtful WordPress Development
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <FeaturedCard
                icon={<RocketIcon className="w-12" />}
                heading="Custom WordPress Engineering"
                text="Purpose-built themes and systems designed for clarity, stability, and long-term maintainability."
              />

              <FeaturedCard
                icon={<ResponsiveIcon className="w-12" />}
                heading="Intentional Design & Structure"
                text="Well-structured, user-focused layouts that feel natural across devices."
              />

              <FeaturedCard
                icon={<SpeedIcon className="w-12" />}
                heading="Performance & Stability"
                text="Efficient builds optimized for speed, reliability, and sustainable growth."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-24">
        <div className="container">
          <div className="flex flex-col gap-12">
            <div className="max-w-3xl">
              <h2>
                How I Approach Projects
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <StepCard
                step="1"
                heading="Understand & Plan"
                text="Clarify goals, define structure, and establish a solid technical direction."
              />

              <StepCard
                step="2"
                heading="Build with Precision"
                text="Clean, well-structured development focused on reliability and performance."
              />

              <StepCard
                step="3"
                heading="Refine & Improve"
                text="Careful testing, optimization, and thoughtful iteration over time."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container py-12 lg:py-24">
        <div className="flex flex-col gap-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="mb-8">
                A Modern, Reliable Stack
              </h2>
              <p>
                I work with a carefully selected stack focused on performance, reliability, and long-term maintainability.
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
