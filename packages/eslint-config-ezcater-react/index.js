console.warn(
  '\x1b[33m⚠️  DEPRECATION WARNING:\x1b[0m eslint-config-ezcater-react is deprecated and no longer maintained.\n' +
    'See https://github.com/ezcater/ezcater-js-toolkit for migration guidance.\n'
);

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
