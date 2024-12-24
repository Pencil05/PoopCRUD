/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "pixabay.com",            // Pixabay
      "unsplash.com",           // Unsplash
      "images.unsplash.com",    // Unsplash (Image CDN)
      "pexels.com",             // Pexels
      "cdn.pixabay.com",        // Pixabay CDN
      "i.imgur.com",            // Imgur
      "res.cloudinary.com",     // Cloudinary (นิยมใช้สำหรับโฮสต์รูป)
      "imgur.com",              // Imgur (เว็บตรง)
      "m.media-amazon.com",     // Amazon (สำหรับภาพจาก Amazon)
      "helios-i.mashable.com"   // ตัวอย่างที่มีอยู่แล้ว
    ],
  },
};

export default nextConfig;
