import path from 'path';
import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServe';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration{
  const {paths, mode, isDev} = options;
  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
    },
    // plugins: [
    //   new HTMLWebpackPlugin({
    //     template: path.resolve(__dirname, 'public', 'index.html'),
    //   }),
    //   new webpack.ProgressPlugin(),
    // ],
    plugins: buildPlugins(options),
    //convert TypeScript to JavaScript
    module: {
      // rules: [
      //   {
      //     test: /\.tsx?$/,
      //     use: 'ts-loader',
      //     exclude: /node_modules/,
      //   },
      // ],
      rules: buildLoaders(options)
    },
    // resolve: {
    //   extensions: ['.tsx', '.ts', '.js'],
    // },
    resolve: buildResolvers(),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined
  }
}