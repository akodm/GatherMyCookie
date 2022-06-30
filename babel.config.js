module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require('babel-plugin-module-resolver'),
      {
        root: ['.'],
        extensions: [
          '.android.ts',
          '.android.tsx',
          '.ts',
          '.tsx',
          '.js',
          '.jsx',
          '.json'
        ],
        alias: {
          
        }
      }
    ]
  ]
};
