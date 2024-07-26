import nextPWA from 'next-pwa';

const withPWA = nextPWA({
  dest: 'public',
  disableDevLogs: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'imagedelivery.net',
        port: '',
        pathname: '/6qzLODAqs2g1LZbVYqtuQw/**/*',
      },
      {
        protocol: 'https',
        hostname: 'k.kakaocdn.net',
        port: '',
        hostname: '/**/*',
      },
    ],
  },
});

export default nextConfig;
