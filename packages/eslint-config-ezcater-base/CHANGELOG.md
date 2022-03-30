# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [5.0.0] - 2022-03-30
- fix: allow eslint v8 as peer dependency
- fix: remove prettier as a peer dependency
- fix: remove unused dep eslint-plugin-jsx-a11y

### Breaking changes
- Drop support for `eslint-plugin-prettier`, which is no longer recommended by Prettier. This is a breaking change because if consumers have any code comments including `prettier/prettier` eslint will now fail. Consumers are now expected to run `prettier --check` in CI if they want to keep the code quality validation. It's recommended to use `prettier --write` in lint-staged if you want to auto-format code and or use VSCode Prettier extension.
