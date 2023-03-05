module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:i18next/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module',
    tsconfigRootDir: __dirname
  },
  plugins: [
    'react',
    'i18next'
  ],
  rules: {
    'comma-dangle': ['error', 'never'],
    'react/jsx-filename-extension': [2, {extensions: ['.js', '.jsx', '.tsx', 'ts']}],
    'import/no-unresolved': 'off',
    'object-curly-spacing': ['error', 'never'],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/extensions': [0],
    'import/prefer-default-export': 'off',
    'no-unused-vars': ['warn', {
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_'
    }],
    'react/require-default-props': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'no-shadow': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'off',
    'max-len': ['error', {ignoreComments: true, code: 100}],
    'i18next/no-literal-string': ['error', {
      markupOnly: true,
      ignoreAttribute: ['data-testid']
    }]
  },
  globals: {
    __IS_DEV__: true
  },
  overrides: [
    {
      files: ['**/src/**/*.test.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off'
      }
    }
  ]
};
