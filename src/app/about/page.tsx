import HeroSection from "@/components/layout/HeroSection";
import Image from "next/image";
import ContactBanner from "@/components/layout/ContactBanner";

export const metadata = {
  title: "About me | jorgearaya.com",
  description:
    "A web developer focused on thoughtful, well-crafted digital experiences. I value clarity, structure, and building things that last.",
  keywords: ["wordpress developer", "web developer", "web costa rica"],
};

export default function About() {
  return (
    <>
      <HeroSection heading="About me" className="" />
      <div className="container pb-8 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <p className="mb-3">
              I’m Jorge, a web developer from Costa Rica 🇨🇷 who genuinely enjoys building things with care.
              For more than eight years, I’ve been working on the web — not just writing code, but creating digital spaces that feel clear, intentional, and well-crafted.
            </p>

            <p className="mb-3">
              Over time, I’ve learned that good work isn’t about using the newest tools — it’s about paying attention. Listening carefully, understanding what really matters, and making thoughtful decisions that stand the test of time.
            </p>

            <p className="mb-3">
              I value simplicity, structure, and doing things the right way. I enjoy refining the small details, solving quiet problems, and building systems that feel solid and dependable.
            </p>

            <p>
              Outside of work, I’m a nature lover and frequent traveler. Stepping away from the screen helps me reset, reflect, and come back with fresh perspective — something that naturally shapes how I approach every project.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-6">
            <div className="relative w-full min-h-96">
              <Image
                src="/images/IMG_0556.webp"
                alt="Jorge Traveling"
                fill
                className="object-cover rounded-xl"
              />
            </div>

            <div className="relative w-full min-h-96">
              <Image
                src="/images/IMG_0633.webp"
                alt="Jorge Working"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
      <ContactBanner />
    </>
  );
}
