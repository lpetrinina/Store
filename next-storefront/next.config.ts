import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "images.pexels.com"
            },
            {
                protocol: 'https',
                hostname: "ptmqdcwgjuxuxivpeovp.supabase.co"
            }
        ]
    },
    experimental: {
        serverActions: {
            bodySizeLimit: '2mb',
        },
    },
};

export default nextConfig;
