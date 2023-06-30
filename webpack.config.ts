import path from 'path'
import webpack from 'webpack'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import { buildPlugins } from './config/build/buildPlugins'
import { buildLoaders } from './config/build/buildLoaders'
import { buildResolvers } from './config/build/buildResolvers'
import { BuildPaths, BuildEnv } from './config/build/types/config';
import { buildWebpackConfig } from './config/build/buildWebpackConfig'

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src')
  }
  
  const mode =  env.mode || 'development';
  const PORT = env.port || 3000;
  const isDev = mode === 'development';
  console.log(mode);
  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT
  })
  
  // const config: webpack.Configuration = {
  //   mode: 'development',
  //   entry: path.resolve(__dirname, 'src', 'index.ts'),
  //   output: {
  //     filename: '[name].[contenthash].js',
  //     path: path.resolve(__dirname, 'build'),
  //     clean: true,
  //   },
  //   // plugins: [
  //   //   new HTMLWebpackPlugin({
  //   //     template: path.resolve(__dirname, 'public', 'index.html'),
  //   //   }),
  //   //   new webpack.ProgressPlugin(),
  //   // ],
  //   plugins: buildPlugins(),
  //   //convert TypeScript to JavaScript
  //   module: {
  //     // rules: [
  //     //   {
  //     //     test: /\.tsx?$/,
  //     //     use: 'ts-loader',
  //     //     exclude: /node_modules/,
  //     //   },
  //     // ],
  //     rules: buildLoaders()
  //   },
  //   // resolve: {
  //   //   extensions: ['.tsx', '.ts', '.js'],
  //   // },
  //   resolve: buildResolvers()
  // }
  return config;
}