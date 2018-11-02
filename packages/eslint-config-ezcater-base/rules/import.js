module.exports = {
  rules: {
    'import/default': 'error',
    'import/extensions': ['error', 'never', {svg: 'always'}],
    'import/first': 'error',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/no-commonjs': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-named-as-default': 'off',
    'import/no-named-default': 'error',
    'import/no-namespace': 'error',
    'import/no-unresolved': 'error',
    'import/no-webpack-loader-syntax': 'error',
    'import/order': 'error',
  },
};
