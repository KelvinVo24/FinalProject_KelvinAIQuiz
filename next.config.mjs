/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains: ['lh3.googleusercontent.com']
    },
    typescript:{
        ignoreBuildErrors: true
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    webpack: (config) => {
        config.externals.push({
            'pdf-parse': 'commonjs pdf-parse'
        });
        return config;
    },
};

export default nextConfig;
