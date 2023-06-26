//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('@nx/next');
const CopyPlugin = require('copy-webpack-plugin');
const nextTranslate = require('next-translate-plugin')

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: './i18n.js',
            to: '../i18n.js',
          },
        ],
      })
    );
    return config;
  },
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
module.exports = withNx(nextConfig);
// module.exports = withNx(nextTranslate(nextConfig));
