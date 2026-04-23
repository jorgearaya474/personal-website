import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { Post } from "@/types/types";

const postsDirectory = path.join(process.cwd(), "src/content/posts");

// Get all posts
export async function getPosts() {
  const files = await fs.readdir(postsDirectory);

  const posts = await Promise.all(
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
          draft: data.draft ?? false,
        } as Post;
      }),
  );

  const published = posts.filter((p) => !p.draft);

  published.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return published;
}

// Get all the posts slugs for static generation (excludes drafts)
export async function getAllPostSlugs() {
  try {
    const files = await fs.readdir(postsDirectory);
    const slugs = await Promise.all(
      files
        .filter((file) => path.extname(file) === ".mdx")
        .map(async (file) => {
          const source = await fs.readFile(path.join(postsDirectory, file), "utf8");
          const { data } = matter(source);
          if (data.draft) return null;
          return { slug: path.basename(file, ".mdx") };
        }),
    );
    return slugs.filter(Boolean) as { slug: string }[];
  } catch {
    return [];
  }
}

// Get related posts by shared tags, excluding current slug
export async function getRelatedPosts(slug: string, tags: string[], limit = 2) {
  const all = await getPosts();
  return all
    .filter((p) => p.slug !== slug)// skip current post
    .slice(0, limit);
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
      videoUrl: data.videoUrl ?? null,
      content,
    };
  } catch {
    return null;
  }
}
