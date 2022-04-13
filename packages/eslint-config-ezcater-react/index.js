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
    './rules/filenames.js',
    './rules/jsxally.js',
    './rules/react.js',
    // `eslint-config-prettier` requires `prettier` is last so it overrides
    // other configs.
    'prettier',
  ],
};
