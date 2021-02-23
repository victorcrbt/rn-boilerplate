module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-root-import',
      {
        paths: [
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
    ],
  ],
};
