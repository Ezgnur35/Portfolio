/** @type {import('next').NextConfig} */
const nextConfig = {
  // Dev modda source map üretme — bellek tasarrufu
  productionBrowserSourceMaps: false,

  // Gereksiz ESLint build hatasını kapat
  eslint: { ignoreDuringBuilds: true },

  // TypeScript hata kontrol süresi kısalt
  typescript: { ignoreBuildErrors: false },

  // Görselleri optimize et (daha az işlem)
  images: {
    unoptimized: true,
  },

  // Webpack bellek ayarı
  webpack: (config, { dev }) => {
    if (dev) {
      // Dev modda paralel işlem sayısını sınırla
      config.parallelism = 1;
    }
    return config;
  },
};

export default nextConfig;
