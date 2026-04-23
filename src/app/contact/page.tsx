import HeroSection from "@/components/layout/HeroSection";
import { CheckMarkIcon } from "@/components/icons";
import ContactForm from "@/components/ui/ContactForm";

export const metadata = {
  title: "Work With Jorge | Senior WordPress Developer | jorgearaya.com",
  description:
    "Looking to hire a senior WordPress developer or expand your agency's capacity? Let's talk about your project.",
  keywords: [
    "hire wordpress developer",
    "wordpress agency partner",
    "wordpress developer for hire",
    "wordpress freelance developer",
    "senior wordpress developer costa rica",
  ],
  alternates: {
    canonical: "https://jorgearaya.com/contact",
  },
  openGraph: {
    title: "Work With Jorge | Senior WordPress Developer",
    description:
      "Looking to hire a senior WordPress developer or expand your agency's capacity? Let's talk about your project.",
    url: "https://jorgearaya.com/contact",
    images: [{ url: "https://jorgearaya.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Work With Jorge | Senior WordPress Developer",
    description:
      "Looking to hire a senior WordPress developer or expand your agency's capacity? Let's talk about your project.",
  },
};

export default function Contact() {
  return (
    <>
      <HeroSection heading="Let's connect" />
      <section className="container pb-8 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="mb-6">
              Whether you're an agency looking to expand capacity, a business with a project to
              build, or just have an idea worth exploring. I'm happy to talk it through. Good
              work starts with understanding what actually matters before writing a single line of code.
            </p>

            <div className="my-8 p-6 rounded-lg bg-surface">
              <h3 className="mb-3">What you can expect</h3>
              <ul className="space-y-3 text-lg">
                <li className="flex gap-2 items-start md:items-center">
                  <CheckMarkIcon className="w-5 h-5 shrink-0 mt-[1px] md:mt-0" />
                  A response within 24 hours.
                </li>
                <li className="flex gap-2 items-start md:items-center">
                  <CheckMarkIcon className="w-5 h-5 shrink-0 mt-[1px] md:mt-0" />
                  An honest assessment of your project's scope and complexity.
                </li>
                <li className="flex gap-2 items-start md:items-center">
                  <CheckMarkIcon className="w-5 h-5 shrink-0 mt-[1px] md:mt-0" />
                  Clear communication throughout: no black boxes.
                </li>
                <li className="flex gap-2 items-start md:items-center">
                  <CheckMarkIcon className="w-5 h-5 shrink-0 mt-[1px] md:mt-0" />
                  Code you or your team can maintain after handoff.
                </li>
              </ul>
            </div>

            <p className="italic">
              Based in Costa Rica 🇨🇷, open to working and collaborating worldwide.
            </p>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
