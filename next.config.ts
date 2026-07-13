import type { NextConfig } from 'next';
const nextConfig: NextConfig = {
  // gera .next/standalone com um server.js autocontido (sem precisar de node_modules
  // completo na imagem final) - essencial para uma imagem Docker enxuta
  output: 'standalone',
};
export default nextConfig;
