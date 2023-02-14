const NextFederationPlugin = require('@module-federation/nextjs-mf')

const federationConfig = {
  name: 'tone_bucket', // a-z, 0-9, and _ only!
  filename: 'static/chunks/remoteEntry.js',
  exposes: {
    './someComponent': './components/SomeComponent.tsx',
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
