/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,


  images: {
    remotePatterns: [
      {
        hostname: 'rukminim2.flixcart.com'
      }
    ],
},

 
}


module.exports = nextConfig 
