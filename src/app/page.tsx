import CtaButton from "@/components/ui/CtaButton";
import TechStack from "@/components/ui/TechStack";
import ContactBanner from "@/components/layout/ContactBanner";
import { RocketIcon, ResponsiveIcon, SpeedIcon, CheckMarkIcon } from "@/components/icons";
import FeaturedCard from "@/components/ui/FeaturedCard";
import StepCard from "@/components/ui/StepCard";

export const metadata = {
  title: "Senior WordPress Developer | Custom Themes, ACF Blocks & React | jorgearaya.com",
  description:
    "Senior WordPress developer with 9+ years building custom themes, ACF Gutenberg blocks, and scalable platforms for agencies and businesses worldwide.",
  keywords: [
    "senior wordpress developer",
    "custom wordpress theme developer",
    "ACF blocks developer",
    "gutenberg blocks developer",
    "wordpress freelance developer",
    "wordpress developer costa rica",
    "react tailwind wordpress",
  ],
};

export default async function Home() {
  return (
    <>
      <section className="gradient-bg relative py-32 md:py-0">
        <div className="container relative z-10 pt-16">
          <div className="flex flex-col items-start justify-center md:min-h-[620px]">
            <div className="flex flex-col items-start justify-center gap-6 max-w-4xl">
              <h1>
                WordPress platforms built to scale,
                <span className="text-accent">{' '}not to break
                  <span className="text-white">.</span>
                </span>
              </h1>
              <p className="font-secondary font-normal text-xl md:text-2xl">
                I help agencies and growing businesses build fast, maintainable sites without technical debt, ready to scale and easy to manage.
              </p>
              <div className="flex flex-row gap-4">
                <CtaButton
                  href="/contact"
                  text="Let’s talk"
                  title="Contact Jorge"
                  className="w-auto"
                />
                <CtaButton
                  href="/work"
                  text="See my work"
                  title="View Jorge’s projects"
                  variant="secondary"
                  className="w-auto"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-b from-transparent to-background absolute bottom-0 w-full h-40"></div>
      </section>

      <section className="py-12 lg:py-24">
        <div className="container">
          <div className="flex flex-col gap-12">
            <h2 className="max-w-3xl">What I Build</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <FeaturedCard
                icon={<RocketIcon className="w-12" />}
                heading="Custom Themes & ACF Blocks"
                text="Hand-crafted WordPress themes and dynamic Gutenberg blocks built with ACF, React and Tailwind — pixel-perfect and built to last."
              />
              <FeaturedCard
                icon={<ResponsiveIcon className="w-12" />}
                heading="Flexible Content Systems"
                text="Structured, editor-friendly content architectures that scale with your platform and stay easy to manage over time."
              />
              <FeaturedCard
                icon={<SpeedIcon className="w-12" />}
                heading="Performance & Core Web Vitals"
                text="Optimized builds that score well, load fast, and stay reliable as your traffic and content grow."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-24">
        <div className="container">
          <div className="flex flex-col gap-12">
            <h2 className="max-w-3xl">How I Approach Projects</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <StepCard
                step="1"
                heading="Understand & Plan"
                text="I ask the right questions early — goals, constraints, edge cases — so nothing surprises us mid-build."
              />
              <StepCard
                step="2"
                heading="Build with Precision"
                text="Clean, documented code built for the developer who maintains it next, not just for today."
              />
              <StepCard
                step="3"
                heading="Test, Iterate & Ship"
                text="Thorough review cycles before delivery. No surprises at launch, and a codebase ready for whoever touches it next."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-24">
        <div className="container">
          <div className="flex flex-col gap-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="mb-8">A Stack Built to Last</h2>
                <p>
                  Every tool I use has a reason. My stack centers on custom WordPress architecture, ACF-powered content systems, and a modern frontend layer built with React and Tailwind — chosen for maintainability and longevity, not trend-chasing.
                </p>
              </div>
              <ul className="space-y-4 text-lg font-medium">
                <li className="flex gap-3 items-start md:items-center">
                  <CheckMarkIcon className="w-6 h-6 shrink-0 mt-[1px] md:mt-0" />
                  Custom Gutenberg blocks built with ACF and Tailwind.
                </li>
                <li className="flex gap-3 items-start md:items-center">
                  <CheckMarkIcon className="w-6 h-6 shrink-0 mt-[1px] md:mt-0" />
                  Clean PHP architecture — easy to maintain and extend over time.
                </li>
                <li className="flex gap-3 items-start md:items-center">
                  <CheckMarkIcon className="w-6 h-6 shrink-0 mt-[1px] md:mt-0" />
                  Content systems editors can manage without developer help.
                </li>
                <li className="flex gap-3 items-start md:items-center">
                  <CheckMarkIcon className="w-6 h-6 shrink-0 mt-[1px] md:mt-0" />
                  Flexible page builder support when needed — without locking you in.
                </li>
                <li className="flex gap-3 items-start md:items-center">
                  <CheckMarkIcon className="w-6 h-6 shrink-0 mt-[1px] md:mt-0" />
                  Codebases structured for handoff and long-term extension.
                </li>
              </ul>
            </div>
            <TechStack />
          </div>
        </div>
      </section>

      <ContactBanner />
    </>
  );
}
