module.exports = {
  plugins: ['jsx-a11y'],
  extends: [require.resolve('eslint-config-airbnb/rules/react-a11y')],
  rules: {
    'jsx-a11y/label-has-for': 'off', // rule is deprecated
  },
};
