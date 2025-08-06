/** @type {import('next').NextConfig} */
const nextConfig = {

  output: "export",  // <=== habilita o export estático
  reactStrictMode: true,

  
  reactStrictMode: true,
  swcMinify: true,
  
}

module.exports = nextConfig

module.exports = {

   assetPrefix: './',
  basePath: '/https://github.com/gabrielsventura05/pokenext-next.js-hospedado',
  trailingSlash: true,
 
 reactStrictMode: true,
  images: {
    domains: ["raw.githubusercontent.com"],
  },
};