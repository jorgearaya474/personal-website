import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { WorkProps } from "@/types/types";

const worksDirectory = path.join(process.cwd(), "src/content/works");

// get all works
export async function getWorks() {
  const files = await fs.readdir(worksDirectory);

  const works = await Promise.all(
    files
      .filter((file) => path.extname(file) === ".mdx")
      .map(async (file) => {
        const filePath = path.join(worksDirectory, file);
        const source = await fs.readFile(filePath, "utf8");
        const { data } = matter(source);

        return {
          title: data.title,
          order: data.order,
          image: data.image,
          link: data.link,
          technologies: data.technologies ? data.technologies.split(",") : [],
          description: data.description,
        } as WorkProps;
      }),
  );

  works.sort((a, b) => b.order - a.order);

  return works;
}
