/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'self' *.salesforce.com *.force.com lightning.force.com;" 
          }
        ],
      },
    ]
  },
};

export default nextConfig;