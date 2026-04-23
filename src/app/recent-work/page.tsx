import { getWorks } from "@/lib/worksHandler";
import HeroSection from "@/components/layout/HeroSection";
import WorkItem from "@/components/ui/WorkItem";
import ContactBanner from "@/components/layout/ContactBanner";

export const metadata = {
  title: "Work | jorgearaya.com",
  description:
    "A selection of projects built through agency partnerships, covering custom WordPress themes, ACF blocks, and content systems.",
  keywords: ["wordpress development", "web development portfolio"],
  robots: {
    index: false,
    follow: false,
  }
};

export default async function WorksPage() {
  const works = await getWorks();

  return (
    <>
      <HeroSection heading="Work" className="" />
      <div className="container pb-8 lg:pb-24">
        <p className="max-w-4xl mb-12">
          A selection of projects built independently and in collaboration with agencies, often in a white-label capacity. I focus on custom WordPress development and flexible content systems, building sites that remain easy to manage, extend, and maintain over time.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work) => (
            <WorkItem
              key={work.title}
              title={work.title}
              order={work.order}
              image={work.image}
              link={work.link}
              technologies={work.technologies}
              description={work.description}
            />
          ))}
        </div>
      </div>

      <ContactBanner />
    </>
  );
}
