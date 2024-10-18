import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "https://loremflickr.com/",
            "loremflickr.com",
            "https://resizer.otstatic.com",
            "resizer.otstatic.com",
            "storage.googleapis.com",
            "https://storage.googleapis.com",
        ],
        minimumCacheTTL: 1500000,
    },
};

export default withNextIntl(nextConfig);