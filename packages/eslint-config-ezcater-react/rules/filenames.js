module.exports = {
  plugins: ['filenames'],
  rules: {
    'filenames/match-regex': ['error', '^[.a-zA-Z0-9]+$'],
    'filenames/match-exported': 'error',
  },
};
