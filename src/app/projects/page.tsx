import { getProjects } from "@/lib/projectsHandler";
import HeroSection from "@/components/layout/HeroSection";
import ProjectItem from "@/components/ui/ProjectItem";

export const metadata = {
  title: "Portfolio | Jorge Araya Web Developer",
  description:
    "Explore my portfolio as a skilled web developer. Dive into a collection of meticulously crafted projects that showcase creativity, functionality, and innovation. Witness the power of code turned into captivating digital experiences.",
  keywords: ["wordpress development", "react", "web development portfolio"],
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <>
      <HeroSection heading="What I've Been Working On" className="" />
      <div className="container pb-12 lg:pb-[10rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectItem
              key={project.title}
              title={project.title}
              order={project.order}
              image={project.image}
              link={project.link}
              technologies={project.technologies}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </>
  );
}
