module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier/react',
    'ezcater-base',
    './rules/filenames.js',
    './rules/jsxally.js',
    './rules/react.js',
  ],
  parser: 'babel-eslint',
};
