import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */

const cdnDummyJsonPathObj = {
  protocol: 'https',
  hostname: 'cdn.dummyjson.com',
}

const placePathObj = {
  protocol: 'https',
  hostname: 'placehold.co',
}

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
    ],
  },
  reactStrictMode: true,
}

export default withPayload(nextConfig)
