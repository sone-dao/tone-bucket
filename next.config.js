const NextFederationPlugin = require('@module-federation/nextjs-mf')

const federationConfig = {
  name: 'tone_bucket',
  filename: 'static/chunks/remoteEntry.js',
  exposes: {
    './helmetProd': './components/HelmetProd.tsx',
    './sidebarProd': './components/SidebarProd.tsx',
    './registrationProd': './components/RegistrationProd.tsx',
    './searchProd': './components/SearchProd.tsx',
  },
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, options) {
    if (!options.isServer)
      config.plugins.push(new NextFederationPlugin(federationConfig))
    return config
  },
}

module.exports = nextConfig
