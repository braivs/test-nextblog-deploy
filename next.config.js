/**
 * @type {import('next').NextConfig}
 */
const isProd = process.env.NODE_ENV === 'development'

const nextConfig = {
    basePath: '/test-nextblog-deploy',
    output: 'export',
    distDir: 'dist',
    images: {
        unoptimized: true,
    }
}

module.exports = nextConfig