/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === "true"
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: "export",
  trailingSlash: true,
  ...(isGithubPages
    ? {
        basePath,
        assetPrefix: basePath,
      }
    : {}),
}

export default nextConfig
