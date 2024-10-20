/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/To-do-list-Bico', // Nome do repositório
  assetPrefix: '/To-do-list-Bico',
  images: {
    unoptimized: true,
  },
  trailingSlash: true, // Adiciona uma barra no final das URLs
};

export default nextConfig;