console.warn(
  '\x1b[33m⚠️  DEPRECATION WARNING:\x1b[0m eslint-config-ezcater-base is deprecated and no longer maintained.\n' +
    'See https://github.com/ezcater/ezcater-js-toolkit for migration guidance.\n'
);

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
