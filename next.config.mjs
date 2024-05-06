/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', 
    // basePath: '/portfolio' for image rendering with relative path only
    images: { unoptimized: true }
};

export default nextConfig;
