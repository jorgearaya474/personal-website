import { getPosts } from "@/lib/postsHandler";
import ItemCard from "@/components/ui/ItemCard";
import type { Metadata } from "next";
import HeroSection from "@/components/layout/HeroSection";
import ContactBanner from "@/components/layout/ContactBanner";

export const metadata: Metadata = {
  title: "Blog | WordPress, Next.js & Web Development Articles | jorgearaya.com",
  description:
    "Web development articles covering WordPress, Next.js, PHP, and modern frontend tooling. Practical guides written by a developer, for developers.",
  keywords: [
    "wordpress developer blog",
    "web development articles",
    "wordpress tips",
    "next.js tutorials",
    "php development",
    "wordpress guides",
    "frontend development",
    "developer insights",
  ],
  alternates: {
    canonical: "https://jorgearaya.com/blog",
  },
};

export default async function Blog() {
  const posts = await getPosts();

  return (
    <>
      <HeroSection heading="Latest Articles" className="" />
      <div className="container pb-8 lg:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((item) => (
            <ItemCard
              key={item.title}
              href={`/blog/${item.slug}`}
              title={item.title}
              tags={item.tags}
              description={item.description}
            />
          ))}
        </div>
      </div>

      <ContactBanner />
    </>
  );
}
