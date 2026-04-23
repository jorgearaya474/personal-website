import HeroSection from "@/components/layout/HeroSection";
import Image from "next/image";
import ContactBanner from "@/components/layout/ContactBanner";

export const metadata = {
  title: "About Jorge Araya | Senior WordPress Developer | jorgearaya.com",
  description:
    "Senior WordPress developer from Costa Rica with 9+ years building custom themes, ACF blocks and scalable platforms for agencies and businesses worldwide.",
  keywords: [
    "about jorge araya",
    "senior wordpress developer",
    "wordpress developer costa rica",
    "wordpress developer freelance",
    "custom wordpress development",
    "ACF blocks developer",
  ],
  alternates: {
    canonical: "https://jorgearaya.com/about",
  },
  openGraph: {
    title: "About Jorge Araya | Senior WordPress Developer",
    description:
      "Senior WordPress developer from Costa Rica with 9+ years building custom themes, ACF blocks and scalable platforms for agencies and businesses worldwide.",
    url: "https://jorgearaya.com/about",
    images: [{ url: "https://jorgearaya.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Jorge Araya | Senior WordPress Developer",
    description:
      "Senior WordPress developer from Costa Rica with 9+ years building custom themes, ACF blocks and scalable platforms for agencies and businesses worldwide.",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jorge Araya",
  url: "https://jorgearaya.com",
  jobTitle: "Senior WordPress Developer",
  description:
    "Senior WordPress developer from Costa Rica with 9+ years building custom themes, ACF blocks and scalable platforms for agencies and businesses worldwide.",
  sameAs: [
    "https://linkedin.com/in/jorgearayadev",
    "https://github.com/jorgearaya474",
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "CR",
  },
};

export default function About() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <HeroSection heading="About me" />
      <section className="container pb-8 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <p className="mb-3">
              I'm Jorge, a WordPress developer based in Costa Rica 🇨🇷 with over 9 years of experience building custom platforms for agencies and growing businesses.
            </p>
            <p className="mb-3">
              I specialize in custom WordPress themes, ACF Gutenberg blocks, and content
              architectures that stay easy to manage long after launch. I also work with page
              builders like Elementor when a project benefits from faster delivery or simpler
              content management.
            </p>
            <p className="mb-3">
              My focus is on architecture that holds up: codebases that are easy to extend, hand
              off, and maintain. I work best with teams that care about doing things properly, not
              just shipping fast.
            </p>
            <p className="mb-3">
              I use AI as a thinking partner, not a replacement. It helps me move faster on
              boilerplate and research, but the decisions, architecture, and code quality stay on me.
            </p>
            <p>
              Outside of work, I'm a frequent traveler and nature enthusiast. Stepping away from
              the screen regularly helps me come back with clearer thinking, something that
              shapes how I approach every project.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-6">
            <div className="relative w-full min-h-96">
              <Image
                src="/images/IMG_0556.webp"
                alt="Jorge Traveling"
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <div className="relative w-full min-h-96">
              <Image
                src="/images/IMG_0633.webp"
                alt="Jorge Working"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>
      <ContactBanner />
    </>
  );
}
