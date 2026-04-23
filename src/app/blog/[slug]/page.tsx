import { notFound } from "next/navigation";
import HeroSection from "@/components/layout/HeroSection";
import { getPostBySlug, getAllPostSlugs, getRelatedPosts } from "@/lib/postsHandler";
import { MDXRemote } from "next-mdx-remote/rsc";
import ContactBanner from "@/components/layout/ContactBanner";
import ItemCard from "@/components/ui/ItemCard";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/atom-one-dark.css";

// Generate static urls
export async function generateStaticParams() {
  const posts = await getAllPostSlugs();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post not found | jorgearaya.com",
      description: "The requested post could not be found.",
    };
  }

  return {
    title: `${post.title} | jorgearaya.com`,
    description:
      post.description ||
      "I'm Jorge Araya, a passionate web developer with years of experience building dynamic, user-friendly websites.",
    alternates: {
      canonical: `https://jorgearaya.com/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
      images: [
        {
          url: `https://jorgearaya.com/blog/${slug}/opengraph-image`,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [`https://jorgearaya.com/blog/${slug}/opengraph-image`],
    },
  };
}

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const related = await getRelatedPosts(slug, post.tags);

  const videoSchema = post.videoUrl
    ? {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: post.title,
        description: post.description,
        embedUrl: post.videoUrl,
        uploadDate: post.date,
        author: { "@type": "Person", name: "Jorge Araya" },
      }
    : null;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: "Jorge Araya",
      url: "https://jorgearaya.com/about",
    },
    publisher: {
      "@type": "Person",
      name: "Jorge Araya",
      url: "https://jorgearaya.com",
    },
    url: `https://jorgearaya.com/blog/${slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {videoSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
        />
      )}
      <HeroSection heading={post.title} className="" />
      <div className="container pb-8 lg:pb-20">
        <div className="flex flex-col gap-10">
          <div
            className="w-full font-secondary prose prose-h2:font-primary prose-xl prose-invert max-w-full [&_pre]:bg-transparent
            [&_pre]:p-0 [&_pre]:m-0"
          >
            <div className="flex flex-row items-center gap-6">
              <span className="text-lg font-medium text-white">
                Published: {post.date}
              </span>
              <span>|</span>
              <div className="flex gap-2">
                {post.tags.map((tag: string) => (
                  <span
                    className="inline-flex items-center rounded-md bg-indigo-400/20 px-2 py-1 text-sm font-secondary font-medium text-accent ring-1 ring-inset ring-indigo-400/10"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <MDXRemote
              source={post.content}
              options={{
                mdxOptions: {
                  rehypePlugins: [rehypeHighlight],
                },
              }}
            />
          </div>
          <div className="col-span-1"></div>
        </div>
      </div>
      {related.length > 0 && (
        <section className="container pb-8 lg:pb-24">
          <hr className="border-white/10 mb-8 lg:mb-24" />
          <h2 className="mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {related.map((item) => (
              <ItemCard
                key={item.slug}
                href={`/blog/${item.slug}`}
                title={item.title}
                tags={item.tags}
                description={item.description}
              />
            ))}
          </div>
        </section>
      )}
      <ContactBanner />
    </>
  );
}
