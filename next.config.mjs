const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export", // emit a static out/ folder for GitHub Pages
  basePath: isProd ? "/news" : "", // served under tolgaosman.github.io/news/
  assetPrefix: isProd ? "/news/" : "",
  images: { unoptimized: true }, // no image optimizer on a static host
  trailingSlash: true, // dir-style URLs -> /article/<slug>/index.html
};

export default nextConfig;
