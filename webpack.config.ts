import path from 'path';
import webpack from 'webpack';
import {BuildPath, BuildEnv} from './config/build/types/config';
import {BuildWebpackConfig} from './config/build/buildWebpackConfig';

export default (env: BuildEnv) => {
  const paths: BuildPath = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src')
  };

  const mode = env.mode || 'development';
  const PORT = env.port || 3000;
  const apiUrl = env.apiUrl || 'http://localhost:8000';

  const isDev = mode === 'development';

  const config: webpack.Configuration = BuildWebpackConfig({
    mode,
    paths,
    isDev,
    apiUrl,
    port: PORT,
    project: 'frontend'
  });

  return config;
};
