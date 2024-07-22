/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/pdf-kitchen", // TODO: make this dynamic
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

module.exports = {
  ...nextConfig,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.md/,
      use: [options.defaultLoaders.babel, '@mdx-js/loader'],
    });

    config.module.rules.push({
      test: /\.worker\.(min\.)?js$/,
      loader: 'file-loader',
      options: {
        name: "[contenthash].[ext]",
        publicPath: "_next/static/worker",
        outputPath: "static/worker"
      }
    });

    return config;
  },
};
