import { getPosts } from "@/lib/postsHandler";
import ItemCard from "@/components/ui/ItemCard";
import type { Metadata } from "next";
import HeroSection from "@/components/layout/HeroSection";
import ContactBanner from "@/components/layout/ContactBanner";

export const metadata: Metadata = {
  title: "Blog | jorgearaya.com",
  description:
    "Discover insights and expertise in web development on my blog. Join me in exploring the dynamic world of coding, design, and innovation.",
  keywords: ["wordpress developer", "blog", "wordpress insights"],
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
              slug={item.slug}
              date={item.date}
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
