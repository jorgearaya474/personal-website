// next.config.mjs
import createMDX from "@next/mdx";

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
  env: {
    USER_NAME: process.env.USER_NAME,
    DEVTO_API_KEY: process.env.DEVTO_API_KEY,
  },
};

export default withMDX(nextConfig);
