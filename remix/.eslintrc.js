module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:react/jsx-runtime',
    'plugin:storybook/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['unused-imports', 'react', '@typescript-eslint', 'prettier'],
  rules: {
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    'import/prefer-default-export': 0,
    'jsx-a11y/anchor-is-valid': [1],
    'import/no-unresolved': 0,
    'import/extensions': [
      0,
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    quotes: [1, 'single'],
    'object-curly-newline': [0],
    'import/no-extraneous-dependencies': [
      0,
      { devDependencies: false, optionalDependencies: false, peerDependencies: false },
    ],
    'react/function-component-definition': [0],
    'react/require-default-props': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-one-expression-per-line': 0,
  },
};
