import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enabling React Strict Mode
  reactStrictMode: true,

  // SCSS Options
  sassOptions: {
    includePaths: [path.join(process.cwd(), 'styles')],
  },

  // Custom Webpack Configuration (if needed)
  webpack: (config, { isServer }) => {
    // Example: Adding custom aliases or plugins
    // config.resolve.alias['@'] = path.join(__dirname, 'src');

    return config;
  },

  // Environment Variables
  env: {
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
  },

  // Image Optimization: Define external domains for images
  images: {
    domains: ['example.com', 'another-example.com'], // Replace with your image domains
  },

  // Internationalization (i18n) support
  i18n: {
    locales: ['en', 'es'], // Add supported locales
    defaultLocale: 'en', // Set default locale
  },

  // Enabling Experimental Features (if applicable)
  experimental: {
    appDir: true, // For example, enable the new app directory structure
  },
};

export default nextConfig;
