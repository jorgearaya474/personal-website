import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { Post } from "@/types/types";

const postsDirectory = path.join(process.cwd(), "src/content/posts");

// Get all posts
export async function getPosts() {
  const files = await fs.readdir(postsDirectory);

  const projects = await Promise.all(
    files
      .filter((file) => path.extname(file) === ".mdx")
      .map(async (file) => {
        const filePath = path.join(postsDirectory, file);
        const source = await fs.readFile(filePath, "utf8");
        const { data } = matter(source);
        const slug = path.basename(file, ".mdx");

        return {
          slug,
          title: data.title,
          date: data.date,
          description: data.description,
          image: data.image,
          tags: data.tags ? data.tags.split(",") : [],
        } as Post;
      }),
  );

  projects.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return projects;
}

// Get all the posts slugs fro static generation
export async function getAllPostSlugs() {
  try {
    const files = await fs.readdir(postsDirectory);
    return files
      .filter((file) => path.extname(file) === ".mdx")
      .map((file) => ({
        slug: path.basename(file, ".mdx"),
      }));
  } catch (error) {
    console.error("Error reading the posts directory: ", error);
    return [];
  }
}

// Get single post by slug
export async function getPostBySlug(slug: string) {
  const filePath = path.join(postsDirectory, `${slug}.mdx`);

  try {
    const source = await fs.readFile(filePath, "utf8");
    const { data, content } = matter(source);

    return {
      slug,
      title: data.title,
      date: data.date,
      description: data.description,
      tags: data.tags ? data.tags.split(",") : [],
      content,
    };
  } catch (error) {
    console.error(`Error loading post "${slug}":`, error);
    return null;
  }
}
