//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');
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
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
  nextTranslate
];

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
module.exports = composePlugins(...plugins)(nextConfig);
