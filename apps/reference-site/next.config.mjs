import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Shared workspace packages ship TS/JSX source — let Next compile them.
  transpilePackages: ["@violet/ui", "@violet/tokens", "@violet/types"],
};

export default withNextIntl(nextConfig);
