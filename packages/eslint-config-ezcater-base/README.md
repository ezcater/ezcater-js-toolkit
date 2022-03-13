# eslint-config-ezcater-base

[![npm version](https://badge.fury.io/js/eslint-config-ezcater-base.svg)](https://badge.fury.io/js/eslint-config-ezcater-base)

## Usage

Our default export contains our base ESLint rules, including ECMAScript 6+.

1.  Install the package as a dev dependency for your project:

```sh
# NPM
npm i eslint-config-ezcater-base --save-dev

# Yarn
yarn add eslint-config-ezcater-base -D
```

2.  Add `ezcater-base` to the `extends` section of your project's `.eslintrc`:

```json
{
  "extends": ["ezcater-base"]
}
```

3.  Add optional scripts to your `package.json` to run linting checks:

```json
"scripts": {
  "fix:lint": "eslint . --fix",
  "validate:lint": "eslint .",
}
```
