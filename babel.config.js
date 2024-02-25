module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@components': './src/components',
          '@utils': './src/utils',
          '@screens': './src/screens',
          '@navigation': './src/navigation',
          '@store': './src/store',
          '@types': './src/types',
          '@service': './src/service',
          '@navigator': './src/navigator',
          '@constants': './src/constants',
          '@assets': './src/assets',
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
