module.exports = {
  plugins: ['react', 'react-hooks'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react/display-name': 'off',
    'react/jsx-key': 'error',
    'react/jsx-filename-extension': 'off',
    'react/no-array-index-key': 'off',
    'react/no-danger': 'off',
    'react/no-direct-mutation-state': 'error',
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  settings: {
    react: {
      version: '16.0',
    },
  },
};
