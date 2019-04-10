<div align="center">
<h1>ez-scripts 🛠📦</h1>

<p>CLI toolbox for common scripts at ezcater</p>
</div>

## The problem

Spinning up new projects is time consuming and maintaining development workflow solutions across multiple projects doesn't scale well. There are many different dependencies to install to support a typical development workflow (linters, testing frameworks, bundlers) and each require configurations to be in place. Once you have a running project, you may end up writing a lot of boilerplate code when creating commonly used files and copy-pasta-ing configuration across different projects.

## This solution

Tool kits are a way to mitigate these kinds of problems. They encapsulate as much as possible of the your tool chain into a single dependency and expose it through a CLI.

This CLI that abstracts away all configuration for our development workflow tooling for linting, testing, building, and more. Instead of projects having to keep all their dependencies up-to-date, they can simply install the latest ez-scripts and we'll take care of the rest.

- You don't need to set up any tooling when creating a new project. Bootstrap it and start coding. :rocket:
- When you need to update a tooling dependency or change a configuration, update ez-scripts and we'll do the heavy lifting for you! :sparkles:
- Make the way you write JavaScript more consistent. All your projects will work exactly the same. :straight_ruler:
- Easy onboarding. New colleagues will be able to get productive much more quickly. 🙇‍♂️
- The number of direct dependencies becomes _much_ smaller and your `package.json` shorter. :spider_web:

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Bootstrap configuration files](#Bootstrap-configuration-files)
  - [Running tooling through ez-scripts](#Running-tooling-through-ez-scripts)
  - [Use ez-scripts for your package.json scripts](use-ez-scripts-for-your-packagejson-scripts)
  - [Overriding Config](#overriding-config)
- [Inspiration](#inspiration)
- [LICENSE](#license)

## Installation

This module is distributed via [npm](https://www.npmjs.com/) which is bundled with [node](https://nodejs.org) and should be installed as one of your project's `devDependencies`:

```
npm install --save-dev @ezcater/ez-scripts
```

## Usage

Once you've installed `ez-scripts`, you can bootstrap configuration files to support your local development tools. For example, if you have an IDE plugin to run prettier every time you save a file, the prettier configuration file will ensure your prettier settings are consistent with ezcater's preset configuration.

### Bootstrap configuration files

Bootstrap our configuration files as follows:

```bash
# Bootstraps the eslint and prettier config files using our preset for ESLint and our preset for prettier.
$ npx ez-scripts init --all
```

Alternatively, Bootstrap or update a specific configuration file to match ezcater's preset
configuration as follows:

```bash
# Bootstraps just the prettier files using our preset for prettier.
$ npx ez-scripts init --prettier
```

### Running tooling through ez-scripts

`ez-scripts` manages all supported CLI tools for you (so you're free from keeping them up-to-date). Each supported tool is run through `ez-scripts` from the terminal. For example, to run ESLint through `ez-scripts`, you would run `ez-scripts lint` from the terminal. Note that you can use any of the command line flags and arguments supported by ESLint and other tools; `ez-scripts` simply forwards them so they are handled by the tool.

For example, to have ESLint fix linting errors in the `src` directory, run `ez-scripts eslint --fix src`.

### Use ez-scripts for your `package.json` scripts

For automation purposes and easier access, you will want to alias frequently used commands as scripts in your `package.json`. We'll set you up with a few when you [bootstrap your application](#Bootstrap-configuration-files).

```json
"scripts": {
  "lint": "ez-scripts lint",
  "lint:fix": "ez-scripts lint --fix",
}
```

### Overriding Config

Unlike `react-scripts`, `ez-scripts` allows you to specify your own configuration for things and have that plug directly into the way things work with `ez-scripts`. If you want to have your own config for something, just add the configuration and `ez-scripts` will use that instead of it's own internal config. In addition, `ez-scripts` exposes its configuration so you can use it and override only the parts of the config you need to.

This can be a very helpful way to make editor integration work for tools like ESLint which require project-based ESLint configuration to be present to work.

We'll set you up with a few when you [bootstrap your application](#Bootstrap-configuration-files), but as an example, you could create an `.eslintrc` with the contents of:

```json
{
  "extends": "./node_modules/ez-scripts/eslint.js",
  "rules": {
    "no-console": "off"
  }
}
```

## List of commands

At the moment, `ez-scripts` supports two commands; `init` and `lint`. They allow you to set up your local development environment with linting and formatting support, and cli scripts to run the tools. The tools we support are [ESlint](https://eslint.org) (with [Prettier](https://prettier.io)), and we have plans to add tooling for building, packaging, scaffolding components and eventually, scaffolding libraries and applications. We will add more documentation here as our supported tooling grows. For now, you can try `ez-scripts --help` or `ez-scripts {command} --help` to see your options.

## Inspiration

This is inspired by `react-scripts` and `kcd-scripts`.

## LICENSE

MIT
