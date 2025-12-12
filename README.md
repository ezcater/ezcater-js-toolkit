[!CAUTION]
This library is deprecated and should no longer be used. It has not been maintained for a long time and many of its dependencies are outdated. Please use the guidance below when configuring new projects.

Base settings
- `Prettier`: https://github.com/ezcater/tapas/blob/main/prettier.config.mjs
- `ESLint`: https://github.com/ezcater/tapas/blob/main/eslint.config.mjs

Additional packages you may need depending on your project
- `@eslint/js`, the recommended JavaScript configuration from ESLint
- `eslint-config-prettier`, which turns off rules handled by Prettier
- `eslint-plugin-import` and `eslint-plugin-simple-import-sort` for projects that need consistent import sorting. We have commonly used `@/` and `~/` as path aliases.
- `eslint-plugin-react` and `eslint-plugin-react-hooks`, using the recommended configs
- `typescript-eslint` for TypeScript projects, including both recommended and stylistic configs
- `eslint-plugin-storybook` if your project uses Storybook
- `eslint-plugin-testing-library` if you use Testing Library utilities (works for more than React)

# ezCater JS Toolkit

A home for ezCater's JavaScript style rules, configuration, and tooling.

See `/packages` for our different JS linting packages and usage instructions.

## Package Release Process

After merging changes to the main branch:

1. Open a pull request with only the version change in the package's `package.json` and in the `CHANGELOG.md` file copying the “Unreleased” section and pasting to a new section for the version.

1. Merge the pull request.

1. Checkout the main branch and ensure you’re on the latest commit.

1. Tag the version (fill in the correct version number): `git tag package-name-here@X.X.X -m "package-name-here@X.X.X"`

1. Push: `git push --tags`

1. Publish: `yarn workspace package-name-here publish --new-version X.X.X`

    This will require access to the [ezCater organization](https://www.npmjs.com/org/ezcater) on [NPM](https://www.npmjs.com).

1. Create a new [release](https://github.com/ezcater/ezcater-js-toolkit/releases) and document the changes.
