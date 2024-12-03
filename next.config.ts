/** @type {import('next').NextConfig} */

const cdnDummyJsonPathObj = {
  protocol: 'https',
  hostname: 'cdn.dummyjson.com',
}

const placePathObj = {
  protocol: 'https',
  hostname: 'placehold.co',
}

const dummyHost = {
  protocol: 'https',
  hostname: 'dummyjson.com',
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // ...[NEXT_PUBLIC_SERVER_URL /* 'https://example.com' */].map((item) => {
      //   const url = new URL(item)

      //   return {
      //     ...cdnDummyJsonPathObj,
      //     hostname: url.hostname,
      //     protocol: url.protocol.replace(':', ''),
      //   }
      // }),

      cdnDummyJsonPathObj,
      placePathObj,
      dummyHost,
    ],
  },
  reactStrictMode: true,
}
export default nextConfig
