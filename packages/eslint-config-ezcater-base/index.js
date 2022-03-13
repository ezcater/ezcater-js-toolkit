module.exports = {
  env: {
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'airbnb-base/rules/strict',
    './rules/base.js',
    './rules/import.js',
    // `eslint-config-prettier` requires `prettier` is last so it overrides
    // other configs.
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  rules: {},
};
