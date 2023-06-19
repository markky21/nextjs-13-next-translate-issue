//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');
const nextTranslate = require('next-translate-plugin')
const CopyPlugin = require('copy-webpack-plugin')

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    config.plugins.push(
        new CopyPlugin({
          patterns: [
            {
              from: './i18n.js',
              to: '../i18n.js',
            },
          ],
        })
    )

    // Important: return the modified config
    return config
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
  // nextTranslate
];

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
module.exports = composePlugins(...plugins)(nextConfig);
