import { getPosts } from "@/lib/postsHandler";
import ItemCard from "@/components/ui/ItemCard";
import type { Metadata } from "next";
import HeroSection from "@/components/layout/HeroSection";

export const metadata: Metadata = {
  title: "Blog | Jorge Araya Web Developer",
  description:
    "Discover insights and expertise in web development on my blog. Join me in exploring the dynamic world of coding, design, and innovation.",
  keywords: ["wordpress developer", "blog", "wordpress insights"],
};

export default async function Blog() {
  const posts = await getPosts();

  return (
    <>
      <HeroSection heading="Latest Articles" className="" />
      <div className="container pb-12 lg:pb-[10rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((item) => (
            <ItemCard
              key={item.title}
              slug={item.slug}
              date={item.date}
              title={item.title}
              tags={item.tags}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </>
  );
}
