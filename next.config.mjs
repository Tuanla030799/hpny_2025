/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/', // Trang bạn muốn chuyển hướng từ đó
        destination: '/wish', // Đích đến mà bạn muốn chuyển hướng
        permanent: false, // Sử dụng false cho redirect tạm thời (HTTP 302)
      },
    ];
  },
};

export default nextConfig;
