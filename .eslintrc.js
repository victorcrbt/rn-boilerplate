module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    '@react-native-community',
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'react-hooks', 'jsx-a11y', 'import'],
  rules: {
    'no-restricted-syntax': 'off',
    'class-methods-use-this': 'off',
    'import/extensions': [
      'error',
      {
        jsx: 'never',
        js: 'never',
        json: 'always',
      },
    ],
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.js'],
      },
    ],
    'import/prefer-default-export': 'off',
    'arrow-body-style': 'off',
    'react/prop-types': 'error',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'global-require': 'off',
    'no-param-reassign': 'off',
    camelcase: 'off',
    'no-console': 'off',
    'react-hooks/rules-of-hooks': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'consistent-return': 'off',
    'no-return-assign': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js'],
      },
      'babel-plugin-root-import': [
        {
          rootPathSuffix: 'src',
        },
        {
          rootPathPrefix: '@screens/',
          rootPathSuffix: 'src/screens',
        },
        {
          rootPathPrefix: '@config/',
          rootPathSuffix: 'src/config',
        },
        {
          rootPathPrefix: '@components/',
          rootPathSuffix: 'src/components',
        },
        {
          rootPathPrefix: '@helpers/',
          rootPathSuffix: 'src/helpers',
        },
        {
          rootPathPrefix: '@services/',
          rootPathSuffix: 'src/services',
        },
        {
          rootPathPrefix: '@store/',
          rootPathSuffix: 'src/store',
        },
        {
          rootPathPrefix: '@hooks/',
          rootPathSuffix: 'src/hooks',
        },
        {
          rootPathPrefix: '@contexts/',
          rootPathSuffix: 'src/contexts',
        },
        {
          rootPathPrefix: '@database/',
          rootPathSuffix: 'src/database',
        },
        {
          rootPathPrefix: '@i18n/',
          rootPathSuffix: 'src/i18n',
        },
        {
          rootPathPrefix: '@constants/',
          rootPathSuffix: 'src/constants',
        },
      ],
    },
  },
};
