import { getWorks } from "@/lib/worksHandler";
import HeroSection from "@/components/layout/HeroSection";
import WorkItem from "@/components/ui/WorkItem";

export const metadata = {
  title: "Portfolio | Jorge Araya Web Developer",
  description:
    "Explore my portfolio as a skilled web developer. Dive into a collection of meticulously crafted projects that showcase creativity, functionality, and innovation. Witness the power of code turned into captivating digital experiences.",
  keywords: ["wordpress development", "react", "web development portfolio"],
  robots: {
    index: false,
    follow: false,
  }
};

export default async function WorksPage() {
  const works = await getWorks();

  return (
    <>
      <HeroSection heading="Recent Work" className="" />
      <div className="container pb-12 lg:pb-[10rem]">
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
    </>
  );
}
