# Cryptfolio

![Cryptfolio CI](https://github.com/0xReplicant/cryptfolio/workflows/Build%20and%20test/badge.svg)

A command-line application for checking cryptocurrency prices. 🚀

## Table of contents:

- [Prerequisites](#prerequisites)
- [Getting started](#getting-started)
- [Debugging](#debugging)
- [Testing](#testing)
- [Linting & Prettifying](#linting--prettifying)
- [Documentation](#documentation)
- [VSCode Extensions](#vscode-extensions)

## Prerequisites

To build and run this app locally you will need a few things:

- Install: [Node.js v14.x](https://nodejs.org/en/)
- Install: [Yarn](https://yarnpkg.com) with `npm install --global yarn`

## Getting Started

**Install the application**

    git clone --depth=1 https://github.com/0xReplicant/cryptfolio.git
    cd cryptfolio
    yarn install

**Build and run the project**

    yarn build
    yarn cli

### Useful scripts

To call a script, simply run `yarn <script-name>` from the command line.

Below is a list of all the scripts this template has available:

| Script            | Description                                                                      |
| ----------------- | -------------------------------------------------------------------------------- |
| `build`           | Cleans thn workspace and builds the application into the ./dist folder.          |
| `build:ts`        | Builds the TypeScript declarations.                                              |
| `build:node`      | Builds the application into the ./dist folder.                                   |
| `build:node:watch`| Builds the application and watches for changes.                                  |
| `build:node:dev`  | Builds a non minified version of the application for debugging,                  |
| `clean`           | Removes all generated files and builds and re-installs the applications modules. |
| `cli`             | Runs the CLI app with ts-node for development.                                   |
| `docs`            | Creates the typedocs documentation for the application.                          |
| `lint`            | Runs a combination of TypeScript type checking, ESLint and Prettier.             |
| `format`          | Runs the above lint task but tries to fix / write any simple fixes               |
| `prepare`         | Runs the husky install script to setup git hooks                                 |
| `test`            | Runs all the applications tests with Jest.                                       |
| `test:coverage`   | As above but runs with the `--coverage` flag cor code coverage.                  |
| `test:watch`      | Keeps the Jest test runner running in watch mode for changes.                    |

## Testing

Run the tests with `yarn test`, no separate compile step is necessary.

* See also the [Jest documentation](https://jestjs.io/docs/getting-started).
* The tests can be automatically run in CI (GitHub Actions, GitLab CI): [`.github/workflows/build-and-test.yml`](https://github.com/0xReplicant/cryptfolio/blob/master/.github/workflows/build-and-test.yml).


## Linting & Prettifying

[ESLint](https://eslint.org) and [Prettier](https://prettier.io) are used in combination to help catch minor code quality and style issues.

### Running Linting

The linting and prettifying is all run through a single command

    yarn lint

## Documentation

You can auto-generate API documentation from the TyoeScript source files using [TypeDoc](https://typedoc.org/guides/doccomments/). The generated documentation can be published to GitHub / GitLab pages through the CI.

Generate the documentation, using `src/main.ts` as entrypoint (configured in package.json):

    yarn docs

The resulting HTML is saved in `docs/`.

You can publish the documentation through CI:
* [GitHub pages](https://pages.github.com/): See [`.github/workflows/deploy-gh-pages.yml`](https://github.com/0xReplicant/cryptfolio/blob/master/.github/workflows/deploy-gh-pages.yml)

This is the documentation for this project: https://0xReplicant.github.io/cryptfolio/

## VSCode Extensions

To enhance your development experience while working in VSCode, a list of the suggested extensions for working with this project:

- [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Jest](https://marketplace.visualstudio.com/items?itemName=orta.vscode-jest)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
