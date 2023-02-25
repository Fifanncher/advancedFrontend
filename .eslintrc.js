module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:i18next/recommended'
  ],
  overrides: [
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module',
    project: ['tsconfig.json']
  },
  plugins: [
    'react',
    'i18next'
  ],
  rules: {
    'comma-dangle': ['error', 'never'],
    'react/jsx-filename-extension': [2, {'extensions': ['.js', '.jsx', '.tsx', 'ts']}],
    'import/no-unresolved': 'off',
    'object-curly-spacing': ['error', 'never'],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/extensions': [0],
    'import/prefer-default-export': 'off',
    'no-unused-vars': ['warn', {
      'argsIgnorePattern': '^_',
      'varsIgnorePattern': '^_'
    }],
    'react/require-default-props': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'no-shadow': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'off'
  },
  globals: {
    '__IS_DEV__': true
  }
}
