import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { Project } from "@/types/types";

const projectsDirectory = path.join(process.cwd(), "src/content/projects");

// get all projects
export async function getProjects() {
  const files = await fs.readdir(projectsDirectory);

  const projects = await Promise.all(
    files
      .filter((file) => path.extname(file) === ".mdx")
      .map(async (file) => {
        const filePath = path.join(projectsDirectory, file);
        const source = await fs.readFile(filePath, "utf8");
        const { data } = matter(source);

        return {
          title: data.title,
          order: data.order,
          image: data.image,
          link: data.link,
          technologies: data.technologies ? data.technologies.split(",") : [],
          description: data.description,
        } as Project;
      }),
  );

  projects.sort((a, b) => b.order - a.order);

  return projects;
}
