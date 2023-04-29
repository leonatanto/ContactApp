module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'], // if your files are in `src` folder
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.json',
          '.ts',
          '.tsx',
          '.png',
        ], // if using TypeScript
        alias: {
          // For development you can set your image folder like this
          '@images': './src/assets/images',
        },
      },
    ],
  ],
};
