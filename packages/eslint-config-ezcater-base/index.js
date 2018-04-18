module.exports = {
  env: {
    es6: true,
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    './rules/base.js',
    './rules/prettier.js',
    './rules/react.js',
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  plugins: ['prettier'],
  rules: {},
};
