# eslint-config-ezcater-react

[![npm version](https://badge.fury.io/js/eslint-config-ezcater-react.svg)](https://badge.fury.io/js/eslint-config-ezcater-react)

## Usage

Package extends [our base ESLint rules](https://www.npmjs.com/package/eslint-config-ezcater-base), and includes rules for React, JSX, and Jest.

1.  Install the package as a dev dependency for your project:

```sh
npm i eslint-config-ezcater-react --save-dev
```

2.  Add `ezcater-react` to the `extends` section of your project's `.eslintrc`:

```json
extends: ['ezcater-react'],
```

3.  Add optional scripts to your `package.json` to run linting checks:

```json
"scripts": {
  "fix:lint": "eslint . --fix",
  "validate:lint": "eslint .",
}
```

4. ESLint is configured here to run Prettier along with the other linting rules. But if your text editor supports a Prettier integration, you will probably need to copy the rules in `./rules/prettier.js` into a `.prettierrc` in your project's root directory:

```json
...in .prettierrc

{
  "singleQuote": true,
  "printWidth": 100,
  "trailingComma": "es5",
  etc...
}
```