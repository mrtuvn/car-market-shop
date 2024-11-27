import { withPayload } from '@payloadcms/next/withPayload'

const NEXT_PUBLIC_SERVER_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : undefined || process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'
import redirects from './redirects.js'
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
  redirects,
}

export default withPayload(nextConfig)
