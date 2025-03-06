/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["www.fidesgroup.in"],
    unoptimized: true,
  },
  output: "export", // Ensures static site export
  distDir: "out", // (Optional) Ensures the exported files are stored in 'out/'
};

export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: ["www.shapesproducts.in", "img.freepik.com", "shapesproducts.in"],
//   },
// };

// module.exports = nextConfig;
