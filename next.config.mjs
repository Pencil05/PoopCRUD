/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "pixabay.com",
      "unsplash.com",
      "images.unsplash.com",
      "pexels.com",
      "cdn.pixabay.com",
      "i.imgur.com",
      "res.cloudinary.com",
      "imgur.com",
      "m.media-amazon.com",
      "helios-i.mashable.com"
    ],
  },
  env: {
    MONGODB_URI: process.env.MONGODB_URI, // เพิ่มการตั้งค่าของ MONGODB_URI
  },
};

export default nextConfig;
