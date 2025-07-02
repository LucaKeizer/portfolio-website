/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'github.com', 'raw.githubusercontent.com'],
  },
  // Only add headers if not doing static export
  ...(process.env.NODE_ENV === 'development' && {
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'X-Frame-Options',
              value: 'DENY',
            },
            {
              key: 'X-Content-Type-Options',
              value: 'nosniff',
            },
          ],
        },
      ]
    },
  }),
  // Remove static export for now - we'll add it back when needed for deployment
  // output: 'export',
  trailingSlash: true,
}

module.exports = nextConfig