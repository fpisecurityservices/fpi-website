/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    resolveAlias: {
      // Keep the existing components importing from 'react-router-dom';
      // route them to our Next-backed shim instead.
      'react-router-dom': './src/compat/react-router-dom.jsx',
    },
  },
  async redirects() {
    return [
      { source: '/services/officers', destination: '/security-officers', permanent: true },
      { source: '/services/patrol', destination: '/mobile-patrol', permanent: true },
      { source: '/services/remote', destination: '/remote-video-monitoring', permanent: true },
      { source: '/services/surveillance', destination: '/surveillance-systems', permanent: true },
      { source: '/services/access', destination: '/access-control', permanent: true },
      { source: '/services/autonomous', destination: '/autonomous-surveillance', permanent: true },
      { source: '/services/maintenance', destination: '/service-maintenance', permanent: true },
      { source: '/security-operations-center', destination: '/technology/soc', permanent: true },
      { source: '/fpi-technology-platform', destination: '/technology/platform', permanent: true },
    ];
  },
};

export default nextConfig;
