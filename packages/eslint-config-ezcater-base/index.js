module.exports = {
  env: {
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'airbnb-base/rules/strict',
    'prettier',
    './rules/base.js',
    './rules/import.js',
    './rules/prettier.js',
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  plugins: ['prettier'],
  rules: {},
};
