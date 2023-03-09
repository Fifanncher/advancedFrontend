import webpack from 'webpack';
import {BuildOptions} from './types/config';
import {buildCssLoader} from './loaders/buildCssLoader';

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  };

  const styleLoader = buildCssLoader(isDev);

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack']
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff|woff2)$/i,
    use: [
      {
        loader: 'file-loader'
      }
    ]
  };

  const babelLoader = {
    test: /\.(ts|js|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          [
            'i18next-extract',
            {
              locales: ['en', 'ru'],
              keyAsDefaultValue: true
              // saveMissing: true,
              // outputPath: 'public/locales/{{locale}}/{{ns}}.json',
            }
          ]
        ]
      }
    }
  };

  return [
    babelLoader,
    typescriptLoader,
    styleLoader,
    svgLoader,
    fileLoader
  ];
}
