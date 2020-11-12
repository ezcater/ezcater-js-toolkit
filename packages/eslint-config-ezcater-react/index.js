module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'ezcater-base',
    'prettier/react',
    './rules/filenames.js',
    './rules/jsxally.js',
    './rules/react.js',
  ],
  parser: '@babel/eslint-parser',
};
