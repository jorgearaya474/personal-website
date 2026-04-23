import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | jorgearaya.com",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="gradient-bg relative h-[80svh] flex items-center">
      <div className="container">
        <div className="flex flex-col gap-6 max-w-xl">
          <p className="text-accent font-secondary text-4xl font-bold">404</p>
          <h1 className="font-primary font-black text-white text-4xl md:text-6xl">
            Page not found<span className="text-accent">.</span>
          </h1>
          <p className="text-lg font-secondary">
            The page you are looking for does not exist or has been moved.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-accent font-secondary font-medium underline underline-offset-4"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
}
