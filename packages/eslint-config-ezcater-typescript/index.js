module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    './rules/typescript.js',
  ],
  settings: {
    parser: 'typescript-eslint-parser',
    plugins: ['import'],
    'import/resolver': {
      typescript: {},
    },
  },
};
